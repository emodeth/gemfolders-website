"use client";

import { createPortal } from "react-dom";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          as="a"
          href="https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi"
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="h-8 whitespace-nowrap rounded-full border-0 bg-primary px-3 text-xs font-semibold text-primary-foreground hover:opacity-90 dark:text-white"
        >
          Download
        </Button>
        <button
          ref={buttonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <Portal>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu-wrapper"
              className="fixed inset-x-0 top-[5.25rem] z-[60] flex justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                ref={menuRef}
                initial={{ y: -10, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto mx-4 flex w-full max-w-[min(100%,28rem)] flex-col rounded-md bg-white/90 p-1 shadow-xs backdrop-blur-sm dark:bg-neutral-800/90 dark:shadow-2xl dark:shadow-black lg:hidden"
              >
                <nav
                  className="flex w-full flex-col font-medium"
                  aria-label="Main"
                >
                  {navLinks.map((link) => {
                    const isCurrent =
                      !link.href.startsWith("#") && pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="block w-full px-4 py-2 text-sm text-foreground  transition-opacity aria-[current=page]:opacity-100"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
};

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};

export default MobileNavbar;

"use client";

import { createPortal } from "react-dom";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavbar = () => {
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          href="#download"
          size="sm"
          className="whitespace-nowrap text-xs h-8 px-3"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "#download")}
        >
          Download
        </Button>
        <button
          ref={buttonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <Portal>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu-wrapper"
              className="fixed inset-x-0 top-24 z-[60] flex justify-center pointer-events-none"
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
                className="pointer-events-auto w-full max-w-5xl mx-4 flex flex-col bg-background/80 dark:bg-background/60 backdrop-blur-xl shadow-lg rounded-2xl p-4 lg:hidden"
                style={{
                  boxShadow:
                    "rgba(17, 24, 28, 0.08) 0px 0px 0px 1px, rgba(17, 24, 28, 0.08) 0px 1px 2px -1px, rgba(17, 24, 28, 0.04) 0px 2px 4px",
                }}
              >
                <nav className="flex flex-col gap-2 items-start justify-center flex-1 w-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="w-full px-4 py-3 text-lg font-medium text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
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

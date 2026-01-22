"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex items-center justify-between w-full max-w-5xl px-10 mx-auto bg-transparent py-7">
      <div className="hidden lg:flex flex-row items-center justify-center gap-2">
        <Logo />
      </div>

      <div className="fixed inset-x-0 z-50 flex items-center justify-center top-6">
        <div
          className={`mx-4 flex w-full items-center justify-center overflow-hidden rounded-full backdrop-blur-md transition-all duration-300 ease-out lg:w-auto ${isScrolled
            ? "bg-background/60 dark:bg-background/40 px-4 py-3 lg:px-3 lg:py-2.5"
            : "bg-background/40 dark:bg-background/20 px-3 py-2.5 lg:p-1.5 lg:py-2"
            }`}
          style={{
            boxShadow: isScrolled
              ? "rgba(17, 24, 28, 0.08) 0px 0px 0px 1px, rgba(17, 24, 28, 0.08) 0px 1px 2px -1px, rgba(17, 24, 28, 0.04) 0px 2px 4px"
              : "rgba(17, 24, 28, 0.08) 0px 0px 0px 0px, rgba(17, 24, 28, 0.08) 0px 0px 0px 0px, rgba(17, 24, 28, 0.04) 0px 0px 0px",
          }}
        >
          <ul className="flex flex-row justify-between w-full h-full gap-6 lg:flex-row lg:justify-start lg:gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="hidden items-center justify-center px-2 py-0.5 lg:flex"
              >
                <Link
                  href={link.href}
                  className="font-medium text-muted-foreground transition-all hover:text-muted-foreground/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-w-[150px] opacity-100 translate-x-0" : "max-w-0 opacity-0 translate-x-12"
                }`}
            >
              <Button as="a" href="#download" size="sm" className="whitespace-nowrap text-[16px]">
                Download
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

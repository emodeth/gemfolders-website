"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-medium text-muted-foreground transition-all hover:text-muted-foreground/90 hover:bg-muted px-2 py-1 rounded-[4px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-medium text-background transition-all hover:bg-primary/90"
          >
            <span>Download</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/data";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const showScrolled = isScrolled || isMobile;

  return (
    <header className="flex items-center justify-between w-full max-w-5xl px-10 mx-auto bg-transparent py-7">
      <div className="hidden min-[769px]:flex flex-row items-center justify-center gap-2">
        <Logo className="text-4xl" />
      </div>

      <div className="fixed inset-x-0 z-50 flex items-center justify-center top-6 pointer-events-none">
        <div
          className={`pointer-events-auto mx-4 flex w-full items-center justify-center overflow-hidden rounded-full backdrop-blur-md transition-all duration-300 ease-out min-[769px]:w-auto ${showScrolled
            ? "bg-background/80 dark:bg-background/60 shadow-md px-4 py-3 min-[769px]:px-3 min-[769px]:py-2.5"
            : "bg-background/40 dark:bg-background/20 px-3 py-2.5 min-[769px]:p-1.5 min-[769px]:py-2"
            }`}
          style={{
            boxShadow: showScrolled
              ? "rgba(17, 24, 28, 0.08) 0px 0px 0px 1px, rgba(17, 24, 28, 0.08) 0px 1px 2px -1px, rgba(17, 24, 28, 0.04) 0px 2px 4px"
              : "rgba(17, 24, 28, 0.08) 0px 0px 0px 0px, rgba(17, 24, 28, 0.08) 0px 0px 0px 0px, rgba(17, 24, 28, 0.04) 0px 0px 0px",
          }}
        >
          <ul className="flex flex-row justify-between items-center w-full h-full gap-6 min-[769px]:flex-row min-[769px]:justify-start min-[769px]:gap-1">
            <li className="flex min-[769px]:hidden items-center">
              <Logo className="text-xl" />
            </li>

            {navLinks.map((link) => (
              <li
                key={link.label}
                className="hidden items-center justify-center px-2 py-0.5 min-[769px]:flex font-medium"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-medium text-muted-foreground transition-all hover:text-muted-foreground/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <div
              className={`hidden min-[769px]:block overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-w-[150px] opacity-100 translate-x-0" : "max-w-0 opacity-0 translate-x-12"
                }`}
            >
              <Button
                as="a"
                href="#download"
                size="sm"
                className="whitespace-nowrap text-[16px]"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "#download")}
              >
                Download
              </Button>
            </div>

            <li className="flex min-[769px]:hidden items-center gap-2">
              <MobileNavbar />
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden min-[769px]:flex flex-row items-center justify-center gap-2">
        <Button
          as="a"
          href="#download"
          size="sm"
          className="whitespace-nowrap px-6 py-2.5 rounded-sm cursor-pointer">
          Add to Browser
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

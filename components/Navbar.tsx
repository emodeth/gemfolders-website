"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/gemini-folders-bookmarks/dnlonnjaceadodcffgillnlkgfoaclfi";

const Navbar = () => {
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <div className="pointer-events-auto shadow-xs mx-auto flex w-full max-w-[min(100%,28rem)] items-center justify-between rounded-full bg-white/90 p-1 backdrop-blur-sm dark:bg-neutral-800/90 dark:shadow-2xl dark:shadow-black md:w-fit md:max-w-none md:justify-center">
        <Logo />

        <ul className="hidden items-center justify-end font-medium md:flex">
          {navLinks.map((link) => {
            const isCurrent =
              !link.href.startsWith("#") && pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-4 py-2 text-foreground text-sm opacity-70 transition-opacity hover:opacity-100 aria-[current=page]:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 aria-[current=page]:opacity-100 dark:text-white md:ml-4"
            >
              Download
            </a>
          </li>
        </ul>

        <div className="flex shrink-0 items-center pr-0.5 md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

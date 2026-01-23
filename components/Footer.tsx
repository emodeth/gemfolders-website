"use client";

import Link from "next/link";
import { footerData } from "@/lib/data";
import { Gem, Share2, Mail, ShieldCheck, BadgeCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Gem className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Gem
              </span>
            </Link>
            <p className="text-secondary text-base max-w-xs leading-relaxed">
              {footerData.description}
            </p>

          </div>

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="font-bold text-foreground">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-secondary hover:text-secondary/80 text-sm transition-colors duration-75"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary font-medium">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-2 text-sm text-secondary">
            <BadgeCheck className="w-4 h-4 text-secondary" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

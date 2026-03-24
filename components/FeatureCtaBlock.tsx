"use client";

import { motion } from "framer-motion";
import { featureTextItemVariants } from "@/lib/feature-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function FeatureCtaBlock({
  href,
  label,
  isExternal,
  prefersReducedMotion,
}: Readonly<{
  href: string;
  label: string;
  isExternal: boolean;
  prefersReducedMotion: boolean | null;
}>) {
  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <motion.div
      variants={featureTextItemVariants(prefersReducedMotion)}
      className="pt-1"
    >
      <Button
        as="a"
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        size="sm"
        className="font-medium! px-4! py-2!"
      >
        View how it works
      </Button>
    </motion.div>
  );
}

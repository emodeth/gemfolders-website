import type { Variants } from "framer-motion";

const springSoft = {
  type: "spring" as const,
  stiffness: 90,
  damping: 22,
  mass: 0.9,
};

const springSnappy = {
  type: "spring" as const,
  stiffness: 120,
  damping: 26,
  mass: 0.75,
};

/** Orchestrates headline → subcopy → CTA */
export function heroContainerVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0, delayChildren: 0 },
      },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.05,
      },
    },
  };
}

/** Stagger the two headline lines */
export function heroTitleContainerVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.085,
        delayChildren: 0,
      },
    },
  };
}

export function heroTitleLineVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springSnappy,
    },
  };
}

export function heroBodyVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springSoft,
    },
  };
}

export function heroCtaVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      },
    };
  }
  return {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        y: springSoft,
        scale: springSoft,
        opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };
}

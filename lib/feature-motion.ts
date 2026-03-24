import type { Variants } from "framer-motion";

/** Shared easing for feature entrances */
export const featureEase = [0.22, 1, 0.36, 1] as const;

/**
 * Feature rows are tall — require a slice of the block to be visible so
 * animations don’t fire while the section is barely on screen.
 */
export const featureBlockViewport = {
  once: true as const,
  amount: 0.32,
  margin: "0px 0px -12% 0px",
};

/** Header is shorter; slightly higher visibility threshold. */
export const featureHeaderViewport = {
  once: true as const,
  amount: 0.55,
  margin: "0px 0px -8% 0px",
};

/** Stagger between the text column and the media column */
export function featureRowContainerVariants(
  reducedMotion: boolean | null
): Variants {
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
        staggerChildren: 0.18,
        delayChildren: 0.04,
      },
    },
  };
}

/** Stagger title → description inside the text column */
export function featureTextColumnVariants(
  reducedMotion: boolean | null
): Variants {
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
        staggerChildren: 0.1,
        delayChildren: 0.02,
      },
    },
  };
}

export function featureTextItemVariants(
  reducedMotion: boolean | null
): Variants {
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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: featureEase },
    },
  };
}

export function featureMediaVariants(reducedMotion: boolean | null): Variants {
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
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.62, ease: featureEase },
    },
  };
}

export function featureHeaderContainerVariants(
  reducedMotion: boolean | null
): Variants {
  if (reducedMotion) {
    return {
      hidden: {},
      visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };
}

export function featureHeaderItemVariants(
  reducedMotion: boolean | null
): Variants {
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
      transition: { duration: 0.55, ease: featureEase },
    },
  };
}

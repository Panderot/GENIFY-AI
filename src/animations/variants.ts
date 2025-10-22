import { Variants } from 'framer-motion';

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Fade in variants
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Stagger container for lists/grids
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item for individual elements
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Scale variants for buttons and interactive elements
export const scaleVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

// Card hover variants
export const cardHoverVariants: Variants = {
  hover: {
    y: -4,
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

// Modal variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

// Backdrop variants
export const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

// Hero section variants
export const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Text stagger variants for hero headings
export const textStaggerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const textItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide variants for mobile menu
export const slideVariants: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
    },
  },
};

// Count up animation variants
export const countUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Image loading variants
export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Accordion variants
export const accordionVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Icon rotation variants
export const iconRotateVariants: Variants = {
  hover: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Social icon variants
export const socialIconVariants: Variants = {
  hover: {
    rotate: 5,
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Form input variants
export const inputVariants: Variants = {
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Button loading variants
export const buttonLoadingVariants: Variants = {
  loading: {
    opacity: 0.7,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
  success: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};


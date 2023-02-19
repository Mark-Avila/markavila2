import { Variants } from "framer-motion";

const pageTransitions: Variants = {
  hidden: { y: "10%", opacity: 0 },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.5 }
  },
  exit: {
    x: "-10%",
    opacity: 0,
    transition: { type: "spring", duration: 0.5 }
  }
};

const letterSlideUp: Variants = {
  hidden: {
    y: "150%"
  },
  show: {
    y: 0
  }
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
};

const popScale: Variants = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1
  }
};

const eases = {
  slideUp: [0.65, 0, 0.35, 1]
};

export const global = {
  fadeIn,
  pageTransitions,
  letterSlideUp,
  popScale,
  eases
};

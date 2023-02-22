import { Variants } from "framer-motion";

const headerSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: "200%"
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
      delay: 0.6
    }
  }
};

const textSlide: Variants = {
  hidden: {
    opacity: 0,
    x: -300
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: [0, 0.9, 0, 0.9], duration: 0.7, delay: 0.5 }
  }
};

export const aboutVariants = {
  headerSlideUp,
  textSlide
};

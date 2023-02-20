import { Variants } from "framer-motion";

const imageSlide = (direction: string | undefined) => {
  return {
    hidden: { x: direction === "right" ? 100 : -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exit: {
      x: direction === "right" ? -100 : 100,
      opacity: 0
    }
  };
};

const projectsStagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2
    }
  }
};

export const projectVariants = {
  imageSlide,
  projectsStagger
};

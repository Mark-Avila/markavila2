import { Variants } from "framer-motion";

const h1Stagger = (stagger: number, delayC: number, delay: number) => {
  return {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delayC,
        delay: delay
      }
    },
    exit: {
      opacity: 0
    }
  };
};

const textPop: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    y: [0, -20, 0],
    transition: {
      type: "spring",
      delay: 0.5
    }
  }
};

const iconStagger = (stagger: number, delayC: number) => {
  const vars: Variants = {
    hidden: {
      opacity: 1
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delayC,
        staggerChildren: stagger
      }
    }
  };

  return vars;
};

const iconPop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  show: {
    opacity: 1,
    scale: 1
  }
};

const iconSlideLeft: Variants = {
  hidden: {
    x: "500"
  },
  show: {
    x: 0
  }
};

export const homeVariants = {
  h1Stagger,
  textPop,
  iconPop,
  iconStagger,
  iconSlideLeft
};

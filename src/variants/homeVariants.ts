import { Variants } from "framer-motion";

const h1Stagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
      delay: 1
    }
  }
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

const iconStagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3.2,
      delay: 3.2
    }
  }
};

const iconPop: Variants = {
  hidden: {
    scale: 0
  },
  show: {
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

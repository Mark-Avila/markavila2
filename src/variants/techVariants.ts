import { Variants } from "framer-motion";
import { global } from "./global";

const techTabsStagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1
    }
  }
};

const techListStagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};

const techItemStagger1: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.4
    }
  }
};

const techItemStagger2: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.9
    }
  }
};

const textSlideRight: Variants = {
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

export const techVariants = {
  techTabsStagger,
  techItemStagger1,
  techItemStagger2,
  textSlideRight
};

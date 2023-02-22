import { Variants } from "framer-motion";

const mbDropdown: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      delay: 0.3
    }
  },
  show: {
    height: 500,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3
    }
  }
};

const mbItem: Variants = {
  hidden: {
    width: 0,
    opacity: 0
  },
  show: {
    width: "100%",
    opacity: 1
  }
};

const linkStagger: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
export const headerVariants = {
  mbDropdown,
  mbItem,
  linkStagger
};

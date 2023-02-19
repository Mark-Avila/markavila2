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

export const global = { pageTransitions };

import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

interface TechItemProps {
  icon: JSX.Element;
  title: string;
  active: boolean;
}

const TechItem = React.forwardRef<HTMLLIElement, TechItemProps>(
  ({ icon, title, active }, ref) => {
    const variants: Variants = {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: { type: "linear" },
      },
      exit: {
        scale: 0,
        opacity: 0,
        transition: { type: "linear" },
      },
    };

    return (
      <motion.li ref={ref} layout className="w-full text-center ">
        <motion.i
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex w-full items-center justify-center text-3xl lg:text-3xl text-gray-400 hover:text-white hover:cursor-pointer transition ease-in-out"
        >
          {icon}
        </motion.i>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-4 font-roboto text-sm text-gray-400 xl:text-xs"
        >
          {title}
        </motion.p>
      </motion.li>
    );
  }
);

export default TechItem;

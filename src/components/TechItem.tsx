import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

interface TechItemProps {
  icon: JSX.Element;
  title: string;
  color: string;
}

const TechItem = React.forwardRef<HTMLLIElement, TechItemProps>(
  ({ icon, title, color }, ref) => {
    const [isHovering, setHovering] = useState(false);

    const handleMouseOver = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    const variants: Variants = {
      hidden: {
        scale: 0,
        opacity: 0
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: { type: "linear" }
      },
      exit: {
        scale: 0,
        opacity: 0,
        transition: { type: "linear" }
      }
    };

    return (
      <motion.li ref={ref} layout className="w-full text-center ">
        <motion.i
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          style={{ color: isHovering ? color : "rgb(156, 163, 175)" }}
          className="flex w-full items-center justify-center text-3xl text-gray-400 transition ease-in-out hover:scale-0 hover:cursor-pointer lg:text-3xl"
        >
          {icon}
        </motion.i>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ color: isHovering ? "white" : "rgb(156, 163, 175)" }}
          className="mt-4 font-roboto text-sm transition ease-in-out xl:text-xs"
        >
          {title}
        </motion.p>
      </motion.li>
    );
  }
);

export default TechItem;

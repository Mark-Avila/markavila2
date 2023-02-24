import { AiOutlineShareAlt } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { global } from "../variants";

interface ToggleSwitchProps {
  onChange: () => void;
}

function ToggleSwitch({ onChange }: ToggleSwitchProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const toolTipVariant: Variants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        ease: "linear",
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        ease: "linear"
      }
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="relative hidden justify-center lg:flex"
    >
      <label htmlFor="toggleSwitch" className="mt-1 mr-4">
        <AiOutlineShareAlt />
      </label>
      <input
        onChange={onChange}
        className="checked:focus:border-primary checked:focus:bg-gray-800s mt-[0.3rem] mr-2 mb-1 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-800 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-gray-800 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-cyan-500 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        type="checkbox"
        role="switch"
        id="toggleSwitch"
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={toolTipVariant}
            className="absolute right-0 top-full z-50 mt-4 box-border w-52 rounded-lg bg-gray-900 p-3 transition ease-in-out"
          >
            <p className="text-xs text-gray-400">
              Disable background animations. Increases performance on slower
              devices
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToggleSwitch;

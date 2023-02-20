import { motion } from "framer-motion";
import { global } from "../variants";

interface SlideUpTextProps {
  initAnim: boolean;
  children: React.ReactNode;
}

function SlideUpText({ initAnim, children }: SlideUpTextProps) {
  return (
    <header className="overflow-hidden">
      <motion.h1
        variants={initAnim ? {} : global.letterSlideUp}
        initial="hidden"
        animate="show"
        exit="exit"
        className="custom-gradient-blue font-montserrat text-5xl font-bold text-white md:text-6xl xl:text-7xl"
      >
        {children}
      </motion.h1>
    </header>
  );
}

export default SlideUpText;

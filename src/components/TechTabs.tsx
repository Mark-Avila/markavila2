import { motion } from "framer-motion";
import { global, techVariants } from "../variants";

interface TechTabsProps {
  onClick: (key: string) => void;
  activeTab: {
    all: boolean;
    lang: boolean;
    tools: boolean;
  };
  initAnim: boolean;
}

function TechTabs({ initAnim, onClick, activeTab }: TechTabsProps) {
  //Prevents from fading out after initAnim change
  const prvnFadeOut = {
    hidden: {
      opacity: 1
    },
    show: {
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={initAnim ? prvnFadeOut : techVariants.techTabsStagger}
      className="flex h-10 w-full gap-2 xs:h-14"
    >
      <motion.button
        variants={global.fadeIn}
        onClick={() => onClick("all")}
        className={`${
          activeTab.all
            ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-full w-full rounded-l-xl font-roboto text-[0.7rem] font-bold xs:text-[0.8rem] md:h-10 md:text-xs `}
      >
        ALL
      </motion.button>
      <motion.button
        variants={global.fadeIn}
        onClick={() => onClick("lang")}
        className={`${
          activeTab.lang
            ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-full w-full font-roboto text-[0.7rem] font-bold xs:text-[0.8rem] md:h-10 md:text-xs `}
      >
        LANGUAGES
      </motion.button>
      <motion.button
        variants={global.fadeIn}
        onClick={() => onClick("tools")}
        className={`${
          activeTab.tools
            ? "purple-border--active text-white"
            : "purple-border text-gray-400"
        } h-full w-full rounded-r-xl font-roboto text-[0.7rem] font-bold xs:text-[0.8rem] md:h-10 md:text-xs `}
      >
        TOOLS
      </motion.button>
    </motion.div>
  );
}

export default TechTabs;

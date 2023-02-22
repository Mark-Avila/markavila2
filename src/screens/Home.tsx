import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { InitAnimProps } from "../App";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { global, homeVariants as vars } from "../variants";

function Home({ initAnim, onAnimDone }: InitAnimProps) {
  useEffect(() => {
    setTimeout(onAnimDone, 4000);
  }, []);

  const [lettersDone, setLettersDone] = useState(false);

  //Used to prevent the animation of staggered elements from resetting
  //idk why it does this
  const prevReset = { show: { scale: 1 } };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="flex flex-1 flex-col justify-start p-8 md:pl-12 md:pt-24 lg:pl-24 xl:pl-48"
    >
      <motion.h5
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : vars.textPop}
        className="font-montserrat text-sm text-gray-400 md:text-base lg:text-xl"
      >
        What's up! I am
      </motion.h5>
      <motion.h1
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : vars.h1Stagger}
        onAnimationComplete={() => setLettersDone(true)}
        className=" mt-2 overflow-hidden font-montserrat text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
      >
        {lettersDone || initAnim ? (
          <motion.span
            key={123523}
            variants={global.fadeIn}
            className="custom-gradient-blue"
          >
            Mark Avila
          </motion.span>
        ) : (
          "MarkAvila".split("").map((letter, index) => (
            <motion.span
              key={78274 + index}
              className="inline-block text-gray-500"
              variants={global.letterSlideUp}
              transition={{
                ease: global.eases.slideUp
              }}
            >
              {letter === "k" ? "k\u00A0" : letter}
            </motion.span>
          ))
        )}
      </motion.h1>
      <h2 className="mt-2 overflow-hidden font-montserrat text-xl font-bold text-white md:text-3xl xl:h-16 xl:text-6xl">
        <motion.span
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.letterSlideUp}
          transition={{ delay: 2.5, ease: global.eases.slideUp }}
          className="inline-block"
        >
          I like making websites
        </motion.span>
      </h2>
      <p className="mt-4 overflow-hidden font-roboto text-sm text-gray-500 md:w-1/2 xl:w-1/3 xl:text-base">
        <motion.span
          initial="hidden"
          animate="show"
          className="inline-block"
          variants={initAnim ? {} : global.letterSlideUp}
          transition={{
            delay: 3,
            ease: global.eases.slideUp
          }}
        >
          Student aspiring to be a guy that develops websites. Welcome to my
          portfolio
        </motion.span>
      </p>
      <motion.div
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : vars.iconStagger}
        transition={{ delay: 3.2 }}
        className="mt-8 flex flex-1 flex-col items-start justify-end lg:flex-none lg:flex-row lg:items-center lg:justify-start"
      >
        <motion.a
          variants={initAnim ? prevReset : vars.iconPop}
          target="_blank"
          href="https://github.com/Mark-Avila"
          className="mb-10 text-4xl text-gray-700 hover:text-gray-200 active:text-white lg:mb-0 lg:mr-8 lg:text-2xl"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : vars.iconPop}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100076620788296"
          className="mb-10 text-4xl text-gray-700 hover:text-gray-200 active:text-white lg:mb-0 lg:mr-8 lg:text-2xl"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : vars.iconPop}
          target="_blank"
          href="https://twitter.com/itsmarkavila"
          className="mb-10 text-4xl text-gray-700 hover:text-gray-200 active:text-white lg:mb-0 lg:mr-8 lg:text-2xl"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : vars.iconPop}
          target="_blank"
          href="https://www.linkedin.com/in/avilamark/"
          className="mb-10 text-4xl text-gray-700 hover:text-gray-200 active:text-white lg:mb-0 lg:mr-8 lg:text-2xl"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Home;

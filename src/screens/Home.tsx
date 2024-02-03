import { FiGithub, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { InitAnimProps } from "../App";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { global, homeVariants as vars } from "../variants";

function Home({ initAnim, onAnimDone }: InitAnimProps) {
  useEffect(() => {
    setTimeout(onAnimDone, 2500);
  }, []);

  const [lettersDone, setLettersDone] = useState(false);

  //Used to prevent the animation of staggered elements from resetting
  //idk why it does this
  const prevReset = { show: { opacity: 1, scale: 1 } };

  const delays = {
    top: 0,
    main: 1,
    subt: 1.5,
    parag: 1.7,
    icons: 1.7
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="flex flex-1 flex-col justify-start p-3 pt-0 xs:p-8 md:pl-12 md:pt-24 lg:pl-24 xl:pl-48"
    >
      <motion.h5
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : vars.textPop}
        className="font-montserrat text-xl text-gray-400 sm:text-sm md:text-base lg:text-xl"
      >
        What's up! I'm
      </motion.h5>
      <div className="relative mt-2 h-12 md:h-[3.75rem] lg:h-[4.75rem] xl:h-24">
        <AnimatePresence>
          {!initAnim && !lettersDone && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="exit"
              variants={vars.h1Stagger(0.07, delays.main, delays.main)}
              onAnimationComplete={() => setLettersDone(true)}
              className="absolute left-0 w-fit overflow-hidden font-montserrat text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {"MarkAvila".split("").map((letter, index) => (
                <motion.span
                  key={78274 + index}
                  className={`inline-block w-fit text-gray-500 ${
                    letter === "A" ? "-mr-1" : ""
                  }`}
                  variants={global.letterSlideUp}
                  transition={{
                    ease: global.eases.slideUp,
                    duration: 0.8
                  }}
                >
                  {letter === "k" ? "k\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          )}
          <motion.h1
            key={371892}
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : global.fadeIn}
            transition={{
              delay: 2.2
            }}
            className="custom-gradient-blue absolute left-0 w-fit overflow-hidden font-montserrat text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {"Mark\u00A0Avila"}
          </motion.h1>
        </AnimatePresence>
      </div>
      <h2 className="mt-2 overflow-hidden font-montserrat text-2xl font-bold text-white md:text-3xl xl:h-16 xl:text-6xl">
        <motion.span
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.letterSlideUp}
          transition={{ delay: delays.subt, ease: global.eases.slideUp }}
          className="inline-block"
        >
          I like making websites
        </motion.span>
      </h2>
      <p className="mt-4 overflow-hidden font-roboto text-sm text-gray-500 xs:text-base md:w-1/2 xl:w-1/3 xl:text-sm">
        <motion.span
          initial="hidden"
          animate="show"
          className="inline-block"
          variants={initAnim ? {} : global.letterSlideUp}
          transition={{
            delay: delays.parag,
            ease: global.eases.slideUp
          }}
        >
          Hey there! Welcome to my front-end portfolio site! Here you can check
          out some of the cool stuff I've designed and developed. Come on in and
          have a look around!
        </motion.span>
      </p>
      <motion.div
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : vars.iconStagger(0.2, delays.icons)}
        className="mt-8 flex flex-1 items-start justify-start gap-4 md:flex-none md:flex-row md:items-center md:justify-start"
      >
        <motion.a
          variants={initAnim ? prevReset : global.fadeIn}
          target="_blank"
          href="https://github.com/Mark-Avila"
          className="mb-10 text-3xl text-gray-700 transition ease-in-out hover:text-gray-200 active:text-white sm:text-4xl md:mb-0 md:mr-8 md:text-2xl"
        >
          <FiGithub />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : global.fadeIn}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100076620788296"
          className="mb-10 text-3xl text-gray-700 transition ease-in-out hover:text-gray-200 active:text-white sm:text-4xl md:mb-0 md:mr-8 md:text-2xl"
        >
          <FiFacebook />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : global.fadeIn}
          target="_blank"
          href="https://twitter.com/itsmarkavila"
          className="mb-10 text-3xl text-gray-700 transition ease-in-out hover:text-gray-200 active:text-white sm:text-4xl md:mb-0 md:mr-8 md:text-2xl"
        >
          <FiTwitter />
        </motion.a>
        <motion.a
          variants={initAnim ? prevReset : global.fadeIn}
          target="_blank"
          href="https://www.linkedin.com/in/avilamark/"
          className="mb-10 text-3xl text-gray-700 transition ease-in-out hover:text-gray-200 active:text-white sm:text-4xl md:mb-0 md:mr-8 md:text-2xl"
        >
          <FiLinkedin />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Home;

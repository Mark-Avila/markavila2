import { Variants, delay, motion } from "framer-motion";
import { InitAnimProps } from "../App";
import { useEffect } from "react";
import { global } from "../variants";

function Contact({ onAnimDone, initAnim }: InitAnimProps) {
  useEffect(() => {
    setTimeout(onAnimDone, 1000);
  }, []);

  const slideUpVariant: Variants = {
    hidden: {
      y: "200%"
    },
    show: {
      y: 0
    }
  };

  const fadeInVariant: Variants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  };

  const popVariant: Variants = {
    hidden: {
      scale: 0
    },
    show: {
      scale: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="flex h-full w-full items-start justify-center p-8 lg:items-center"
    >
      <div className="px-4 lg:w-1/2">
        <div className="overflow-hidden px-0 lg:flex lg:justify-center">
          <motion.h1
            variants={initAnim ? {} : global.letterSlideUp}
            initial="hidden"
            animate="show"
            transition={{
              ease: global.eases.slideUp,
              duration: 0.5,
              delay: 0.5
            }}
            className="custom-gradient-blue font-montserrat text-5xl font-bold md:text-6xl lg:text-center"
          >
            Contact
          </motion.h1>
        </div>
        <div className="overflow-hidden px-0  lg:justify-center">
          <motion.p
            variants={initAnim ? {} : global.letterSlideUp}
            initial="hidden"
            animate="show"
            transition={{
              ease: global.eases.slideUp,
              duration: 0.5,
              delay: 0.3
            }}
            className="mt-4 font-montserrat text-2xl font-bold text-white lg:text-center"
          >
            Get in touch with me
          </motion.p>
        </div>
        <motion.p
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.fadeIn}
          transition={{
            ease: global.eases.slideUp,
            duration: 0.5
          }}
          className="mt-4 font-roboto text-gray-500 md:text-sm lg:text-center xl:px-20"
        >
          I am current a university student, which means I am not currently
          looking for full-time opportunities. However, I am looking for
          front-end internships so that I can learn the workings of the
          industry. You can email me if you have a question and I'll try my best
          to get back to you
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.popScale}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.9
          }}
          className="mt-8 py-8 px-12 md:mt-4 md:w-48 md:px-0 lg:m-0 lg:flex lg:w-full lg:justify-center"
        >
          <a
            href="mailto: markavila.dev@gmail.com"
            className="before:custom-gradient-purple-bg resume purple-shadow flex h-16 w-full items-center justify-center rounded-xl border-2 border-purple-700 font-montserrat text-lg text-white transition ease-in-out hover:text-white active:scale-95 lg:w-48"
          >
            Email me
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;

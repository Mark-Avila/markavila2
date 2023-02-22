import { useEffect, useState } from "react";
import { FaLightbulb, FaPalette } from "react-icons/fa";
import { MdDevices, MdShutterSpeed } from "react-icons/md";
import { AboutCard } from "../components";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { InitAnimProps } from "../App";
import { useMediaQuery } from "../hooks";
import { global, aboutVariants as vars } from "../variants";

function About({ initAnim, onAnimDone }: InitAnimProps) {
  useEffect(() => {
    setTimeout(onAnimDone, 3000);
  }, []);

  const notMobileScreen = useMediaQuery("(min-width: 768px)");

  const [activeInfo, setActiveInfo] = useState({
    responsive: true,
    experience: false,
    design: false,
    performance: false
  });

  const handleInfoClick = (key: string) => {
    const initialState: typeof activeInfo = {
      responsive: false,
      experience: false,
      design: false,
      performance: false
    };

    setActiveInfo({ ...initialState, [key]: true });
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={global.pageTransitions}
      className="h-full w-full md:flex md:items-start md:justify-center lg:items-center"
    >
      <div className="flex flex-col p-8 lg:w-3/4 xl:w-1/2">
        <header className="overflow-hidden">
          <motion.h1
            variants={initAnim ? {} : vars.headerSlideUp}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
              delay: 0.6
            }}
            className="custom-gradient-blue font-montserrat text-5xl font-bold text-white md:text-6xl xl:text-7xl"
          >
            About me
          </motion.h1>
        </header>
        <span className="mt-4 flex h-full overflow-hidden md:mt-8">
          <motion.div
            initial={initAnim ? {} : { height: 0 }}
            animate={initAnim ? {} : { height: "initial" }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955] }}
            className="mr-6 w-4 rounded-full bg-gray-200"
          ></motion.div>
          <motion.p
            variants={initAnim ? {} : vars.textSlide}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-clip font-roboto text-gray-400"
          >
            I am a dedicated and creative student with a focus on{" "}
            <span className="font-bold text-white">React development</span>. I
            have hands-on experience building dynamic user interfaces using{" "}
            <span className="font-bold text-white">React</span> and{" "}
            <span className="font-bold text-white">Redux</span>, and I am
            knowledgeable in modern front-end development tools and
            methodologies. I am eager to apply my skills and continue learning
            in a immersive and collaborative work environment.
          </motion.p>
        </span>

        <div className="mt-8 sm:w-1/2 md:flex md:w-full">
          <div className="md grid w-full grid-cols-4 gap-2 md:w-56 md:grid-cols-2 md:grid-rows-2">
            <motion.button
              variants={initAnim ? {} : global.fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ type: "spring", delay: 0.7 }}
              onClick={() => handleInfoClick("responsive")}
              className={`${
                activeInfo.responsive
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center rounded-l-xl p-4 text-4xl text-white md:rounded-l-none md:rounded-tl-xl`}
            >
              <MdDevices />
            </motion.button>
            <motion.button
              variants={initAnim ? {} : global.fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ type: "spring", delay: 0.9 }}
              onClick={() => handleInfoClick("experience")}
              className={`${
                activeInfo.experience
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center p-4 text-4xl text-white md:rounded-tr-xl`}
            >
              <FaLightbulb />
            </motion.button>
            <motion.button
              variants={initAnim ? {} : global.fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ type: "spring", delay: 1.2 }}
              onClick={() => handleInfoClick("design")}
              className={`${
                activeInfo.design ? "purple-border--active" : "purple-border"
              } flex w-full items-center justify-center p-4 text-4xl text-white md:rounded-bl-xl`}
            >
              <FaPalette />
            </motion.button>
            <motion.button
              variants={initAnim ? {} : global.fadeIn}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ type: "spring", delay: 1.4 }}
              onClick={() => handleInfoClick("performance")}
              className={`${
                activeInfo.performance
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center rounded-r-xl p-4 text-4xl text-white md:rounded-r-none md:rounded-br-xl`}
            >
              <MdShutterSpeed />
            </motion.button>
          </div>
          <AnimatePresence>
            <motion.div
              initial={initAnim ? {} : { opacity: 0 }}
              animate={initAnim ? {} : { opacity: 1 }}
              exit={initAnim ? {} : { opacity: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-8 md:mt-0 md:ml-12 md:w-1/2"
            >
              {activeInfo.responsive && (
                <AboutCard
                  title="Responsive"
                  body="I will make sure that my websites work properly on most devices"
                />
              )}
              {activeInfo.experience && (
                <AboutCard
                  title="User Experience"
                  body="Provide an intuitive, user-friendly experience for visitors, including easy navigation and clear information architecture."
                />
              )}
              {activeInfo.design && (
                <AboutCard
                  title="Design"
                  body="I prioritize visually appealing design in all of my projects to create a unique and memorable user experience."
                />
              )}
              {activeInfo.performance && (
                <AboutCard
                  title="Performance"
                  body="Make sure websites are optimized for fast loading times and efficient use of resources, which can impact the user experience and search engine optimization"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

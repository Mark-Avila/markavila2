import { useEffect, useState } from "react";
import anilist from "../assets/anilist.png";
import kikoo from "../assets/klima.png";
import wordhaven from "../assets/wordhaven.png";
import { ProjectItem } from "../components";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { InitAnimProps } from "../App";
import { global } from "../variants";

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  body: string;
  tech: string[];
}

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, obcaecati vel dolor tempora soluta quia nemo distinctio ratione eaque, laborum, libero mollitia excepturi deserunt beatae illo odit. Quos, animi sapiente?";

function Projects({ initAnim, onAnimDone }: InitAnimProps) {
  const [currItemIndex, setcurrItemIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("right");

  useEffect(() => {
    setTimeout(onAnimDone, 3000);
  }, []);

  const handleRightClick = () => {
    setSwipeDirection("right");

    setTimeout(() => {
      setcurrItemIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    }, 20);
  };
  const handleLeftClick = () => {
    setSwipeDirection("left");

    setTimeout(() => {
      setcurrItemIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, 20);
  };

  const items: ProjectItem[] = [
    {
      id: 8624,
      image: wordhaven,
      title: "Wordhaven",
      body: lorem,
      tech: ["React", "Styled Components", "Framer Motion"]
    },
    {
      id: 9566,
      image: kikoo,
      title: "Kikoo",
      body: lorem,
      tech: ["Vue", "ParticleJS", "OpenWeatherMap API"]
    },
    {
      id: 5192,
      image: anilist,
      title: "Anilist",
      body: lorem,
      tech: ["React", "Firebase", "Kitsu API"]
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="h-full w-full p-8 xl:flex xl:flex-col xl:items-center xl:justify-start"
    >
      <div className="xl:max-w-8xl lg:flex lg:items-center lg:justify-between lg:px-12 xl:w-9/12">
        <header className="overflow-hidden">
          <motion.h1
            variants={initAnim ? {} : global.letterSlideUp}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
              delay: 0.1
            }}
            className="custom-gradient-blue pb-3 font-montserrat text-5xl font-bold text-white md:text-6xl xl:text-7xl"
          >
            My Projects
          </motion.h1>
        </header>
        <motion.div className="hidden lg:block">
          <motion.button
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : global.popScale}
            transition={{
              delay: 2.6
            }}
            onClick={handleLeftClick}
            className="mr-8 text-3xl text-gray-500 transition ease-in-out hover:text-white active:-translate-x-1"
          >
            <FaAngleLeft />
          </motion.button>
          <motion.button
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : global.popScale}
            transition={{
              delay: 2.8
            }}
            onClick={handleRightClick}
            className="text-3xl text-gray-500 transition ease-in-out hover:text-white active:translate-x-1"
          >
            <FaAngleRight />
          </motion.button>
        </motion.div>
      </div>
      <p className="font-montserrat text-gray-500 lg:hidden">Swipe for more</p>
      <div className="container-snap mt-8 flex w-full snap-x snap-mandatory gap-4 overflow-visible overflow-x-auto lg:hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full min-w-full snap-center overflow-visible"
          >
            <ProjectItem
              initAnim={initAnim}
              image={item.image}
              title={item.title}
              body={item.body}
              tech={item.tech}
            />
            <p className="mt-8 text-gray-400 lg:hidden">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="container-snap mt-8 hidden w-full gap-4 overflow-hidden lg:flex lg:justify-center">
        <AnimatePresence mode="wait">
          <ProjectItem
            initAnim={initAnim}
            image={items[currItemIndex].image}
            title={items[currItemIndex].title}
            body={items[currItemIndex].body}
            tech={items[currItemIndex].tech}
            direction={swipeDirection}
            key={currItemIndex}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Projects;

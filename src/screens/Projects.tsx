import { useEffect, useState } from "react";
import { ProjectItem } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { InitAnimProps } from "../App";
import { global } from "../variants";
import anilist from "../assets/anilist.png";
import kikoo from "../assets/klima.png";
import wordhaven from "../assets/wordhaven.png";
import tupimage from "../assets/tup.png";
import portfolio from "../assets/portfolio.png";
import mockster from "../assets/mockster.png";
import occultus from "../assets/occultus.png";
import swarmzzz from "../assets/swarmzzz.png";
import identifruit from "../assets/identifruit.png";
import bugherd from "../assets/bugherd.png";

interface ProjectItemType {
  id: number;
  image: string;
  title: string;
  body: string;
  tech: string[];
  link: string;
  early?: boolean;
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
      setcurrItemIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }, 20);
  };
  const handleLeftClick = () => {
    setSwipeDirection("left");

    setTimeout(() => {
      setcurrItemIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    }, 10);
  };

  const items: ProjectItemType[] = [
    {
      id: 8594,
      image: bugherd,
      title: "Bugherd",
      body: "Built a full-stack web application that allows users to streamline software issue tracking and management. Features React Redux, RTK Query Data Fetching, Cookie-Based JWT Authentication, RESTful API backend, and a PostgreSQL Database",
      tech: ["Typescript", "React", "NodeJS", "Express", "PostgreSQL"],
      link: "https://github.com/Mark-Avila/bugherd_frontend"
    },
    {
      id: 2198,
      image: mockster,
      title: "Mockster",
      body: "An interactive online quiz creation platform enabling users to create, customize, and share quizzes for collaborative learning and assessment.",
      tech: ["React", "Express", "MongoDB"],
      link: "https://mockster.netlify.app"
    },
    {
      id: 9566,
      image: kikoo,
      title: "Kikoo",
      body: "This website built with Vue and OpenWeatherMap API provides real-time weather information for any location around the world. With sleek and intuitive design, users can easily search for and view current weather conditions, as well as a 5-day weather forecast.",
      tech: ["Vue", "ParticleJS", "OpenWeatherMap API"],
      link: "https://kikoo.netlify.app/"
    },
    {
      id: 8624,
      image: wordhaven,
      title: "Wordhaven",
      body: "This simple dictionary website crafted with React and Framer Motion provides a user-friendly interface for searching and discovering word meanings. With smooth and visually appealing animations, users can quickly access word definitions, synonyms, and example sentences",
      tech: ["React", "Styled Components", "Framer Motion"],
      link: "https://wordhaven.netlify.app/",
      early: true
    },
    {
      id: 7335,
      image: swarmzzz,
      title: "Swarmzzz",
      body: "Designed and implemented a game featuring adversaries employing particle swarm optimization algorithms to simulate dynamic and flocking movement patterns",
      tech: ["C#", "Unity", "Particle Swarm Optimization (PSO) Algorithm"],
      link: "https://github.com/Mark-Avila/swarmzzz"
    },
    {
      id: 1237,
      image: occultus,
      title: "Occultus Library",
      body: "Privacy-conscious face detection library offering features such as blurring, exclusion, and targeted face detection. Our ongoing capstone project is currently in development, although all core requirements and goals have already been achieved.",
      tech: ["Python", "Object Detection", "Pytorch", "Tkinter"],
      link: "https://github.com/Mark-Avila/swarmzzz"
    },
    {
      id: 1233,
      image: identifruit,
      title: "Identifruit",
      body: "An Android application equipped with a sophisticated image classification model, designed and implemented by me, enabling seamless identification and classification of various fruits based on visual input.",
      tech: [
        "Java",
        "Android Development",
        "Tensorflow",
        "Image Classification"
      ],
      link: "https://github.com/Mark-Avila/swarmzzz"
    },
    {
      id: 8173,
      image: tupimage,
      title: "TUP concept",
      body: "This concept design website for the Technological University of the Philippines (TUP) showcases a modern and dynamic layout. I made this project to learn Tailwind CSS, a utility-first CSS framework, which today is now my go-to styling tool",
      tech: ["HTML/CSS", "JavaScript", "Tailwind", "AnimeJS"],
      link: "https://mark-avila.github.io/tup-concept/",
      early: true
    },
    {
      id: 5192,
      image: anilist,
      title: "Anilista",
      body: "Anime ang Manga information/watchlist tracker web application. It is my first real React project, so it can be very rough, but I am proud of it, as it made me learn a lot while developing it. I plan on remaking or updating it in the near future",
      tech: ["React", "Firebase", "SASS", "Kitsu API"],
      link: "https://anilista-auth-prod.web.app/explore/anime",
      early: true
    },
    {
      id: 1922,
      image: portfolio,
      title: "Personal Website",
      body: "My own personal profile website where I highlight my projects and experiences in web development. It features a clean and modern interface and design, complete with smooth animations that don't hinder user experience too much.",
      tech: ["React", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="box-border h-full w-full px-3 xs:p-8 xl:flex xl:flex-col xl:items-center xl:justify-start"
    >
      <div className="lg:flex lg:items-center lg:justify-between lg:px-12 xl:w-9/12">
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
            className="custom-gradient-blue pb-3 font-montserrat text-4xl font-bold text-white xs:text-5xl md:text-6xl xl:text-7xl"
          >
            My Projects
          </motion.h1>
        </header>
        <div className="flex items-center">
          <motion.p
            initial="hidden"
            animate="show"
            variants={global.fadeIn}
            transition={initAnim ? {} : { delay: 2.6 }}
            className="mr-8 hidden font-roboto font-bold text-gray-500 lg:block"
          >
            {currItemIndex + 1} / {items.length}
          </motion.p>
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
      </div>
      <p className="font-montserrat text-gray-500 lg:hidden">Swipe for more</p>
      <div className="container-snap mt-3 flex w-full snap-x snap-mandatory gap-4 overflow-visible overflow-x-auto xs:mt-8 lg:hidden">
        {items.map((item) => (
          <div
            key={item.id}
            className="box-border min-w-full snap-center overflow-visible"
          >
            <ProjectItem
              link={item.link}
              initAnim={initAnim}
              image={item.image}
              title={item.title}
              body={item.body}
              tech={item.tech}
              early={item.early}
            />
            <p className="mt-8  text-gray-400 lg:hidden">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="container-snap mt-8 hidden w-full gap-4 overflow-hidden lg:flex lg:justify-center">
        <AnimatePresence mode="wait">
          <ProjectItem
            initAnim={initAnim}
            link={items[currItemIndex].link}
            image={items[currItemIndex].image}
            title={items[currItemIndex].title}
            body={items[currItemIndex].body}
            tech={items[currItemIndex].tech}
            direction={swipeDirection}
            key={currItemIndex}
            early={items[currItemIndex].early}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Projects;

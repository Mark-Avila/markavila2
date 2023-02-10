import { useState } from "react";
import anilist from "../assets/anilist.png";
import kikoo from "../assets/klima.png";
import wordhaven from "../assets/wordhaven.png";
import { ProjectItem } from "../components";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  body: string;
  tech: string[];
}

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, obcaecati vel dolor tempora soluta quia nemo distinctio ratione eaque, laborum, libero mollitia excepturi deserunt beatae illo odit. Quos, animi sapiente?";

const items: ProjectItem[] = [
  {
    id: 8624,
    image: wordhaven,
    title: "Wordhaven",
    body: lorem,
    tech: ["React", "Styled Components", "Framer Motion"],
  },
  {
    id: 9566,
    image: kikoo,
    title: "Kikoo",
    body: lorem,
    tech: ["Vue", "ParticleJS", "OpenWeatherMap API"],
  },
  {
    id: 5192,
    image: anilist,
    title: "Anilist",
    body: lorem,
    tech: ["React", "Firebase", "Kitsu API"],
  },
];

function Projects() {
  return (
    <div className="h-full w-full p-8">
      <h1 className="custom-gradient-blue pb-4 text-5xl font-bold md:text-6xl xl:text-8xl">
        My Projects
      </h1>
      <p className="font-montserrat text-gray-500 lg:hidden">Swipe for more</p>
      <div className="container-snap mt-8 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto">
        {items.map((item) => (
          <div key={item.id} className="w-full min-w-full snap-center">
            <ProjectItem
              image={item.image}
              title={item.title}
              body={item.body}
              tech={item.tech}
            />
            <p className="mt-8 text-gray-400">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
    // <div className="h-full p-8 lg:flex lg:h-fit lg:items-center lg:justify-center xl:h-full">
    //   <div className="flex h-full w-full flex-col lg:w-3/4 xl:w-10/12">
    //     <h1 className="custom-gradient-blue pb-4 text-5xl font-bold md:text-7xl">
    //       Projects
    //     </h1>
    //     <p className="font-montserrat text-gray-500 lg:hidden">
    //       Swipe for more
    //     </p>
    //     <div className="h-full lg:mt-8 lg:flex lg:items-center lg:justify-between">
    //       <button className="hidden text-4xl text-white transition ease-in-out active:-translate-x-2 lg:block xl:text-6xl">
    //         <FaAngleLeft />
    //       </button>
    //       <div className=" container-snap flex h-full snap-x snap-mandatory gap-4 overflow-x-auto lg:items-center xl:h-full">
    //         {items.map((item) => (
    //           <div className="h-full w-full shrink-0 snap-center overflow-visible lg:flex lg:h-fit lg:items-center lg:justify-center">
    //             <ProjectItem
    //               key={item.id}
    //               image={item.image}
    //               title={item.title}
    //               body={item.body}
    //               tech={item.tech}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //       <button className="hidden text-4xl text-white transition ease-in-out active:translate-x-2 active:scale-90 lg:block xl:text-6xl">
    //         <FaAngleRight />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Projects;

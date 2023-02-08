import { useState } from "react";
import anilist from "../assets/anilist.png";
import kikoo from "../assets/klima.png";
import wordhaven from "../assets/wordhaven.png";
import { ProjectItem } from "../components";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence } from "framer-motion";

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
];

function Projects() {

  return (
    <div className="flex h-full w-full flex-col p-8 md:flex md:items-start md:justify-center lg:items-center">
      <h1 className="custom-gradient-blue h-16 text-5xl font-bold">Projects</h1>
      <p className="font-montserrat text-gray-500">Swipe for more</p>
        <div className="flex container-snap overflow-x-auto snap-x snap-mandatory mt-12 gap-4">
          {items.map((item) => (
            <ProjectItem
              key={item.id}
              image={item.image}
              title={item.title}
              body={item.body}
              tech={item.tech}
            />
          ))}
        </div>
    </div>
  );
}

export default Projects;

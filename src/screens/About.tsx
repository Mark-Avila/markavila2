import { useState } from "react";
import { FaLightbulb, FaPalette } from "react-icons/fa";
import { MdDevices, MdShutterSpeed } from "react-icons/md";
import { AboutCard } from "../components";
import { AnimatePresence } from "framer-motion";

function About() {
  const [activeInfo, setActiveInfo] = useState({
    responsive: true,
    experience: false,
    design: false,
    performance: false,
  });

  const handleInfoClick = (key: string) => {
    const initialState: typeof activeInfo = {
      responsive: false,
      experience: false,
      design: false,
      performance: false,
    };

    setActiveInfo({ ...initialState, [key]: true });
  };

  return (
    <div className="h-full w-full md:flex md:items-start md:justify-center lg:items-center">
      <div className="flex flex-col p-8 lg:w-3/4 xl:w-1/2">
        <h1 className="custom-gradient-blue font-montserrat text-5xl font-bold text-white md:text-7xl">
          About me
        </h1>
        <p className="mt-4 border-l-2 pl-6 font-roboto text-gray-400 md:mt-8">
          I am a dedicated and creative student with a focus on{" "}
          <span className="font-bold text-white">React development</span>. I
          have hands-on experience building dynamic user interfaces using{" "}
          <span className="font-bold text-white">React</span> and{" "}
          <span className="font-bold text-white">Redux</span>, and I am
          knowledgeable in modern front-end development tools and methodologies.
          I am eager to apply my skills and continue learning in a immersive and
          collaborative work environment.
        </p>
        <div className="mt-8 sm:w-1/2 md:flex md:w-full">
          <div className="md grid w-full grid-cols-4 gap-2 md:w-56 md:grid-cols-2 md:grid-rows-2">
            <button
              onClick={() => handleInfoClick("responsive")}
              className={`${
                activeInfo.responsive
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center rounded-l-xl p-4 text-4xl text-white md:rounded-l-none md:rounded-tl-xl`}
            >
              <MdDevices />
            </button>
            <button
              onClick={() => handleInfoClick("experience")}
              className={`${
                activeInfo.experience
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center p-4 text-4xl text-white md:rounded-tr-xl`}
            >
              <FaLightbulb />
            </button>
            <button
              onClick={() => handleInfoClick("design")}
              className={`${
                activeInfo.design ? "purple-border--active" : "purple-border"
              } flex w-full items-center justify-center p-4 text-4xl text-white md:rounded-bl-xl`}
            >
              <FaPalette />
            </button>
            <button
              onClick={() => handleInfoClick("performance")}
              className={`${
                activeInfo.performance
                  ? "purple-border--active"
                  : "purple-border"
              } flex w-full items-center justify-center rounded-r-xl p-4 text-4xl text-white md:rounded-r-none md:rounded-br-xl`}
            >
              <MdShutterSpeed />
            </button>
          </div>
          <AnimatePresence>
            <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2">
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
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default About;

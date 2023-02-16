import { useState } from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript, DiJavascript1 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { ProjectIcon, expIcons, usedIcons } from "../utils";

function Tech() {
  const [activeTab, setActiveTab] = useState({
    all: true,
    lang: false,
    tools: false,
  });

  const handleTab = (key: string) => {
    const initialState: typeof activeTab = {
      all: false,
      lang: false,
      tools: false,
    };

    setActiveTab({ ...initialState, [key]: true });
  };

  return (
    <div className="h-full w-full p-8">
      <h1 className="custom-gradient-blue pb-4 text-5xl font-bold md:text-6xl xl:text-8xl">
        Stuff I know
      </h1>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleTab("all")}
          className={`${
            activeTab.all
              ? "purple-border--active text-white"
              : "purple-border text-gray-400"
          } h-14  w-full rounded-l-xl font-roboto text-[0.8rem] font-bold `}
        >
          ALL
        </button>
        <button
          onClick={() => handleTab("lang")}
          className={`${
            activeTab.lang
              ? "purple-border--active text-white"
              : "purple-border text-gray-400"
          } h-14 w-full font-roboto text-[0.8rem] font-bold `}
        >
          LANGUAGES
        </button>
        <button
          onClick={() => handleTab("tools")}
          className={`${
            activeTab.tools
              ? "purple-border--active text-white"
              : "purple-border text-gray-400"
          } h-14 w-full rounded-r-xl font-roboto text-[0.8rem] font-bold `}
        >
          TOOLS
        </button>
      </div>
      <div className="mt-8">
        <h4 className="font-montserrat text-white">Most used</h4>
        <ul className="mt-4 grid w-full grid-cols-4 gap-4">
        {activeTab.lang && usedIcons.filter(item => item.type === "lang").map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
          {activeTab.tools && usedIcons.filter(item => item.type === "tool").map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
          {activeTab.all && usedIcons.map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h4 className="font-montserrat text-white">Experienced</h4>
        <ul className="mt-4 grid w-full grid-cols-4 gap-4">
          {activeTab.lang && expIcons.filter(item => item.type === "lang").map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
          {activeTab.tools && expIcons.filter(item => item.type === "tool").map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
          {activeTab.all && expIcons.map((item: ProjectIcon) => (
            <li key={item.id} className="text-center text-white">
              <i className="flex items-center justify-center text-5xl">
                {item.icon}
              </i>
              <p className="mt-4 font-roboto text-sm text-gray-400">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tech;

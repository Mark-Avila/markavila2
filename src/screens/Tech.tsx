import { useState } from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript, DiJavascript1 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { ProjectIcon, expIcons, usedIcons } from "../utils";
import { TechTabs } from "../components";

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
    <div className="flex-grow h-full w-full p-8 md:flex md:flex-col md:items-center lg:items-start lg:grid lg:grid-cols-2">
      <header className="h-full snap-start">
        <h1 className="custom-gradient-blue pb-4 text-5xl font-bold md:text-6xl xl:text-8xl">
          Stuff I know
        </h1>
        <div className="w-full md:w-96">
          <TechTabs activeTab={activeTab} onClick={handleTab} />
        </div>
      </header>

      <main className="flex-grow snap-y max-h-full snap-mandatory overflow-auto">
        <div className="mt-8 md:mt-16 md:w-full h-full snap-start">
          <h4 className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold">
            Most used
          </h4>
          <ul className="mt-4 grid w-full grid-cols-4 gap-4 lg:grid-cols-5">
            {activeTab.lang &&
              usedIcons
                .filter((item) => item.type === "lang")
                .map((item: ProjectIcon) => (
                  <li key={item.id} className="text-center text-white">
                    <i className="flex items-center justify-center text-5xl lg:text-3xl">
                      {item.icon}
                    </i>
                    <p className="mt-4 font-roboto text-sm text-gray-400">
                      {item.title}
                    </p>
                  </li>
                ))}
            {activeTab.tools &&
              usedIcons
                .filter((item) => item.type === "tool")
                .map((item: ProjectIcon) => (
                  <li key={item.id} className="text-center text-white">
                    <i className="flex items-center justify-center text-5xl lg:text-3xl">
                      {item.icon}
                    </i>
                    <p className="mt-4 font-roboto text-sm text-gray-400">
                      {item.title}
                    </p>
                  </li>
                ))}
            {activeTab.all &&
              usedIcons.map((item: ProjectIcon) => (
                <li key={item.id} className="text-center text-white">
                  <i className="flex items-center justify-center text-5xl lg:text-3xl">
                    {item.icon}
                  </i>
                  <p className="mt-4 font-roboto text-sm text-gray-400">
                    {item.title}
                  </p>
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-8 md:mt-16 md:w-full snap-start">
          <h4 className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold">
            Experienced
          </h4>
          <ul className="mt-4 grid w-full grid-cols-4 gap-4 lg:grid-cols-5">
            {activeTab.lang &&
              expIcons
                .filter((item) => item.type === "lang")
                .map((item: ProjectIcon) => (
                  <li key={item.id} className="text-center text-white">
                    <i className="flex items-center justify-center text-5xl lg:text-3xl">
                      {item.icon}
                    </i>
                    <p className="mt-4 font-roboto text-sm text-gray-400">
                      {item.title}
                    </p>
                  </li>
                ))}
            {activeTab.tools &&
              expIcons
                .filter((item) => item.type === "tool")
                .map((item: ProjectIcon) => (
                  <li key={item.id} className="text-center text-white">
                    <i className="flex items-center justify-center text-5xl lg:text-3xl">
                      {item.icon}
                    </i>
                    <p className="mt-4 font-roboto text-sm text-gray-400">
                      {item.title}
                    </p>
                  </li>
                ))}
            {activeTab.all &&
              expIcons.map((item: ProjectIcon) => (
                <li key={item.id} className="text-center text-white">
                  <i className="flex items-center justify-center text-5xl lg:text-3xl">
                    {item.icon}
                  </i>
                  <p className="mt-4 font-roboto text-sm text-gray-400">
                    {item.title}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Tech;

import { useRef, useState } from "react";
import { expIcons, usedIcons } from "../utils";
import { TechItem, TechTabs } from "../components";
import { AnimatePresence } from "framer-motion";

function Tech() {
  const [activeTab, setActiveTab] = useState({
    all: true,
    lang: false,
    tools: false,
  });

  const listItem = useRef(null);

  const handleTab = (key: string) => {
    const initialState: typeof activeTab = {
      all: false,
      lang: false,
      tools: false,
    };

    setActiveTab({ ...initialState, [key]: true });
  };

  return (
    <div className="flex h-full w-full flex-grow flex-col p-8 md:flex md:items-center lg:flex-row lg:items-start lg:justify-between lg:px-24 xl:mx-auto xl:w-9/12 xl:max-w-[1200px] xl:px-0">
      <header className="h-fit snap-start md:pb-8 lg:w-full">
        <h1 className="custom-gradient-blue pb-4 text-5xl font-bold md:text-6xl xl:text-7xl">
          Stuff I know
        </h1>
        <p className="text-gray-400 font-roboto text-sm w-3/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          necessitatibus est veritatis sequi debitis quibusdam, iure iusto.
          Optio laudantium omnis excepturi, ipsum dolor eum mollitia maxime
          corrupti voluptas. Vel, ad!
        </p>
        <div className="w-full md:w-96 lg:w-72 xl:mt-8">
          <TechTabs activeTab={activeTab} onClick={handleTab} />
        </div>
      </header>

      <div className="flex h-full w-full flex-col overflow-auto md:mt-0 lg:px-8 xl:min-h-full">
        <section className="mt-8 flex-none snap-start md:mt-16 md:w-full lg:mt-0">
          <h4 className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold lg:text-left">
            Most used
          </h4>
          <ul className="mt-8 grid w-full grid-cols-4 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1 lg:mt-0 xl:grid-cols-8">
            <AnimatePresence>
              {usedIcons.map((item) =>
                activeTab.all ? (
                  <TechItem
                    ref={listItem}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    active={true}
                  />
                ) : activeTab.lang && item.type === "lang" ? (
                  <TechItem
                    ref={listItem}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    active={true}
                  />
                ) : (
                  activeTab.tools &&
                  item.type === "tool" && (
                    <TechItem
                      ref={listItem}
                      key={item.id}
                      title={item.title}
                      icon={item.icon}
                      active={true}
                    />
                  )
                )
              )}
            </AnimatePresence>
          </ul>
        </section>
        <section className="mt-8 flex-1 snap-start md:mt-16 md:w-full">
          <h4 className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold lg:text-left">
            Experienced
          </h4>
          <ul className="mt-8 grid w-full grid-cols-4 gap-4 md:grid-cols-5 lg:mt-0 xl:grid-cols-8">
            {/*What is the abomination in the active prop you ask? it just prevents the entire list from re-rendering*/}
            <AnimatePresence mode="popLayout">
              {expIcons.map((item) =>
                activeTab.all ? (
                  <TechItem
                    ref={listItem}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    active={true}
                  />
                ) : activeTab.lang && item.type === "lang" ? (
                  <TechItem
                    ref={listItem}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    active={true}
                  />
                ) : (
                  activeTab.tools &&
                  item.type === "tool" && (
                    <TechItem
                      ref={listItem}
                      key={item.id}
                      title={item.title}
                      icon={item.icon}
                      active={true}
                    />
                  )
                )
              )}
            </AnimatePresence>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Tech;

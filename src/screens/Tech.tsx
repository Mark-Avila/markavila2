import { useRef, useState } from "react";
import { expIcons, usedIcons } from "../utils";
import { TechItem, TechTabs } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { InitAnimProps } from "../App";
import { useEffect } from "react";
import { global, techVariants } from "../variants";

function Tech({ onAnimDone, initAnim }: InitAnimProps) {
  useEffect(() => {
    setTimeout(onAnimDone, 3000);
  }, []);

  const [activeTab, setActiveTab] = useState({
    all: true,
    lang: false,
    tools: false
  });

  const listItem = useRef(null);

  const handleTab = (key: string) => {
    const initialState: typeof activeTab = {
      all: false,
      lang: false,
      tools: false
    };

    setActiveTab({ ...initialState, [key]: true });
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={initAnim ? global.pageTransitions : {}}
      className="flex h-full w-full flex-grow flex-col p-8 md:flex md:items-center lg:h-[initial] lg:flex-row lg:items-stretch lg:justify-between lg:px-24 xl:mx-auto xl:w-9/12 xl:max-w-[1200px] xl:px-0"
    >
      <header className="h-fit snap-start md:pb-8 lg:w-full">
        <h1 className="overflow-hidden pb-4 text-5xl font-bold md:text-6xl xl:text-7xl">
          <div className="overflow-hidden px-0 lg:flex lg:justify-start">
            <motion.h1
              variants={initAnim ? {} : global.letterSlideUp}
              initial="hidden"
              animate="show"
              transition={{
                ease: [0.65, 0, 0.35, 1],
                duration: 0.5,
                delay: 0.3
              }}
              className="custom-gradient-blue font-montserrat text-5xl font-bold md:text-6xl"
            >
              Stuff I know
            </motion.h1>
          </div>
        </h1>
        <span className="hidden h-full overflow-hidden lg:mb-8 lg:flex">
          <motion.div
            initial={initAnim ? {} : { height: 0 }}
            animate={initAnim ? {} : { height: "initial" }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955] }}
            className="mr-6 w-1 rounded-full bg-gray-200"
          ></motion.div>
          <motion.p
            variants={initAnim ? {} : techVariants.textSlideRight}
            initial="hidden"
            animate="show"
            exit="exit"
            className="w-3/4 text-clip font-roboto text-sm text-gray-400"
          >
            I started learning code back when
            <span className="font-bold text-white"> I was 16</span>, my first
            language being{" "}
            <span className="font-bold text-white">JavaScript</span>. I
            remembered making an anime website when I first started, it was very
            clunkly, bloated, and littered with useless animations, but I found
            that fun, so I pursued to get better at it. Now I know quite a lot
            of languages and tools, but my focus is{" "}
            <span className="font-bold text-white">front-end development</span>,
            preferably with <span className="font-bold text-white">React</span>
          </motion.p>
        </span>
        {/* <p className="hidden w-3/4 font-roboto text-sm text-gray-400 lg:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          necessitatibus est veritatis sequi debitis quibusdam, iure iusto.
          Optio laudantium omnis excepturi, ipsum dolor eum mollitia maxime
          corrupti voluptas. Vel, ad!
        </p> */}
        <div className="w-full md:w-96 lg:w-72 xl:mt-8">
          <TechTabs
            activeTab={activeTab}
            onClick={handleTab}
            initAnim={initAnim}
          />
        </div>
      </header>

      <div className="flex min-h-full w-full flex-col overflow-auto md:mt-0 lg:px-8 xl:min-h-full">
        <section className="mt-8 flex-none snap-start md:mt-16 md:w-full lg:mt-0">
          <motion.h4
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : global.fadeIn}
            transition={{ delay: 1.4 }}
            className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold lg:text-left"
          >
            Most used
          </motion.h4>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : techVariants.techItemStagger1}
            className="mt-8 grid w-full grid-cols-4 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1 lg:mt-0 xl:grid-cols-8"
          >
            <AnimatePresence>
              {usedIcons.map((item) =>
                activeTab.all ? (
                  <TechItem
                    ref={listItem}
                    color={item.color}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ) : activeTab.lang && item.type === "lang" ? (
                  <TechItem
                    ref={listItem}
                    color={item.color}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ) : (
                  activeTab.tools &&
                  item.type === "tool" && (
                    <TechItem
                      ref={listItem}
                      color={item.color}
                      key={item.id}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
                )
              )}
            </AnimatePresence>
          </motion.ul>
        </section>
        <section className="mt-8 flex-1 snap-start md:mt-16 md:w-full">
          <motion.h4
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : global.fadeIn}
            transition={{ delay: 1.8 }}
            className="font-montserrat text-white md:mb-14 md:text-center md:text-xl md:font-bold lg:text-left"
          >
            Experienced
          </motion.h4>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={initAnim ? {} : techVariants.techItemStagger2}
            className="mt-8 grid w-full grid-cols-4 gap-4 md:grid-cols-5 lg:mt-0 xl:grid-cols-8"
          >
            {/*What is the abomination in the active prop you ask? it just prevents the entire list from re-rendering*/}
            <AnimatePresence mode="popLayout">
              {expIcons.map((item) =>
                activeTab.all ? (
                  <TechItem
                    ref={listItem}
                    color={item.color}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ) : activeTab.lang && item.type === "lang" ? (
                  <TechItem
                    ref={listItem}
                    color={item.color}
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                  />
                ) : (
                  activeTab.tools &&
                  item.type === "tool" && (
                    <TechItem
                      ref={listItem}
                      color={item.color}
                      key={item.id}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
                )
              )}
            </AnimatePresence>
          </motion.ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Tech;

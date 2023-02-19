import { useState } from "react";
import Header from "./components/Header";
import { About, Contact, Home, Projects, Tech } from "./screens";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesJson from "./assets/particlesjs-config.json";
import { useMediaQuery } from "./hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";

export interface InitAnimProps {
  initAnim: boolean;
  isMobileScreen?: boolean;
  onAnimDone: () => void;
}

type ProjectPages = "about" | "tech" | "home" | "project" | "contact";

function App() {
  const [activePage, setActivePage] = useState({
    about: false,
    tech: false,
    home: true,
    project: false,
    contact: false
  });

  const [hasVisited, setVisited] = useState({
    about: false,
    tech: false,
    home: false,
    project: false,
    contact: false
  });

  const [prevPage, setPrevPage] = useState<ProjectPages>("home");

  const handleVisited = (key: ProjectPages) => {
    if (!hasVisited[key as keyof typeof hasVisited]) {
      setVisited((prev) => ({ ...prev, [key]: true }));
    }
  };

  const notMobileScreen = useMediaQuery("(min-width: 768px)");

  const onNavItemClick = (key: string) => {
    const initialState: typeof activePage = {
      about: false,
      tech: false,
      home: false,
      project: false,
      contact: false
    };

    const newPrevPage = Object.keys(activePage).find(
      (key) => activePage[key as keyof typeof activePage]
    );

    setPrevPage(newPrevPage as ProjectPages);

    return setActivePage({ ...initialState, [key]: true });
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const normalParticlesJson = JSON.parse(JSON.stringify(particlesJson));
  const frozenParticlesJson = JSON.parse(JSON.stringify(particlesJson));

  frozenParticlesJson.particles.move.enable = false;

  return (
    <div className="h-aut z-10 flex max-h-full min-h-full flex-1 flex-col">
      <Particles
        className="z-0"
        id="tsparticles"
        options={notMobileScreen ? normalParticlesJson : frozenParticlesJson}
        init={particlesInit}
      />
      <Header items={activePage} onItemClick={onNavItemClick} />

      <main className="z-10 mt-20 flex h-full min-h-full w-full flex-grow flex-col overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activePage.home && (
            <motion.div
              key={712837}
              className="box-border grid flex-1 grid-cols-1 overflow-hidden"
            >
              <Home
                onAnimDone={() => handleVisited("home")}
                initAnim={hasVisited.home}
                isMobileScreen={!notMobileScreen}
              />
            </motion.div>
          )}
          {activePage.about && (
            <motion.span
              key={868686}
              className="box-border flex w-full flex-1 lg:items-center lg:justify-center"
            >
              <About
                initAnim={hasVisited.about}
                onAnimDone={() => handleVisited("about")}
              />
            </motion.span>
          )}
          {activePage.contact && (
            <motion.span
              key={716238}
              className="box-border flex w-full flex-1 lg:items-center lg:justify-center"
            >
              <Contact
                initAnim={hasVisited.contact}
                onAnimDone={() => handleVisited("contact")}
              />
            </motion.span>
          )}
          {activePage.project && (
            <motion.span className="box-border w-full flex-1 lg:grid lg:grid-cols-1">
              <Projects />
            </motion.span>
          )}
          {/*The grid here makes it */}
          {activePage.tech && (
            <motion.div
              key={378268}
              className="box-border flex w-full flex-1 lg:items-stretch lg:justify-center xl:overflow-hidden"
            >
              <Tech
                initAnim={hasVisited.tech}
                onAnimDone={() => handleVisited("tech")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer className="flex h-12 items-center justify-end px-4">
        <p className="font-roboto text-xs text-gray-500 md:text-right">
          Last updated DD/MM/YYYY
        </p>
      </footer>
    </div>
  );
}

export default App;

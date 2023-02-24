import { useState, useEffect } from "react";
import Header from "./components/Header";
import { About, Contact, Home, Projects, Tech } from "./screens";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesJson from "./assets/particlesjs-config.json";
import { useMediaQuery } from "./hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { StaticBackground } from "./components";

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

  const [particles, setParticles] = useState(true);

  const handleVisited = (key: ProjectPages) => {
    const hasNotVisited = !hasVisited[key as keyof typeof hasVisited];

    if (hasNotVisited) {
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

    return setActivePage({ ...initialState, [key]: true });
  };

  const handleParticles = () => setParticles(!particles);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const normalParticlesJson = JSON.parse(JSON.stringify(particlesJson));
  const frozenParticlesJson = JSON.parse(JSON.stringify(particlesJson));

  frozenParticlesJson.particles.move.enable = false;

  return (
    <div className="h-aut z-10 flex max-h-full min-h-full flex-1 flex-col">
      {notMobileScreen ? (
        particles ? (
          <Particles
            className="z-0"
            id="tsparticles"
            options={normalParticlesJson}
            init={particlesInit}
          />
        ) : (
          <StaticBackground />
        )
      ) : (
        <StaticBackground />
      )}

      {hasVisited.home && (
        <Header
          particles={particles}
          handleParticles={handleParticles}
          items={activePage}
          onItemClick={onNavItemClick}
        />
      )}

      <main className="z-10 mt-14 flex w-full flex-1 flex-grow flex-col overflow-y-auto overflow-x-hidden md:mt-24">
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
            <motion.span
              key={7123681}
              className="ex w-full flex-1 lg:items-stretch lg:justify-center xl:overflow-hidden"
            >
              <Projects
                initAnim={hasVisited.project}
                onAnimDone={() => handleVisited("project")}
              />
            </motion.span>
          )}
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

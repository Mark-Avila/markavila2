import { useState } from "react";
import Header from "./components/Header";
import { About, Contact, Home, Projects, Tech } from "./screens";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesJson from "./assets/particlesjs-config.json";
import { useMediaQuery } from "./hooks";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [activePage, setActivePage] = useState({
    About: false,
    Tech: false,
    Home: true,
    Project: false,
    Contact: false
  });

  const [hasVisited, setVisited] = useState({
    about: false,
    tech: false,
    home: false,
    project: false,
    contact: false
  });

  const handleVisited = (
    key: "about" | "tech" | "home" | "project" | "contact"
  ) => {
    if (!hasVisited[key as keyof typeof hasVisited]) {
      setVisited((prev) => ({ ...prev, [key]: true }));
    }
  };

  const notMobileScreen = useMediaQuery("(min-width: 768px)");

  const onNavItemClick = (key: string) => {
    const initialState: typeof activePage = {
      About: false,
      Tech: false,
      Home: false,
      Project: false,
      Contact: false
    };

    return setActivePage({ ...initialState, [key]: true });
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const normalParticlesJson = JSON.parse(JSON.stringify(particlesJson));
  const frozenParticlesJson = JSON.parse(JSON.stringify(particlesJson));

  frozenParticlesJson.particles.move.enable = false;

  return (
    <div className="z-10 flex max-h-full min-h-full flex-1 flex-col">
      <Particles
        className="z-0"
        id="tsparticles"
        options={notMobileScreen ? normalParticlesJson : frozenParticlesJson}
        init={particlesInit}
      />
      <Header items={activePage} onItemClick={onNavItemClick} />

      <main className="z-10 mt-20 flex h-full w-full flex-grow overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          {activePage.Home && (
            <motion.span className="box-border w-full flex-1">
              <Home />
            </motion.span>
          )}
          {activePage.About && (
            <motion.span
              initial={
                hasVisited.about && notMobileScreen
                  ? { x: "-10%", opacity: 0 }
                  : {}
              }
              animate={
                hasVisited.about && notMobileScreen
                  ? {
                      x: 0,
                      opacity: 1,
                      transition: { type: "spring", duration: 0.5 }
                    }
                  : {}
              }
              exit={
                hasVisited.about && notMobileScreen
                  ? {
                      x: "-10%",
                      opacity: 0,
                      transition: { type: "spring", duration: 0.5 }
                    }
                  : {}
              }
              key={868686}
              className="box-border w-full flex-1"
            >
              <About
                initAnim={hasVisited.about}
                onAnimDone={() => handleVisited("about")}
              />
            </motion.span>
          )}
          {activePage.Contact && (
            <motion.span className="box-border w-full flex-1">
              <Contact />
            </motion.span>
          )}
          {activePage.Project && (
            <motion.span className="box-border w-full flex-1">
              <Projects />
            </motion.span>
          )}
          {activePage.Tech && (
            <motion.span className="box-border w-full flex-1">
              <Tech />
            </motion.span>
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

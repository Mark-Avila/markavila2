import { useState } from "react";
import Header from "./components/Header";
import { About, Contact, Home, Projects } from "./screens";
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
    Contact: false,
  });

  const mobileScreen = useMediaQuery("(min-width: 768px)");

  const onNavItemClick = (key: string) => {
    const initialState: typeof activePage = {
      About: false,
      Tech: false,
      Home: false,
      Project: false,
      Contact: false,
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
    <div className="z-10 flex min-h-full flex-col flex-1">
      <Particles
        
        className="z-0"
        id="tsparticles"
        options={mobileScreen ? normalParticlesJson : frozenParticlesJson}
        init={particlesInit}
      />
      <Header items={activePage} onItemClick={onNavItemClick} />

      <AnimatePresence>
        <main className="z-10 mt-20 flex h-full w-full flex-grow overflow-y-auto">
          {activePage.Home && (
            <motion.span className="w-full flex-1 box-border">
              <Home />
            </motion.span>
          )}
          {activePage.About && (
            <motion.span className="w-full flex-1 box-border">
              <About />
            </motion.span>
          )}
          {activePage.Contact && (
            <motion.span className="w-full flex-1 box-border">
              <Contact />
            </motion.span>
          )}
          {activePage.Project && (
            <motion.span className="w-full flex-1 box-border">
              <Projects />
            </motion.span>
          )}
        </main>
      </AnimatePresence>
      <footer className="h-12 flex items-center justify-end px-4">
        <p className="font-roboto text-xs text-gray-500 md:text-right">
          Last updated DD/MM/YYYY
        </p>
      </footer>
    </div>
  );
}

export default App;

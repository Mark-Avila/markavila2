import { useState } from "react";
import Header from "./components/Header";
import { Home } from "./screens";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesJson from "./assets/particlesjs-config.json";
import { useMediaQuery } from "./hooks";

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
    <div className="flex min-h-full flex-col">
      <Particles
        className="z-0"
        id="tsparticles"
        options={mobileScreen ? normalParticlesJson : frozenParticlesJson}
        init={particlesInit}
      />
      <Header items={activePage} onItemClick={onNavItemClick} />

      <main className="z-10 flex h-full w-full flex-grow">
        <Home />
      </main>
    </div>
  );
}

export default App;

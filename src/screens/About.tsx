import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { MdDevices, MdShutterSpeed } from "react-icons/md";
import { AboutCard } from "../components";

function About() {
  const [activeInfo, setActiveInfo] = useState({
    responsive: true,
    creative: true,
    performance: false,
  });

  const handleInfoClick = (key: string) => {
    const initialState: typeof activeInfo = {
      responsive: false,
      creative: false,
      performance: false,
    };

    setActiveInfo({ ...initialState, [key]: true });
  };

  return (
    <div className="p-8 md:pl-24 md:pt-24">
      <h1 className="custom-gradient-blue font-montserrat text-5xl font-bold text-white">
        About me
      </h1>
      <p className="mt-4 border-l-2 pl-6 font-roboto text-gray-400">
        I am a dedicated and creative student with a focus on{" "}
        <span className="font-bold text-white">React development</span>. I have
        hands-on experience building dynamic user interfaces using{" "}
        <span className="font-bold text-white">React</span> and{" "}
        <span className="font-bold text-white">Redux</span>, and I am
        knowledgeable in modern front-end development tools and methodologies. I
        am eager to apply my skills and continue learning in a immersive and
        collaborative work environment.
      </p>
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => handleInfoClick("responsive")}
          className={`${
            activeInfo.responsive ? "purple-border--active" : "purple-border"
          } flex w-full items-center justify-center rounded-l-xl p-4 text-4xl text-white`}
        >
          <MdDevices />
        </button>
        <button
          onClick={() => handleInfoClick("creative")}
          className={`${
            activeInfo.creative ? "purple-border--active" : "purple-border"
          } flex w-full items-center justify-center p-4 text-4xl text-white`}
        >
          <FaLightbulb />
        </button>
        <button
          onClick={() => handleInfoClick("performance")}
          className={`${
            activeInfo.performance ? "purple-border--active" : "purple-border"
          } flex w-full items-center justify-center rounded-r-xl p-4 text-4xl text-white`}
        >
          <MdShutterSpeed />
        </button>
      </div>
      <div className="mt-8">
        {activeInfo.responsive && <AboutCard title="Responsive" body="I will make sure that my websites work properly on most devices" />}
        {activeInfo.creative && <AboutCard title="User Experience" body="Provide an intuitive, user-friendly experience for visitors, including easy navigation and clear information architecture." />}
        {activeInfo.performance && <AboutCard title="Performance" body="Make sure websites are optimized for fast loading times and efficient use of resources, which can impact the user experience and search engine optimization" />}
      </div>
    </div>
  );
}

export default About;

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="flex w-full h-full flex-col justify-start p-8 md:pl-12 md:pt-24 lg:pl-24 xl:pl-48">
      <h5 className="font-montserrat text-sm text-gray-400 md:text-base lg:text-xl">
        What's up! I am
      </h5>
      <h1 className="custom-gradient-blue mt-2 font-montserrat text-5xl font-bold text-white md:text-6xl xl:text-8xl">
        Mark Avila
      </h1>
      <h2 className="mt-2 font-montserrat text-xl font-bold text-white md:text-3xl xl:text-6xl">
        I like making websites
      </h2>
      <p className="mt-4 font-roboto text-sm text-gray-500 md:text-base lg:w-1/2 xl:w-3/4 xl:text-xl">
        Computer Science student aspiring to become a web developer. Welcome to
        my portfolio
      </p>
      <div className="mt-8 flex">
        <a
          target="_blank"
          href="https://github.com/Mark-Avila"
          className="mr-8 text-3xl text-gray-400 hover:text-gray-200 active:text-white lg:mr-8 lg:text-2xl"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100076620788296"
          className="mr-8 text-3xl text-gray-400 hover:text-gray-200 active:text-white lg:mr-8 lg:text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/itsmarkavila"
          className="mr-8 text-3xl text-gray-400 hover:text-gray-200 active:text-white lg:mr-8 lg:text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/avilamark/"
          className="mr-8 text-3xl text-gray-400 hover:text-gray-200 active:text-white lg:mr-8 lg:text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Home;

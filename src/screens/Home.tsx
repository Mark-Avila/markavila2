import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {

  


  return (
    <div className="flex w-full flex-col justify-start p-8 md:pl-24 md:pt-24">
      <h5 className="font-montserrat text-sm text-gray-400 md:text-base lg:text-xl">What's up! I am</h5>
      <h1 className="mt-2 custom-gradient font-montserrat text-5xl font-bold text-white md:text-6xl lg:text-8xl">
        Mark Avila
      </h1>
      <h2 className="mt-2 font-montserrat text-xl font-bold text-white md:text-3xl lg:text-6xl">
        I like making websites
      </h2>
      <p className="mt-4 font-roboto text-sm text-gray-500 md:text-base lg:w-1/4">
        Computer Science student aspiring to become a web developer. Welcome to
        my portfolio
      </p>
      <div className="mt-8 flex">
        <button className="active:text-white mr-8 text-3xl text-gray-400 lg:text-xl lg:mr-8">
          <FaGithub />
        </button>
        <button className="active:text-white mr-8 text-3xl text-gray-400 lg:text-xl lg:mr-8">
          <FaFacebook />
        </button>
        <button className="active:text-white mr-8 text-3xl text-gray-400 lg:text-xl lg:mr-8">
          <FaTwitter />
        </button>
        <button className="active:text-white mr-8 text-3xl text-gray-400 lg:text-xl lg:mr-8">
          <FaLinkedin />
        </button>
      </div>
      <p className="mt-auto font-roboto text-xs text-gray-500 md:text-right">
        Last updated DD/MM/YYYY
      </p>
    </div>
  );
}

export default Home;

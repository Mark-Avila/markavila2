function Contact() {
  return (
    <div className="h-full w-full flex items-start p-8 justify-center lg:items-center">
      <div className="px-4 lg:w-1/2">
        <h1 className="custom-gradient-blue font-montserrat text-5xl font-bold md:text-6xl lg:text-center">
          Contact
        </h1>
        <p className="mt-4 font-montserrat text-2xl font-bold text-white lg:text-center">
          Get in touch with me
        </p>
        <p className="mt-4 text-gray-500 md:text-sm lg:text-center xl:px-20">
          I am current a university student, which means I am not currently
          looking for full-time opportunities. However, I am looking for
          front-end internships so that I can learn the workings of the
          industry. You can email me if you have a question and I'll try my best
          to get back to you
        </p>
        <div className="py-8 px-12 mt-8 md:px-0 md:w-48 md:mt-4 lg:w-full lg:m-0 lg:flex lg:justify-center">
          <a href="mailto: markavila.dev@gmail.com" className="flex items-center justify-center before:custom-gradient-purple-bg lg:w-48 active:scale-95 resume purple-shadow h-16 w-full rounded-xl border-2 border-purple-700 font-montserrat text-lg text-white transition ease-in-out hover:text-white">
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

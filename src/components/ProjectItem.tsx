import { Variants, motion } from "framer-motion";

interface ProjectItemProps {
  image: string;
  title: string;
  body: string;
  tech: string[];
}

function ProjectItem(props: ProjectItemProps) {
  const { image, title, body, tech } = props;

  return (
    <motion.div className="flex flex-col-reverse md:grid md:grid-cols-2 md:mt-8 md:max-w-[800px] lg:w-3/4 lg:justify-center xl:w-10/12 xl:mt-0">
      <div className="z-50 mt-8 md:mt-0 xl:pb-8">
        <h1 className="font-montserrat text-3xl font-bold text-white">
          {title}
        </h1>
        <p className="mt-3 font-roboto text-gray-500 md:rounded-xl md:bg-gray-900 md:p-3 md:text-xs md:text-gray-400 md:shadow-lg">
          {body}
        </p>
        <p className="mt-4 font-montserrat font-bold text-gray-300">
          Tech used:
        </p>
        <div className="mt-4 flex flex-wrap gap-2 md:w-[calc(100%-90px)]">
          {tech.map((item) => (
            <div key={item} className="rounded-md bg-white p-4 py-1">
              <p className="font-roboto font-bold md:text-xs">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-48 xl:h-full md:w-full">
        <div className="h-full w-full max-w-[360px] md:absolute md:right-0 md:h-[calc(100%+50px)] md:w-[calc(100%+50px)] xl:bottom-0 xl:top-1/2 xl:-translate-y-1/2 md:max-w-none xl:h-[calc(100%+20px)] xl:w-[calc(100%+140px)] xl:max-h-[720px] xl:max-w-[480px]">
          <img src={image} className="h-full w-full rounded-lg xl:rounded-xl object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectItem;

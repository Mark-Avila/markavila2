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
    <motion.div className="flex flex-col-reverse w-full md:grid md:grid-cols-2 md:gap-4">
      <div className="hidden relative h-48 md:block">
        <div className="h-full w-full max-w-[360px] aspect-video">
          <img src={image} className="h-full w-full rounded-lg object-cover" />
        </div>
      </div>
      <div className="z-50 mt-8 md:mt-0">
        <h1 className="font-montserrat text-2xl font-bold text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-roboto text-gray-500 text-xs md:hidden">
          {body}
        </p>
        <p className="mt-4 font-montserrat font-bold text-gray-300 md:text-xs">
          Tech used:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <div key={item} className="rounded-md bg-white p-4 py-1">
              <p className="font-roboto font-bold md:text-xs">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-48 md:hidden">
        <div className="h-full w-full max-w-[360px] aspect-video">
          <img src={image} className="h-full w-full rounded-lg object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectItem;

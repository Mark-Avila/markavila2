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
    <motion.div className="snap-center shrink-0 w-full">
      <div className="h-48">
        <img src={image} className="h-full w-full rounded-lg object-cover" />
      </div>
      <h1 className="mt-8 font-montserrat text-3xl font-bold text-white">
        {title}
      </h1>
      <p className="mt-3 font-roboto text-gray-500 ">{body}</p>
      <p className="text-gray-300 font-montserrat font-bold mt-4">Tech used:</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <div key={item} className="rounded-md bg-white p-4 py-1">
            <p className="font-roboto font-bold">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectItem;

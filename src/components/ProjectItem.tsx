import { Variants, motion } from "framer-motion";
import { projectVariants } from "../variants/projectVariants";
import { global } from "../variants";

interface ProjectItemProps {
  image: string;
  title: string;
  body: string;
  tech: string[];
  direction?: string;
  initAnim: boolean;
}

function ProjectItem(props: ProjectItemProps) {
  const { image, title, body, tech, direction, initAnim } = props;

  return (
    <motion.div className="xl:max-w-8xl flex w-full flex-col-reverse md:flex md:flex-row md:justify-start md:gap-4 lg:w-10/12 lg:max-w-5xl">
      <div className="relative hidden h-48 md:block lg:hidden">
        <div className="aspect-video h-full w-full max-w-[360px]">
          <img src={image} className="h-full w-full rounded-lg object-cover" />
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{
          ease: global.eases.slideUp,
          duration: 0.5,
          delay: initAnim ? 0 : 1
        }}
        variants={initAnim ? projectVariants.imageSlide(direction) : {}}
        className="z-50 mt-8 md:mt-0 lg:-mr-14 lg:pl-14"
      >
        <motion.h1
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.letterSlideRight}
          transition={{
            ease: global.eases.slideUp,
            duration: 0.8,
            delay: 1.2
          }}
          className="font-montserrat text-2xl font-bold text-white md:text-3xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.letterSlideRight}
          transition={{
            ease: global.eases.slideUp,
            duration: 0.8,
            delay: 1.4
          }}
          className="mt-3 font-roboto text-xs text-gray-500 md:hidden lg:block lg:rounded-xl lg:bg-gray-900 lg:p-4 lg:text-gray-400 lg:shadow-thick"
        >
          {body}
        </motion.p>
        <motion.p
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : global.letterSlideRight}
          transition={{
            ease: global.eases.slideUp,
            duration: 0.8,
            delay: 1.8
          }}
          className="mt-4 font-roboto font-bold text-gray-300 md:text-xs"
        >
          Tech used:
        </motion.p>
        <motion.div
          initial="hidden"
          animate="show"
          variants={initAnim ? {} : projectVariants.projectsStagger}
          className="mt-4 flex flex-wrap gap-2"
        >
          {tech.map((item) => (
            <motion.div
              key={item}
              variants={
                initAnim
                  ? {
                      hidden: {
                        opacity: 1,
                        scale: 1
                      },
                      show: {
                        opacity: 1,
                        scale: 1
                      }
                    }
                  : global.popScale
              }
              transition={{
                duration: 0.4
              }}
              className="lg rounded-md bg-white p-4 py-1 text-sm transition ease-in-out lg:border-2 lg:border-gray-400 lg:bg-black lg:text-gray-400 lg:hover:cursor-pointer lg:hover:border-white lg:hover:text-white lg:active:scale-95"
            >
              <p className="font-roboto font-bold md:text-xs">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={initAnim ? {} : global.popScale}
        transition={{
          duration: 0.8,
          delay: initAnim ? 0 : 0.8,
          type: "spring"
        }}
        className="relative h-48 md:hidden lg:block lg:h-56 xl:h-80"
      >
        <motion.div
          initial="hidden"
          animate="show"
          exit="exit"
          variants={initAnim ? projectVariants.imageSlide(direction) : {}}
          transition={{
            ease: global.eases.slideUp,
            duration: 0.5,
            delay: 0.1
          }}
          className="group relative aspect-video h-full w-full max-w-[360px] hover:cursor-pointer md:max-w-[480px] lg:-ml-8 lg:max-h-[480px] lg:max-w-[540px] xl:max-h-[480px] xl:max-w-[720px]"
        >
          <div className="z-90 absolute top-0 left-0 hidden h-full w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 transition ease-in-out group-hover:opacity-0 lg:block"></div>
          <img src={image} className="h-full w-full rounded-lg object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectItem;

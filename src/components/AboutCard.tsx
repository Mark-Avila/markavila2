import { Variants, motion } from "framer-motion";

interface AboutCardProps {
  title: string;
  body: string;
}

const AboutCardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "linear"
    }
  },
  exit: {
    opacity: 1,
    x: -10
  }
};

const AboutCardVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function AboutCard({ title, body }: AboutCardProps) {
  return (
    <motion.span
      className="h-full w-full"
      variants={AboutCardVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        variants={AboutCardItemVariants}
        className="custom-gradient-purple-text font-montserrat text-xl font-bold"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={AboutCardItemVariants}
        className="mt-2 text-lg text-gray-300 sm:w-3/4 md:w-full lg:text-sm"
      >
        {body}
      </motion.p>
    </motion.span>
  );
}

export default AboutCard;

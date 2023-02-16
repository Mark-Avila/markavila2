import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export interface ProjectIcon {
  id: number;
  title: string;
  icon: JSX.Element;
  type: "lang" | "tool";
}

export const usedIcons: ProjectIcon[] = [
  {
    id: 57136,
    title: "HTML5",
    icon: <SiHtml5 />,
    type: "lang",
  },
  {
    id: 73452,
    title: "JavaScript",
    icon: <SiJavascript />,
    type: "lang",
  },
  {
    id: 36187,
    title: "TypeScript",
    icon: <SiTypescript />,
    type: "lang",
  },
  {
    id: 65235,
    title: "React",
    icon: <SiReact />,
    type: "tool",
  },
  {
    id: 98193,
    title: "NextJS",
    icon: <SiNextdotjs />,
    type: "tool",
  },
  {
    id: 13832,
    title: "CSS3",
    icon: <SiCss3 />,
    type: "lang",
  },
  {
    id: 16744,
    title: "Tailwind",
    icon: <SiTailwindcss />,
    type: "tool",
  },
  {
    id: 73981,
    title: "Git",
    icon: <SiGit />,
    type: "tool",
  },
];

export const expIcons: ProjectIcon[] = [
  {
    id: 13871,
    title: "NodeJS",
    icon: <SiNodedotjs />,
    type: "tool",
  },
  {
    id: 71259,
    title: "Express",
    icon: <SiExpress />,
    type: "tool",
  },
  {
    id: 87391,
    title: "MongoDB",
    icon: <SiMongodb />,
    type: "tool",
  },
  {
    id: 65252,
    title: "Vue",
    icon: <SiVuedotjs />,
    type: "lang",
  },
  {
    id: 87912,
    title: "SASS",
    icon: <SiSass />,
    type: "lang",
  },
  {
    id: 74671,
    title: "Bootstrap",
    icon: <SiBootstrap />,
    type: "tool",
  },
  {
    id: 51534,
    title: "Styled C.",
    icon: <SiStyledcomponents />,
    type: "tool",
  },
  {
    id: 68721,
    title: "Dart",
    icon: <SiDart />,
    type: "lang",
  },
  {
    id: 73123,
    title: "Flutter",
    icon: <SiFlutter />,
    type: "tool",
  },
  {
    id: 62453,
    title: "Firebase",
    icon: <SiFirebase />,
    type: "tool",
  },
  {
    id: 98932,
    title: "Python",
    icon: <SiPython />,
    type: "lang",
  },
  {
    id: 89793,
    title: "Tensoflow",
    icon: <SiTensorflow />,
    type: "tool",
  },
  {
    id: 79312,
    title: "C/C++",
    icon: <SiCplusplus />,
    type: "lang",
  },
  {
    id: 16232,
    title: "Java",
    icon: <SiJava />,
    type: "lang",
  },
  {
    id: 71623,
    title: "PHP",
    icon: <SiPhp />,
    type: "lang",
  },
  {
    id: 51342,
    title: "MySQL",
    icon: <SiMysql />,
    type: "lang",
  },
];

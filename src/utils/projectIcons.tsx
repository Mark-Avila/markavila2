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
  SiJest,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUnity,
  SiVuedotjs
} from "react-icons/si";

type HEX = `#${string}`;

export interface ProjectIcon {
  id: number;
  title: string;
  icon: JSX.Element;
  type: "lang" | "tool";
  color: HEX;
}

export const usedIcons: ProjectIcon[] = [
  {
    id: 57136,
    title: "HTML5",
    icon: <SiHtml5 />,
    type: "lang",
    color: "#fc952d"
  },
  {
    id: 73452,
    title: "JavaScript",
    icon: <SiJavascript />,
    type: "lang",
    color: "#fcd32d"
  },
  {
    id: 36187,
    title: "TypeScript",
    icon: <SiTypescript />,
    type: "lang",
    color: "#2d72fc"
  },
  {
    id: 65235,
    title: "React",
    icon: <SiReact />,
    type: "tool",
    color: "#2d72fc"
  },
  {
    id: 7643,
    title: "NextJS",
    icon: <SiNextdotjs />,
    type: "tool",
    color: "#FFFFFF"
  },
  {
    id: 21098,
    title: "Redux",
    icon: <SiRedux />,
    type: "tool",
    color: "#9c24ff"
  },
  {
    id: 13832,
    title: "CSS3",
    icon: <SiCss3 />,
    type: "lang",
    color: "#2d72fc"
  },
  {
    id: 16744,
    title: "Tailwind",
    icon: <SiTailwindcss />,
    type: "tool",
    color: "#2da9fc"
  },
  {
    id: 73981,
    title: "Git",
    icon: <SiGit />,
    type: "tool",
    color: "#fc832d"
  },
  {
    id: 13871,
    title: "NodeJS",
    icon: <SiNodedotjs />,
    type: "tool",
    color: "#50fc2d"
  },
  {
    id: 71259,
    title: "Express",
    icon: <SiExpress />,
    type: "tool",
    color: "#2dfc4f"
  }
];

export const expIcons: ProjectIcon[] = [
  {
    id: 59872,
    title: "MUI",
    icon: <SiMaterialui />,
    type: "tool",
    color: "#3dd5ff"
  },
  {
    id: 65252,
    title: "Vue",
    icon: <SiVuedotjs />,
    type: "tool",
    color: "#2dfc79"
  },
  {
    id: 87912,
    title: "SASS",
    icon: <SiSass />,
    type: "lang",
    color: "#f58aff"
  },
  {
    id: 74671,
    title: "Bootstrap",
    icon: <SiBootstrap />,
    type: "tool",
    color: "#9c24ff"
  },
  {
    id: 51534,
    title: "Styled C.",
    icon: <SiStyledcomponents />,
    type: "tool",
    color: "#fff382"
  },
  {
    id: 68721,
    title: "Dart",
    icon: <SiDart />,
    type: "lang",
    color: "#4c81fc"
  },
  {
    id: 73123,
    title: "Flutter",
    icon: <SiFlutter />,
    type: "tool",
    color: "#4c81fc"
  },
  {
    id: 87391,
    title: "MongoDB",
    icon: <SiMongodb />,
    type: "tool",
    color: "#2dfc4f"
  },
  {
    id: 62453,
    title: "Firebase",
    icon: <SiFirebase />,
    type: "tool",
    color: "#fc9e4c"
  },
  {
    id: 5622,
    title: "Postman",
    icon: <SiPostman />,
    type: "tool",
    color: "#fc924c"
  },
  {
    id: 8754,
    title: "Jest",
    icon: <SiJest />,
    type: "tool",
    color: "#eb4034"
  },
  {
    id: 98932,
    title: "Python",
    icon: <SiPython />,
    type: "lang",
    color: "#ecff42"
  },
  {
    id: 89793,
    title: "Tensoflow",
    icon: <SiTensorflow />,
    type: "tool",
    color: "#fc924c"
  },
  {
    id: 79312,
    title: "C/C++",
    icon: <SiCplusplus />,
    type: "lang",
    color: "#4ca7fc"
  },
  {
    id: 16232,
    title: "Java",
    icon: <SiJava />,
    type: "lang",
    color: "#334abd"
  },
  {
    id: 71623,
    title: "PHP",
    icon: <SiPhp />,
    type: "lang",
    color: "#6b5eb8"
  },
  {
    id: 6533,
    title: "MySQL",
    icon: <SiMysql />,
    type: "lang",
    color: "#4b50ad"
  },
  {
    id: 2977,
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    type: "lang",
    color: "#4b50ad"
  },
  {
    id: 51342,
    title: "Unity",
    icon: <SiUnity />,
    type: "tool",
    color: "#FFFFFF"
  }
];

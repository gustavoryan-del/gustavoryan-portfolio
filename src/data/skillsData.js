import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiC,
  SiSpringboot,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiCplusplus,
  SiHtml5,
} from "react-icons/si";

// color    → cor do logo (versão da marca legível no fundo escuro;
//            no tema light o CSS escurece automaticamente)
// gradient → [início, fim] do anel de progresso, tirado das cores da marca
export const skillsData = [
  {
    name: "Java",
    level: 60,
    icon: FaJava,
    color: "#F89820",
    gradient: ["#5382A1", "#F89820"],
    link: "https://github.com/gustavoryan-del",
  },
  {
    name: "Python",
    level: 40,
    icon: SiPython,
    color: "#4B8BBE",
    gradient: ["#3776AB", "#FFD43B"],
    link: "https://github.com/gustavoryan-del",
  },
  {
    name: "C",
    level: 10,
    icon: SiC,
    color: "#A8B9CC",
    gradient: ["#00599C", "#A8B9CC"],
    link: "https://github.com/gustavoryan-del",
  },
  {
    name: "Spring Boot",
    level: 10,
    icon: SiSpringboot,
    color: "#6DB33F",
    gradient: ["#3D7A2A", "#6DB33F"],
    link: "https://github.com/gustavoryan-del",
  },
  {
    name: "JavaScript",
    level: 30,
    icon: SiJavascript,
    color: "#F7DF1E",
    gradient: ["#E8A317", "#F7DF1E"],
    link: "https://github.com/gustavoryan-del/",
  },
  {
    name: "C++",
    level: 10,
    icon: SiCplusplus,
    color: "#A8B9CC",
    gradient: ["#00599C", "#A8B9CC"],
    link: "https://github.com/gustavoryan-del/",
  },
  {
    name: "React",
    level: 20,
    icon: SiReact,
    color: "#61DAFB",
    gradient: ["#087EA4", "#61DAFB"],
    link: "https://github.com/gustavoryan-del",
  },
];

import React from "react";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
} from "react-icons/io5";

import { FaJsSquare, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase  } from "react-icons/io5";


const skillsData = [
  { name: "React", icon: <IoLogoReact size={50} color="#61DAFB" /> },
  { name: "TypeScript", icon: <BiLogoTypescript size={55} color="#3178C6" /> },
  {
    name: "JavaScript",
    icon: (
      <div className="relative flex items-center justify-center bg-black rounded w-10 h-10">
        <FaJsSquare className="absolute" size={50} color="#F7DF1E" />
      </div>
    ),
  },
  { name: "Redux toolkit", icon: <SiRedux size={40} color="#7449bc" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} color="#99be4f" /> },
  {
    name: "Express.js",
    icon: (
      <SiExpress
        size={40}
        className="drop-shadow-2xs drop-shadow-[#656464]"
        color="#656464"
      />
    ),
  },
  { name: "HTML", icon: <IoLogoHtml5 size={50} color="#E34F26" /> },
  { name: "CSS", icon: <IoLogoCss3 size={50} color="#1572B6" /> },
  { name: "Sass", icon: <IoLogoSass size={45} color="#CC6699" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={50} color="#00b9d8" /> },
  { name: "Material UI", icon: <SiMui size={40} color="#007fff" /> },
  { name: "Firebase", icon: <IoLogoFirebase size={45} color="#ffb71f" /> },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">Skills</h1>
        <p className="text-sm text-dark-hover">My tech stack</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 sm:gap-x-20 md:gap-x-25 lg:gap-x-30 gap-y-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center "
          >
            <div className="w-16 h-16 mb-0 flex items-center justify-center rotate-0 hover:rotate-20 transition-all duration-75">
              {skill.icon}
            </div>
            <p className="text-sm text-dark-hover font-[400] cursor-default">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

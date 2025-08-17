import React from "react";
import profile from "../Assets/profile.png";
import { RiMoonLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 text-sm font-[500]">
      <div className="flex items-center text-[15px] tracking-widest cursor-pointer">
        <img src={profile} width={30} height={30} />
        merTTech
      </div>
      <div>
        <ul className="flex items-center gap-5 *:p-2 text-[13.5px] tracking-wide *:*:hover:text-violet-600">
          <a href="#">
            <li className="text-violet-600">Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Skills</li>
          </a>
          <a href="#">
            <li>Portfolio</li>
          </a>
          <a href="#" className="!pe-0">
            <li>Contact Me</li>
          </a>
          <li className="text-xl !p-0  hover:text-violet-600 transition-all cursor-pointer">
            <RiMoonLine />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

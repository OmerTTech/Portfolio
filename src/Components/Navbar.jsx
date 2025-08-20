import React from "react";
import profile from "../Assets/profile.png";
import { RiMoonLine } from "react-icons/ri";
import ScrollLink from "./ScrollLink";


const Navbar = () => {
  
  return (
    <nav className="max-w-[1000px] w-full hidden sm:flex items-center justify-between py-5.5 lg:px-2 sm:px-5 text-sm font-[500] bg-white">
      <ScrollLink to="home">
        <div className="flex items-center text-[15px] tracking-widest cursor-pointer !text-black">
          <img src={profile} className="hover:contrast-125 hover:brightness-95 drop-shadow-black drop-shadow-2xs rounded-full" width={30} height={30} />
          merTTech
        </div>
      </ScrollLink>
      <div>
        <ul className="flex items-center gap-5 *:px-2 *:py-0 text-[13.5px] tracking-wide *:hover:*:text-hover *:cursor-pointer">
          <ScrollLink to="home" offset={-70}>
            <li>Home</li>
          </ScrollLink>
          <ScrollLink to="about">
            <li>About</li>
          </ScrollLink>
          <ScrollLink to="skills">
            <li>Skills</li>
          </ScrollLink>
          <ScrollLink to="portfolio">
            <li>Portfolio</li>
          </ScrollLink>
          <ScrollLink to="contact">
            <li>Contact Me</li>
          </ScrollLink>
          <li className="text-xl !p-0 hover:text-main transition cursor-pointer">
            <RiMoonLine />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import profile from "../Assets/profile.png";
import { RiMoonLine } from "react-icons/ri";
import { Link } from "react-scroll";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  return (
    <nav className="w-[1000px] flex items-center justify-between py-5.5 px-2 text-sm font-[500] bg-white">
      <ScrollLink to="home">
        <div className="flex items-center text-[15px] tracking-widest cursor-pointer !text-black">
          <img src={profile} width={30} height={30} />
          merTTech
        </div>
      </ScrollLink>
      <div>
        <ul className="flex items-center gap-5 *:px-2 *:py-1 text-[13.5px] tracking-wide *:hover:text-main cursor-pointer">
          <ScrollLink to="home">
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

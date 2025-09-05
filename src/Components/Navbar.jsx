import React from "react";
import profile from "../Assets/profile.png";
import { RiMoonLine } from "react-icons/ri";
import ScrollLink from "./ScrollLink";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeHandler } from "../Store/Slices/Darkmode";
import { FiSun } from "react-icons/fi";

const Navbar = ({ isScrolled }) => {
  const isDarkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();
  return (
    <nav className="max-w-[1000px] w-full hidden sm:flex items-center justify-between py-5.5 lg:px-2 sm:px-5 sm:ps-8 lg:ps-0 text-sm font-[500] bg-white dark:bg-body-dark">
      <ScrollLink to="home">
        <div className="flex items-center text-[15px] tracking-widest cursor-pointer text-black dark:text-suplight-hover">
          <img
            src={profile}
            className="hover:contrast-125 hover:brightness-95 drop-shadow-black drop-shadow-2xs rounded-full"
            width={30}
            height={30}
          />
          merTTech
        </div>
      </ScrollLink>
      <div>
        <ul className="flex items-center gap-5 *:px-2 *:py-0 text-[13.5px] tracking-wide *:hover:*:!text-hover dark:*:hover:*:!text-morelight-hover *:cursor-pointer">
          <span
            className={`px-2 py-0 cursor-pointer ${
              isScrolled ? "" : "active"
            }`}
          >
            <ScrollLink to="home" offset={-300}>
              <li>Home</li>
            </ScrollLink>
          </span>
          <ScrollLink to="about" offset={85}>
            <li>About</li>
          </ScrollLink>
          <ScrollLink to="skills" offset={85}>
            <li>Skills</li>
          </ScrollLink>
          <ScrollLink to="portfolio" offset={85}>
            <li>Portfolio</li>
          </ScrollLink>
          <ScrollLink to="contact">
            <li>Contact Me</li>
          </ScrollLink>
          <li onClick={()=>dispatch(darkmodeHandler())} className="text-xl !p-0 hover:text-main transition cursor-pointer">
            {isDarkmode? <FiSun /> :<RiMoonLine />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

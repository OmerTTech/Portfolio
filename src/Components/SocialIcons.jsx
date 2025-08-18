import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-6 ps-4 text-xl text-main *:*:hover:text-hover mt-40 *:*:transition ease">
      <a target="_blank" href="https://www.linkedin.com/in/Omerttech">
        <SlSocialLinkedin className="drop-shadow-black drop-shadow-2xs text-lg" />
      </a>
      <a target="_blank" href="https://github.com/OmerTTech">
        <FiGithub className="drop-shadow-gray-500 drop-shadow-3xs"/>
      </a>
      <a target="_blank" href="https://www.instagram.com/omerttech/">
        <FaInstagram className="drop-shadow-black drop-shadow-4xs" />
      </a>
    </div>
  );
};

export default SocialIcons;

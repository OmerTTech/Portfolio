import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center -mt-2 gap-15 md:gap-6 sm:gap-9.5 ps-10 sm:ps-4 md:items-end lg:items-start text-4xl sm:text-xl text-main dark:text-morelight-hover *:*:hover:text-hover justify-center sm:mt-16.5 md:mt-38 *:*:transition ease h-full sm:h-auto">
      <a target="_blank" href="https://www.linkedin.com/in/Omerttech">
        <SlSocialLinkedin className="drop-shadow-black dark:drop-shadow-light-hover drop-shadow-2xs text-4xl sm:text-lg" />
      </a>
      <a target="_blank" href="https://github.com/OmerTTech">
        <FiGithub className="drop-shadow-gray-500 drop-shadow-3xs" />
      </a>
      <a target="_blank" href="https://www.instagram.com/omerttech/">
        <FaInstagram className="drop-shadow-black dark:drop-shadow-light-hover drop-shadow-4xs" />
      </a>
    </div>
  );
};

export default SocialIcons;

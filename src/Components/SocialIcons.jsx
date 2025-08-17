import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialIcons = () => {
  return (
    <>
      <SlSocialLinkedin className="drop-shadow-black drop-shadow-2xs text-lg" />
      <FiGithub />
      <FaInstagram className="drop-shadow-black drop-shadow-3xs"/>
    </>
  );
};

export default SocialIcons;

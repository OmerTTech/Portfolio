import React, { useEffect, useState } from "react";
import ScrollLink from "./ScrollLink";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import profile from "../Assets/profile.png";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const [offsetValue, setOffsetValue] = useState(850);

  useEffect(() => {
    const handleResize = () => {
      // Ekran genişliği 640px'den küçükse (Tailwind sm breakpoint'i)
      if (window.innerWidth < 640) {
        setOffsetValue(35);
      } else {
        setOffsetValue(850);
      }
    };

    // Component yüklendiğinde ve pencere boyutu değiştiğinde çalıştır
    handleResize();
    window.addEventListener("resize", handleResize);

    // Temizleme fonksiyonu: component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="w-full py-16 bg-main dark:bg-body-dark text-white">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-start px-4 md:px-0">
        {/* Logo ve unvan */}
        <div className="flex flex-col !items-center sm:items-start mb-6 sm:mb-0">
          <div className="flex items-center text-[28px] font-semibold tracking-widest cursor-pointer text-white dark:text-suplight-hover">
            <img
              src={profile}
              className="hover:contrast-125 hover:brightness-95 drop-shadow-black drop-shadow-2xs rounded-full transition-all duration-300"
              width={50}
              height={50}
            />
            <span>merTTech</span>
          </div>
        </div>

        {/* Linkler */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm tracking-wide mb-6 sm:mb-0">
          <ScrollLink to="about" offset={85}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              About
            </li>
          </ScrollLink>
          <ScrollLink to="qualification" offset={offsetValue}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              Qualification
            </li>
          </ScrollLink>
          <ScrollLink to="portfolio" offset={85}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              Portfolio
            </li>
          </ScrollLink>
          <ScrollLink to="contact">
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              Contact Me
            </li>
          </ScrollLink>
        </ul>

        {/* Sosyal Medya İkonları */}
        <div className="flex gap-4 text-xl text-white *:hover:!text-suplight-hover">
          <a target="_blank" href="https://www.linkedin.com/in/Omerttech">
            <FaLinkedinIn className="drop-shadow-black drop-shadow-2xs " />
          </a>
          <a target="_blank" href="https://github.com/OmerTTech">
            <FiGithub className="drop-shadow-black drop-shadow-2xs" />
          </a>
          <a target="_blank" href="https://www.instagram.com/omerttech/">
            <FaInstagram className="drop-shadow-black drop-shadow-3xs" />
          </a>
        </div>
      </div>

      {/* Copyright Metni */}
      <div className="max-w-[1000px] mx-auto text-center mt-16 px-4 md:px-0">
        <p className="text-[12px] text-white dark:text-suplight-hover">
          &copy;merTTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

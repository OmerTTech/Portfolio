import React from "react";
import ScrollLink from "./ScrollLink";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import profile from "../Assets/profile.png";
import { FiGithub } from "react-icons/fi";
import useWindowSize from "../Hooks/useWindowSize";
import { useSelector } from "react-redux";
import translations from "../Utils/translations";

const Footer = () => {
  const { width } = useWindowSize();
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];

  const qualificationOffset = width > 640 ? 850 : 1600;

  return (
    <footer className="w-full py-16 bg-main dark:bg-body-dark text-white shadow-nav-mobile-white">
      <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-start px-4 md:px-0">
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

        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg sm:text-sm tracking-wide mb-6 sm:mb-">
          <ScrollLink to="about" offset={85}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              {t.nav.about}
            </li>
          </ScrollLink>
          <ScrollLink to="qualification" offset={qualificationOffset}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              {t.qualification.title}
            </li>
          </ScrollLink>
          <ScrollLink to="portfolio" offset={85}>
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              {t.nav.portfolio}
            </li>
          </ScrollLink>
          <ScrollLink to="contact">
            <li className="text-white hover:text-superlight-hover dark:hover:text-suplight-hover">
              {t.nav.contact}
            </li>
          </ScrollLink>
        </ul>

        <div className="flex mt-4 sm:mt-0 gap-12 sm:gap-4 text-3xl sm:text-xl text-white *:hover:!text-suplight-hover">
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

      <div className="max-w-[1000px] mx-auto text-center mt-16 px-4 md:px-0">
        <p className="text-[12px] text-white dark:text-suplight-hover">
          &copy;merTTech. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

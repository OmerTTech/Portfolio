import React from "react";
import profile from "../../Assets/profile.png";
import ScrollLink from "../ScrollLink";
import { RiMoonLine } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";

const MobileNavbar = () => {
  return (
    <nav className="max-w-[1000px] w-full flex sm:hidden items-center justify-around gap-20 py-2  text-sm font-[500] bg-white">
      <ScrollLink to="home">
        <div className="flex items-center text-[15px] tracking-widest cursor-pointer !text-black">
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
        <ul className="flex items-center gap-5 *:px-2 *:py-0 text-[13.5px] tracking-wide *:hover:*:text-hover *:cursor-pointer">
          <li className="text-xl !p-0 hover:text-main transition">
            <RiMoonLine />
          </li>
          <li className="text-2xl hover:text-main transition">
            <AiOutlineAppstore />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;

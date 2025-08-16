import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import profile from "../Assets/profile.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-2 font-[900] tracking-wider">
      <div className="flex items-center text-lg">
        <img src={profile} width={50} height={50} />
        merTTech
      </div>
      <div>
        <ul className="flex items-center gap-5 *:p-2">
          <a href="#">
            <li className="text-sky-600">Home</li>
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
          <a href="#">
            <li>Contact Me</li>
          </a>
          <li className="text-2xl">
            <IoMoonOutline />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

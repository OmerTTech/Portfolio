import React, { useState } from "react";
import profile from "../../Assets/profile.png";
import ScrollLink from "../ScrollLink";
import { RiMoonLine } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import { BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { LiaFileAltSolid } from "react-icons/lia";
import { IoImageOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { FiFileText } from "react-icons/fi";

const MobileNavbar = ({isScrolled}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-[1000px] w-full flex sm:hidden items-center justify-between gap-20 ps-8 pe-4 py-6 pb-7  text-sm font-[500] bg-white">
      <ScrollLink to="home">
        <div className="flex items-center text-[15px] tracking-widest scale-110 cursor-pointer !text-black">
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
        <ul className="flex items-center gap-4 *:px-5 *:py-0 text-[13.5px] tracking-wide *:hover:*:text-hover *:cursor-pointer">
          <li className="text-xl !p-0 hover:text-main transition">
            <RiMoonLine />
          </li>
          <li className="text-3xl hover:text-main transition">
            <AiOutlineAppstore onClick={() => setOpen(true)} />
            <Drawer
              anchor={"bottom"}
              open={open}
              onClose={() => setOpen(false)}
              ModalProps={{
                disableScrollLock: true,
              }}
              BackdropProps={{ invisible: true }}
            >
              <div className="p-6 pb-2 *:*:hover:text-dark-hover">
                <div className="grid grid-cols-12 gap-6.5 *:cursor-pointer ">
                  <span className={`col-span-4 pt-2 py-1 ${isScrolled ? "" : "active"}`}>
                    <ScrollLink to="home" offset={-300}>
                      <div className="flex items-center justify-center">
                        <p className="flex flex-col items-center justify-center">
                          <BiHomeAlt className="text-2xl" />
                          <span className="text-md">Home</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-4 pt-2 py-1">
                    <ScrollLink to="about" offset={175}>
                      <div className="flex items-center justify-center">
                        <p className="flex flex-col items-center justify-center">
                          <GoPerson className="text-2xl drop-shadow-3xs drop-shadow-black" />
                          <span className="text-md">About</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-4 pt-2 py-1">
                    <ScrollLink to="skills" offset={175}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col items-center justify-center">
                          <FiFileText className="text-xl" />
                          <span className="text-md">Skills</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-6 ms-15 pt-2 py-1">
                    <ScrollLink to="portfolio" offset={175}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col items-center justify-center">
                          <IoImageOutline className="text-2xl drop-shadow-6xs drop-shadow-black" />
                          <span className="text-md">Portfolio</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-6 me-15 pt-2 py-1">
                    <ScrollLink to="contact" offset={0}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col flex-nowrap items-center justify-center">
                          <VscSend className="text-2xl drop-shadow-4xs drop-shadow-black" />
                          <span className="text-md text-nowrap">Contact Me</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>
                </div>
                <div className="flex justify-end text-4xl -ms-2 mb-4 w-full *:cursor-pointer">
                  <IoMdClose onClick={() => setOpen(false)} />
                </div>
              </div>
            </Drawer>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;

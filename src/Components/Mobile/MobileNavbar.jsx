import React, { useEffect, useState } from "react";
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

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="max-w-[1000px] w-full flex sm:hidden items-center justify-between gap-20 ps-5 pe-4 py-4  text-sm font-[500] bg-white">
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
        <ul className="flex items-center gap-4 *:px-3 *:py-0 text-[13.5px] tracking-wide *:hover:*:text-hover *:cursor-pointer">
          <li className="text-xl !p-0 hover:text-main transition">
            <RiMoonLine />
          </li>
          <li className="text-2xl hover:text-main transition">
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
                <div className="grid grid-cols-12 gap-5 *:cursor-pointer ">
                  <span className={`col-span-4 pt-2 py-1 ${isScrolled ? "" : "active"}`}>
                    <ScrollLink to="home" offset={0}>
                      <div className="flex items-center justify-center">
                        <p className="flex flex-col items-center justify-center">
                          <BiHomeAlt className="text-xl" />
                          <span className="text-sm">Home</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-4 pt-2 py-1">
                    <ScrollLink to="about" offset={0}>
                      <div className="flex items-center justify-center">
                        <p className="flex flex-col items-center justify-center">
                          <GoPerson className="text-xl drop-shadow-3xs drop-shadow-black" />
                          <span className="text-sm">About</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-4 pt-2 py-1">
                    <ScrollLink to="skills" offset={40}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col items-center justify-center">
                          <FiFileText className="text-lg" />
                          <span className="text-sm">Skills</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-6 pt-2 py-1">
                    <ScrollLink to="portfolio" offset={40}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col items-center justify-center">
                          <IoImageOutline className="text-xl drop-shadow-6xs drop-shadow-black" />
                          <span className="text-sm">Portfolio</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>

                  <span className="col-span-6 pt-2 py-1">
                    <ScrollLink to="contact" offset={50}>
                      <div className="flex items-center justify-center ">
                        <p className="flex flex-col items-center justify-center">
                          <VscSend className="text-xl drop-shadow-4xs drop-shadow-black" />
                          <span className="text-sm">Contact Me</span>
                        </p>
                      </div>
                    </ScrollLink>
                  </span>
                </div>
                <div className="flex justify-end text-2xl ms-2 w-full *:cursor-pointer">
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

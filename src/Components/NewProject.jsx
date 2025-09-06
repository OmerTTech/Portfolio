// src/components/NewProject.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@mui/material";
import ScrollLink from "./ScrollLink";
import { TbSend2 } from "react-icons/tb";
import NewProjectImage from "../Assets/NewProjectImage.png";

const NewProject = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className="bg-main dark:bg-moredark-hover w-full md:w-[700px] sm:rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between text-white overflow-hidden">
        {/* Sol taraftaki metin ve buton */}
        <div className="px-8 max-sm:ps-5 py-4 md:py-12 lg:py-16 flex flex-col text-center sm:text-start items-center sm:items-start w-full lg:w-10/20">
          <h2 className="text-2xl sm:text-lg sm:text-[22px] font-semibold mb-2 text-nowrap">
            You have a new project ?
          </h2>
          <p className="text-[15px] sm:text-[14px] mb-6">
            I would love to chat with you about your project and see how we can
            work together to create something truly amazing. Let's connect.
          </p>
          <ScrollLink to="contact" offset={100}>
            <Button
              variant="contained"
              className="!capitalize !rounded-lg !p-3 lg:!p-3.5 !text-[16px] !font-[500] md:!pe-3.5 lg:!pe-3.5 !bg-white !text-main ease drop-shadow-sm dark:drop-shadow-2xs drop-shadow-light-hover"
              endIcon={<TbSend2 />}
              
            >
              Contact Me
            </Button>
          </ScrollLink>
        </div>

        {/* Sağ taraftaki resim */}
        <div className="w-full lg:w-4/10 sm:-ms-8 md:-ms-10 -mt-15 -mb-4 md:-mb-12 lg:-mb-16 flex justify-center lg:justify-start">
          <img
            src={NewProjectImage}
            alt="An professional developer"
            className="h-[340px] sm:h-[380px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProject;
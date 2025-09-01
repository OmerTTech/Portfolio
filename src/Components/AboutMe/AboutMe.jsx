import React, { useState } from "react";
import ImgSlider from "./ImgSlider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@mui/material/Button";
import { LuDownload } from "react-icons/lu";
import OmerTTech_CV_EN from "../../Assets/CV/OmerTTech_CV_EN.pdf";
import { slidesData } from "./slidesData";

const AboutMe = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-[600]">About Me</h1>
        <p className="text-sm text-dark-hover">My Introduction</p>
      </div>
      <div className="flex flex-col md:flex-row  md:justify-around p-5 pt-15 relative">
        <div className="w-full md:w-[40%] object-contain mb-5 md:mb-0">
          <ImgSlider currentImageIndex={currentSlideIndex} />
        </div>
        <div className="w-full md:w-[40%] flex flex-col pt-3">
          <div className="text-center md:text-start pe-5 h-[290px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-2 text-hover">
              {slidesData[currentSlideIndex].title}
            </h2>
            <p className="text-supdark-hover">{slidesData[currentSlideIndex].text}</p>
          </div>

          <div className="flex flex-col justify-center items-center pe-5">
            <div className="flex justify-center items-center mt-5 gap-5 sm:gap-7 md:gap-4">
              <button
                onClick={handlePrevSlide}
                className="text-4xl md:text-3xl text-dark-hover hover:text-supdark-hover"
              >
                <FaArrowLeft />
              </button>

              {slidesData.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentSlideIndex === index
                      ? "bg-supdark-hover"
                      : "bg-light-hover"
                  }`}
                />
              ))}

              <button
                onClick={handleNextSlide}
                className="text-4xl md:text-3xl text-dark-hover hover:text-supdark-hover"
              >
                <FaArrowRight />
              </button>
            </div>
            <a
              className="mt-10"
              href={OmerTTech_CV_EN}
              download="OmerTTech_CV_EN.pdf"
            >
              <Button
                variant="contained"
                className=" !capitalize !p-3 lg:!p-3 !text-lg !font-[500] md:!pe-3.5 lg:!pe-3.5 !bg-main hover:!bg-dark-hover ease"
                endIcon={<LuDownload />}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

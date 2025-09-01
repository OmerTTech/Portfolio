import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@mui/material/Button";
import AIT_stats from "./image2.png";

const portfolioSlides = [
  {
    id: 1,
    image: AIT_stats,
    title: "AIT stats",
    text: "This project is a student-teacher management system built with React. It features secure role-based access using JWT and communicates with \n a JSON-Server mini backend via Axios.",
    demoLink: "http://aitskills.netlify.app",
  },
];

const Portfolio = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % portfolioSlides.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + portfolioSlides.length) % portfolioSlides.length
    );
  };

  const currentProject = portfolioSlides[currentSlideIndex];

  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">Portfolio</h1>
        <p className="text-sm text-dark-hover">Most recent work</p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly p-5 relative">
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 mx-5 lg:mx-0 -translate-y-1/2 text-5xl text-main hover:text-supdark-hover transition-colors duration-300 hidden md:block"
        >
          <FaArrowLeft />
        </button>

        <div className="w-full md:w-[45%] object-contain ms-5 mb-5 md:mb-0 flex justify-center items-center drop-shadow-xs drop-shadow-secondary">
          <div className="aspect-16/10 overflow-hidden flex items-center justify-center">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-[40%] flex flex-col pt-3 items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-3 text-hover">
            {currentProject.title}
          </h2>
          <p className="text-lg text-supdark-hover mb-6 max-w-md whitespace-pre-line">
            {currentProject.text}
          </p>
          <a
            href={currentProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              className="!capitalize !p-3 !text-lg !font-[500] !bg-main hover:!bg-dark-hover ease-in-out duration-300"
              endIcon={<FaArrowRight />}
            >
              Demo
            </Button>
          </a>
        </div>

        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-main hover:text-supdark-hover transition-colors duration-300 hidden md:block"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center items-center mt-10 gap-3">
        {portfolioSlides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlideIndex === index ? "bg-main" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

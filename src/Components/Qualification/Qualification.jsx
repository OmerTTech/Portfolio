import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { workExperience, education } from "./QualfData.jsx";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("work");
  const currentData = activeTab === "work" ? workExperience : education;

  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <h1 className="text-4xl font-[600]">Qualification</h1>
        <p className="text-sm text-dark-hover">My personal journey</p>
      </div>

      <div className="flex justify-center gap-8 mb-12 *:cursor-pointer">
        <button
          className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
            activeTab === "work"
              ? "text-main bg-sky-100"
              : "text-secondary hover:text-main"
          }`}
          onClick={() => setActiveTab("work")}
        >
          <FaBriefcase size={24} />
          <span className="text-lg font-medium">Work</span>
        </button>
        <button
          className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
            activeTab === "education"
              ? "text-main bg-sky-100"
              : "text-secondary hover:text-main"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap size={24} />
          <span className="text-lg font-medium">Education</span>
        </button>
      </div>

      <div className="relative mx-auto max-w-xl px-0 sm:px-6 lg:px-8">
        {currentData.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === currentData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, company, years, side, isLast }) => {
  const isLeft = side === "left";
  return (
    <div className={`relative ${!isLast && "pb-8"}`}>
      {/* Eğer son öğe değilse alttaki çizgiyi oluştur */}
      {!isLast && (
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-main transform -translate-x-1/2"></div>
      )}
      {/* Nokta */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-main z-10"></div>

      {/* İçerik div'i */}
      <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
        <div className="w-1/2  px-0 sm:px-4">
          <div
            className={`p-4 pt-0 -mt-3 rounded-lg ${
              isLeft ? "mr-auto" : "ml-auto"
            }`}
          >
            <h3 className="text-md sm:text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-[14px] sm:text-sm text-secondary mb-1">{company}</p>
            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
              {years ? <LuCalendarDays className="-mt-[3px] sm:mt-0 mr-1 text-md sm:text-lg" /> : ""}
              <span>{years}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;

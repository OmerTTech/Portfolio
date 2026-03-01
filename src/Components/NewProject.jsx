import React from "react";
import { TbSend2 } from "react-icons/tb";
import NewProjectImage from "../Assets/NewProjectImage.png";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import translations from "../Utils/translations";

const NewProject = () => {
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];

  return (
    <div className="pt-20 flex justify-center">
      <div className="bg-main dark:bg-moredark-hover w-full md:w-[700px] sm:rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between text-white overflow-hidden">
        <div className="px-8 max-sm:ps-5 py-4 md:py-12 lg:py-16 flex flex-col text-center sm:text-start items-center sm:items-start w-full lg:w-10/20">
          <h2 className="text-2xl sm:text-lg sm:text-[22px] font-semibold mb-2 text-nowrap">
            {t.newProject.title}
          </h2>
          <p className="text-[15px] sm:text-[14px] mb-6">
            {t.newProject.text}
          </p>
          <Link to="contact" offset={100} smooth={true} duration={500}>
            <button
              className="!capitalize !rounded-lg !p-3 lg:!p-3.5 !text-[16px] !font-[500] md:!pe-3.5 lg:!pe-3.5 !bg-white !text-main ease drop-shadow-sm dark:drop-shadow-2xs drop-shadow-light-hover cursor-pointer"
            >
              {t.nav.contact} <TbSend2 className="inline ml-1" />
            </button>
          </Link>
        </div>

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

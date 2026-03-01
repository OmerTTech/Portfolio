import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import { TbSend2 } from "react-icons/tb";
import ScrollLink from "./ScrollLink";
import { useSelector } from "react-redux";
import translations from "../Utils/translations";

const Header = () => {
  const lang = useSelector((state) => state.language.lang);
  const t = translations[lang];

  return (
    <div>
      <h1 className="text-[32px]/10 md:text-[32px]/12 md:mt-2 lg:text-5xl/18 font-[600] w-full sm:block md:flex flex-col flex-wrap sm:flex-nowrap">
        <p>{t.home.hi}</p>
        <p>{t.home.name}</p>
      </h1>
      <div className="mt-2">
        <TypeAnimation
          sequence={[
            lang === "az" ? "Mən Frontend Developerəm" : "I am a Frontend Developer",
            2500,
            lang === "az" ? "Mən Web Developerəm" : "I am a Web Developer",
            1250,
          ]}
          speed={60}
          cursor={false}
          className="text-dark-hover dark:text-morelight-hover text-xl font-[500]"
          repeat={Infinity}
          wrapper="span"
        />
        <div className="mt-6">
          <ScrollLink to="contact" duration={2250} offset={100}>
            <Button
              variant="contained"
              className="!capitalize !p-3 lg:!p-2.5 !text-lg !font-[500] md:!pe-3.5 lg:!pe-3 !bg-main hover:!bg-dark-hover ease"
              endIcon={<TbSend2 />}
            >
              {t.home.contact}
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import { TbSend2 } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";
import ScrollLink from "./ScrollLink";

const Header = () => {
  return (
    <div>
      <h1 className="text-[32px]/10 md:text-[32px]/12 md:mt-2 lg:text-5xl/18 font-[600] w-full sm:block md:flex flex-col flex-wrap sm:flex-nowrap">
        <p>Hi, I am </p>
        <p>Omer Tapdiqov</p>
      </h1>
      <div className="mt-2">
        <TypeAnimation
          sequence={[
            "I am a Frontend Developer",
            2500,
            "I am a Web Developer",
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
              Contact Me
            </Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

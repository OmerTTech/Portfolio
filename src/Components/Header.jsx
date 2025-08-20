import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import { TbSend2 } from "react-icons/tb";
import ScrollLink from "./ScrollLink";

const Header = () => {
  return (
    <div className="bg-red-500">
      <h1 className="sm:text-3xl/18 md:text-[32px]/12 md:mt-2 lg:text-5xl/18 font-[600] w-full sm:block md:flex lg:flex flex-col flex-wrap md:flex-nowrap">
  <span>Hi, I am&nbsp;</span>
  <span>Omer Tapdiqov</span>
</h1>
      <div className="mt-2">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I am a Web Developer",
            1250,
            "I am a Frontend Developer",
            2500,
          ]}
          speed={60}
          cursor={false}
          className="text-zinc-500 text-xl font-[500]"
          repeat={Infinity}
          wrapper="span"
        />
        <div className="mt-6">
          <ScrollLink to="contact" duration={2250}>
            <Button
              variant="contained"
              className="!capitalize md:!p-3 lg:!p-2 !text-lg !font-[500] md:!pe-3.5 lg:!pe-2.5 !bg-main hover:!bg-dark-hover ease"
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

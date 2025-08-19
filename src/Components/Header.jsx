import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "@mui/material/Button";
import { TbSend2 } from "react-icons/tb";
import ScrollLink from "./ScrollLink";

const Header = () => {
  return (
    <div>
      <h1 className="text-5xl/18 font-[600] w-100">
        Hi, I am <br />
        Omer Tapdiqov
      </h1>
      <div className="mt-2">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I am a Web Developer",
            1500,
            "I am a Frontend Developer",
            2500,
            "I’m becoming a JavaScript Full Stack Developer",
            1000,
            "I aim to be a Senior JavaScript Software Developer",
            1000,
          ]}
          speed={60}
          className="text-zinc-500 text-xl font-[500]"
          repeat={Infinity}
        />
        <div className="mt-6">
          <ScrollLink to="contact" duration={2250}>
            <Button
              variant="contained"
              className="!capitalize !p-2 !text-lg !font-[500] !pe-2.5 !bg-main hover:!bg-light-hover ease"
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

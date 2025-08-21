import React from "react";
import ImgSlider from "./ImgSlider";

const AboutMe = () => {
  return (
    <div className="-ms-3 px-15 h-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-[600]">About Me</h1>
        <p className="text-sm text-dark-hover">My Introduction</p>
      </div>
      <div className="flex items-center justify-around p-5 pt-5">
        <div className="w-[40%] object-contain">
          <ImgSlider />
        </div>
        <div className="w-[40%] pt-10 text-secondary">
          <p>
            <b>This is an copy-paste example:&nbsp;</b>
            I have 3+ years of experience and a deep understanding of various web
            technologies such as HTML, CSS, JavaScript, TypeScript, Angular,
            MEAN, Vue.js, and React. I am dedicated to keeping up with the
            latest trends and techniques in web development, and I am constantly
            learning and expanding my skill set. I have a keen eye for detail
            and strive for perfection in every project I work on. When I'm not
            coding, I enjoy exploring new technologies and work on side
            projects. I am a sports enthusiast. I play basketball and go to
            practice regularly. I am also a big football fan and my favourite
            club is Arsenal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

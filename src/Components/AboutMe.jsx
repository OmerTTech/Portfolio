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
            Part 1 – Current Work
            <br />
            I am currently working as a Front-End Developer, building projects
            within the JavaScript ecosystem, particularly with React and
            Node.js. I dedicate myself to staying up to date with the latest
            trends and techniques in web development, constantly learning and
            expanding my skill set.
            <br />
            <br />
            Part 2 – Education (2022–2025)
            <br />
            Between 2022 and 2025 (at the age of 15–18), I completed 3 years of
            DUAL vocational education in ICT. During this time, I both studied
            theoretical subjects at school and worked in a company as part of my
            practical training.
            <br />
            <br />
            As part of this journey, my achievements were also featured on my
            vocational school’s official Instagram page, where I invited new
            students to join through a promotional video.
            <br />
            <a
              target="_blank"
              href="https://www.instagram.com/p/DDhm4ottLUL/"
              className="!text-light-hover hover:!text-hover"
            >
              Watch the video here!
            </a>
            <br />
            <br />
            Part 3 – Growth & Opportunities
            <br />
            In 2023/2024, my dedication and effort significantly grew. As a
            result, I was rewarded with the opportunity to join a free Front-End
            Developer course and contribute to multiple projects under a signed
            agreement. This experience gave me valuable exposure to real-world
            teamwork and project delivery.
            <br />
            <br />
            Part 4 – Success Story & Soft Skills
            <br />
            After completing my education, I had the chance to share my success
            story with senior professionals and audiences who were eager to hear
            about my journey. Through these experiences, I not only strengthened
            my technical knowledge but also developed essential soft skills such
            as empathy, strategic thinking, business acumen, and a
            client-oriented mindset.
            <br />
            <br />
            Part 5 – Passion & Future Goals
            <br />
            I truly enjoy working on diverse projects with React, and when I’m
            not coding, I love exploring new technologies and contributing to
            side projects. Currently, I am focused on full-stack development
            with the MERN stack, while continuously improving myself in the
            programming world.
            <br />
            <br />
            Part 6 – Lifelong Ambition
            <br />
            My deep passion and lifelong ambition drive me to become a versatile
            JavaScript Software Developer/Engineer, building solutions across
            every platform with the power of JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

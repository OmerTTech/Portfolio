import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import SocialIcons from "../Components/SocialIcons";
import Header from "../Components/Header";
import { Element, animateScroll as scroll } from "react-scroll";

const PublicHome = () => {
  useEffect(() => {
    if (window.scrollY < 1) {
      scroll.scrollTo(1);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center ps-4">
      <div className="w-[1000px] fixed top-0 z-50 flex flex-col items-center">
        <Navbar />
      </div>
      <Element name="home" className="w-[1000px]" offset={-70}>
        <main className="mt-38.5">
          <section className="grid grid-cols-12">
            <div className="col-span-1">
              <SocialIcons />
            </div>
            <div className="col-span-8 pt-7.5 ps-20">
              <Header />
            </div>
            <div className="col-span-3">2</div>
          </section>
        </main>
      </Element>
      <Element name="about">
        <section className="h-[100vh]">a</section>
      </Element>
      <Element name="skills">
        <section className="h-[100vh]">b</section>
      </Element>
      <Element name="portfolio">
        <section className="h-[100vh]">c</section>
      </Element>
      <Element name="contact">
        <section className="h-[100vh]">contact</section>
      </Element>
    </div>
  );
};

export default PublicHome;

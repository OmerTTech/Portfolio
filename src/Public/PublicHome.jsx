import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Element } from "react-scroll";
import MainSection from "../Components/MainSection";
import MobileNavbar from "../Components/Mobile/MobileNavbar";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills";
import Qualification from "../Components/Qualification/Qualification";
import Portfolio from "../Components/Portfolio/Portfolio";

const PublicHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollHandler, setScrollHandler] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 40) {
        setScrollHandler(true);
      } else {
        setScrollHandler(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-full fixed bottom-0 sm:bottom-auto sm:top-0 z-50 flex flex-col items-center transition ease-in sm:ease-in-out ${
          scrollHandler ? "shadow-nav-mobile sm:shadow-nav-pc" : ""
        }`}
      >
        <Navbar isScrolled={isScrolled} />
        <MobileNavbar isScrolled={isScrolled} />
      </div>
      <div className="*:max-w-[1000px] *:w-full ps-0 sm:ps-4 md:ps-0">
        <Element name="home" offset={-70}>
          <MainSection />
        </Element>

        <Element name="about" className="ps-4">
          <section className="pt-50">
            <AboutMe />
          </section>
          <section className="pt-30">
            <Qualification />
          </section>
        </Element>

        <Element name="skills">
          <section className="pt-30">
            <Skills />
          </section>
        </Element>
        <Element name="portfolio">
          <section className="pt-30">
            <Portfolio />
          </section>
        </Element>
        <Element name="contact">
          <section className="h-[120vh]">contact</section>
        </Element>
      </div>
    </div>
  );
};

export default PublicHome;

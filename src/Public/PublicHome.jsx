import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Element } from "react-scroll";
import Main from "../Components/Main";
import MobileNavbar from "../Components/Mobile/MobileNavbar";

const PublicHome = () => {
  const [scrollHandler, setScrollHandler] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde scroll pozisyonunu kontrol et
    const handleScroll = () => {
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
    <div className="flex flex-col items-center justify-center ps-4">
      <div
        className={`w-full -ms-4 fixed bottom-0 sm:bottom-auto sm:top-0 z-50 flex flex-col items-center transition ease-in sm:ease-in-out ${
          scrollHandler ? "shadow-nav-mobile sm:shadow-nav-pc" : ""
        }`}
      >
        <Navbar />
        <MobileNavbar />
      </div>
      <Element name="home" className="max-w-[1000px] w-full" offset={-70}>
        <Main />
      </Element>
      <Element name="about">
        <section className="h-[120vh]">a</section>
      </Element>
      <Element name="skills">
        <section className="h-[120vh]">b</section>
      </Element>
      <Element name="portfolio">
        <section className="h-[120vh]">c</section>
      </Element>
      <Element name="contact">
        <section className="h-[120vh]">contact</section>
      </Element>
    </div>
  );
};

export default PublicHome;

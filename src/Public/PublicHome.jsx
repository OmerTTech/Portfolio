import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Element, animateScroll as scroll} from "react-scroll";
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

    // Scroll event listener'ı ekle
    window.addEventListener("scroll", handleScroll);

    // Component unmount edildiğinde (sayfadan ayrıldığında) event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
      if (window.scrollY < 1) {
        scroll.scrollTo(1);
      }
    }, []);
  return (
    <div className="flex flex-col items-center justify-center ps-4">
      <div className={`w-full -ms-4 fixed top-0 z-50 flex flex-col items-center ${scrollHandler? "ShadowBlack shadow-main" : ""}`}>
        <Navbar scrollHandler={scrollHandler} />
        <MobileNavbar/>
      </div>
      <Element name="home" className="max-w-[1000px] w-full" offset={-70}>
        <Main/>
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

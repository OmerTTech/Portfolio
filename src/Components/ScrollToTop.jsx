import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollLink from "./ScrollLink";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-25 right-[30px] sm:bottom-6 sm:right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ScrollLink to="home" offset={-300}>
        <button className="bg-main dark:bg-dark-hover text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none">
          <FaArrowUp />
        </button>
      </ScrollLink>
    </div>
  );
};

export default ScrollToTop;

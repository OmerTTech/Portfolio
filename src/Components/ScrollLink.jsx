import React from "react";
import { Link } from "react-scroll";

const ScrollLink = ({to = "/", duration = 500, offset=20, children}) => {
    
  return (
    <Link
      to={to} // Hedef ID
      spy={true} // Sayfa kaydığında linkin aktif olmasını sağlar
      smooth={true} // Yumuşak kaydırma
      duration={duration} // Kaydırma süresi (ms)
      offset={offset}
      className="text-main cursor-pointer" // Tailwind sınıflarını burada veriyoruz
    >
      {children}
    </Link>
  );
};

export default ScrollLink;

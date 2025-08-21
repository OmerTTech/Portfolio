import React, { useEffect, useState } from "react";
import image1 from "../Assets/ImgSlider/image1.png";
import image2 from "../Assets/ImgSlider/image2.png";
import image3 from "../Assets/ImgSlider/image3.png";
const images = [image1, image2, image3];

const ImgSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div
        className="w-full h-86 bg-cover bg-center transition-all duration-5000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default ImgSlider;

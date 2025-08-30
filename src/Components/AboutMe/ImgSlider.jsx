import React from "react";
import image1 from "../../Assets/ImgSlider/image1.png";
import image2 from "../../Assets/ImgSlider/image2.png";
import image3 from "../../Assets/ImgSlider/image3.png";
import image4 from "../../Assets/ImgSlider/image4.png";
import image5 from "../../Assets/ImgSlider/image5.png";
import image6 from "../../Assets/ImgSlider/image6.png";
const images = [image1, image2, image3, image4, image5, image6];

// Bileşen artık bir prop (currentImageIndex) alıyor.
const ImgSlider = ({ currentImageIndex }) => {
  return (
    <div>
      <div
        className="w-full h-86 bg-cover bg-center transition-all duration-500 ease-in-out" // Geçiş süresi 500ms'ye düşürüldü
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default ImgSlider;
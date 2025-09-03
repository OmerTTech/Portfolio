import React from "react";
import image1 from "../../Assets/ImgSlider/ATL_Intern.jpg";
import image2 from "../../Assets/ImgSlider/Mezun.jpg";
import image3 from "../../Assets/ImgSlider/FED_Diploma.jpg";
import image4 from "../../Assets/ImgSlider/Microphone_alman.jpg";
import image5 from "../../Assets/ImgSlider/Demoday_Project.jpg";
import image6 from "../../Assets/ImgSlider/Future_software_dev.jpg";
const images = [image1, image2, image3, image4, image5, image6];

// Bileşen artık bir prop (currentImageIndex) alıyor.
const ImgSlider = ({ currentImageIndex }) => {
  return (
    <div>
      <div
        className="w-full h-100 sm:h-86 bg-cover sm:bg-contain md:bg-cover bg-no-repeat bg-center transition-all duration-500 drop-shadow-sm drop-shadow-secondary" // Geçiş süresi 500ms'ye düşürüldü
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default ImgSlider;

import React from "react";
import OmerTTech from "./OmerTTech.png";

const BlobClip = () => {
  const polygonPath =
    "300px 58.74px, 300px 58.74px, 306.69px 71.81px, 311.41px 86.09px, 314.25px 101.37px, 315.27px 117.39px, 314.54px 133.92px, 312.16px 150.73px, 308.18px 167.58px, 302.68px 184.24px, 295.73px 200.46px, 287.42px 216.02px, 287.42px 216.02px, 277.82px 230.69px, 267.09px 244.33px, 255.38px 256.79px, 242.81px 267.95px, 229.56px 277.67px, 215.76px 285.82px, 201.55px 292.26px, 187.09px 296.86px, 172.52px 299.48px, 157.99px 300px, 157.99px 300px, 143.63px 298.4px, 129.53px 294.7px, 115.76px 289.07px, 102.37px 281.65px, 89.45px 272.6px, 77.07px 262.08px, 65.29px 250.23px, 54.18px 237.2px, 43.82px 223.16px, 34.27px 208.25px, 34.27px 208.25px, 25.62px 192.72px, 17.99px 176.69px, 11.52px 160.38px, 6.35px 143.99px, 2.63px 127.73px, 0.49px 111.8px, 0.06px 96.42px, 1.5px 81.78px, 4.94px 68.1px, 10.52px 55.58px, 10.52px 55.58px, 18.41px 44.47px, 28.36px 34.68px, 40.16px 26.19px, 53.55px 18.96px, 68.32px 12.96px, 84.22px 8.14px, 101.01px 4.47px, 118.47px 1.91px, 136.35px 0.44px, 154.43px 0px, 154.43px 0px, 172.48px 0.65px, 190.29px 2.34px, 207.67px 5.11px, 224.41px 9px, 240.31px 14.08px, 255.15px 20.38px, 268.75px 27.95px, 280.89px 36.83px, 291.38px 47.08px, 300px 58.74px";
  return (
    <div>
      <div
        className="w-[320px] h-[320px] sm:w-[380px] sm:h-[320px] md:w-[320px] md:h-[320px] bg-main hover:bg-[#5b7fd1] transition ease overflow-hidden scale-100 sm:scale-85 md:scale-100"
        style={{
          clipPath: `polygon(${polygonPath})`,
          WebkitClipPath: `polygon(${polygonPath})`,
        }}
      >
        <img
          src={OmerTTech}
          alt="My image"
          className="w-full h-full object-contain saturate-85 brightness-120 drop-shadow-2xl decoration-black scale-110 mt-5 sm:-ms-7 md:ms-auto"
        />
      </div>
    </div>
  );
};

export default BlobClip;

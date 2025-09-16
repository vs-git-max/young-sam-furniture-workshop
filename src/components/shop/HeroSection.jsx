import React from "react";
import bgBanner2 from "../../assets/banner-b3.jpg";

const HeroSection = () => {
  return (
    <section className="pt-10 lg:pt-11  bg-green-50 max-w-screen w-full  h-screen">
      <div className="max-w-screen lg:h-2/3 h-5/12 relative">
        <img
          src={bgBanner2}
          alt=""
          className="object-cover w-full h-full aspect-square "
        />
      </div>
      <div className="absolute inset-0 bg-green-9500 "></div>
      <div className="absolute flex w-full items-center justify-between"></div>
    </section>
  );
};

export default HeroSection;

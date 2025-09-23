import React, { useContext } from "react";
import bgBanner3 from "../../assets/banner-b3.jpg";
import bgBanner2 from "../../assets/banner-b2.jpg";
import MyAppContext from "@/context/Context";

const HeroSection = () => {
  const { navigate } = useContext(MyAppContext);

  return (
    <section className="pt-10 lg:pt-11 bg-green-50 w-full h-screen">
      <div className="relative w-full h-full">
        {/* Background */}
        <img
          src={bgBanner3}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-green-950/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-5 px-5">
          {/* Left: Text */}
          <div className="flex flex-col items-center lg:items-start gap-3 max-w-lg">
            <h1 className="font-bold bg-gradient-to-r from-green-950 to-orange-700 text-transparent bg-clip-text lg:text-6xl text-4xl text-center lg:text-left tracking-wider">
              Designed for Living, Built for You
            </h1>
            <p className="font-semibold text-green-50 text-sm text-center lg:text-left">
              Discover pieces that blend comfort, style, and durability— made to
              feel like they’ve always belonged in your home.
            </p>
            <div className="flex gap-5 mt-5">
              <button className="bg-orange-600 text-green-50 font-bold py-2 px-4 rounded-3xl hover:opacity-95 transition-all"  onClick={navigate('/shop')}>
                Explore
              </button>
              <button className="bg-green-950 text-orange-600 font-bold py-2 px-4 rounded-3xl hover:opacity-95 transition-all">
                Buy now
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="overflow-hidden h-96 w-full lg:w-3/4">
              <img
                src={bgBanner2}
                alt="Furniture"
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

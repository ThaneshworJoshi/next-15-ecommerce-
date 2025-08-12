import React from "react";
import { HeroBannerProps } from "./HeroBanner.types";

export const HeroBanner: React.FC<HeroBannerProps> = ({ title, media }) => {
  return (
    <div className="container max-w-[1800px] relative mx-auto">
      {/* Hero Image Wrapper */}
      <div className="relative aspect-[1500/654] w-full">
        
        {/* Background Image */}
        <div
          className="relative flex flex-col justify-center w-full h-full text-white bg-center bg-cover"
          style={{ backgroundImage: `url('${media.imageUrl}')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0"></div>

          {/* Hero Content */}
          <div className="relative ml-5 sm:ml-30 md:ml-40 max-w-[170] sm:max-w-[380] md:max-w-[500px] z-20 tracking-wide">
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]">{title}</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;

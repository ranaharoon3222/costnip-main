import React from "react";
import Image from "next/image";
import featured1 from "../../assets/featured1.png";

const MobileViewBlogs = () => {
  return (
    <>
      <div className="relative">
        <Image src={featured1} alt="" className="rounded-lg" />
        <div className="absolute top-[15px] left-[10px] bg-[#88888861] text-[10px] py-2 px-3 text-white font-semibold rounded-md">
          <span>Guest Blog</span>
        </div>
      </div>
      <h5 className="font-semibold md:font-bold text-[#2C2524] leading-6 md:leading-7 text-base mt-4 mb-2">
        The Benefits of Regular Exercise for Your Mental Health
      </h5>
      <p className="text-[#98989E] text-xs md:text-sm leading-5 md:leading-6 mb-1">
        Use our search and filtering system to find medical, dental, and
        vision...
      </p>
      <span className="text-[#1B1B1C] text-[10px] font-medium block py-2">
        <span className="text-[#9899BF]">Written by:</span> Care Rosenbloom
      </span>
    </>
  );
};

export default MobileViewBlogs;

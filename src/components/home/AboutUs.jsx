import React from "react";
import Image from "next/image";
import horns from "../../assets/horns.png";

const AboutUs = () => {
  return (
    <div className="md:flex justify-between w-full md:w-5/6 m-auto mt-20 mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="mr-20 md:basis-1/2 lg:basis-2/5">
        <Image src={horns} alt="" className="w-full"/>
      </div>
      <div className="mt-6 md:mt-0 text-center md:text-left md:basis-1/2 lg:basis-3/5">
        <h6 className="text-[#4874FF] tracking-tight uppercase text-xs md:text-sm lg:text-base font-medium">ABOUT US</h6>
        <h4 className="text-[#1F2937] font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-[36px] md:leading-[44px]">IsoHorns</h4>
        <p className="text-[#4B5563] text-sm lg:text-base leading-6 tracking-tight mt-1">
          If you install a 5 GHz horn antenna today then you will likely need to
          replace it when 6 GHz radios become available. If you use our horn
          antennas then you will be able to swap out the radio in the future as
          technology improves. And our antennas outperform other antenna
          manufacturers on both 5 and 6 GHz! <br /> <br /> IsoHorns is the premier
          manufacturer of high-quality wideband horn antennas designed
          specifically for Wireless Internet Service Providers (WISPs) operating
          in both the 5 GHz and 6 GHz frequency bands. Our innovative,
          state-of-the-art horn antennas provide standalone performance,
          reliability, and durability, making them the top choice for WISPs
          around the world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

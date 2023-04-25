import Image from "next/image";
import React from "react";
import performance from "../../assets/performance-bg.png";

const EmpoweringWisps = () => {
  return (
    <div className="lg:w-5/6 md:mt-20 mb-20 bg-[#F4F7FF] rounded-2xl p-10 relative container-margin">
      <div className="absolute top-8 right-20">
        <Image src={performance} alt="" className="w-full" />
      </div>
      <h4 className="text-center text-primary font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-[32px]  md:leading-[44px]">
        Empowering WISPs with High-Performance <br /> Horn Antennas for Optimal
        Network Capacity.
      </h4>
    </div>
  );
};

export default EmpoweringWisps;

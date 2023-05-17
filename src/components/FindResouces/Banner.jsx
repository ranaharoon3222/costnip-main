import React from "react";
import { GrResources } from "react-icons/gr";
import { BsFilterRight } from "react-icons/bs";
import Image from "next/image";
import banner from "../../assets/banner.png";
import styles from "@/styles/styles";

const Banner = () => {
  return (
    <div className={`md:relative ${styles.padding} bg-[#FEC6C5] md:bg-transparent py-16 md:py-0`}>
      <Image src={banner} alt="" className="hidden md:block" />

      <div className="md:absolute top-[50%] left-[50%] absolute-position md:w-3/5 m-auto">
        <h1 className="text-white font-semibold text-4xl mdtext-5xl">Help you find Resources.</h1>

        <div className="md:flex bg-white box-shaddow3 rounded-lg p-3 md:p-2 mt-10">
          <div className="flex gap-3 items-center basis-[80%] md:pl-5 border-b-[1px] md:border-b-0 border-solid border-[#EDE7F6] pb-2 md:pb-0 mb-3 md:mb-0">
            <GrResources className="text-[#6D7D93] text-2xl"/>
            <input type="text" placeholder="Search for Health Resources" className="w-full text-sm pr-4"/>
            <div>
          <BsFilterRight className="text-[#6D7D93] border-l-[1px] border-solid border-[#E5EBF0] text-4xl md:text-[40px] pl-2.5 md:pl-3"/>
          </div>
          </div>
          <div className="md:flex gap-3 items-center md:basis-[20%] justify-end">
            <button className="bg-[#132758] font-bold text-xs px-9 py-4 text-white rounded-lg w-full md:w-auto">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Navbar from "../Navbar";
import { BsCheckLg, BsCheckmd } from "react-icons/bs";
import blurBg from "../../assets/blur-bg.png";
import Image from "next/image";
import styles from '../../styles/styles'

const Hero = () => {
  return (
    <div className="bg-primary h-auto pb-16 md:pb-20 lg:pb-28 hero-bg">
      <div className="blur-bg">
        <Image src={blurBg} alt="" />
      </div>
      <Navbar />

      <div className={`${styles.innerWidth} mt-20 md:mt-32 relative z-10`}>
        <h1 className="text-[#F4F7FF] font-semibold tracking-tight text-2xl md:text-4xl lg:text-6xl md:leading-[40px] lg:leading-[70px] md:w-4/5 lg:w-3/5">
          High-Performance 5 GHz & 6 GHz Horn Antennas
        </h1>

        <ul className="flex items-center text-white font-medium mt-2 mb-4">
          <li className="text-xs md:text-sm lg:text-base flex mr-2 md:mr-6 items-center">
            <BsCheckLg className="mr-1 md:mr-2" /> Unmatched Quality
          </li>
          <li className="text-xs md:text-sm lg:text-base flex md:mr-6 items-center">
            <BsCheckLg className="mr-1 md:mr-2" /> Exceptional Network
            Performance
          </li>
        </ul>
        <p className="text-white leading-6 text-sm lg:text-base md:w-3/5">
          IsoHorns is the world’s only manufacturer of wideband 6 GHz horn
          antennas operating from 4.8 to 7.2 GHz – including the complete 6 GHz
          band – for unlicensed outdoor wireless internet service provider
          (WISP) operators and fixed wireless (FWA) service providers
        </p>

        <div className="mt-8 md:mt-10 lg:mt-16 bg-white py-4 px-3 rounded-md">
          <form action="" className="md:flex items-center justify-between">
            <input
              type="text"
              name=""
              id=""
              placeholder="WISP Name"
              className="bg-[#F9FAFB] p-2 md:p-3 rounded-md md:mr-3 lg:mr-6 text-[10px] md:text-xs lg:text-sm w-full mb-4 md:mb-0"
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Number of Towers"
              className="bg-[#F9FAFB] p-2 md:p-3 rounded-md mr-2 md:mr-3 lg:mr-6 text-[10px] md:text-xs lg:text-sm w-full mb-4 md:mb-0"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="bg-[#F9FAFB] p-2 md:p-3 rounded-md md:mr-3 lg:mr-6 text-[10px] md:text-xs lg:text-sm w-full mb-4 md:mb-0"
            />
            <button
              type="submit"
              className={`${styles.button} md:text-xs lg:text-sm m-auto `}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

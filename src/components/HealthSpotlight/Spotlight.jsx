import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import icon1 from "../../assets/phone.png";
import icon2 from "../../assets/user-icon.png";
import icon3 from "../../assets/nose-icon.png";

const Spotlight = () => {
  return (
    <div className={`${styles.width} ${styles.padding}`}>
      <div className="text-center mt-[50px]">
        <h2 className="text-darkBlue font-bold leading-[45px] md:leading-[70px] text-[38px] md:text-6xl">
          Costnip's Health <br />{" "}
          <span className="text-primary">Spotlight</span>
        </h2>
        <p className="text-[#555555] leading-5 text-xs md:text-sm mt-3">
          Empowering value-based information exchanges
        </p>
      </div>

      <div className="flex gap-2 md:gap-3 md:w-3/5 m-auto mt-14">
        <div className="basis-[120px] md:basis-[250px] bg-[#69F0E8] rounded-2xl px-2 md:px-5 py-3 md:py-6">
          <h5 className="text-darkBlue text-[Inter] font-semibold text-sm md:text-lg">
            Perspectives
          </h5>
          <span className="text-darkBlue text-[Inter] text-[8px]  leading-1 md:left-5 md:text-xs block mt-1">
            Tagline goes here...
          </span>

          <div className="flex justify-end">
            <Image
              src={icon1}
              alt=""
              className="w-[70px] md:w-[150px] md:h-[150px] mt-2 md:mt-5"
            />
          </div>
        </div>

        <div className="basis-[120px] md:basis-[250px] bg-[#A3DAC2] rounded-2xl px-2 md:px-5 py-3 md:py-6">
          <h5 className="text-darkBlue text-[Inter] font-semibold text-sm md:text-lg">
            Perspectives
          </h5>
          <span className="text-darkBlue text-[Inter] text-[8px]  leading-1 md:left-5 md:text-xs block mt-1">
            Tagline goes here...
          </span>

          <div className="flex justify-end">
            <Image
              src={icon2}
              alt=""
              className="w-[70px] md:w-[150px] md:h-[150px] mt-2 md:mt-5"
            />
          </div>
        </div>
        <div className="basis-[120px] md:basis-[250px] bg-[#C2D8E7] rounded-2xl px-2 md:px-5 py-3 md:py-6">
          <h5 className="text-darkBlue text-[Inter] font-semibold text-sm md:text-lg">
            Perspectives
          </h5>
          <span className="text-darkBlue text-[Inter] text-[8px] md:left-5 md:text-xs block mt-1">
            Tagline goes here...
          </span>

          <div className="flex justify-end">
            <Image
              src={icon3}
              alt=""
              className="w-[30px] md:w-[80px] md:h-[100px] mt-2 md:mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;

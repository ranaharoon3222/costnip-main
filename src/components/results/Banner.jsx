import React from "react";
import Image from "next/image";
import styles from "@/styles/styles";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import plusIcon from "../../assets/plus-icon.png";

const Banner = () => {
  return (
    <div
      className={`${styles.width} md:py-12 py-6 px-7 md:px-0 bg-darkBlue md:rounded-[20px]`}
    >
      <div className="md:flex items-center">
        <div className="md:pl-14">
          <h1 className="text-white font-bold leading-[50px] md:leading-[50px] text-[30px] md:text-[50px] md:w-1/2 text-center md:text-left mb-5 md:mb-0">
            {" "}
            Pricecare Search
          </h1>
        </div>

        <div className="md:ml-[-50px]">
          <form action="" className="md:flex w-full] relative">
            <div className="absolute top-[14px] md:top-[19px] left-[15px] text-[#9E9E9E]">
              <AiOutlineSearch className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Enter Symptoms, services or code"
              className="w-full text-sm md:text-base px-10 py-3 md:py-4 mb-3 md:mb-0 border-radius1 text-[#616161] border-r-2 border-solid border-[#ececec]"
            />
            <input
              type="text"
              placeholder="Enter zipcode"
              className="w-full text-sm md:text-base px-10 py-3 md:py-4 mb-2 md:mb-0 border-radius1 border-radius2 text-[#616161] "
            />
            <button
              type="submit"
              className="hidden md:block bg-[#443CF4] px-5 py-5 rounded-2xl absolute top-0 right-[-15px]"
            >
              <BsSearch className="text-white text-lg" />
            </button>
          </form>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Image src={plusIcon} alt="" className="w-[20px]" />
              <span className="text-white font-['Roboto'] text-sm font-normal">
                Medical
              </span>
            </div>
            <div>
              <MdKeyboardArrowDown className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

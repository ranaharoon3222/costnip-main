import Image from "next/image";
import React from "react";
import medical from "../../assets/medical.png";
import Link from "next/link";

const Sponsored = () => {
  return (
    <div className="mb-10 md:mb-24 mt-8 md:mt-[-120px]">
      <h5 className="text-[#121212] font-semibold mb-8">Sponsored Listings</h5>

      <div className="flex justify-between flex-wrap items-center rounded-2xl box-shaddow5 py-5 md:py-8 px-6 md:px-12 font-['Inter'] mb-4 border-[1px] border-solid border-[#D9D9D9] md:border-0">
        <div className="basis-1/5 md:basis-auto">
          <Image src={medical} alt="" className="w-[50px] md:w-[65px]" />
        </div>
        <div className="text-center basis-4/5 md:basis-auto">
          <span className="hidden bg-[#3F7D6C] rounded-xl text-white text-[10px] px-2 py-1 mb-1 md:inline-block">
            3 miles away{" "}
          </span>
          <h4 className="text-[#1F1548] font-medium text-xl md:text-2xl">
            Atlanta Hospital
          </h4>
          <span className="text-[#1F1548] opacity-50 text-[10px] md:text-xs">
            123 Main st. Chicago, IL 20202
          </span>
        </div>

        <div className="flex flex-col gap-2 text-center relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-medium text-[#605A7D] uppercase text-[8px] md:text-xs">
            User reported PRICE
          </span>
          <span className="font-medium text-[#1F1548] text-base md:text-2xl">
            $250
          </span>

          <div className="md:absolute md:w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] bg-[#F3F3F6]"></div>
        </div>

        <div className="flex flex-col gap-2 text-center relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-medium text-[#605A7D] uppercase text-[8px] md:text-xs">
            HOSPITAL CASH PRICE
          </span>
          <span className="font-medium text-[#1F1548] text-base md:text-2xl">
            $175
          </span>

          <div className="md:absolute md:w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] bg-[#F3F3F6]"></div>
        </div>

        <div className="flex flex-col gap-3 text-center text-[10px] md:text-sm relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-normal text-[#A5A2B2]">
            Insurer Reported Cost
          </span>
          <Link href="/" className="underline text-[#1F1548] font-medium">
            See here
          </Link>

          <div className="md:absolute w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] md:bg-[#F3F3F6]"></div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap items-center rounded-2xl box-shaddow5 py-5 md:py-8 px-6 md:px-12 font-['Inter'] mb-4 border-[1px] border-solid border-[#D9D9D9] md:border-0">
        <div className="basis-1/5 md:basis-auto">
          <Image src={medical} alt="" className="w-[50px] md:w-[65px]" />
        </div>
        <div className="text-center basis-4/5 md:basis-auto">
          <span className="hidden bg-[#3F7D6C] rounded-xl text-white text-[10px] px-2 py-1 mb-1 md:inline-block">
            3 miles away{" "}
          </span>
          <h4 className="text-[#1F1548] font-medium text-xl md:text-2xl">
            Atlanta Hospital
          </h4>
          <span className="text-[#1F1548] opacity-50 text-[10px] md:text-xs">
            123 Main st. Chicago, IL 20202
          </span>
        </div>

        <div className="flex flex-col gap-2 text-center relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-medium text-[#605A7D] uppercase text-[8px] md:text-xs">
            User reported PRICE
          </span>
          <span className="font-medium text-[#1F1548] text-base md:text-2xl">
            $250
          </span>

          <div className="md:absolute md:w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] bg-[#F3F3F6]"></div>
        </div>

        <div className="flex flex-col gap-2 text-center relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-medium text-[#605A7D] uppercase text-[8px] md:text-xs">
            HOSPITAL CASH PRICE
          </span>
          <span className="font-medium text-[#1F1548] text-base md:text-2xl">
            $175
          </span>

          <div className="md:absolute md:w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] bg-[#F3F3F6]"></div>
        </div>

        <div className="flex flex-col gap-3 text-center text-[10px] md:text-sm relative basis-1/3 md:basis-auto mt-6 md:mt-0">
          <span className="font-normal text-[#A5A2B2]">
            Insurer Reported Cost
          </span>
          <Link href="/" className="underline text-[#1F1548] font-medium">
            See here
          </Link>

          <div className="md:absolute w-[1px] md:h-[80px] md:top-[50%] md:left-[-20%] md:translate-y-[-50%] md:bg-[#F3F3F6]"></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;

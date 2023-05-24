import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFillArrowRightCircleFill,
  BsThreeDots,
  BsArrowDown,
} from "react-icons/bs";
import graph from "../../assets/graph.png";

const AverageCost = () => {
  return (
    <div className="bg-[#CDDCFF] p-6 md:p-10 rounded-lg relative mt-6 md:mt-[-100px]  mb-10">
      <span className="text-[#605A7D] uppercase font-medium text-xs">
        Lipsum subtitle
      </span>
      <h2 className="text-[#1F1548] pt-3 pb-2 md:pb-5 text-2xl md:text-5xl font-semibold md:w-3/5">
        Placeholder title goes here for visuals
      </h2>
      <p className="text-[#605A7D] pb-3 md:pb-6 font-normal text-sm md:text-base md:w-[65%]">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for lorem ipsum.
        <Link className="text-[#3266E7]" href="/">
          Learn more
        </Link>
      </p>

      <div className="mb-6 md:mb-0">
        <Link
          className="text-[#1F1548] flex items-center gap-2 text-xs font-medium"
          href="/"
        >
          Explore More <BsFillArrowRightCircleFill className="text-lg" />
        </Link>
      </div>

      <div className="md:absolute top-0 right-0 p-6 border-radius3 bg-white box-shaddow4">
        <div className="flex justify-between text-[#66686A] font-semibold pb-7">
          <h4>Average Cost</h4>
          <BsThreeDots />
        </div>

        <div className="flex justify-between items-center font-['Roboto'] gap-4">
          <div className="text-xs font-medium">
            <span className="flex items-center gap-1 text-[#FB3D07] mb-3">
              <BsArrowDown /> -0.24%
            </span>
            <h4 className="text-[#1D1D1D] text-[22px] font-bold">$254,14</h4>
          </div>

          <div>
            <Image src={graph} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageCost;

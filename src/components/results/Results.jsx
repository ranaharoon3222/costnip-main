import Image from "next/image";
import React, { useState } from "react";
import medical from "../../assets/medical.png";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RiStarSLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { useStoreState } from "easy-peasy";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowLeft
        style={{
          ...style,
          color: "#55857A",
          fontSize: "10px",
          width: "28px",
          height: "28px",
          background: "#F6F6F6",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="leftArrow"
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowRight
        style={{
          ...style,
          color: "#55857A",
          fontSize: "10px",
          width: "28px",
          height: "28px",
          background: "#F6F6F6",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="rightArrow"
      />
    </div>
  );
}

const Results = () => {
  const [showFilter, setShowFilter] = useState(false);
  const resultData = useStoreState(state => state.results)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const slideContent = [
    {
      id: 1,
      img: medical,
      location: "3 miles away",
      address: "General Hospital",
      road: "123 Main st. Chicago, IL 20202",
      price1: "64.82",
      hospitalPrice: "Hospital Reported Cash Price",
      price2: "40",
      userPrice: "User Reported Cash Price",
    },
    {
      id: 2,
      img: medical,
      location: "3 miles away",
      address: "General Hospital",
      road: "123 Main st. Chicago, IL 20202",
      price1: "64.82",
      hospitalPrice: "Hospital Reported Cash Price",
      price2: "40",
      userPrice: "User Reported Cash Price",
    },
    {
      id: 3,
      img: medical,
      location: "3 miles away",
      address: "General Hospital",
      road: "123 Main st. Chicago, IL 20202",
      price1: "64.82",
      hospitalPrice: "Hospital Reported Cash Price",
      price2: "40",
      userPrice: "User Reported Cash Price",
    },
    {
      id: 4,
      img: medical,
      location: "3 miles away",
      address: "General Hospital",
      road: "123 Main st. Chicago, IL 20202",
      price1: "64.82",
      hospitalPrice: "Hospital Reported Cash Price",
      price2: "40",
      userPrice: "User Reported Cash Price",
    },
    {
      id: 5,
      img: medical,
      location: "3 miles away",
      address: "General Hospital",
      road: "123 Main st. Chicago, IL 20202",
      price1: "64.82",
      hospitalPrice: "Hospital Reported Cash Price",
      price2: "40",
      userPrice: "User Reported Cash Price",
    },
  ];

  // console.log('resultData', resultData);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h5 className="text-[#121212] text-sm md:text-base font-semibold">
          Results - <span className="text-[#585858]">knee replacement</span> (3){" "}
        </h5>
        <div className="">
          {" "}
          <div
            action=""
            className="flex gap-2 items-center text-[#212121] font-medium relative"
          >
            <FaFilter className="text-[#9CBDFC]" />{" "}
            <span
              className="text-xs md:text-sm font-['Roboto'] cursor-pointer"
              onClick={() => setShowFilter(!showFilter)}
            >
              Filter
            </span>
            {showFilter && (
              <form
                action=""
                className="absolute top-[40px] left-[-300px] md:left-[-300px] z-50 bg-white box-shaddow6 rounded-xl border-[1px] border-solid border-[#F5F5F5] p-4 md:p-6 text-[#212121] w-[360px] md:w-[400px]"
              >
                <div className="border-b-[1px] border-solid border-[#F5F5F5] pb-4 pl-3 pr-3">
                  <span className="font-medium flex justify-between items-center">
                    Filters{" "}
                    <RxCross2
                      className="text-[#9E9E9E] cursor-pointer"
                      onClick={() => setShowFilter(!showFilter)}
                    />
                  </span>
                </div>

                <div>
                  <div className="border-b-[1px] border-solid border-[#F5F5F5] py-4 pl-3 pr-3">
                    <span className="font-medium flex justify-between items-center">
                      Distance <MdKeyboardArrowUp className="text-[#9E9E9E]" />
                    </span>
                  </div>

                  <div className="flex justify-between text-sm pt-4">
                    <div>
                      <input
                        type="checkbox"
                        id="text1"
                        name="text1"
                        value="text1"
                        className="w-[20px] h-[17px]"
                      />
                      <label for="vehicle1"> 0 to 5 Mi</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="text2"
                        name="text2"
                        value="text2"
                        className="w-[20px] h-[17px]"
                      />
                      <label for="vehicle2"> 5 to 10 Mi</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        id="text3"
                        name="text3"
                        value="text3"
                        className="w-[20px] h-[17px]"
                      />
                      <label for="vehicle3"> + 10 Mi</label>
                    </div>
                  </div>

                  <div>
                    <div className="border-b-[1px] border-solid border-[#F5F5F5] py-3 mt-5 pl-3 pr-3">
                      <span className="font-medium flex justify-between items-center">
                        Insurance{" "}
                        <MdKeyboardArrowUp className="text-[#9E9E9E]" />
                      </span>
                    </div>

                    <div className="flex flex-row items-center gap-12 text-sm pt-4 pl-3 pr-3">
                      <div className="flex flex-col gap-6">
                        <div>
                          <input
                            type="checkbox"
                            id="text1"
                            name="text1"
                            value="text1"
                            className="w-[20px] h-[17px]"
                          />
                          <label for="vehicle1"> ALL</label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="text2"
                            name="text2"
                            value="text2"
                            className="w-[20px] h-[17px]"
                          />
                          <label for="vehicle2"> PPO</label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="text3"
                            name="text3"
                            value="text3"
                            className="w-[20px] h-[17px]"
                          />
                          <label for="vehicle3"> HMO</label>
                        </div>
                      </div>

                      <div>
                        <div>
                          <input
                            type="checkbox"
                            id="text3"
                            name="text3"
                            value="text3"
                            className="w-[20px] h-[17px]"
                          />
                          <label for="vehicle3"> Medicare</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-b-[1px] border-t-[1px] border-solid border-[#F5F5F5] py-4 pl-3 pr-3 md:mt-5">
                    <span className="font-medium flex justify-between items-center">
                      Price <MdKeyboardArrowUp className="text-[#9E9E9E]" />
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-between  text-base pl-3 pr-3 mt-5 font-['Roboto']">
                    <div className="flex items-center basis-1/2 mb-5">
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="Below $25"
                      />
                        <label for="html">Below $25</label>
                    </div>
                    <div className="flex items-center basis-1/2 mb-5">
                       {" "}
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="$50 - $100"
                      />
                        <label for="$50 - $100">$50 - $100</label>
                    </div>
                    <div className="flex items-center basis-1/2 mb-5">
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="Below $25"
                      />
                        <label for="html">$100 - $150</label>
                    </div>
                    <div className="flex items-center basis-1/2 mb-5">
                       {" "}
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="$50 - $100"
                      />
                        <label for="$50 - $100">$150 - $200</label>
                    </div>
                    <div className="flex items-center basis-1/2 mb-5">
                       {" "}
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="$50 - $100"
                      />
                        <label for="$50 - $100">$200- $250</label>
                    </div>
                    <div className="flex items-center basis-1/2 mb-5">
                       {" "}
                      <input
                        type="radio"
                        id=""
                        name="price"
                        value="$50 - $100"
                      />
                        <label for="$50 - $100">Over $300</label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-b-[1px] border-solid border-[#F5F5F5] py-3 mt-5 pl-3 pr-3">
                    <span className="font-medium flex justify-between items-center">
                      Rating <MdKeyboardArrowUp className="text-[#9E9E9E]" />
                    </span>
                  </div>
                  <div className="flex gap-1 items-center mt-2 bg-[#FAFAFA] p-2 ml-3 mr-3">
                    <RiStarSLine className="text-[#FFC107] text-xl" />
                    <RiStarSLine className="text-[#FFC107] text-xl" />
                    <RiStarSLine className="text-[#FFC107] text-xl" />
                    <RiStarSLine className="text-[#FFC107] text-xl" />
                    <RiStarSLine className="text-[#FFC107] text-xl" />
                    <span className="text-[#757575] text-xs">(5)</span>
                  </div>
                </div>
                <div className="ml-3 mr-3">
                  <button className="bg-[#2196F3] text-base font-medium py-3 w-full text-white rounded-lg mt-6">
                    Clear all
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className=" font-bold text-black text-5xl result-slider font-['Inter]">
        <Slider {...settings} className="">
          {resultData?.map((content) => (
            <div
              key={content.index}
              className="slide-div justify-between p-3 text-[11px] font-['Inter'] border-[1px] border-solid border-[#DCDCDC] rounded-lg"
            >
              <div>
                <div>
                  <img src='/hospital.png' alt="" className="w-[50px] mb-4" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h6 className="text-[#1F1548] uppercase font-semibold">
                    Location
                  </h6>
                  <span className="bg-[#3F7D6C] rounded-xl text-white text-[8px] px-2 py-1">
                    {content.location}
                  </span>
                </div>
                <h6 className="text-[#696284] mb-1 mt-4">{content.hospital_name}</h6>
                <span className="text-[#1F1548] opacity-50 font-normal w-3/5 block leading-4">
                  {content.hospital_address}
                </span>
              </div>

              <div>
                <div className="mb-4">
                  <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-6px]">
                    <span className="text-[#959595] text-[10px]">$</span>
                    {content.service_price}
                  </h4>
                  <span className="text-[#3A3A3A] opacity-70 text-[10px] font-normal">
                    
                  </span>
                </div>
                <div>
                  <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-8px]">
                    <span className="text-[#959595] text-[8px]">$</span>
                    40
                  </h4>
                  <span className="text-[#3A3A3A] opacity-70 text-[10px] font-normal">
                    {content.userPrice}
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                  <Link href="/" className="underline">
                    See here
                  </Link>
                  <span className="text-[#959595] text-xs mt-[-5px] font-normal">
                    Insurer Reported Cost
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Results;

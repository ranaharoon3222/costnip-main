import Image from "next/image";
import React from "react";
import medical from "../../assets/medical.png";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

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

const RelatedTags = () => {
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

  return (
    <div className="sliders-div">
      <div className=" mb-8">
        <h5 className="text-[#121212] font-semibold">Related Tags</h5>
      </div>

      <div className="flex items-center gap-3 mt-[-10px] mb-9">
        <span className="text-[#5A5F64] border-[1px] border-solid border-[#9B9EA1] px-3 py-1 rounded-2xl text-xs">
          #heart
        </span>
        <span className="text-[#5A5F64] border-[1px] border-solid border-[#9B9EA1] px-3 py-1 rounded-2xl text-xs">
          #elbow
        </span>
        <span className="text-[#5A5F64] border-[1px] border-solid border-[#9B9EA1] px-3 py-1 rounded-2xl text-xs">
          #Lungs
        </span>
        <span className="text-[#5A5F64] border-[1px] border-solid border-[#9B9EA1] px-3 py-1 rounded-2xl text-xs">
          #Blood
        </span>
      </div>

      <div className=" font-bold text-black text-5xl result-slider font-['Inter]">
        <Slider {...settings} className="">
          {slideContent.map((content) => (
            <div
              key={content.id}
              className="slide-div justify-between p-3 text-[11px] font-['Inter'] border-[1px] border-solid border-[#DCDCDC] rounded-lg"
            >
              <div>
                <div>
                  <Image src={content.img} alt="" className="w-[50px] mb-4" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h6 className="text-[#1F1548] uppercase font-semibold">
                    Location
                  </h6>
                  <span className="bg-[#3F7D6C] rounded-xl text-white text-[8px] px-2 py-1">
                    {content.location}
                  </span>
                </div>
                <h6 className="text-[#696284] mb-1 mt-4">{content.address}</h6>
                <span className="text-[#1F1548] opacity-50 font-normal w-3/5 block leading-4">
                  {content.road}
                </span>
              </div>

              <div>
                <div className="mb-4">
                  <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-6px]">
                    <span className="text-[#959595] text-[10px]">$</span>
                    {content.price1}
                  </h4>
                  <span className="text-[#3A3A3A] opacity-70 text-[10px] font-normal">
                    {content.hospitalPrice}
                  </span>
                </div>
                <div>
                  <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-8px]">
                    <span className="text-[#959595] text-[8px]">$</span>
                    {content.price2}
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

export default RelatedTags;

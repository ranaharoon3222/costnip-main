import React from "react";
import Image from "next/image";
import featured1 from "../../../assets/featured1.png";
import featured2 from "../../../assets/featured2.png";
import featured3 from "../../../assets/featured3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import FilterType from "./FilterType";
import MobileViewBlogs from "../MobileViewBlogs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowRight
        style={{
          ...style,
          color: "#55857A",
          fontSize: "32px",
          background: "#F6F6F6",
          borderRadius: "50%",
          padding: "5px",
          width: "35px",
          height: "35px",
        }}
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
          fontSize: "32px",
          background: "#F6F6F6",
          borderRadius: "50%",
          padding: "5px",
          width: "35px",
          height: "35px",
        }}
      />
    </div>
  );
}

const Featured = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const featured = [
    {
      img: featured1,
      heading: "The Benefits of Regular Exercise for Your Mental Health",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Guest Blog",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured2,
      heading: "Studies have shown that exercise can reduce symptoms",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Insight",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured3,
      heading: "Incorporating physical activity into your daily routine",
      descp: "Incorporating physical activity into your daily routine",
      type: "News",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured1,
      heading: "The Benefits of Regular Exercise for Your Mental Health",
      descp: "The Benefits of Regular Exercise for Your Mental Health",
      type: "Guest Blog",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured2,
      heading: "Studies have shown that exercise can reduce symptoms",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Insight",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured3,
      heading: "Incorporating physical activity into your daily routine",
      descp: "Incorporating physical activity into your daily routine",
      type: "News",
      writtenBy: "Written by Care Rosenbloom",
      date: "April 16, 2023",
    },
  ];
  return (
    <div>
      <div className="hidden md:block filter-div mt-8">
        <Slider {...settings} className="">
          {featured.map((featured) => (
            <div key={featured.id} className="md:px-[5%]">
              <div className="relative">
                <Image src={featured.img} alt="" className="rounded-lg" />
                <div className="absolute top-[15px] right-[10px] bg-primary text-[10px] py-2 px-4 text-white font-semibold rounded-md">
                  <span>{featured.type}</span>
                </div>
              </div>
              <h5 className="font-bold text-[#2C2524] leading-7 text-base mt-4 mb-2">
                {featured.heading}
              </h5>
              <p className="text-[#98989E] text-sm leading-6">
                {featured.descp}
              </p>
              <span className="text-darkBlue text-xs font-medium block py-2">
                {featured.writtenBy}
              </span>

              <div className="flex justify-between pt-2 border-t-[1px] border-solid border-[#E0DBDB]">
                <Link
                  href="/"
                  className="text-darkBlue font-medium text-sm flex gap-3 items-center"
                >
                  Read More <BsArrowRight />
                </Link>
                <span className="text-[#817D7D] text-xs">{featured.date}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="block md:hidden bg-[#FFFFFF] rounded-lg p-4 box-shaddow2">
      <MobileViewBlogs />
      </div>
    </div>
  );
};

export default Featured;

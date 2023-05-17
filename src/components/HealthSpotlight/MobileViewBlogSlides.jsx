import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/styles";
import FilterType from "./Filter/FilterType";
import Image from "next/image";
import featured1 from "../../assets/featured1.png";
import featured2 from "../../assets/featured2.png";
import featured3 from "../../assets/featured3.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const MobileViewBlogSlides = () => {
  const featured = [
    {
      img: featured1,
      heading: "The Benefits of Regular Exercise for Your Mental Health",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Guest Blog",
      writtenBy: "Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured2,
      heading: "Studies have shown that exercise can reduce symptoms",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Insight",
      writtenBy: " Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured3,
      heading: "Incorporating physical activity into your daily routine",
      descp: "Incorporating physical activity into your daily routine",
      type: "News",
      writtenBy: " Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured1,
      heading: "The Benefits of Regular Exercise for Your Mental Health",
      descp: "The Benefits of Regular Exercise for Your Mental Health",
      type: "Guest Blog",
      writtenBy: " Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured2,
      heading: "Studies have shown that exercise can reduce symptoms",
      descp:
        "Use our search and filtering system to find medical, dental, and vision...",
      type: "Insight",
      writtenBy: "Care Rosenbloom",
      date: "April 16, 2023",
    },
    {
      img: featured3,
      heading: "Incorporating physical activity into your daily routine",
      descp: "Incorporating physical activity into your daily routine",
      type: "News",
      writtenBy: "Care Rosenbloom",
      date: "April 16, 2023",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  
  return (
    <div className={`${styles.padding} bock md:hidden mobile-view-slides`}>
      <div className="bg-[#FFFFFF] rounded-lg p-4 box-shaddow2 h-[360px] mb-[40px]">
        <div className="flex justify-between items-center">
        <FilterType type="Health Topics" />
        <div className="mt-[-18px]">
          <Link href="/" className="text-[#252B61] font-medium text-[10px] flex gap-2 items-center">
           <span className="bg-[#F6F8F9] rounded-3xl px-4 py-2">View All</span> <BsArrowRight />
          </Link>
          </div>
        </div>
        <Slider {...settings}>
          {
            featured.map((featured)=> (
              <div key={featured.id} className="">
                            <div className="relative">
              <Image src={featured1} alt="" className="img-radius" />
              <div className="absolute top-[15px] left-[10px] bg-[#88888861] text-[10px] py-2 px-3 text-white font-semibold rounded-md">
              <span>{featured.type}</span>
              </div>
            </div>

            <div className=" box-border box-radius p-2">
            <h5 className="font-semibold md:font-bold text-[#2C2524] leading-5 md:leading-7 text-sm mb-2">
            {featured.heading}
            </h5>
            <span className="text-[#1B1B1C] text-[10px] font-medium block py-2">
              <span className="text-[#9899BF]">Written by:</span> {featured.writtenBy}
            </span>
              </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default MobileViewBlogSlides;

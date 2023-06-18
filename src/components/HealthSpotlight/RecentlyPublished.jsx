import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import dietician from "../../assets/dietician.png";
import xray from "../../assets/xray.png";
import Loading from "../loding";
import { useFetcher } from "@/helpers/fetch";
import { useMedia } from "@/helpers/useMedia";

const RecentlyPublished = () => {
  const { data, isLoading, error } = useFetcher("/api/blogs?populate=*");
     const { getUrl } = useMedia();
  if (isLoading)
    return (
      <h1>
        <Loading />
      </h1>
    );
  if (error) return <h1>Error</h1>;

  return (
    <div className="hidden md:flex justify-between gap-5 w-3/4 m-auto py-12">
      <div className="bg-[#4BC9F1] rounded-2xl basis-3/5 px-7 py-7 h-[615px]  overflow-auto ">
        <div className="flex justify-between mb-5">
          <div>
            <h4 className="text-white text-2xl leading-10 font-semibold">
              Recently Published
            </h4>
          </div>

          <div className="flex items-center gap-1">
            <button className="bg-[#D5F3FC] px-4 py-2 text-[#0E0F18] text-sm rounded-3xl">
              View All
            </button>
            <BsArrowRight className="text-[#0E0F18] bg-[#D5F3FC] p-2 rounded-full text-3xl" />
          </div>
        </div>
        {/* /////////////////////////////////////////// */}

        {data?.data?.map((item, ind) => {
     
          return (
            <div
              key={ind}
              className="flex bg-white rounded-[50px] items-center mb-5"
            >
              <div className="basis-1/2">
                <img
                  src={getUrl(item.attributes.thumbnail)}
                  alt=""
                  className="rounded-l-[50px] h-[240px]"
                />
              </div>

              <div className="basis-1/2 p-2">
                <h4 className="text-[#000000] font-medium uppercase mt-2 mb-2 text-xl">
                  {item.attributes.title}
                </h4>
                <p className="text-[#6E6E73] leading-6 text-sm mt-1 mb-3">
                  
                <div dangerouslySetInnerHTML={{__html: item.attributes.text .replace(/(<([^>]+)>)/gi, '')
                      .substring(0, 200) + '...',}} />
                </p>
                <span className="text-[#000000] text-xs">
                  Written by Care Rosenbloom
                </span>
              </div>
            </div>
          );
        })}

        {/* /////////////////////////////////////////// */}

        <div className="flex bg-white rounded-[50px] items-center">
          <div className="basis-1/2">
            <Image src={xray} alt="" className="rounded-l-[50px] h-[240px]" />
          </div>

          <div className="basis-1/2 p-2">
            <h4 className="text-[#000000] font-medium uppercase mt-2 mb-2 text-xl">
              IBLAB
            </h4>
            <p className="text-[#6E6E73] leading-6 text-sm mt-1 mb-3">
              А One-Stop-Shop AI platform that enables physicians and healthcare
              providers to turn large amounts of unstructured data into
              diagnostic evidence
            </p>
            <span className="text-[#000000] text-xs">
              Written by Care Rosenbloom
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#E8EEF0] rounded-2xl px-7 py-16 basis-2/5">
        <Image src={dietician} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default RecentlyPublished;

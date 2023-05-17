import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import service from "../../assets/healthcare.png";
import { BsArrowRight } from "react-icons/bs";

const CompareServices = () => {
  return (
    <div className={`${styles.width} pt-20 md:pt-28`}>
      <h4 className="text-dark text-[26px] md:text-4xl leading-10 md:leading-[45px] font-bold mb-5 px-9 md:px-0">
        Compare and Unlock <br /> More with Costnip
      </h4>

      <div className="md:flex justify-between gap-5 mt-8 px-4 md:px-0">
        <div className="compare-services basis-2/5 px-8 py-10 md:py-16 mb-8 md:mb-0">
          <div className="w-full md:w-[85%] mx-auto h-[120px] md:h-[150px] p-4 md:p-6 flex justify-between text-[11px] text-['Inter'] relative z-10 left-[7px]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h6 className="text-[#1F1548] uppercase font-semibold">
                  Location
                </h6>
                <span className="bg-[#3F7D6C] rounded-xl text-white text-[8px] px-2 py-1">
                  3 miles away{" "}
                </span>
              </div>
              <h6 className="text-[#696284] font-medium">General Hospital</h6>
              <span className="text-[#1F1548] opacity-50">
                123 Main st. <br /> Chicago, IL 20202
              </span>
            </div>

            <div>
              <div className="mb-4">
                <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-10px]">
                  <span className="text-[#959595] text-[8px]">$</span>64.82
                </h4>
                <span className="text-[#3A3A3A] opacity-70 text-[8px]">
                  Hospital Reported Cash Price
                </span>
              </div>
              <div>
                <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-10px]">
                  <span className="text-[#959595] text-[8px]">$</span>40
                </h4>
                <span className="text-[#3A3A3A] opacity-70 text-[8px]">
                  User Reported Cash Price
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[85%] mx-auto h-[120px] md:h-[150px] p-4 md:p-6 flex justify-between text-[11px] text-['Inter'] relative z-0 top-[-62px] md:top-[-70px] left-[-13px] md:left-[-30px]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h6 className="text-[#1F1548] uppercase font-semibold">
                  Location
                </h6>
                <span className="bg-[#3F7D6C] rounded-xl text-white text-[8px] px-2 py-1">
                  3 miles away{" "}
                </span>
              </div>
              <h6 className="text-[#696284] font-medium">General Hospital</h6>
              <span className="text-[#1F1548] opacity-50">
                Street 3, RT
                <br />
                NY, 20202
              </span>
            </div>

            <div>
              <div className="mb-4">
                <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-10px]">
                  <span className="text-[#959595] text-[8px]">$</span>90.99
                </h4>
                <span className="text-[#3A3A3A] opacity-70 text-[8px]">
                  Hospital Reported Cash Price
                </span>
              </div>
              <div>
                <h4 className="text-[#231D3C] text-lg md:text-2xl font-medium mb-[-10px]">
                  <span className="text-[#959595] text-[8px]">$</span>33
                </h4>
                <span className="text-[#3A3A3A] opacity-70 text-[8px]">
                  User Reported Cash Price
                </span>
              </div>
            </div>
          </div>

          <h5 className="text-[#252B61] font-medium leading-7 text-2xl mt-[-20px] md:mt-0">
            Compare Providers <br /> and Services
          </h5>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between basis-3/5 bg-primary rounded-[40px] p-8 md:items-end">
          <div className="">
            <h5 className="text-[#252B61] font-medium leading-7 text-2xl mb-5">
              Find Lower Cost <br /> Healthcare Options
            </h5>
            <div className="flex justify-start gap-3 items-center">
              <span className="bg-white py-2 px-6 text-[#0E0F18] text-sm rounded-2xl">
                Start your search today
              </span>
              <BsArrowRight className="bg-white rounded-full p-1.5 text-3xl text-[#252B61]" />
            </div>
          </div>
          <div className="flex mb-5 md:mb-0">
            <Image src={service} alt="" className="w-[130px] md:w-[280px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareServices;

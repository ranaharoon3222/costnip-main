import React from "react";
import Image from "next/image";
import horn1 from '../../assets/horn1.png'
import horn2 from '../../assets/horn2.png'
import horn3 from '../../assets/horn3.png'

const Advantages = () => {
  return (
    <div className="md:w-5/6 m-auto mt-10 md:mt-20 mb-12 md:mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="text-center md:text-left">
      <h4 className="text-[#1F2937] font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-[30px] md:leading-[44px]">Discover the IsoHorns <span className="text-[##4874FF]">Advantage</span></h4>
      <p className="text-[#4B5563] text-sm lg:text-base leading-6 tracking-tight md:w-[90%] mt-1">
        At IsoHorns, our focus is on delivering superior horn antennas that
        cater to the unique needs of WISPs. Our team of experts works tirelessly
        to develop cutting-edge designs that maximize performance while
        maintaining cost-effectiveness. Our commitment to quality ensures that
        every IsoHorns antenna meets the highest industry standards.
      </p>
      </div>

      <div className="md:flex justify-between mt-6 mb-6">
        <div className="relative mb-6 md:mb-0">
        <Image src={horn1} alt="" className="product-img"/>
        <div className="absolute bottom-0 w-full p-px">
            <h5 className="text-[#1F2937]w-full text-sm lg:text-base font-semibold blur-bckrnd m-0 p-4 md:p-2 lg:p-4">90° asymmetrical 5 & 6 GHz horn antennas</h5>
        </div>
        </div>

        <div className="relative mb-6 md:mb-0">
        <Image src={horn2} alt=""className="product-img"/>
        <div className="absolute bottom-0 w-full p-px">
            <h5 className="text-[#1F2937]w-full text-sm lg:text-base font-semibold blur-bckrnd m-0 p-4 md:p-2 lg:p-4">60° asymmetrical 5 & 6 GHz horn antennas</h5>
        </div>
        </div>

        <div className="relative mb-6 md:mb-0">
        <Image src={horn3} alt="" className="product-img"/>
        <div className="absolute bottom-0 w-full p-px">
            <h5 className="text-[#1F2937]w-full text-sm lg:text-base font-semibold blur-bckrnd m-0 p-4 md:p-2 lg:p-4">30° symmetrical 5 & 6 GHz horn antennas</h5>
        </div>
        </div>
      </div>

      <div className="md:flex items-center justify-between">
      <p className="text-[#4B5563] text-center md:text-left text-sm lg:text-base leading-6 tracking-tight md:w-3/5 md:mt-1">
        At IsoHorns, our focus is on delivering superior horn antennas that
        cater to the unique needs of WISPs. Our team of experts works tirelessly
        to develop cutting-edge designs that maximize performance while
        maintaining cost-effectiveness. Our commitment to quality ensures that
        every IsoHorns antenna meets the highest industry standards.
      </p>
      <button  className="bg-[#4874FF] text-[10px] md:text-sm py-2 md:py-3 px-3 md:px-4 text-white rounded-md block md:inline-block m-auto md:m-0 mt-2 md:mt-0">Contact Us</button>
      </div>
    </div>
  );
};

export default Advantages;

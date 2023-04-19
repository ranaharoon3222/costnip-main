import Image from "next/image";
import React from "react";
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';

const Benefits = () => {
    const benefits =[
        {
            id:1,
            icon: icon1,
            text: "IsoHorns sells the only wideband 5 & 6 GHz horn antennas to future-proof your wireless infrastructure."
        },
        {
            id:2,
            icon: icon2,
            text: "High gain and directivity for maximum coverage"
        },
        {
            id:3,
            icon: icon3,
            text: "IsoHorns sells the only wideband 5 & 6 GHz horn antennas to future-proof your wireless infrastructureLow sidelobe levels to minimize interference."
        },
        {
            id:4,
            icon: icon4,
            text: "Robust construction for long-lasting durability."
        },
        {
            id:5,
            icon: icon5,
            text: "Easy installation with leading radio manufacturers like Ubiquiti, Cambium Networks, Mimosa, and MikroTik"
        },
        {
            id:6,
            icon: icon6,
            text: "Revolutionize your network performance and help you stay ahead of the competition."
        }
    ]
  return (
    <div className="md:flex justify-between w-full md:w-5/6 m-auto mt-10 md:mt-20 mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="md:basis-3/5 lg:basis-2/5 text-center md:text-left" >
        <h6 className="text-[#4874FF] tracking-tight uppercase text-xs md:text-sm lg:text-base font-medium">BENEFITS</h6>
        <h4 className="text-[#1F2937] font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-[36px] md:leading-[44px]">Why Us</h4>
        <p className="text-[#4B5563] text-sm lg:text-base leading-6 tracking-tight md:w-11/12 lg:w-4/5 mt-1">
          As a leader in the wireless communications industry, we understand the
          challenges faced by WISPs in deploying and maintaining efficient,
          high-performance networks. Our IsoHorns antennas are designed to
          address these challenges, offering unequalled benefits such as:
        </p>
      </div>

      <div className="md:basis-3/5 mt-8">
      <div className="md:flex flex-wrap justify-end text-center md:text-left">
        {
            benefits.map((benefit, key)=> (
                <div key={benefit.id} className="md:w-3/6 mb-8 md:mb-6">
                <Image src={benefit.icon} alt="" className="block md:inline-block m-auto w-[40px]"/>
                <p className="text-[#4B5563] text-sm lg:text-base  leading-6 tracking-tight w-full lg:w-4/5 mt-2">{benefit.text}</p>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  );
};

export default Benefits;

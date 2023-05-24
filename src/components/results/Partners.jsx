import React from "react";
import Image from "next/image";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";
import logo5 from "../../assets/logo-5.png";
import logo6 from "../../assets/logo-6.png";

const Partners = () => {
  return (
    <div className="mb-10 md:mb-20">
      <h5 className="text-[#121212] font-semibold mb-8">Our Partners</h5>
      <div className="partner-slider">
        <div className="partner-slide-track">
          <Image src={logo1} alt="" className="partner-slide" />
          <Image src={logo2} alt="" className="partner-slide" />
          <Image src={logo3} alt="" className="partner-slide" />
          <Image src={logo4} alt="" className="partner-slide" />
          <Image src={logo5} alt="" className="partner-slide" />
          <Image src={logo6} alt="" className="partner-slide" />

          <Image src={logo1} alt="" className="partner-slide" />
          <Image src={logo2} alt="" className="partner-slide" />
          <Image src={logo3} alt="" className="partner-slide" />
          <Image src={logo4} alt="" className="partner-slide" />
          <Image src={logo5} alt="" className="partner-slide" />
          <Image src={logo6} alt="" className="partner-slide" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

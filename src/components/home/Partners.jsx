import React from "react";
import Image from "next/image";
import partner1 from "../../assets/partner1.svg";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import styles from '../../styles/styles'

const Partners = () => {
  return (
    <div className=" bg-[#F3F4F6]">
      <div className={`${styles.innerWidth} md:flex items-center py-5`}>
        <div className="grow-0 md:mr-10 lg:mr-20">
          <span className="text-[#1F2937] block text-center text-sm lg:text-base mb-2 md:mb-0">
            Compatible with radios
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between grow">
          <div>
            <Image
              src={partner1}
              alt=""
              className={styles.partnerImg}
            />
          </div>
          <div>
            <Image
              src={partner2}
              alt=""
              className={styles.partnerImg}
            />
          </div>
          <div>
            <Image
              src={partner3}
              alt=""
              className={styles.partnerImg}
            />
          </div>
          <div>
            <Image
              src={partner4}
              alt=""
              className="w-full mb-4 md:mb-0 mr-0 md:mr-5 lg:mr-0"
            />
          </div>
          <div>
            <Image
              src={partner5}
              alt=""
              className="w-[100px] lg:w-full mb-4 md:mb-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

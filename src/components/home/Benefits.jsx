import Image from "next/image";
import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import styles from '../../styles/styles'

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: icon1,
      text: "IsoHorns sells the only wideband 5 & 6 GHz horn antennas to future-proof your wireless infrastructure.",
    },
    {
      id: 2,
      icon: icon2,
      text: "High gain and directivity for maximum coverage",
    },
    {
      id: 3,
      icon: icon3,
      text: "IsoHorns sells the only wideband 5 & 6 GHz horn antennas to future-proof your wireless infrastructureLow sidelobe levels to minimize interference.",
    },
    {
      id: 4,
      icon: icon4,
      text: "Robust construction for long-lasting durability.",
    },
    {
      id: 5,
      icon: icon5,
      text: "Easy installation with leading radio manufacturers like Ubiquiti, Cambium Networks, Mimosa, and MikroTik",
    },
    {
      id: 6,
      icon: icon6,
      text: "Revolutionize your network performance and help you stay ahead of the competition.",
    },
  ];
  return (
    <div className={`${styles.innerWidth} md:flex justify-between mt-10 md:mt-20 mb-20`}>
      <div className="md:basis-3/5 lg:basis-2/5 text-center md:text-left">
        <h6 className={styles.subHeading}>
          BENEFITS
        </h6>
        <h4 className={styles.heading}>
          Why Us
        </h4>
        <p className={`${styles.paragraph} md:w-11/12 lg:w-4/5 mt-1 `}>
          As a leader in the wireless communications industry, we understand the
          challenges faced by WISPs in deploying and maintaining efficient,
          high-performance networks. Our IsoHorns antennas are designed to
          address these challenges, offering unequalled benefits such as:
        </p>
      </div>

      <div className="md:basis-3/5 mt-8">
        <div className="md:flex flex-wrap justify-end text-center md:text-left">
          {benefits.map((benefit, key) => (
            <div key={benefit.id} className="md:w-3/6 mb-8 md:mb-6">
              <Image
                src={benefit.icon}
                alt=""
                className="block md:inline-block m-auto w-[40px]"
              />
              <p className="text-secondary text-sm lg:text-base  leading-6 tracking-tight w-full lg:w-4/5 mt-2">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

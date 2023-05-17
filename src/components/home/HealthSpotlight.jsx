import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import Button from "../Button";
import heatlh1 from "../../assets/health1.png";
import heatlh2 from "../../assets/health2.png";
import heatlh3 from "../../assets/health3.png";

const HealthSpotlight = () => {
  const healthCare = [
    {
      id: "1",
      img: heatlh1,
      heading: "Health Tips",
      descp:
        "Regular tips and tricks to help users maintain good health and prevent common illnesses.",
    },
    {
      id: "2",
      img: heatlh2,
      heading: "Healthcare Articles",
      descp:
        "In-depth articles and guides on a variety of healthcare topics, including preventative care, mental health, and chronic illness management.",
    },
    {
      id: "3",
      img: heatlh3,
      heading: "User Contributions",
      descp:
        "User-contributed stories and experiences related to healthcare, including success stories and tips for navigating the healthcare system.",
    },
  ];
  return (
    <div className={`bg-darkBlue ${styles.padding}`}>
      <div className={`${styles.width} py-20 md:py-24`}>
        <div className="md:flex justify-around items-center">
          <div>
            <h2 className="font-medium text-white tracking-[-2.6656px] leading-[60px] md:leading-[75px] text-6xl md:text-7xl">
              Health <br /> Spotlight
            </h2>
          </div>
          <div>
            <p className="text-white md:w-1/2 leading-6 md:leading-7 mb-12 md:mb-10 mt-8 md:mt-0 ">
              Stay informed and up-to-date on the latest healthcare news and
              trends
            </p>
            <Button link="Learn more" />
          </div>
        </div>

        <div className="md:flex mt-24">
          {healthCare.map((health) => (
            <div key={health.id} className="w-full mb-12 md:mb-0">
              <Image src={health.img} alt="" className="w-[350px] h-[200px] m-auto " />
              {/* w-[350px] h-[200px] m-auto */}
              <div className="text-center">
                <h4 className="font-medium text-white tracking-[0.4432px] text-2xl mt-6 md:mt-8 mb-3">{health.heading}</h4>
                <p className={`${styles.paragraph} text-[#B9B9B9] w-4/5 m-auto`}>{health.descp}</p>
                {/* w-4/5 m-auto */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthSpotlight;

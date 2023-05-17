import React from "react";
import styles from "@/styles/styles";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import Image from "next/image";

const Process = () => {
  const process = [
    {
      id: 1,
      img: process1,
      heading: "Search for Providers",
      descp:
        "Use our search and filtering system to find medical, dental, and vision care providers in your local area.",
    },
    {
      id: 2,
      img: process2,
      heading: "Compare Options",
      descp:
        "Compare providers based on pricing, quality of care, and reviews from other users.",
    },
    {
      id: 3,
      img: process3,
      heading: "Select a Provider",
      descp:
        "Once you have found a provider that meets your needs, select them and book an appointment.",
    },
  ];
  return (
    <div
      className={`${styles.width} py-24 md:flex justify-between gap-40 px-7 md:px-0`}
    >
      <div>
        <h6 className={styles.heading}>How process works</h6>
        <p className={styles.paragraph}>
          Our process is simple and designed to minimize the distractions in
          your everyday life. That’s why we avoid endless meetings.
        </p>
      </div>

      <div className="">
        {process.map((process) => (
          <div
            key={process.id}
            className="flex gap-5 mb-8 md:mb-14 mt-12 md:mt-0"
          >
            <div>
              <Image
                src={process.img}
                alt=""
                className="w-[80px] md:w-[70px] mt-2 md:mt-0"
              />
            </div>
            <div>
              <span className="text-[15px] text-[#333333] inline-block mb-1 font-medium ">
                {process.heading}
              </span>
              <p className={styles.paragraph}>{process.descp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;

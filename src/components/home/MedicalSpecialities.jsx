import React from "react";
import Image from "next/image";
import styles from "@/styles/styles";
import medical1 from "../../assets/medical1.png";
import medical2 from "../../assets/medical2.png";
import medical3 from "../../assets/medical3.png";

const MedicalSpecialities = () => {
  const specialities = [
    {
      id: 1,
      img: medical1,
      heading: "Affordable healthcare made easy",
      number: "01",
      descp:
        "Costnip helps individuals find more affordable options for medical, dental, and vision care in their local area, reducing the burden of high healthcare costs.",
    },
    {
      id: 2,
      img: medical2,
      heading: "Quality care, guaranteed",
      number: "02",
      descp:
        "Costnip provides access to reviews and ratings of healthcare providers, ensuring that users can find high-quality care that meets their needs.",
    },

    {
      id: 3,
      img: medical3,
      heading: "Hassle-free healthcare",
      number: "03",
      descp:
        "With Costnip, users can compare prices, schedule appointments, and upload bills all in one place, streamlining the healthcare process and saving time.",
    },
  ];
  return (
    <div className={`${styles.width} pt-10 pb-20 px-7 md:px-0`}>
      <h4 className={`${styles.heading}`}>
        Experienced in multiple <br /> medical specialities
      </h4>

      <div className="md:flex justify-between gap-28 mt-5">
        {specialities.map((speciality) => (
          <div
            key={speciality.id}
            className="box-shaddow px-6 py-10 mb-6 md:mb-0"
          >
            <Image src={speciality.img} alt="" className="w-[60px]" />
            <div className="flex justify-between gap-20 items-center text-primary font-bold">
              <h6 className="text-dark md:text-lg md:leading-7 font-bold pt-6 pb-2">
                {speciality.heading}
              </h6>
              <span>{speciality.number}</span>
            </div>
            <p className="border-t-[1px] border-solid border-[#F2F1F6] pt-4 text-secondary text-xs md:text-[15px] leading-6 md:leading-7">
              {speciality.descp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialities;

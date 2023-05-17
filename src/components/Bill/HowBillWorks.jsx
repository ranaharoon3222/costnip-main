import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import billBg from "../../assets/bill-bg.png";

const HowBillWorks = () => {
  const steps = [
    {
      id: 1,
      step: "Step 01",
      text: "Find your past bill with charges on it. Select it for upload.",
    },
    {
      id: 2,
      step: "Step 02",
      text: "If needed, blackout any private info with the editor tool before uploading.",
    },
    {
      id: 3,
      step: "Step 03",
      text: "Receive access to detailed info and other recommendations.",
    },
    {
      id: 4,
      step: "Step 04",
      text: "Now you are growing priceparency and helping to bring down costs for all.",
    },
  ];
  return (
    <div className={`${styles.width} ${styles.padding}`}>
      <div className="text-center relative top-[100px] mt-[-50px] mb-32 md:mb-0">
        <h2 className="text-darkBlue font-bold leading-[45px] md:leading-[70px] text-[38px] md:text-6xl font-['Plus_Jakarta_Sans']">
          Share Your Charges to <br />{" "}
          <span className="text-primary">Discover Better Options</span>
        </h2>
        <p className="text-[#555555] leading-5 text-xs md:text-sm mt-3">
          Costnip analyzes your previous bills to inform others about potential
          expenses.
        </p>
      </div>
      <div className="md:flex justify-between gap-16 items-center">
        <div className="basis-1/2">
          <Image src={billBg} alt="" className="md:w-[90%]" />
        </div>

        <div className="basis-1/2 mt-10 md:mt-0">
          <h4 className={styles.subHeading}>How Bill Upload Works</h4>

          <div className="flex flex-wrap md:mt-10">
            {steps.map((step) => (
              <div key={step.id} className="basis-1/2 mb-6">
                <h5 className="text-[#5E5D82] font-medium text-base md:text-lg mb-2">
                  {step.step}
                </h5>
                <p className="text-xs text-[#98989E] w-[95%] md:w-[80%] leading-5">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowBillWorks;

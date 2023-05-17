import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import medicare from "../../assets/medicare.png";

const Sponsored = () => {
  return (
    <div className="md:w-3/4 m-auto bg-primary md:rounded-3xl py-16 md:py-14 text-center mb-20 md:mb-10">
      <h4 className={styles.subHeading2}>Sponsored By</h4>
      <Image src={medicare} alt="" className="w-[250px] md:w-[400px] m-auto" />
    </div>
  );
};

export default Sponsored;

import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import Button from "../Button";
import ellips1 from "../../assets/discover1.png";
import ellips2 from "../../assets/discover2.png";
import ellips3 from "../../assets/discover3.png";

const ResourceLibrary = () => {
  return (
    <div className="pb-[300px]">
      <div
        className={`${styles.width} ${styles.padding} py-16 md:py-12 bg-[#0B182E] md:rounded-[50px] text-center text-white relative mt-20`}
      >
        <h3 className="font-bold text-2xl md:text-3xl leading-8 md:leading-10 md:w-[45%] m-auto pb-16 md:pb-10">
          <span className="font-light">Discover + Shared </span> <br />
          Library of useful healthcare resources
        </h3>

        <Button link="Resource Library" />

        <Image
          src={ellips1}
          alt=""
          className="absolute left-[-25px] bottom-0 w-[200px]"
        />
        <Image
          src={ellips2}
          alt=""
          className="absolute left-[0px] top-0 w-[200px]"
        />
        <Image
          src={ellips3}
          alt=""
          className="absolute left-[-25px] bottom-0 w-[200px]"
        />
      </div>
    </div>
  );
};

export default ResourceLibrary;

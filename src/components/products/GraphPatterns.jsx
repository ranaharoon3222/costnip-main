import React from "react";
import styles from "../../styles/styles";
import Image from "next/image";
import pattern from "../../assets/patterns.png";
import graph1 from "../../assets/graph1.png";
import graph2 from "../../assets/graph2.png";

const GraphPatterns = () => {
  return (
    <div className={`${styles.innerWidth} flex flex-col gap-8 mt-8`}>
      <Image src={pattern} alt="" className="object-contain md:w-1/2" />
      <Image src={graph1} alt="" className="object-contain md:w-1/2" />
      <Image src={graph2} alt="" className="object-contain md:w-1/2" />
    </div>
  );
};

export default GraphPatterns;

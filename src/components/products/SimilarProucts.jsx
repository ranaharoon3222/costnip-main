import React from "react";
import horn1 from "../../assets/60_4.webp";
import horn2 from "../../assets/60_7.webp";
import styles from "../../styles/styles";
import Image from "next/image";

const SimilarProucts = () => {
  const products = [
    {
      id: 1,
      img: horn1,
      heading: "90° asymmetrical 5 & 6 GHz horn antennas",
    },
    {
      id: 2,
      img: horn2,
      heading: "60° asymmetrical 5 & 6 GHz horn antennas",
    },
  ];
  return (
    <div className={`${styles.innerWidth} mt-10 md:mt-20 mb-12 md:mb-20 `}>
      <div className="md:flex justify-between mt-6 mb-6 gap-16">
        {products.map((product) => (
          <div key={product.id} className="relative mb-6 md:mb-0 flex-1 w-full">
            <div className="product-img">
              <Image src={product.img} alt="" className="md:h-[300px]" />
            </div>
            <div className="absolute bottom-0 w-full p-px">
              <h5 className={styles.subHeading2}>{product.heading}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProucts;

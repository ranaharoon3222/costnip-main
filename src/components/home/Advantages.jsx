import React from "react";
import Image from "next/image";
import horn1 from "../../assets/60_5.webp";
import horn2 from "../../assets/60_4.webp";
import horn3 from "../../assets/60_7.webp";
import styles from '../../styles/styles'

const Advantages = () => {
  const products = [
    {
      id: 1,
      img: horn1,
      heading: "90° asymmetrical 5 & 6 GHz horn antennas"
    },
    {
      id: 2,
      img: horn2,
      heading: "60° asymmetrical 5 & 6 GHz horn antennas"
    },
    {
      id:3,
      img: horn3,
      heading: "30° symmetrical 5 & 6 GHz horn antennas"
    },

  ]
  return (
    <div className={`${styles.innerWidth} mt-10 md:mt-20 mb-12 md:mb-20 `}>
      <div className="text-center md:text-left">
        <h4 className={styles.heading}>
          Discover the IsoHorns{" "}
          <span className="text-primary">Advantage</span>
        </h4>
        <p className={`${styles.paragraph} md:w-[90%] mt-1 `}>
          At IsoHorns, our focus is on delivering superior horn antennas that
          cater to the unique needs of WISPs. Our team of experts works
          tirelessly to develop cutting-edge designs that maximize performance
          while maintaining cost-effectiveness. Our commitment to quality
          ensures that every IsoHorns antenna meets the highest industry
          standards.
        </p>
      </div>

      <div className="md:flex justify-between mt-6 mb-6 gap-6">
        {
          products.map((product) => (
            <div key={product.id} className="relative mb-6 md:mb-0">
              <div className="product-img">
            <Image src={product.img} alt="" />
            </div>
            <div className="absolute bottom-0 w-full p-px">
              <h5 className={styles.subHeading2}>
                {product.heading}
              </h5>
            </div>
          </div>
          ))
        }

      </div>

      <div className="md:flex items-center justify-between">
        <p className="text-secondary text-center md:text-left text-sm lg:text-base leading-6 tracking-tight md:w-3/5 md:mt-1">
          At IsoHorns, our focus is on delivering superior horn antennas that
          cater to the unique needs of WISPs. Our team of experts works
          tirelessly to develop cutting-edge designs that maximize performance
          while maintaining cost-effectiveness. Our commitment to quality
          ensures that every IsoHorns antenna meets the highest industry
          standards.
        </p>
        <button className={`${styles.button} md:text-sm md:inline-block m-auto md:m-0 mt-2 md:mt-0`}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Advantages;

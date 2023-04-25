import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import horn1 from "../../assets/60_1.webp";
import horn2 from "../../assets/60_2.webp";
import horn3 from "../../assets/60_3.webp";
import horn4 from "../../assets/60_4.webp";
import horn5 from "../../assets/60_5.webp";
import Image from "next/image";
import styles from "../../styles/styles";

const ProductSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.innerWidth}>
      <Slider
        {...settings}
        className="border-[1px] border-solid border-[#E5E7EB] mt-12 p-2"
      >
        <div>
          <Image
            src={horn5}
            alt=""
            className="w-[250px] h-[200px] md:w-[450px] md:h-[400px] m-auto"
          />
        </div>
        <div>
          <Image
            src={horn2}
            alt=""
            className="w-[250px] h-[200px] md:w-[450px] md:h-[400px] m-auto"
          />
        </div>
        <div>
          <Image
            src={horn3}
            alt=""
            className="w-[250px] h-[200px] md:w-[450px] md:h-[400px] m-auto"
          />
        </div>
        <div>
          <Image
            src={horn4}
            alt=""
            className="w-[250px] h-[200px] md:w-[450px] md:h-[400px] m-auto"
          />
        </div>
        <div>
          <Image
            src={horn1}
            alt=""
            className="w-[250px] h-[200px] md:w-[450px] md:h-[400px] m-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;

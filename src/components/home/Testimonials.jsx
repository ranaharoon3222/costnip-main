import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import client from "../../assets/client.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../../assets/client-bg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowRight
        style={{
          ...style,
          color: "#D0CCCC",
          fontSize: "32px",
          border: "1px solid #D0CCCC",
          borderRadius: "8px",
          padding: "5px",
          width: "32px",
          height: "32px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowLeft
        style={{
          ...style,
          color: "#D0CCCC",
          fontSize: "32px",
          border: "1px solid #D0CCCC",
          borderRadius: "8px",
          padding: "5px",
          width: "32px",
          height: "32px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: client,
      comment: "A team of pro’s you can trust",
      descp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
      name: "Sophie Moore",
      designation: "Toby’s Owner",
    },
    {
      id: 2,
      img: client,
      comment: "A team of pro’s you can trust",
      descp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
      name: "Sophie Moore",
      designation: "Toby’s Owner",
    },
    {
      id: 3,
      img: client,
      comment: "A team of pro’s you can trust",
      descp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.",
      name: "Sophie Moore",
      designation: "Toby’s Owner",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={`${styles.width} ${styles.padding} py-28 text-center`}>
      <h4 className={styles.heading}>What Clients say’s about us</h4>
      <p className={`${styles.paragraph} pb-14 mt-[-8px]`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies
        felis feugiat
      </p>

      <div className="md:w-[800px] m-auto relative testimonial-container">
        <Slider {...settings} className="z-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="md:w-[700px] m-auto">
              <div className="md:flex justify-between items-center md:p-7 md:gap-5 md:bg-white md:border-[1px] md:border-solid md:border-[#E0DBDB] md:rounded-xl">
                <div className="basis-1/2">
                  <Image
                    src={testimonial.img}
                    alt=""
                    className="rounded-xl w-[120px] md:w-full"
                  />
                </div>
                <div className="basis-1/2 text-left">
                  <h5 className="text-[##2C2524] font-bold text-base md:text-lg mt-8 md:mt-0">{`"${testimonial.comment}"`}</h5>
                  <p className="text-[#817D7D] leading-6 text-xs md:text-sm my-2 md:my-4">
                    {testimonial.descp}
                  </p>

                  <div>
                    <h6 className="text-[#2C2524] font-semibold text-sm md:text-base">
                      {testimonial.name}
                    </h6>
                    <span className="text-[#817D7D] leading-6 text-sm md:text-base">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute top-[-50px] left-[-112px] z-1 hidden md:block">
          <Image src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

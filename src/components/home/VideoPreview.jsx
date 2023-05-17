import React from "react";
import thumbnail from "../../assets/experience-bg.png";
import styles from "@/styles/styles";
import { BsPlay } from "react-icons/bs";

// import video from '../../assets/video.mp4';

const VideoPreview = () => {
  return (
    <div className={`${styles.width} py-10 md:py-20 px-4 md:px-0`}>
      <div className=" relative">
        <video
          src={"/video.mp4"}
          poster="/experience-bg.png"
          className="w-full h-auto"
        />

        <BsPlay className="absolute md:top-[50%] bottom-6 translate-y-[-50%] left-[10%] text-white text-xl md:text-4xl" />
        <span className="tracking-[-0.64px] text-xs md:text-sm absolute bottom-[20%] left-[15%] text-white">
          Experience Affordable Healthcare Like Never Before
        </span>
      </div>
    </div>
  );
};

export default VideoPreview;

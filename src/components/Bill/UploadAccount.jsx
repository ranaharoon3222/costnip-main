import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { MdCloudUpload } from "react-icons/md";
import styles from "@/styles/styles";

const UploadAccount = () => {
  return (
    <div
      className={`md:w-[70%] m-auto border-lg flex flex-col-reverse md:flex-row gap-3 mt-6 md:mt-4 pb-[300px] ${styles.padding}`}
    >
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-14 rounded-3xl basis-3/5 bg-[#292626] px-8 md:px-16 py-8 md:py-12 my-3 md:mt-0">
        <h4 className="text-white text-2xl leading-9 font-bold mb-3 mt-2">
          Sign-in To Upload <br /> To An Account
        </h4>
        <BsFillArrowUpRightCircleFill className="text-primary text-3xl" />
      </div>

      <div className="bg-[#F7F7F7] rounded-3xl basis-2/5 px-16 py-12 text-center">
        <MdCloudUpload className="block m-auto text-[#ADADAD] text-7xl" />
        <span className="text-[#8C8C8C] text-xs">
          Drop file here or click to upload jpg or pdf
        </span>
      </div>
    </div>
  );
};

export default UploadAccount;

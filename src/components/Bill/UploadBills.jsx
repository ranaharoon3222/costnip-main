import React from 'react';
import Image from 'next/image';
import report from '../../assets/reports.png';
import { BsArrowBarUp } from 'react-icons/bs';

const UploadBills = ({ openModal }) => {
  return (
    <div
      onClick={openModal}
      className='md:w-[70%] m-auto bg-[#2C438A] border-lg px-7 md:px-14 py-10 md:flex justify-between md:rounded-3xl'
    >
      <div className='basis-2/5'>
        <span className='text-[#D9D9D9] text-xs'>
          Upload Picture of the Bill
        </span>
        <h4 className='text-[#E3E4E8] text-xl md:text-2xl leading-8 md:leading-9 font-bold mb-3 mt-2'>
          Upload Your Medical <br /> Bills Anonymously
        </h4>
        <p className='text-[#B6B7C5] text-xs w-[90%] leading-5'>
          Anonymous uploads are quick and easy, and you dont need to create an
          account to use this option.
        </p>
      </div>

      <div className='hidden basis-1/5 md:block'>
        <Image src={report} alt='' className='' />
      </div>

      <div className='w-[150px] md:w-full flex gap-1 basis-1/5 bg-[#464646] rounded-lg text-white text-[10px] md:text-sm h-[36px] py-2 px-4 items-center mt-5 md:mt-0'>
        <BsArrowBarUp /> <span>Anonymous Upload</span>
      </div>
    </div>
  );
};

export default UploadBills;

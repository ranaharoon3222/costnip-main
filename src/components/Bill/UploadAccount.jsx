import React, { useState } from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { MdCloudUpload } from 'react-icons/md';
import styles from '@/styles/styles';
import AuthModel from '@/components/authModal';

const UploadAccount = ({ openModal }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModals() {
    setIsOpen(true);
  }
  return (
    <>
      <AuthModel isOpen={isOpen} closeModal={closeModal} />
      <div
        className={`md:w-[70%] m-auto border-lg flex flex-col-reverse md:flex-row gap-3 mt-6 md:mt-4 pb-[300px] ${styles.padding}`}
      >
        <div
          onClick={openModals}
          className='flex cursor-pointer flex-col-reverse md:flex-row gap-4 md:gap-14 rounded-3xl basis-3/5 bg-[#292626] px-8 md:px-16 py-8 md:py-12 my-3 md:mt-0'
        >
          <h4 className='mt-2 mb-3 text-2xl font-bold leading-9 text-white'>
            Sign-in To Upload <br /> To An Account
          </h4>
          <BsFillArrowUpRightCircleFill className='text-3xl text-primary' />
        </div>

        <div
          className='bg-[#F7F7F7] rounded-3xl basis-2/5 px-16 py-12 text-center'
          onClick={openModal}
        >
          <MdCloudUpload className='block m-auto text-[#ADADAD] text-7xl' />
          <span className='text-[#8C8C8C] text-xs'>
            Click to upload jpg or pdf
          </span>
        </div>
      </div>
    </>
  );
};

export default UploadAccount;

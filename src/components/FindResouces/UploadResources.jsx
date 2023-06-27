import React from 'react';
import Image from 'next/image';
import bg from '../../assets/dotted-bg.png';
import styles from '@/styles/styles';
import Link from 'next/link';

const UploadResources = () => {
  return (
    <div
      className={`md:w-3/5 m-auto md:flex justify-between items-center pb-28 relative ${styles.padding} bg-[#F8FAFB] md:bg-transparent text-center md:text-left`}
    >
      <div>
        <h4 className='text-[#323232] font-semibold text-2xl md:text-3xl tracking-[-0.96px] mb-3'>
          Upload your free Resources
        </h4>
        <p className='text-[#96A0B5] text-xs font-medium w-[70%] m-auto md:m-0 leading-[22px] relative z-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nibh
          pretium nunc mauris sed adipiscing.
        </p>
      </div>

      <div className='flex flex-col items-center gap-4 mt-4 md:flex-row md:gap-8 md:mt-0'>
        <Link
          href={'/share-resources'}
          className='text-[#EBEEFA] bg-[#65C7C8] rounded-lg px-5 py-3 text-xs block md:inline-block'
        >
          Upload Resource
        </Link>
        <button className='text-xs text-[#132758] font-medium block md:inline-block bg-white rounded-lg px-5 py-3'>
          Learn More
        </button>
      </div>

      <div className='hidden md:block absolute top-[55px] left-[-70px]'>
        <Image src={bg} alt='' className='w-[120px]' />
      </div>
    </div>
  );
};

export default UploadResources;

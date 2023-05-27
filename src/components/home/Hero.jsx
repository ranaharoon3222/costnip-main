import React from 'react';
import Image from 'next/image';
import styles from '@/styles/styles';
import hero from '../../assets/hero-img.png';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import plusIcon from '../../assets/plus-icon.png';
import Link from 'next/link';

const Hero = () => {


  return (
    <div
      className={`${styles.width} md:py-12 py-16 px-7 md:px-0 bg-darkBlue md:rounded-[20px]`}
    >
      
      <div className='items-center md:flex'>
        <div className='md:pl-28'>
          <h1 className='text-white font-bold leading-[50px] md:leading-[70px] text-[40px] md:text-[65px]'>
            <span className='text-primary'>Never Overpay</span> <br /> For
            Healthcare <br /> Again
          </h1>
          <p className='md:text-xl leading-[23px] text-[#CFD1D1] md:w-[85%] pt-4 pb-5'>
            Compare costs and recommendations to lower cost medical, dental, and
            vision care in your local area
          </p>
        </div>
        <div className='hidden pr-10 md:block'>
          <Image src={hero} alt='' className='w-[530px]' />
        </div>
      </div>

      <div className='md:w-[65%] m-auto'>
          <Link href='/result'>
        <form action='' className='md:flex w-full] relative'>
          
          <div className='absolute top-[14px] md:top-[19px] left-[15px] text-[#9E9E9E]'>
            <AiOutlineSearch className='text-xl' />
          </div>
          <input
            type='text'
            placeholder='Enter Symptoms, services or code'
            className='w-full text-sm md:text-base px-10 py-3 md:py-4 mb-3 md:mb-0 border-radius1 text-[#616161] border-r-2 border-solid border-[#ececec]'
          />
          <input
            type='text'
            placeholder='Enter zipcode'
            className='w-full text-sm md:text-base px-10 py-3 md:py-4 mb-2 md:mb-0 border-radius1 border-radius2 text-[#616161] '
          />
          <button
            type='submit'
            className='hidden md:block bg-[#443CF4] px-5 py-5 rounded-2xl absolute top-0 right-[-15px]'
          >
            <BsSearch className='text-lg text-white' />

          </button>
        </form>
            </Link>



        <div className='flex items-center gap-4 mt-2'>
          <div className='flex items-center gap-1'>
            <Image src={plusIcon} alt='' className='w-[20px]' />
            <span className="text-white font-['Roboto'] text-sm font-normal">
              Medical
            </span>
          </div>
          <div>
            <MdKeyboardArrowDown className='text-2xl text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/image 2.png';
import logo from '../../assets/logo-icon.png';
import lock from '../../assets/lock.png';
import { MdOutlineCloudUpload } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='w-full'>
      <div className='relative'>
        <Image
          src={img1}
          alt=''
          className='w-full m-auto h-auto md:h-[250px]'
        />

        <div className='flex flex-col gap-5 absolute top-[20px]'>
          <Image src={lock} alt='' className='w-[25px] m-auto' />
          <div className='bg-[#8A8985] rounded-lg blur-[0.403614px] w-4/5 m-auto px-3 py-4'>
            <p className='text-base leading-5 text-center text-white opacity-100'>
              Upload a bill or sign in to get access to details
            </p>
          </div>
          <span className='flex items-center gap-2 bg-[#3F3C3C] px-3 py-2 rounded-md text-xs text-white w-[120px] m-auto '>
            <MdOutlineCloudUpload className='text-lg' />
            Upload Bill
          </span>
        </div>
      </div>

      <div className='w-full mt-5'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360871096!2d-74.30933197348597!3d40.69753996031254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1684425686684!5m2!1sen!2sbd'
          // width="600"
          height='250'
          style={{ border: '0' }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full'
        ></iframe>
      </div>

      <div className="flex flex-col gap-4 text-center mt-8 mb-10 md:mb-0 md:mt-20 font-['Be_Vietnam_Pro']">
        <Image src={logo} alt='' className='w-[60px] m-auto' />
        <h5 className='text-[#1F1548] font-semibold mt-[-10px] mb-[-5px]'>
          Reduce The Worry
        </h5>
        <p className='text-[#605A7D] text-xs'>
          Get customized recommendations on cost-effective health options and
          goals.
        </p>
        <button className='bg-[#443CF4] text-white p-2 text-xs w-3/5 m-auto rounded-md'>
          Recommendations
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

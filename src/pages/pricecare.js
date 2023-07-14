import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Banner from '@/components/home/Hero';
const Pricecare = () => {
  return (
    <>
      {/* /////////head////////// */}
      <div className='w-[90%] max-w-[1300px] mx-[auto]'>
        <img
          className='w-[190px] mx-[auto]'
          src='priceare.png'
          alt='picturer'
        />
        <h2 className='font-semibold text-3xl pt-2 text-center text-[#132758] pb-6'>
          What is a pricecare search
        </h2>
        <h3 className='max-w-[670px] mx-[auto] text-[#132758] pb-16'>
          Compare and share prices facilities have charged in the past. See what
          others were charged and make informed decisions!
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-3 mx-[auto] pb-16 gap-y-8'>
          <div className='flex md:justify-center'>
            <img className='w-[70px] mr-2' src='pricedown.png' alt='' />
            <div>
              <h1 className='font-bold'>Find Costs</h1>
              <h1>Know upfront or after</h1>
            </div>
          </div>
          <div className='flex md:justify-center'>
            <img className='w-[70px] mr-2' src='bill.png' alt='' />
            <div>
              <h1 className='font-bold'>Share Billing info</h1>
              <h1 className='w-[212px]'>
                Let others knows so they can make better choice
              </h1>
            </div>
          </div>
          <div className='flex md:justify-center'>
            <img className='w-[70px] mr-2' src='hero.png' alt='' />
            <div>
              <h1 className='font-bold'>Be somebodys hero</h1>
              <h1 className='w-[190px]'>
                Pat your self on the back. you deserve it.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* /////////head////////// */}
      {/* /////////saving////////// */}
      <Banner />
      {/* /////////saving////////// */}
      {/* /////////parency////////// */}
      <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] max-w-[1300px] mx-[auto] py-24  '>
        <div className='m-[auto]'>
          <h1 className='text-[#132758] font-semibold text-xl'>
            How can you help spread
          </h1>
          <h1 className='text-[#15A6C2] font-semibold text-xl'>
            #Pricepparency
          </h1>
          <button className='bg-[#132758] text-white py-1 px-2 rounded-full mt-6 md:mb-0 mb-8'>
            {' '}
            <Link href='/about'>About our mission </Link>
          </button>
        </div>
        <div className='col-span-2 '>
          <div className='flex items-center'>
            <div className='flex items-center w-[60%]'>
              <img className='w-[50px]' src='share.png' alt='image' />
              <h2 className='pl-4'>
                Share your search results on social media
              </h2>
            </div>
            <div className='flex'>
              <a href='https://www.facebook.com/Costnip' >
              <BsFacebook className='mr-1 text-xl' />
              </a>
              <a href='https://twitter.com/costnip'>

              <BsTwitter className='mr-1 text-xl' />
              </a>
              <a href='https://www.instagram.com/costnip/'>

              <BsInstagram className='text-xl ' />
              </a>
            </div>
          </div>
          <div className='flex items-center py-12'>
            <div className='flex items-center w-[60%]'>
              <img className='w-[50px]' src='submit.png' alt='image' />
              <h2 className='pl-4'>Submit your story or topic for our blog</h2>
            </div>
            <div>
              <button className='bg-[#DEEAFD] text-[#132758] p-2 rounded-2xl'>
                <Link href='/contact'> Connect </Link>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center w-[60%]'>
              <img className='w-[50px]' src='report.png' alt='image' />
              <h2 className='pl-4'>
                Report issues with non-transparent helthcare providers
              </h2>
            </div>
            <div className='flex'>
              <button className='bg-[#DEEAFD] text-[#132758] p-2 rounded-2xl'>
                <Link href='/contact'> Report </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /////////parency////////// */}
    </>
  );
};

export default Pricecare;

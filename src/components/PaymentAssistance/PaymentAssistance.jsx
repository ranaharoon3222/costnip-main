import React from 'react';
import { BsFilter } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import Image from 'next/image';
import styles from '@/styles/styles';
import PaginationButtons from './Pagination/PaginationButtons ';
import { useMedia } from '@/helpers/useMedia';
import Link from 'next/link';

const PaymentAssistance = ({ slug, data, meta }) => {
  const { getUrl } = useMedia();

  return (
    <div
      className={`md:w-[85%] m-auto md:py-16 md:mb-16 md:border-b-[1px] border-solid border-[#EBEBEB] bg-[#F8FAFB] md:bg-transparent ${styles.padding}`}
    >
      <div className='m-auto md:w-4/5'>
        <div className='flex flex-col gap-4 text-xs md:flex-row md:gap-20 md:text-sm'>
          <Link href={'/resources'}>
            <span className='text-[#132758]'>← Back</span>
          </Link>
          <div className='text-[#303236] flex gap-5'>
            <span>Costnip App</span>
            <span className='border-l-[1px] border-solid border-[#303236] inline-block pl-2'>
              May 5, 2023
            </span>
          </div>
        </div>

        <div className='md:ml-[132px]'>
          <h3 className='text-[#303236] font-bold text-3xl md:text-4xl pt-4 pb-5 md:pb-7'>
            {slug}
          </h3>
          <h5 className='text-[#323232] font-semibold text-xl md:text-2xl mb-6 md:mb-8'>
            All Resources
          </h5>

          <div className='flex items-center justify-between'>
            <div className='w-[300px] flex gap-2 items-center border-[1.2px] border-solid border-[#EDE7F6] py-2 px-4 rounded-xl bg-[#FAFAFA]'>
              <AiOutlineSearch className='text-[#616161]' />
              <input
                type='text'
                placeholder='Search'
                className='w-full font-[Roboto] font-medium bg-[#FAFAFA] '
              />
            </div>

            <div>
              <BsFilter className='text-2xl text-[#616161]' />
            </div>
          </div>

          <div className='flex items-center gap-1 text-[#888888] text-[10px] md:text-xs border-[1.2px] border-solid border-[#EDE7F6] py-2 px-3 rounded-3xl bg-white w-[85px] md:w-[95px] my-7'>
            <span>Chicago</span>
            <RxCrossCircled />
          </div>

          <div>
            {data?.map((content) => (
              <div key={content.id} className='mb-4'>
                <div className='md:flex items-center gap-10 border-[1px] border-solid border-[#EBEBEB] rounded-xl py-4 px-6 bg-white'>
                  <div>
                    <Image
                      src={getUrl(content.attributes.photoUrl)}
                      alt=''
                      className='w-[100px] md:w-[150px] md:min-w-[149px]'
                      width={200}
                      height={250}
                    />
                  </div>
                  <div>
                    <h4 className='text-[##1F1F1F] font-semibold text-xl md:text-2xl mt-4 md:mt-0'>
                      {content.attributes.name}
                    </h4>
                    <p
                      className='text-[#757575] text-xs md:text-sm mt-2 md:mt-4 mb-4 md:mb-6 leading-6'
                      dangerouslySetInnerHTML={{
                        __html: content.attributes.description,
                      }}
                    ></p>
                    <a
                      href={content.link}
                      className='text-xs md:text-sm text-[#2D73AA] underline'
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-[-25px] md:mt-0 pb-10 md:pb-0'>
            <PaginationButtons meta={meta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAssistance;

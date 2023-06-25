import React, { useState, useEffect } from 'react';
import styles from '@/styles/styles';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import FilterResults from './FilterResults';
import Link from 'next/link';
import { useFetcher } from '@/helpers/fetch';
import Loading from '@/components/loding';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/blogs?populate=*');
  const {
    data: spotLightHead,
    isLoading: sloading,
    error: serror,
  } = useFetcher('/api/health-spootlight-header?populate=*');
  const [resources, setResources] = useState(data?.data);

  useEffect(() => {
    setResources(data?.data);
  }, [data]);

  if (isLoading || sloading) return <Loading />;
  if (error || serror) return <h1>Error</h1>;

  const base = spotLightHead?.data?.attributes;

  const getUniqueNames = [
    ...new Set(
      data.data.map(
        (item) => item.attributes.blog_section.data.attributes.title
      )
    ),
  ];

  const handleFilter = (name) => {
    if (name === 'all') {
      setResources(data.data);
    } else {
      const filteredResource = data.data.filter(
        (item) => item.attributes.blog_section.data.attributes.title === name
      );
      setResources(filteredResource);
    }
  };

  return (
    <div className={`${styles.padding} md:w-3/4 m-auto py-10`}>
      <div className='flex justify-center md:justify-end'>
        <input
          type='text'
          placeholder='Discover news, articles an more.'
          className=' text-black md:flex bg-primary font-medium px-4 max-w-[270px] w-full rounded-xl py-2 placeholder-slate-600 text-sm items-center gap-5'
        />

        <div className='relative flex items-center w-full gap-2 text-sm md:hidden'>
          <AiOutlineSearch className='text-[#616161] absolute top-[16px] left-[20px] text-base' />
          <input
            type='text'
            placeholder='Search Blog'
            className='text-[#616161] font-medium bg-[#FAFAFA] pl-10 px-5 py-3 rounded-xl border-[1px] border-solid border-[#EDE7F6]'
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-6 my-9'>
        {getUniqueNames.map((ele) => {
          return (
            <a
              className='cursor-pointer focus:ring-2 ring-black'
              href={'#' + ele}
              key={ele}
            >
              <span className='bg-[#F1F5F9] px-6 py-3 rounded-lg text-[#252B61] text-sm md:text-base capitalize'>
                {ele}
              </span>
            </a>
          );
        })}
      </div>

      <div className='relative'>
        <FilterResults resources={resources} />

        <div className='hidden md:block absolute top-[52%] right-[-10%]'>
          <Link href='/' className={styles.viewLink}>
            VIEW ALL <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

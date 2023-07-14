import React from 'react';
import FilterType from './Filter/FilterType';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import styles from '@/styles/styles';
import Loading from '../loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowRight
        style={{
          ...style,
          color: '#55857A',
          fontSize: '32px',
          background: '#F6F6F6',
          borderRadius: '50%',
          padding: '5px',
          width: '35px',
          height: '35px',
        }}
      />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdKeyboardArrowLeft
        style={{
          ...style,
          color: '#55857A',
          fontSize: '32px',
          background: '#F6F6F6',
          borderRadius: '50%',
          padding: '5px',
          width: '35px',
          height: '35px',
        }}
      />
    </div>
  );
}










const HealthTopics = () => {
  

  const { data, isLoading, error } = useFetcher(
    '/api/blog-sections?populate[blogs][populate][0]=image'
  );
  

  const { getUrl } = useMedia();

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <>
      {data?.data?.map((featured) => {
        return (
          <div key={featured.id}>
            <div className='w-4/5 m-auto mt-5 mb-20 '>
              <FilterType type={featured.attributes.title} />
              <div className='relative'>
                {/* ......////////////////////// */}
                
                  
                <Slider {...settings}>
                    {featured.attributes.blogs.data.map((ele) => {
                      return (
                        <>
                          <div className='md:px-[5%] '>
                            <div className='relative text-left'>
                              <img
                                src={getUrl(ele.attributes.image)}
                                alt=''
                                className='rounded-lg max-h-[300px]'
                              />
                              <div className='absolute top-[15px] right-[10px] bg-primary text-[10px] py-2 px-4 text-white font-semibold rounded-md'>
                                <span>{featured.attributes.title} </span>;
                              </div>
                            </div>
                            <h5 className='font-bold text-[#2C2524] leading-7 text-base mt-4 mb-2 min-h-[57px]'>
                              {ele.attributes.title}
                            </h5>

                            <p className='text-[#98989E] text-sm leading-6'>
                              {ele.attributes.short_description}
                            </p>

                            <span className='block py-2 text-xs font-medium text-darkBlue'>
                              {featured.attributes.author}
                            </span>

                            <div className='flex justify-between pt-2 border-t-[1px] border-solid border-[#E0DBDB]'>
                              <Link
                                // onClick={() => umr_handleBlog(featured.id)}
                                href={`/blogs/${ele.id}`}
                                className='flex items-center gap-3 text-sm font-medium text-darkBlue'
                              >
                                Read More <BsArrowRight />
                              </Link>
                              <span className='text-[#817D7D] text-xs'>
                                {featured.attributes.updatedAt}
                              </span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    </Slider> 
                  
                
                {/* ......////////////////////// */}
                <div className=' md:block absolute top-[52%] right-[-9%]'>
                  <Link href='/' className={styles.viewLink}>
                    VIEW ALL <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

    
};

export default HealthTopics;

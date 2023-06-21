import React from 'react';
import Image from 'next/image';
import featured1 from '../../../assets/featured1.png';
import featured2 from '../../../assets/featured2.png';
import featured3 from '../../../assets/featured3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import FilterType from './FilterType';
import MobileViewBlogs from '../MobileViewBlogs';
import { useMedia } from '@/helpers/useMedia';

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

const Featured = ({ resources }) => {
  const { getUrl } = useMedia();

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

  const umr_handleBlog = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className='mt-8 filter-div'>
        <Slider {...settings} className=''>
          {resources?.map((featured) => (
            <div key={featured.id} className='md:px-[5%]'>
              <div className='relative'>
                <img
                  src={getUrl(featured.attributes.thumbnail)}
                  alt=''
                  className='rounded-lg max-h-[300px]'
                />
                <div className='absolute top-[15px] right-[10px] bg-primary text-[10px] py-2 px-4 text-white font-semibold rounded-md'>
                  <span>
                    {featured.attributes.blog_section.data.attributes.title}
                  </span>
                </div>
              </div>
              <h5 className='font-bold text-[#2C2524] leading-7 text-base mt-4 mb-2 min-h-[57px]'>
                {featured.attributes.title}
              </h5>
              <p
                className='text-[#98989E] text-sm leading-6'
                dangerouslySetInnerHTML={{
                  __html:
                    featured.attributes.text
                      .replace(/(<([^>]+)>)/gi, '')
                      .substring(0, 200) + '...',
                }}
              ></p>
              <span className='block py-2 text-xs font-medium text-darkBlue'>
                {featured.attributes.author}
              </span>

              <div className='flex justify-between pt-2 border-t-[1px] border-solid border-[#E0DBDB]'>
                <Link
                  onClick={() => umr_handleBlog(featured.id)}
                  href={`/blogs/${featured.id}`}
                  className='flex items-center gap-3 text-sm font-medium text-darkBlue'
                >
                  Read More <BsArrowRight />
                </Link>
                <span className='text-[#817D7D] text-xs'>
                  {featured.attributes.updatedAt}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;

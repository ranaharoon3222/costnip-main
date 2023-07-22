import React from 'react';
import Image from 'next/image';
import animation from '../../assets/animation2.webp';

const Animation = () => {
  return (
    <div className='px-7 md:px-4'>
      <Image src={animation} alt='' className='' />
    </div>
  );
};

export default Animation;

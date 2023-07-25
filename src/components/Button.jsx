import Link from 'next/link';
import React from 'react';

const Button = (props) => {
  return (
    <>
      <Link
        href={props.href || '#'}
        className='font-semibold text-[10px] md:text-sm bg-primary rounded-[10px] px-7 py-3 text-[#FFFFFF]'
      >
        {props.link}
      </Link>
    </>
  );
};

export default Button;

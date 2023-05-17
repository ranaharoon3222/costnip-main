import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PaginationButtons = ({ meta, path }) => {
  const router = useRouter();
  const queryPage = Number(router.query['pagination[pageSize]']) - 1;
  const query = router.query['pagination[pageSize]'];

  const [current, setCurrent] = useState(queryPage);

  const pagination = meta && meta.pagination;
  const page = meta && pagination.page;
  const pageSize = meta && pagination.pageSize;
  const pageCount = meta && pagination.pageCount;
  const total = meta && pagination.total;

  const handlePageClick = ({ selected }) => {
    const pathName = `${router.pathname.split('[')[0]}${
      router.query.slug
    }?pagination[page]=${selected + 1}&pagination[pageSize]=${pageSize}`;
    router.push(pathName);
    setCurrent(queryPage);
  };

  // useEffect(() => {
  //   setCurrent(queryPage);
  //   console.log(queryPage, 'qt');
  // }, []);

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  // const showNextButton = currentPage !== totalPages - 1;
  // const showPrevButton = currentPage !== 0;
  return (
    <motion.div
      variants={paginationVariants}
      initial='hidden'
      animate='visible'
      className='flex justify-center md:justify-end'
    >
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          <span className='flex items-center justify-center w-10 h-10 rounded-full bg-lightGray'>
            <MdKeyboardArrowRight className='text-[#757575] font-bold text-xl' />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel={
          <span className='flex items-center justify-center w-10 h-10 mr-2 bg-lightGray rounded-rull'>
            <MdKeyboardArrowLeft className='text-[#757575] font-bold text-xl' />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4 text-sm'
        pageClassName='block border- border-solid border-lightGray hover:bg-lightGray w-8 h-8 flex items-center justify-center rounded-full mr-2'
        activeClassName='bg-[#65C7C8] text-white'
      />
    </motion.div>
  );
};

export default PaginationButtons;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import styles from '@/styles/styles';
import Button from './Button';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import AuthModel from '@/components/authModal';
import { getCookie, deleteCookie } from 'cookies-next';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  let [isOpen, setIsOpen] = useState(false);
  let [loggedIn, setLoggedIn] = useState(getCookie('user'));

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const logOut = () => {
    deleteCookie('user');
    setLoggedIn({});
  };

  useEffect(() => {
    if (loggedIn) {
      setLoggedIn(JSON.parse(loggedIn));
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <AuthModel isOpen={isOpen} closeModal={closeModal} />
      <div className={`${styles.width} ${styles.padding} py-5 relative z-10`}>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
            <Image src={Logo} alt='' className='w-[100px] md:w-[150px]' />
            </Link>
          </div>

          <div className='flex items-center gap-5 md:gap-14'>
            <ul className='hidden p-0 md:flex gap-14'>
              <li className='border-b-2 border-solid border-primary'>
                <Link href='/result' className='text-sm font-semibold'>
                  Pricecare Search
                </Link>
              </li>
              <li>
                <Link href='/health' className='text-sm '>
                  Health Spotlight{' '}
                </Link>
              </li>
            </ul>

            <div>
              <button
                className='font-semibold text-[10px] md:text-sm bg-primary rounded-[10px] px-7 py-3 text-[#FFFFFF]'
                onClick={openModal}
              >
                {' '}
                Sign in{' '}
              </button>
            </div>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className='md:hidden'>
              <CgMenuRight
                className='cursor-pointer text-[#000000]'
                size={30}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className='position'>
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen'
            }
          >
            <div>
              <div className='flex items-center justify-between w-full mb-5'>
                <Link href='/'>
                  <Image src={Logo} width='87' height='35' alt='/' />
                </Link>
                <div
                  onClick={handleNav}
                  className='p-3 rounded-full shadow-md cursor-pointer shadow-gray-800'
                >
                  <AiOutlineClose className='text-white' />
                </div>
              </div>
            </div>
            <div className='flex flex-col py-14'>
              <ul className='uppercase'>
                <Link href='/#'>
                  <li
                    onClick={() => setNav(false)}
                    className='py-4 text-sm font-medium text-white'
                  >
                    Pricecare Search
                  </li>
                </Link>
                <Link href='/'>
                  <li
                    onClick={() => setNav(false)}
                    className='py-3 text-sm font-medium text-white'
                  >
                    Health Spotlight
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

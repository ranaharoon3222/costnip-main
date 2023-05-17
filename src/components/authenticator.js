import React from 'react';
import Logo from '@/assets/costniplogo.png';
import Google from '@/assets/google.svg';
import Image from 'next/image';

const Authenticator = (user) => {
  const handleGoogle = () => {
    const wnd = window.open(
      `${process.env.NEXT_PUBLIC_API}/api/connect/google/`,
      '_self'
    );
  };
  return (
    <>
      <div className='relative py-16'>
        <div className='container relative px-6 m-auto text-gray-500 md:px-12 xl:px-40'>
          <div className='m-auto max-w-[570px]'>
            <div className='bg-white border border-gray-100 shadow-2xl rounded-3xl dark:border-gray-700 dark:bg-gray-800 shadow-gray-600/10 dark:shadow-none'>
              <div className='p-8 py-12 sm:p-16'>
                <div className='space-y-4 text-center'>
                  <Image src={Logo} className='w-40 m-auto' alt='logo' />
                  <h2 className='mb-8 text-2xl font-bold text-gray-800 dark:text-white'>
                    Sign in to unlock the <br />
                    best of Costnip.
                  </h2>
                </div>
                <div className='grid mt-16 space-y-4'>
                  <button
                    onClick={handleGoogle}
                    className='relative flex items-center px-6 group h-11 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100'
                  >
                    <span className='relative flex items-center justify-center w-full gap-3 text-base font-medium text-gray-600 dark:text-gray-200'>
                      <Image
                        src={Google}
                        className='absolute left-0 w-5'
                        alt='google logo'
                      />
                      <span>Continue with Google</span>
                    </span>
                  </button>
                  <button className='relative flex items-center px-6 group h-11 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100'>
                    <span className='relative flex items-center justify-center w-full gap-3 text-base font-medium text-gray-600 dark:text-gray-200'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={16}
                        height={16}
                        fill='currentColor'
                        className='absolute left-0 w-5 h-5'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                      </svg>
                      <span>Continue with Facebook</span>
                    </span>
                  </button>
                </div>
                <div className='mt-32 space-y-4 text-center text-gray-600 dark:text-gray-400 sm:-mb-8'>
                  <p className='text-xs'>
                    By proceeding, you agree to our{' '}
                    <a href='#' className='underline'>
                      Terms of Use
                    </a>{' '}
                    and confirm you have read our
                    <a href='#' className='underline'>
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p className='text-xs'>
                    This site is protected by reCAPTCHA and the
                    <a href='#' className='underline'>
                      Google Privacy Policy
                    </a>{' '}
                    and
                    <a href='#' className='underline'>
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticator;

import React from 'react';
import Image from 'next/image';
import user from '@/assets/user.png';
import ChatModel from './chatgpt/modal';

const Chat = () => {
  return (
    <>
      <div className='mt-8 mb-3 md:mt-0'>
        <div className='chat-bg md:w-4/5 '>
          <p className='px-5 py-3 text-xs leading-5 md:text-sm md:leading-6'>
            Same here, have suffered alteration in some form, by injected
            humour, or randomised{' '}
          </p>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <Image src={user} alt='' className='w-[20px] md:w-[full]' />
          <h6 className='text-[11px] text-[#FBFBFB] font-medium'>Mike</h6>
          <span className='text-[11px] opacity-30'>08:24 AM</span>
        </div>
      </div>

      <div className='flex justify-end'>
        <div className='chat-bg2 md:w-4/5'>
          <p className='px-5 py-3 text-xs leading-5 md:text-sm md:leading-6'>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true
            generator.
          </p>
        </div>
      </div>

      <div className='flex mt-12 md:justify-end'>
        <ChatModel />
      </div>
    </>
  );
};

export default Chat;

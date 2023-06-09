import React, { useState } from 'react';
import Image from 'next/image';
import download from '../../assets/download-icon.png';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineClipboardDocument } from 'react-icons/hi';
import { MdAttachFile } from 'react-icons/md';
import styles from '../../styles/styles';

const ShareResources = () => {
  const [val, setVal] = useState({});
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(val, file);

    e.preventDefault();

    try {
      const data = {
        full_name: val.full_name,
        email: val.email,
        phone: val.phone,
        type: val.type,
      };
      const formData = new FormData();

      formData.append(`files.attachment`, file, file.name);

      formData.append('data', JSON.stringify(data));

      await fetch(`${process.env.NEXT_PUBLIC_API}/api/shared-resources`, {
        method: 'POST',
        body: formData,
      });

      alert('Upload Successful');
      setLoading(false);
      location.reload();
    } catch (error) {
      alert('Something went wrong try uploading image less then 1 mb');
      setLoading(false);
    }
  };

  return (
    <div
      className={`md:w-[85%] m-auto md:pt-16 md:pb-20 ${styles.padding} bg-[#F8FAFB] md:bg-transparent`}
    >
      <div className='m-auto md:w-4/5'>
        <div className='gap-20 md:flex'>
          <span className='text-[#132758] text-sm'>← Back</span>
          <div className=''>
            <h2 className='mt-[-10px] text-[#303236] font-semibold text-3xl md:text-[40px] pt-6 md:pt-0 pb-5 tracking-[-1.2px]'>
              Share free Resources
            </h2>
            <p className='text-[#96A0B5] text-xs md:text-sm md:w-[65%] leading-6 md:leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non orci
              sit quam viverra vel. Gravida vivamus id vitae sit dui, proin
              dolor.
            </p>
          </div>
        </div>
      </div>

      <div className='md:flex gap-16 md:pl-[260px] mt-12 items-center'>
        <form action='' onSubmit={handleSubmit}>
          <div className='flex flex-col flex-wrap gap-6 md:flex-row'>
            <div className='basis-[48%]'>
              <label htmlFor='' className={styles.label}>
                Full Name
              </label>
              <div className={styles.inputDiv}>
                <AiOutlineUser />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='px-1'
                  name='full_name'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='basis-[48%]'>
              <label htmlFor='' className={styles.label}>
                Email Address
              </label>
              <div className={styles.inputDiv}>
                <AiOutlineUser />
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='px-1'
                  name='email'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='basis-[48%]'>
              <label htmlFor='' className={styles.label}>
                Phone Number
              </label>
              <div className={styles.inputDiv}>
                <AiOutlineUser />
                <input
                  type='text'
                  placeholder='Enter your phone number'
                  className='px-1'
                  name='phone'
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='basis-[48%]'>
              <label htmlFor='' className={styles.label}>
                Resource Type
              </label>
              <div className={styles.inputDiv}>
                <AiOutlineUser />
                <input
                  type='text'
                  placeholder='General Knowledge'
                  className='px-1'
                  required
                  name='type'
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <label htmlFor='' className={styles.label}>
              Attachment
            </label>
            <div className='flex flex-col md:flex-row justify-center py-10 md:py-16 gap-5 border-[1px] border-solid border-[#E5EBF0] p-3 text-[#748397] rounded-lg text-xs md:text-sm bg-white'>
              <span className='flex items-center justify-center md:gap-1'>
                <MdAttachFile className='text-sm md:text-lg' /> Drag and Drop
                files here
              </span>
              <input
                type='file'
                required
                name='attachment'
                onChange={handleFileChange}
                placeholder=''
                className='text-center'
              />
            </div>
            <span className='text-[#748397] text-xs md:text-sm block mt-1'>
              Upload max Size: 1mb
            </span>
          </div>
          <button
            type='submit'
            className='mt-8 mb-10 md:mb-0 md:mt-12 bg-[#132758] font-semibold text-xs md:text-sm px-9 py-4 md:py-3 text-white rounded-lg w-full md:w-auto'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className='hidden md:block'>
          <Image src={download} alt='' className='' />
        </div>
      </div>
    </div>
  );
};

export default ShareResources;

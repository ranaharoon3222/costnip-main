import Image from 'next/image';
import styles from '@/styles/styles';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import plusIcon from '../../assets/plus-icon.png';
import React, { useState, useEffect } from 'react';
import { Location } from '../location';
import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/router';

const Banner = () => {
  const [inputData, setInputData] = useState('');
  const { latitude, longitude } = Location();
  const [show, setShow] = useState(false);

  const saveResult = useStoreActions((action) => action.saveResults);

  ///////////////////////GETZIPCODE////////////////////////////

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  console.log(latitude, longitude);
  console.log(API_KEY);

  const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${API_KEY}&location=${latitude},${longitude}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = data.results[0];
      const postalCode = results.locations[0].postalCode;

      console.log('results', results);
      console.log('Code', postalCode);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  ///////////////////////GETZIPCODE////////////////////////////

  const [data, setData] = useState([]);
  console.log('dataNew: ', data);
  useEffect(() => {
    fetchData();
  }, [inputData]);

  const fetchData = async () => {
    if (!inputData) return;
    try {
      const response = await fetch(
        `https://cnbackend.appspot.com/search?key=AIzaSyCK-zbsEAEkwSHSBMG6qJG9S121VAH_ArU&search=${inputData}&radius=2000&location=${Math.floor(
          latitude
        )},-${Math.floor(longitude)}`
      );
      const data = await response.json();

      setData(data);

      saveResult(data);
    } catch (error) {}
  };

  function handleChange(e) {
    setInputData(e.target.value);
  }

  const handleshow = () => {
    setShow(false);
  };

  return (
    <div
      className={`${styles.width} md:py-12 py-6 px-7 md:px-0 bg-darkBlue md:rounded-[20px]`}
    >
      {/* ////////////ZIPCODE/////////////////// */}

      {/* /////////////////////////////// */}

      <div className='items-center md:flex'>
        <div className='md:pl-14'>
          <h1 className='text-white font-bold leading-[50px] md:leading-[50px] text-[30px] md:text-[50px] md:w-1/2 text-center md:text-left mb-5 md:mb-0'>
            Pricecare Search
          </h1>
        </div>

        <div className='md:ml-[-50px]'>
          <form action='' className='md:flex w-full] relative'>
            <div className='absolute top-[14px] md:top-[19px] left-[15px] text-[#9E9E9E]'>
              <AiOutlineSearch className='text-xl' />
            </div>
            <input
              type='text'
              value={inputData}
              onChange={handleChange}
              onClick={handleshow}
              placeholder='Enter Symptoms, services or code'
              className='w-full text-sm md:text-base px-10 py-3 md:py-4 mb-3 md:mb-0 border-radius1 text-[#616161] border-r-2 border-solid border-[#ececec]'
            />
            <input
              type='text'
              placeholder='Enter zipcode'
              className='w-full text-sm md:text-base px-10 py-3 md:py-4 mb-2 md:mb-0 border-radius1 border-radius2 text-[#616161] '
            />
            <button
              type='submit'
              className='hidden md:block bg-[#443CF4] px-5 py-5 rounded-2xl absolute top-0 right-[-15px]'
            >
              <BsSearch className='text-lg text-white' />
            </button>
          </form>

          <ul className='bg-white text-black rounded-xl  mt-2 absolute z-[100]'>
            {data.map((ele, ind) => {
              const handleGetData = (data) => {
                if (data != 0) {
                  setInputData(data);
                  setShow(true);
                }
              };
              return (
                <div key={ind} style={{ display: show === true && 'none' }}>
                  <li
                    className='px-4 py-2 border-b-2 cursor-pointer '
                    onClick={() => handleGetData(ele.service_details)}
                  >
                    {ele.service_details}
                  </li>
                </div>
              );
            })}
          </ul>

          <div className='flex items-center gap-4 pt-2 mt-2'>
            <div className='flex items-center gap-1'>
              <Image src={plusIcon} alt='' className='w-[20px]' />
              <select className="text-white bg-transparent font-['Roboto'] text-sm font-normal w-[100px] cursor-pointer">
                <option className=' bg-blue-950'>Medical</option>
                <option className='py-2 bg-blue-950'>dental</option>
                <option className=' bg-blue-950'>vision</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

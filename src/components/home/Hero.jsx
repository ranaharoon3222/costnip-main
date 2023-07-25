import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/styles';
import hero from '../../assets/hero-img.png';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import plusIcon from '../../assets/plus-icon.png';
import Link from 'next/link';
import { Location } from '../location';
import { useRouter } from 'next/router';

const Hero = () => {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const { latitude, longitude } = Location();
  const [ipData, setIpData] = useState({});

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [inputData]);

  async function getUserLocation() {
    const response = await fetch(
      'https://api.ipgeolocation.io/ipgeo?apiKey=0b70f161386c4a428e8c735c6dc6456c'
    );

    const data = await response.json();
    console.log(data, 'rs');

    setIpData(data);
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  const fetchData = async () => {
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
      className={`${styles.width} md:py-12 py-16 px-7 md:px-0 bg-darkBlue md:rounded-[20px]`}
    >
      <div className='items-center md:flex'>
        <div className='md:pl-28'>
          <h1 className='text-white font-bold leading-[50px] md:leading-[70px] text-[40px] md:text-[65px]'>
            <span className='text-primary'>Never Overpay</span> <br /> For
            Healthcare <br /> Again
          </h1>
          <p className='md:text-xl leading-[23px] text-[#CFD1D1] md:w-[85%] pt-4 pb-5'>
            Compare costs and recommendations to lower cost medical, dental, and
            vision care in your local area
          </p>
        </div>
        <div className='hidden pr-10 md:block'>
          <Image src={hero} alt='' className='w-[530px]' />
        </div>
      </div>

      <div className='md:w-[65%] m-auto'>
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
            defaultValue={ipData.zipcode}
            placeholder='Enter zipcode'
            className='w-full text-sm md:text-base px-10 py-3 md:py-4 mb-2 md:mb-0 border-radius1 border-radius2 text-[#616161] '
          />
          {/* <Link href='/result'> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(inputData);
              router.push(`/result?searchdata=${inputData}`);
            }}
            // type='submit'
            className='hidden md:block bg-[#443CF4] px-5 py-5 rounded-2xl absolute top-0 right-[-15px]'
          >
            <BsSearch className='text-lg text-white' />
          </button>
          {/* </Link> */}
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
                  onClick={() => handleGetData(ele.service_code)}
                >
                  {ele.service_code}
                </li>
              </div>
            );
          })}
        </ul>

        <div className='flex items-center gap-4 mt-2'>
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
  );
};

export default Hero;

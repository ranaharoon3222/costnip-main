import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/styles";
import hero from "../../assets/hero-img.png";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import plusIcon from "../../assets/plus-icon.png";
import {Location} from "../location";
import { getZipCode } from "../getzipCode"; 


const Hero = () => {
  const [inputData, setInputData] = useState("");
  const { latitude, longitude } = Location();
  ///////////////////////GETZIPCODE////////////////////////////
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
    // Replace with your logic to retrieve the user's latitude and longitude
    const latitude2 = latitude; // Example latitude
    const longitude2 = longitude; // Example longitude

    getZipCode(latitude2, longitude2)
      .then((result) => setZipCode(result))
      .catch((error) => console.error(error));
  }, []);
  ///////////////////////GETZIPCODE////////////////////////////

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [inputData]);

  const fetchData = async () => {

    try {
      const response = await fetch(
        `https://cnbackend.appspot.com/search?key=AIzaSyCK-zbsEAEkwSHSBMG6qJG9S121VAH_ArU&search=${inputData}&radius=2000&location=${Math.floor(
          latitude
        )},-${Math.floor(longitude)}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  console.log(inputData);

  return (
    <div
      className={`${styles.width} md:py-12 py-16 px-7 md:px-0 bg-darkBlue md:rounded-[20px]`}
    >
      {/* /////////////////////////////// */}
      {zipCode ? (
        <p>User's ZIP code: {zipCode}</p>
      ) : (
        <p>Loading ZIP code...</p>
      )}
      {/* /////////////////////////////// */}
      <div className="md:flex items-center">
        <div className="md:pl-28">
          <h1 className="text-white font-bold leading-[50px] md:leading-[70px] text-[40px] md:text-[65px]">
            <span className="text-primary">Never Overpay</span> <br /> For
            Healthcare <br /> Again
          </h1>
          <p className="md:text-xl leading-[23px] text-[#CFD1D1] md:w-[85%] pt-4 pb-5">
            Compare costs and recommendations to lower cost medical, dental, and
            vision care in your local area
          </p>
        </div>
        <div className="hidden md:block pr-10">
          <Image src={hero} alt="" className="w-[530px]" />
        </div>
      </div>

      <div className="md:w-[65%] m-auto">
        <form action="" className="md:flex w-full] relative">
          <div className="absolute top-[14px] md:top-[19px] left-[15px] text-[#9E9E9E]">
            <AiOutlineSearch className="text-xl" />
          </div>
          <input
            type="text"
            value={inputData}
            onChange={handleChange}
            placeholder="Enter Symptoms, services or code"
            className="w-full text-sm md:text-base px-10 py-3 md:py-4 mb-3 md:mb-0 border-radius1 text-[#616161] border-r-2 border-solid border-[#ececec]"
          />
          <input
            type="text"
            placeholder="Enter zipcode"
            className="w-full text-sm md:text-base px-10 py-3 md:py-4 mb-2 md:mb-0 border-radius1 border-radius2 text-[#616161] "
          />
          <button
            type="submit"
            className="hidden md:block bg-[#443CF4] px-5 py-5 rounded-2xl absolute top-0 right-[-15px]"
          >
            <BsSearch className="text-white text-lg" />
          </button>
        </form>

        <ul className="bg-white text-black rounded-xl  mt-2 absolute z-[100]">
          {data.map((ele, ind) => {
            console.log(ind);

            const handleGetData = (data) => {
              if (data != 0) {
                setInputData(data);

                // console.log('heeeeeee')
              }

              // console.log(data)
            };

            return (
              <div key={ind}>
                <li
                  className="border-b-2 px-4 py-2 cursor-pointer "
                  onClick={() => handleGetData(ele.service_code)}
                >
                  {ele.service_code}
                </li>
              </div>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Image src={plusIcon} alt="" className="w-[20px]" />
            <span className="text-white font-['Roboto'] text-sm font-normal">
              Medical
            </span>
          </div>
          <div>
            <MdKeyboardArrowDown className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

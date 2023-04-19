import React from "react";
import Image from "next/image";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from '../../assets/footer-logo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#4874FF]">
        <div className="lg:w-5/6 m-auto pl-4 pr-4 lg:pl-0 lg:pr-0">
        <div className="footer-border lg:flex justify-between pt-7 lg:pt-10">
      <div>
        <Image src={logo} alt="" className="w-[130px] block lg:inline-block m-auto lg:m-auto" />
      </div>

      <div>
        <ul className="flex text-[#F4F7FF] text-sm justify-center lg:justify-normal mt-5 lg:mt-0 mb-5 lg:mb-0">
          <li className="tracking-tight">
            <a href="">Home</a>
          </li>
          <li className="tracking-tight ml-5 flex items-center">
            <a href="">Products</a>   
            <MdOutlineKeyboardArrowDown className="text-white ml-1 text-xl" />          
          </li>
          <li className="tracking-tight ml-5 lg:ml-12">
            <a href="">Blogs</a>
          </li>
          <li className="tracking-tight ml-5 lg:ml-12">
            <a href="">FAQ</a>
          </li>
          <li className="tracking-tight ml-5 lg:ml-12">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center lg:justify-normal">
        <BsFacebook className="text-white"/>
        <BsTwitter className="text-white ml-4"/>
        <BsInstagram className="text-white ml-4"/>
        <BsLinkedin className="text-white ml-4"/>
      </div>
      </div>
      </div>
      <p className="text-[#F4F7FF] leading-6 text-xs lg:text-sm text-center py-3 tracking-tight mt-1">Copyright 2023 IsoHorns LLC. All Rights Reserved</p>
      <div>

      </div>
    </div>
  );
};

export default Footer;

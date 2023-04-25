import React, { useEffect, useState } from "react";
import logo1 from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  let [logo, setlogo] = useState("");
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (router.pathname == "/") {
      setlogo(logo1);
    } else {
      setlogo(logo2);
    }
  }, [router.pathname, logo]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex items-center justify-between w-5/6 m-auto pt-4 relative z-10">
        <div className="relative z-10">
          <Image src={logo} alt="" className="w-[160px]" />
        </div>

        <div>
          <ul
            className={`hidden md:flex text-sm ${
              logo === logo1 ? "text-[#F4F7FF]" : "text-dark"
            }`}
          >
            <li className="tracking-tight">
              <Link href="/">Home</Link>
            </li>
            <li className="tracking-tight ml-6 lg:ml-12 flex items-center">
              <a href="/products">Products</a>
              <MdOutlineKeyboardArrowDown
                className={`${
                  logo === logo1 ? "text-[#F4F7FF]" : "text-dark"
                } ml-1 text-xl}`}
              />
            </li>
            <li className="tracking-tight ml-6 lg:ml-12">
              <Link href="">Blogs</Link>
            </li>
            <li className="tracking-tight ml-6 lg:ml-12">
              <Link href="#faq">FAQ</Link>
            </li>
            <li className="tracking-tight ml-6 lg:ml-12">
              <Link href="">Contact Us</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <HiOutlineMenuAlt3
              className={`${
                logo === logo1 ? "text-white" : "text-dark"
              } cursor-pointer }`}
              size={35}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="position">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#2E51C0] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={logo} width="87" height="35" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col">
              <ul className="uppercase">
                <Link href="/#">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Products
                  </li>
                </Link>
                <Link href="/#">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Blogs
                  </li>
                </Link>
                <Link href="/#faq">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    FAQ
                  </li>
                </Link>
                <Link href="/#faq">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white"
                  >
                    Contact Us
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

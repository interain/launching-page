"use client";
import { Outfit } from "next/font/google";
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});
const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

interface navbarProps {}
const Navbar: FC<navbarProps> = ({}) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className={`w-full fixed top-8 z-30 hidden lg:block `}>
        <div
          className={`w-[85%] mx-auto text-white items-center justify-between py-2 flex px-8`}
        >
          <Link href="/" className={`text-[32px] ${outfit500.className}`}>
            <Image alt="logo" width={145} height={40} src="/icon-t.png"></Image>
          </Link>
          <div className="">
            <ul
              className={`items-center justify-center flex space-x-10 ${outfit500.className} text-[16px]`}
            >
              <li className="text-pri-white hover:textn-[#F4D259] duration-300">
                <a href="/staytuned">Learn</a>
              </li>
              <li className="text-pri-white hover:text-[#F4D259] duration-300">
                <a href="/staytuned">Practice</a>
              </li>
              <li className="text-pri-white hover:text-[#F4D259] duration-300">
                <a href="/staytuned">Job Board</a>
              </li>
              <li className="text-pri-white hover:text-[#F4D259] duration-300">
                <a href="/staytuned">Community</a>
              </li>
            </ul>
          </div>
          <button className={`${outfit600.className} rounded-full `}>
            <Link
              href="/staytuned"
              className={`flex flex-col justify-between h-full m-[2px]  px-4 py-2 hover:text-[#F4D259] rounded-full text-[16px] border border-gray-50 text-white hover:bg-white duration-300`}
            >
              Get Started
            </Link>
          </button>
        </div>
      </nav>

      <div
        className={`backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90  text-white fixed w-full z-30 top-0 block lg:hidden`}
      >
        <div className="flex items-center justify-between py-6 mx-8">
          <Link href="/" className={`text-[32px] ${outfit500.className}`}>
            <Image alt="logo" width={145} height={40} src="/icon-t.png"></Image>
          </Link>
          <div className="">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`pb-8 px-8 ${navbar ? "block" : "hidden"}`}>
          <ul
            className={`items-center justify-center space-y-8  ${outfit500.className} text-[16px] `}
          >
            <li className="text-pri-white hover:text-[#F4D259] duration-300">
              <a href="/staytuned">Learn</a>
            </li>
            <li className="text-pri-white hover:text-[#F4D259] duration-300">
              <a href="/staytuned">Practice</a>
            </li>
            <li className="text-pri-white hover:text-[#F4D259] duration-300">
              <a href="/staytuned">Job Board</a>
            </li>
            <li className="text-pri-white hover:text-[#F4D259] duration-300">
              <a href="/staytuned">Community</a>
            </li>
            <div className={`${outfit600.className} rounded-full `}>
              <Link
                href="/staytuned"
                className={`px-4 py-2 w-full rounded-full text-[16px] hover:text-[#F4D259] border border-gray-50 text-white hover:bg-white duration-300`}
              >
                Get Started
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

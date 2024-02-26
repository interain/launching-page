"use client";
import { useEffect, useRef } from "react";
import { FC } from "react";
import { Outfit, Poppins } from "next/font/google";
import DOTS from "vanta/dist/vanta.dots.min";
import Script from "next/script";
import Link from "next/link";
interface HeroProps {}

const outfit600 = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});
const outfit400 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});
const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

const Hero: FC<HeroProps> = ({}) => {
  const vantaref = useRef(null);
  useEffect(() => {
    DOTS({
      el: "#vanta",
      color: 0xc97bdf,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      backgroundColor: 0x0,
      scaleMobile: 1.0,
      showLines: false,
    });
  }, []);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></Script>
      <div id="vanta" className="bg-black">
        <div className="h-screen flex flex-col items-center justify-center">
          <div
            className={`${outfit600.className} px-6 flex justify-center flex-col items-center text-center my-auto`}
          >
            <div
              className={`text-white 2xl:text-6xl xl:text-[54px] leading-[60px] md:text-[48px] text-4xl mb-0 md:mb-2`}
            >
              <div>Unlock Your Potential</div>
              <span>with </span>
              <span className="text-[#C97BDF]">Interain.</span>
            </div>
            <div
              className={`text-white text-[18px] mt-2 md:text-[24px] my-4  ${outfit500.className}`}
            >
              Where AI meets Interview Excellence
            </div>
            <div
              className={`text-[#AEAEAE] text-[15px] mx-2 md:text-[20px] ${outfit400.className}`}
            >
              To meet and network with India’s future workforce and get
              exclusive access and updates
            </div>
            <Link href={`https://discord.gg/ND8YhBSJ`} className="mt-[20px]">
              <button className="bg-[#C97BDF] rounded-full text-[14px] md:text-[16px] text-white hover:bg-white hover:text-[#C97BDF] duration-[300ms] py-3 px-6">
                Join Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

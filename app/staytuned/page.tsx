import { Outfit } from "next/font/google";

const outfit500 = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Staytuned() {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <h1
          className={`text-white text-[20px] md:text-[28px] ${outfit500.className}`}
        >
          We are <span className="text-[#F4D259]">Coming Soon 😉</span>
        </h1>
      </div>
    </>
  );
}

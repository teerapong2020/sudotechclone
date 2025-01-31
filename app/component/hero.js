"use client"

import { useLanguage } from "../context/language";
import { Lang } from "../lang";

export default function Hero() {
    const {currentLang}=useLanguage()
    const scroll = () => {
        const topValue = window.innerWidth >= 1024 ? 1800 : 2550;
        window.scrollTo({
          top: topValue,
          behavior: "smooth",
        });
      };
  return (
    <div className="max-lg:grid-cols-1">
      <div className="relative  h-[420px] overflow-hidden z-[-1] ">
        <div className="absolute bg-gradient-to-b from-[rgb(254,226,226)] to-[rgb(254 226 226)] h-[500px] w-[2000px] transform -rotate-45 top-1/2 -translate-x-1/3 z-[-1] max-lg:hidden "></div>
        <div className="  relative top-1/3 left-1/4 font-black max-lg:hidden">
          <p className="text-4xl">ขับเคลื่อนธุรกิจของคุณสู่</p>
          <div className="flex text-4xl">
            <p className="text-orange-600">ระดับใหม่</p>
            <p>ด้วยเนื้อหาดิจิตอลที่</p>
          </div>
          <div className="flex text-4xl">
            <p>สร้างสรรค์และ</p>
            <p className="text-orange-600">ยิ่งใหม่</p>
          </div>
        </div>
   
        <div className="relative flex justify-end top-[-120px] mx-14 overflow-hidden max-lg:flex max-lg:top-1">
          <img src="/com.png" width="35%" className="max-lg:w-full"></img>
        </div>
      </div>
      <div className="  relative font-black mx-16 lg:hidden">
          <p className="text-2xl">ขับเคลื่อนธุรกิจของคุณสู่</p>
          <div className="flex text-2xl">
            <p className="text-orange-600">ระดับใหม่</p>
            <p>ด้วยเนื้อหาดิจิตอลที่</p>
          </div>
          <div className="flex text-2xl">
            <p>สร้างสรรค์และ</p>
            <p className="text-orange-600">ยิ่งใหม่</p>
          </div>
        </div>
      <button className=" absolute z-[2] top-1/2 left-[420px] bg-orange-600 rounded-lg py-2 px-4 text-white mt-6 hover:bg-black transition-all max-lg:relative max-lg:left-0 max-lg:mx-16"
      onClick={scroll}
      >
            {Lang[currentLang].Join}
          </button>
    </div>
  );
}

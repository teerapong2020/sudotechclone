"use client";
import Image from "next/image";
import Link from "next/link";
import { Lang } from "../lang";
import { useLanguage } from "../context/language";
import { useState } from "react";

export default function Navbar() {
  const { currentLang, setCurrentLang } = useLanguage();
  const [dropdown, setDropdown] = useState(false);
  const language = [
    { code: "TH", label: "ไทย" },
    { code: "EN", label: "English" },
  ];

  const scroll = () => {
    const topValue = window.innerWidth >= 1024 ? 1800 : 2550;
    window.scrollTo({
      top: topValue,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex justify-between gap-4  text-xl font-semibold shadow-md z-99 ">
        <div className="flex gap-16">
          <Link href={"/"}>
            <Image src={"/icon.png"} alt="icon" width={100} height={0} />
          </Link>
          <div className="flex gap-16 items-center max-lg:hidden">
            <Link className="hover:text-[#EF4444]" href={"../about"}>
              {Lang[currentLang].about}
            </Link>
            <Link className="hover:text-[#EF4444]" href={"../marketing"}>
              {Lang[currentLang].marketing}
            </Link>
            <Link className="hover:text-[#EF4444]" href={"../software"}>
              {Lang[currentLang].software}
            </Link>
          </div>
        </div>
        <div className="flex gap-4 mx-4">
          <button
            className=" relative second-color text-color-primary rounded-lg px-6 my-6 flex items-center gap-2"
            onClick={() => setDropdown(!dropdown)}
          >
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9c10db63f953de263a3ef128f5bbd8b074a8d6a014420a5b6d23984fd77094?apiKey=3b2967c67f56459895810d8811fc470f&"></img>
            {currentLang}
            {dropdown && (
              <ul
                className={`absolute right-0 top-14 text-black second-color rounded-lg`}
              >
                {language.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => {
                      setDropdown(false), setCurrentLang(lang.code);
                    }}
                    className="relative gap-2 px-4 py-2 hover:text-[#EF4444] z-99"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </button>
          <button className="primary-color text-white rounded-lg px-6 my-6 flex items-center gap-2"
          onClick={scroll}
          >
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5245f06ff4634d3fff587376afbaa67ca7e1b928245ff930b5d40e09fcc39427?apiKey=3b2967c67f56459895810d8811fc470f&"></img>
            {Lang[currentLang].contact}
          </button>
        </div>
      </div>
    </div>
  );
}

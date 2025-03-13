"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import BlurImage from "../components/BlurImage";
import SwiperSlider from "../components/carousel/SwiperSlider";
import { formattedItem } from "../utils/FormatString";
import {
  countries,
  partners,
  programs,
  services,
  universityLogo,
} from "../utils/constant";

function LandingPage() {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Hero section */}
      <div
        className="relative pt-[60%] md:pt-[45%] w-full bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-image.png'), url('/hero-blur.png'), linear-gradient(to right, #5a3d3d, #222222, #0f1412)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="w-[70%] md:w-[55%] xl:w-auto mx-auto text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold">
            We are your <span className="text-[#3A96FF]">Gateway</span> to{" "}
            <span className="text-[#FFB14C]">Global</span> Education
          </h1>
          <p className="md:w-[72%] lg:w-[63%] xl:w-auto md:mx-auto text-xs md:text-sm lg:text-base min-[1440px]:text-2xl my-2 md:my-4 lg:my-6 min-[1500px]:my-8 mx-4">
            Study at top ranked university with over 250 partner schools from
            top destinations. Want to study abroad? You are just a click away
            from making your dream come true.
          </p>
          <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#FFB14C] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
            Start Application
          </button>
        </div>
      </div>

      {/* featured universities */}
      <div className="pt-14 md:pt-20 md:pb-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#185397]">
          Featured University
        </h2>
        <p className="md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto pt-5 pb-2 font-medium text-[#333333] text-sm md:text-xl xl:text-2xl">
          Study at top ranked university with over 250 partner schools from top
          destinations. Want to study abroad?{" "}
        </p>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto">
          <SwiperSlider imageList={universityLogo} />
        </div>
      </div>

      {/* services */}
      <div id="services" className="pt-20 md:pt-24 pb-20 md:pb-20">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#185397]">
          Our Services
        </h2>
        <ul className="w-[90%] lg:w-[70%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] grid grid-cols-2 gap-3 md:gap-8 items-stretch text-[#333333]">
          {services.map(
            ({ name, color, paragraph1, paragraph2, list }, index) => (
              <li key={name}>
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="arrow rounded-md md:rounded-2xl p-3 md:py-6 md:px-10 min-[1500px]:px-[2.75rem] h-full flex"
                  style={{ backgroundColor: color }}
                >
                  <div className="h-full flex flex-col justify-between gap-10 md:gap-20 lg:gap-28">
                    <div className="space-y-5">
                      <Image
                        src={`/icon/service${index + 1}.svg`}
                        alt={name}
                        width={67}
                        height={67}
                        className="service-image mb-5 md:mb-0 w-5 h-5 md:w-11 md:h-11 xl:w-[67px] xl:h-[67px]"
                      />
                      <p className="text-sm md:text-base font-bold">{name}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold">Learn more</span>
                      <span className="icon">
                        <LiaLongArrowAltRightSolid size={22} />
                      </span>
                    </div>
                  </div>
                </div>

                {openIndex === index && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="relative rounded-lg shadow-lg w-[95%] md:w-4/5 xl:w-3/5 max-w-5xl bg-white">
                      <div
                        className={`${
                          openIndex === 0
                            ? "max-h-[80vh] md:max-h-full overflow-x-hidden overflow-y-auto md:overflow-hidden"
                            : "overflow-hidden"
                        } relative text-sm md:text-base p-4 md:p-10 rounded-lg shadow-lg w-full text-[#333333]`}
                      >
                        <div
                          style={{ backgroundColor: color }}
                          className="absolute -top-10 -left-10 w-28 h-28 rounded-full"
                        ></div>
                        <div className="relative z-[2px] flex items-center gap-2 pb-1 border-b border-gray-400">
                          <h2 className="text-xl md:text-2xl font-semibold">
                            {name}
                          </h2>
                          <Image
                            src={`/icon/service${openIndex + 1}.svg`}
                            alt={name}
                            width={24}
                            height={24}
                            className="service-image"
                          />
                        </div>
                        <div className="py-4 space-y-2">
                          <p className="py-4">{paragraph1}</p>
                          {paragraph2 && <p>{paragraph2}</p>}
                        </div>
                        <ul className="space-y-2">
                          {list?.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span>
                                <HiAcademicCap />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-xs md:text-sm">
                          <p>
                            Begin you application with a free conselling today
                          </p>
                          <p className="underline">
                            <Link href="/contact">Contact for more info</Link>
                          </p>
                        </div>
                        <div
                          style={{ backgroundColor: color }}
                          className={`${
                            openIndex === 0 ? "hidden md:block" : ""
                          } absolute -bottom-10 -right-10 w-28 h-28 rounded-full`}
                        ></div>
                      </div>
                      <button
                        onClick={() => setOpenIndex(null)}
                        style={{ backgroundColor: color }}
                        className="absolute -top-10 md:top-0 right-0 md:-right-10 w-8 h-8 flex items-center justify-center rounded-full"
                      >
                        ✖
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Countries */}
      <div id="study destinations" className="pt-20 md:pt-24 pb-20 md:pb-44">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#185397]">
          Countries We Cover
        </h2>
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] grid grid-cols-2 gap-3 md:gap-8">
          {countries.map((country, index) => (
            <li key={country} className="text-center w-full">
              <Link href={country.toLowerCase()} className="space-y-3">
                {" "}
                <div className="relative overflow-hidden group rounded-md md:rounded-xl lg:rounded-2xl w-full">
                  <BlurImage
                    src={`/country${index + 1}.png`}
                    alt={country}
                    width={550}
                    height={376}
                    classname="shadow-[inset_25px_35px_35px_rgba(0,0,0,0.5)] w-full"
                  />
                  <div className="absolute inset-0 group-hover:shadow-[inset_0_25px_35px_rgba(0,0,0,0.2)] rounded-md md:rounded-xl lg:rounded-2xl"></div>
                </div>
                <p className="text-sm md:text-base lg:text-xl font-semibold text-[#333333]">
                  Study in {country}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Partners */}
      <div className="md:pb-20 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#185397]">
          Partners
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto">
          <SwiperSlider imageList={partners} />
        </div>
      </div>

      {/* Programs */}
      <div id="programs" className="pt-20 md:pt-24 pb-20 md:pb-44">
        <h2 className="text-2xl md:text-4xl font-bold text-[#185397] text-center">
          Programs
        </h2>
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] flex gap-3 md:gap-8">
          {programs.map((program, index) => (
            <li key={program.course} className="space-y-3 text-center">
              <Link href={formattedItem(program.course)}>
                <div
                  className="list-item p-5 md:p-10 lg:p-14 xl:p-16 rounded-full"
                  style={{ backgroundColor: program.color }}
                >
                  <Image
                    src={`/program${index + 1}.svg`}
                    alt={program.course}
                    width={264}
                    height={264}
                    className="transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p className="text-[10px] md:text-base lg:text-lg font-bold text-[#185397] mt-1">
                  {program.course.toUpperCase()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;

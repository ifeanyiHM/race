import Image from "next/image";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import SwiperSlider from "../components/carousel/SwiperSlider";
import { formattedItem } from "../utils/FormatString";

const universityLogo = [
  "university1",
  "university2",
  "university3",
  "university1",
  "university2",
];

const services = [
  { name: "University Placement", color: "#DDEDFF" },
  { name: "Course Advice", color: "#FFF1E1" },
  { name: "Pre-Departure Assistance", color: "#FFE3E3" },
  { name: "Visa Application Assistance", color: "#F6FFE9" },
  { name: "Career Counselling", color: "#F6FFE9" },
];

const countries = ["Canada", "UK", "USA", "Ireland"];

const partners = ["partner1", "partner2", "partner3", "partner4", "partner2"];

const programs = [
  { course: "engineering", color: "#FFE3E3" },
  { course: "business", color: "#F6FFE9" },
  { course: "art", color: "#DDEDFF" },
  { course: "health sciences", color: "#FFF1E1" },
];

function LandingPage() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative pt-[60%] md:pt-[45%] w-full bg-[url('/hero-image.svg')] bg-fixed bg-cover bg-center">
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
        <p className="md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto pt-5 pb-2 font-medium text-[#4C4C4C] text-sm md:text-xl xl:text-2xl">
          Study at top ranked university with over 250 partner schools from top
          destinations. Want to study abroad?{" "}
        </p>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto">
          <SwiperSlider imageList={universityLogo} />
        </div>
      </div>

      {/* services */}
      <div id="services" className="pt-20 md:pt-24 pb-20 md:pb-44">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#185397]">
          Our Services
        </h2>
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] grid grid-cols-2 gap-3 md:gap-8">
          {services.map(({ name, color }, index) => (
            <li
              key={name}
              className={`${
                index === 4 ? "col-span-2 mx-auto w-1/2" : ""
              }  rounded-lg md:rounded-3xl p-3 md:py-6 md:px-10  min-[1500px]:px-[2.75rem]`}
              style={{ backgroundColor: color }}
            >
              <Link
                href={formattedItem(name)}
                className="flex flex-col gap-10 md:gap-20 lg:gap-28 arrow"
              >
                <div className="space-y-5">
                  <Image
                    src={`/icon/service${index + 1}.svg`}
                    alt={name}
                    width={67}
                    height={67}
                    className="mb-5 md:mb-0 w-5 h-5 md:w-11 md:h-11 xl:w-[67px] xl:h-[67px]"
                  />
                  <p className="text-sm md:text-base font-bold">{name}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Learn more</span>
                  <span className="icon">
                    <LiaLongArrowAltRightSolid size={22} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Countries */}
      <div className="pb-20 md:pb-44">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#185397]">
          Countries We Cover
        </h2>
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] grid grid-cols-2 gap-3 md:gap-8">
          {countries.map((country, index) => (
            <li key={country} className="space-y-3 text-center">
              <Link href={country.toLowerCase()}>
                {" "}
                <div className="relative overflow-hidden group rounded-[32px]">
                  <Image
                    src={`/countries${index + 1}.svg`}
                    alt={country}
                    width={550}
                    height={376}
                    className="shadow-[inset_25px_35px_35px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute inset-0 group-hover:shadow-[inset_0_25px_35px_rgba(0,0,0,0.2)] rounded-[32px]"></div>
                </div>
                <p className="text-sm md:text-base lg:text-2xl font-bold">
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

      {/* Parograms */}
      <div id="programs" className="pt-20 md:pt-24 pb-20 md:pb-44">
        <h2 className="text-2xl md:text-4xl font-bold text-[#185397] text-center">
          Programs
        </h2>
        <ul className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto mt-6 md:mt-[5.563rem] flex gap-3 md:gap-8">
          {programs.map((program, index) => (
            <li key={program.course} className="space-y-3 text-center">
              <Link href={formattedItem(program.course)}>
                <div
                  className="list-item p-[4.188rem] rounded-full"
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

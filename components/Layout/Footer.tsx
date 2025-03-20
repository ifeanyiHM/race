import Image from "next/image";
import Link from "next/link";
import { formattedItem } from "../../utils/FormatString";
import { countries, footerList, socialHandles } from "../../utils/constant";

const listStyle = "text-white text-sm lg:text-base min-[1500]:text-lg";
function Footer() {
  return (
    <footer className="bg-[#185397] pt-10 pb-5 md:pt-16 md:pb-4">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[5%] xl:gap-[10%]">
          <div className="md:w-[38.6%] lg:w-[43%] flex flex-col gap-3 md:gap-8">
            <h3 className="text-[#B4B4B4] font-medium text-lg lg:text-xl">
              About RACE Edu Services
            </h3>
            <p className={listStyle}>
              {" "}
              Race Educational Services is an agency that provides individuals
              with international admissions. We provide professional support and
              advice to those who want to study abroad.{" "}
            </p>
          </div>
          <div className="md:w-[28%] lg:w-[23%] xl:w-1/3 flex flex-col gap-3 md:gap-8">
            <h3 className="text-[#B4B4B4] font-medium text-lg lg:text-xl">
              Countries to study
            </h3>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li
                  key={country}
                  className={`${listStyle} border-b border-white/30`}
                >
                  <Link href={country.toLowerCase()}>Study in {country}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 flex flex-col gap-3 md:gap-8 md:text-end">
            <ul className="flex md:justify-end items-center gap-6">
              {socialHandles.map(({ social, link }) => (
                <li key={social}>
                  {" "}
                  <Link href={link} target="_blank">
                    {" "}
                    <Image
                      src={`/icon/${social}.svg`}
                      alt={social}
                      width={25}
                      height={25}
                      className=""
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              {footerList.map((list) => (
                <li key={list} className={listStyle}>
                  <Link
                    href={formattedItem(
                      list.toLowerCase() === "frequently asked questions"
                        ? "faq"
                        : list.toLowerCase()
                    )}
                  >
                    {" "}
                    {list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white/10 inline-block w-auto mt-8 md:mt-0">
          <Link href="/" className="">
            <Image
              src={`/race_logo_f.svg`}
              alt="race educational service logo"
              width={129}
              height={140}
              className=""
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

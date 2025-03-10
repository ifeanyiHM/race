"use client";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import BlurImage from "../../components/BlurImage";
import { formattedItem } from "../../utils/FormatString";
// import { albertSans } from "../layout";

const partner = [
  {
    university: "De Montfort University",
    country: "uk",
  },
  {
    university: "University of New Brunswick",
    country: "canada",
  },
  {
    university: "Auburn University",
    country: "usa",
  },
  {
    university: "University of Hertfordshire",
    country: "uk",
  },
  {
    university: "Queen’s University",
    country: "canada",
  },
  {
    university: "Arkansas State University",
    country: "usa",
  },
];

function Page() {
  const [selectedCountry, setSelectedCountry] = useState("Sort by Country");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPartner = partner.filter(
    (p) =>
      selectedCountry === "All" ||
      selectedCountry === "Sort by Country" ||
      p.country === selectedCountry.toLocaleLowerCase()
  );

  return (
    <div>
      {" "}
      <div className="relative pt-[23%] w-full bg-fixed bg-cover bg-center">
        <BlurImage
          src={`/partner/partner-head.png`}
          alt="partner hero background"
          fill
        />
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Partners
          </h1> */}
        </div>
      </div>
      <div className="w-[90%] md:w-[95%] lg:w-[93%] mx-auto mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-[#185397] text-xl font-bold">Universities</h2>

          <div className="relative min-w-[9.75rem]">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between gap-2 items-center bg-gray-300 px-2 py-2 rounded-md text-sm text-gray-800 font-medium cursor-pointer focus:outline-none"
            >
              {selectedCountry}
              <BiChevronDown
                className={`transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown List */}
            {isOpen && (
              <ul className="absolute w-full mt-2 text-sm text-gray-700 bg-white shadow-xl rounded-md overflow-hidden">
                {["All", "UK", "USA", "Ireland", "Canada"].map(
                  (country, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                      }}
                      className="px-4 py-1 cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      {country}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
        {filteredPartner.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="bg-white rounded-2xl p-6 md:p-10 max-w-lg text-center">
              {/* <Image
                src={`/partner/flag-of-${selectedCountry.toLowerCase()}.png`}
                alt="No partners available"
                width={150}
                height={150}
                className="mx-auto mb-4"
              /> */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                No Partners Listed
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                We are yet to list our partners from{" "}
                <span className="font-semibold text-blue-600">
                  {selectedCountry}
                </span>
                . Please check back later.
              </p>
            </div>
          </div>
        ) : (
          <>
            <ul className="space-y-6 my-5">
              {filteredPartner.map((p) => (
                <li
                  key={p.university}
                  className="p-2 md:p-4 flex justify-between items-center bg-[#E9E9E9]"
                >
                  <div className="flex items-center gap-2 md:gap-5">
                    <div className="w-[3.75rem] md:w-[7.5rem]">
                      <BlurImage
                        src={`/partner/${formattedItem(p.university)}.png`}
                        alt={p.university}
                        width={0}
                        height={0}
                        sizes="100vw"
                        classname="w-auto h-auto max-h-[3.75rem] object-contain"
                      />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold">
                      {p.university}
                    </h3>
                  </div>

                  <div className="w-8 h-3.5 md:w-auto md:h-auto">
                    <BlurImage
                      src={`/partner/flag-of-${p.country}.png`}
                      alt={p.university}
                      width={51}
                      height={21}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pb-16 lg:pb-32 mt-10">
              <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
                Find more schools
              </button>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Page;

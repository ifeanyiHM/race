import Link from "next/link";
import { ReactNode } from "react";
import { capitalizeWord } from "../utils/FormatString";
import BreadCrumb from "./BreadCrumb";
import SwiperSlider from "./carousel/SwiperSlider";

interface StudyDestinationProps {
  children: ReactNode;
  backgroundImage: string;
  universities: string[];
  colleges?: string[];
  imgtype?: "svg" | "png";
}

function StudyDestination({
  children,
  backgroundImage,
  universities,
  colleges,
  imgtype,
}: StudyDestinationProps) {
  return (
    <>
      {" "}
      <header
        className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center md:bg-[left]"
        style={{
          backgroundImage: `url('/${backgroundImage}.svg'), linear-gradient(to right, #3b2f2f, #151515, #0d0f0d)`,
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"></div>
      </header>
      <BreadCrumb />
      <section className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        {children}
      </section>
      <div className="text-center py-16 lg:pb-32 lg:pt-24">
        <Link
          href="/contact"
          className="inline-block w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base"
        >
          Start Application
        </Link>
      </div>
      <div className="pb-20 md:pb-28 lg:pb-36 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-[#185397]">
          Partner Universities in {capitalizeWord(backgroundImage)}
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
          <SwiperSlider
            imageList={universities}
            imageType={imgtype ? imgtype : "png"}
          />
        </div>
      </div>
      {colleges && (
        <div className="pb-20 md:pb-28 lg:pb-36 text-center">
          <h2 className="text-xl md:text-4xl mb-1 font-bold text-[#185397]">
            Partners Colleges in Canada
          </h2>
          <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
            <SwiperSlider
              imageList={colleges}
              imageType={imgtype ? imgtype : "png"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default StudyDestination;

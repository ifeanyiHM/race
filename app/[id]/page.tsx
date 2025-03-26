"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import BlurImage from "../../components/BlurImage";
import { capitalizeWord, formattedItem } from "../../utils/FormatString";
import { discipline } from "../../utils/constant";

function Page() {
  const params = useParams();
  const courseData = discipline.find(
    (item) => formattedItem(item.faculty) === (params.id as string)
  );

  const courseImg = courseData && formattedItem(courseData.faculty);

  if (!courseData) {
    notFound();
  }

  useEffect(() => {
    if (params.id) {
      document.title = `${capitalizeWord(
        params.id as string
      )} | Race Educational Services`;
    }
  }, [params.id]);

  return (
    <>
      {courseData && courseData?.courses.length > 0 && (
        <>
          {" "}
          <header className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center bg-gradient-to-r from-[#5a3d3d] via-[#222222] to-[#0f1412]">
            <BlurImage
              src={`/${courseImg}/${courseImg}-head.png`}
              alt={`${courseData.faculty} hero background`}
              fill
              classname="object-cover"
            />
            <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1
                className={`text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
              >
                {capitalizeWord(courseData.faculty)}
              </h1>
            </div>
          </header>
          <section className="text-[#333333] text-sm px-2 md:px-0 md:w-[95%] lg:w-[93%] mx-auto">
            <ul className="flex flex-wrap items-center md:space-x-2 font-medium">
              {discipline.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    href={formattedItem(item.faculty)}
                    className="hover:text-blue-600"
                  >
                    {capitalizeWord(item.faculty)}
                  </Link>
                  {index < discipline.length - 1 && (
                    <span className="mx-2">
                      <FaAnglesRight />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="w-[90%] lg:w-[90%] xl:w-[70%] mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3 py-14 md:py-28">
              {courseData.courses.map((course, index) => (
                <li
                  key={index}
                  className="relative hover:scale-105 transition-transform duration-300"
                >
                  <BlurImage
                    src={`/${courseImg}/${courseImg}${index + 1}.png`}
                    alt={course}
                    width={358}
                    height={345}
                    classname="w-full"
                  />
                  <span className="absolute top-6 left-6 font-bold text-white">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <div className="text-center pb-16 lg:pb-32">
            <Link
              href="/contact"
              className="inline-block w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base"
            >
              Find more courses
            </Link>
          </div>
        </>
      )}

      {courseData?.courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6 animate-fadeIn">
          <h2 className="text-2xl md:text-4xl font-bold mt-6 text-gray-800">
            No Courses Found
          </h2>
          <p className="text-sm md:text-lg text-gray-600 mt-2">
            The faculty you are looking for has no listed courses.
          </p>
          <Link href="#programs">
            <button className="mt-6 px-6 py-3 bg-[#185397] text-white rounded-full font-semibold text-sm md:text-base hover:bg-[#143c73] transition-all">
              Explore Other Faculties
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Page;

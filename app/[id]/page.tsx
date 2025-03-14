"use client";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import BlurImage from "../../components/BlurImage";
import { capitalizeWord, formattedItem } from "../../utils/FormatString";

interface CourseDataProps {
  faculty: string;
  courses: string[];
}

const data: CourseDataProps[] = [
  {
    faculty: "engineering",
    courses: [
      "Computer Engineering",
      "Construction Engineering",
      "Industrial Engineering",
      "Electrical & Electronic Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Civil Engineering",
      "Civil Engineering",
      "Aeronautic Engineering",
    ],
  },
  {
    faculty: "art",
    courses: [
      "Communication",
      "Baking and Pastries",
      "Film and Media Production",
      "Hospitality & Tourism",
      "Law and Justice",
      "Photography",
      "Fashion",
      "Interior Design",
      "History",
    ],
  },
  {
    faculty: "business",
    courses: [
      "Business Administration",
      "Business Analytics",
      "Agricultural Business",
      "Enterpreneurship",
    ],
  },
  {
    faculty: "health sciences",
    courses: [
      "Public Health",
      "Kinesiology",
      "Environmental Health",
      "Biology",
      "Digital Health",
    ],
  },
];

function Page() {
  const params = useParams();
  const courseData = data.find(
    (item) => formattedItem(item.faculty) === (params.id as string)
  );

  const courseImg = courseData && formattedItem(courseData.faculty);

  if (!courseData) {
    notFound();
  }

  return (
    <>
      {courseData && courseData?.courses.length > 0 && (
        <div>
          {" "}
          <div
            // style={{
            //   backgroundImage: `url('/${courseData.faculty}/${courseData.faculty}-head.png')`,
            // }}
            className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center bg-gradient-to-r from-[#5a3d3d] via-[#222222] to-[#0f1412]"
          >
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
          </div>
          <div className="w-[90%] lg:w-[90%] xl:w-[70%] mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3 py-14 md:py-28">
              {courseData.courses.map((course, index) => (
                <li key={index} className="relative">
                  <BlurImage
                    src={`/${courseImg}/${courseImg}${index + 1}.png`}
                    alt={course}
                    width={358}
                    height={345}
                  />
                  <span className="absolute top-6 left-6 font-bold text-white">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center pb-16 lg:pb-32">
            <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
              Find more courses
            </button>
          </div>
        </div>
      )}

      {courseData?.courses.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6 animate-fadeIn">
          <h2 className="text-2xl md:text-4xl font-bold mt-6 text-gray-800">
            No Courses Found
          </h2>
          <p className="text-sm md:text-lg text-gray-600 mt-2">
            The faculty you are looking for has no listed courses.
          </p>
          <Link href="/courses">
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

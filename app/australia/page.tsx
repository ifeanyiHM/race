import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import SwiperSlider from "../../components/carousel/SwiperSlider";
import { australiaUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in Canada",
};
function page() {
  return (
    <>
      {" "}
      <header
        className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center md:bg-[left]"
        style={{
          backgroundImage:
            "url('/australia.svg'), linear-gradient(to right, #1F2937, #111827, #000)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"></div>
      </header>
      <BreadCrumb />
      <section className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in Australia?
          </h2>
          <p className="text-[#333333] leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold">Australia</span> is a
            premier study abroad destination that offers excellent high-quality
            education, a vibrant culture and employment opportunities for
            students from all over the globe. Australia is home to a unique and
            pristine environment, diverse and accepting communities and some of
            the world’s best universities. Studying in Australia is an exciting
            and enriching experience.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Top-Ranked Universities:
            </span>
              Australia boasts numerous universities consistently ranked among
            the world&apos;s best, offering a wide range of programs and
            disciplines.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Innovative Educational Experience:
            </span>{" "}
            Australian universities emphasize practical learning, research
            opportunities, and a focus on innovation and creativity.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Globally Recognized Qualifications:
            </span>{" "}
            Degrees and qualifications from Australian universities are highly
            respected internationally, opening doors to career opportunities
            worldwide.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Multicultural Society:{" "}
            </span>{" "}
            Australia is a vibrant and multicultural country, offering students
            the chance to experience diverse cultures and perspectives.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">Quality of Life: </span>{" "}
            Australia is consistently ranked among the best countries in the
            world for quality of life, with safe cities, excellent healthcare,
            and a strong economy.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Work While Studying:{" "}
            </span>{" "}
            International students can work part-time during their studies,
            gaining valuable work experience and earning money to help cover
            living expenses.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              {" "}
              Post-Study Work Visas:
            </span>{" "}
            Australia offers post-study work visas, allowing graduates to stay
            and work in the country for a period of time.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              {" "}
              Skilled Migration Opportunities:{" "}
            </span>{" "}
            Graduates can also apply for skilled migration visas, potentially
            leading to permanent residency.
          </p>
        </div>
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
          Partners Universities in Australia
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
          <SwiperSlider imageList={australiaUniversities} imageType="png" />
        </div>
      </div>
    </>
  );
}

export default page;

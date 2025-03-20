import Link from "next/link";
import BreadCrumb from "../../components/BreadCrumb";
import SwiperSlider from "../../components/carousel/SwiperSlider";
import { germanyUniversities } from "../../utils/constant";

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
            "url('/germany.svg'), linear-gradient(to right, #1F2937, #111827, #000)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"></div>
      </header>
      <BreadCrumb />
      <section className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in Germany?
          </h2>
          <p className="text-[#333333] leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold"> Germany </span>has become
            one of the top study destinations for international students due to
            its world-class education, affordable tuition fees, World-renowned
            universities, thriving job market, and a rich cultural experience.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              High-Quality Education:
            </span>
            German universities are renowned for their rigorous academic
            programs and focus on research and innovation.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Internationally Recognized Degrees:
            </span>{" "}
            German degrees are highly valued worldwide, providing a competitive
            edge in the job market.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Low or No Tuition Fees:
            </span>{" "}
            Public universities in Germany offer tuition-free education for many
            programs, making it an affordable option for international students.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              {" "}
              Reasonable Cost of Living:
            </span>{" "}
            Compared to other European countries, Germany offers a relatively
            affordable cost of living, including accommodation, food, and
            transportation.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              {" "}
              Opportunities for Part-time Work:{" "}
            </span>{" "}
            International students are allowed to work part-time, which can help
            cover living expenses and gain valuable work experience.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Industry Connections:
            </span>{" "}
            German universities often have strong ties with industry, providing
            students with valuable networking and internship opportunities.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Growing Job Market:{" "}
            </span>{" "}
            Germany has a strong job market, with increasing opportunities in
            fields like technology, engineering, and business.
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
          Partners Universities in Germany
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
          <SwiperSlider imageList={germanyUniversities} imageType="png" />
        </div>
      </div>
    </>
  );
}

export default page;

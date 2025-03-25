import StudyDestination from "../../components/StudyDestination";
import { germanyUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in Canada",
};
function page() {
  return (
    <StudyDestination
      backgroundImage="germany"
      universities={germanyUniversities}
    >
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
          German universities are renowned for their rigorous academic programs
          and focus on research and innovation.
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
          <span className="text-blue-600 font-bold">Industry Connections:</span>{" "}
          German universities often have strong ties with industry, providing
          students with valuable networking and internship opportunities.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Growing Job Market: </span>{" "}
          Germany has a strong job market, with increasing opportunities in
          fields like technology, engineering, and business.
        </p>
      </div>
    </StudyDestination>
  );
}

export default page;

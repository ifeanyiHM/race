import StudyDestination from "../../components/StudyDestination";
import { australiaUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in Canada",
};
function page() {
  return (
    <StudyDestination
      backgroundImage="australia"
      universities={australiaUniversities}
    >
      <div className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Why Study in Australia?
        </h2>
        <p className="text-[#333333] leading-relaxed font-medium mt-6">
          <span className="text-blue-600 font-bold">Australia</span> is a
          premier study abroad destination that offers excellent high-quality
          education, a vibrant culture and employment opportunities for students
          from all over the globe. Australia is home to a unique and pristine
          environment, diverse and accepting communities and some of the world’s
          best universities. Studying in Australia is an exciting and enriching
          experience.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Top-Ranked Universities:
          </span>
            Australia boasts numerous universities consistently ranked among the
          world&apos;s best, offering a wide range of programs and disciplines.
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
          Australia is consistently ranked among the best countries in the world
          for quality of life, with safe cities, excellent healthcare, and a
          strong economy.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Work While Studying: </span>{" "}
          International students can work part-time during their studies,
          gaining valuable work experience and earning money to help cover
          living expenses.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            {" "}
            Post-Study Work Visas:
          </span>{" "}
          Australia offers post-study work visas, allowing graduates to stay and
          work in the country for a period of time.
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
    </StudyDestination>
  );
}

export default page;

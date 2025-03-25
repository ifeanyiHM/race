import StudyDestination from "../../components/StudyDestination";
import { irelandUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in Ireland",
};

function page() {
  return (
    <StudyDestination
      backgroundImage="Ireland"
      universities={irelandUniversities}
    >
      <div className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Why Study in Ireland?
        </h2>
        <p className="text-[#333333] leading-relaxed font-medium mt-6">
          <span className="text-blue-600 font-bold">Ireland </span>
          is among the world&apos;s most sought-after destinations for higher
          education. Irish universities are known for their state-of-the-art
          facilities and pro-industry curricula designed by the world&apos;s
          best academicians.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Academic Excellence:</span> 
          Ireland&apos;s worldwide reputation for high quality education is
          built on the solid foundation of commitment to excellence. 
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            {" "}
            Warm and Welcoming Environment:{" "}
          </span>{" "}
           As an international student, you&apos;ll be embraced by a community
          that values diversity and fosters inclusivity. Due to its sense of
          security, you will feel comfortable and experience growth while
          gaining a high-quality education.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Career Prospects:</span>   
          The Irish education extends beyond the classroom, proving to be a
          gateway to global career opportunities. Renowned for its globally
          recognized degrees, you will be able to find attractive job prospects
          worldwide. 
        </p>
      </div>
    </StudyDestination>
  );
}

export default page;

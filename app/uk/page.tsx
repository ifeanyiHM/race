import StudyDestination from "../../components/StudyDestination";
import { ukUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in UK",
};

function page() {
  return (
    <StudyDestination
      backgroundImage="uk"
      universities={ukUniversities}
      imgtype="svg"
    >
      <div className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Why Study in UK?
        </h2>
        <p className="text-[#333333] leading-relaxed font-medium mt-6">
          <span className="text-blue-600 font-bold">The UK </span>
          is a global leader in research and education. it features top academic
          facilities, instructors, the most up-to-date technology, equipment,
          and resources. The teaching and study methodology used in the UK gives
          you the freedom to be creative and develop skill sets and confidence.
          As a student you get the opportunity to be taught by the world&apos;s
          leading academics and experts; you also benefit from their constant
          academic support.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            High-quality education:
          </span>
            UK known for its academic excellence, is home to world-renowned
          Universities and Institution where you will gain access to
          cutting-edge research, diverse programs, and rigorous academic
          standards
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Cultural Experience:</span>{" "}
          UK has a rich cultural heritage, with a vibrant mix of traditions,
          art, and history, providing a unique and enriching environment.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Exceptional Quality of Life:
          </span>{" "}
           Known for its exceptional quality of life, the UK offers a blend of
          modernity and tradition that ensures a fulfilling lifestyle. From
          cosmopolitan cities to picturesque countryside, experience the best of
          both worlds while pursuing your academic aspirations in the UK.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            {" "}
            Multicultural environment:
          </span>{" "}
          UK universities attract students from around the world, creating a
          diverse and multicultural atmosphere that enhances learning and
          networking thereby creating great career prospects.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            {" "}
            Diverse Range of Courses:
          </span>{" "}
          With a wide variety of programs and specializations, you can find
          courses that match your interests and career goals.
        </p>
      </div>
    </StudyDestination>
  );
}

export default page;

import StudyDestination from "../../components/StudyDestination";
import { usaUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in USA",
};

function page() {
  return (
    <StudyDestination backgroundImage="usa" universities={usaUniversities}>
      <div className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Why Study in USA?
        </h2>
        <p className="text-[#333333] leading-relaxed font-medium mt-6">
          <span className="text-blue-600 font-bold">The US</span>
          boasts of some of the finest universities, a lot of which consistently
          rank in the world university rankings.  Find yourself in the midst of
          new cultural experiences and the American way of life. Embrace it and
          open yourself up to new ideas and new people.  Post-Study Work
          Options:  As an international student, you may have opportunities to
          work in the USA after graduation.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Excellent international reputation:
          </span>
             Top universities in the US continue to maintain a strong presence
          among the best ranked education institutions in the world. Its degrees
          are known to have an excellent international reputation. This is due
          to its high academic standards, well-funded and supported American
          universities.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Cultural diversity:</span>{" "}
          American universities are bastions of cultural diversity where
          students from every nationality, religion, or ethnicity are, and
          having access to and contact with so many cultural backgrounds and
          this makes your experience that much more thrilling.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Innovative Research Opportunities:
          </span>{" "}
             The USA is a leader in research and technology, providing you
          access to cutting-edge projects and resources.
        </p>
      </div>
    </StudyDestination>
  );
}

export default page;

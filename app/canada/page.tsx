import StudyDestination from "../../components/StudyDestination";
import { canadaColleges, canadaUniversities } from "../../utils/constant";

export const metadata = {
  title: "Study in Canada",
};
function page() {
  return (
    <StudyDestination
      backgroundImage="canada"
      universities={canadaUniversities}
      colleges={canadaColleges}
    >
      <div className="pt-16 md:pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Why Study in Canada?
        </h2>
        <p className="text-[#333333] leading-relaxed font-medium mt-6">
          <span className="text-blue-600 font-bold">Canada</span> is one of the
          most sought-after study destinations for students from all over the
          world. It offers some of the best universities in the world, a diverse
          cultural environment, the opportunity to gain work experience in your
          field of study.  
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            World-class Education:
          </span>
            Canada’s high quality of education is one of the most important
          reasons why students choose to study in Canada. It is known for its
          cutting-edge research, innovative programs, and high academic
          standards. Obtaining a Canadian degree not only provides you with
          quality education but also opens doors to global opportunities.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Multicultural Society: 
          </span>{" "}
          Canada is home to people who come from varied ethnic groups with
          different cultures and lifestyle. The multicultural environment in
          Canada promotes friendliness and peaceful living.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">
            Immigration opportunities:
          </span>{" "}
          With its Post-Graduation Work Permit Program (PWPP), Canada allows
          students to stay and work in Canada for up to three years after
          graduation. You can gain some international work experience and apply
          for permanent residency later on.
        </p>
        <p className="text-[#333333] leading-relaxed font-medium mt-4">
          <span className="text-blue-600 font-bold">Quality of Life:</span>{" "}
          Canada offers a high standard of living. Access to quality education,
          healthcare, basic amenities, and cleaner air and water among others
          are assured to all.
        </p>
      </div>
    </StudyDestination>
  );
}

export default page;

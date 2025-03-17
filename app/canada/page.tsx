import SwiperSlider from "../../components/carousel/SwiperSlider";
import { canadaColleges, canadaUniversities } from "../../utils/constant";

function page() {
  return (
    <div>
      {" "}
      <div
        className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center md:bg-[left]"
        style={{
          backgroundImage:
            "url('/canada.svg'), linear-gradient(to right, #1F2937, #111827, #000)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Study In Canada
          </h1> */}
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in Canada?
          </h2>
          <p className="text-[#333333] leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold">Canada</span> is one of
            the most sought-after study destinations for students from all over
            the world. It offers some of the best universities in the world, a
            diverse cultural environment, the opportunity to gain work
            experience in your field of study.  
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
            graduation. You can gain some international work experience and
            apply for permanent residency later on.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">Quality of Life:</span>{" "}
            Canada offers a high standard of living. Access to quality
            education, healthcare, basic amenities, and cleaner air and water
            among others are assured to all.
          </p>
        </div>
      </div>
      <div className="text-center py-16 lg:pb-32 lg:pt-24">
        <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
          Start Application
        </button>
      </div>
      <div className="pb-20 md:pb-28 lg:pb-36 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-[#185397]">
          Partners Universities in Canada
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
          <SwiperSlider imageList={canadaUniversities} imageType="png" />
        </div>
      </div>
      <div className="pb-20 md:pb-28 lg:pb-36 text-center">
        <h2 className="text-xl md:text-4xl mb-1 font-bold text-[#185397]">
          Partners Colleges in Canada
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto mt-2.5 md:mt-5">
          <SwiperSlider imageList={canadaColleges} imageType="png" />
        </div>
      </div>
    </div>
  );
}

export default page;

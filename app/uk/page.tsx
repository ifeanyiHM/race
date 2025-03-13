import SwiperSlider from "../../components/carousel/SwiperSlider";

const partners = ["partner1", "partner2", "partner3", "partner4", "partner2"];
function page() {
  return (
    <div>
      {" "}
      <div className="relative pt-[47%] md:pt-[25%] w-full bg-[url('/uk.svg')] bg-fixed bg-cover bg-center md:bg-[left]">
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Study In UK
          </h1> */}
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in UK?
          </h2>
          <p className="text-[#333333] leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold">The UK </span>
            is a global leader in research and education. it features top
            academic facilities, instructors, the most up-to-date technology,
            equipment, and resources. The teaching and study methodology used in
            the UK gives you the freedom to be creative and develop skill sets
            and confidence. As a student you get the opportunity to be taught by
            the world&apos;s leading academics and experts; you also benefit
            from their constant academic support.
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
            <span className="text-blue-600 font-bold">
              Cultural Experience:
            </span>{" "}
            UK has a rich cultural heritage, with a vibrant mix of traditions,
            art, and history, providing a unique and enriching environment.
          </p>
          <p className="text-[#333333] leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Exceptional Quality of Life:
            </span>{" "}
             Known for its exceptional quality of life, the UK offers a blend of
            modernity and tradition that ensures a fulfilling lifestyle. From
            cosmopolitan cities to picturesque countryside, experience the best
            of both worlds while pursuing your academic aspirations in the UK.
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
      </div>
      <div className="text-center py-16 lg:pb-32 lg:pt-24">
        <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
          Start Application
        </button>
      </div>
      <div className="pb-20 md:pb-28 lg:pb-36 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-[#185397]">
          Partners Universities in UK
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto">
          <SwiperSlider imageList={partners} />
        </div>
      </div>
    </div>
  );
}

export default page;

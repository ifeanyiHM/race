import SwiperSlider from "../../components/carousel/SwiperSlider";

const partners = ["partner1", "partner2", "partner3", "partner4", "partner2"];
function page() {
  return (
    <div>
      {" "}
      <div
        className="relative pt-[47%] md:pt-[25%] w-full bg-fixed bg-cover bg-center md:bg-[left]"
        style={{
          backgroundImage:
            "url('/usa.svg'), linear-gradient(to right, #3b2f2f, #151515, #0d0f0d)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Study In USA
          </h1> */}
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in USA?
          </h2>
          <p className="text-gray-700 leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold">The US</span>
            boasts of some of the finest universities, a lot of which
            consistently rank in the world university rankings.  Find yourself
            in the midst of new cultural experiences and the American way of
            life. Embrace it and open yourself up to new ideas and new people. 
            Post-Study Work Options:  As an international student, you may have
            opportunities to work in the USA after graduation.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Excellent international reputation:
            </span>
               Top universities in the US continue to maintain a strong presence
            among the best ranked education institutions in the world. Its
            degrees are known to have an excellent international reputation.
            This is due to its high academic standards, well-funded and
            supported American universities.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">Cultural diversity:</span>{" "}
            American universities are bastions of cultural diversity where
            students from every nationality, religion, or ethnicity are, and
            having access to and contact with so many cultural backgrounds and
            this makes your experience that much more thrilling.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Innovative Research Opportunities:
            </span>{" "}
               The USA is a leader in research and technology, providing you
            access to cutting-edge projects and resources.
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
          Partners Universities in USA
        </h2>
        <div className="md:w-[80%] xl:w-[70%] mx-3 md:mx-auto">
          <SwiperSlider imageList={partners} />
        </div>
      </div>
    </div>
  );
}

export default page;

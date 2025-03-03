function page() {
  return (
    <div>
      {" "}
      <div className="relative pt-[47%] md:pt-[25%] w-full bg-[url('/ireland.svg')] bg-fixed bg-cover bg-center md:bg-[left]">
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <h1
            className={`${albertSans.className} text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Study In Ireland
          </h1> */}
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <div className="pt-16 md:pt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
            Why Study in Ireland?
          </h2>
          <p className="text-gray-700 leading-relaxed font-medium mt-6">
            <span className="text-blue-600 font-bold">Ireland </span>
            is among the world&apos;s most sought-after destinations for higher
            education. Irish universities are known for their state-of-the-art
            facilities and pro-industry curricula designed by the world&apos;s
            best academicians.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              Academic Excellence:
            </span>
              Ireland&apos;s worldwide reputation for high quality education is
            built on the solid foundation of commitment to excellence. 
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">
              {" "}
              Warm and Welcoming Environment:{" "}
            </span>{" "}
             As an international student, you&apos;ll be embraced by a community
            that values diversity and fosters inclusivity. Due to its sense of
            security, you will feel comfortable and experience growth while
            gaining a high-quality education.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium mt-4">
            <span className="text-blue-600 font-bold">Career Prospects:</span>{" "}
               The Irish education extends beyond the classroom, proving to be a
            gateway to global career opportunities. Renowned for its globally
            recognized degrees, you will be able to find attractive job
            prospects worldwide. 
          </p>
        </div>
      </div>
      <div className="text-center py-16 lg:pb-32 lg:pt-24">
        <button className="w-44 md:w-56 min-[1500px]:w-[21.9rem] text-white py-2 lg:py-3 min-[1500px]:py-[1.125rem] bg-[#185397] rounded-[2rem] font-bold text-xs md:text-sm lg:text-base">
          Start Application
        </button>
      </div>
    </div>
  );
}

export default page;

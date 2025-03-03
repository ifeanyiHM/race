"use client";

function Page() {
  return (
    <div>
      {" "}
      <div className="relative pt-[47%] md:pt-[25%] w-full bg-[#185397] bg-fixed bg-cover bg-center">
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            className={` text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Contact
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 px-6 text-center">
        {/* Hero Section */}
        <div className="relative w-full bg-fixed bg-cover bg-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-80">
            Something amazing is on the way. Stay tuned!
          </p>
        </div>

        {/* <div className="mt-10 flex space-x-4 text-4xl md:text-5xl font-semibold">
          <div className="p-4 bg-white/20 rounded-lg shadow-md">
            10<span className="block text-sm">Days</span>
          </div>
          <div className="p-4 bg-white/20 rounded-lg shadow-md">
            12<span className="block text-sm">Hours</span>
          </div>
          <div className="p-4 bg-white/20 rounded-lg shadow-md">
            30<span className="block text-sm">Minutes</span>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md">
          <p className="text-lg opacity-80">Get notified when we launch</p>
          <div className="mt-4 flex items-center bg-[#185397] rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-2 py-2 text-gray-900 outline-none bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
              Notify Me
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Page;

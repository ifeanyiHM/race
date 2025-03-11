"use client";

import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

function Page() {
  return (
    <div className="relative pb-10">
      <div className="flex flex-col lg:flex-row lg:gap-10 w-[90%] lg:w-[80%] xl:w-[75%] mx-auto mt-10 md:mt-16">
        <div className="w-full lg:w-[40%] xl:w-1/2 text-gray-600 dark:text-gray-400">
          <div className="xl:w-[80%]">
            <div className="flex items-center justify-between lg:block">
              <h1 className="text-4xl font-bold">Contact us</h1>
              <ul className="flex items-center gap-3 lg:hidden my-5">
                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <span className="text-[#185397] font-bold text-xl">
                      <TfiEmail />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <span className="text-[#185397] font-bold text-xl">
                      <IoPhonePortraitSharp />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-3">
                    <span className="text-[#185397] font-bold text-xl">
                      <ImLocation />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <p className="my-10">
              Thank you for taking time to visit our website. Should you have
              questions, suggestions, comments or feedback, please contact us
              using the form or contact information below or the information at
              the right-hand side.
            </p>
            <ul className="hidden lg:block space-y-8">
              <li>
                <Link href="#" className="flex items-center gap-3">
                  <span className="text-[#185397] font-bold text-lg">
                    <TfiEmail />
                  </span>
                  <span>iheme.ifeanyi@yahoo.com</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3">
                  <span className="text-[#185397] font-bold text-lg">
                    <IoPhonePortraitSharp />
                  </span>
                  <span>+2348145663725</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3">
                  <span className="text-[#185397] font-bold text-lg">
                    <ImLocation />
                  </span>
                  <span>24, TapaHouse Surulere Lagos.</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[60%] xl:w-1/2 bg-white text-gray-600 dark:text-gray-400">
          {/* <h2 className="text-xl font-bold">Message us</h2> */}
          {/* <form className="max-w-lg mx-auto p-6 shadow-[0_4px_10px_rgba(0,0,0,0.3),_0_10px_30px_rgba(0,0,0,0.1)]">
            <label className="flex font-medium mb-1 text-xs">
              Your Name{" "}
              <span className="text-[#941717]">
                <LuAsterisk />
              </span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 focus:ring-[#185397] focus:outline-none px-2 py-1 mb-4"
              required
            />

            <label className="flex font-medium mb-1 text-xs">
              Your Email{" "}
              <span className="text-[#941717]">
                <LuAsterisk />
              </span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 focus:ring-[#185397] focus:outline-none px-2 py-1 mb-4"
              required
            />

            <label className="flex font-medium mb-1 text-xs">
              Phone Number{" "}
              <span className="text-[#941717]">
                <LuAsterisk />
              </span>
            </label>
            <input
              type="tel"
              className="w-full border border-gray-400 focus:ring-[#185397] focus:outline-none px-2 py-1 mb-4"
              required
            />

            <label className="flex font-medium mb-1 text-xs">
              Reason for Contact{" "}
              <span className="text-[#941717]">
                <LuAsterisk />
              </span>
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border-gray-400" />
                <span className="text-xs">
                  University Placement & Enrolment
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border-gray-400" />
                <span className="text-xs">Career Counselling</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border-gray-400" />
                <span className="text-xs">Course Advise</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border-gray-400" />
                <span className="text-xs">Visa Assistance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="border-gray-400" />
                <span className="text-xs">Other</span>
              </label>
            </div>

            <label className="block font-medium mb-1 text-xs">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-400 focus:ring-[#185397] focus:outline-none px-2 py-1 mb-4"
            />

            <label className="block font-medium mb-1 text-xs">
              Your Message
            </label>
            <textarea className="w-full border border-gray-400 focus:ring-[#185397] focus:outline-none px-2 py-1 mb-4 h-28" />

            <button className="bg-blue-600 text-white pxx-4 p-2 w-full">
              Submit
            </button>
          </form> */}
          <form className="lg:max-w-lg mx-auto lg:p-10 lg:shadow-[0_4px_10px_rgba(0,0,0,0.3),_0_10px_30px_rgba(0,0,0,0.1)]">
            <input
              type="text"
              className="w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6"
              required
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6"
              required
              placeholder="Your Email"
            />
            <input
              type="tel"
              className="w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6"
              required
              placeholder="Phone Number"
            />

            <label className="flex font-medium mb-1 text-xs">
              Reason for Contact{" "}
            </label>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-2 mb-4">
              <label className="hidden md:flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-xs">
                  University Placement & Enrolment
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-xs">Career Counselling</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-xs">Course Advise</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-xs">Visa Assistance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-xs">Other</span>
              </label>
              <label className="flex md:hidden items-center space-x-2 col-span-2">
                <input type="checkbox" />
                <span className="text-xs">
                  University Placement & Enrolment
                </span>
              </label>
            </div>

            <input
              type="text"
              className="w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6"
              placeholder="Subject"
            />
            <textarea
              className="w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6 h-28"
              placeholder="Your Message"
            />

            <button className="bg-blue-600 text-white px-10 py-2 lg:p-2 lg:w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="hidden h-44 absolute w-full bottom-[-1px] z-[-1] bg-[#185397] lg:flex flex-col items-center justify-center text-white px-6 text-center"></div>
    </div>
  );
}

export default Page;

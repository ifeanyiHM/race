"use client";
import Link from "next/link";
import { useState } from "react";
import { ImLocation } from "react-icons/im";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

interface RequestType {
  name: string;
  email: string;
  phoneNumber: string;
  services: string[];
  subject: string;
  message: string;
}

const request = {
  name: "",
  email: "",
  phoneNumber: "",
  services: [],
  subject: "",
  message: "",
};

const styles = {
  input:
    "w-full text-xs shadow-[0px_0px_2px_0px_rgba(24,83,151,1)] focus:ring-[#185397] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6",
};

function Page() {
  const [details, setDetails] = useState<RequestType>(request);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setDetails((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value] // Add if checked
        : prev.services.filter((service) => service !== value), // Remove if unchecked
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted details", details);
    setDetails(request);
  };

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
          <form
            onSubmit={handleSubmit}
            className="lg:max-w-lg mx-auto lg:p-10 lg:shadow-[0_4px_10px_rgba(0,0,0,0.3),_0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <input
              type="text"
              name="name"
              value={details.name}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={details.phoneNumber}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder="Phone Number"
            />

            <label className="flex font-medium mb-1 text-xs">
              Reason for Contact{" "}
            </label>
            <div className="grid grid-cols-2 md:flex flex-wrap gap-2 mb-4">
              <label className="hidden md:flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="university-placement"
                  checked={details.services.includes("university-placement")}
                />
                <span className="text-xs">
                  University Placement & Enrolment
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="career-counselling"
                  checked={details.services.includes("career-counselling")}
                />
                <span className="text-xs">Career Counselling</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="course-advise"
                  checked={details.services.includes("course-advise")}
                />
                <span className="text-xs">Course Advise</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="visa-assistance"
                  checked={details.services.includes("visa-assistance")}
                />
                <span className="text-xs">Visa Assistance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="others"
                  checked={details.services.includes("others")}
                />
                <span className="text-xs">Other</span>
              </label>
              <label className="flex md:hidden items-center space-x-2 col-span-2">
                <input
                  type="checkbox"
                  name="services"
                  onChange={handleCheckboxChange}
                  value="university-placement-and-enrollment"
                  checked={details.services.includes(
                    "university-placement-and-enrollment"
                  )}
                />
                <span className="text-xs">
                  University Placement & Enrollment
                </span>
              </label>
            </div>

            <input
              type="text"
              name="subject"
              value={details.subject}
              onChange={handleChange}
              className={styles.input}
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={details.message}
              onChange={handleChange}
              className={`${styles.input} h-28`}
              placeholder="Your Message"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-2 lg:p-2 lg:w-full"
            >
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

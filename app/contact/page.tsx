"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

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
    "w-full text-xs border border-gray-400 focus:ring-[#185397] placeholder-[#333333] focus:outline-none p-3 xl:p-2.5 mb-8 xl:mb-6",
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

  useEffect(() => {
    document.title = `Contact | Race Educational Services`;
  }, []);

  return (
    <div className="relative pb-10">
      <div className="flex flex-col lg:flex-row lg:gap-10 w-[90%] lg:w-[80%] xl:w-[75%] mx-auto mt-10 md:mt-16">
        <div className="w-full lg:w-[40%] xl:w-1/2 text-[#333333]">
          <div className="xl:w-[80%]">
            <div className="flex items-center justify-between lg:block">
              <h1 className="text-4xl font-bold">Contact us</h1>
              <ul className="flex items-center gap-3 lg:hidden my-5">
                <li>
                  <Link
                    href="https://www.instagram.com/raceeduservices1?igsh=dDZ2bTZ1anU2M2Z1"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#185397] font-bold text-xl">
                      <FaInstagram />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/share/WNBrWDJXg8Hso873/"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#185397] font-bold text-xl">
                      <FaFacebookF />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/Raceduservices?t=UvnxM6yluN7mFkOhbUzUng&s=09"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#185397] font-bold text-xl">
                      <FaXTwitter />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <p className="my-10">
              Thank you for taking time to visit our website. If you have any
              questions, suggestions, comments or feedback, please feel free to
              contact us using the contact information below or the form on the
              right - We&apos;d love to hear from you!
            </p>
            <ul className="hidden lg:block space-y-8">
              <li>
                <Link
                  href="mailto:info@raceeduconsult.com"
                  className="flex items-center gap-3"
                >
                  <span className="text-[#185397] font-bold text-lg">
                    <BiEnvelope />
                  </span>
                  <span>info@raceeduconsult.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+2348092330570"
                  className="flex items-center gap-3"
                >
                  <span className="text-[#185397] font-bold text-lg">
                    <FaPhoneAlt />
                  </span>
                  <span>+234 809 2330 570</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3">
                  <span className="text-[#185397] font-bold text-lg">
                    <ImLocation />
                  </span>
                  <span>8, Onikoyi Street Obele Odan, Surulere Lagos.</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[60%] xl:w-1/2 text-[#333333]">
          <form
            // onSubmit={handleSubmit}
            action="https://formspree.io/f/xovevndk"
            method="POST"
            className="lg:max-w-lg mx-auto lg:p-10 bg-white lg:shadow-[0_4px_10px_rgba(0,0,0,0.3),_0_10px_30px_rgba(0,0,0,0.1)]"
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
      <div className="hidden h-44 absolute w-full bottom-[-1px] z-[-1] bg-[#185397] lg:block"></div>
    </div>
  );
}

export default Page;

"use client";

import { useState } from "react";

// import { albertSans } from "../layout";

const faqs = [
  {
    question: "How do I prove my English proficiency?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Can international students work while studying?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Can I extend my stay after graduation?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Can I bring my family with me while studying abroad?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Are there application deadlines for international students?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question:
      "How do I find housing before I arrive? How can I prepare for cultural differences?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
];

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div>
      {" "}
      <div className="relative pt-[47%] md:pt-[25%] w-full bg-[#185397] bg-fixed bg-cover bg-center">
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            className={` text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Frequently asked questions
          </h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[65%] xl:w-[58%] mx-auto my-10 md:mt-20 md:mb-32">
        <div className="relative w-full">
          <ul className="w-full mt-2 overflow-hidden space-y-6">
            {faqs.map(({ question, answer }, index) => (
              <li
                key={index}
                className={`${
                  openIndex === index ? "bg-[#F9F9F9]" : "bg-[#EDEDED]"
                } px-16 py-3 cursor-pointer shadow-[0px_2px_3px_2px_rgba(0,0,0,0.2)]`}
              >
                <h2
                  className="relative text-sm md:text-base font-bold text-gray-700"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="absolute top-1/2 transform -translate-y-1/2 -left-12 text-2xl text-[#185397]">
                    {openIndex === index ? "-" : "+"}
                  </span>
                  {question}
                </h2>
                {openIndex === index && (
                  <p className="text-xs md:text-sm mt-2 text-gray-500 font-medium">
                    {answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;

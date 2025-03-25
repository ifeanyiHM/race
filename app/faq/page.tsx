"use client";

import { useEffect, useState } from "react";
import BlurImage from "../../components/BlurImage";

// import { albertSans } from "../layout";

const faqs = [
  {
    question: "How do I prove my English proficiency?",
    answer:
      "Most universities require proof of English language proficiency through standardized tests like TOEFL or IELTS. Some universities may also offer their own language assessment or waive the requirement based on prior academic studies in English.",
  },
  {
    question: "Can international students work while studying?",
    answer:
      "Yes, many countries allow international students to work part-time while studying, but the rules vary. In the US, for example, F-1 visa holders can work up to 20 hours per week during the semester and full-time during breaks. Be sure to check the specific work restrictions based on your student visa type. In Canada, as of November 8, 2024, students are allowed to work off campus up to 24 hours per week without a work permit.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Many universities offer scholarships specifically for international students, along with external organizations and government programs.",
  },
  {
    question: "Can I extend my stay after graduation?",
    answer:
      "Many countries offer work permits or post-graduation visa options, allowing international students to stay and work after they complete their studies. The duration and requirements of these permits vary by country.",
  },
  {
    question: "Can I bring my family with me while studying abroad?",
    answer:
      "Many countries allow international students to bring dependents (spouse and children), but the visa process for dependents can be complex and vary by country. Some countries also allow dependents to work while you're studying.",
  },
  {
    question: "Are there application deadlines for international students?",
    answer:
      "Yes, application deadlines vary by institution and may differ for early admissions or regular admissions. It's crucial to apply before the deadline.",
  },
  {
    question: "How do I find housing before I arrive?",
    answer:
      "Many institutions provide resources or listings for off-campus housing or have partnerships with local housing providers.",
  },
  {
    question: "What are my accommodation options?",
    answer:
      "Options typically include on-campus housing, off-campus apartments, and homestays.",
  },
  {
    question: "How can I prepare for cultural differences?",
    answer:
      "It’s important to research cultural norms and practices of the country, join online forums or social media groups of current international students, and participate in pre-departure orientation programs.",
  },
  {
    question: "Will I be able to connect with other international students?",
    answer:
      "Most universities have international student associations or groups that help new students connect and build a community.",
  },
];

function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  useEffect(() => {
    document.title = `FAQ | Race Educational Services`;
  }, []);

  return (
    <>
      {" "}
      <header className="relative pt-[47%] md:pt-[25%] bg-fixed bg-cover bg-center bg-gradient-to-r from-[#5a3d3d] via-[#222222] to-[#0f1412]">
        <BlurImage src={`/faq.png`} alt="partner hero background" fill />
        <div className="w-full xl:w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1
            className={` text-xl md:text-3xl lg:text-5xl min-[1440px]:text-6xl font-bold`}
          >
            Frequently asked questions
          </h1>
        </div>
      </header>
      <section className="w-[90%] md:w-[80%] lg:w-[65%] xl:w-[58%] mx-auto my-10 md:mt-20 md:mb-32">
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
                  className="relative text-sm md:text-base font-bold text-[#333333]"
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
                  <p className="text-xs md:text-sm mt-2 text-[#333333] font-medium">
                    {answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Page;

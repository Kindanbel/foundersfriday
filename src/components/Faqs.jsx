import { useState } from "react";

const Faqs = (prop) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFAQ = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="faq-item pb-4">
      <div
        className={`faq-question flex items-center ${isExpanded ? "gap-[50px]" : "gap-5"  } cursor-pointer`}
        onClick={toggleFAQ}
      >
        <span className="text-lg font-semibold text-gray-800 ">
          {isExpanded
            ? prop.question
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
        </span>

        <span
          className={`arrow-icon transform transition-all duration-700 ${
            isExpanded
              ? "rotate-180 -translate-x-10"
              : "rotate-0 translate-x-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      <div
        className={`faq-answer overflow-hidden transition-[max-height] duration-700 ${
          isExpanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-4 text-gray-600 text-[20px]">
         {prop.answer}
        </p>
      </div>
    </div>
  );
};

export default Faqs;

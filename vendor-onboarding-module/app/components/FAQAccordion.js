'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I update the details linked to my GSTIN?',
    answer:
      'You can update your details, by visiting the Government portal and modifying the information on your GSTIN. Your business details will automatically be fetched from your GSTIN.',
  },
  {
    question: 'Where will this information be used?',
    answer:
      'Your GSTIN and signature will be used to issue invoice to the buyer.',
  },
  {
    question: 'Can I create a seller account with a composite GSTIN?',
    answer:
      'As per Government regulations, sellers with a composite GSTIN cannot sell on e-commerce platforms.',
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-[80%] mx-auto p-4 border border-appGrey rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-appText">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-appGrey">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left text-appText font-medium focus:outline-none"
          >
            {faq.question}
            <span className="text-appText text-xl">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="pb-4 text-sm text-appText">
              {faq.question.includes('composite GSTIN') ? (
                <span>
                  As per Government regulations, sellers with a composite GSTIN cannot sell on e-commerce platforms.{' '}
                  
                </span>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

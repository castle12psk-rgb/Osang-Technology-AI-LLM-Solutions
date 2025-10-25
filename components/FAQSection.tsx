import React, { useState } from 'react';
import { faqData } from '../constants';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 lg:pt-20 pb-20 lg:pb-32 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">자주 묻는 질문 (FAQ)</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            오상테크놀로지의 AI 솔루션과 기술에 대해 더 알아보세요.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-2xl border border-gray-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-6"
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold text-navy hover:text-ai-blue transition-colors">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 flex-shrink-0 ${activeIndex === index ? 'rotate-180 text-ai-blue' : 'text-gray-400'}`}
                  size={24}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                    <div className="pb-6 text-gray-600 leading-relaxed space-y-4">
                        {faq.answer.split('\n').map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
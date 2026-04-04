import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Digital Marketing?",
    answer: "Digital marketing uses online channels like search engines, social media, and websites to reach the right audience. Viral Post Media applies result-driven strategies to help brands grow as a leading digital marketing company."
  },
  {
    question: "What is a digital marketing company?",
    answer: "A digital marketing company helps businesses build online visibility, generate leads, and increase sales. Viral Post Media combines strategy, creativity, and analytics to elevate your brand."
  },
  {
    question: "What services does Viral Post Media offer?",
    answer: "We provide a complete range of services focused on helping brands grow and scale online. These services commonly include: SEO, PPC, Social Media Marketing, Content Creation, Email Marketing, Web Design, Conversion Rate Optimization, Influencer Marketing, and Branding Strategy."
  },
  {
    question: "Does Viral Post Media serve international clients?",
    answer: "Yes, Viral Post Media serves both national and international clients. We deliver result-driven digital marketing solutions tailored to diverse markets, industries, and business goals worldwide."
  },
  {
    question: "How does digital marketing help my business grow?",
    answer: "Viral Post Media helps businesses attract the right audience, build brand awareness, and convert visitors into customers through customized strategies and performance-driven campaigns."
  },
  {
    question: "Why should I choose Viral Post Media?",
    answer: "Viral Post Media stands out by delivering data-driven strategies, transparent reporting, and measurable results that improve visibility, leads, and ROI."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary by strategy and competition. SEO takes time, while paid campaigns deliver faster results. Viral Post Media ensures consistent and sustainable business growth."
  },
  {
    question: "Does Viral Post Media offer customized strategies?",
    answer: "Yes. Every business has unique goals. Viral Post Media delivers customized strategies aligned with your brand and growth objectives."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a062e] to-[#120b44] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-6 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-purple-200/70 text-lg mx-auto">
            Everything you need to know about navigating the digital landscape with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden border border-purple-500/30 shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full px-6 py-5 flex justify-between items-center transition-colors duration-300 ${
                    isOpen 
                      ? 'bg-[#7b1fa2] text-white' 
                      : 'bg-purple-900/40 hover:bg-purple-800/60 text-gray-100'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-left font-bold text-lg lg:text-xl pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0 text-purple-300" />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out bg-[#0f0a3c]/80 overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 py-5 text-purple-100/90 leading-relaxed border-t border-purple-500/20 text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import { Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the guarantee work?',
    answer: 'If we do not get your business on the first page of Google for your target keywords within 90 days, we will refund 100% of your investment. No questions asked.'
  },
  {
    question: 'What does "first page" mean?',
    answer: 'First page means appearing in the top 10 organic search results on Google for your target keywords. This does not include paid ads.'
  },
  {
    question: 'What keywords will you target?',
    answer: 'We work with you to identify the most valuable keywords for your business based on search volume, competition, and relevance to your services. These keywords are agreed upon before we start.'
  },
  {
    question: 'How do I request a refund?',
    answer: 'Simply contact us after the 90 day period if we have not met the guarantee. We will process your full refund within 5 business days.'
  },
  {
    question: 'How long does it typically take to see results?',
    answer: 'Most Detroit businesses start seeing improved rankings within 30-60 days. We guarantee first page results within 90 days or your money back.'
  }
];

export default function GuaranteeSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-6 animate-pulse-slow">
              <Shield className="w-12 h-12 animate-float" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our 90 Day Money Back Guarantee
            </h2>

            <p className="text-xl text-orange-50 mb-8 leading-relaxed max-w-2xl mx-auto">
              We are confident in our SEO system. If we do not get your business on the first page of Google for your target keywords within 90 days, you get every penny back.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-white font-semibold text-lg">
                You have nothing to lose and everything to gain.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-orange-50 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

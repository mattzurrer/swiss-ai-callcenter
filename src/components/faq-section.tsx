import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1416px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 text-[var(--sac-grey-900)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--sac-grey-900)]">
                {faq.question}
              </h3>
              <p className="text-base md:text-lg text-[var(--sac-grey-700)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Example default FAQs to import where needed
export const defaultFaqs: FaqItem[] = [
  {
    question: "How do AI voice agents sound so real?",
    answer:
        "Our voice agents use advanced neural text-to-speech and contextual understanding models from top AI providers (OpenAI, Google, and others). Each voice is trained to sound human in tone, rhythm, and emotion, adapting naturally to caller intent. This makes every interaction feel authentic rather than robotic.",
  },
  {
    question: "Can the AI handle complex support scenarios or only simple FAQs?",
    answer:
        "Our AI is trained to handle a wide range of scenarios. For edge cases it escalates to human agents with full context, so customers always get accurate support.",
    },
    {
    question: "Can I review calls and train the agent?",
    answer:
        "Yes. Every call is recorded, transcribed, and visible in your dashboard. You can listen to full conversations, flag improvement points, and adjust responses using our no-code editor. We also provide a human-in-the-loop feedback loop so your agents continuously learn and improve over time. Note: Most companies have regulatory requirements to record calls.",
    },
  {
    question: "Is it possible to integrate Swiss AI Callcenter with my existing CRM?",
    answer:
        "Yes — we provide connectors and APIs for popular CRMs. Our team can help set up bi-directional syncing so your support data stays in one place.",
    },
    {
        question: "How quickly can I launch a project?",
        answer:
            "Most projects are up and running within 30 days, from pilot to Go-live. We analyze your current call process, define conversation flows, and deploy a ready- to - use agent connected to your systems(CRM, PBX, or booking tool).Because we handle integration and voice setup internally, you start collecting results within two weeks.",
    }  
];

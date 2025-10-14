import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import CTA from "@/components/cta";
import ComparisonTable from "@/components/comparison-table";
import UseCases from "@/components/use-cases";
import SectionHeader from "@/components/section-header";
import BenefitCard from "@/components/benefit-card";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const benefitsData = [
    {
      title: "Natural Voice Conversations",
      description: "Our call agents respond in a lifelike tone and understand context.",
      imageUrl: "/images/icon-w-heart.svg",
    },
    {
      title: "Human in the Loop",
      description: "Seamlessly escalate complex queries to human agents to ensure customer satisfaction.",
      imageUrl: "/images/icon-w-human.svg",
    },
    {
      title: "Fast Integration",
      description: "Integrate with your existing systems like CRMs, ticketing and PBX and workflows quickly with minimal disruption.",
      imageUrl: "/images/icon-w-rocket.svg",
    },
    {
      title: "Multilingual & Compliant",
      description: "Built for European markets with GDPR compliance and support for 100+ languages.",
      imageUrl: "/images/icon-w-europe.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Use Cases */}
      <UseCases />

      {/* CTA Banner 1 */}
      <CTA />

      {/* Key Benefits */}
      <section className="py-12 md:py-20">
        <div className="max-w-[936px] mx-auto px-4 md:px-8">
          <SectionHeader
            title="Key Benefits of Our Voice AI"
            subtitle="Experience a level of consistency, scalability, and cost efficiency that traditional call centers simply cannot match."
            titleClassName="text-[var(--sac-500)] mb-6"
            subtitleClassName="max-w-[640px] mx-auto"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                imageUrl={benefit.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents vs Human Call Centers */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <SectionHeader
            title="AI Agents vs. Human Call Centers"
            subtitle="The unfair advantages that make AI voice agents the clear choice for forward-thinking businesses."
            titleClassName="text-[#D02327] text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            subtitleClassName="text-[#231F1F] text-lg md:text-xl lg:text-2xl font-black max-w-[700px] mx-auto"
          />

          <ComparisonTable />
        </div>
      </section>

      {/* CTA Banner */}
      <CTA />

      {/* About Us */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <SectionHeader
            title="About Us"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            titleClassName="text-[#D02327] text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            subtitleClassName="text-[#231F1F] text-lg md:text-xl lg:text-2xl font-black max-w-[700px] mx-auto"
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-[#D02327] text-2xl md:text-3xl lg:text-4xl font-black mb-4">Our Origins</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-[#D9D9D9] rounded-md h-72 md:h-96"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="text-3xl md:text-4xl">💬</div>
        </button>
        <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="text-3xl md:text-4xl">📞</div>
        </button>
      </div>
    </div>
  );
}

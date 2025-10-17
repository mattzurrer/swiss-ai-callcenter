import SectionHeader from "@/components/section-header";

export default function UseCases() {
  const cases = [
    {
      title: "IT Service Desk",
      quote: "Your most reliable service desk agent works 24/7 and never misses a ticket.",
      bullet1: "Automates ticket creation, password resets, and status updates.",
      bullet2: "Integrates with ticket systems as Jira, ServiceNow or Zendesk.",
      bullet3: "Human handover for priority or critical incidents.",
      description: "Business Impact: Reduce average handling time by 40 %.",
      cta: "Call our AI Service Desk Agent",
      backgroundImage: "/images/swiss-ai-callcenter-it-desk.jpg"
    },
    {
      title: "Hotel Receptionist",
      quote: "Your most reliable receptionist works 24/7 and never misses a call.",
      bullet1: "Handles guest bookings, check-in queries, and restaurant reservations 24/7.",
      bullet2: "Speaks your brand´s tone of voice and multiple languages.",
      bullet3: "Frees front-desk staff for in-person service.",
      description: "Business Impact: Never miss a guest call again, even after hours.",
      cta: "Call our AI Hotel Receptionist",
      backgroundImage: "/images/swiss-ai-callcenter-hotel.jpg"
    },
    {
      title: "Sales Call",
      quote: "Your most reliable Sales Agent works 24/7 and never misses a lead.",
      bullet1: "Schedules qualified appointments and follows up leads.",
      bullet2: "Personalised scripts and CRM sync for data capture.",
      bullet3: "Adaptive responses based on customer intent.",
      description: "Business Impact: Convert leads 3× faster at half the cost.",
      cta: "Watch video for our AI Sales Agent",
      backgroundImage: "/images/swiss-ai-callcenter-sales-desk.jpg"
 
    }
  ];

  return (
    <section className="py-12 bg-[var(--sac-grey-700)]">
      <SectionHeader
        title="Make a test call now and experience our agents in action"
        subtitle=""
        titleClassName="text-[var(--sac-white)] mb-6"
        subtitleClassName="max-w-[640px] mx-auto text-[var(--sac-white)]"
      />
      <div className="max-w-[1416px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-8"
            >
              <div 
                className="flex flex-col justify-end items-start p-6 md:p-12 md:py-6 rounded-lg bg-[var(--sac-grey-700)] min-h-[320px] md:min-h-[520px]"
                style={useCase.backgroundImage ? {
                  backgroundImage: `url(${useCase.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : undefined}
              >
                <h2 className="text-white drop-shadow-md drop-shadow-[var:color(--sac-grey-900)]">
                  {useCase.title}
                </h2>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <h3 className="text-white">
                  {useCase.quote}
                </h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((num) => {
                    const bulletKey = `bullet${num}` as keyof typeof useCase;
                    return useCase[bulletKey] ? (
                      <li key={num} className="text-white">
                      {useCase[bulletKey]}
                      </li>
                    ) : null;
                  })}
                </ul>
                <p className="text-white font-bold">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

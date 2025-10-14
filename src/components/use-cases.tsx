import Image from "next/image";

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
      // Placeholder for future PNG background
      backgroundImage: ""
    },
    {
      title: "Hotel Receptionist",
      quote: "Your most reliable receptionist works 24/7 and never misses a call.",
      bullet1: "Handles guest bookings, check-in queries, and restaurant reservations 24/7.",
      bullet2: "Speaks your brand´s tone of voice and multiple languages.",
      bullet3: "Frees front-desk staff for in-person service.",
      description: "Business Impact: Never miss a guest call again, even after hours.",
      cta: "Call our AI Hotel Receptionist",
      backgroundImage: "" // Placeholder for future PNG background
    },
    {
      title: "Sales Call",
      quote: "Your most reliable Sales Agent works 24/7 and never misses a lead.",
      bullet1: "Schedules qualified appointments and follows up leads.",
      bullet2: "Personalised scripts and CRM sync for data capture.",
      bullet3: "Adaptive responses based on customer intent.",
      description: "Business Impact: Convert leads 3× faster at half the cost.",
      cta: "Watch video for our AI Sales Agent",
      backgroundImage: "" // Placeholder for future PNG background
 
    }
  ];

  return (
    <section className="py-12 bg-[var(--sac-grey-500)]">
      <div className="max-w-[1416px] mx-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-8"
            >
              {/* Robot AI Receptionist Image Area - Prepared for background PNG */}
              <div 
                className="robot-ai-receptionist-image flex flex-col justify-end items-start p-6 md:p-12 rounded-lg bg-[var(--sac-grey-700)] min-h-[320px] md:min-h-[520px]"
                style={useCase.backgroundImage ? {
                  backgroundImage: `url(${useCase.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : undefined}
              >
                <h2 className="text-white">
                  {useCase.title}
                </h2>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <h3 className="text-white font-montserrat text-xl md:text-2xl font-bold leading-8">
                  {useCase.quote}
                </h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((num) => {
                    const bulletKey = `bullet${num}` as keyof typeof useCase;
                    return useCase[bulletKey] ? (
                      <li key={num} className="text-white font-montserrat text-base font-normal leading-5">
                        • {useCase[bulletKey]}
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

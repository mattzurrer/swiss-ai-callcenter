import Image from "next/image";

export default function ComparisonTable() {
  const features = [
    {
      name: "24/7 Availability",
      icon: "/images/icon-stopwatch.svg",
      aiValue: {
        type: "icon",
        content: "/images/robot-check.svg"
      },
      humanValue: {
        type: "icon",
        content: "/images/robot-x.svg"
      }
    },
    {
      name: "Sick Days & Vacation",
      icon: "/images/icon-sunglasses.svg",
      aiValue: { type: "text", content: "Never" },
      humanValue: { type: "text", content: "Yes (10-20 days/year)" }
    },
    {
      name: "Language Support",
      icon: "/images/icon-globe.svg",
      aiValue: { type: "text", content: "100+ languages" },
      humanValue: { type: "text", content: "one to two languages" }
    },
    {
      name: "Scaling Capacity",
      icon: "/images/icon-arrowup.svg",
      aiValue: { type: "text", content: "instant" },
      humanValue: { type: "text", content: "Days to weeks" }
    },
    {
      name: "Training Time",
      icon: "/images/icon-stopwatch.svg",
      aiValue: { type: "text", content: "minutes" },
      humanValue: { type: "text", content: "two to four weeks" }
    },
    {
      name: "Consistent Quality",
      icon: "/images/icon-onehundred.svg",
      aiValue: {
        type: "icon",
        content: "/images/robot-check.svg"
      },
      humanValue: {
        type: "icon",
        content: "/images/robot-x.svg"
      }
    },
    {
      name: "Infrastructure Costs",
      icon: "/images/icon-house.svg",
      aiValue: { type: "text", content: "none" },
      humanValue: { type: "text", content: "$1,000-$5,000/seat" }
    },
    {
      name: "Benefits & Insurance",
      icon: "/images/icon-hospital.svg",
      aiValue: { type: "text", content: "none" },
      humanValue: { type: "text", content: "$15,000-$25,000/year" }
    }
  ];

  return (
    <div className="w-full max-w-[935px] mx-auto">
      <div className="flex flex-col rounded-md overflow-hidden border-2 border-[color:var(--sac-grey-900)]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-4 md:p-6 bg-[var(--sac-grey-900)] rounded-t-md">
          <h3 className="flex-1 text-white font-montserrat text-lg md:text-xl lg:text-2xl font-bold">
            Feature
          </h3>
          <h3 className="w-32 md:w-48 lg:w-64 text-white font-montserrat text-lg md:text-xl lg:text-2xl font-bold text-center">
            AI Agents
          </h3>
          <h3 className="w-32 md:w-48 lg:w-64 text-white font-montserrat text-lg md:text-xl lg:text-2xl font-bold text-center">
            Human Agents
          </h3>
        </div>

        {/* Rows */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 p-4 md:p-6 border-b-2 border-b-[color:var(--sac-grey-900)]"
          >
            {/* Feature Name with Icon */}
            <div className="flex-1 flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
                <Image src={feature.icon} alt={feature.name} width={56} height={56} />
              </div>
              <span className="text-[var(--sac-grey-900)] font-montserrat text-base md:text-lg lg:text-xl font-normal">
                {feature.name}
              </span>
            </div>

            {/* AI Value */}
            <div className="w-32 md:w-48 lg:w-64 flex justify-center items-center">
              {feature.aiValue.type === "icon" ? (
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Image src={feature.aiValue.content} alt="AI Value" width={50} height={48} />
                </div>
              ) : (
                <span className="text-[var(--sac-grey-900)] font-montserrat text-base md:text-lg lg:text-xl font-normal text-center">
                  {feature.aiValue.content}
                </span>
              )}
            </div>

            {/* Human Value */}
            <div className="w-32 md:w-48 lg:w-64 flex justify-center items-center">
              {feature.humanValue.type === "icon" ? (
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Image src={feature.humanValue.content} alt="Human Value" width={56} height={56} />
                </div>
              ) : (
                <span className="text-[var(--sac-grey-900)] font-montserrat text-base md:text-lg lg:text-xl font-normal text-center">
                  {feature.humanValue.content}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
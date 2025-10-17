export default function Data() {
  const cards = [
    {
      description: "Customer satisfaction rate",
      data: "99.4%",
      icon: ""
    },
        {
      description: "Average cost reduction",
      data: "70%",
      icon: ""
    },
        {
      description: "Availability without breaks",
      data: "24/7",
      icon: ""
    },
{
      description: "Languages supported",
      data: "45+",
      icon: ""
    },
    {
      description: "GDPR compliance",
      data: "100%",
      icon: ""
    },

  ];

return (
    <section className="py-12 bg-[var(--sac-white)]">
      <div className="max-w-[1416px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div className="flex flex-col p-8 justify-end items-center rounded-lg bg-[var(--sac-white)] min-h-[120px] drop-shadow-md gap-8">
              <h2>{card.data}</h2>
              <p className="font-bold">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
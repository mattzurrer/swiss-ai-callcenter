import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      role="region"
      aria-label="Hero"
      className="relative bg-[var(--sac-500)]"
      style={{ minHeight: 'clamp(520px,60vh,880px)' }}
    >
      {/* background image container (fills) */}
      <div className="absolute inset-0">
        <Image
          src="/images/swiss-ai-callcenter-hero.jpg"
          alt=""
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      {/* overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/35 to-black/15"
      />

      {/* content container */}
      <div className="relative max-w-[1416px] mx-auto px-4 py-12 md:px-8 md:py-16 lg:py-24 flex items-center min-h-[inherit]">
        <div className="flex flex-col gap-6 max-w-[696px]">
          <h1 className="text-[var(--sac-white)] text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] m-0">
            AI Voice Agents that sound human and work like your best staff
          </h1>
          <p className="text-[var(--sac-white)] font-bold text-base md:text-lg lg:text-xl leading-[1.33] m-0">
            Increase productivity, reduce missed calls, and deliver consistent 24/7 service, without adding headcount.
          </p>
        </div>
      </div>
    </section>
  );
}

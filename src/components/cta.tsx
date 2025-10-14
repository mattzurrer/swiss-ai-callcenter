import Image from "next/image";

export default function cta() {
  return (
    <section className="bg-[var(--sac-500)] py-8 md:py-12">
        <div className="max-w-[1416px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-white text-center md:text-left">
              Do you want your own AI?<br /> Call us now to make your life easier!
            </h2>
            <div className="flex flex-col items-center md:items-end gap-2">
            <Image 
              src="/images/swiss-ai-callcenter.svg"
              alt="Swiss AI Callcenter Logo"
              width={180}
              height={40}
            />
              {/* Phone Number */}
              <p className="text-white text-center">
                Your AI team: +41 411 441 41 41
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
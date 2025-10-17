import Image from "next/image";
import SectionHeader from "@/components/section-header";

export default function cta() {
  return (
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
    );
}

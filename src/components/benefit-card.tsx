import Image from "next/image";

interface BenefitCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BenefitCard({ title, description, imageUrl }: BenefitCardProps) {
  return (
    <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
      <div className="flex flex-col flex-1 items-start gap-4 relative">
        <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
          {title}
        </h3>
        <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
          {description}
        </p>
      </div>
      <div className="relative w-24 h-24 flex-shrink-0" aria-hidden="true">
        <Image src={imageUrl} alt={title} width={96} height={96} />
      </div>
    </article>
  );
}

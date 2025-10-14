interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleAs?: "h2" | "h3";
  subtitleAs?: "h3" | "p";
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  titleAs: Title = "h2",
  subtitleAs: Subtitle = "h3",
  titleClassName,
  subtitleClassName,
  containerClassName,
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${containerClassName}`}>
      <Title className={titleClassName}>{title}</Title>
      <Subtitle className={subtitleClassName}>{subtitle}</Subtitle>
    </div>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  labelColor?: string;
  titleColor?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  labelColor = "text-beelee-teal",
  titleColor = "text-earth-brown",
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <p className={`text-sm font-bold tracking-widest uppercase ${labelColor}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold mt-2 ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-earth-brown/70 mt-3 max-w-2xl ${center ? "mx-auto" : ""} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}

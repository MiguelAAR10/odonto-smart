interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} ${className}`.trim()}
    >
      {label && (
        <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-brand-teal">
          {label}
        </span>
      )}
      <h2
        className="text-3xl font-bold text-text-dark md:text-4xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-muted">{description}</p>
      )}
    </div>
  );
}

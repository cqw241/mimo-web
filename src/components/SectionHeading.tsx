import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {label && (
        <p className="text-caption-uppercase text-muted mb-3 tracking-[0.12em]">
          {label}
        </p>
      )}
      <h2 className="text-display-md text-ink font-serif tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-body-md text-body mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

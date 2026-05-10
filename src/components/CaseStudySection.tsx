import type { ReactNode } from "react";

interface CaseStudySectionProps {
  id?: string;
  label?: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}

export function CaseStudySection({
  id,
  label,
  title,
  children,
  dark = false,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={`py-24 ${dark ? "bg-surface-dark text-on-dark" : ""}`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {label && (
          <p
            className={`text-caption-uppercase mb-3 tracking-[0.12em] ${
              dark ? "text-on-dark-soft" : "text-muted"
            }`}
          >
            {label}
          </p>
        )}
        <h2
          className={`text-display-sm font-serif tracking-tight mb-8 ${
            dark ? "text-on-dark" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

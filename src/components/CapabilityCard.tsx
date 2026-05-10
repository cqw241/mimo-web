import type { ReactNode } from "react";

interface CapabilityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CapabilityCard({
  icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <div className="bg-surface-card rounded-lg p-8">
      <div className="w-10 h-10 rounded-md bg-hairline-soft flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-title-md text-ink font-medium mb-2">{title}</h3>
      <p className="text-body-sm text-body leading-relaxed">{description}</p>
    </div>
  );
}

// src/components/services/ServiceHero.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

export function ServiceHero({
  badge = "Desarrollo Web",
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-4xl mx-auto mb-28 text-center">
      <AnimatedSection>
        <span className="inline-block px-3 py-1.5 font-mono text-label uppercase text-amber mb-6 border border-line">
          {badge}
        </span>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <h1 className="text-display-lg font-bold mb-6">
          {title}
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <p className="text-xl text-paper-dim leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      </AnimatedSection>
    </div>
  );
}
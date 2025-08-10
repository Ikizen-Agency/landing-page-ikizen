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
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/15 text-primary rounded-full mb-6 border border-primary/20">
          {badge}
        </span>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          {title}
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <p className="text-xl text-secondary/90 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      </AnimatedSection>
    </div>
  );
}
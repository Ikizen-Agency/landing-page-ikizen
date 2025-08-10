// src/components/services/ServiceProcess.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

export function ServiceProcess({
  title = "Nuestro proceso",
  description = "Transparente, colaborativo y enfocado en resultados.",
  steps,
}: {
  title?: string;
  description?: string;
  steps: { title: string; desc: string }[];
}) {
  return (
    <section className="max-w-4xl mx-auto mb-32 relative">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
        <p className="text-secondary/80">{description}</p>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-5 top-0 w-0.5 h-full bg-secondary/20"></div>
        {steps.map((step, index) => (
          <AnimatedSection
            key={index}
            delay={200 + index * 100}
            className={`flex items-start gap-6 mb-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="bg-dark-bg/40 border border-secondary/20 rounded-xl p-5 max-w-lg">
              <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
              <p className="text-secondary/90">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
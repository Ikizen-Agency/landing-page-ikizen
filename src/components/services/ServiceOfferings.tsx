// src/components/services/ServiceOfferings.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

export function ServiceOfferings({
  mainTitle = "Soluciones Web a tu Medida",
  mainItems,
  sideItems,
}: {
  mainTitle?: string;
  mainItems: { icon: string; title: string; desc: string }[];
  sideItems: { title: string; desc: string }[];
}) {
  return (
    <section className="max-w-site mx-auto mb-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bloque principal */}
        <AnimatedSection className="lg:col-span-2">
          <div className="bg-ink-soft border border-line p-8 h-full">
            <h2 className="text-2xl font-semibold mb-6 border-l-4 border-amber pl-3">
              {mainTitle}
            </h2>
            <div className="space-y-6">
              {mainItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-amber text-2xl mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-paper-dim mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Bloque secundario */}
        <AnimatedSection delay={200} className="space-y-6">
          {sideItems.map((item, index) => (
            <div
              key={index}
              className="border border-line p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-paper-dim">{item.desc}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
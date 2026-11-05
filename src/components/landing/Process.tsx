import type { Dictionary } from "@/i18n";

export function Process({ process }: { process: Dictionary["process"] }) {
  return (
    <section id="process" className="scroll-mt-16 bg-ink-soft px-gutter py-section">
      <div className="mx-auto max-w-site">
        <p className="font-mono text-label uppercase text-amber">{process.eyebrow}</p>
        <h2 className="mt-4 max-w-4xl text-display-lg font-bold">{process.title}</h2>

        <ol className="mt-16 lg:mt-24">
          {process.steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[4.5rem_1fr] gap-x-4 border-t py-8 md:grid-cols-[9rem_1fr_1fr] md:gap-x-8">
              <span aria-hidden="true" className="row-span-2 font-display text-display-lg font-bold text-amber md:row-span-1">
                {index + 1}
              </span>
              <div>
                <p className="font-mono text-label uppercase text-amber">{step.phase}</p>
                <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              </div>
              <p className="mt-2 text-paper-dim md:mt-0">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

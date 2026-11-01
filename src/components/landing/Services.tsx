import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/i18n";

export function Services({ services }: { services: Dictionary["services"] }) {
  return (
    <section id="services" className="scroll-mt-16 px-gutter py-section">
      <div className="mx-auto max-w-site">
        <p className="font-mono text-label uppercase text-amber">{services.eyebrow}</p>
        <h2 className="mt-4 text-display-lg font-bold">{services.title}</h2>

        <div className="mt-16 border-b lg:mt-24">
          {services.blocks.map((block) => (
            <article key={block.href} className="grid gap-6 border-t py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
              <h3 className="text-display-md font-bold lg:col-span-5">{block.title}</h3>
              <div className="lg:col-span-4">
                <p className="text-lg text-paper-dim">{block.summary}</p>
                <Link
                  href={block.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber transition-colors duration-200 hover:text-amber-pale"
                >
                  {block.linkLabel}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
              <ul className="space-y-2 font-mono text-sm text-paper lg:col-span-3">
                {block.offerings.map((offering) => (
                  <li key={offering}>{offering}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

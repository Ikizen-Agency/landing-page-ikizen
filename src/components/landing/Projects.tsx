import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectsRibbon } from "@/components/landing/ProjectsRibbon";
import type { Dictionary } from "@/i18n";

/** One logo ring, at the same proportions, threaded onto the gold line. */
function ThreadNode() {
  return (
    <svg viewBox="0 0 24 30" className="ribbon-node" aria-hidden="true">
      <ellipse cx="12" cy="15" rx="10.5" ry="13.2" />
    </svg>
  );
}

export function Projects({ projects }: { projects: Dictionary["projects"] }) {
  const { stops } = projects;

  return (
    <section id="projects" className="scroll-mt-28 pb-section">
      <div className="mx-auto max-w-site px-gutter box-content">
        <p className="font-mono text-label uppercase text-amber">{projects.eyebrow}</p>
        <h2 className="mt-4 max-w-4xl text-display-lg font-bold">{projects.title}</h2>
      </div>

      <ProjectsRibbon
        ribbonLabel={projects.ribbonLabel}
        previousLabel={projects.previousLabel}
        nextLabel={projects.nextLabel}
      >
        {stops.map((stop, index) => (
          <li key={stop.href} className="ribbon-stop">
            <ThreadNode />

            <div className="relative mt-6 flex aspect-square items-end overflow-hidden border bg-ink-soft p-5 sm:aspect-[2/1] md:p-10">
              <span aria-hidden="true" className="absolute right-5 top-5 font-mono text-label text-paper-dim md:right-10 md:top-10">
                {index + 1}/{stops.length}
              </span>
              {stop.image ? (
                <Image
                  src={stop.image.src}
                  alt={stop.image.alt}
                  fill
                  sizes="(min-width: 64rem) 54rem, 85vw"
                  className="object-cover"
                />
              ) : (
                <h3 className="text-display-lg font-bold">{stop.name}</h3>
              )}
            </div>

            {stop.image && <h3 className="mt-5 text-2xl font-bold">{stop.name}</h3>}
            <p className="mt-5 font-mono text-label uppercase text-amber">{stop.type}</p>
            <p className="mt-3 max-w-xl text-lg text-paper-dim">{stop.purpose}</p>
            <a
              href={stop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 py-2 text-sm font-medium text-amber transition-colors duration-200 hover:text-amber-pale"
            >
              {stop.linkLabel}
              <span className="sr-only">: {stop.name}</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </li>
        ))}
      </ProjectsRibbon>
    </section>
  );
}

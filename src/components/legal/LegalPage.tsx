import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { getDictionary, type Locale } from "@/i18n";
import { CONTACT_EMAIL } from "@/i18n/contact";

/** A fixed revision date: it changes when the text changes, not on every render. */
const LAST_UPDATED_ISO = "2026-11-01";

export function LegalPage({ locale, page }: { locale: Locale; page: "terms" | "privacy" }) {
  const dict = getDictionary(locale);
  const copy = dict.pages[page];
  const { legal } = dict;

  return (
    <>
      <Navbar locale={locale} route={page} />
      <main id="main" tabIndex={-1} className="px-gutter pb-section pt-32 focus:outline-none lg:pt-44">
        <article className="mx-auto max-w-site">
          <p className="font-mono text-label uppercase text-amber">{legal.eyebrow}</p>
          <h1 className="mt-4 text-display-lg font-bold">{copy.title}</h1>

          <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <p className="font-mono text-label text-paper-dim lg:col-span-3">
              {legal.lastUpdatedLabel}: <time dateTime={LAST_UPDATED_ISO}>{legal.lastUpdatedDate}</time>
            </p>

            <div className="mt-8 max-w-2xl text-lg leading-relaxed lg:col-span-8 lg:col-start-5 lg:mt-0">
              <p>{copy.intro}</p>

              {copy.sections.map((section) => (
                <section key={section.heading} className="mt-12">
                  <h2 className="text-2xl font-bold">{section.heading}</h2>
                  <p className="mt-4">
                    {section.text}
                    {section.contactEmail && (
                      <>
                        {" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="break-all text-amber underline underline-offset-4 transition-colors duration-200 hover:text-amber-pale"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    )}
                  </p>
                  {section.items && (
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}

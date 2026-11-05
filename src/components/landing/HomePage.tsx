import { Closing } from "@/components/landing/Closing";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import { Offers } from "@/components/landing/Offers";
import { Process } from "@/components/landing/Process";
import { Projects } from "@/components/landing/Projects";
import { getDictionary, type Locale } from "@/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero dict={dict} />
        <Offers dict={dict} />
        <Projects projects={dict.projects} />
        <Process process={dict.process} />
        <Closing dict={dict} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

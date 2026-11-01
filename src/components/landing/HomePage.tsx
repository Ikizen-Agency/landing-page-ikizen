import { Closing } from "@/components/landing/Closing";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import { Process } from "@/components/landing/Process";
import { Projects } from "@/components/landing/Projects";
import { Services } from "@/components/landing/Services";
import { getDictionary, type Locale } from "@/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero hero={dict.hero} whatsappUrl={dict.whatsappUrl} />
        <Services services={dict.services} />
        <Projects />
        <Process process={dict.process} />
        <Closing dict={dict} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

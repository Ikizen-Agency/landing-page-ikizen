import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { getDictionary, type Locale } from "@/i18n";
import { CONTACT_EMAIL, FACEBOOK_URL, LINKEDIN_URL } from "@/i18n/contact";
import type { NavLink } from "@/i18n/types";
import { trackAttrs } from "@/lib/analytics";

const linkClass = "transition-colors duration-200 hover:text-amber";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="font-mono text-label uppercase text-paper-dim">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale = "es" }: { locale?: Locale }) {
  const { footer, nav, whatsappUrl } = getDictionary(locale);
  const [emailUser, emailDomain] = CONTACT_EMAIL.split("@");

  return (
    <footer className="border-t px-gutter py-16 text-sm text-paper">
      <div className="mx-auto max-w-site">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href={nav.homeHref} className={`inline-block ${linkClass}`}>
              <Wordmark />
            </Link>
            <p className="mt-4 text-paper-dim">{footer.tagline}</p>
          </div>

          <FooterColumn title={footer.navTitle} links={nav.links} />
          <FooterColumn title={footer.servicesTitle} links={footer.services} />
          <FooterColumn title={footer.legalTitle} links={footer.legal} />

          <div>
            <h2 className="font-mono text-label uppercase text-paper-dim">{footer.contactTitle}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                  {emailUser}
                  <wbr />@{emailDomain}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  {...trackAttrs("whatsapp_click", { location: "footer" })}
                >
                  {footer.whatsappLabel}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label={footer.facebookLabel} className={linkClass}>
                <Facebook aria-hidden="true" size={20} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label={footer.linkedinLabel} className={linkClass}>
                <Linkedin aria-hidden="true" size={20} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t pt-6 text-paper-dim">
          &copy; {new Date().getFullYear()} Ikizen Studio. {footer.rights}
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navLinks, site, whatsappLink } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-28 text-ivory/70 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col items-start justify-between gap-10 border-b border-gold/20 py-20 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] font-medium tracking-tight text-ivory">
            Your journey to timeless skin{" "}
            <em className="font-normal text-gold-light">begins here</em>
          </h2>
          <Link
            href={site.bookingHref}
            className="btn inline-flex shrink-0 bg-gold text-ink hover:bg-gold-light"
          >
            Book an appointment
          </Link>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-ivory" />
            <p className="mt-6 max-w-xs leading-relaxed">
              {site.tagline}. A luxury unisex salon for skin, hair and nails in
              the heart of Kathmandu.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Visit</p>
            <address className="mt-5 space-y-3 not-italic">
              <p>{site.address}</p>
              <p>{site.landmark}</p>
              <p>{site.hours}</p>
            </address>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.phone.href} className="transition-colors hover:text-ivory">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hi ${site.name}, I'd like to book an appointment.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ivory"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-gold/30 transition-colors hover:border-gold-light hover:text-ivory"
              >
                <InstagramIcon className="size-4.5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-gold/30 transition-colors hover:border-gold-light hover:text-ivory"
              >
                <FacebookIcon className="size-4.5" />
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-gold/20 pt-8 text-sm text-ivory/50">
          © <CopyrightYear /> {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

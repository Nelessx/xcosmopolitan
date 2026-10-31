import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      <div className="bg-ink px-5 py-2.5 text-center text-xs tracking-[0.18em] text-gold-light uppercase">
        {site.hours}
        <span className="hidden md:inline"> · {site.address}</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-sand/70 bg-ivory/85 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] tracking-[0.16em] text-stone uppercase transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.bookingHref}
              className="btn hidden bg-ink text-ivory hover:bg-gold-deep sm:inline-flex"
            >
              Book now
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}

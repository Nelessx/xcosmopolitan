import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import emblem from "@/assets/emblem.png";
import {
  ChatIcon,
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site, whatsappLink } from "@/lib/site";

type Detail = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
};

const details: Detail[] = [
  { icon: MapPinIcon, label: "Address", value: `${site.address} · ${site.landmark}` },
  { icon: ClockIcon, label: "Hours", value: site.hours },
  { icon: PhoneIcon, label: "Phone", value: site.phone.display, href: site.phone.href },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagram.handle,
    href: site.instagram.href,
  },
];

export function Visit() {
  return (
    <section id="visit" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Visit us"
            title={
              <>
                Find us in <em className="text-gold-deep">Naxal</em>
              </>
            }
          />

          <dl className="reveal mt-12 divide-y divide-sand border-y border-sand">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <dt className="flex w-40 shrink-0 items-center gap-3 text-xs font-medium tracking-[0.16em] text-stone uppercase">
                  <Icon className="size-4.5 text-gold-deep" />
                  {label}
                </dt>
                <dd className="text-ink">
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="underline decoration-sand underline-offset-4 transition-colors hover:decoration-gold"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappLink(`Hi ${site.name}, I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex bg-ink text-ivory hover:bg-gold-deep"
            >
              <ChatIcon className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex border border-ink/80 hover:bg-ink hover:text-ivory"
            >
              <MapPinIcon className="size-4" />
              Get directions
            </a>
          </div>
        </div>

        <div className="reveal relative flex min-h-96 flex-col items-center justify-center bg-ink px-10 py-16 text-center">
          <div
            className="pointer-events-none absolute inset-3 border border-gold/40"
            aria-hidden="true"
          />
          <Image src={emblem} alt="" className="h-40 w-auto" />
          <p className="mt-10 font-display text-3xl text-ivory italic">{site.hours}</p>
          <p className="mt-3 max-w-xs text-ivory/70">
            Book online in a few taps, or message us and we&apos;ll find you a time.
          </p>
        </div>
      </div>
    </section>
  );
}

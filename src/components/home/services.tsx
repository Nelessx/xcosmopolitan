import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const services = [
  {
    title: "Skin & facials",
    items: ["Deep-cleansing facial", "Hydrating facial", "Skin-repair facial"],
  },
  {
    title: "Hair styling & colour",
    items: ["Cuts & styling", "Colour & highlights", "Braids & extensions"],
  },
  {
    title: "Hair treatments",
    items: ["Kera Box smoothing", "Maximum Protein treatment", "Repair & shine"],
  },
  {
    title: "Men's grooming",
    items: ["Haircuts & fades", "Beard grooming", "Hair colour"],
  },
  {
    title: "Nails",
    items: ["Manicure", "Pedicure", "Nail art"],
  },
  {
    title: "Lashes, brows & makeover",
    items: ["Eyelashes", "Threading & waxing", "Makeup & makeover"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Our services"
          title={
            <>
              Beauty & grooming, <em className="text-gold-light">for everyone</em>
            </>
          }
          intro="A full menu for women and men, delivered by experienced professionals with premium products."
        />

        <ul className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="reveal border-t border-gold/30 pt-8">
              <h3 className="font-display text-[1.75rem] leading-tight font-medium">
                {service.title}
              </h3>
              <ul className="mt-5 space-y-2.5 text-ivory/70">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href={site.bookingHref}
                className="group mt-7 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-gold-light uppercase"
              >
                Book
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

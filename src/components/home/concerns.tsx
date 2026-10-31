import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const concerns = [
  {
    title: "Fine lines & wrinkles",
    text: "Rejuvenating facials and treatments that smooth, firm and bring back a youthful glow.",
  },
  {
    title: "Uneven skin tone",
    text: "Brightening care for pigmentation, dullness and dark spots.",
  },
  {
    title: "Acne & spots",
    text: "Deep-cleansing treatments that calm breakouts and refine skin texture.",
  },
  {
    title: "Hair health",
    text: "Protein and smoothing treatments for dryness, frizz and breakage.",
  },
];

export function Concerns() {
  return (
    <section id="concerns" className="border-t border-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Treatments by concern"
          title={
            <>
              What would you like to <em className="text-gold-deep">restore</em>?
            </>
          }
          intro="Tell us what's bothering you. Our specialists will recommend the treatment that suits your skin or hair."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((concern, index) => (
            <li
              key={concern.title}
              className="reveal group flex flex-col border border-sand bg-cream/40 p-8 transition-colors hover:border-gold hover:bg-cream"
            >
              <span className="font-display text-2xl text-gold-deep italic">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 font-display text-[1.75rem] leading-tight font-medium">
                {concern.title}
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-stone">{concern.text}</p>
              <Link
                href={site.bookingHref}
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.16em] uppercase"
              >
                Book a consultation
                <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

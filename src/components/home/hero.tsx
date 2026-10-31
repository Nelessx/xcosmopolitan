import Image from "next/image";
import Link from "next/link";
import salonInterior from "@/assets/salon-interior.jpg";
import { ArrowRightIcon } from "@/components/icons";
import { site } from "@/lib/site";

const assurances = ["Premium products", "Hygienic & safe", "Expert professionals"];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-20 lg:pb-28">
        <div>
          <p className="eyebrow rise-in text-gold-deep">
            Unisex salon · Naxal, Kathmandu
          </p>
          <h1 className="rise-in mt-6 font-display text-[clamp(3.25rem,8vw,6rem)] leading-[0.92] font-medium tracking-tight [animation-delay:100ms]">
            The <em className="font-normal text-gold-deep">reverse aging</em>{" "}
            experience
          </h1>
          <p className="rise-in mt-8 max-w-lg text-lg leading-relaxed text-stone [animation-delay:200ms]">
            Science-led skin rejuvenation, expert hair artistry and nail care,
            in a calm, luxurious studio near the Marriott in Naxal.
          </p>
          <div className="rise-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:300ms]">
            <Link
              href={site.bookingHref}
              className="btn inline-flex bg-ink text-ivory hover:bg-gold-deep"
            >
              Book an appointment
            </Link>
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2 text-[0.8125rem] font-medium tracking-[0.16em] uppercase"
            >
              Explore services
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="rise-in mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-sand pt-6 text-sm text-stone [animation-delay:400ms]">
            {assurances.map((assurance) => (
              <li key={assurance} className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                {assurance}
              </li>
            ))}
          </ul>
        </div>

        {/* Arched frame echoes the gold arched mirrors in the salon. */}
        <div className="rise-in relative mx-auto w-full max-w-sm [animation-delay:200ms] lg:max-w-[26rem]">
          <div
            className="absolute -inset-3 rounded-t-full border border-gold/50"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-cream">
            <Image
              src={salonInterior}
              alt="Inside the Xcosmopolitan salon: cognac leather chairs facing gold arched mirrors"
              fill
              sizes="(min-width: 1024px) 26rem, 24rem"
              placeholder="blur"
              loading="eager"
              className="object-cover object-[64%_50%]"
            />
          </div>
          <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ivory px-4 font-display text-lg whitespace-nowrap text-stone italic">
            Our studio in Naxal
          </p>
        </div>
      </div>
    </section>
  );
}

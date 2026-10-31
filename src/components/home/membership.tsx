import { CheckIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { site, whatsappLink } from "@/lib/site";

const benefits = [
  "One treatment every month",
  "Priority booking",
  "Free skincare consultation",
  "15% off retail products, 20% when you join",
  "One guest pass each membership year",
  "Complimentary samples with every visit",
  "Invitations to exclusive events",
  "Rewards for referring friends",
];

export function Membership() {
  return (
    <section id="membership" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Membership"
            title={
              <>
                Monthly care, <em className="text-gold-deep">timeless</em> results
              </>
            }
            intro="Skin responds best to regular treatments. Membership gives you a treatment every month, plus perks that make every visit better."
          />
          <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={whatsappLink(`Hi ${site.name}, I'd like to know more about membership.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex bg-ink text-ivory hover:bg-gold-deep"
            >
              Ask about membership
            </a>
            <p className="text-sm text-stone">4-month commitment · renews monthly</p>
          </div>
        </div>

        <div className="reveal relative bg-ink p-10 text-ivory sm:p-12">
          <div
            className="pointer-events-none absolute inset-3 border border-gold/40"
            aria-hidden="true"
          />
          <p className="eyebrow text-gold-light">Member benefits</p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-4">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-ivory/85">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

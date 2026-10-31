import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Consult",
    text: "Every visit starts with a conversation about your skin or hair, so we understand your goals.",
  },
  {
    title: "Treat",
    text: "Your specialist tailors the treatment to you, using premium professional products.",
  },
  {
    title: "Maintain",
    text: "Leave with aftercare advice and a simple plan to keep your results lasting.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Xcosmopolitan way"
          title={
            <>
              Care that feels personal, results that{" "}
              <em className="text-gold-deep">last</em>
            </>
          }
          intro="We work strictly by appointment, so every client gets unhurried time and our full attention."
        />

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} className="reveal">
              <div className="flex items-center gap-5">
                <span className="font-display text-6xl leading-none text-gold italic">
                  {index + 1}
                </span>
                <span className="h-px flex-1 bg-sand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-medium">{step.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-stone">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

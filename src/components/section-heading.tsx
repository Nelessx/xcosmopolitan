import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className="reveal max-w-2xl">
      <p className={`eyebrow ${dark ? "text-gold-light" : "text-gold-deep"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight [&_em]:font-normal">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg leading-relaxed ${dark ? "text-ivory/70" : "text-stone"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

import Image from "next/image";
import emblem from "@/assets/emblem.png";

// The wordmark SVG is used as a mask so it takes the surrounding text colour.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Xcosmopolitan"
      className={`block aspect-[346/49] bg-current ${className}`}
      style={{
        mask: "url(/brand/wordmark.svg) center / contain no-repeat",
        WebkitMask: "url(/brand/wordmark.svg) center / contain no-repeat",
      }}
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image src={emblem} alt="" loading="eager" className="h-11 w-auto" />
      <Wordmark className="w-40 sm:w-44" />
    </span>
  );
}

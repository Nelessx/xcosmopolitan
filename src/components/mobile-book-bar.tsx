import Link from "next/link";
import { site } from "@/lib/site";

// Keeps booking one tap away on phones, where the header button is hidden.
export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand bg-ivory/95 px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <Link
        href={site.bookingHref}
        className="btn flex w-full bg-ink text-ivory"
      >
        Book an appointment
      </Link>
    </div>
  );
}

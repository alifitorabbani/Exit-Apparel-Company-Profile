import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTABanner() {
  return (
    <section className="bg-primary py-24 text-center text-white">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="font-heading text-4xl font-bold sm:text-5xl">
          Ready to Start Your Order?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
          Get a free price estimate in minutes. No commitment needed.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/estimator"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-primary transition-colors hover:bg-gray-100"
          >
            Get Free Estimate
          </Link>
          <a
            href="https://wa.me/62895331153164"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

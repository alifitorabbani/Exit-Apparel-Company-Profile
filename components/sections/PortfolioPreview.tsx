import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const works = ["KAOS", "KEMEJA", "JAKET", "VEST", "JERSEY", "TOPI"];

export default function PortfolioPreview() {
  return (
    <section className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="font-accent text-xl italic text-white/70">
            Production results with clean finishing
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
            Our Work
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((category, index) => (
            <Reveal key={category} delay={index * 0.04}>
              <article className="group relative h-72 overflow-hidden rounded-xl bg-white/10">
                <img
                  src={`https://placehold.co/700x520/274445/EDEAE1?text=${category}`}
                  alt={`${category} portfolio preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-black/40 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded bg-white px-3 py-1 text-xs font-bold uppercase text-black">
                    {category}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-dark"
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

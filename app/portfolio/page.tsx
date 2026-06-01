"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const categories = [
  "ALL",
  "KAOS",
  "KEMEJA",
  "JAKET",
  "VEST/ROMPI",
  "JERSEY",
  "LANYARD",
  "TOPI",
];

const works = [
  { title: "Event Tee Series", category: "KAOS" },
  { title: "Corporate Work Shirt", category: "KEMEJA" },
  { title: "Organization Jacket", category: "JAKET" },
  { title: "Field Team Vest", category: "VEST/ROMPI" },
  { title: "Team Jersey Set", category: "JERSEY" },
  { title: "Conference Lanyard", category: "LANYARD" },
  { title: "Merch Cap Drop", category: "TOPI" },
  { title: "Campus Event Tee", category: "KAOS" },
  { title: "Government Uniform", category: "KEMEJA" },
];

const clientLogos = [
  "Campus",
  "Agency",
  "Studio",
  "Office",
  "Event",
  "Club",
  "School",
  "Team",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const filteredWorks =
    activeCategory === "ALL"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Landing / Portfolio
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold sm:text-6xl">
              Our Portfolio
            </h1>
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`h-11 rounded-xl px-4 text-xs font-bold uppercase tracking-wide transition-colors ${
                        active
                          ? "bg-primary text-white"
                          : "border border-gray-300 bg-white text-dark hover:border-primary hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work, index) => (
                <Reveal key={work.title} delay={index * 0.04}>
                  <article className="group relative h-80 overflow-hidden rounded-xl bg-white shadow-sm">
                    <img
                      src={`https://placehold.co/720x560/274445/EDEAE1?text=${encodeURIComponent(
                        work.category
                      )}`}
                      alt={`${work.title} portfolio card`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-black/45 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="w-fit rounded bg-white px-3 py-1 text-xs font-bold uppercase text-black">
                        {work.category}
                      </span>
                      <h2 className="mt-4 font-heading text-2xl font-bold text-white">
                        {work.title}
                      </h2>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                        View Detail
                        <ArrowRight size={16} />
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-20">
          <Reveal className="text-center">
            <p className="font-accent text-xl italic text-secondary">
              Klien Kami
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary">
              Client Showcase
            </h2>
          </Reveal>
          <div className="mt-10 flex w-max animate-marquee gap-6">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-14 w-36 items-center justify-center rounded-lg bg-gray-200 text-xs font-bold uppercase tracking-wider text-neutral"
              >
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-dark py-24 text-center text-white">
          <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-heading text-4xl font-bold sm:text-5xl">
              Ingin produk Anda ada di sini?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
              Ceritakan kebutuhan produksi Anda dan kami bantu wujudkan dengan
              hasil yang rapi.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-dark transition-colors hover:bg-cream"
            >
              Request Consultation
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

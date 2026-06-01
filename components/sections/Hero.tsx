import Link from "next/link";
import Reveal from "@/components/Reveal";

const tickerItems = [
  "KAOS",
  "KEMEJA",
  "JAKET",
  "VEST",
  "JERSEY",
  "LANYARD",
  "TOPI",
  "KONVEKSI BANDUNG",
];

export default function Hero() {
  return (
    <section className="bg-cream pt-20">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <p className="font-accent text-xl italic text-secondary">
            Custom apparel manufacturer
          </p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-tight text-primary sm:text-6xl lg:text-7xl">
            Precision Manufacturing for Modern Brands.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-dark/75 sm:text-lg">
            Exit Apparel adalah perusahaan konveksi dan produksi pakaian custom
            di Bandung untuk instansi, organisasi, sekolah, komunitas, dan
            brand yang mengutamakan kualitas produksi, ketepatan waktu, dan
            pelayanan profesional.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-primary px-6 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View Portfolio
            </Link>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-primary/15 bg-white shadow-md transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="https://placehold.co/800x600/274445/EDEAE1?text=Exit+Apparel"
              alt="Exit Apparel custom manufacturing preview"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden bg-dark py-5 text-white">
        <div className="flex w-max animate-marquee gap-8">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-white/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

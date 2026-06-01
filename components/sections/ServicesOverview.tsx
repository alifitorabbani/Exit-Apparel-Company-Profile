import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const products = [
  {
    name: "Kaos",
    description: "Cotton combed tees for teams, events, and brand merchandise.",
  },
  {
    name: "Kemeja",
    description: "Corporate shirts with clean cuts and durable workwear fabric.",
  },
  {
    name: "Jaket",
    description: "Custom jackets for communities, organizations, and teams.",
  },
  {
    name: "Vest/Rompi",
    description: "Functional vests for field teams, events, and institutions.",
  },
  {
    name: "Jersey",
    description: "Sport and event jerseys with personalized visuals.",
  },
  {
    name: "Lanyard",
    description: "Full-print identity lanyards with case options.",
  },
  {
    name: "Topi",
    description: "Custom caps for uniforms, events, and merchandise packs.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-accent text-xl italic text-secondary">
            Designed for every team identity
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-primary sm:text-5xl">
            What We Produce
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.03}>
              <article className="h-full overflow-hidden rounded-xl border border-primary/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                <img
                  src={`https://placehold.co/640x420/274445/EDEAE1?text=${encodeURIComponent(
                    product.name
                  )}`}
                  alt={`${product.name} product placeholder`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-dark/70">
                    {product.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-secondary"
          >
            See All Services
            <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import { Clock, Settings, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description: "Premium fabrics, precise cuts, and production details that hold up.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your deadlines. Always.",
  },
  {
    icon: Settings,
    title: "Custom Everything",
    description: "Full customization from material to print for every order.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
            Why Exit Apparel
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal key={reason.title} delay={index * 0.08}>
                <article className="h-full rounded-xl border border-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cream text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-dark/70">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

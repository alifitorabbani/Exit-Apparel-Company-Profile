import Reveal from "@/components/Reveal";

const stats = [
  { value: "2024", label: "Founded" },
  { value: "7+", label: "Product Categories" },
  { value: "100+", label: "Orders Completed" },
  { value: "3", label: "Cities Served" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-16 text-white">
      <Reveal className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-4 md:gap-0 lg:px-10">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`text-center ${
              index > 0 ? "md:border-l md:border-white/20" : ""
            }`}
          >
            <p className="font-heading text-5xl font-bold">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

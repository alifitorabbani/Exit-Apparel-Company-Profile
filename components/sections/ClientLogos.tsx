import Reveal from "@/components/Reveal";

const logos = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
  "Client 07",
  "Client 08",
];

export default function ClientLogos() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <Reveal className="text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral">
          Trusted By
        </h2>
      </Reveal>
      <div className="mt-8 flex w-max animate-marquee gap-6">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-12 w-32 items-center justify-center rounded-lg bg-gray-200 text-xs font-bold uppercase tracking-wider text-neutral"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

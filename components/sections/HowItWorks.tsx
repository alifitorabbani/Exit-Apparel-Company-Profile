import Reveal from "@/components/Reveal";

const steps = [
  "Choose Your Product",
  "Select Material & Print",
  "Get Instant Price Estimate",
  "Submit Order & We Contact You",
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
            How It Works
          </h2>
        </Reveal>

        <Reveal className="relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-primary/25 md:block" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mx-auto mt-5 max-w-44 font-heading text-lg font-bold leading-7 text-primary">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/sections/CTABanner";

const services = [
  {
    name: "Kaos",
    description:
      "Kaos custom untuk event, komunitas, kampus, dan merchandise brand dengan pilihan cotton combed.",
    materials: [
      { name: "Cotton Combed 30s", price: "Rp 55.000/pc" },
      { name: "Cotton Combed 24s", price: "Rp 60.000/pc" },
      { name: "Cotton Combed 20s", price: "Rp 75.000/pc" },
    ],
    addOns: ["DTF +Rp 5.000/pc", "Plastisol +Rp 7.000/pc"],
    priced: true,
  },
  {
    name: "Kemeja",
    description:
      "Kemeja kerja dan seragam institusi dengan pilihan material yang kuat dan rapi.",
    materials: [
      { name: "American Drill", price: "Rp 125.000/pc" },
      { name: "Ripstop", price: "Rp 125.000/pc" },
    ],
    addOns: ["Bordir +Rp 10.000/pc"],
    priced: true,
  },
  {
    name: "Jaket",
    description:
      "Jaket custom untuk organisasi, komunitas, dan kebutuhan lapangan dengan spesifikasi sesuai brief.",
    materials: [],
    addOns: [],
    priced: false,
  },
  {
    name: "Vest / Rompi",
    description:
      "Rompi kerja dan event untuk tim lapangan, panitia, atau kebutuhan operasional.",
    materials: [
      { name: "American Drill", price: "Rp 110.000/pc" },
      { name: "Ripstop", price: "Rp 110.000/pc" },
    ],
    addOns: ["Bordir +Rp 10.000/pc"],
    priced: true,
  },
  {
    name: "Jersey",
    description:
      "Jersey sport dan event dengan desain personal, penomoran, dan warna sesuai kebutuhan.",
    materials: [],
    addOns: [],
    priced: false,
  },
  {
    name: "Lanyard",
    description:
      "Lanyard full printing untuk identitas acara, kantor, kepanitiaan, dan komunitas.",
    materials: [
      { name: "Full Printing + Case Kaca", price: "Rp 17.000/pc" },
      { name: "Full Printing + Case Plastik", price: "Rp 15.000/pc" },
    ],
    addOns: [],
    priced: true,
  },
  {
    name: "Topi",
    description:
      "Topi custom untuk seragam, komunitas, merchandise, dan kebutuhan promosi.",
    materials: [],
    addOns: [],
    priced: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Landing / Services
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold sm:text-6xl">
              Our Services
            </h1>
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl space-y-16 px-5 sm:px-8 lg:px-10">
            {services.map((service, index) => (
              <Reveal key={service.name}>
                <article
                  className={`grid items-center gap-8 rounded-xl border border-primary/10 bg-white p-5 shadow-sm lg:grid-cols-2 lg:p-8 ${
                    index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xl bg-cream">
                    <img
                      src={`https://placehold.co/720x520/274445/EDEAE1?text=${encodeURIComponent(
                        service.name
                      )}`}
                      alt={`${service.name} service placeholder`}
                      className="h-full min-h-[300px] w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                      Minimum order 12 pcs
                    </p>
                    <h2 className="mt-3 font-heading text-4xl font-bold text-primary">
                      {service.name}
                    </h2>
                    <p className="mt-5 leading-8 text-dark/70">
                      {service.description}
                    </p>

                    {service.priced ? (
                      <>
                        <div className="mt-7 overflow-hidden rounded-xl border border-primary/10">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-cream text-primary">
                              <tr>
                                <th className="px-4 py-3 font-heading">
                                  Material
                                </th>
                                <th className="px-4 py-3 font-heading">Price</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/10">
                              {service.materials.map((material) => (
                                <tr key={material.name}>
                                  <td className="px-4 py-4 text-dark/75">
                                    {material.name}
                                  </td>
                                  <td className="px-4 py-4 font-bold text-primary">
                                    {material.price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {service.addOns.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {service.addOns.map((addOn) => (
                              <span
                                key={addOn}
                                className="rounded-xl bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary"
                              >
                                {addOn}
                              </span>
                            ))}
                          </div>
                        )}

                        <Link
                          href="/estimator"
                          className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary"
                        >
                          Estimate Price
                          <ArrowRight size={18} />
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className="mt-7 rounded-xl bg-cream p-5">
                          <div className="flex gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            <p className="text-sm leading-7 text-dark/75">
                              Harga produk ini disesuaikan dengan material,
                              detail desain, teknik produksi, dan jumlah pesanan.
                              Tim kami akan membantu menghitung kebutuhan Anda.
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary"
                        >
                          <MessageCircle size={18} />
                          Consult Now
                        </Link>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

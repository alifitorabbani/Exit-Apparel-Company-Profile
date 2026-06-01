"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle,
  Clock,
  Lock,
  MapPin,
  MessageCircle,
  Send,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type ContactForm = {
  name: string;
  email: string;
  whatsapp: string;
  organization: string;
  products: string[];
  quantity: number;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  whatsapp: "",
  organization: "",
  products: [],
  quantity: 12,
  message: "",
};

const productChoices = [
  "Kaos",
  "Kemeja",
  "Jaket",
  "Vest",
  "Jersey",
  "Lanyard",
  "Topi",
];

const trustItems = [
  {
    icon: Lock,
    title: "Data Aman",
  },
  {
    icon: Zap,
    title: "Respon Cepat",
  },
  {
    icon: CheckCircle,
    title: "Konsultasi Gratis",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = <T extends keyof ContactForm>(
    field: T,
    value: ContactForm[T]
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleProduct = (product: string) => {
    setForm((current) => ({
      ...current,
      products: current.products.includes(product)
        ? current.products.filter((item) => item !== product)
        : [...current.products, product],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Landing / Contact
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold sm:text-6xl">
              Request Consultation
            </h1>
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:px-10">
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-white p-5 shadow-md sm:p-8"
              >
                <h2 className="font-heading text-3xl font-bold text-primary">
                  Kirim Pesan
                </h2>

                {submitted && (
                  <div className="mt-6 rounded-xl bg-cream p-4 text-sm font-semibold text-primary">
                    Pesan berhasil dikirim. Tim Exit Apparel akan menghubungi
                    Anda secepatnya.
                  </div>
                )}

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Nama Lengkap*
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Email Address*
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Nomor WhatsApp*
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(event) =>
                        updateField("whatsapp", event.target.value)
                      }
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Asal Instansi / Organisasi
                    </span>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(event) =>
                        updateField("organization", event.target.value)
                      }
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-bold text-dark">
                    Produk yang Diminati
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {productChoices.map((product) => {
                      const checked = form.products.includes(product);

                      return (
                        <label
                          key={product}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition-colors ${
                            checked
                              ? "border-primary bg-cream text-primary"
                              : "border-gray-200 bg-white text-dark hover:border-primary"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleProduct(product)}
                            className="h-4 w-4 accent-primary"
                          />
                          {product}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Estimasi Jumlah
                    </span>
                    <input
                      type="number"
                      min={12}
                      value={form.quantity}
                      onChange={(event) =>
                        updateField(
                          "quantity",
                          Math.max(12, Number(event.target.value) || 12)
                        )
                      }
                      className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>
                </div>

                <div className="mt-6">
                  <label className="block">
                    <span className="text-sm font-bold text-dark">
                      Pesan / Detail Kebutuhan
                    </span>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary"
                >
                  <Send size={18} />
                  KIRIM PESAN
                </button>

                <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-neutral">
                  <Lock size={14} />
                  Data Anda aman dan tidak akan disalahgunakan
                </p>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="space-y-5">
                <div className="rounded-xl bg-primary p-6 text-white">
                  <h2 className="font-heading text-2xl font-bold">
                    Atau Hubungi Langsung
                  </h2>
                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-sm text-white/70">
                        Izzudin: 0895331153164
                      </p>
                      <a
                        href="https://wa.me/62895331153164"
                        className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-primary transition-colors hover:bg-gray-100"
                      >
                        <MessageCircle size={18} />
                        CHAT NOW
                      </a>
                    </div>
                    <div className="border-t border-white/20 pt-5">
                      <p className="text-sm text-white/70">
                        Rama: 081511004799
                      </p>
                      <a
                        href="https://wa.me/6281511004799"
                        className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-primary transition-colors hover:bg-gray-100"
                      >
                        <MessageCircle size={18} />
                        CHAT NOW
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h2 className="font-heading text-xl font-bold text-primary">
                        Lokasi Kami
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-dark/70">
                        Jl. Batik Jogja, Sukaluyu, Cibeunying Kaler, Kota
                        Bandung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-cream p-6 shadow-sm">
                  <div className="flex gap-4">
                    <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h2 className="font-heading text-xl font-bold text-primary">
                        Jam Operasional
                      </h2>
                      <div className="mt-3 space-y-2 text-sm leading-7 text-dark/70">
                        <p>Senin-Jumat: 08.00-17.00</p>
                        <p>Sabtu: 08.00-14.00</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <Reveal className="mx-auto grid max-w-5xl gap-5 px-5 sm:px-8 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-center gap-3 rounded-xl border border-primary/10 bg-white p-5 text-primary"
                >
                  <Icon size={22} />
                  <span className="font-heading text-lg font-bold">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

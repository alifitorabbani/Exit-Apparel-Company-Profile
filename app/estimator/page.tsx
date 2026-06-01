"use client";

import { useMemo, useState } from "react";
import {
  Briefcase,
  ChevronDown,
  Circle,
  ClipboardList,
  MessageCircle,
  Minus,
  Package,
  Plus,
  Shield,
  Shirt,
  Tag,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type ProductKey =
  | "kaos"
  | "kemeja"
  | "jaket"
  | "vest"
  | "jersey"
  | "lanyard"
  | "topi";

type MaterialOption = {
  id: string;
  label: string;
  price: number;
};

type AddOnOption = {
  id: string;
  label: string;
  price: number;
};

type ProductConfig = {
  label: string;
  Icon: LucideIcon;
  materials: MaterialOption[];
  addOns: AddOnOption[];
  consultOnly?: boolean;
};

const productConfig: Record<ProductKey, ProductConfig> = {
  kaos: {
    label: "Kaos",
    Icon: Shirt,
    materials: [
      { id: "cotton-30s", label: "Cotton Combed 30s", price: 55000 },
      { id: "cotton-24s", label: "Cotton Combed 24s", price: 60000 },
      { id: "cotton-20s", label: "Cotton Combed 20s", price: 75000 },
    ],
    addOns: [
      { id: "dtf", label: "Sablon DTF", price: 5000 },
      { id: "plastisol", label: "Sablon Plastisol", price: 7000 },
    ],
  },
  kemeja: {
    label: "Kemeja",
    Icon: Briefcase,
    materials: [
      { id: "american-drill", label: "American Drill", price: 125000 },
      { id: "ripstop", label: "Ripstop", price: 125000 },
    ],
    addOns: [{ id: "bordir", label: "Bordir", price: 10000 }],
  },
  jaket: {
    label: "Jaket",
    Icon: Shield,
    materials: [],
    addOns: [],
    consultOnly: true,
  },
  vest: {
    label: "Vest/Rompi",
    Icon: ClipboardList,
    materials: [
      { id: "american-drill", label: "American Drill", price: 110000 },
      { id: "ripstop", label: "Ripstop", price: 110000 },
    ],
    addOns: [{ id: "bordir", label: "Bordir", price: 10000 }],
  },
  jersey: {
    label: "Jersey",
    Icon: Trophy,
    materials: [],
    addOns: [],
    consultOnly: true,
  },
  lanyard: {
    label: "Lanyard",
    Icon: Tag,
    materials: [
      { id: "case-kaca", label: "Full Printing + Case Kaca", price: 17000 },
      {
        id: "case-plastik",
        label: "Full Printing + Case Plastik",
        price: 15000,
      },
    ],
    addOns: [],
  },
  topi: {
    label: "Topi",
    Icon: Circle,
    materials: [],
    addOns: [],
    consultOnly: true,
  },
};

const productKeys: ProductKey[] = [
  "kaos",
  "kemeja",
  "jaket",
  "vest",
  "jersey",
  "lanyard",
  "topi",
];

const quantityChips = [12, 25, 50, 100, 200];

const faqs = [
  {
    question: "Berapa minimum order?",
    answer: "12 pcs per produk.",
  },
  {
    question: "Apakah harga sudah termasuk desain?",
    answer: "Biaya desain terpisah dan akan dikonfirmasi sesuai kebutuhan.",
  },
  {
    question: "Berapa lama proses produksi?",
    answer: "Estimasi produksi 7-14 hari kerja setelah desain dan pembayaran disetujui.",
  },
  {
    question: "Apakah bisa custom ukuran?",
    answer: "Ya, kami melayani custom ukuran sesuai kebutuhan pesanan.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Pembayaran dapat dilakukan melalui transfer bank atau COD area Bandung.",
  },
];

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function EstimatorPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("kaos");
  const [selectedMaterialId, setSelectedMaterialId] = useState("cotton-30s");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(12);
  const [openFaq, setOpenFaq] = useState(0);

  const currentProduct = productConfig[selectedProduct];
  const selectedMaterial = currentProduct.materials.find(
    (material) => material.id === selectedMaterialId
  );
  const canCalculate = Boolean(selectedMaterial);

  const addOnTotal = useMemo(
    () =>
      currentProduct.addOns
        .filter((addOn) => selectedAddOns.includes(addOn.id))
        .reduce((total, addOn) => total + addOn.price, 0),
    [currentProduct.addOns, selectedAddOns]
  );

  const basePrice = selectedMaterial?.price ?? 0;
  const unitPrice = basePrice + addOnTotal;
  const totalEstimate = unitPrice * quantity;
  const orderMessage = encodeURIComponent(
    `Halo Exit Apparel, saya ingin order ${currentProduct.label}.
Produk: ${currentProduct.label}
Material: ${selectedMaterial?.label ?? "Konsultasi"}
Tambahan: ${
      selectedAddOns.length > 0
        ? currentProduct.addOns
            .filter((addOn) => selectedAddOns.includes(addOn.id))
            .map((addOn) => addOn.label)
            .join(", ")
        : "-"
    }
Jumlah: ${quantity} pcs
Estimasi: ${canCalculate ? formatRupiah(totalEstimate) : "Perlu konsultasi"}`
  );

  const updateQuantity = (value: number) => {
    setQuantity(Math.max(12, Number.isFinite(value) ? value : 12));
  };

  const selectProduct = (key: ProductKey) => {
    const firstMaterial = productConfig[key].materials[0];
    setSelectedProduct(key);
    setSelectedMaterialId(firstMaterial?.id ?? "");
    setSelectedAddOns([]);
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Landing / Price Estimator
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold sm:text-6xl">
              Price Estimator
            </h1>
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-10">
            <Reveal>
              <div className="rounded-xl bg-white p-5 shadow-md sm:p-8">
                <h2 className="font-heading text-3xl font-bold text-primary">
                  Konfigurasi Pesanan
                </h2>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral">
                    Step 1
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-dark">
                    Product
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {productKeys.map((key) => {
                      const item = productConfig[key];
                      const Icon = item.Icon;
                      const selected = selectedProduct === key;

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => selectProduct(key)}
                          className={`flex min-h-24 flex-col items-start justify-between rounded-xl border p-4 text-left transition-colors ${
                            selected
                              ? "border-primary bg-primary text-white"
                              : "border-gray-200 bg-white text-dark hover:border-primary hover:text-primary"
                          }`}
                        >
                          <Icon size={24} />
                          <span className="mt-4 text-sm font-bold">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-9">
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral">
                    Step 2
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-dark">
                    Material
                  </h3>
                  {currentProduct.consultOnly ? (
                    <div className="mt-4 rounded-xl bg-cream p-5">
                      <div className="flex gap-3">
                        <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm leading-7 text-dark/75">
                          Produk ini membutuhkan konsultasi material dan detail
                          desain agar estimasi lebih akurat.
                        </p>
                      </div>
                      <a
                        href="https://wa.me/62895331153164"
                        className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-secondary"
                      >
                        Hubungi Kami
                      </a>
                    </div>
                  ) : (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {currentProduct.materials.map((material) => {
                        const selected = selectedMaterialId === material.id;

                        return (
                          <label
                            key={material.id}
                            className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                              selected
                                ? "border-primary bg-cream"
                                : "border-gray-200 bg-white hover:border-primary"
                            }`}
                          >
                            <span>
                              <span className="block text-sm font-bold text-dark">
                                {material.label}
                              </span>
                              <span className="mt-1 block text-sm text-primary">
                                {formatRupiah(material.price)}/pc
                              </span>
                            </span>
                            <input
                              type="radio"
                              name="material"
                              checked={selected}
                              onChange={() => setSelectedMaterialId(material.id)}
                              className="h-4 w-4 accent-primary"
                            />
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>

                {currentProduct.addOns.length > 0 && (
                  <div className="mt-9">
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral">
                      Step 3
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-dark">
                      Add-ons
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {currentProduct.addOns.map((addOn) => {
                        const checked = selectedAddOns.includes(addOn.id);

                        return (
                          <label
                            key={addOn.id}
                            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${
                              checked
                                ? "border-primary bg-cream"
                                : "border-gray-200 bg-white hover:border-primary"
                            }`}
                          >
                            <span>
                              <span className="block text-sm font-bold text-dark">
                                {addOn.label}
                              </span>
                              <span className="mt-1 block text-sm text-primary">
                                +{formatRupiah(addOn.price)}/pc
                              </span>
                            </span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleAddOn(addOn.id)}
                              className="h-4 w-4 accent-primary"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-9">
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral">
                    Step 4
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-dark">
                    Quantity
                  </h3>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(quantity - 1)}
                        className="flex w-12 items-center justify-center text-primary hover:bg-cream"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <input
                        type="number"
                        min={12}
                        value={quantity}
                        onChange={(event) =>
                          updateQuantity(Number(event.target.value))
                        }
                        className="w-full border-x border-gray-200 text-center font-bold text-dark outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => updateQuantity(quantity + 1)}
                        className="flex w-12 items-center justify-center text-primary hover:bg-cream"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quantityChips.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setQuantity(chip)}
                          className={`h-10 rounded-xl px-4 text-sm font-bold transition-colors ${
                            quantity === chip
                              ? "bg-primary text-white"
                              : "border border-gray-200 bg-white text-dark hover:border-primary hover:text-primary"
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="rounded-xl bg-primary p-6 text-white shadow-md lg:sticky lg:top-28">
                <h2 className="font-heading text-3xl font-bold">
                  Estimasi Harga
                </h2>

                {canCalculate ? (
                  <div className="mt-7 space-y-5">
                    <div className="space-y-3 text-sm text-white/80">
                      <div className="flex items-center justify-between gap-4">
                        <span>Harga Bahan</span>
                        <span className="font-bold text-white">
                          {formatRupiah(basePrice)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Tambahan</span>
                        <span className="font-bold text-white">
                          {formatRupiah(addOnTotal)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-white/25 pt-5">
                      <p className="text-sm text-white/70">Harga Satuan</p>
                      <p className="mt-1 font-heading text-3xl font-bold">
                        {formatRupiah(unitPrice)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/25 pt-5 text-sm text-white/80">
                      <span>Jumlah</span>
                      <span className="font-bold text-white">{quantity} pcs</span>
                    </div>

                    <div className="border-t border-white/25 pt-5">
                      <p className="text-sm font-bold uppercase tracking-widest text-white/70">
                        Total Estimasi
                      </p>
                      <p className="mt-2 font-heading text-4xl font-bold">
                        {formatRupiah(totalEstimate)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-7 rounded-xl bg-white/10 p-5">
                    <Package className="h-8 w-8" />
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      Pilih produk dengan daftar harga untuk melihat estimasi,
                      atau hubungi tim kami untuk produk konsultasi.
                    </p>
                  </div>
                )}

                <p className="mt-6 text-xs leading-6 text-white/65">
                  * Harga estimasi, belum termasuk ongkir & biaya desain.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={`https://wa.me/62895331153164?text=${orderMessage}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-bold text-primary transition-colors hover:bg-gray-100"
                  >
                    ORDER VIA WHATSAPP
                  </a>
                  <a
                    href="https://wa.me/6281511004799"
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white px-5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    Request Consultation
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal className="text-center">
              <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                FAQ
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <Reveal key={faq.question} delay={index * 0.03}>
                    <div className="rounded-xl border border-primary/10 bg-white">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="font-heading text-lg font-bold text-primary">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {open && (
                        <p className="border-t border-primary/10 px-5 py-4 text-sm leading-7 text-dark/70">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

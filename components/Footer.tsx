import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

const navigation = [
  { href: "/", label: "Landing" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/estimator", label: "Price Estimator" },
];

const services = [
  "Kaos",
  "Kemeja",
  "Jaket",
  "Vest/Rompi",
  "Jersey",
  "Lanyard",
  "Topi",
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold">
            Exit Apparel
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
            Precision Manufacturing for Modern Brands.
          </p>
          <p className="mt-5 flex gap-3 text-sm leading-7 text-white/70">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-white" />
            Jl. Batik Jogja, Sukaluyu, Cibeunying Kaler, Kota Bandung
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Navigation</h3>
          <div className="mt-5 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Services</h3>
          <div className="mt-5 flex flex-col gap-3">
            {services.map((item) => (
              <Link
                key={item}
                href="/services"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold">Contact</h3>
          <div className="mt-5 flex flex-col gap-4">
            <a
              href="https://wa.me/62895331153164"
              className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
            >
              <MessageCircle size={18} />
              Izzudin: 0895331153164
            </a>
            <a
              href="https://wa.me/6281511004799"
              className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
            >
              <MessageCircle size={18} />
              Rama: 081511004799
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/60">
        © 2024 Exit Apparel Manufacturing. All Rights Reserved.
      </div>
    </footer>
  );
}

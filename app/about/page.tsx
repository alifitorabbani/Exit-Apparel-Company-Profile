import Link from "next/link";
import {
  Building2,
  CheckCircle,
  Clock,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "2024", label: "Founded" },
  { value: "7+", label: "Product Categories" },
  { value: "100+", label: "Orders Completed" },
  { value: "3", label: "Cities Served" },
];

const missions = [
  "Mengutamakan kualitas bahan dan hasil produksi",
  "Memenuhi setiap pesanan tepat waktu",
  "Memberikan layanan konsultasi yang responsif",
  "Menyediakan harga yang transparan dan kompetitif",
  "Terus berinovasi dalam desain dan teknologi produksi",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "Standar bahan dan finishing dijaga dari awal produksi.",
  },
  {
    icon: Clock,
    title: "On-Time",
    description: "Alur kerja disusun agar tenggat pelanggan tetap terjaga.",
  },
  {
    icon: CheckCircle,
    title: "Trust",
    description: "Komunikasi jelas, harga transparan, dan proses profesional.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Solusi desain dan produksi terus disesuaikan kebutuhan pasar.",
  },
];

const clients = [
  {
    icon: Building2,
    title: "Corporate & Government",
    description: "Seragam, kemeja kerja, dan merchandise untuk kebutuhan resmi.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Jaket organisasi, kaos event, dan jersey untuk kegiatan kampus.",
  },
  {
    icon: Users,
    title: "Communities & Events",
    description: "Kaos komunitas, lanyard, dan merchandise untuk identitas acara.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary px-5 pb-20 pt-32 text-white sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Landing / About
            </p>
            <h1 className="mt-5 font-heading text-5xl font-bold sm:text-6xl">
              Our Story
            </h1>
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <Reveal>
              <p className="font-accent text-xl italic text-secondary">
                Bandung-based manufacturing partner
              </p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-primary sm:text-5xl">
                Who We Are
              </h2>
              <p className="mt-6 text-base leading-8 text-dark/75">
                Exit Apparel adalah perusahaan yang bergerak di bidang konveksi
                dan produksi pakaian custom yang melayani kebutuhan instansi
                pemerintah dan swasta, organisasi, sekolah, komunitas, serta
                mahasiswa. Sejak didirikan pada tahun 2024, kami berkomitmen
                menjadi mitra terpercaya dalam penyediaan produk konveksi yang
                mengutamakan kualitas produksi, ketepatan waktu, dan pelayanan
                profesional.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-md">
                <img
                  src="https://placehold.co/720x520/274445/EDEAE1?text=Exit+Apparel+Bandung"
                  alt="Exit Apparel Bandung workshop placeholder"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <Reveal className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-4 md:gap-0 lg:px-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index > 0 ? "md:border-l md:border-primary/15" : ""
                }`}
              >
                <p className="font-heading text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-wider text-neutral">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <Reveal>
              <article className="h-full rounded-xl bg-primary p-8 text-white md:p-10">
                <Target size={34} />
                <h2 className="mt-6 font-heading text-3xl font-bold">Vision</h2>
                <p className="mt-5 leading-8 text-white/80">
                  Menjadi mitra konveksi terpercaya yang menghadirkan produk
                  berkualitas tinggi dengan pelayanan profesional untuk
                  mendukung identitas setiap pelanggan.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="h-full rounded-xl bg-secondary p-8 text-white md:p-10">
                <Sparkles size={34} />
                <h2 className="mt-6 font-heading text-3xl font-bold">Mission</h2>
                <ul className="mt-5 space-y-4">
                  {missions.map((mission) => (
                    <li key={mission} className="flex gap-3 text-sm leading-7 text-white/85">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0" />
                      {mission}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal className="text-center">
              <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                Company Values
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <Reveal key={value.title} delay={index * 0.05}>
                    <article className="h-full rounded-xl border border-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-primary">
                        <Icon size={24} />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-bold text-primary">
                        {value.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-dark/70">
                        {value.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <h2 className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                Target Clients
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {clients.map((client, index) => {
                const Icon = client.icon;

                return (
                  <Reveal key={client.title} delay={index * 0.06}>
                    <article className="flex h-full gap-5 rounded-xl border border-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">
                          {client.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-dark/70">
                          {client.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-dark py-24 text-center text-white">
          <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-heading text-4xl font-bold sm:text-5xl">
              Ready to Work With Us?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
              Konsultasikan kebutuhan apparel custom Anda langsung dengan tim
              Exit Apparel.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-dark transition-colors hover:bg-cream"
            >
              Request Consultation
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

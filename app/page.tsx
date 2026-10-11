
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Landmark,
  Wrench,
  Search,
  ShieldCheck,
  Zap,
  Languages,
} from "lucide-react";

const sections = [
  {
    title: "Latest Jobs",
    telugu: "తాజా ఉద్యోగ అవకాశాలు",
    description:
      "Government, private, part-time మరియు work-from-home ఉద్యోగాల సమాచారం.",
    href: "/jobs",
    icon: BriefcaseBusiness,
    number: "01",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Government Schemes",
    telugu: "ప్రభుత్వ పథకాలు",
    description:
      "కేంద్ర, రాష్ట్ర ప్రభుత్వ పథకాలు, అర్హతలు మరియు ప్రయోజనాల వివరాలు.",
    href: "/schemes",
    icon: Landmark,
    number: "02",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Daily Utility Tools",
    telugu: "రోజువారీ ఉపయోగకరమైన టూల్స్",
    description:
      "Age Calculator, Word Counter, Image Compressor మరియు PDF tools.",
    href: "/tools",
    icon: Wrench,
    number: "03",
    color: "bg-orange-50 text-orange-700",
  },
];

const quickLinks = [
  { label: "Government Jobs", href: "/jobs" },
  { label: "Work From Home", href: "/jobs" },
  { label: "Central Schemes", href: "/schemes" },
  { label: "Word Counter", href: "/tools" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4"
        >
          <Link
            href="/"
            className="shrink-0 text-2xl font-extrabold tracking-tight"
          >
            Mega<span className="text-indigo-600">Portal</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <Link href="/jobs" className="hover:text-indigo-600">
              Jobs
            </Link>
            <Link href="/schemes" className="hover:text-indigo-600">
              Schemes
            </Link>
            <Link href="/tools" className="hover:text-indigo-600">
              Tools
            </Link>
          </div>

          <Link
            href="/tools"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
          >
            Explore Tools
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div className="flex gap-2 overflow-x-auto border-t border-slate-100 px-5 py-3 md:hidden">
          <Link
            href="/jobs"
            className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold"
          >
            Jobs
          </Link>
          <Link
            href="/schemes"
            className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold"
          >
            Schemes
          </Link>
          <Link
            href="/tools"
            className="shrink-0 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold"
          >
            Tools
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-800 to-blue-700 px-5 py-20 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-indigo-100">
            <Zap size={15} />
            YOUR EVERYDAY MEGA PORTAL
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Jobs, Schemes &{" "}
            <span className="text-blue-200">Daily Tools</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-indigo-100 sm:text-lg">
            ఉద్యోగాలు, ప్రభుత్వ పథకాలు, ఉపయోగకరమైన Online Tools —
            మీకు అవసరమైన సమాచారం ఒకే చోట!
          </p>

          {/* Search */}
          <form
            action="/search"
            method="GET"
            className="mx-auto mt-9 flex max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Search
                size={21}
                className="shrink-0 text-slate-400"
              />
              <input
                type="search"
                name="q"
                placeholder="Search jobs, schemes or tools..."
                aria-label="Search MegaPortal"
                className="h-12 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-7 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              Search
            </button>
          </form>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-900 transition hover:bg-indigo-50"
            >
              Find Jobs <ArrowRight size={16} />
            </Link>

            <Link
              href="/schemes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore Schemes <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-indigo-200">
            <Languages size={17} />
            Telugu + English
          </div>
        </div>
      </section>

      {/* AdSense placeholder */}
      <div className="mx-auto max-w-7xl px-5 py-8">
        <aside
          aria-label="Advertisement"
          className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Advertisement
          </span>
          <span className="mt-2 text-sm text-slate-400">
            AdSense banner placement
          </span>
        </aside>
      </div>

      {/* Main sections */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              EXPLORE MEGAPORTAL
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything in one place
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              మీ ఉద్యోగం, ప్రభుత్వ పథకాలు మరియు రోజువారీ అవసరాల కోసం
              సరళమైన, ఉపయోగకరమైన డిజిటల్ ప్లాట్‌ఫామ్.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${section.color}`}
                  >
                    <Icon size={27} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {section.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold">
                  {section.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-indigo-700">
                  {section.telugu}
                </p>

                <p className="mt-4 min-h-20 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>

                <Link
                  href={section.href}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-indigo-700 transition group-hover:gap-3"
                >
                  Explore now <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quick links */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:py-14">
          <h2 className="text-2xl font-extrabold">
            Popular Searches
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            తరచుగా ఉపయోగించే విభాగాలకు త్వరగా వెళ్లండి.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and language */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-indigo-50 p-7 sm:p-9">
            <Languages className="text-indigo-700" size={28} />

            <h2 className="mt-5 text-2xl font-extrabold">
              Made for Telugu & English users
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              ముఖ్యమైన సమాచారాన్ని సులభంగా అర్థం చేసుకునేలా
              తెలుగు మరియు Englishలో అందించడం మన లక్ష్యం.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-7 sm:p-9">
            <ShieldCheck className="text-emerald-700" size={28} />

            <h2 className="mt-5 text-2xl font-extrabold">
              Verify before you apply
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              ఉద్యోగాలు మరియు ప్రభుత్వ పథకాల అర్హతలు, చివరి తేదీలు,
              ప్రయోజనాల వివరాలను సంబంధిత అధికారిక వనరుల్లో
              ధృవీకరించుకోవాలి.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <Link href="/" className="text-2xl font-extrabold">
                Mega<span className="text-indigo-400">Portal</span>
              </Link>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Jobs, government schemes and daily utility tools
                for Telugu and English users.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Explore</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <Link href="/jobs" className="hover:text-white">
                  Jobs
                </Link>
                <Link href="/schemes" className="hover:text-white">
                  Government Schemes
                </Link>
                <Link href="/tools" className="hover:text-white">
                  Daily Tools
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Information</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/disclaimer" className="hover:text-white">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} MegaPortal. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

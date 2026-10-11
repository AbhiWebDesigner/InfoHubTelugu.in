
"use client";

import { useState } from "react";
import Link from "next/link";

function SearchIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function LandmarkIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M6 21V7l6-4 6 4v14" />
      <path d="M9 21v-7h6v7" />
      <path d="M9 10h6" />
    </svg>
  );
}

function ArrowRightIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 5 6v6c0 4.5 3.1 8.7 7 10 3.9-1.3 7-5.5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-4" />
    </svg>
  );
}

const schemes = [
  {
    title: "PM-KISAN",
    category: "Central",
    description:
      "రైతుల ఆదాయ మద్దతు పథకం గురించి, అర్హతలు మరియు దరఖాస్తు విధానం తెలుసుకోండి.",
    audience: "Farmers",
  },
  {
    title: "Scholarship Schemes",
    category: "Education",
    description:
      "విద్యార్థుల స్కాలర్‌షిప్‌లు, అర్హతలు మరియు అవసరమైన పత్రాల గురించి తెలుసుకోండి.",
    audience: "Students",
  },
  {
    title: "Telangana Welfare Schemes",
    category: "State",
    description:
      "తెలంగాణ రాష్ట్ర ప్రభుత్వ సంక్షేమ పథకాల సమాచారం మరియు అధికారిక వనరులను పరిశీలించండి.",
    audience: "Telangana residents",
  },
  {
    title: "Andhra Pradesh Welfare Schemes",
    category: "State",
    description:
      "ఆంధ్రప్రదేశ్ ప్రభుత్వ పథకాల అర్హతలు మరియు దరఖాస్తు వివరాలను తెలుసుకోండి.",
    audience: "Andhra Pradesh residents",
  },
  {
    title: "Women Welfare Schemes",
    category: "Central",
    description:
      "మహిళల కోసం అందుబాటులో ఉండే ప్రభుత్వ కార్యక్రమాలు మరియు ప్రయోజనాల గురించి తెలుసుకోండి.",
    audience: "Women",
  },
  {
    title: "Employment & Skill Development",
    category: "Central",
    description:
      "ఉపాధి, శిక్షణ మరియు నైపుణ్యాభివృద్ధి కార్యక్రమాల సమాచారాన్ని పరిశీలించండి.",
    audience: "Job seekers",
  },
];

const filters = ["All", "Central", "State", "Education"];

export default function SchemesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredSchemes = schemes.filter((scheme) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      `${scheme.title} ${scheme.description} ${scheme.audience}`
        .toLowerCase()
        .includes(query);

    const matchesCategory =
      category === "All" || scheme.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            Mega<span className="text-indigo-600">Portal</span>
          </Link>

          <Link href="/" className="font-semibold text-slate-600">
            Home
          </Link>
        </nav>
      </header>

      <section className="bg-linear-to-r from-emerald-950 to-teal-700 px-5 py-16 text-center text-white sm:py-20">
        <LandmarkIcon className="mx-auto mb-5" size={42} />

        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Government Schemes
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-100">
          కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలు, అర్హతలు,
          ప్రయోజనాలు మరియు దరఖాస్తు సమాచారం ఒకే చోట.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-xl bg-white px-4">
          <SearchIcon className="shrink-0 text-slate-400" size={21} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search government schemes..."
            aria-label="Search government schemes"
            className="h-14 w-full bg-transparent text-slate-900 outline-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <h2 className="text-3xl font-extrabold">
          Explore Schemes
        </h2>

        <p className="mt-3 text-slate-600">
          మీకు సంబంధించిన పథకాలను ఎంచుకొని వివరాలు తెలుసుకోండి.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setCategory(filter)}
              aria-pressed={category === filter}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                category === filter
                  ? "bg-emerald-700 text-white"
                  : "border border-slate-200 bg-white hover:border-emerald-400"
              }`}
            >
              {filter === "All" ? "All Schemes" : filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchemes.map((scheme) => (
            <article
              key={scheme.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <LandmarkIcon size={24} />
              </div>

              <span className="mt-5 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                {scheme.category}
              </span>

              <h3 className="mt-4 text-lg font-bold">
                {scheme.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {scheme.description}
              </p>

              <p className="mt-4 text-xs text-slate-500">
                Intended audience: {scheme.audience}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Information overview
                  <ArrowRightIcon size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="mt-8 rounded-xl bg-white p-8 text-center">
            <p className="font-bold">పథకాలు ఏవీ కనిపించలేదు.</p>
            <p className="mt-2 text-sm text-slate-600">
              వేరే పదంతో వెతకండి లేదా All Schemes ఎంచుకోండి.
            </p>
          </div>
        )}

        <aside className="mt-10 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Advertisement Placeholder
          </span>
        </aside>

        <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <ShieldCheckIcon className="mt-1 shrink-0 text-amber-700" size={22} />

          <p className="text-sm leading-6 text-amber-950">
            ఈ పేజీలోని వివరాలు ప్రస్తుతం demonstration content మాత్రమే.
            అర్హతలు, ప్రయోజనాలు, దరఖాస్తు తేదీలు మారవచ్చు. ప్రచురించే
            ముందు సంబంధిత అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో ధృవీకరించండి.
          </p>
        </div>
      </section>

      <footer className="border-t bg-white px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MegaPortal
      </footer>
    </main>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";

type IconProps = {
  size?: number;
  className?: string;
};

const Search = ({ size = 21, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16L21 21" />
  </svg>
);

const BriefcaseBusiness = ({ size = 24, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M3 12h18" />
    <path d="M10 12h4" />
  </svg>
);

const MapPin = ({ size = 16, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const jobs = [
  {
    title: "Government Jobs",
    category: "Government",
    location: "Telangana / Andhra Pradesh",
    description: "ప్రభుత్వ ఉద్యోగాల నోటిఫికేషన్లు, అర్హతలు మరియు దరఖాస్తు వివరాలు.",
  },
  {
    title: "Private Company Jobs",
    category: "Private",
    location: "Hyderabad",
    description: "ప్రైవేట్ కంపెనీల్లో ఉద్యోగ అవకాశాల సమాచారం.",
  },
  {
    title: "Work From Home Jobs",
    category: "Remote",
    location: "Remote",
    description: "ఇంటి నుంచే పని చేసే ఉద్యోగాల సమాచారం.",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      `${job.title} ${job.location} ${job.description}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50">
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

      <section className="bg-linear-to-r from-indigo-950 to-blue-700 px-5 py-16 text-center text-white">
        <BriefcaseBusiness className="mx-auto mb-5" size={42} />

        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Find Your Next Job
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
          Government Jobs, Private Jobs మరియు Work From Home
          ఉద్యోగాల సమాచారాన్ని ఒకే చోట చూడండి.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-xl bg-white px-4">
          <Search className="shrink-0 text-slate-400" size={21} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs or location..."
            aria-label="Search jobs or location"
            className="h-14 w-full bg-transparent text-slate-900 outline-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-3xl font-extrabold">Explore Jobs</h2>

        <p className="mt-3 text-slate-600">
          మీకు కావాల్సిన ఉద్యోగ విభాగాన్ని ఎంచుకోండి.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["All", "Government", "Private", "Remote"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                category === item
                  ? "bg-indigo-600 text-white"
                  : "border bg-white text-slate-700 hover:border-indigo-300"
              }`}
            >
              {item === "All" ? "All Jobs" : item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <BriefcaseBusiness size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">{job.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {job.description}
              </p>

              <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} />
                {job.location}
              </p>

              <div className="mt-5 border-t pt-4">
                <span className="text-xs font-semibold text-amber-700">
                  Sample information — verify actual vacancies
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="mt-8 rounded-xl bg-white p-8 text-center text-slate-600">
            Jobs ఏవీ కనిపించలేదు. వేరే పదంతో వెతకండి.
          </p>
        )}

        <aside className="mt-10 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Advertisement Placeholder
          </p>
        </aside>
      </section>

      <footer className="border-t bg-white px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MegaPortal
      </footer>
    </main>
  );
}

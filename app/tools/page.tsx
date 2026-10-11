
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calculator,
  Image as ImageIcon,
  FileText,
  FileType,
  Search,
  ArrowRight,
  Clock,
  RotateCcw,
} from "lucide-react";

const tools = [
  {
    title: "Age Calculator",
    description: "మీ పుట్టిన తేదీ ఆధారంగా వయస్సును సంవత్సరాలు, నెలలు, రోజులలో తెలుసుకోండి.",
    category: "Calculator",
    icon: "calculator",
    href: "/tools/age-calculator",
  },
  {
    title: "Word Counter",
    description: "మీ textలో words, characters మరియు sentences సంఖ్యను లెక్కించండి.",
    category: "Text",
    icon: "text",
    href: "/tools/word-counter",
  },
  {
    title: "Image Compressor",
    description: "Image file size తగ్గించడానికి ఉపయోగపడే tool.",
    category: "Image",
    icon: "image",
    href: "/tools/image-compressor",
  },
  {
    title: "PDF Tools",
    description: "PDF ఫైళ్ల కోసం ఉపయోగకరమైన tools అందుబాటులో ఉంచే విభాగం.",
    category: "PDF",
    icon: "pdf",
    href: "/tools/pdf-tools",
  },
];

const categories = ["All", "Calculator", "Text", "Image", "PDF"];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [text, setText] = useState("");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      `${tool.title} ${tool.description} ${tool.category}`
        .toLowerCase()
        .includes(search.toLowerCase().trim());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characterCount = text.length;

  const sentenceCount = text.trim()
    ? text.trim().split(/[.!?]+/).filter(Boolean).length
    : 0;

  function renderIcon(icon: string) {
    if (icon === "calculator") return <Calculator size={25} />;
    if (icon === "image") return <ImageIcon size={25} />;
    if (icon === "pdf") return <FileType size={25} />;
    return <FileText size={25} />;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            Mega<span className="text-indigo-600">Portal</span>
          </Link>

          <Link href="/" className="font-semibold text-slate-600 hover:text-indigo-600">
            Home
          </Link>
        </nav>
      </header>

      <section className="bg-linear-to-r from-violet-950 to-indigo-700 px-5 py-16 text-center text-white sm:py-20">
        <Calculator className="mx-auto mb-5" size={42} />

        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Daily Utility Tools
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-violet-100">
          రోజువారీ పనులకు ఉపయోగపడే online tools — సులభంగా, వేగంగా,
          మీ browserలోనే ఉపయోగించండి.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-xl bg-white px-4">
          <Search className="shrink-0 text-slate-400" size={21} />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tools..."
            aria-label="Search tools"
            className="h-14 w-full bg-transparent text-slate-900 outline-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <h2 className="text-3xl font-extrabold">Explore Tools</h2>

        <p className="mt-3 text-slate-600">
          మీకు కావాల్సిన toolను ఎంచుకోండి.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "bg-indigo-600 text-white"
                  : "border border-slate-200 bg-white hover:border-indigo-300"
              }`}
            >
              {item === "All" ? "All Tools" : item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <article
              key={tool.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                {renderIcon(tool.icon)}
              </div>

              <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {tool.category}
              </span>

              <h3 className="mt-4 text-xl font-bold">{tool.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {tool.description}
              </p>

              <Link
                href={tool.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-900"
              >
                Open tool <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="mt-8 rounded-xl bg-white p-8 text-center text-slate-600">
            Tools ఏవీ కనిపించలేదు. వేరే పదంతో వెతకండి.
          </p>
        )}

        <aside className="mt-10 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Advertisement Placeholder
          </span>
        </aside>

        {/* Working Word Counter */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <FileText className="text-indigo-600" size={27} />
            <h2 className="text-2xl font-extrabold">Word Counter</h2>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            క్రింద మీ text type లేదా paste చేయండి. Counts వెంటనే update అవుతాయి.
          </p>

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Type or paste your text here..."
            aria-label="Text for word counter"
            rows={6}
            className="mt-5 w-full rounded-xl border border-slate-200 p-4 text-sm leading-6 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="text-sm text-indigo-700">Words</p>
              <p className="mt-1 text-2xl font-extrabold">{wordCount}</p>
            </div>

            <div className="rounded-xl bg-violet-50 p-4">
              <p className="text-sm text-violet-700">Characters</p>
              <p className="mt-1 text-2xl font-extrabold">{characterCount}</p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-sm text-emerald-700">Sentences</p>
              <p className="mt-1 text-2xl font-extrabold">{sentenceCount}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setText("")}
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
          >
            <RotateCcw size={16} />
            Clear text
          </button>
        </section>

        <div className="mt-8 flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <Clock className="mt-1 shrink-0 text-blue-700" size={22} />

          <p className="text-sm leading-6 text-blue-950">
            Word Counter ప్రస్తుతం పనిచేస్తుంది. మిగతా tools కోసం
            వాటి individual pages మరియు functionalityని తర్వాత నిర్మిస్తాం.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} MegaPortal
      </footer>
    </main>
  );
}

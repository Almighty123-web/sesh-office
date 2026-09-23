import React from 'react';
import Link from 'next/link';

const features = [
  'Docs, Sheets, and Slides',
  'AI-assisted workflow automation',
  'Real-time team collaboration',
  'Smart workspace analytics',
];

const stats = [
  { label: 'Teams onboarded', value: '14.2K' },
  { label: 'Docs created', value: '2.4M' },
  { label: 'Avg. productivity gain', value: '+38%' },
];

const showcase = [
  {
    title: 'Executive briefing',
    detail: 'Finance, planning, and market review',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Operations command',
    detail: 'Daily dashboards and KPIs',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Campaign launch deck',
    detail: 'Board-ready pitch slides',
    accent: 'from-orange-500 to-amber-500',
  },
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="soft-card flex items-center justify-between rounded-2xl px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-extrabold text-white shadow-lg shadow-blue-500/20">
              S
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Workspace</p>
              <h1 className="text-xl font-black">SESH Office</h1>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <Link href="#solutions">Solutions</Link>
            <Link href="#products">Products</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#resources">Resources</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl bg-slate-900 px-4 py-2.5 font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-700"
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Built for modern teams
          </div>

          <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-[-0.05em] text-slate-900 md:text-6xl">
            <span className="text-gradient">Work smarter</span> with your office in one place.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            SESH Office unifies documents, spreadsheets, presentations, team planning, and collaboration into a secure workspace built for the pace of modern business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500"
            >
              Start free trial
            </Link>
            <Link
              href="/docs"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50"
            >
              Explore workspace
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="grid-pattern soft-card relative overflow-hidden rounded-[28px] p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-cyan-400/10 to-transparent" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-md shadow-slate-200/60">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Q3 Strategy</p>
                <h3 className="mt-1 text-xl font-bold">Board Review</h3>
              </div>
              <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white">Open</button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <div className="text-2xl font-black text-slate-900">{item.value}</div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Revenue snapshot</span>
                <span className="status-pill text-emerald-400 bg-emerald-500/10">+18.4%</span>
              </div>
              <div className="mt-5 flex items-end gap-2">
                {[40, 55, 62, 78, 74, 90, 110].map((height, index) => (
                  <div
                    key={height}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400"
                    style={{ height: `${height}px`, opacity: 0.6 + index * 0.06 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Product suite</p>
          <h3 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-900">Everything your business needs</h3>
        </div>

        <div className="doc-grid">
          {showcase.map((item) => (
            <div key={item.title} className="soft-card rounded-2xl p-5">
              <div className={`mb-5 h-32 rounded-2xl bg-gradient-to-br ${item.accent}`} />
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                  Live
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const slides = [
  {
    label: 'Slide 01',
    title: 'Market momentum',
    description: 'Slides with revenue, energy, and customer growth insights.',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Slide 02',
    title: 'Regional expansion',
    description: 'Opportunity forecast for APAC and EMEA growth.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'Slide 03',
    title: 'Roadmap unlocks',
    description: 'Three strategic product moves to scale in Q4.',
    accent: 'from-orange-500 to-amber-500',
  },
];

export default function SlidesPage() {
  return (
    <div className="app-shell min-h-screen bg-[#f6f8fb] p-6">
      <div className="mx-auto max-w-7xl">
        <header className="soft-card mb-6 flex items-center justify-between rounded-2xl p-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Slides</p>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Presentation studio</h1>
          </div>
          <button className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
            New deck
          </button>
        </header>

        <div className="doc-grid">
          {slides.map((slide) => (
            <div key={slide.label} className="soft-card rounded-2xl p-4">
              <div className={`slide-preview bg-gradient-to-br ${slide.accent}`}>
                <div className="flex h-full flex-col justify-between">
                  <span className="inline-flex w-fit rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {slide.label}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">{slide.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

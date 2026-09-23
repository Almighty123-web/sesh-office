import Link from 'next/link';

const docs = [
  { title: 'Quarterly roadmap', author: 'Alicia', updated: '2h ago', status: 'Review' },
  { title: 'Annual hiring plan', author: 'Marcus', updated: 'Today', status: 'Draft' },
  { title: 'Customer success brief', author: 'Nina', updated: 'Yesterday', status: 'Published' },
];

const tools = ['B', 'I', 'U', '•', 'Link', 'Image', 'Table'];

export default function DocumentsPage() {
  return (
    <div className="app-shell min-h-screen bg-[#f5f7fc] p-6">
      <div className="mx-auto max-w-7xl">
        <header className="soft-card mb-6 flex items-center justify-between rounded-2xl p-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Documents</p>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Workspace library</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
              Back to home
            </Link>
            <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500">
              New document
            </button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[340px_1fr]">
          <aside className="soft-card rounded-2xl p-5">
            <h2 className="text-lg font-black text-slate-900">Recent files</h2>
            <div className="mt-4 space-y-3">
              {docs.map((doc) => (
                <div key={doc.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">{doc.title}</span>
                    <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                      {doc.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-slate-500">by {doc.author}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{doc.updated}</div>
                </div>
              ))}
            </div>
          </aside>

          <div className="soft-card rounded-2xl p-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                {tools.map((item) => (
                  <button key={item} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-200">
                    {item}
                  </button>
                ))}
              </div>
              <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">Share</button>
            </div>

            <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Document</p>
                  <h3 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Q3 business review</h3>
                </div>
                <span className="status-pill text-blue-600 bg-blue-100">In review</span>
              </div>

              <div className="space-y-5 text-slate-700">
                <p className="text-lg leading-8">
                  This quarter, the company strengthened operational efficiency while accelerating product delivery across the core portfolio. The focus remains on conversion, customer retention, and long-term pipeline quality.
                </p>
                <h4 className="text-2xl font-black text-slate-900">Recent highlights</h4>
                <ul className="list-disc space-y-2 pl-6 text-base leading-7">
                  <li>Revenue performance improved by 18.4% compared to the previous quarter.</li>
                  <li>Product adoption increased by 26% across enterprise accounts.</li>
                  <li>New onboarding flow reduced time-to-value for new customers by 19%.</li>
                </ul>
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">Key takeaway</p>
                  <p className="mt-2 text-base leading-7">
                    The business is generating stronger quality pipeline while keeping operating costs controlled. The next milestone is to expand partner distribution and optimize upsell automation.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

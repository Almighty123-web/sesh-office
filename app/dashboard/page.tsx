import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', active: true, icon: '▣' },
  { label: 'Documents', href: '/docs', icon: '✎' },
  { label: 'Sheets', href: '/sheets', icon: '▤' },
  { label: 'Slides', href: '/slides', icon: '▣' },
  { label: 'Teams', href: '/settings', icon: '◎' },
];

const workspaceCards = [
  { name: 'Q3 Strategy', status: 'Shared', type: 'Doc', updated: '2 hours ago' },
  { name: 'Sales Tracker', status: 'Live', type: 'Sheet', updated: '18 minutes ago' },
  { name: 'Launch Deck', status: 'Review', type: 'Presentation', updated: 'Today' },
];

const overviewStats = [
  { label: 'Files', value: '1,284', tone: 'bg-blue-100 text-blue-700' },
  { label: 'Team activity', value: '96%', tone: 'bg-emerald-100 text-emerald-700' },
  { label: 'Pending reviews', value: '14', tone: 'bg-amber-100 text-amber-700' },
];

const activity = [
  'Board update approved by finance',
  'Marketing deck shared with leadership',
  'Ops summary synced to workspace',
  'New internal request assigned to design',
];

export default function DashboardPage() {
  return (
    <div className="app-shell flex min-h-screen bg-[#f3f7ff]">
      <aside className="w-72 border-r border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white">
            S
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Suite</p>
            <h1 className="text-xl font-black">SESH Office</h1>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white shadow-lg">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">Storage</p>
          <h3 className="mt-3 text-3xl font-black">1.8 TB</h3>
          <p className="mt-2 text-sm text-slate-300">36% used • 4 team spaces</p>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <header className="soft-card mb-6 flex items-center justify-between rounded-2xl px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Workspace overview</p>
            <h2 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Good afternoon, Alex</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">
              Search
            </button>
            <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-500">
              Create
            </button>
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {overviewStats.map((stat) => (
            <div key={stat.label} className="soft-card rounded-2xl p-5">
              <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${stat.tone}`}>
                {stat.label}
              </div>
              <div className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
          <div className="soft-card rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900">Recent workspaces</h3>
              <button className="text-sm font-bold text-blue-600 hover:text-blue-500">View all</button>
            </div>

            <div className="space-y-3">
              {workspaceCards.map((card) => (
                <div key={card.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-lg">
                      {card.type === 'Doc' ? '📝' : card.type === 'Sheet' ? '📊' : '📽️'}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{card.name}</p>
                      <p className="text-sm text-slate-500">{card.updated}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="status-pill text-emerald-600 bg-emerald-100">{card.status}</span>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{card.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card rounded-2xl p-5">
            <h3 className="text-xl font-black text-slate-900">Activity feed</h3>
            <div className="mt-5 space-y-4">
              {activity.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

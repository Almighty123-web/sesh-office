const settings = [
  { label: 'Profile', value: 'Alex Morgan' },
  { label: 'Team plan', value: 'SESH Growth' },
  { label: 'Billing', value: 'Professional • $29/mo' },
  { label: 'Security', value: '2-factor enabled' },
];

export default function SettingsPage() {
  return (
    <div className="app-shell min-h-screen bg-[#f3f7ff] p-6">
      <div className="mx-auto max-w-5xl">
        <header className="soft-card mb-6 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Settings</p>
          <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Account & workspace management</h1>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="soft-card rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-xl font-black text-white">
                A
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Alex Morgan</h2>
                <p className="text-sm text-slate-500">Workspace owner</p>
              </div>
            </div>

            <nav className="space-y-2">
              {['General', 'Members', 'Security', 'Billing', 'Integrations'].map((item) => (
                <button key={item} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm font-bold text-slate-700 hover:bg-slate-100">
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <section className="soft-card rounded-2xl p-5">
            <h2 className="text-2xl font-black text-slate-900">Account summary</h2>
            <div className="mt-5 space-y-4">
              {settings.map((setting) => (
                <div key={setting.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="font-bold text-slate-700">{setting.label}</span>
                  <span className="text-sm font-semibold text-slate-600">{setting.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

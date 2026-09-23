const rows = [
  { product: 'Nexus Pro', region: 'North America', revenue: '$86,300', target: '$90,000', delta: '+8.1%' },
  { product: 'Coreflow', region: 'EMEA', revenue: '$72,900', target: '$78,500', delta: '+6.7%' },
  { product: 'Flowline', region: 'APAC', revenue: '$69,400', target: '$71,000', delta: '+5.4%' },
  { product: 'Pilot', region: 'LATAM', revenue: '$41,200', target: '$44,500', delta: '+4.1%' },
];

export default function SheetsPage() {
  return (
    <div className="app-shell min-h-screen bg-[#f4f8fe] p-6">
      <div className="mx-auto max-w-7xl">
        <header className="soft-card mb-6 flex items-center justify-between rounded-2xl p-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Sheets</p>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-900">Revenue overview</h1>
          </div>
          <button className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-500">
            Export data
          </button>
        </header>

        <div className="soft-card overflow-hidden rounded-2xl p-4">
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">Live</span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700">Updated 8m ago</span>
            </div>
            <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">
              Formula view
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="sheet-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Region</th>
                  <th>Revenue</th>
                  <th>Target</th>
                  <th>Variance</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.product}>
                    <td>{row.product}</td>
                    <td>{row.region}</td>
                    <td>{row.revenue}</td>
                    <td>{row.target}</td>
                    <td className="font-bold text-emerald-600">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

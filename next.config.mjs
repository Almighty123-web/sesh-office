import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="app-shell flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#eaf2ff_0%,#eff8ff_30%,#f8fafc_100%)] p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 p-10 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">S</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">Productivity Suite</p>
              <h1 className="text-2xl font-black">SESH Office</h1>
            </div>
          </div>

          <div className="mt-14 max-w-md">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em]">Bring every team into one workspace.</h2>
            <p className="mt-5 text-base leading-8 text-blue-100">
              Create docs, spreadsheets, presentations, and real-time workflows with a workspace designed for modern business operations.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {['Document collaboration', 'Realtime analytics', 'Secure sharing'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
                <span className="font-semibold text-blue-50">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 md:p-12">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Welcome back</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-900">Sign in</h3>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
              <input
                type="email"
                defaultValue="alex@company.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
              <input
                type="password"
                defaultValue="password123"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none ring-0 transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="h-4 w-4" />
                Remember me
              </label>
              <a href="#" className="font-bold text-blue-600">Forgot password?</a>
            </div>

            <Link href="/dashboard">
              <button type="button" className="w-full rounded-2xl bg-slate-900 px-5 py-3.5 text-base font-bold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-700">
                Sign in to SESH Office
              </button>
            </Link>

            <button type="button" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

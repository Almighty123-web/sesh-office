import Link from 'next/link';
import { getAuthSession } from '@/lib/session';

export default async function DashboardPage() {
  const session = await getAuthSession();
  const signedIn = Boolean(session?.user);
  const displayName = session?.user?.name?.split(' ')[0] ?? 'Guest';

  return (
    <main className="min-h-screen bg-[#f3f7ff] p-6">
      <div className="mx-auto max-w-7xl">
        <header className="soft-card mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white">S</Link>
            <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">SESH Office</p><h1 className="text-xl font-black">Workspace</h1></div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${signedIn ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {signedIn ? 'Cloud connected' : 'Demo mode'}
            </span>
            {signedIn ? <Link href="/settings" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold">Settings</Link> : <Link href="/login" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">Sign in</Link>}
          </div>
        </header>

        {!signedIn && <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900"><div><p className="font-bold">You are using a local demo workspace</p><p className="mt-1 text-sm text-amber-800">You can explore SESH Office for free. Sign in only when you want cloud saving, syncing, sharing, or team features.</p></div><Link href="/login" className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-500">Unlock cloud features</Link></div>}

        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Overview</p><h2 className="mt-1 text-4xl font-black tracking-[-.05em] text-slate-900">Good afternoon, {displayName}</h2><p className="mt-2 text-slate-600">Everything your team needs to create, collaborate, and get work done.</p></div>
        <section className="grid gap-4 md:grid-cols-3">
          {[['📝','Docs','Write and share polished documents.','/docs'],['📊','Sheets','Analyze data with collaborative tables.','/sheets'],['📽️','Slides','Build presentations that move ideas forward.','/slides']].map(([icon,title,desc,href]) => <Link key={title} href={href} className="soft-card rounded-2xl p-5 transition hover:-translate-y-1"><span className="text-3xl">{icon}</span><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-2 text-sm text-slate-600">{desc}</p><p className="mt-5 text-sm font-bold text-blue-600">Open workspace →</p></Link>)}
        </section>
        <section className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_.7fr]"><div className="soft-card rounded-2xl p-5"><div className="flex items-center justify-between"><h3 className="text-xl font-black">Recent files</h3><span className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Demo data</span></div><div className="mt-4 space-y-3">{['Q3 business review','Revenue overview','Campaign launch deck'].map((file,i)=><div key={file} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><span className="text-xl">{['📝','📊','📽️'][i]}</span><div><p className="font-bold">{file}</p><p className="text-sm text-slate-500">Available in this browser session</p></div></div><span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">Local</span></div>)}</div></div><div className="soft-card rounded-2xl bg-slate-900 p-5 text-white"><p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">Workspace health</p><p className="mt-5 text-5xl font-black">96%</p><p className="mt-2 text-slate-300">Your demo workspace is ready. {signedIn ? 'Cloud sync is enabled.' : 'Sign in to enable cloud sync.'}</p><div className="mt-6 h-2 rounded-full bg-white/10"><div className="h-2 w-[96%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" /></div></div></section>
      </div>
    </main>
  );
}

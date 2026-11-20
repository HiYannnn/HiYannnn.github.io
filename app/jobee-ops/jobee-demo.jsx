"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell, CalendarClock, BarChart3, Compass, FileText, Files,
  LayoutDashboard, ListChecks, Radar, Send, Settings,
} from "lucide-react";

const navigation = [
  ["Home", LayoutDashboard, "#demo-home"],
  ["Find jobs", Compass, "#demo-find"],
  ["Applications", ListChecks, "#demo-applications"],
  ["My CV", FileText],
  ["Follow-ups", Send, "#demo-next"],
  ["Documents", Files],
  ["Analytics", BarChart3, "#demo-overview"],
  ["Job sources", Radar],
  ["Scheduled searches", CalendarClock],
  ["Settings", Settings],
];

const card = "rounded-2xl border border-[#ded2e5] bg-white";
const action = "rounded-lg px-4 py-2.5 text-sm font-semibold";
const upcoming = { company: "Fjordline Logistics", role: "Reporting Analyst" };


const sample = {
  url: "https://careers.example.com/jobs/operations-analyst",
  company: "Northstar Supply",
  role: "Operations Analyst",
};

export default function JobeeDemo() {
  const [showForm, setShowForm] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [url, setUrl] = useState("");
  const [applied, setApplied] = useState(false);
  const [attach, setAttach] = useState(false);
  const [saved, setSaved] = useState(null);
  const found = url.trim().replace(/\/$/, "") === sample.url;
  const canSave = found && applied && (!saved || attach !== saved.attach);

  function reset() {
    setShowForm(false);
    setShowSample(false);
    setUrl("");
    setApplied(false);
    setAttach(false);
    setSaved(null);
  }

  return (
    <div className="min-h-screen bg-[#f8f4f9] text-[#302637] md:grid md:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="border-b border-[#ded2e5] bg-[#faf7fa] px-3 py-4 md:sticky md:top-0 md:h-screen md:overflow-y-auto md:border-b-0 md:border-r">
        <a href="#demo-home" className="inline-block px-3" aria-label="Jobee Ops home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/projects/jobee-logo.svg" alt="Jobee Ops" className="h-10 w-auto" />
        </a>
        <nav aria-label="Jobee Ops" className="mt-4 flex gap-1 overflow-x-auto md:mt-10 md:grid">
          {navigation.map(([label, Icon, href]) => {
            const style = "flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm";
            const content = <><Icon size={17} aria-hidden="true" />{label}</>;
            return href ? (
              <a key={label} href={href} className={`${style} ${label === "Home" ? "bg-[#efe3eb] font-semibold text-[#813d65]" : "text-[#62556a] hover:bg-[#efe3eb]"}`}>{content}</a>
            ) : <span key={label} className={`${style} text-[#706377]`} aria-disabled="true">{content}</span>;
          })}
        </nav>
      </aside>
      <main id="demo-home" className="min-w-0">
        <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
          <p className="text-sm text-[#62556a]">Portfolio demo · Fictional data</p>
          <Link href="/#projects" className="text-sm font-semibold underline underline-offset-4">Back to projects</Link>
        </header>
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-4 sm:px-8 lg:px-12 lg:pt-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your job search</h1>
          <section id="demo-find" className="mt-6 scroll-mt-6 rounded-2xl border border-[#ded2e5] bg-[#eee6f6] p-5 sm:p-7">
            <h2 className="text-2xl font-semibold">Find jobs</h2>
            <p className="mt-1 text-[#62556a]">Add a posting you found and track your application.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" aria-expanded={showSample} aria-controls="demo-sample-job" className={`${action} bg-[#813d65] text-white`} onClick={() => setShowSample(!showSample)}>Search jobs</button>
              <button type="button" aria-expanded={showForm} aria-controls="demo-job-form" onClick={() => setShowForm(!showForm)} className={`${action} border border-[#bba9c6]`}>Paste a job link</button>
            </div>
            {showSample && (
              <div id="demo-sample-job" className="mt-4 rounded-lg bg-white p-4">
                <p className="font-semibold">{sample.role} · {sample.company}</p>
                <button type="button" onClick={() => { setUrl(sample.url); setShowForm(true); setShowSample(false); }} className="mt-2 text-sm font-semibold underline">Use this sample job</button>
              </div>
            )}
          <form id="demo-job-form" hidden={!showForm} className={showForm ? "mt-5 grid max-w-2xl gap-4" : "hidden"} onSubmit={(event) => {
            event.preventDefault();
            if (canSave) setSaved({ ...sample, attach });
          }}>
            <label className="grid gap-1 text-sm font-medium">
              Job link
              <input type="url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://…" className="min-w-0 rounded-lg border border-[#bba9c6] bg-white p-2.5" />
            </label>
            <button type="button" className="w-fit text-sm font-semibold underline underline-offset-4" onClick={() => setUrl(sample.url)}>Use sample job link</button>
            {url.trim() && !found && <p className="text-sm text-[#62556a]">Use the sample link to see autofill in this demo.</p>}
            {found && (
              <div className="grid grid-cols-2 gap-3" aria-live="polite">
                <label className="grid min-w-0 gap-1 text-sm font-medium">Company<input readOnly value={sample.company} className="min-w-0 rounded-lg border border-[#bba9c6] bg-white p-2.5" /></label>
                <label className="grid min-w-0 gap-1 text-sm font-medium">Job title<input readOnly value={sample.role} className="min-w-0 rounded-lg border border-[#bba9c6] bg-white p-2.5" /></label>
              </div>
            )}
            <label className="flex items-center gap-2"><input type="checkbox" checked={applied} onChange={(event) => setApplied(event.target.checked)} />I already applied</label>
            {applied && <label className="flex items-start gap-2"><input className="mt-1" type="checkbox" checked={attach} onChange={(event) => setAttach(event.target.checked)} />Attach sample tailored CV</label>}
            <button disabled={!canSave} className="w-fit rounded-full bg-[#813d65] px-5 py-2.5 font-semibold text-white disabled:opacity-50">Save application</button>
          </form>
          </section>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a href="#demo-applications" className={`${card} block p-5 hover:border-[#bba9c6]`}>
              <span className="block font-semibold">Applications</span>
              <span className="mt-1 block text-sm text-[#62556a]">Review saved jobs and track replies.</span>
            </a>
            <div className={`${card} p-5`}>
              <p className="font-semibold">Edit CV</p>
              <p className="mt-1 text-sm text-[#62556a]">Manage the CV used to assess your fit.</p>
            </div>
            <div className={`${card} p-5`}>
              <p className="font-semibold">Job sources</p>
              <p className="mt-1 text-sm text-[#62556a]">Choose job boards and employers.</p>
            </div>
          </div>
          <section id="demo-overview" className="mt-8 scroll-mt-6" aria-labelledby="demo-overview-heading">
            <h2 id="demo-overview-heading" className="text-xl font-semibold">Application overview</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 xl:grid-cols-4" aria-live="polite">
              {[
                ["Applied", saved ? 2 : 1], ["Rejected", 0],
                ["Awaiting reply", saved ? 2 : 1], ["In progress", 0],
              ].map(([label, count]) => (
                <div key={label} className={`${card} p-4`}><dt className="text-sm text-[#62556a]">{label}</dt><dd className="mt-1 text-2xl font-semibold">{count}</dd></div>
              ))}
            </dl>
            <dl className={`${card} mt-3 flex flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm`}>
              {["Responded", "Assessment", "Interview", "Offer"].map((label) => (
                <div key={label} className="flex gap-1.5"><dt className="text-[#62556a]">{label}</dt><dd className="font-semibold">0</dd></div>
              ))}
            </dl>
          </section>
          <section id="demo-next" className="mt-8 scroll-mt-6">
            <h2 className="text-xl font-semibold">Next up</h2>
            <p className="mt-4 flex items-center gap-2 font-semibold"><Bell size={16} aria-hidden="true" />Upcoming</p>
            <p className="mt-2 text-sm text-[#62556a]">{upcoming.company} · {upcoming.role} · Follow up next week</p>
          </section>
          <section id="demo-applications" aria-live="polite" className={`${card} mt-8 scroll-mt-6 p-5`}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Applications</h2>
              {saved && <button type="button" onClick={reset} className="text-sm underline underline-offset-4">Reset demo</button>}
            </div>
            {[...(saved ? [saved] : []), upcoming].map((job) => (
              <div key={job.company} className="mt-3 border-t border-[#ded2e5] pt-3">
                <p className="font-semibold">{job.role}</p>
                <p className="text-sm text-[#62556a]">{job.company} · Applied</p>
                {job.attach && <p className="mt-2 text-sm">Sample tailored CV attached</p>}
              </div>
            ))}
          </section>
          <p className="mt-8 text-sm text-[#62556a]">Built on the open-source <a className="underline" href="https://github.com/career-ops-hq/career-ops">Career Ops project</a>.</p>
        </div>
      </main>
    </div>
  );
}

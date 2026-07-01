/**
 * Concept explainer — a plan frame that walks a flow one stage at a time.
 *
 * A canvas-frame STARTING POINT for `bloom-visual-planning`. Copy it into a new
 * frame with `write_files`, then replace `STAGES` with the REAL flow you're
 * explaining (a request path, a migration's steps, a state machine). The point:
 * the reader ADVANCES through it and sees state change, instead of parsing a
 * static diagram — reveal one idea at a time.
 *
 * Self-contained React + Tailwind. No external deps.
 */
import { useState } from "react";

type Stage = { title: string; detail: string };

// --- Replace with the real flow ----------------------------------------------
const STAGES: Stage[] = [
  { title: "Author in the public repo", detail: "Skills live in BloomLabsInc/agent-skills — the single source of truth." },
  { title: "Regenerate from @bloom/sdk", detail: "The tool catalog is rebuilt from the public SDK package. No private access." },
  { title: "Install anywhere", detail: "`skills add` copies the folders into any agent — Claude Code, Cursor, Codex." },
];
// -----------------------------------------------------------------------------

export default function ConceptExplainerFrame() {
  const [i, setI] = useState(0);
  const atStart = i === 0;
  const atEnd = i === STAGES.length - 1;

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-8 font-sans text-slate-800">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight">How it works</h1>
        <p className="text-sm text-slate-500">Step through the flow — one stage at a time.</p>
      </header>

      <ol className="space-y-2">
        {STAGES.map((s, idx) => {
          const active = idx === i;
          const done = idx < i;
          return (
            <li
              key={s.title}
              className={`rounded-xl border p-4 transition-all ${
                active ? "border-slate-800 bg-white shadow-sm" : done ? "border-slate-200 bg-slate-50 opacity-70" : "border-slate-100 bg-slate-50 opacity-40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    active ? "bg-slate-800 text-white" : done ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {done ? "✓" : idx + 1}
                </span>
                <span className="font-medium">{s.title}</span>
              </div>
              {active && <p className="mt-2 pl-9 text-sm text-slate-600">{s.detail}</p>}
            </li>
          );
        })}
      </ol>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={atStart}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 enabled:hover:bg-slate-100 disabled:opacity-30"
        >
          ← Back
        </button>
        <span className="text-xs tabular-nums text-slate-400">
          {i + 1} / {STAGES.length}
        </span>
        <button
          onClick={() => setI((n) => Math.min(STAGES.length - 1, n + 1))}
          disabled={atEnd}
          className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm font-medium text-white enabled:hover:bg-slate-700 disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

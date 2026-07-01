/**
 * Decision matrix — a plan frame for choosing between discrete options.
 *
 * A canvas-frame STARTING POINT for `bloom-visual-planning`. Copy it into a new
 * frame with `write_files`, then replace `OPTIONS` / `AXES` with the REAL
 * decision (never ship the placeholders). The point of the frame: axes carry
 * reader-adjustable weights, and rows re-rank live — so the reader discovers
 * which axis actually drives the choice.
 *
 * Self-contained React + Tailwind. No external deps. For real plans, prefer
 * feeding scores from a live Convex query (via the Bloom SDK) over literals.
 */
import { useMemo, useState } from "react";

type Axis = { key: string; label: string; higherIsBetter: boolean };
type Option = { name: string; blurb: string; scores: Record<string, number> };

// --- Replace everything below with the real decision -------------------------
const AXES: Axis[] = [
  { key: "speed", label: "Speed to ship", higherIsBetter: true },
  { key: "flex", label: "Flexibility", higherIsBetter: true },
  { key: "risk", label: "Risk", higherIsBetter: false },
];
const OPTIONS: Option[] = [
  { name: "Option A", blurb: "The fast, opinionated path", scores: { speed: 9, flex: 4, risk: 3 } },
  { name: "Option B", blurb: "The flexible, more work path", scores: { speed: 5, flex: 9, risk: 5 } },
  { name: "Option C", blurb: "The safe, slow path", scores: { speed: 3, flex: 6, risk: 1 } },
];
// -----------------------------------------------------------------------------

const norm = (a: Axis, v: number) => (a.higherIsBetter ? v : 10 - v);

export default function DecisionMatrixFrame() {
  const [weights, setWeights] = useState<Record<string, number>>(
    Object.fromEntries(AXES.map((a) => [a.key, 5]))
  );

  const ranked = useMemo(() => {
    const total = AXES.reduce((s, a) => s + weights[a.key], 0) || 1;
    return OPTIONS.map((o) => ({
      ...o,
      total: AXES.reduce((s, a) => s + norm(a, o.scores[a.key]) * (weights[a.key] / total), 0),
    })).sort((x, y) => y.total - x.total);
  }, [weights]);

  const max = ranked[0]?.total ?? 1;

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8 font-sans text-slate-800">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight">Which approach?</h1>
        <p className="text-sm text-slate-500">
          Drag the weights to say what matters. The options re-rank as you go — the winner is what
          falls out of <em>your</em> priorities.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {AXES.map((a) => (
          <label key={a.key} className="block rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between text-sm font-medium">
              <span>{a.label}</span>
              <span className="tabular-nums text-slate-400">{weights[a.key]}</span>
            </div>
            <input
              type="range"
              min={0}
              max={10}
              value={weights[a.key]}
              onChange={(e) => setWeights((w) => ({ ...w, [a.key]: Number(e.target.value) }))}
              className="mt-2 w-full accent-slate-800"
            />
            <span className="text-xs text-slate-400">{a.higherIsBetter ? "more is better" : "less is better"}</span>
          </label>
        ))}
      </div>

      <ol className="space-y-3">
        {ranked.map((o, i) => (
          <li
            key={o.name}
            className={`rounded-xl border p-4 transition-all ${
              i === 0 ? "border-emerald-400 bg-emerald-50" : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-semibold">{o.name}</span>
                <span className="ml-2 text-sm text-slate-500">{o.blurb}</span>
              </div>
              {i === 0 && <span className="text-xs font-semibold uppercase text-emerald-600">leading</span>}
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-slate-800" style={{ width: `${(o.total / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

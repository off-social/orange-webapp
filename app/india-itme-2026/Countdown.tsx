"use client";

import { useEffect, useState } from "react";
import { ITME } from "./itme-data";
import s from "./itme.module.css";

type State =
  | { phase: "before"; d: number; h: string; m: string }
  | { phase: "live" | "over" }
  | null;

const START = new Date(ITME.start).getTime();
const END = new Date(ITME.end).getTime();
const pad = (n: number) => String(n).padStart(2, "0");

function compute(now: number): State {
  if (now >= END) return { phase: "over" };
  if (now >= START) return { phase: "live" };
  const diff = START - now;
  return {
    phase: "before",
    d: Math.floor(diff / 864e5),
    h: pad(Math.floor((diff % 864e5) / 36e5)),
    m: pad(Math.floor((diff % 36e5) / 6e4)),
  };
}

export default function Countdown() {
  // Starts empty so the static HTML never bakes in a build-time countdown.
  const [state, setState] = useState<State>(null);

  useEffect(() => {
    const tick = () => setState(compute(Date.now()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (state?.phase === "over") {
    return (
      <div className={s.countdown} aria-live="polite">
        <span>Thank you for visiting us at India ITME 2026.</span>
      </div>
    );
  }

  if (state?.phase === "live") {
    return (
      <div className={s.countdown} aria-live="polite">
        <span>India ITME 2026 is live. Find us at {ITME.stand}.</span>
      </div>
    );
  }

  const before = state?.phase === "before" ? state : null;
  const d = before?.d ?? "--";
  const h = before?.h ?? "--";
  const m = before?.m ?? "--";

  return (
    <div className={s.countdown}>
      <span>Doors open in</span>
      <div className={s.cd}>
        <span>
          <b>{d}</b>days
        </span>
        <span>
          <b>{h}</b>hrs
        </span>
        <span>
          <b>{m}</b>min
        </span>
      </div>
    </div>
  );
}

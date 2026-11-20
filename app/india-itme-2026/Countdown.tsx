"use client";

import { Fragment, useEffect, useState } from "react";
import { ITME } from "./itme-data";
import s from "./itme.module.css";

type Parts = { d: number; h: number; m: number; s: number };
type State =
  | { phase: "before"; parts: Parts }
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
    parts: {
      d: Math.floor(diff / 864e5),
      h: Math.floor((diff % 864e5) / 36e5),
      m: Math.floor((diff % 36e5) / 6e4),
      s: Math.floor((diff % 6e4) / 1e3),
    },
  };
}

export default function Countdown() {
  // Starts empty so the static HTML never bakes in a build-time countdown.
  const [state, setState] = useState<State>(null);

  useEffect(() => {
    const tick = () => setState(compute(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (state?.phase === "over" || state?.phase === "live") {
    return (
      <div className={s.countdown}>
        <p className={s.cdLive}>
          {state.phase === "live"
            ? `India ITME 2026 is live. Find us at ${ITME.stand}.`
            : "Thank you for visiting us at India ITME 2026."}
        </p>
      </div>
    );
  }

  const p = state?.phase === "before" ? state.parts : null;
  const tiles = [
    { label: "Days", value: p ? String(p.d) : "--" },
    { label: "Hours", value: p ? pad(p.h) : "--" },
    { label: "Mins", value: p ? pad(p.m) : "--" },
    { label: "Secs", value: p ? pad(p.s) : "--", sec: true },
  ];

  return (
    <div className={s.countdown}>
      <p className={s.cdLabel}>
        Doors open in
        <small>4 Dec 2026, IEML Greater Noida</small>
      </p>
      {/* Screen readers get one summary instead of a value changing every second */}
      <div
        className={s.cdTiles}
        role="timer"
        aria-label={
          p
            ? `${p.d} days, ${p.h} hours and ${p.m} minutes until India ITME 2026 opens`
            : "Countdown to India ITME 2026"
        }
      >
        {tiles.map((t, i) => (
          <Fragment key={t.label}>
            {i > 0 && (
              <span className={s.cdSep} aria-hidden="true">
                :
              </span>
            )}
            <div
              className={t.sec ? `${s.cdTile} ${s.cdTileSec}` : s.cdTile}
              aria-hidden="true"
            >
              <b>{t.value}</b>
              <span>{t.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

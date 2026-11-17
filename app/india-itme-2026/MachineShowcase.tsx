"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { BookLink } from "./BookingContext";
import { MACHINES, type Gauge, type Machine } from "./itme-data";
import s from "./itme.module.css";

const ICONS: Record<Machine["icon"], React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  printer: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M7 7V4h10v3M7 17v3h10v-3" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  gantry: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <path d="M6 10v10M18 10v10M6 15h12" />
    </>
  ),
  star: <path d="M12 3l2.4 5.2L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.8Z" />,
};

function GaugeCell({ g }: { g: Gauge }) {
  return (
    <div className={g.featured ? `${s.g} ${s.gFeat}` : s.g}>
      <p className={s.gLab}>{g.label}</p>
      <div className={s.gDial}>
        <svg className={s.dial} viewBox="0 0 48 72" aria-hidden="true">
          <path className={s.trk} d="M40 6 A32 32 0 0 0 40 66" pathLength={100} />
          <path
            className={g.featured ? `${s.val} ${s.hot}` : s.val}
            d="M40 66 A32 32 0 0 1 40 6"
            pathLength={100}
            style={{ "--v": g.fill } as React.CSSProperties}
          />
        </svg>
        <p className={s.gVal}>
          {g.value}
          {g.unit && <span>{g.unit}</span>}
        </p>
      </div>
      <ul className={s.gSub}>
        {g.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function Screen({ m, active }: { m: Machine; active: boolean }) {
  const layout =
    m.layout === "wide" ? s.wideShot : m.layout === "veiled" ? s.velvet : "";
  return (
    <article
      className={`${s.screen} ${layout}`}
      role="tabpanel"
      id={`panel-${m.id}`}
      aria-labelledby={`tab-${m.id}`}
      hidden={!active}
    >
      <div className={s.gauges}>
        {m.gauges.map((g) => (
          <GaugeCell key={g.label} g={g} />
        ))}
      </div>
      <div className={s.show}>
        {m.layout !== "veiled" && <div className={s.beam} aria-hidden="true" />}
        <div className={s.mach}>
          <Image
            src={m.image.src}
            width={m.image.width}
            height={m.image.height}
            alt={m.image.alt}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <div className={s.ident}>
          <p className={s.badge}>{m.badge}</p>
          <h3>{m.name}</h3>
          {m.lead && <p className={`${s.tag} ${s.tagLead}`}>{m.lead}</p>}
          <p className={s.tag}>{m.tagline}</p>
          {m.fabrics && (
            <p className={s.fabrics}>
              <b>Fabrics</b>
              {m.fabrics}
            </p>
          )}
          <div className={s.acts}>
            <BookLink
              className={s.btn}
              interest={m.interest}
              machine={m.layout === "veiled" ? `${m.name} launch` : m.name}
            >
              {m.bookLabel ?? "Book a demo"}
            </BookLink>
            {m.learnMore && (
              <Link className={s.more} href={m.learnMore}>
                Learn more
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MachineShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const rail = useRef<HTMLDivElement>(null);

  const select = (i: number, focus = false) => {
    setActive(i);
    const tab = tabs.current[i];
    if (focus) tab?.focus();
    // On phones the rail scrolls sideways; keep the chosen tab in view.
    const r = rail.current;
    if (tab && r && r.scrollWidth > r.clientWidth) {
      r.scrollTo({
        left: tab.offsetLeft - (r.clientWidth - tab.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = MACHINES.length;
    const map: Record<string, number> = {
      ArrowRight: (i + 1) % n,
      ArrowDown: (i + 1) % n,
      ArrowLeft: (i - 1 + n) % n,
      ArrowUp: (i - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div className={s.stage}>
      <div
        className={s.rail}
        ref={rail}
        role="tablist"
        aria-label="Featured machines"
        aria-orientation="vertical"
      >
        {MACHINES.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            className={s.railBtn}
            role="tab"
            id={`tab-${m.id}`}
            aria-controls={`panel-${m.id}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONS[m.icon]}
            </svg>
            <span>{m.name}</span>
            {m.isNew && <span className={s.new}>New</span>}
          </button>
        ))}
      </div>
      <div className={s.screens}>
        {MACHINES.map((m, i) => (
          <Screen key={m.id} m={m} active={active === i} />
        ))}
      </div>
    </div>
  );
}

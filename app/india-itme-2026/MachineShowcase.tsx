"use client";

import { useConsultation } from "@/data/ConsultationContext";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { BookLink } from "./BookingContext";
import { MACHINES, type Machine } from "./itme-data";
import s from "./itme.module.css";

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Panel({ m, active }: { m: Machine; active: boolean }) {
  const { openModal } = useConsultation();
  const layout =
    m.layout === "wide" ? s.mWide : m.layout === "veiled" ? s.mVeiled : "";

  return (
    <article
      className={`${s.mPanel} ${layout}`}
      role="tabpanel"
      id={`panel-${m.id}`}
      aria-labelledby={`tab-${m.id}`}
      hidden={!active}
    >
      <div
        className={`${s.mStudio} ${m.image.studio === "dark" ? s.mStudioDark : ""}`}
      >
        <Image
          src={m.image.src}
          width={m.image.width}
          height={m.image.height}
          alt={m.image.alt}
          sizes="(max-width: 900px) 100vw, 760px"
        />
      </div>

      <div className={s.mInfo}>
        <div className={s.mHead}>
          <p className={s.mCategory}>{m.category}</p>
          <h3 className={s.mName}>{m.name}</h3>
          {m.highlight && <p className={s.mHighlight}>{m.highlight}</p>}
          {m.lead && <p className={s.mLead}>{m.lead}</p>}
          <p className={s.mTagline}>{m.tagline}</p>
        </div>

        <dl className={s.mSpecs}>
          {m.specs.map((sp) => (
            <div key={sp.label}>
              <dt>{sp.label}</dt>
              <dd>
                <span className={s.mValue}>
                  {sp.value}
                  {sp.unit && <small>{sp.unit}</small>}
                </span>
                <span className={s.mNote}>{sp.note}</span>
              </dd>
            </div>
          ))}
        </dl>

        {m.fabrics && (
          <div className={s.mFabrics}>
            <p>Prints on</p>
            <ul>
              {m.fabrics.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={s.mActs}>
          {m.consultPrinter ? (
            <button
              type="button"
              className={s.btn}
              onClick={() => openModal(m.consultPrinter)}
            >
              {m.bookLabel ?? "Book a demo"}
              <Arrow />
            </button>
          ) : (
            <BookLink
              className={s.btn}
              interest={m.interest}
              machine={m.layout === "veiled" ? `${m.name} launch` : m.name}
            >
              {m.bookLabel ?? "Book a demo"}
              <Arrow />
            </BookLink>
          )}
          {m.learnMore && (
            <Link className={s.more} href={m.learnMore}>
              View full specifications
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function MachineShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const picker = useRef<HTMLDivElement>(null);
  const n = MACHINES.length;

  const select = (i: number, focus = false) => {
    setActive(i);
    const tab = tabs.current[i];
    if (focus) tab?.focus();
    // On narrow screens the picker scrolls sideways; keep the chosen card in
    // view without moving the page itself.
    const p = picker.current;
    if (tab && p && p.scrollWidth > p.clientWidth) {
      p.scrollTo({
        left: tab.offsetLeft - (p.clientWidth - tab.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const map: Record<string, number> = {
      ArrowRight: (i + 1) % n,
      ArrowLeft: (i - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div className={s.showcase}>
      <div
        className={s.picker}
        ref={picker}
        role="tablist"
        aria-label="Machines on the stand"
      >
        {MACHINES.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            className={`${s.pick} ${m.layout === "veiled" ? s.pickVeiled : ""}`}
            role="tab"
            id={`tab-${m.id}`}
            aria-controls={`panel-${m.id}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span
              className={`${s.pickShot} ${m.image.studio === "dark" ? s.pickShotDark : ""}`}
            >
              <Image
                src={m.image.src}
                width={m.image.width}
                height={m.image.height}
                alt=""
                sizes="200px"
              />
              {m.isNew && <span className={s.pickNew}>New</span>}
            </span>
            <span className={s.pickName}>{m.name}</span>
            <span className={s.pickCat}>{m.category}</span>
          </button>
        ))}
      </div>

      {MACHINES.map((m, i) => (
        <Panel key={m.id} m={m} active={active === i} />
      ))}
    </div>
  );
}

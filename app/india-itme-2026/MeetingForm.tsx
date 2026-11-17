"use client";

import { submitForm } from "@/lib/forms";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useBooking } from "./BookingContext";
import { INTEREST_OPTIONS, ITME, whatsappUrl } from "./itme-data";
import s from "./itme.module.css";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  interest: "",
  message: "",
};

const RULES = {
  name: (v: string) => v.trim().length >= 2,
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone: (v: string) => {
    const digits = v.replace(/\D/g, "").length;
    return digits >= 10 && digits <= 15;
  },
};
type Checked = keyof typeof RULES;
const CHECKED = Object.keys(RULES) as Checked[];

function whatsappFor(d: Fields) {
  return whatsappUrl(
    `Hi Orange O Tec, I'd like to book a meeting at India ITME 2026 (${ITME.stand}).` +
      `\nName: ${d.name}\nCompany: ${d.company || "-"}\nPhone: ${d.phone}` +
      `\nEmail: ${d.email}\nInterested in: ${d.interest || "-"}` +
      (d.message ? `\nMessage: ${d.message}` : ""),
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function MeetingForm() {
  const { register } = useBooking();
  const [form, setForm] = useState<Fields>(EMPTY);
  const [invalid, setInvalid] = useState<Partial<Record<Checked, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sent, setSent] = useState<Fields | null>(null);
  const honey = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  // "Book a demo" buttons elsewhere on the page prefill the interest and add
  // the machine to the message.
  useEffect(() => {
    register((interest, machine) => {
      setForm((prev) => {
        const next = { ...prev };
        if (interest) next.interest = interest;
        if (machine && !prev.message.includes(machine)) {
          const line = `I'd like to see the ${machine} at India ITME 2026 (${ITME.stand}).`;
          next.message = prev.message ? `${prev.message}\n${line}` : line;
        }
        return next;
      });
    });
    return () => register(null);
  }, [register]);

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  const set =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value = e.target.value;
      setFailed(false);
      setForm((prev) => ({ ...prev, [key]: value }));
      // Once flagged, a field re-checks as the visitor corrects it.
      if (key in RULES && invalid[key as Checked]) {
        setInvalid((prev) => ({
          ...prev,
          [key]: !RULES[key as Checked](value),
        }));
      }
    };

  const blur = (key: Checked) => () => {
    if (form[key]) setInvalid((prev) => ({ ...prev, [key]: !RULES[key](form[key]) }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (honey.current?.value) return;

    const nextInvalid = Object.fromEntries(
      CHECKED.map((k) => [k, !RULES[k](form[k])]),
    ) as Record<Checked, boolean>;
    setInvalid(nextInvalid);
    const firstBad = CHECKED.find((k) => nextInvalid[k]);
    if (firstBad) {
      document.getElementById(`itme-${firstBad}`)?.focus();
      return;
    }

    const data: Fields = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      interest: form.interest,
      message: form.message.trim(),
    };
    const q = new URLSearchParams(window.location.search);

    setSubmitting(true);
    setFailed(false);
    try {
      await submitForm("itme", {
        ...data,
        utm_source: q.get("utm_source") ?? "",
        utm_medium: q.get("utm_medium") ?? "",
        utm_campaign: q.get("utm_campaign") ?? "",
        gclid: q.get("gclid") ?? "",
      });
      window.gtag?.("event", "generate_lead", {
        event_category: "India ITME 2026",
        event_label: data.interest || "Not specified",
      });
      setSent(data);
      setForm(EMPTY);
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    const first = sent.name.split(" ")[0];
    return (
      <div className={s.formDone} tabIndex={-1} ref={doneRef}>
        <div className={s.tick}>
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>
        <h3>Meeting request received</h3>
        <p>
          Thank you, {first}. Our team will contact you shortly to confirm a
          time at {ITME.stand}, India ITME 2026.
        </p>
        <a
          className={`${s.btn} ${s.btnOutline}`}
          href={whatsappFor(sent)}
          target="_blank"
          rel="noopener"
        >
          Also message us on WhatsApp
        </a>
      </div>
    );
  }

  const fieldClass = (k?: Checked) =>
    k && invalid[k] ? `${s.field} ${s.invalid}` : s.field;

  return (
    <>
      <h2>Let’s Connect at India ITME 2026</h2>
      <p className={s.intro}>
        Get in touch with our team to schedule a meeting and explore the right
        digital printing technology for your business.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <input
          ref={honey}
          type="text"
          name="_honey"
          className={s.hp}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={fieldClass("name")}>
          <input
            id="itme-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder=" "
            required
            value={form.name}
            onChange={set("name")}
            onBlur={blur("name")}
            aria-invalid={!!invalid.name}
            aria-describedby={invalid.name ? "itme-name-err" : undefined}
          />
          <label htmlFor="itme-name">Full Name*</label>
          {invalid.name && (
            <p className={s.err} id="itme-name-err">
              Enter your full name.
            </p>
          )}
        </div>

        <div className={fieldClass("email")}>
          <input
            id="itme-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder=" "
            required
            value={form.email}
            onChange={set("email")}
            onBlur={blur("email")}
            aria-invalid={!!invalid.email}
            aria-describedby={invalid.email ? "itme-email-err" : undefined}
          />
          <label htmlFor="itme-email">Business Email*</label>
          {invalid.email && (
            <p className={s.err} id="itme-email-err">
              Enter a valid email, like name@company.com.
            </p>
          )}
        </div>

        <div className={s.row2}>
          <div className={fieldClass("phone")}>
            <input
              id="itme-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder=" "
              required
              value={form.phone}
              onChange={set("phone")}
              onBlur={blur("phone")}
              aria-invalid={!!invalid.phone}
              aria-describedby={invalid.phone ? "itme-phone-err" : undefined}
            />
            <label htmlFor="itme-phone">Phone Number*</label>
            {invalid.phone && (
              <p className={s.err} id="itme-phone-err">
                Enter 10–15 digits.
              </p>
            )}
          </div>
          <div className={s.field}>
            <input
              id="itme-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder=" "
              value={form.company}
              onChange={set("company")}
            />
            <label htmlFor="itme-company">Company Name</label>
          </div>
        </div>

        <div className={s.field}>
          <select
            id="itme-interest"
            name="interest"
            value={form.interest}
            onChange={set("interest")}
          >
            <option value="">Select an option</option>
            {INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <label htmlFor="itme-interest">Interested In</label>
        </div>

        <div className={s.field}>
          <textarea
            id="itme-message"
            name="message"
            rows={2}
            placeholder=" "
            value={form.message}
            onChange={set("message")}
          />
          <label htmlFor="itme-message">Message (optional)</label>
        </div>

        <button className={s.btn} type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <span className={s.spinner} aria-hidden="true" /> Sending…
            </>
          ) : (
            "Book a Meeting"
          )}
        </button>
        <p className={s.consent}>
          By submitting this form, you agree to be contacted by Orange O Tec
          regarding your enquiry.
        </p>
        <div role="status" aria-live="polite">
          {failed && (
            <p className={s.formError}>
              We couldn’t send your request. Check your connection and try
              again, or send it on{" "}
              <a href={whatsappFor(form)} target="_blank" rel="noopener">
                WhatsApp
              </a>{" "}
              or by{" "}
              <a
                href={`mailto:${ITME.email}?subject=${encodeURIComponent(
                  "India ITME 2026 meeting request",
                )}&body=${encodeURIComponent(
                  Object.entries(form)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join("\n"),
                )}`}
              >
                email
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </>
  );
}

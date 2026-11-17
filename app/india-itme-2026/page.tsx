import { buildPageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { BookingProvider, BookLink } from "./BookingContext";
import { FloatingCta, IcsDownload, WhatsAppIcon } from "./ClientBits";
import Countdown from "./Countdown";
import MachineShowcase from "./MachineShowcase";
import MeetingForm from "./MeetingForm";
import {
  FAQS,
  GOOGLE_CALENDAR_URL,
  ITME,
  whatsappUrl,
} from "./itme-data";
import s from "./itme.module.css";

export const metadata = buildPageMetadata({
  title: "Orange O Tec at India ITME 2026 | Hall 5, Stall 5 | IEML Greater Noida",
  description:
    "Meet Orange O Tec at India ITME 2026, Hall 5, Stall 5, IEML Greater Noida, 4–9 December. See Position Pro, FabPro 2i, Rocket and HOMER K-64, witness the Oval Printer launch and book a meeting.",
  keywords:
    "India ITME 2026, ITME Expo 2026, India ITME 2026 exhibitors, textile machinery exhibition, digital textile printing machine, Orange O Tec, Hall 5 Stall 5",
  path: ITME.path,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ExhibitionEvent",
      name: "Orange O Tec at India ITME 2026 – Hall 5, Stall 5",
      startDate: "2026-12-04",
      endDate: "2026-12-09",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      url: `https://orangeotec.com${ITME.path}`,
      description:
        "Meet Orange O Tec at Hall 5, Stall 5 of India ITME 2026, the 12th India International Textile Machinery Exhibition, to explore digital textile printing technologies and the live launch of the Oval Printer.",
      image: "https://orangeotec.com/newRocket.webp",
      location: {
        "@type": "Place",
        name: "India Exposition Mart Limited (IEML), Hall 5, Stall 5",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. 23-25 & 27-29, Knowledge Park II",
          addressLocality: "Greater Noida",
          postalCode: "201306",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "India ITME Society",
        url: ITME.officialSite,
      },
      performer: {
        "@type": "Organization",
        name: "Orange O Tec Pvt. Ltd.",
        url: "https://orangeotec.com/",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* Shared stroke-icon wrapper, matching the design's 24px line icons. */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const EXPERTISE = [
  {
    label: "Textile printing",
    icon: (
      <>
        <path d="M4 20V8l4-4h8l4 4v12Z" />
        <path d="M8 4c0 2 1.8 3 4 3s4-1 4-3" />
      </>
    ),
  },
  {
    label: "Textile processing",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
      </>
    ),
  },
  {
    label: "Label printing",
    icon: (
      <>
        <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </>
    ),
  },
  {
    label: "Publication printing",
    icon: (
      <path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2ZM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8Z" />
    ),
  },
  {
    label: "Ink solutions",
    icon: <path d="M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z" />,
  },
];

const WHY = [
  {
    title: "Industrial production",
    text: "Printing technologies developed for demanding production environments.",
    icon: <path d="M3 21V10l6 4V10l6 4V6l6 4v11Z" />,
  },
  {
    title: "Precision & quality",
    text: "Technologies focused on colour consistency and print quality.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Production efficiency",
    text: "See how digital printing supports streamlined production workflows.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
  {
    title: "Expert consultation",
    text: "Discuss your requirements directly with our technical and business teams.",
    icon: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
  },
];

/** FAQ answers with links layered on; the schema uses the plain text. */
const FAQ_RICH: Record<number, React.ReactNode> = {
  4: (
    <>
      {FAQS[4].a} <Link href="/products">See all products</Link>.
    </>
  ),
  5: (
    <>
      Submit the <BookLink>enquiry form</BookLink> on this page with your
      contact information and printing requirements. The Orange O Tec team can
      follow up to coordinate a meeting.
    </>
  ),
  7: (
    <>
      Email <a href={`mailto:${ITME.email}`}>{ITME.email}</a>, call{" "}
      <a href={ITME.phoneHref}>{ITME.phone}</a>, visit our{" "}
      <Link href="/contact">contact page</Link>, or submit the enquiry form on
      this page.
    </>
  ),
};

export default function IndiaItmePage() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className={s.page}>
        {/* 1 · Hero + meeting form */}
        <section className={s.hero} id="itme-hero" aria-labelledby="itme-title">
          <div className={`${s.wide} ${s.heroGrid}`}>
            <div>
              <div className={s.itmeTag}>
                <Image
                  src="/india-itme/india-itme-2026-logo.webp"
                  width={560}
                  height={493}
                  alt="India ITME 2026 logo"
                  preload
                />
                <span>
                  <b>Orange O Tec at India ITME 2026</b>
                  12th India International Textile Machinery Exhibition
                </span>
              </div>
              <h1 className={s.heroTitle} id="itme-title">
                Meet Orange O Tec at India ITME 2026.
              </h1>
              <p className={s.sub}>
                Discover the next generation of digital printing technologies.
              </p>
              <p className={s.lede}>
                Explore advanced digital textile printing solutions engineered
                for industrial production, precision, productivity and
                consistent print quality, and see how they can support your
                manufacturing goals.
              </p>
              <div className={s.ctas}>
                <BookLink className={s.btn}>Book a Meeting with Our Team</BookLink>
                <a className={s.more} href="#technology">
                  Explore Our Printing Solutions
                </a>
              </div>
              <div className={s.eventCard}>
                <p className={s.calTile} aria-label="4 to 9 December 2026">
                  <span className={s.calMonth}>Dec 2026</span>
                  <span className={s.calDays}>4–9</span>
                  <span className={s.calWeek}>Fri – Wed</span>
                </p>
                <dl className={s.eventFacts}>
                  <div>
                    <dt>Find us at</dt>
                    <dd className={s.accent}>{ITME.stand}</dd>
                  </div>
                  <div>
                    <dt>Venue</dt>
                    <dd>India Exposition Mart (IEML), Greater Noida</dd>
                  </div>
                </dl>
                <Countdown />
              </div>
            </div>

            <div className={s.formCard} id="book">
              <MeetingForm />
            </div>
          </div>
        </section>

        {/* 2 · About India ITME */}
        <section className={s.tile} id="about-itme" aria-labelledby="about-title">
          <div className={s.wrap}>
            <p className={s.eyebrow}>India ITME 2026</p>
            <h2 className={s.headline} id="about-title">
              Where textile technology meets innovation.
            </h2>
            <p className={s.copy}>
              India ITME 2026 is the 12th edition of the India International
              Textile Machinery Exhibition, bringing together textile machinery
              manufacturers, technology providers, textile industry
              professionals and business leaders.
            </p>
            <p className={s.copy}>
              Scheduled from 4 to 9 December 2026 at India Exposition Mart,
              Greater Noida, it is a platform to explore textile manufacturing
              technologies, machinery, digital printing developments and
              industrial innovations.
            </p>
            <div className={s.ctas}>
              <a
                className={s.more}
                href={ITME.officialSite}
                target="_blank"
                rel="noopener"
              >
                Visit the official India ITME website
              </a>
            </div>
            <Image
              className={s.itmeLogo}
              src="/india-itme/india-itme-2026-logo.webp"
              width={560}
              height={493}
              alt="India ITME 2026 – Machines To Masterpieces"
            />
          </div>
        </section>

        {/* 3 · Meet Orange O Tec */}
        <section className={`${s.meet} ${s.onDark}`} aria-labelledby="meet-title">
          <div className={s.wrap}>
            <p className={s.eyebrow} id="meet-title">
              Experience digital printing innovation with Orange O Tec
            </p>
            <p className={s.brandline}>
              Engineering better printing. <span>Empowering industries.</span>
            </p>
            <p className={s.copy}>
              Orange O Tec is a digital printing technology company focused on
              high-performance printing solutions for evolving industrial and
              manufacturing requirements. With expertise across textile, label
              and publication printing, we help manufacturers improve
              production efficiency, achieve consistent output quality and
              explore new business opportunities.
            </p>
            <ul className={s.xp} aria-label="Areas of expertise">
              {EXPERTISE.map((x) => (
                <li key={x.label}>
                  <Icon>{x.icon}</Icon>
                  {x.label}
                </li>
              ))}
            </ul>
            <p className={s.copy}>
              At India ITME 2026, connect with our team to explore our digital
              printing ecosystem and discover technologies suited to your
              production requirements.
            </p>
            <div className={s.ctas}>
              <BookLink className={s.btn}>Meet us at {ITME.stand}</BookLink>
              <Link className={s.more} href="/about">
                Discover Orange O Tec
              </Link>
            </div>
          </div>
          <Image
            className={s.oMark}
            src="/india-itme/orange-o-mark.webp"
            width={693}
            height={700}
            alt=""
            aria-hidden="true"
          />
        </section>

        {/* 4 · Machines on the stand */}
        <section
          className={`${s.tile} ${s.gray} ${s.techSection}`}
          id="technology"
          aria-labelledby="tech-title"
        >
          <div className={s.wrap}>
            <p className={s.eyebrow}>Live at {ITME.stand}</p>
            <h2 className={s.headline} id="tech-title">
              Technologies built for industrial performance.
            </h2>
            <p className={s.copy}>
              Explore selected printing platforms from Orange O Tec and its
              technology ecosystem, live at {ITME.stand}.
            </p>
          </div>
          <MachineShowcase />
          <div className={s.portfolioLink}>
            <Link className={s.more} href="/products">
              Explore Our Complete Printing Portfolio
            </Link>
          </div>
        </section>

        {/* 5 · Why Orange O Tec */}
        <section className={`${s.tile} ${s.gray}`} aria-labelledby="why-title">
          <div className={s.wrap}>
            <h2 className={s.headline} id="why-title">
              Your next printing technology partner starts here.
            </h2>
            <p className={s.copy}>
              Whether you are expanding manufacturing capacity, upgrading
              existing printing infrastructure or exploring digital printing for
              the first time, Orange O Tec brings technology expertise and
              industry-focused solutions to support your business.
            </p>
          </div>
          <div className={s.bento}>
            {WHY.map((w) => (
              <div className={s.card} key={w.title}>
                <Icon>{w.icon}</Icon>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 · Visit the stand */}
        <section
          className={`${s.tile} ${s.black} ${s.onDark} ${s.visit}`}
          id="visit"
          aria-labelledby="visit-title"
        >
          <div className={s.wrap}>
            <p className={s.eyebrow} id="visit-title">
              Visit Orange O Tec at India ITME 2026
            </p>
            <p className={s.stallNo}>
              Hall 5.<span>Stall 5.</span>
            </p>
            <p className={s.copy}>
              Plan your visit and meet our team at the 12th India International
              Textile Machinery Exhibition.
            </p>
          </div>
          <dl className={s.visitFacts}>
            <div>
              <dt>Dates</dt>
              <dd>4–9 December 2026</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>India Exposition Mart Limited (IEML), Greater Noida, UP</dd>
            </div>
            <div>
              <dt>Exhibitor</dt>
              <dd>Orange O Tec Pvt. Ltd.</dd>
            </div>
          </dl>
          <div className={s.wrap}>
            <div className={s.ctas}>
              <a
                className={s.btn}
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener"
              >
                Add to Google Calendar
              </a>
              <a
                className={`${s.btn} ${s.btnOutline}`}
                href={ITME.directions}
                target="_blank"
                rel="noopener"
              >
                Get directions
              </a>
              <a
                className={s.more}
                href={ITME.officialSite}
                target="_blank"
                rel="noopener"
              >
                Visit the Official India ITME Website
              </a>
            </div>
            <IcsDownload />
          </div>
        </section>

        {/* 7 · Let's meet */}
        <section className={s.tile} aria-labelledby="meeting-title">
          <div className={s.wrap}>
            <h2 className={s.headline} id="meeting-title">
              Let’s meet at India ITME 2026.
            </h2>
            <p className={s.copy}>
              Have a printing requirement, planning to upgrade your machinery
              or looking for a reliable technology partner? Schedule a
              personalised discussion to understand our printing solutions,
              technical capabilities and opportunities for your business.
            </p>
            <p className={s.sub} style={{ marginTop: 20 }}>
              Let’s discuss your next printing project.
            </p>
          </div>
          <div className={s.contactRow}>
            <BookLink className={s.contact}>
              <Icon>
                <rect x="3" y="5" width="18" height="16" rx="3" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </Icon>
              <b>Schedule Your Meeting Today</b>
              <span>Fill a short form, we confirm a time</span>
            </BookLink>
            <a className={s.contact} href={ITME.phoneHref}>
              <Icon>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
              </Icon>
              <b>Talk to Our Team</b>
              <span>{ITME.phone}</span>
            </a>
            <a
              className={s.contact}
              href={whatsappUrl(
                `Hi Orange O Tec, I'd like to meet your team at India ITME 2026 (${ITME.stand}).`,
              )}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              <b>Chat on WhatsApp</b>
              <span>Quick replies during the expo</span>
            </a>
          </div>
        </section>

        {/* 8 · FAQ */}
        <section
          className={`${s.tile} ${s.gray}`}
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className={s.wrap}>
            <h2 className={s.headline} id="faq-title">
              Questions? Answers.
            </h2>
            <div className={s.faq}>
              {FAQS.map((f, i) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <i className={s.plus} aria-hidden="true" />
                  </summary>
                  <p>{FAQ_RICH[i] ?? f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FloatingCta />
      </main>
    </BookingProvider>
  );
}

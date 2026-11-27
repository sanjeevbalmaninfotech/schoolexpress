import type { Metadata } from "next";
import Link from "next/link";
import LegacyScope from "@/components/legacy/LegacyScope";
import FaqSection from "@/components/FaqSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact School Express | Free Transport Quotes in the South East",
  },
  description:
    "Get a free, no-obligation quote. Call 01491 414040, email office@schoolexpressuk.com or send your journey details and our Reading office will reply.",
  alternates: { canonical: "https://schoolexpressuk.com/contact.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title: "Contact School Express | Free Transport Quotes in the South East",
    description:
      "Get a free, no-obligation quote. Call 01491 414040, email office@schoolexpressuk.com or send your journey details and our Reading office will reply.",
    url: "https://schoolexpressuk.com/contact.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact School Express | Free Transport Quotes in the South East",
    description:
      "Get a free, no-obligation quote. Call 01491 414040, email office@schoolexpressuk.com or send your journey details and our Reading office will reply.",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://schoolexpressuk.com/#business",
    name: "School Express",
    legalName: "FD Travels Ltd",
    url: "https://schoolexpressuk.com/",
    telephone: "+441491414040",
    email: "office@schoolexpressuk.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Barrett Court, 70 Cardiff Road",
      addressLocality: "Reading",
      postalCode: "RG1 8ED",
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    areaServed: [
      "Berkshire",
      "Oxfordshire",
      "Hampshire",
      "Reading",
      "Wokingham",
      "West Berkshire",
      "Bracknell Forest",
      "South Oxfordshire",
      "Fareham",
      "South East England",
    ],
    logo: "https://schoolexpressuk.com/images/school-express-logo.png",
    image:
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://schoolexpressuk.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://schoolexpressuk.com/contact.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I include in my enquiry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The school or destination, the pick-up postcode, the days and times you need, and the number of passengers. If anyone has access, medical or behaviour needs, a short note helps us suggest the right vehicle and staff.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reach you outside office hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email us at any time and we'll reply when the office opens at 7am. Families on an active route are given a direct number for the morning and afternoon runs. [Confirm]",
        },
      },
      {
        "@type": "Question",
        name: "How soon can transport start after I accept a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a straightforward school run, often within a week. Routes that need a passenger assistant or a wheelchair-accessible vehicle can take a little longer while we arrange the right team.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge for a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Quotes are free and there's no obligation to book. We'll also explain exactly what the price includes, such as a passenger assistant or waiting time.",
        },
      },
    ],
  },
];

const SERVICE_BY_SLUG: Record<string, string> = {
  "school-college-transport": "School or college transport",
  "adult-social-care-transport": "Adult and social care transport",
  "group-travel": "Group travel or an event",
  "wheelchair-accessible-transport": "Wheelchair-accessible transport",
  "send-transport": "SEND or additional needs transport",
  "": "Not sure yet",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const defaultService = SERVICE_BY_SLUG[service ?? ""];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegacyScope>
        <header className="phero">
          <div className="container">
            <div className="wrap">
              <div>
                <div className="breadcrumb" role="navigation" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">Contact</span>
                </div>
                <span className="label-chip">
                  <Image src="/contact/icons/Gettouch.svg" alt="Get in touch" width={20} height={20} />
                  Get in touch
                </span>
                <h1>Let’s plan your journey</h1>
                <p className="text-lead">
                  Need a school run, a care journey, accessible transport or a
                  minibus for a trip? Talk to our friendly team and we’ll help you
                  plan safe, reliable travel across the South East.
                </p>
                <div className="button-group">
                  <a className="btn btn-primary" href="#quote">
                    Get a free quote
                  </a>
                  <a className="btn btn-outline" href="tel:01491414040">

                    Call 01491 414040
                  </a>
                </div>
              </div>
              <div className="keyfacts" style={{ alignSelf: "center" }}>
                <div>
                  <svg className="icon">
                    <use href="#i-clock" />
                  </svg>
                  <span>
                    <b>Office hours</b>Monday to Friday, 7am to 5pm
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-chat" />
                  </svg>
                  <span>
                    <b>Reply time</b>Within{" "}
                    <mark className="tbc">[one working day]</mark>
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-users" />
                  </svg>
                  <span>
                    <b>Looking for work?</b>
                    <Link href="/careers">Apply on our careers page</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tiles" aria-hidden="true">
            <i style={{ background: "var(--sky)" }}></i>
            <i style={{ background: "var(--pink)" }}></i>
            <i style={{ background: "var(--green)" }}></i>
            <i style={{ background: "var(--slate)" }}></i>
            <i style={{ background: "var(--cyan)" }}></i>
            <i style={{ background: "var(--lteal)" }}></i>
          </div>
        </header>
        <section className="section-spacing" id="details">
          <div className="container contact">
            <div>
              <h2>Contact details</h2>
              <div className="cl">
                <div>
                  <span className="icon-box">
                    <svg className="icon">
                      <use href="#i-phone" />
                    </svg>
                  </span>
                  <span>
                    <small>Landline</small>
                    <a href="tel:01491414040">01491 414040</a>
                  </span>
                </div>
                <div>
                  <span className="icon-box">
                    <svg className="icon">
                      <use href="#i-phone" />
                    </svg>
                  </span>
                  <span>
                    <small>Mobile</small>
                    <a href="tel:07484093555">07484 093555</a>
                  </span>
                </div>
                <div>
                  <span className="icon-box">
                    <svg className="icon">
                      <use href="#i-mail" />
                    </svg>
                  </span>
                  <span>
                    <small>Email</small>
                    <a
                      href="mailto:office@schoolexpressuk.com"
                      style={{ fontSize: "18px", wordBreak: "break-word" }}
                    >
                      office@schoolexpressuk.com
                    </a>
                  </span>
                </div>
                <div>
                  <span className="icon-box">
                    <svg className="icon">
                      <use href="#i-pin" />
                    </svg>
                  </span>
                  <span>
                    <small>Office</small>3 Barrett Court, 70 Cardiff Road
                    <br />
                    Reading RG1 8ED
                    <br />
                    <a
                      href={
                        "https://www.google.com/maps/search/?api=1&query=3+Barrett+Court+70+Cardiff+Road+Reading+RG1+8ED"
                      }
                      style={{
                        font: "600 16px 'Public Sans',sans-serif",
                        color: "var(--teal)",
                      }}
                      target="_blank"
                      rel="noopener"
                    >
                      Open in Google Maps
                    </a>
                  </span>
                </div>
                <div>
                  <span className="icon-box">
                    <svg className="icon">
                      <use href="#i-clock" />
                    </svg>
                  </span>
                  <span>
                    <small>Office hours</small>Monday to Friday, 7am to 5pm
                  </span>
                </div>
              </div>
            </div>
            <form
              id="quote"
              action="#"
              method="post"
              aria-label="Quote request"
            >
              <h2 style={{ fontSize: "28px" }}>Request a quote</h2>
              <div className="row">
                <label htmlFor="q-name">
                  Your name
                  <input
                    id="q-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </label>
                <label htmlFor="q-role">
                  I am a…
                  <select id="q-role" name="role">
                    <option>Parent or carer</option>
                    <option>School, trust or college staff</option>
                    <option>Care home or social care provider</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <label htmlFor="q-email">
                  Email
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label htmlFor="q-phone">
                  Phone
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label htmlFor="q-service">
                Service needed
                <select
                  id="q-service"
                  name="service"
                  defaultValue={defaultService}
                >
                  <option value="School or college transport">
                    School or college transport
                  </option>
                  <option value="Adult and social care transport">
                    Adult and social care transport
                  </option>
                  <option value="Group travel or an event">
                    Group travel or an event
                  </option>
                  <option value="Wheelchair-accessible transport">
                    Wheelchair-accessible transport
                  </option>
                  <option value="SEND or additional needs transport">
                    SEND or additional needs transport
                  </option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <div className="row">
                <label htmlFor="q-school">
                  School or destination
                  <input id="q-school" name="school" type="text" />
                </label>
                <label htmlFor="q-postcode">
                  Pick-up postcode
                  <input
                    id="q-postcode"
                    name="postcode"
                    type="text"
                    autoComplete="postal-code"
                  />
                </label>
              </div>
              <label htmlFor="q-msg">
                What do you need?
                <textarea
                  id="q-msg"
                  name="message"
                  rows={4}
                  placeholder="Number of passengers, days and times, and any wheelchair, access, medical or care needs"
                ></textarea>
              </label>
              <button className="btn btn-primary" type="submit">
                Send enquiry
              </button>
            </form>
          </div>
        </section>
        <section className="section-spacing section-band" id="areas">
          <div className="container content-two-col">
            <div>
              <h2>Areas we cover</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Our office is in Reading, and our drivers cover a wide area
                across Berkshire, South Oxfordshire and Hampshire. New areas are
                added as we expand across the South East.
              </p>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                <strong style={{ color: "var(--ink)" }}>Towns include</strong>{" "}
                Reading, Caversham, Tilehurst, Woodley, Earley, Wokingham,
                Twyford, Bracknell, Newbury, Thatcham, Theale, Henley-on-Thames,
                Didcot, Wallingford, Thame and Fareham.
              </p>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Don’t see your town? Ask us anyway, because our coverage grows
                every year.
              </p>
            </div>
            <div className="mapwrap">
              <div className="map">
                <svg
                  role="img"
                  aria-label="Map of the areas we cover: Reading, Wokingham, Bracknell, Newbury, Henley-on-Thames, Didcot, Wallingford and Thame in Berkshire and South Oxfordshire, and Fareham in Hampshire"
                  viewBox="0 0 480 430"
                >
                  <rect width="480" height="430" fill="#EEF4F3" />
                  <path
                    d="M0 404 C 40 398, 70 410, 110 402 S 170 388, 200 398 S 250 410, 290 400 S 360 390, 400 398 S 450 406, 480 400 L480 430 L0 430 Z"
                    fill="#CFE6EE"
                  />
                  <text
                    x="24"
                    y="422"
                    fill="#4E7F91"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="12"
                    fontStyle="italic"
                  >
                    English Channel
                  </text>
                  <circle
                    cx="236"
                    cy="128"
                    r="135"
                    fill="#0A6F76"
                    fillOpacity=".09"
                  />
                  <circle
                    cx="192"
                    cy="379"
                    r="44"
                    fill="#0A6F76"
                    fillOpacity=".12"
                  />
                  <text
                    x="132"
                    y="200"
                    fill="#5E7F86"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.5"
                  >
                    BERKSHIRE
                  </text>
                  <text
                    x="132"
                    y="40"
                    fill="#5E7F86"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.5"
                  >
                    SOUTH OXFORDSHIRE
                  </text>
                  <text
                    x="97"
                    y="332"
                    fill="#5E7F86"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.5"
                  >
                    HAMPSHIRE
                  </text>
                  <text
                    x="474"
                    y="121"
                    textAnchor="end"
                    fill="#8AA3A8"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="12"
                    fontStyle="italic"
                  >
                    London →
                  </text>
                  <circle
                    cx="243"
                    cy="138"
                    r="8"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="255"
                    y="143"
                    textAnchor="start"
                    fill="#06484D"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="15"
                    fontWeight="700"
                  >
                    Reading · office
                  </text>
                  <circle
                    cx="277"
                    cy="156"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="273"
                    y="178"
                    textAnchor="end"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Wokingham
                  </text>
                  <circle
                    cx="298"
                    cy="154"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="310"
                    y="159"
                    textAnchor="start"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Bracknell
                  </text>
                  <circle
                    cx="156"
                    cy="160"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="144"
                    y="165"
                    textAnchor="end"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Newbury
                  </text>
                  <circle
                    cx="260"
                    cy="106"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="272"
                    y="111"
                    textAnchor="start"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Henley-on-Thames
                  </text>
                  <circle
                    cx="176"
                    cy="78"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="164"
                    y="83"
                    textAnchor="end"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Didcot
                  </text>
                  <circle
                    cx="205"
                    cy="80"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="217"
                    y="85"
                    textAnchor="start"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Wallingford
                  </text>
                  <circle
                    cx="242"
                    cy="22"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="254"
                    y="27"
                    textAnchor="start"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Thame
                  </text>
                  <circle
                    cx="192"
                    cy="379"
                    r="6"
                    fill="#0E2A33"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x="204"
                    y="384"
                    textAnchor="start"
                    fill="#0E2A33"
                    fontFamily="Public Sans, sans-serif"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Fareham
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <FaqSection
          heading="Before you get in touch"
          description="Getting in touch should be easy. These answers explain what to send us, when we reply and how quickly transport can begin."
          items={[
            {
              question: "What should I include in my enquiry?",
              answer:
                "The school or destination, the pick-up postcode, the days and times you need, and the number of passengers. If anyone has access, medical or behaviour needs, a short note helps us suggest the right vehicle and staff.",
            },
            {
              question: "How can I reach you outside office hours?",
              answer: (
                <>
                  Email us at any time and we’ll reply when the office opens at
                  7am. Families on an active route are given a direct number for
                  the morning and afternoon runs.{" "}
                  <mark className="tbc">[Confirm]</mark>
                </>
              ),
            },
            {
              question: "How soon can transport start after I accept a quote?",
              answer:
                "For a straightforward school run, often within a week. Routes that need a passenger assistant or a wheelchair-accessible vehicle can take a little longer while we arrange the right team.",
            },
            {
              question: "Do you charge for a quote?",
              answer:
                "No. Quotes are free and there’s no obligation to book. We’ll also explain exactly what the price includes, such as a passenger assistant or waiting time.",
            },
          ]}
        />
      </LegacyScope>
    </>
  );
}

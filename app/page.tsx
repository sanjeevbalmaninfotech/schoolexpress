import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LegacyScope from "@/components/legacy/LegacyScope";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import TransportSection from "@/components/TransportSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "School Transport Services in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "School, trust, college, SEND and care transport across Berkshire, Oxfordshire, Hampshire and the South East. 15+ years' experience, 10,000+ children carried safely and a 100+ vehicle fleet.",
  alternates: { canonical: "https://schoolexpressuk.com/" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "School Transport Services in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "School, trust, college, SEND and care transport across Berkshire, Oxfordshire, Hampshire and the South East. 15+ years' experience, 10,000+ children carried safely and a 100+ vehicle fleet.",
    url: "https://schoolexpressuk.com/",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "School Transport Services in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "School, trust, college, SEND and care transport across Berkshire, Oxfordshire, Hampshire and the South East. 15+ years' experience, 10,000+ children carried safely and a 100+ vehicle fleet.",
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
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can book transport with you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anyone. Schools, academy trusts, colleges, care homes, social care providers and families all book with us directly, for regular routes or one-off journeys. Just tell us where, when and how many passengers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only transport children with SEND?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We carry pupils at mainstream schools, college students, adults, care home residents and social care clients, as well as groups on trips and outings. Our SEND experience simply means every passenger gets the same high standard of care.",
        },
      },
      {
        "@type": "Question",
        name: "Can you provide female drivers or medically trained staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, on request. We can provide female drivers, passenger assistants trained in epilepsy buccal medication and first aid, and trained Healthcare Assistants (HCAs). Just let us know when you enquire.",
        },
      },
      {
        "@type": "Question",
        name: "What vehicles do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 100+ vehicles include Toyota Prius saloons, Volkswagen Sharan and Mercedes-Benz Vito MPVs, Peugeot Boxer wheelchair-accessible vans and a new 16-seater minibus. We'll suggest the best fit when we quote.",
        },
      },
      {
        "@type": "Question",
        name: "How experienced is your team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We've provided specialist passenger transport for more than 15 years and transported more than 10,000 children safely in that time. Our 200+ drivers and passenger assistants are enhanced DBS checked and trained in SEND and safeguarding.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover Berkshire, South Oxfordshire and Hampshire, including Reading, Wokingham, Bracknell, Newbury, Henley-on-Thames and Fareham, and we're growing across the South East. If your area isn't listed, get in touch, as we may still be able to help.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <StatsBar />
      <TransportSection />
      <LegacyScope>
        <section className="section-spacing section-band" id="send">
          <div className="container content-split">
            <div>
              <span className="label-chip">
                <svg className="icon">
                  <use href="#i-heart" />
                </svg>
                Our SEND expertise
              </span>
              <h2>15+ years of SEND expertise, on every journey you book</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                For more than 15 years, local councils have trusted us with
                their SEND and wheelchair-accessible routes. These journeys
                demand patience, specialist training and careful planning around
                each passenger. That expertise sets the standard for everything
                we do, so every school run, care home trip and group booking
                gets the same level of care.
              </p>
              <div className="wavcall max-md:flex-col! max-md:items-start! max-md:gap-3!">
                <b>20+</b>
                <span>
                  <strong>vehicles with wheelchair access</strong>The biggest
                  accessible fleet in the area, available for care homes,
                  families and group trips.
                </span>
              </div>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Trained in SEND and safeguarding</strong>, so
                    drivers and assistants know how to keep every passenger
                    calm, safe and comfortable
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Same driver on regular routes</strong>, so
                    passengers see a familiar face
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>
                      Ramp and lift access with secure wheelchair restraints
                    </strong>
                    , so passengers travel in their own chair
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Trained passenger assistants</strong>, male or
                    female, when a passenger needs extra support
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Enhanced DBS checks</strong> for every driver and
                    assistant, on every booking
                  </span>
                </li>
              </ul>
              <div className="onreq">
                <b>On request</b>
                <ul className="!list-disc !block !pl-5 space-y-2 marker:text-[#FF5900] [&>li]:!list-item">
                  <li>Female drivers</li>
                  <li>Assistants trained in epilepsy buccal medication and first aid</li>
                  <li>Healthcare Assistants (HCAs) for passengers with health needs</li>
                </ul>
              </div>
              <Link className="link-arrow" href="/send-transport">
                How we support passengers with additional needs{" "}
                <svg className="icon">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <figure className="sendphoto">
              <Image
                className="crop-top"
                src="/home/images/smiling-girl-in-wheelchair.jpg"
                alt="Smiling girl sitting in her wheelchair outdoors"
                width={896}
                height={673}
                loading="lazy"
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                SEND and safeguarding trained drivers and assistants
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="safe" id="safety">
          <div className="container">
            <div className="safehead">
              <h2>Safety you can check</h2>
            </div>
            <ul className="safelist">
              <li>
                <svg className="icon">
                  <use href="#i-lic" />
                </svg>
                Licensed private hire operator
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-doc" />
                </svg>
                Insured for passenger transport
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-shield" />
                </svg>
                Enhanced DBS checks for every driver and assistant
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                SEND and safeguarding training for all staff
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-wrench" />
                </svg>
                Regular servicing and MOT checks
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-star" />
                </svg>
                Clean, comfortable vehicles
              </li>
            </ul>
          </div>
        </section>
        <section className="section-spacing section-band" id="fleet">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>A 100+ vehicle fleet for every route</h2>
                <p>
                  From single-passenger school runs to 16-seater group trips.
                  Here’s a sample of what we run.
                </p>
              </div>
            </div>
            <div className="fsum">
              <span>
                <svg className="icon">
                  <use href="#i-bus" />
                </svg>
                100+ vehicles in total
              </span>
              <span>
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                20+ wheelchair accessible
              </span>
              <span>
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                4 to 16 seats
              </span>
            </div>
            <div className="fleet fleet5">
              <article className="veh">
                <div className="art pic">
                  <Image
                    src="/images/toyota-prius-saloon.jpg"
                    alt="Toyota Prius saloon used for school runs"
                    width={520}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <span className="type">Saloon</span>
                  <h3>Toyota Prius</h3>
                  <dl>
                    <dt>Seats</dt>
                    <dd>4</dd>
                    <dt>Wheelchairs</dt>
                    <dd>–</dd>
                  </dl>
                  <p>Quiet, low-emission everyday journeys</p>
                </div>
              </article>
              <article className="veh">
                <div className="art pic">
                  <Image
                    src="/images/volkswagen-sharan-mpv.jpg"
                    alt="Volkswagen MPV with six passenger seats"
                    width={520}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <span className="type">MPV</span>
                  <h3>Volkswagen Sharan</h3>
                  <dl>
                    <dt>Seats</dt>
                    <dd>6</dd>
                    <dt>Wheelchairs</dt>
                    <dd>–</dd>
                  </dl>
                  <p>Shared routes for siblings and small groups</p>
                </div>
              </article>
              <article className="veh">
                <div className="art pic">
                  <Image
                    src="/images/mercedes-benz-vito-mpv.jpg"
                    alt="Mercedes-Benz Vito eight-seater MPV"
                    width={520}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <span className="type">MPV</span>
                  <h3>Mercedes-Benz Vito</h3>
                  <dl>
                    <dt>Seats</dt>
                    <dd>8</dd>
                    <dt>Wheelchairs</dt>
                    <dd>–</dd>
                  </dl>
                  <p>Larger groups and shared routes in comfort</p>
                </div>
              </article>
              <article className="veh">
                <div className="art pic">
                  <Image
                    src="/images/peugeot-boxer-wheelchair-accessible.jpg"
                    alt="Peugeot Boxer wheelchair-accessible van"
                    width={520}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <span className="type">Wheelchair accessible</span>
                  <h3>Peugeot Boxer</h3>
                  <dl>
                    <dt>Seats</dt>
                    <dd>
                      <mark className="tbc">TBC</mark>
                    </dd>
                    <dt>Wheelchairs</dt>
                    <dd>
                      <mark className="tbc">TBC</mark>
                    </dd>
                  </dl>
                  <p>Ramp or lift access for wheelchair users</p>
                </div>
              </article>
              <article className="veh">
                <div className="art pic">
                  <Image
                    src="/images/16-seater-minibus.jpg"
                    alt="16-seater minibus for school trips and group travel"
                    width={520}
                    height={330}
                    loading="lazy"
                  />
                </div>
                <div className="body">
                  <span className="type">Minibus</span>
                  <h3>
                    16-seater minibus <span className="tag">New</span>
                  </h3>
                  <dl>
                    <dt>Seats</dt>
                    <dd>16</dd>
                    <dt>Wheelchairs</dt>
                    <dd>
                      <mark className="tbc">TBC</mark>
                    </dd>
                  </dl>
                  <p>School trips, fixtures and larger routes</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section-spacing" id="councils">
          <div className="container content-two-col">
            <div>
              <h2>Trusted by local authorities</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                For more than 15 years we’ve worked closely with local authority
                transport teams across Berkshire, Oxfordshire and Hampshire.
                Winning and keeping those contracts takes high standards, and
                anyone who books with us directly gets exactly the same.
              </p>
              <div style={{ margin: "28px 0" }}>
                <div className="clist names">
                  <div style={{ "--c": "var(--sky)" } as React.CSSProperties}>
                    <b>Reading Borough Council</b>
                  </div>
                  <div style={{ "--c": "var(--pink)" } as React.CSSProperties}>
                    <b>Wokingham Borough Council</b>
                  </div>
                  <div style={{ "--c": "var(--green)" } as React.CSSProperties}>
                    <b>West Berkshire Council</b>
                  </div>
                  <div style={{ "--c": "var(--slate)" } as React.CSSProperties}>
                    <b>Bracknell Forest Council</b>
                  </div>
                  <div style={{ "--c": "var(--cyan)" } as React.CSSProperties}>
                    <b>South Oxfordshire District Council</b>
                  </div>
                  <div style={{ "--c": "var(--lteal)" } as React.CSSProperties}>
                    <b>Fareham Borough Council</b>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary" href="#quote">
                Request a quote
              </a>
            </div>
            <div id="coverage">
              <h3>Areas we cover</h3>
              <p
                style={{
                  color: "var(--ink2)",
                  fontSize: "16px",
                  marginTop: "6px",
                }}
              >
                Our routes stretch from Newbury and Henley-on-Thames to
                Bracknell and down to Fareham, all planned from one office in
                Reading.
              </p>
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
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--ink2)",
                  marginTop: "16px",
                }}
              >
                Not sure if we reach you?{" "}
                <Link href="/contact#areas">See every town we cover</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="section-spacing" id="faq">
          <div className="container faq-layout">
            <div>
              <h2>Common questions</h2>
              <p>
                Quick answers for schools, trusts, colleges, care providers and
                families. Can’t see yours? <a href="#contact">Get in touch</a>.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>Who can book transport with you?</summary>
                <p>
                  Anyone. Schools, academy trusts, colleges, care homes, social
                  care providers and families all book with us directly, for
                  regular routes or one-off journeys. Just tell us where, when
                  and how many passengers.
                </p>
              </details>
              <details>
                <summary>Do you only transport children with SEND?</summary>
                <p>
                  No. We carry pupils at mainstream schools, college students,
                  adults, care home residents and social care clients, as well
                  as groups on trips and outings. Our SEND experience simply
                  means every passenger gets the same high standard of care.
                </p>
              </details>
              <details>
                <summary>
                  Can you provide female drivers or medically trained staff?
                </summary>
                <p>
                  Yes, on request. We can provide female drivers, passenger
                  assistants trained in epilepsy buccal medication and first
                  aid, and trained Healthcare Assistants (HCAs). Just let us
                  know when you enquire.
                </p>
              </details>
              <details>
                <summary>What vehicles do you use?</summary>
                <p>
                  Our 100+ vehicles include Toyota Prius saloons, Volkswagen
                  Sharan and Mercedes-Benz Vito MPVs, Peugeot Boxer
                  wheelchair-accessible vans and a new 16-seater minibus. We’ll
                  suggest the best fit when we quote.
                </p>
              </details>
              <details>
                <summary>How experienced is your team?</summary>
                <p>
                  We’ve provided specialist passenger transport for more than 15
                  years and transported more than 10,000 children safely in that
                  time. Our 200+ drivers and passenger assistants are enhanced
                  DBS checked and trained in SEND and safeguarding.
                </p>
              </details>
              <details>
                <summary>Which areas do you cover?</summary>
                <p>
                  We cover Berkshire, South Oxfordshire and Hampshire, including
                  Reading, Wokingham, Bracknell, Newbury, Henley-on-Thames and
                  Fareham, and we’re growing across the South East. If your area
                  isn’t listed, get in touch, as we may still be able to help.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band" id="contact">
          <div className="container contact">
            <div>
              <h2>Get a quote or ask a question</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Quotes are free, with no obligation. We reply to every enquiry
                within <mark className="tbc">[one working day]</mark>.
              </p>
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
                <select id="q-service" name="service">
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
      </LegacyScope>
    </>
  );
}

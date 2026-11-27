import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/legacy/CountUp";
import LegacyScope from "@/components/legacy/LegacyScope";
import CtaBand from "@/components/CtaBand";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Group Travel and Minibus Hire in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "16-seater minibus hire with a vetted driver for school trips, sports fixtures, proms, parties and outings, plus accessible vehicles so everyone can come.",
  alternates: { canonical: "https://schoolexpressuk.com/group-travel.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "Group Travel and Minibus Hire in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "16-seater minibus hire with a vetted driver for school trips, sports fixtures, proms, parties and outings, plus accessible vehicles so everyone can come.",
    url: "https://schoolexpressuk.com/group-travel.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Group Travel and Minibus Hire in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "16-seater minibus hire with a vetted driver for school trips, sports fixtures, proms, parties and outings, plus accessible vehicles so everyone can come.",
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
    "@type": "Service",
    name: "Group travel for trips, fixtures and special occasions",
    serviceType: "Group travel and events",
    description:
      "16-seater minibus hire with a vetted driver for school trips, sports fixtures, proms, parties and outings, plus accessible vehicles so everyone can come.",
    provider: { "@id": "https://schoolexpressuk.com/#business" },
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
        name: "Services",
        item: "https://schoolexpressuk.com/services.html",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Group travel and events",
        item: "https://schoolexpressuk.com/group-travel.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many passengers can you take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Up to 16 in our minibus. Larger groups can travel in more than one vehicle from our fleet of 100+.",
        },
      },
      {
        "@type": "Question",
        name: "Can wheelchair users travel with the group?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our wheelchair-accessible vehicles mean wheelchair users can travel with their group.",
        },
      },
      {
        "@type": "Question",
        name: "How far ahead should we book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As early as you can, especially for busy dates like proms and the end of term. [Confirm recommended notice period]",
        },
      },
      {
        "@type": "Question",
        name: "Do you do proms and parties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide safe travel for proms, parties and celebrations, as well as school trips and sports fixtures.",
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
      <LegacyScope>
        <header className="phero">
          <div className="container">
            <div className="wrap">
              <div>
                <div className="breadcrumb" role="navigation" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <Link href="/services">Services</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">Group travel and events</span>
                </div>
                <span className="label-chip">
                  <svg className="icon">
                    <use href="#i-users" />
                  </svg>
                  Group travel and events
                </span>
                <h1>Group travel for trips, fixtures and special occasions</h1>
                <p className="text-lead">
                  Safe, friendly minibus and group travel for school trips, sports
                  fixtures, proms, parties and outings, with the same vetted
                  drivers who run our daily routes.
                </p>
                <div className="button-group">
                  <Link
                    className="btn btn-primary"
                    href="/contact?service=group-travel#quote"
                  >
                    Request a quote
                  </Link>
                  <a className="btn btn-outline" href="tel:01491414040">

                    Call 01491 414040
                  </a>
                </div>
              </div>
              <div className="keyfacts" style={{ alignSelf: "center" }}>
                <div>
                  <svg className="icon">
                    <use href="#i-bus" />
                  </svg>
                  <span>
                    <b>Up to 16 seats</b>In our new minibus, with more vehicles
                    for bigger groups
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-wheel" />
                  </svg>
                  <span>
                    <b>Accessible options</b>Space for wheelchair users on the
                    trip
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-shield" />
                  </svg>
                  <span>
                    <b>Vetted drivers</b>DBS cleared and trained to keep groups
                    safe
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
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Who travels with us</h2>
                <p>
                  From a class trip to a big night out, we get everyone there
                  and back safely.
                </p>
              </div>
            </div>
            <div className="content-grid-3">
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#B7DDF9" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-cap" />
                  </svg>
                </span>
                <h3>Schools, trusts and colleges</h3>
                <p>
                  School trips, sports fixtures, discos and end-of-year events.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A6E1EC" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-star" />
                  </svg>
                </span>
                <h3>Families and groups</h3>
                <p>Proms, parties, celebrations and days out.</p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A9DEC3" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-home" />
                  </svg>
                </span>
                <h3>Care homes and clubs</h3>
                <p>
                  Accessible outings and activities for residents and members.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>Every group booking includes</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Group travel with the same standards as our daily routes, so
                organisers can relax and enjoy the day.
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>16-seater minibus</strong>, plus cars and MPVs of up
                    to 8 seats for smaller groups
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>More than one vehicle</strong> for larger groups,
                    from a fleet of 100+
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Wheelchair-accessible options</strong>, so nobody is
                    left out
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Drivers vetted to the same standard</strong> as our
                    school routes
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>An itemised quote</strong>, so you know what you're
                    paying for
                  </span>
                </li>
              </ul>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=group-travel#quote"
                >
                  Request a quote
                </Link>
                <a className="btn btn-outline" href="tel:01491414040">

                  Call 01491 414040
                </a>
              </div>
            </div>
            <figure className="figsm md:self-start! md:sticky! md:top-24! max-md:order-first">
              <Image
                src="/images/teenagers-on-group-day-out.jpg"
                alt="Group of smiling teenagers on a day out"
                loading="lazy"
                width={370}
                height={240}
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-star" />
                </svg>
                Trips, fixtures, proms and outings
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="stats proof" aria-label="School Express in numbers">
          <div className="container">
            <div className="wrap">
              <div
                className="stat"
                style={{ "--c": "var(--sky)" } as React.CSSProperties}
              >
                <CountUp end={16} suffix="" />
                <span>
                  <strong>seats</strong> in our newest minibus
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <CountUp end={100} suffix="+" />
                <span>
                  <strong>vehicles</strong> so bigger groups can travel together
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <CountUp end={200} suffix="+" />
                <span>
                  <strong>vetted drivers and assistants</strong> behind every trip
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <CountUp end={15} suffix="+" />
                <span>
                  <strong>years</strong> getting groups there and back
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Booking a group trip</h2>
                <p>Four steps from first idea to a safe return home.</p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>Send the details</b>
                <span>
                  Date, destination, group size and pick-up point, plus any
                  accessibility needs.
                </span>
              </li>
              <li>
                <b>Choose your vehicles</b>
                <span>
                  We recommend the minibus, MPVs or a mix, depending on numbers.
                </span>
              </li>
              <li>
                <b>Lock in the timings</b>
                <span>
                  We agree outward and return times with the organiser before
                  the day.
                </span>
              </li>
              <li>
                <b>Enjoy the day</b>
                <span>
                  Your driver gets everyone there and brings the whole group
                  home.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <FaqSection
          heading="Group travel questions"
          description={
            <>
              Organising transport for a group? These answers cover the
              basics. <Link href="/contact">Ask us</Link> if you need more.
            </>
          }
          items={[
            {
              question: "How many passengers can you take?",
              answer:
                "Up to 16 in our minibus. Larger groups can travel in more than one vehicle from our fleet of 100+.",
            },
            {
              question: "Can wheelchair users travel with the group?",
              answer:
                "Yes. Our wheelchair-accessible vehicles mean wheelchair users can travel with their group.",
            },
            {
              question: "How far ahead should we book?",
              answer: (
                <>
                  As early as you can, especially for busy dates like proms and
                  the end of term.{" "}
                  <mark className="tbc">
                    [Confirm recommended notice period]
                  </mark>
                </>
              ),
            },
            {
              question: "Do you do proms and parties?",
              answer:
                "Yes. We provide safe travel for proms, parties and celebrations, as well as school trips and sports fixtures.",
            },
          ]}
        />
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Other journeys we can help with</h2>
              </div>
              <Link className="link-arrow" href="/services">
                All services{" "}
                <svg className="icon">
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <div className="svc5">
              <Link
                className="sv"
                href="/school-college-transport"
                style={{ "--c": "var(--sky)" } as React.CSSProperties}
              >
                <Image
                  src="/images/pupils-walking-to-school-transport.jpg"
                  alt="Pupils with backpacks walking towards their school transport"
                  width={370}
                  height={240}
                  loading="lazy"
                />
                <div>
                  <b>Schools, trusts and colleges</b>
                  <span>
                    Turn a one-off trip into regular transport with a daily
                    school run.
                  </span>
                  <em>
                    Find out more{" "}
                    <svg className="icon">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="sv"
                href="/adult-social-care-transport"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <Image
                  src="/images/carers-with-older-woman-in-wheelchair.jpg"
                  alt="Two carers smiling with an older woman in a wheelchair"
                  width={370}
                  height={240}
                  loading="lazy"
                />
                <div>
                  <b>Adults and social care</b>
                  <span>
                    Regular journeys and outings for care home residents.
                  </span>
                  <em>
                    Find out more{" "}
                    <svg className="icon">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="sv"
                href="/wheelchair-accessible-transport"
                style={{ "--c": "var(--green)" } as React.CSSProperties}
              >
                <Image
                  src="/images/wheelchair-user-boarding-van-ramp.jpg"
                  alt="Wheelchair user boarding a van by its ramp"
                  width={370}
                  height={240}
                  loading="lazy"
                />
                <div>
                  <b>Wheelchair accessible</b>
                  <span>
                    Accessible vehicles so wheelchair users can join every trip.
                  </span>
                  <em>
                    Find out more{" "}
                    <svg className="icon">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="sv"
                href="/send-transport"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <Image
                  src="/images/boy-in-wheelchair-with-basketball.jpg"
                  alt="Boy in a wheelchair holding a basketball and smiling"
                  width={370}
                  height={240}
                  loading="lazy"
                />
                <div>
                  <b>SEND and additional needs</b>
                  <span>
                    Calm, well-planned trips for groups that include pupils with
                    SEND.
                  </span>
                  <em>
                    Find out more{" "}
                    <svg className="icon">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <CtaBand
          heading="Planning a trip or event?"
          body="Give us the date, destination and group size and we'll send a no-obligation quote."
          quoteHref="/contact?service=group-travel#quote"
        />
      </LegacyScope>
    </>
  );
}

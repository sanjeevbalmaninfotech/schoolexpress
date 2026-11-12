import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/legacy/CountUp";
import LegacyScope from "@/components/legacy/LegacyScope";

export const metadata: Metadata = {
  title: {
    absolute:
      "Transport Services for Schools, SEND, Care & Groups | School Express",
  },
  description:
    "Five transport services from one team: schools and colleges, SEND, wheelchair-accessible, adult and social care, and group travel across Berkshire, Oxfordshire and Hampshire.",
  alternates: { canonical: "https://schoolexpressuk.com/services.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "Transport Services for Schools, SEND, Care & Groups | School Express",
    description:
      "Five transport services from one team: schools and colleges, SEND, wheelchair-accessible, adult and social care, and group travel across Berkshire, Oxfordshire and Hampshire.",
    url: "https://schoolexpressuk.com/services.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transport Services for Schools, SEND, Care & Groups | School Express",
    description:
      "Five transport services from one team: schools and colleges, SEND, wheelchair-accessible, adult and social care, and group travel across Berkshire, Oxfordshire and Hampshire.",
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
        name: "Services",
        item: "https://schoolexpressuk.com/services.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which service should I choose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with the passenger. If they need extra support or travel in a wheelchair, our SEND or wheelchair-accessible services are the best fit. For everyday school runs, care journeys or trips, pick the matching service, or simply tell us what you need and we'll recommend one.",
        },
      },
      {
        "@type": "Question",
        name: "Can one booking cover more than one service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many schools and care homes use us for regular routes and occasional trips, and we set them up together so you deal with one team.",
        },
      },
      {
        "@type": "Question",
        name: "Do you take one-off bookings as well as regular routes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Alongside term-time and weekly routes, we cover single appointments, events and days out.",
        },
      },
      {
        "@type": "Question",
        name: "Do you run journeys during the school holidays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Care, group and one-off journeys can run outside term time. [Confirm holiday availability]",
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
          <div className="wrap">
            <div>
              <div className="crumbs" role="navigation" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Services</span>
              </div>
              <span className="chip">
                <svg className="ic">
                  <use href="#i-bus" />
                </svg>
                Our services
              </span>
              <h1>Transport for every passenger and every journey</h1>
              <p className="lead">
                School and college runs, adult and social care journeys, group
                travel, wheelchair-accessible and SEND transport across
                Berkshire, Oxfordshire, Hampshire and the South East. Whichever
                you choose, the same experienced team plans and runs it.
              </p>
              <div className="ctas">
                <Link className="btn btn-p" href="/contact#quote">
                  Request a quote
                </Link>
                <a className="btn btn-o" href="tel:01491414040">
                  <svg className="ic" style={{ width: "20px", height: "20px" }}>
                    <use href="#i-phone" />
                  </svg>
                  Call 01491 414040
                </a>
              </div>
            </div>
            <div className="keyfacts">
              <div>
                <svg className="ic">
                  <use href="#i-users" />
                </svg>
                <span>
                  <b>For everyone</b>Families, schools, trusts, colleges, care
                  homes and social care
                </span>
              </div>
              <div>
                <svg className="ic">
                  <use href="#i-bus" />
                </svg>
                <span>
                  <b>100+ vehicles</b>Saloons, MPVs, accessible vans and a
                  minibus
                </span>
              </div>
              <div>
                <svg className="ic">
                  <use href="#i-wheel" />
                </svg>
                <span>
                  <b>20+ accessible vans</b>Ramp and lift access, ready for any
                  service
                </span>
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
        <section className="sec">
          <div className="wrap">
            <div className="svlist">
              <Link
                className="svrow"
                href="/school-college-transport"
                style={{ "--c": "var(--sky)" } as React.CSSProperties}
              >
                <Image
                  src="/images/pupils-walking-to-school-transport.jpg"
                  alt="Pupils with backpacks walking towards their school transport"
                  loading="lazy"
                  width={370}
                  height={240}
                />
                <div>
                  <h3>Schools, trusts and colleges</h3>
                  <p>
                    Regular runs to primary, secondary, special and independent
                    schools, academies and colleges, plus minibuses for trips.
                  </p>
                  <div className="for">
                    <span>For</span>
                    <i>Parents and carers</i>
                    <i>Schools and trusts</i>
                    <i>Colleges</i>
                  </div>
                  <ul>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      The same face at the door each day
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Fits school start and finish times
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Minibus for trips and fixtures
                    </li>
                  </ul>
                  <em>
                    Find out more{" "}
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="svrow"
                href="/adult-social-care-transport"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <Image
                  src="/images/carers-with-older-woman-in-wheelchair.jpg"
                  alt="Two carers smiling with an older woman in a wheelchair"
                  loading="lazy"
                  width={370}
                  height={240}
                />
                <div>
                  <h3>Adults and social care</h3>
                  <p>
                    Weekly day-centre routes, medical appointments and outings
                    for adults and care home residents.
                  </p>
                  <div className="for">
                    <span>For</span>
                    <i>Care homes</i>
                    <i>Social care providers</i>
                    <i>Adults and families</i>
                  </div>
                  <ul>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Weekly routes or single trips
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Accessible vehicles on every booking
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      HCAs available
                    </li>
                  </ul>
                  <em>
                    Find out more{" "}
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="svrow"
                href="/group-travel"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <Image
                  src="/images/teenagers-on-group-day-out.jpg"
                  alt="Group of smiling teenagers on a day out"
                  loading="lazy"
                  width={370}
                  height={240}
                />
                <div>
                  <h3>Group travel and events</h3>
                  <p>
                    Our new 16-seater minibus and wider fleet for class trips,
                    fixtures, proms and celebrations.
                  </p>
                  <div className="for">
                    <span>For</span>
                    <i>Schools and trusts</i>
                    <i>Families and groups</i>
                    <i>Clubs and care homes</i>
                  </div>
                  <ul>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      16 seats per minibus
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Extra vehicles for big groups
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Accessible seating
                    </li>
                  </ul>
                  <em>
                    Find out more{" "}
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="svrow"
                href="/wheelchair-accessible-transport"
                style={{ "--c": "var(--green)" } as React.CSSProperties}
              >
                <Image
                  src="/images/wheelchair-user-boarding-van-ramp.jpg"
                  alt="Wheelchair user boarding a van by its ramp"
                  loading="lazy"
                  width={370}
                  height={240}
                />
                <div>
                  <h3>Wheelchair accessible</h3>
                  <p>
                    Ramp and lift-equipped vehicles so passengers of any age can
                    travel in their own chair.
                  </p>
                  <div className="for">
                    <span>For</span>
                    <i>Families</i>
                    <i>Care homes</i>
                    <i>Special schools</i>
                  </div>
                  <ul>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      No need to transfer
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Seats for companions
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      All ages, all journeys
                    </li>
                  </ul>
                  <em>
                    Find out more{" "}
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
              <Link
                className="svrow"
                href="/send-transport"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <Image
                  src="/images/boy-in-wheelchair-with-basketball.jpg"
                  alt="Boy in a wheelchair holding a basketball and smiling"
                  loading="lazy"
                  width={370}
                  height={240}
                />
                <div>
                  <h3>SEND and additional needs</h3>
                  <p>
                    Passenger assistants, written travel plans and a consistent
                    team for children and adults with SEND.
                  </p>
                  <div className="for">
                    <span>For</span>
                    <i>Parents and carers</i>
                    <i>Schools and SEN units</i>
                    <i>Care providers</i>
                  </div>
                  <ul>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Support from a trained assistant
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      A written travel plan
                    </li>
                    <li>
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                      Female drivers if you prefer
                    </li>
                  </ul>
                  <em>
                    Find out more{" "}
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </em>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: "0" }}>
          <div className="wrap">
            <div className="onreq-band">
              <h2>Available on request</h2>
              <ul>
                <li>
                  <svg className="ic">
                    <use href="#i-female" />
                  </svg>
                  Female drivers
                </li>
                <li>
                  <svg className="ic">
                    <use href="#i-heart" />
                  </svg>
                  Epilepsy buccal medication and first-aid-trained assistants
                </li>
                <li>
                  <svg className="ic">
                    <use href="#i-plus" />
                  </svg>
                  Trained Healthcare Assistants (HCAs)
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="stats proof" aria-label="School Express in numbers">
          <div className="wrap">
            <div
              className="stat"
              style={{ "--c": "var(--sky)" } as React.CSSProperties}
            >
              <CountUp end={15} suffix="+" />
              <span>
                <strong>years</strong> in passenger transport, with SEND at the
                core
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--pink)" } as React.CSSProperties}
            >
              <CountUp end={10000} suffix="+" />
              <span>
                <strong>children</strong> carried safely across our services
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--cyan)" } as React.CSSProperties}
            >
              <CountUp end={100} suffix="+" />
              <span>
                <strong>vehicles</strong> covering all five services
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--slate)" } as React.CSSProperties}
            >
              <CountUp end={200} suffix="+" />
              <span>
                <strong>team members</strong> vetted and trained to support
                every passenger
              </span>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap">
            <div className="head">
              <div>
                <h2>How booking works</h2>
                <p>From first call to first journey, in four simple steps.</p>
              </div>
            </div>
            <ol className="steps">
              <li>
                <b>Tell us what you need</b>
                <span>
                  Call us or send the form: where, when, how many passengers,
                  and any access or care needs.
                </span>
              </li>
              <li>
                <b>Get a clear quote</b>
                <span>
                  Free and with no obligation, explaining exactly what the price
                  includes.
                </span>
              </li>
              <li>
                <b>We match the right team</b>
                <span>
                  The right vehicle, a vetted driver and, where needed, a
                  trained passenger assistant.
                </span>
              </li>
              <li>
                <b>Travel with confidence</b>
                <span>
                  Familiar faces on regular routes, and if anything changes,
                  you’ll hear from us first.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <section className="sec band" id="faq">
          <div className="wrap faqwrap">
            <div>
              <h2>Choosing the right service</h2>
              <p>
                Weighing up your options? These answers will help you choose,
                and our office is always happy to advise.{" "}
                <Link href="/contact">Get in touch</Link>.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>Which service should I choose?</summary>
                <p>
                  Start with the passenger. If they need extra support or travel
                  in a wheelchair, our SEND or wheelchair-accessible services
                  are the best fit. For everyday school runs, care journeys or
                  trips, pick the matching service, or simply tell us what you
                  need and we’ll recommend one.
                </p>
              </details>
              <details>
                <summary>Can one booking cover more than one service?</summary>
                <p>
                  Yes. Many schools and care homes use us for regular routes and
                  occasional trips, and we set them up together so you deal with
                  one team.
                </p>
              </details>
              <details>
                <summary>
                  Do you take one-off bookings as well as regular routes?
                </summary>
                <p>
                  Yes. Alongside term-time and weekly routes, we cover single
                  appointments, events and days out.
                </p>
              </details>
              <details>
                <summary>
                  Do you run journeys during the school holidays?
                </summary>
                <p>
                  Care, group and one-off journeys can run outside term time.{" "}
                  <mark className="tbc">[Confirm holiday availability]</mark>
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="ctaband">
          <div className="tiles" aria-hidden="true">
            <i style={{ background: "var(--sky)" }}></i>
            <i style={{ background: "var(--pink)" }}></i>
            <i style={{ background: "var(--green)" }}></i>
            <i style={{ background: "var(--slate)" }}></i>
            <i style={{ background: "var(--cyan)" }}></i>
            <i style={{ background: "var(--lteal)" }}></i>
          </div>
          <div className="wrap">
            <div>
              <h2>Not sure which service you need?</h2>
              <p>
                Tell us who’s travelling, where and when, and we’ll recommend
                the right option. There’s no charge for a quote.
              </p>
            </div>
            <div className="ctas">
              <Link className="btn btn-w" href="/contact#quote">
                Request a quote
              </Link>
              <a className="btn btn-ow" href="tel:01491414040">
                <svg className="ic" style={{ width: "20px", height: "20px" }}>
                  <use href="#i-phone" />
                </svg>
                Call 01491 414040
              </a>
            </div>
          </div>
        </section>
      </LegacyScope>
    </>
  );
}

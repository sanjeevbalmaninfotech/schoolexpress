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
      "School, Trust & College Transport in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "Daily transport for schools, academy trusts and colleges across Berkshire, Oxfordshire and Hampshire. Familiar drivers, trained passenger assistants and minibuses for trips.",
  alternates: {
    canonical: "https://schoolexpressuk.com/school-college-transport.html",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "School, Trust & College Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Daily transport for schools, academy trusts and colleges across Berkshire, Oxfordshire and Hampshire. Familiar drivers, trained passenger assistants and minibuses for trips.",
    url: "https://schoolexpressuk.com/school-college-transport.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "School, Trust & College Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Daily transport for schools, academy trusts and colleges across Berkshire, Oxfordshire and Hampshire. Familiar drivers, trained passenger assistants and minibuses for trips.",
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
    name: "School, trust and college transport",
    serviceType: "School, academy trust and college transport",
    description:
      "Daily transport for schools, academy trusts and colleges across Berkshire, Oxfordshire and Hampshire. Familiar drivers, trained passenger assistants and minibuses for trips.",
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
        name: "Schools, trusts and colleges",
        item: "https://schoolexpressuk.com/school-college-transport.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you work with academy trusts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We work with individual schools and multi-academy trusts, whether you need transport for one school or several.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with private and independent schools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We arrange regular school runs for families at private and independent schools, as well as state schools and colleges.",
        },
      },
      {
        "@type": "Question",
        name: "Can siblings or nearby pupils share a journey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Shared routes for siblings or pupils who live close together are common, and we'll suggest the right vehicle when we quote.",
        },
      },
      {
        "@type": "Question",
        name: "Can one route serve more than one school?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We often plan routes that drop pupils at several schools, which works well for trusts with more than one site.",
        },
      },
      {
        "@type": "Question",
        name: "What if my child is ill and won't be travelling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call or email the office as early as you can, ideally before the pick-up time, and we'll let the driver know.",
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
                <div className="text-[#ACD0D8]" role="navigation" aria-label="Breadcrumb">
                  <Link href="/" className="text-[#ACD0D8]!">
                    Home
                  </Link>

                  <span aria-hidden="true">/</span>

                  <Link href="/services" className="text-[#ACD0D8]!">
                    Services
                  </Link>

                  <span aria-hidden="true">/</span>

                  <span className="text-[#ACD0D8]">
                    Schools, trusts and colleges
                  </span>
                </div>
                <span className="label-chip">
                  <img
                    src="/services/icons/Schooltrustcollege.svg"
                    alt=""
                    className="icon"
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                  School, trust and college transport
                </span>
                <h1>School, trust and college transport you can count on</h1>
                <p className="text-lead">
                  Reliable daily home-to-school and college runs across Berkshire,
                  Oxfordshire, Hampshire and the South East, with a familiar
                  driver, trained passenger assistants when they're needed, and
                  minibuses for trips and fixtures.
                </p>
                <div className="button-group">
                  <Link
                    className="btn btn-primary"
                    href="/contact?service=school-college-transport#quote"
                  >
                    Request a quote
                  </Link>
                  <a className="btn btn-outline" href="tel:01491414040">
                    <svg className="icon" style={{ width: "20px", height: "20px" }}>
                      <use href="#i-phone" />
                    </svg>
                    Call 01491 414040
                  </a>
                </div>
              </div>
              <div className="keyfacts" style={{ alignSelf: "center" }}>
                <div>
                  <img
                    src="/services/icons/Familiarfaces.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Familiar faces</b>One regular driver for each route
                  </span>
                </div>

                <div>
                  <img
                    src="/services/icons/Everytypeschool.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Every type of school</b>State, private and independent
                    schools, academy trusts and colleges
                  </span>
                </div>

                <div>
                  <img
                    src="/services/icons/Tripsfixtures.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Trips and fixtures</b>16-seater minibus hire
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
                <h2>Who books our school and college runs</h2>
                <p>
                  Whether it's one pupil or pupils across several schools, we
                  plan the journey around the people travelling.
                </p>
              </div>
            </div>
            <div className="content-grid-3">
              <div className="content-card">
                <img
                  src="/services/icons/Parentsandcarers.svg"
                  alt=""
                  className="icon"
                  style={{ width: "42px", height: "42px" }}
                />
                <h3>Parents and carers</h3>
                <p>
                  Private school runs that start and end the day calmly,
                  including shared routes for siblings and nearby pupils.
                </p>
              </div>

              <div className="content-card">
                <img
                  src="/services/icons/Schoolsacademy.svg"
                  alt=""
                  className="icon"
                  style={{ width: "42px", height: "42px" }}
                />
                <h3>Schools and academy trusts</h3>
                <p>
                  Regular routes, trips and sports fixtures for individual
                  schools and multi-academy trusts.
                </p>
              </div>

              <div className="content-card">
                <img
                  src="/services/icons/Colleges.svg"
                  alt=""
                  className="icon"
                  style={{ width: "42px", height: "42px" }}
                />
                <h3>Colleges</h3>
                <p>
                  Dependable daily travel for college students, including those
                  who need a little extra support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>Every school run includes</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                For many children, the ride to school sets the tone for the
                whole day. That's why we focus on the small things.
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>One familiar driver</strong>, assigned to each
                    regular route
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Routes planned around bell times</strong>, with
                    families and schools kept informed if anything changes
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Passenger assistants on hand</strong> for children
                    who need extra support
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Vetted drivers</strong> with enhanced DBS checks and
                    safeguarding training
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Safe handover</strong>, from the moment pupils step
                    in until they're at the school gate or home
                  </span>
                </li>
              </ul>
              <div className="onreq">
                <b>Extra support on request</b>
                <ul>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Female drivers for school and college runs
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    A trained assistant who can give epilepsy buccal medication
                    and first aid
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    An HCA for pupils with healthcare needs
                  </li>
                </ul>
              </div>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=school-college-transport#quote"
                >
                  Request a quote
                </Link>
                <a className="btn btn-outline" href="tel:01491414040">
                  <svg className="icon" style={{ width: "20px", height: "20px" }}>
                    <use href="#i-phone" />
                  </svg>
                  Call 01491 414040
                </a>
              </div>
            </div>
            <figure className="figsm md:self-start! md:sticky! md:top-24! max-md:order-first">
              <Image
                src="/services/image/serviceSchool.jpg"
                alt="Pupils with backpacks walking towards their school transport"
                loading="lazy"
                width={370}
                height={240}
              />
              <figcaption>
                <img
                  src="/services/icons/Timedfitthe school.svg"
                  alt=""
                  className="icon"
                  style={{ width: "25px", height: "25px", objectFit: "contain" }}
                />                Timed to fit the school day
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
                <CountUp end={15} suffix="+" />
                <span>
                  <strong>years</strong> running home-to-school routes
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <CountUp end={10000} suffix="+" />
                <span>
                  <strong>pupils</strong> taken to school and college safely
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <CountUp end={16} suffix="" />
                <span>
                  <strong>seats</strong> in our largest vehicle for trips and
                  fixtures
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <CountUp end={200} suffix="+" />
                <span>
                  <strong>drivers and assistants</strong> ready for new school
                  routes
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Setting up a school run</h2>
                <p>
                  Most straightforward school runs are ready to start within a
                  week.
                </p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>Share the school and times</b>
                <span>
                  Tell us the school or college, the pick-up address and the
                  start and finish times you need.
                </span>
              </li>
              <li>
                <b>Get your quote</b>
                <span>
                  We suggest the right vehicle for the number of pupils and send
                  a clear, free price.
                </span>
              </li>
              <li>
                <b>Confirm the plan</b>
                <span>
                  Once you accept, we confirm the driver, pick-up time and any
                  passenger assistant.
                </span>
              </li>
              <li>
                <b>Start the school year</b>
                <span>
                  Your driver arrives at the agreed time, and the office keeps
                  you posted if plans change.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <FaqSection
          heading="School and college transport questions"
          description={
            <>
              The things families, schools and trusts usually ask before
              booking. For anything else,{" "}
              <Link href="/contact">just ask</Link>.
            </>
          }
          items={[
            {
              question: "Do you work with academy trusts?",
              answer:
                "Yes. We work with individual schools and multi-academy trusts, whether you need transport for one school or several.",
            },
            {
              question: "Do you work with private and independent schools?",
              answer:
                "Yes. We arrange regular school runs for families at private and independent schools, as well as state schools and colleges.",
            },
            {
              question: "Can siblings or nearby pupils share a journey?",
              answer:
                "Yes. Shared routes for siblings or pupils who live close together are common, and we’ll suggest the right vehicle when we quote.",
            },
            {
              question: "Can one route serve more than one school?",
              answer:
                "Yes. We often plan routes that drop pupils at several schools, which works well for trusts with more than one site.",
            },
            {
              question: "What if my child is ill and won’t be travelling?",
              answer:
                "Call or email the office as early as you can, ideally before the pick-up time, and we’ll let the driver know.",
            },
          ]}
        />
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Also popular with schools and families</h2>
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
                    Extra support for pupils with an EHCP or additional needs,
                    from a team trained in SEND.
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
                    Accessible school runs, so pupils who use a wheelchair
                    travel with their classmates.
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
                href="/group-travel"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <Image
                  src="/images/teenagers-on-group-day-out.jpg"
                  alt="Group of smiling teenagers on a day out"
                  width={370}
                  height={240}
                  loading="lazy"
                />
                <div>
                  <b>Group travel and events</b>
                  <span>
                    A driver and minibus for your next class trip or away
                    fixture.
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
                    Care home and day-centre journeys for adults, with the same
                    careful approach.
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
        <div className="">
          <CtaBand
            heading="Need a school or college run?"
            body="Send us the school, pick-up postcode and times and we'll reply with a quote within one working day."
            quoteHref="/contact?service=school-college-transport#quote"
          />
        </div>

      </LegacyScope>
    </>
  );
}

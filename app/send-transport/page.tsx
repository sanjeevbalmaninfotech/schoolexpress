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
      "SEND School Transport in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "SEND transport planned around each passenger, from a team councils have trusted for 15+ years. Passenger assistants, written travel plans and female drivers on request.",
  alternates: { canonical: "https://schoolexpressuk.com/send-transport.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "SEND School Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "SEND transport planned around each passenger, from a team councils have trusted for 15+ years. Passenger assistants, written travel plans and female drivers on request.",
    url: "https://schoolexpressuk.com/send-transport.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SEND School Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "SEND transport planned around each passenger, from a team councils have trusted for 15+ years. Passenger assistants, written travel plans and female drivers on request.",
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
    name: "SEND transport from a team that does it every day",
    serviceType: "SEND and additional needs",
    description:
      "SEND transport planned around each passenger, from a team councils have trusted for 15+ years. Passenger assistants, written travel plans and female drivers on request.",
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
        name: "SEND and additional needs",
        item: "https://schoolexpressuk.com/send-transport.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you provide a passenger assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our trained passenger assistants, male or female, travel with passengers who need extra support, and we match them to each passenger's needs.",
        },
      },
      {
        "@type": "Question",
        name: "Can your team support passengers with epilepsy or other medical needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. On request, we can send a passenger assistant trained to give epilepsy buccal medication and first aid, or a trained Healthcare Assistant for more complex needs. Share the care plan with us when you enquire.",
        },
      },
      {
        "@type": "Question",
        name: "My child's transport is arranged by the council. Can I book you directly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your child is eligible for council-funded transport, routes are arranged through your council's transport team. For journeys the council doesn't cover, such as private school runs, activities or appointments, you can book with us directly.",
        },
      },
      {
        "@type": "Question",
        name: "What happens before the first journey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We agree a written plan with the family covering pick-up, drop-off and anything the team needs to know, so everyone is ready from day one.",
        },
      },
      {
        "@type": "Question",
        name: "How do you help a passenger who finds change difficult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We keep the same driver and assistant wherever possible. If someone new has to cover, we tell the family first so it's never a surprise.",
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
                  <span aria-current="page">SEND and additional needs</span>
                </div>
                <span className="label-chip">
                  <svg className="icon">
                    <use href="#i-heart" />
                  </svg>
                  SEND and additional needs transport
                </span>
                <h1>SEND transport from a team that does it every day</h1>
                <p className="text-lead">
                  Councils across Berkshire, Oxfordshire and Hampshire have relied
                  on us for SEND routes since we began. Families, schools,
                  colleges and care providers can book that same expertise
                  directly, with journeys planned around each passenger.
                </p>
                <div className="button-group">
                  <Link
                    className="btn btn-primary"
                    href="/contact?service=send-transport#quote"
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
                    <use href="#i-medal" />
                  </svg>
                  <span>
                    <b>15+ years of SEND routes</b>Trusted by councils across
                    Berkshire, Oxfordshire and Hampshire
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-heart" />
                  </svg>
                  <span>
                    <b>Dedicated assistants</b>Male or female, chosen to suit each
                    passenger
                  </span>
                </div>
                <div>
                  <svg className="icon">
                    <use href="#i-doc" />
                  </svg>
                  <span>
                    <b>Planned around the passenger</b>Routines, needs and
                    handovers written down
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
                <h2>Who we support</h2>
                <p>
                  Specialist transport for children and adults with special
                  educational needs and disabilities.
                </p>
              </div>
            </div>
            <div className="content-grid-3">
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#FAC9C6" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-heart" />
                  </svg>
                </span>
                <h3>Parents and carers</h3>
                <p>
                  Private journeys to school, college, therapy or activities,
                  with the patience and routine your child needs.
                </p>
              </div>
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
                  Transport for pupils and students with additional needs, for
                  daily routes, trips and activities.
                </p>
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
                <h3>Care providers</h3>
                <p>
                  Calm, supported travel for the people you care for, with staff
                  trained in SEND and safeguarding.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>Why families trust us with SEND journeys</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                SEND journeys need patience, specialist training and planning
                that starts long before pick-up. That’s the work we’ve done for
                councils for more than 15 years.
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Same driver and assistant on regular routes</strong>
                    , so routines stay calm and predictable
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Matched passenger assistants</strong>, male or
                    female, chosen for each passenger’s needs
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>A written plan for each passenger</strong>, agreed
                    with the family before the first journey
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Specialist SEND and safeguarding training</strong>{" "}
                    for drivers and assistants, all enhanced DBS checked
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Wheelchair access when needed</strong>, from the
                    area’s largest accessible fleet
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Clear communication</strong>, with a call from the
                    office the moment plans change
                  </span>
                </li>
              </ul>
              <div className="onreq">
                <b>On request for SEND journeys</b>
                <ul>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Female drivers when a family prefers one
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Assistants trained to give epilepsy buccal medication, with
                    first aid training
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Trained HCAs for complex health needs
                  </li>
                </ul>
              </div>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=send-transport#quote"
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
                className="crop-top"
                src="/images/smiling-girl-in-wheelchair.jpg"
                alt="Smiling girl sitting in her wheelchair outdoors"
                loading="lazy"
                width={896}
                height={673}
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                Patience and routine on every run
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
                  <strong>years</strong> delivering council SEND routes
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <CountUp end={200} suffix="+" />
                <span>
                  <strong>staff</strong> with SEND and safeguarding training
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <CountUp end={20} suffix="+" />
                <span>
                  <strong>accessible vehicles</strong> for pupils who travel in
                  their chair
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <CountUp end={10000} suffix="+" />
                <span>
                  <strong>young passengers</strong> supported since we began
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Before the first SEND journey</h2>
                <p>Good SEND transport starts well before the first pick-up.</p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>Tell us about the passenger</b>
                <span>
                  Routines, communication, mobility, medical needs and anything
                  that helps them feel settled.
                </span>
              </li>
              <li>
                <b>Agree a travel plan</b>
                <span>
                  We write down pick-up, drop-off and support details and agree
                  them with you.
                </span>
              </li>
              <li>
                <b>Match the team</b>
                <span>
                  We choose the vehicle, driver and passenger assistant best
                  suited to the passenger.
                </span>
              </li>
              <li>
                <b>Keep it consistent</b>
                <span>
                  The same faces each day, with any new team member introduced
                  to the family in advance.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <FaqSection
          heading="SEND transport questions"
          description={
            <>
              Families and schools often have questions before the first
              journey. These are the ones we hear most.{" "}
              <Link href="/contact">Ask us anything else</Link>.
            </>
          }
          items={[
            {
              question: "Can you provide a passenger assistant?",
              answer:
                "Yes. Our trained passenger assistants, male or female, travel with passengers who need extra support, and we match them to each passenger’s needs.",
            },
            {
              question:
                "Can your team support passengers with epilepsy or other medical needs?",
              answer:
                "Yes. On request, we can send a passenger assistant trained to give epilepsy buccal medication and first aid, or a trained Healthcare Assistant for more complex needs. Share the care plan with us when you enquire.",
            },
            {
              question:
                "My child’s transport is arranged by the council. Can I book you directly?",
              answer:
                "If your child is eligible for council-funded transport, routes are arranged through your council’s transport team. For journeys the council doesn’t cover, such as private school runs, activities or appointments, you can book with us directly.",
            },
            {
              question: "What happens before the first journey?",
              answer:
                "We agree a written plan with the family covering pick-up, drop-off and anything the team needs to know, so everyone is ready from day one.",
            },
            {
              question:
                "How do you help a passenger who finds change difficult?",
              answer:
                "We keep the same driver and assistant wherever possible. If someone new has to cover, we tell the family first so it’s never a surprise.",
            },
          ]}
        />
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Related services</h2>
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
                    Accessible vans for passengers who use a wheelchair, run by
                    the same trusted team.
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
                    Daily runs for siblings and classmates, booked alongside a
                    SEND route.
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
                    Continued support for young adults moving on to day services
                    and activities.
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
                    Accessible outings and trips, planned around everyone in the
                    group.
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
          heading="Planning transport for a passenger with SEND?"
          body="Talk to us about the passenger's needs and we'll suggest a vehicle, a team and a clear price."
          quoteHref="/contact?service=send-transport#quote"
        />
      </LegacyScope>
    </>
  );
}

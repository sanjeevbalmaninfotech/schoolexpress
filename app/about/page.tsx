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
      "About School Express | 15+ Years of Safe Transport in the South East",
  },
  description:
    "Reading-based School Express has run specialist passenger transport for 15+ years, with 200+ trained drivers and passenger assistants and 20+ wheelchair-accessible vehicles.",
  alternates: { canonical: "https://schoolexpressuk.com/about.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "About School Express | 15+ Years of Safe Transport in the South East",
    description:
      "Reading-based School Express has run specialist passenger transport for 15+ years, with 200+ trained drivers and passenger assistants and 20+ wheelchair-accessible vehicles.",
    url: "https://schoolexpressuk.com/about.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About School Express | 15+ Years of Safe Transport in the South East",
    description:
      "Reading-based School Express has run specialist passenger transport for 15+ years, with 200+ trained drivers and passenger assistants and 20+ wheelchair-accessible vehicles.",
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
        name: "About us",
        item: "https://schoolexpressuk.com/about.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is School Express based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our office is at 3 Barrett Court on Cardiff Road in Reading. The team there plans every route and is on hand on weekdays from 7am.",
        },
      },
      {
        "@type": "Question",
        name: "How long has School Express been running?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For more than 15 years. In that time we've carried over 10,000 children and grown to a fleet of more than 100 vehicles.",
        },
      },
      {
        "@type": "Question",
        name: "What makes you different from a regular taxi firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialise in transporting children and vulnerable passengers. Our drivers and passenger assistants are enhanced DBS checked, trained in SEND and safeguarding, and assigned to regular routes, so passengers see a familiar face. Extra support, such as female drivers or medically trained assistants, is available on request.",
        },
      },
      {
        "@type": "Question",
        name: "How do you choose your drivers and passenger assistants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Patience and kindness come first. Everyone then passes an enhanced DBS check and completes SEND and safeguarding training before they work with passengers.",
        },
      },
      {
        "@type": "Question",
        name: "Which councils do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with Reading Borough Council, Wokingham Borough Council, West Berkshire Council, Bracknell Forest Council, South Oxfordshire District Council and Fareham Borough Council.",
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
        <header className="page-hero">
          <div className="container">
            <div>
              <div className="breadcrumb" role="navigation" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">About us</span>
              </div>
              <span className="label-chip">
                <svg className="icon">
                  <use href="#i-heart" />
                </svg>
                About School Express
              </span>
              <h1>
                More than 15 years of getting people where they need to be,
                safely
              </h1>
              <p className="text-lead">
                A Reading-based transport company with 200+ trained drivers and
                passenger assistants, a fleet of 100+ vehicles, and a team that
                genuinely cares about every passenger.
              </p>
              <div className="button-group">
                <Link className="btn btn-primary" href="/contact#quote">
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
            <div className="keyfacts">
              <div>
                <svg className="icon">
                  <use href="#i-pin" />
                </svg>
                <span>
                  <b>Reading office</b>3 Barrett Court, 70 Cardiff Road
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-home" />
                </svg>
                <span>
                  <b>Trusted by councils</b>Reading, Wokingham, West Berkshire,
                  Bracknell Forest, South Oxfordshire and Fareham
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                <span>
                  <b>Our team</b>200+ drivers and passenger assistants
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
        <section
          className="stats"
          aria-labelledby="stats-h"
          style={{ marginTop: "0" }}
        >
          <h2 id="stats-h" className="vh">
            Our story in numbers
          </h2>
          <div className="container">
            <div
              className="stat"
              style={{ "--c": "var(--sky)" } as React.CSSProperties}
            >
              <CountUp end={15} suffix="+" />
              <span>
                <strong>years on the road</strong>, serving families, schools
                and councils
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--pink)" } as React.CSSProperties}
            >
              <CountUp end={10000} suffix="+" />
              <span>
                <strong>children</strong> whoâ€™ve travelled with us safely
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--cyan)" } as React.CSSProperties}
            >
              <CountUp end={100} suffix="+" />
              <span>
                <strong>vehicles</strong>, from 4-seat saloons to 16-seat
                minibuses
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--green)" } as React.CSSProperties}
            >
              <CountUp end={20} suffix="+" />
              <span>
                <strong>accessible vehicles</strong> for passengers who use a
                wheelchair
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--slate)" } as React.CSSProperties}
            >
              <CountUp end={200} suffix="+" />
              <span>
                <strong>people</strong> driving and supporting passengers every
                school day
              </span>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container content-split">
            <div>
              <h2>The story behind School Express</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                School Express began with a simple belief: families should never
                have to worry about how the people they love get where they need
                to be.
              </p>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                More than 15 years and 10,000 children later, we run a fleet of
                100+ vehicles from our office in Reading. Councils across
                Berkshire, Oxfordshire and Hampshire trust us with their SEND
                and wheelchair-accessible routes, and we bring that same
                standard to every school run, college journey, care home trip
                and group outing we take on.
              </p>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                We treat every passenger the way weâ€™d want our own family
                treated: with patience, kindness and respect.
              </p>
              <div className="button-group" style={{ marginTop: "28px" }}>
                <Link className="btn btn-primary" href="/services">
                  Our services
                </Link>
                <Link className="btn btn-outline" href="/contact">
                  Contact us
                </Link>
              </div>
            </div>
            <figure className="figsm">
              <Image
                src="/images/primary-pupils-walking-to-school.jpg"
                alt="Primary school pupils in uniform walking together"
                loading="lazy"
                style={{ aspectRatio: "4/3" }}
                width={896}
                height={673}
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-heart" />
                </svg>
                More than 10,000 children transported safely
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section-spacing section-band" id="councils">
          <div className="container content-two-col">
            <div>
              <span className="label-chip">
                <svg className="icon">
                  <use href="#i-medal" />
                </svg>
                Our SEND expertise
              </span>
              <h2>Trusted by local authorities for 15+ years</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Councils award SEND and home-to-school routes through
                competitive tender. For more than 15 years theyâ€™ve trusted us
                with some of their most demanding journeys, and we lead the way
                locally for wheelchair-accessible transport.
              </p>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                That experience shapes how we hire, train and plan, so every
                passenger benefits, whoever books the journey.
              </p>
            </div>
            <div>
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
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>What we stand for</h2>
                <p>
                  Six commitments behind every journey, from how we choose our
                  team to how we keep you informed.
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
                    <use href="#i-shield" />
                  </svg>
                </span>
                <h3>Safety, without shortcuts</h3>
                <p>
                  Enhanced DBS checks, SEND and safeguarding training, and
                  vehicles that are MOT compliant, regularly serviced and kept
                  clean. Safety is never where we save time.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#FAC9C6" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-heart" />
                  </svg>
                </span>
                <h3>Care in the small things</h3>
                <p>
                  A warm hello, a patient driver and a calm, comfortable
                  journey. For many passengers, thatâ€™s what makes the day start
                  well.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A9DEC3" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-chat" />
                  </svg>
                </span>
                <h3>Reliable, and always in touch</h3>
                <p>
                  We plan every route with care, and if traffic or anything else
                  affects a journey, weâ€™ll let you know straight away. Youâ€™ll
                  never be left wondering.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#CBD8E2" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-users" />
                  </svg>
                </span>
                <h3>Dignity for every passenger</h3>
                <p>
                  Whatever someoneâ€™s age or needs, theyâ€™re treated with respect,
                  from the first pick-up to the last drop-off.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A6E1EC" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-doc" />
                  </svg>
                </span>
                <h3>Honest and open</h3>
                <p>
                  Clear quotes with no surprises, and a friendly office team to
                  talk to whenever you need us.
                </p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#B5DAD6" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-pin" />
                  </svg>
                </span>
                <h3>Rooted in the South East, and growing</h3>
                <p>
                  We started in Reading and now run routes in three counties. As
                  more councils and families ask for us, weâ€™re taking our
                  service further across the South East.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band" id="fleet">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Our fleet</h2>
                <p>
                  Five of the vehicles youâ€™ll see on our routes. Behind them is
                  a fleet of more than 100, including 20+ wheelchair-accessible
                  vehicles.
                </p>
              </div>
            </div>
            <div className="fsum">
              <span>
                <svg className="icon">
                  <use href="#i-bus" />
                </svg>
                Saloons and MPVs
              </span>
              <span>
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                Wheelchair-accessible vans
              </span>
              <span>
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                A 16-seat minibus
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
                    <dd>â€“</dd>
                  </dl>
                  <p>Our go-to saloon for single-pupil and small-group runs</p>
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
                    <dd>â€“</dd>
                  </dl>
                  <p>Six seats with room for school bags and kit</p>
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
                    <dd>â€“</dd>
                  </dl>
                  <p>Eight seats for bigger shared routes and family groups</p>
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
                  <p>One of our 20+ wheelchair-accessible vehicles</p>
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
                  <p>Our newest vehicle, for day trips, fixtures and outings</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="safe" id="safety">
          <div className="container">
            <div className="safehead">
              <h2>Safety and compliance as standard</h2>
            </div>
            <ul className="safelist">
              <li>
                <svg className="icon">
                  <use href="#i-lic" />
                </svg>
                Licensed operator
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-doc" />
                </svg>
                Fully insured
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-shield" />
                </svg>
                Enhanced DBS checked
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                SEND and safeguarding trained
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-wrench" />
                </svg>
                MOT compliant and regularly serviced
              </li>
              <li>
                <svg className="icon">
                  <use href="#i-star" />
                </svg>
                Clean, well-kept vehicles
              </li>
            </ul>
          </div>
        </section>
        <section className="section-spacing careers">
          <div className="tiles" aria-hidden="true">
            <i style={{ background: "var(--sky)" }}></i>
            <i style={{ background: "var(--pink)" }}></i>
            <i style={{ background: "var(--green)" }}></i>
            <i style={{ background: "var(--slate)" }}></i>
            <i style={{ background: "var(--cyan)" }}></i>
            <i style={{ background: "var(--lteal)" }}></i>
          </div>
          <div className="container content-split">
            <div>
              <h2>The people behind every journey</h2>
              <p className="text-lead">
                More than 200 drivers and passenger assistants, supported by an
                office team that plans every route. Every one of them is
                enhanced DBS checked and trained in SEND and safeguarding, and
                chosen as much for their patience and kindness as for their
                skills.
              </p>
              <div className="button-group">
                <Link className="btn btn-white" href="/careers">
                  Join our team
                </Link>
                <Link className="btn btn-outline-white" href="/contact">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="perks">
              <div className="perk-card">
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                <b>Drivers</b>
                <span>
                  Licensed, vetted and assigned to regular routes. Female
                  drivers available on request.
                </span>
              </div>
              <div className="perk-card">
                <svg className="icon">
                  <use href="#i-heart" />
                </svg>
                <b>Passenger assistants</b>
                <span>
                  Support for passengers who need extra help, with epilepsy
                  buccal medication and first-aid-trained assistants on request.
                </span>
              </div>
              <div className="perk-card">
                <svg className="icon">
                  <use href="#i-plus" />
                </svg>
                <b>Healthcare Assistants</b>
                <span>
                  Trained HCAs available on request for passengers with
                  healthcare needs.
                </span>
              </div>
              <div className="perk-card">
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                <b>Office team</b>
                <span>
                  Planning routes, matching teams and keeping you informed,
                  Monday to Friday, 7am to 5pm.
                </span>
              </div>
            </div>
          </div>
        </section>
        <FaqSection
          heading="Getting to know us"
          description={
            <>
              Before trusting anyone with a journey, it&apos;s natural to want to
              know who they are. Still curious?{" "}
              <Link href="/contact">We&apos;d love to hear from you.</Link>
            </>
          }
          items={[
            {
              question: "Where is School Express based?",
              answer:
                "Our office is at 3 Barrett Court on Cardiff Road in Reading. The team there plans every route and is on hand on weekdays from 7am.",
            },
            {
              question: "How long has School Express been running?",
              answer:
                "For more than 15 years. In that time we've carried over 10,000 children and grown to a fleet of more than 100 vehicles.",
            },
            {
              question: "What makes you different from a regular taxi firm?",
              answer:
                "We specialise in transporting children and vulnerable passengers. Our drivers and passenger assistants are enhanced DBS checked, trained in SEND and safeguarding, and assigned to regular routes, so passengers see a familiar face. Extra support, such as female drivers or medically trained assistants, is available on request.",
            },
            {
              question:
                "How do you choose your drivers and passenger assistants?",
              answer:
                "Patience and kindness come first. Everyone then passes an enhanced DBS check and completes SEND and safeguarding training before they work with passengers.",
            },
            {
              question: "Which councils do you work with?",
              answer:
                "We work with Reading Borough Council, Wokingham Borough Council, West Berkshire Council, Bracknell Forest Council, South Oxfordshire District Council and Fareham Borough Council.",
            },
          ]}
        />
        <CtaBand
          heading="Let's talk about your journey"
          body="Whether you're a family, a school, a trust, a college or a care provider, tell us what you need and our friendly team will get back to you with a clear, honest quote."
        />
      </LegacyScope>
    </>
  );
}

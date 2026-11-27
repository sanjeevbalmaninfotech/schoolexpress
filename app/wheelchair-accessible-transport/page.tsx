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
      "Wheelchair Accessible Transport in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "Travel in your own wheelchair with 20+ ramp and lift-equipped vehicles. School runs, care journeys, appointments and days out for passengers of any age.",
  alternates: {
    canonical:
      "https://schoolexpressuk.com/wheelchair-accessible-transport.html",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "Wheelchair Accessible Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Travel in your own wheelchair with 20+ ramp and lift-equipped vehicles. School runs, care journeys, appointments and days out for passengers of any age.",
    url: "https://schoolexpressuk.com/wheelchair-accessible-transport.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wheelchair Accessible Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Travel in your own wheelchair with 20+ ramp and lift-equipped vehicles. School runs, care journeys, appointments and days out for passengers of any age.",
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
    name: "Wheelchair-accessible transport, from the area's largest accessible fleet",
    serviceType: "Wheelchair accessible",
    description:
      "Travel in your own wheelchair with 20+ ramp and lift-equipped vehicles. School runs, care journeys, appointments and days out for passengers of any age.",
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
        name: "Wheelchair accessible",
        item: "https://schoolexpressuk.com/wheelchair-accessible-transport.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can passengers stay in their own wheelchair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most passengers stay seated in their wheelchair, which is locked to the vehicle floor, and wear their own seatbelt as well.",
        },
      },
      {
        "@type": "Question",
        name: "How many wheelchairs can one vehicle carry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Up to [3] wheelchair users per vehicle, depending on the vehicle and any seated passengers travelling with them.",
        },
      },
      {
        "@type": "Question",
        name: "Can family members or carers travel too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our accessible vehicles also have seats, so companions and carers can travel alongside wheelchair users.",
        },
      },
      {
        "@type": "Question",
        name: "Is this only for children?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We provide wheelchair-accessible transport for passengers of any age, including adults and care home residents.",
        },
      },
      {
        "@type": "Question",
        name: "What if the wheelchair is powered or extra large?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell us the type, size and rough weight when you enquire, and we'll send a vehicle with a suitable lift. [Confirm size and weight limits]",
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
                <span aria-current="page">Wheelchair accessible</span>
              </div>
              <span className="label-chip">
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                Wheelchair-accessible transport
              </span>
              <h1>
                Wheelchair-accessible transport, from the area’s largest
                accessible fleet
              </h1>
              <p className="text-lead">
                With 20+ wheelchair-accessible vehicles, ramp and lift access
                and secure restraints, passengers travel safely in their own
                chair. For school runs, care homes, appointments, days out and
                more, across Berkshire, Oxfordshire, Hampshire and the South
                East.
              </p>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=wheelchair-accessible-transport#quote"
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
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                <span>
                  <b>20+ accessible vehicles</b>The largest accessible fleet in
                  our area
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Travel in your own chair</b>Locked in place for the whole
                  journey
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                <span>
                  <b>Room for companions</b>Seated passengers can travel
                  alongside
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
                <h2>Who it’s for</h2>
                <p>
                  Accessible travel for wheelchair users of every age, for
                  regular routes and one-off journeys.
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
                <h3>Families</h3>
                <p>
                  School runs, appointments and days out for wheelchair users of
                  any age.
                </p>
              </div>
              <Link className="content-card" href="/adult-social-care-transport">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A9DEC3" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-home" />
                  </svg>
                </span>
                <h3>Care homes and day services</h3>
                <p>
                  Regular trips to day centres and appointments, plus outings
                  for residents.
                </p>
                <span className="link-arrow">
                  Find out more{" "}
                  <svg className="icon">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </Link>
              <Link className="content-card" href="/school-college-transport">
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
                  Accessible daily routes, trips and fixtures, with
                  mixed-mobility groups travelling together.
                </p>
                <span className="link-arrow">
                  Find out more{" "}
                  <svg className="icon">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>Accessible by design</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Local councils turn to us for wheelchair-accessible routes.
                Every private booking gets the same vehicles and the same care.
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Ramp and lift access</strong>, so boarding is safe
                    and dignified
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Secure wheelchair restraints</strong>, holding the
                    chair firmly in place
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>
                      Up to <mark className="tbc">[3]</mark> wheelchair spaces
                    </strong>{" "}
                    per vehicle, plus seats for companions
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>An extra pair of hands</strong> from a passenger
                    assistant if needed
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Careful, unhurried drivers</strong> who take their
                    time at every pick-up
                  </span>
                </li>
              </ul>
              <div className="onreq">
                <b>Extras you can request</b>
                <ul>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Female drivers on accessible journeys
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    Buccal medication for epilepsy, given by first-aid-trained
                    assistants
                  </li>
                  <li>
                    <svg className="icon">
                      <use href="#i-female" />
                    </svg>
                    HCAs to support passengers with health conditions
                  </li>
                </ul>
              </div>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=wheelchair-accessible-transport#quote"
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
                src="/images/wheelchair-user-accessible-van-lift.jpg"
                alt="Wheelchair user rolling onto the lowered lift of an accessible van"
                loading="lazy"
                width={800}
                height={600}
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-wheel" />
                </svg>
                20+ wheelchair-accessible vehicles
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
              <CountUp end={20} suffix="+" />
              <span>
                <strong>wheelchair-accessible vehicles</strong> in our fleet
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--pink)" } as React.CSSProperties}
            >
              <CountUp end={15} suffix="+" />
              <span>
                <strong>years</strong> running accessible council routes
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--cyan)" } as React.CSSProperties}
            >
              <CountUp end={100} suffix="+" />
              <span>
                <strong>vehicles</strong> including saloons and MPVs for
                companions
              </span>
            </div>
            <div
              className="stat"
              style={{ "--c": "var(--slate)" } as React.CSSProperties}
            >
              <CountUp end={200} suffix="+" />
              <span>
                <strong>team members</strong> who help passengers board safely
              </span>
            </div>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Booking accessible transport</h2>
                <p>
                  A few details about the wheelchair help us send the right
                  vehicle first time.
                </p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>Describe the wheelchair</b>
                <span>
                  Manual or powered, rough size and weight, and whether the
                  passenger can transfer.
                </span>
              </li>
              <li>
                <b>We pick the vehicle</b>
                <span>
                  A van with the right ramp or lift and enough restraint points
                  for every chair.
                </span>
              </li>
              <li>
                <b>Board safely</b>
                <span>
                  Your driver secures the wheelchair and the passenger’s own
                  seatbelt before setting off.
                </span>
              </li>
              <li>
                <b>Travel together</b>
                <span>
                  Carers, family or friends ride alongside in the seats
                  provided.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <FaqSection
          heading="Accessible travel questions"
          description={
            <>
              Questions from families and care providers about travelling in a
              wheelchair with us. <Link href="/contact">Get in touch</Link> for
              anything else.
            </>
          }
          items={[
            {
              question: "Can passengers stay in their own wheelchair?",
              answer:
                "Yes. Most passengers stay seated in their wheelchair, which is locked to the vehicle floor, and wear their own seatbelt as well.",
            },
            {
              question: "How many wheelchairs can one vehicle carry?",
              answer: (
                <>
                  Up to <mark className="tbc">[3]</mark> wheelchair users per
                  vehicle, depending on the vehicle and any seated passengers
                  travelling with them.
                </>
              ),
            },
            {
              question: "Can family members or carers travel too?",
              answer:
                "Yes. Our accessible vehicles also have seats, so companions and carers can travel alongside wheelchair users.",
            },
            {
              question: "Is this only for children?",
              answer:
                "No. We provide wheelchair-accessible transport for passengers of any age, including adults and care home residents.",
            },
            {
              question: "What if the wheelchair is powered or extra large?",
              answer: (
                <>
                  Tell us the type, size and rough weight when you enquire, and
                  we’ll send a vehicle with a suitable lift.{" "}
                  <mark className="tbc">[Confirm size and weight limits]</mark>
                </>
              ),
            },
          ]}
        />
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Other services for wheelchair users</h2>
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
                    Regular, unhurried trips for adults, with time to board and
                    settle.
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
                    Passenger assistants and travel plans for pupils with
                    additional needs.
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
                    Days out where wheelchair users and friends travel together.
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
                    Accessible daily runs to mainstream and special schools and
                    colleges.
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
          heading="Arrange an accessible journey"
          body="Tell us about the wheelchair and the journey, and we'll match a suitable vehicle and price it for free."
          quoteHref="/contact?service=wheelchair-accessible-transport#quote"
        />
      </LegacyScope>
    </>
  );
}

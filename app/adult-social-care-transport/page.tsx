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
      "Adult and Social Care Transport in Berkshire, Oxfordshire & Hampshire | School Express",
  },
  description:
    "Accessible transport for adults, care home residents and social care clients: day centres, hospital and GP appointments and outings, with HCAs available on request.",
  alternates: {
    canonical: "https://schoolexpressuk.com/adult-social-care-transport.html",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title:
      "Adult and Social Care Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Accessible transport for adults, care home residents and social care clients: day centres, hospital and GP appointments and outings, with HCAs available on request.",
    url: "https://schoolexpressuk.com/adult-social-care-transport.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Adult and Social Care Transport in Berkshire, Oxfordshire & Hampshire | School Express",
    description:
      "Accessible transport for adults, care home residents and social care clients: day centres, hospital and GP appointments and outings, with HCAs available on request.",
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
    name: "Adult and social care transport, provided with dignity",
    serviceType: "Adults and social care",
    description:
      "Accessible transport for adults, care home residents and social care clients: day centres, hospital and GP appointments and outings, with HCAs available on request.",
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
        name: "Adults and social care",
        item: "https://schoolexpressuk.com/adult-social-care-transport.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you take residents to hospital and GP appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tell us the appointment time and address, and we'll plan the pick-up so there's no rush. [Confirm whether drivers wait during appointments]",
        },
      },
      {
        "@type": "Question",
        name: "Can you run a regular weekly route for our day centre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We run regular routes as well as one-off journeys. Tell us the days, times and number of passengers and we'll put together a quote.",
        },
      },
      {
        "@type": "Question",
        name: "When would a Healthcare Assistant travel with a passenger?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When someone's health needs mean they need trained support during the journey. HCAs are available on request, so mention any needs when you get in touch.",
        },
      },
      {
        "@type": "Question",
        name: "Can residents go on group outings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our 16-seater minibus and accessible vehicles are ideal for group outings, and larger groups can travel in more than one vehicle.",
        },
      },
      {
        "@type": "Question",
        name: "Can you collect passengers from different addresses on one route?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Shared routes that pick up several people from home or supported living are common, and we plan the order to keep journey times short.",
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
                  <span aria-current="page">Adults and social care</span>
                </div>
                <span className="label-chip">
                  <img
                    src="/services/icons/Adultsocialcaretransport.svg"
                    alt=""
                    className="icon"
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                  Adult and social care transport
                </span>
                <h1>Adult and social care transport, provided with dignity</h1>
                <p className="text-lead">
                  Comfortable, unhurried travel for adults, care home residents
                  and social care clients, to day centres, appointments,
                  activities and outings. Regular routes or one-off journeys.
                </p>
                <div className="button-group">
                  <Link
                    className="btn btn-primary"
                    href="/contact?service=adult-social-care-transport#quote"
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
                  <img
                    src="/services/icons/WheelchairaccessibleOne.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Wheelchair accessible</b>Ramp and lift vans for residents
                  </span>
                </div>
                <div>
                  <img
                    src="/services/icons/Regularoroneoff.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Regular or one-off</b>Weekly routes, appointments and
                    outings
                  </span>
                </div>
                <div>
                  <img
                    src="/services/icons/Healthcaresupport.svg"
                    alt=""
                    className="icon"
                    style={{ width: "25px", height: "25px", objectFit: "contain" }}
                  />
                  <span>
                    <b>Healthcare support</b>Trained HCAs available on request
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
                <h2>Who we work with</h2>
                <p>
                  Transport that fits around the people you support, not the
                  other way round.
                </p>
              </div>
            </div>
            <div className="content-grid-3">
              <div className="content-card">

                <img
                  src="/services/icons/Carehomes.svg"
                  alt=""
                  className="icon"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />

                <h3>Care homes</h3>
                <p>
                  Regular appointments, community activities and group outings
                  for residents.
                </p>
              </div>

              <div className="content-card">

                <img
                  src="/services/icons/Socialproviderscentres.svg"
                  alt=""
                  className="icon"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />

                <h3>Social care providers and day centres</h3>
                <p>
                  Dependable regular routes for clients, planned around your
                  timetable.
                </p>
              </div>

              <div className="content-card">

                <img
                  src="/services/icons/Adultsandfamilies.svg"
                  alt=""
                  className="icon"
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
                <h3>Adults and families</h3>
                <p>
                  Private journeys to appointments, activities and visits, at a
                  pace that suits.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>What care providers can expect</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Whether an adult needs help getting to a day centre or a
                resident is heading out for the afternoon, everyone is treated
                with dignity and respect.
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Patient, unhurried service</strong>, with time to
                    board and settle comfortably
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Step-free boarding</strong> by ramp or lift, with
                    the chair secured for the journey
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>A helping hand</strong> from a passenger assistant
                    when residents need it
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>The right size of vehicle</strong>, whether it’s one
                    resident or a group of 16
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>Staff trained to support vulnerable adults</strong>{" "}
                    and cleared by enhanced DBS checks
                  </span>
                </li>
              </ul>
              <div className="onreq">
                <b>Care extras on request</b>
                <ul>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF5900]"></span>
                    Female drivers for passengers who prefer one
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF5900]"></span>
                    First aid and epilepsy buccal medication trained assistants
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF5900]"></span>
                    Trained Healthcare Assistants (HCAs) for residents and clients
                  </li>
                </ul>
              </div>
              <div className="button-group">
                <Link
                  className="btn btn-primary"
                  href="/contact?service=adult-social-care-transport#quote"
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
                src="/services/image/Everypassengertreatedwithdignity.jpg"
                alt="Two carers smiling with an older woman in a wheelchair"
                loading="lazy"
                width={370}
                height={240}
              />
              <figcaption>
                <img
                  src="/services/icons/Everypassengertrateddignity.svg"
                  alt=""
                  className="icon"
                  style={{ width: "24px", height: "24px", objectFit: "contain" }}
                />
                Every passenger treated with dignity
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
                  <strong>accessible vehicles</strong> ready for care journeys
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--pink)" } as React.CSSProperties}
              >
                <CountUp end={100} suffix="+" />
                <span>
                  <strong>vehicles</strong> to match any group size
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--cyan)" } as React.CSSProperties}
              >
                <CountUp end={16} suffix="" />
                <span>
                  <strong>seats</strong> for residents’ outings
                </span>
              </div>
              <div
                className="stat"
                style={{ "--c": "var(--slate)" } as React.CSSProperties}
              >
                <CountUp end={15} suffix="+" />
                <span>
                  <strong>years</strong> caring for vulnerable passengers
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Arranging care transport</h2>
                <p>
                  Regular routes and one-off trips are booked the same simple
                  way.
                </p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>Share the schedule</b>
                <span>
                  Days, times and addresses for each resident or client, or the
                  date of a single appointment.
                </span>
              </li>
              <li>
                <b>Explain support needs</b>
                <span>
                  Mobility aids, wheelchairs, healthcare needs and whether a
                  carer will travel too.
                </span>
              </li>
              <li>
                <b>Confirm vehicles and staff</b>
                <span>
                  We assign suitable vehicles, drivers and any HCAs or passenger
                  assistants needed.
                </span>
              </li>
              <li>
                <b>Settle into a routine</b>
                <span>
                  Regular passengers see familiar faces, and we adjust times
                  when your schedule changes.
                </span>
              </li>
            </ol>
          </div>
        </section>
        <FaqSection
          heading="Questions from care providers and families"
          description={
            <>
              Planning care transport raises practical questions. Here are the
              most common, and our office can help with the rest.{" "}
              <Link href="/contact">Contact us</Link>.
            </>
          }
          items={[
            {
              question: "Can you take residents to hospital and GP appointments?",
              answer: (
                <>
                  Yes. Tell us the appointment time and address, and we’ll plan
                  the pick-up so there’s no rush.{" "}
                  <mark className="tbc">
                    [Confirm whether drivers wait during appointments]
                  </mark>
                </>
              ),
            },
            {
              question: "Can you run a regular weekly route for our day centre?",
              answer:
                "Yes. We run regular routes as well as one-off journeys. Tell us the days, times and number of passengers and we’ll put together a quote.",
            },
            {
              question:
                "When would a Healthcare Assistant travel with a passenger?",
              answer:
                "When someone’s health needs mean they need trained support during the journey. HCAs are available on request, so mention any needs when you get in touch.",
            },
            {
              question: "Can residents go on group outings?",
              answer:
                "Yes. Our 16-seater minibus and accessible vehicles are ideal for group outings, and larger groups can travel in more than one vehicle.",
            },
            {
              question:
                "Can you collect passengers from different addresses on one route?",
              answer:
                "Yes. Shared routes that pick up several people from home or supported living are common, and we plan the order to keep journey times short.",
            },
          ]}
        />
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>More ways we support care providers</h2>
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
                    Accessible vehicles with secure restraints for residents who
                    stay in their chair.
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
                    Minibus outings for residents, from garden centres to the
                    seaside.
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
                    Specialist transport for younger people with learning
                    disabilities or autism.
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
                    Reliable runs to school and college for children and young
                    people.
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
          heading="Arrange transport for your residents or clients"
          body="Share your weekly schedule or a single appointment and we'll come back with options and a free quote."
          quoteHref="/contact?service=adult-social-care-transport#quote"
        />
      </LegacyScope>
    </>
  );
}

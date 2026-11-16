import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LegacyScope from "@/components/legacy/LegacyScope";

export const metadata: Metadata = {
  title: { absolute: "School Transport Services in [Town] | School Express" },
  description:
    "[150-160 characters, unique to [Town]: who you transport, which schools or council, and a call to action]",
  alternates: {
    canonical: "https://schoolexpressuk.com/school-transport-[town].html",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title: "School Transport Services in [Town] | School Express",
    description: "[Same text as the meta description]",
    url: "https://schoolexpressuk.com/school-transport-[town].html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Transport Services in [Town] | School Express",
    description: "[Same text as the meta description]",
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
    name: "School transport in [Town]",
    serviceType: "School transport",
    description: "[Same text as the meta description]",
    provider: { "@id": "https://schoolexpressuk.com/#business" },
    areaServed: { "@type": "City", name: "[Town]" },
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
        name: "Areas we cover",
        item: "https://schoolexpressuk.com/contact.html#areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "[Town]",
        item: "https://schoolexpressuk.com/school-transport-[town].html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "[Copy question 1 from the page]",
        acceptedAnswer: {
          "@type": "Answer",
          text: "[Copy answer 1 from the page]",
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
                <Link href="/contact#areas">Areas we cover</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">[Town]</span>
              </div>
              <span className="label-chip">
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                School transport in [Town]
              </span>
              <h1>School Transport Services in [Town]</h1>
              <p className="text-lead">
                [2-3 original sentences: the schools, trusts and colleges you
                take pupils to in [Town], the council you work with there, and
                why families choose you.]
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
            <div className="keyfacts">
              <div>
                <svg className="icon">
                  <use href="#i-users" />
                </svg>
                <span>
                  <b>[Local fact 1]</b>[e.g. Routes to [number] schools in
                  [Town]]
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-cap" />
                </svg>
                <span>
                  <b>[Local fact 2]</b>[e.g. Working with [Council name]]
                </span>
              </div>
              <div>
                <svg className="icon">
                  <use href="#i-bus" />
                </svg>
                <span>
                  <b>[Local fact 3]</b>[e.g. Drivers living in or near [Town]]
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
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Schools and colleges we serve in [Town]</h2>
                <p>[One original sentence introducing the local schools.]</p>
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
                <h3>[School or trust name]</h3>
                <p>[What you provide for this school, in your own words.]</p>
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
                <h3>[School or college name]</h3>
                <p>[Another real school or college you serve in [Town].]</p>
              </div>
              <div className="content-card">
                <span
                  className="icon-box"
                  style={{ "--bg": "#A9DEC3" } as React.CSSProperties}
                >
                  <svg className="icon">
                    <use href="#i-users" />
                  </svg>
                </span>
                <h3>[Special school or SEN unit]</h3>
                <p>[SEND routes you run locally, if any.]</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container content-split">
            <div>
              <h2>Getting around [Town]</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                [Original paragraph about local routes, traffic, timings or
                areas you collect from, such as nearby villages.]
              </p>
              <ul className="checklist">
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>[Local point 1]</strong>, [detail]
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>[Local point 2]</strong>, [detail]
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>[Local point 3]</strong>, [detail]
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>[Local point 4]</strong>, [detail]
                  </span>
                </li>
                <li>
                  <svg className="icon">
                    <use href="#i-check" />
                  </svg>
                  <span>
                    <strong>[Local point 5]</strong>, [detail]
                  </span>
                </li>
              </ul>
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
            <figure className="figsm">
              <Image
                src="/images/pupils-walking-to-school-transport.jpg"
                alt="Pupils with backpacks walking towards their school transport"
                loading="lazy"
                width={370}
                height={240}
              />
              <figcaption>
                <svg className="icon">
                  <use href="#i-clock" />
                </svg>
                [Short caption about [Town]]
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>[How it works in [Town]]</h2>
                <p>[One original sentence.]</p>
              </div>
            </div>
            <ol className="step-list">
              <li>
                <b>[Step 1]</b>
                <span>[Original step description]</span>
              </li>
              <li>
                <b>[Step 2]</b>
                <span>[Original step description]</span>
              </li>
              <li>
                <b>[Step 3]</b>
                <span>[Original step description]</span>
              </li>
              <li>
                <b>[Step 4]</b>
                <span>[Original step description]</span>
              </li>
            </ol>
          </div>
        </section>
        <section className="section-spacing" id="faq">
          <div className="container faq-layout">
            <div>
              <h2>School transport in [Town]: your questions</h2>
              <p>[One original intro sentence.]</p>
            </div>
            <div className="faq">
              <details open>
                <summary>
                  [Local question 1, e.g. Do you cover [nearby village]?]
                </summary>
                <p>[Original answer]</p>
              </details>
              <details>
                <summary>
                  [Local question 2, e.g. Do you cover [nearby village]?]
                </summary>
                <p>[Original answer]</p>
              </details>
              <details>
                <summary>
                  [Local question 3, e.g. Do you cover [nearby village]?]
                </summary>
                <p>[Original answer]</p>
              </details>
              <details>
                <summary>
                  [Local question 4, e.g. Do you cover [nearby village]?]
                </summary>
                <p>[Original answer]</p>
              </details>
            </div>
          </div>
        </section>
        <section className="section-spacing section-band">
          <div className="container">
            <div className="section-header">
              <div>
                <h2>Our services in [Town]</h2>
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
                  <span>[One original line about this service in [Town]]</span>
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
                  <span>[One original line about this service in [Town]]</span>
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
                  <span>[One original line about this service in [Town]]</span>
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
                  <span>[One original line about this service in [Town]]</span>
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
        <section className="cta-band">
          <div className="tiles" aria-hidden="true">
            <i style={{ background: "var(--sky)" }}></i>
            <i style={{ background: "var(--pink)" }}></i>
            <i style={{ background: "var(--green)" }}></i>
            <i style={{ background: "var(--slate)" }}></i>
            <i style={{ background: "var(--cyan)" }}></i>
            <i style={{ background: "var(--lteal)" }}></i>
          </div>
          <div className="container">
            <div>
              <h2>[Call to action for [Town]]</h2>
              <p>[One original sentence inviting a quote.]</p>
            </div>
            <div className="button-group">
              <Link
                className="btn btn-white"
                href="/contact?service=school-college-transport#quote"
              >
                Request a quote
              </Link>
              <a className="btn btn-outline-white" href="tel:01491414040">
                <svg className="icon" style={{ width: "20px", height: "20px" }}>
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

import type { Metadata } from "next";
import Link from "next/link";
import LegacyScope from "@/components/legacy/LegacyScope";

export const metadata: Metadata = {
  title: {
    absolute: "Driver and Passenger Assistant Jobs | Careers at School Express",
  },
  description:
    "Drive or assist on regular school and care routes. Term-time hours, paid training, your DBS check covered and a supportive office team in Reading.",
  alternates: { canonical: "https://schoolexpressuk.com/careers.html" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "School Express",
    locale: "en_GB",
    title: "Driver and Passenger Assistant Jobs | Careers at School Express",
    description:
      "Drive or assist on regular school and care routes. Term-time hours, paid training, your DBS check covered and a supportive office team in Reading.",
    url: "https://schoolexpressuk.com/careers.html",
    images: [
      "https://schoolexpressuk.com/images/children-walking-into-school.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Driver and Passenger Assistant Jobs | Careers at School Express",
    description:
      "Drive or assist on regular school and care routes. Term-time hours, paid training, your DBS check covered and a supportive office team in Reading.",
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
        name: "Careers",
        item: "https://schoolexpressuk.com/careers.html",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Patience and reliability matter more than a CV, and we provide all the training, including SEND and safeguarding.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a driving licence to be a passenger assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Passenger assistants travel with passengers who need extra support, so no driving licence is needed.",
        },
      },
      {
        "@type": "Question",
        name: "What are the hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most school routes are a morning and an afternoon run in term time, with school holidays free. [Confirm hours for adult and social care routes]",
        },
      },
      {
        "@type": "Question",
        name: "Who pays for my DBS check and training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We do. Your enhanced DBS check and training are paid for.",
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
                <span aria-current="page">Careers</span>
              </div>
              <span className="chip">
                <svg className="ic">
                  <use href="#i-users" />
                </svg>
                Join our team
              </span>
              <h1>Work that fits around school hours, and matters</h1>
              <p className="lead">
                We’re recruiting drivers and passenger assistants across the
                South East. If you’re patient, reliable and good with people,
                we’ll give you the training to do the rest.
              </p>
              <div className="ctas">
                <a className="btn btn-p" href="#apply">
                  Apply now
                </a>
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
                  <use href="#i-cal" />
                </svg>
                <span>
                  <b>School-day hours</b>Work mornings and afternoons
                </span>
              </div>
              <div>
                <svg className="ic">
                  <use href="#i-medal" />
                </svg>
                <span>
                  <b>Paid training and DBS</b>SEND and safeguarding training
                  included
                </span>
              </div>
              <div>
                <svg className="ic">
                  <use href="#i-users" />
                </svg>
                <span>
                  <b>A team of 200+</b>Drivers, assistants and a friendly office
                  team
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
        <section className="sec" id="roles">
          <div className="wrap">
            <div className="head">
              <div>
                <h2>The roles</h2>
                <p>Two ways to join the team behind every journey.</p>
              </div>
            </div>
            <div className="roles">
              <article className="role">
                <h3>Drivers</h3>
                <dl>
                  <div>
                    <dt>What you’ll do</dt>
                    <dd>
                      Drive regular school, college, care and group routes,
                      getting to know your passengers and keeping every journey
                      safe and calm.
                    </dd>
                  </div>
                  <div>
                    <dt>What you’ll need</dt>
                    <dd>
                      A full UK licence held for{" "}
                      <mark className="tbc">[X]</mark>+ years, and a private
                      hire badge, or we’ll help you get one.
                    </dd>
                  </div>
                  <div>
                    <dt>What you’ll get</dt>
                    <dd>
                      Paid training and enhanced DBS check, regular routes and a
                      supportive office team.
                    </dd>
                  </div>
                </dl>
                <a className="btn btn-p" href="#apply">
                  Apply to drive
                </a>
              </article>
              <article className="role">
                <h3>Passenger assistants</h3>
                <dl>
                  <div>
                    <dt>What you’ll do</dt>
                    <dd>
                      Travel with passengers who need extra support, helping
                      them feel safe, settled and comfortable from pick-up to
                      drop-off.
                    </dd>
                  </div>
                  <div>
                    <dt>What you’ll need</dt>
                    <dd>
                      A caring, patient and reliable nature. No driving licence
                      needed.
                    </dd>
                  </div>
                  <div>
                    <dt>What you’ll get</dt>
                    <dd>
                      Paid SEND and safeguarding training, with opportunities to
                      train in first aid and epilepsy buccal medication.
                    </dd>
                  </div>
                </dl>
                <a className="btn btn-p" href="#apply">
                  Apply to assist
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="sec band">
          <div className="wrap">
            <div className="head">
              <div>
                <h2>Why work with us</h2>
              </div>
            </div>
            <div
              className="grid3"
              style={{
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              }}
            >
              <div className="card">
                <span
                  className="ico"
                  style={{ "--bg": "#B7DDF9" } as React.CSSProperties}
                >
                  <svg className="ic">
                    <use href="#i-cal" />
                  </svg>
                </span>
                <h3>Term-time hours</h3>
                <p>Morning and afternoon routes, with school holidays free.</p>
              </div>
              <div className="card">
                <span
                  className="ico"
                  style={{ "--bg": "#FAC9C6" } as React.CSSProperties}
                >
                  <svg className="ic">
                    <use href="#i-medal" />
                  </svg>
                </span>
                <h3>Paid while you train</h3>
                <p>
                  Your DBS check is covered, and pay is{" "}
                  <mark className="tbc">£[X]</mark> per hour.
                </p>
              </div>
              <div className="card">
                <span
                  className="ico"
                  style={{ "--bg": "#A9DEC3" } as React.CSSProperties}
                >
                  <svg className="ic">
                    <use href="#i-users" />
                  </svg>
                </span>
                <h3>Regular routes</h3>
                <p>
                  The same passengers each day, so you really get to know them.
                </p>
              </div>
              <div className="card">
                <span
                  className="ico"
                  style={{ "--bg": "#CBD8E2" } as React.CSSProperties}
                >
                  <svg className="ic">
                    <use href="#i-heart" />
                  </svg>
                </span>
                <h3>Work that matters</h3>
                <p>
                  Help children and adults get where they need to be, safely and
                  happily.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec">
          <div className="wrap contact">
            <div>
              <h2>Ready to apply?</h2>
              <p style={{ color: "var(--ink2)", marginTop: "16px" }}>
                Send us a few details and our team will be in touch. Prefer to
                talk first? Call the office on{" "}
                <a href="tel:01491414040">01491 414040</a>, Monday to Friday,
                7am to 5pm.
              </p>
            </div>
            <form
              id="apply"
              action="#"
              method="post"
              aria-label="Job application"
            >
              <h2 style={{ fontSize: "28px" }}>Apply now</h2>
              <div className="row">
                <label htmlFor="a-name">
                  Your name
                  <input
                    id="a-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </label>
                <label htmlFor="a-role">
                  Role
                  <select id="a-role" name="role">
                    <option>Driver</option>
                    <option>Passenger assistant</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <div className="row">
                <label htmlFor="a-email">
                  Email
                  <input
                    id="a-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label htmlFor="a-phone">
                  Phone
                  <input
                    id="a-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>
              <label htmlFor="a-postcode">
                Home postcode
                <input
                  id="a-postcode"
                  name="postcode"
                  type="text"
                  autoComplete="postal-code"
                />
              </label>
              <label htmlFor="a-msg">
                Tell us a little about yourself
                <textarea
                  id="a-msg"
                  name="message"
                  rows={4}
                  placeholder="Any relevant experience, and when you're available"
                ></textarea>
              </label>
              <button className="btn btn-p" type="submit">
                Send application
              </button>
            </form>
          </div>
        </section>
        <section className="sec band" id="faq">
          <div className="wrap faqwrap">
            <div>
              <h2>Working with us</h2>
              <p>
                Questions about working with us? Call the office on{" "}
                <a href="tel:01491414040">01491 414040</a>.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>Do I need experience?</summary>
                <p>
                  Not necessarily. Patience and reliability matter more than a
                  CV, and we provide all the training, including SEND and
                  safeguarding.
                </p>
              </details>
              <details>
                <summary>
                  Do I need a driving licence to be a passenger assistant?
                </summary>
                <p>
                  No. Passenger assistants travel with passengers who need extra
                  support, so no driving licence is needed.
                </p>
              </details>
              <details>
                <summary>What are the hours?</summary>
                <p>
                  Most school routes are a morning and an afternoon run in term
                  time, with school holidays free.{" "}
                  <mark className="tbc">
                    [Confirm hours for adult and social care routes]
                  </mark>
                </p>
              </details>
              <details>
                <summary>Who pays for my DBS check and training?</summary>
                <p>We do. Your enhanced DBS check and training are paid for.</p>
              </details>
            </div>
          </div>
        </section>
      </LegacyScope>
    </>
  );
}

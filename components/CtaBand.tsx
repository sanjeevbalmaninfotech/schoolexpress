import Link from "next/link";

interface CtaBandProps {
  heading: string;
  body: string;
  /** href for the primary "Request a quote" button (default: /contact#quote) */
  quoteHref?: string;
}

const TILES = [
  "var(--sky)",
  "var(--pink)",
  "var(--green)",
  "var(--slate)",
  "var(--cyan)",
  "var(--lteal)",
];

export default function CtaBand({
  heading,
  body,
  quoteHref = "/contact#quote",
}: CtaBandProps) {
  return (
    <section className="ctaband">
      <div className="tiles" aria-hidden="true">
        {TILES.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
      <div className="container">
        <div className="wrap !pl=0px !pr=0">
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <div className="ctas">
            <Link className="btn btn-white" href={quoteHref}>
              Request a quote
            </Link>
            <a className="btn btn-outline-white" href="tel:01491414040">
              <svg
                className="icon"
                style={{ width: "20px", height: "20px" }}
                aria-hidden="true"
              >
                <use href="#i-phone" />
              </svg>
              Call 01491 414040
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

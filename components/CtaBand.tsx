import Link from "next/link";

interface CtaBandProps {
  heading: string;
  body: string;
  /** href for the primary "Request a quote" button (default: /contact#quote) */
  quoteHref?: string;
  wrapClassName?: string;
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
  wrapClassName = "",
}: CtaBandProps) {
  return (
    <section className="ctaband">
      <div className="tiles" aria-hidden="true">
        {TILES.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
      <div className="container">
        <div className={`wrap px-0!${wrapClassName ? ` ${wrapClassName}` : ""}`}>
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <div className="ctas">
            <Link className="btn btn-white" href={quoteHref}>
              Request a quote
            </Link>
            <a className="btn btn-outline-white" href="tel:01491414040">

              Call 01491 414040
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const PHONE = "01491 414040";
const EMAIL = "office@schoolexpressuk.com";
const JOIN_HREF = "/careers";

const underlined = "underline underline-offset-[3px] hover:opacity-80";

function BannerContent({ isClone = false }: { isClone?: boolean }) {
  return (
    <>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <span>Call</span>
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className={underlined}
          tabIndex={isClone ? -1 : undefined}
        >
          {PHONE}
        </a>
      </span>
      <span className="text-white/40" aria-hidden="true">
        •
      </span>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
        <span>Email</span>
        <a
          href={`mailto:${EMAIL}`}
          className={underlined}
          tabIndex={isClone ? -1 : undefined}
        >
          {EMAIL}
        </a>
      </span>
      <span className="text-white/40" aria-hidden="true">
        •
      </span>
      <span className="whitespace-nowrap">
        Office open Mon to Fri, 7am to 5pm
      </span>
      <span className="text-white/40" aria-hidden="true">
        •
      </span>
      <Link
        href={JOIN_HREF}
        className={`${underlined} whitespace-nowrap`}
        tabIndex={isClone ? -1 : undefined}
      >
        Join our team of 200+ drivers and passenger assistants
      </Link>
      <span className="text-white/40" aria-hidden="true">
        •
      </span>
    </>
  );
}

export default function TopBanner() {
  return (
    <div className="w-full bg-[#0E2A33] text-white">
      {/* Desktop (md and above): static spaced row */}
      <div className="section-container hidden md:block">
        <div className="flex min-h-[40px] flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[14px] font-semibold leading-none">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <p>
              Call{" "}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className={underlined}
              >
                {PHONE}
              </a>
            </p>
            <p>
              Email{" "}
              <a href={`mailto:${EMAIL}`} className={underlined}>
                {EMAIL}
              </a>
            </p>
            <p>Office open Mon to Fri, 7am to 5pm</p>
          </div>

          <Link href={JOIN_HREF} className={underlined}>
            Join our team of 200+ drivers and passenger assistants
          </Link>
        </div>
      </div>

      {/* Mobile (< md): continuous smooth scrolling ticker */}
      <div className="relative flex h-[36px] items-center overflow-x-hidden text-[13px] font-semibold md:hidden">
        {/* Subtle edge fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#0E2A33] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#0E2A33] to-transparent"
          aria-hidden="true"
        />

        {/* Marquee track */}
        <div className="animate-top-banner-marquee">
          <div className="flex shrink-0 items-center gap-3.5 pr-3.5">
            <BannerContent />
          </div>
          <div
            className="flex shrink-0 items-center gap-3.5 pr-3.5"
            aria-hidden="true"
          >
            <BannerContent isClone />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const PHONE = "01491 414040";
const EMAIL = "office@schoolexpressuk.com";
const JOIN_HREF = "/careers";

const underlined = "underline underline-offset-[3px] hover:opacity-80";

export default function TopBanner() {
  return (
    <div className="w-full bg-[#0E2A33] text-white">
      <div className="section-container">
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
    </div>
  );
}

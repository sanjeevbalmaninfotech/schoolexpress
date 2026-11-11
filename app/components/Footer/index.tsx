import Image from "next/image";
import Link from "next/link";

const SERVICES = [
    { label: "Schools, trusts and colleges", href: "/services/schools-trusts-and-colleges" },
    { label: "Adults and social care", href: "/services/adults-and-social-care" },
    { label: "Group travel and events", href: "/services/group-travel-and-events" },
    { label: "Wheelchair accessible", href: "/services/wheelchair-accessible" },
    { label: "SEND and additional needs", href: "/services/send-and-additional-needs" },
    { label: "All services", href: "/services" },
];

const COMPANY = [
    { label: "About us", href: "/about" },
    { label: "Our fleet", href: "/fleet" },
    { label: "Safety and compliance", href: "/safety-and-compliance" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

const POLICIES = [
    { label: "Safeguarding policy", href: "/safeguarding-policy" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Cookies", href: "/cookies" },
];

const PHONES = ["01491 414040", "07484 093555"];
const EMAIL = "office@schoolexpressuk.com";

const heading =
    "mb-2 text-[15px] font-bold leading-[22px] text-[#E9F0F0]";
const link =
    "text-[15px] font-normal leading-[21px] text-[#B0CBD6] underline decoration-solid underline-offset-[3px] transition-colors hover:text-[#E9F0F0]";
const plain = "text-[15px] font-normal leading-[21px] text-[#B0CBD6]";

export default function Footer() {
    return (
        <footer className="w-full bg-[#112A32] font-[Inter,sans-serif]">
            <div className="section-container pb-6 pt-8 md:pb-8 md:pt-10">
                {/* Part 1 */}
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[40px] lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
                    {/* Logo + blurb */}
                    <div>
                        <Link href="/" aria-label="School Express home" className="inline-block">
                            <Image
                                src="/navAndFooter/nav/navIcon.png"
                                alt="School Express"
                                width={82}
                                height={46}
                                className="h-auto w-[82px]"
                            />
                        </Link>
                        <p className={`${plain} mt-5 max-w-[280px] leading-[21px]`}>
                            Safe, reliable school, college, care and group transport across
                            Berkshire, Oxfordshire, Hampshire and the South East, built on
                            more than 15 years of SEND expertise.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={heading}>Services</h3>
                        <ul className="flex flex-col gap-2">
                            {SERVICES.map((s) => (
                                <li key={s.href}>
                                    <Link href={s.href} className={link}>
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className={heading}>Company</h3>
                        <ul className="flex flex-col gap-2">
                            {COMPANY.map((c) => (
                                <li key={c.href}>
                                    <Link href={c.href} className={link}>
                                        {c.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={heading}>Contact</h3>
                        <ul className="flex flex-col gap-2">
                            {PHONES.map((p) => (
                                <li key={p}>
                                    <a href={`tel:${p.replace(/\s/g, "")}`} className={link}>
                                        {p}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={`mailto:${EMAIL}`} className={link}>
                                    {EMAIL}
                                </a>
                            </li>
                            <li>
                                <address className={`${plain} not-italic`}>
                                    3 Barrett Court, 70 Cardiff Road,
                                    <br />
                                    Reading RG1 8ED
                                </address>
                            </li>
                            <li>
                                <p className={plain}>Mon to Fri, 7am to 5pm</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-[#284751]" />

                {/* Part 2 */}
                <div className="flex flex-wrap items-center justify-between gap-x-[22px] gap-y-3">
                    <p className={plain}>
                        © 2026 FD Travels Ltd t/a School Express · Company no. 08469374
                    </p>
                    <ul className="flex flex-wrap items-center gap-x-[22px] gap-y-2">
                        {POLICIES.map((p) => (
                            <li key={p.href}>
                                <Link href={p.href} className={link}>
                                    {p.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
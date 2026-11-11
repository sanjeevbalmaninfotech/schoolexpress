import Image from "next/image";
import Link from "next/link";

type Service = {
    icon: string;
    title: string;
    description: string;
    href: string;
    tag: string;
    tagColor: string;
};

const SERVICES: Service[] = [
    {
        icon: "/home/icons/Schoolstrustscolleges.svg",
        title: "Schools, trusts & colleges",
        description:
            "Daily home-to-school and college routes with a familiar driver, passenger assistants for SEND pupils, and minibuses for trips and fixtures.",
        href: "/services/schools-trusts-and-colleges",
        tag: "Most popular",
        tagColor: "#E2542B",
    },
    {
        icon: "/home/icons/Carehomessocialcare.svg",
        title: "Adults & social care",
        description:
            "Comfortable journeys to day centres, appointments and activities — including wheelchair-accessible vehicles with ramp and lift access.",
        href: "/services/adults-and-social-care",
        tag: "Fully accessible",
        tagColor: "#0EACC2",
    },
    {
        icon: "/home/icons/Groupsevents.svg",
        title: "Group travel & events",
        description:
            "Minibuses and coaches for school trips, sports fixtures, proms, residential visits and corporate outings across the South East.",
        href: "/services/group-travel-and-events",
        tag: "Flexible booking",
        tagColor: "#009A65",
    },
    {
        icon: "/home/icons/Parentsandcarers.svg",
        title: "Wheelchair accessible",
        description:
            "20+ wheelchair-accessible vehicles — the largest accessible fleet in the area — with fully trained drivers and secure restraints.",
        href: "/services/wheelchair-accessible",
        tag: "Largest local fleet",
        tagColor: "#7B61FF",
    },
    {
        icon: "/home/icons/Schoolstrustscolleges.svg",
        title: "SEND & additional needs",
        description:
            "Specialist SEND transport backed by 15+ years of experience, enhanced DBS-checked drivers, and passenger assistants trained for complex needs.",
        href: "/services/send-and-additional-needs",
        tag: "15+ years' expertise",
        tagColor: "#F79398",
    },
];

export default function ServicesGrid() {
    return (
        <section className="w-full bg-white">
            <div className="section-container section-y">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="ff-ui mb-3 text-[14px] font-semibold uppercase tracking-widest text-[#E2542B]">
                            What we do
                        </p>
                        <h2 className="ff-heading text-[32px] font-bold leading-[1.15] text-[#0B4654] md:text-[44px]">
                            Transport services built for
                            <br className="hidden md:block" />
                            <span className="text-[#01ADC5]"> every need</span>
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="ff-ui shrink-0 self-start rounded-xl border border-[#0B4654] px-6 py-3 text-[16px] font-medium text-[#0B4654] transition-colors hover:bg-[#0B4654] hover:text-white md:self-auto"
                    >
                        All services →
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {SERVICES.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            className="group flex flex-col gap-5 rounded-2xl border border-[#E6EEF0] bg-[#F7FAFB] p-6 transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]"
                        >
                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                                <Image
                                    src={s.icon}
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="h-8 w-8"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col gap-3">
                                {/* Tag */}
                                <span
                                    className="ff-ui w-fit rounded-full px-3 py-1 text-[12px] font-semibold text-white"
                                    style={{ background: s.tagColor }}
                                >
                                    {s.tag}
                                </span>

                                <h3 className="ff-heading text-[22px] font-bold leading-snug text-[#0B4654]">
                                    {s.title}
                                </h3>
                                <p className="ff-body text-[15px] leading-[1.6] text-[#4A6872]">
                                    {s.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <span className="ff-ui mt-auto flex items-center gap-1 text-[14px] font-semibold text-[#01ADC5] transition-gap group-hover:gap-2">
                                Learn more
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>
                    ))}

                    {/* CTA card */}
                    <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0B4654] p-6">
                        <div>
                            <p className="ff-ui mb-3 text-[13px] font-semibold uppercase tracking-widest text-[#8FD3D2]">
                                Not sure?
                            </p>
                            <h3 className="ff-heading text-[22px] font-bold leading-snug text-white">
                                Talk to us — we&apos;ll find the right solution
                            </h3>
                            <p className="ff-body mt-3 text-[15px] leading-[1.6] text-[#B4C4C6]">
                                Our team has arranged transport for hundreds of schools, councils and families. We&apos;re happy to advise.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/get-a-quote"
                                className="ff-ui rounded-xl bg-[#E2542B] px-5 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Get a quote
                            </Link>
                            <a
                                href="tel:01491414040"
                                className="ff-ui rounded-xl border border-white/40 px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
                            >
                                01491 414040
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


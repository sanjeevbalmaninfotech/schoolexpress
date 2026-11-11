"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SLIDE_MS = 5000;

type Stat = { icon: string; value: string; label?: string };

type Slide = {
    tab: string;
    badge: string;
    headingWhite: string;
    headingAccent: string;
    text: string;
    audience: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: { src: string; alt: string };
    stats?: {
        top?: Stat;
        bottom?: Stat;
    };
};

const SLIDES: Slide[] = [
    {
        tab: "All services",
        badge: "Trusted by local councils across the South East",
        headingWhite: "Safe, reliable transport for every journey,",
        headingAccent: "trusted for 15+ years",
        text: "School and college runs, care home and social care journeys, wheelchair-accessible transport and group travel across the South East. All built on more than 15 years of specialist SEND transport and 10,000+ children carried safely.",
        audience: ["Parents and carers", "Schools and trusts", "Colleges"],
        primaryCta: { label: "Request a quote", href: "/get-a-quote" },
        secondaryCta: { label: "Call 01491 414040", href: "tel:01491414040" },
        image: { src: "/home/slide1.jpg", alt: "Children walking to school with backpacks" },
        stats: {
            top: {
                icon: "/home/icons/toptag.svg",
                value: "10,000+",
                label: "children transported safely",
            },
            bottom: {
                icon: "/home/icons/hometag.svg",
                value: "100+",
                label: "1200+ user ratings",
            },
        },
    },
    // ---- DUMMY slide 2 ----
    {
        tab: "Schools & colleges",
        badge: "School and college transport",
        headingWhite: "Daily school and college runs families rely on",
        headingAccent: "",
        text: "Regular home-to-school And college routes with a familiar driver each day, passenger assistants for children who need extra support, and minibuses for school trips and fixtures.",
        audience: ["Families", "Schools and trusts", "Colleges", "Care Homes", "Social care"],
        primaryCta: { label: "Request a quote", href: "/get-a-quote" },
        secondaryCta: { label: "Call 01491 414040", href: "tel:01491414040" },
        image: { src: "/home/slide1.jpg", alt: "School transport" },
        stats: {
            // top: {
            //     icon: "/home/icons/toptag.svg",
            //     value: "250+",
            //     label: "school routes every day",
            // },
            bottom: {
                icon: "/home/icons/hometag.svg",
                value: "A familiar driver every morning",
                // label: "on-time journeys",
            },
        },
    },
    // ---- DUMMY slide 3 ----
    {
        tab: "Care & accessible",
        badge: "Care, social care and accessible transport",
        headingWhite: "Accessible, unhurried travel for adults and care homes",
        headingAccent: "",
        text: "Comfortable journeys to day centres, appointments and activities, with ramp and lift access and secure wheelchair restraints. Our 20+ wheelchair-accessible vehicles make up the largest accessible fleet in the area.",
        audience: ["Care homes", "Social care providers", "Adults and families"],
        primaryCta: { label: "Request a quote", href: "/get-a-quote" },
        secondaryCta: { label: "Call 01491 414040", href: "tel:01491414040" },
        image: { src: "/home/slide1.jpg", alt: "Accessible transport" },
        stats: {
            // top: {
            //     icon: "/home/icons/toptag.svg",
            //     value: "60+",
            //     label: "accessible vehicles",
            // },
            bottom: {
                icon: "/home/icons/hometag.svg",
                value: "20+",
                label: "accessible vehicles ready to go",
            },
        },
    },
];

const COLOR_TAGS = ["#5BB8F0", "#F4A1A1", "#0B8C4A", "#9AAFC2", "#00A9C4", "#1F9A8A"];

function StatCard({
    stat,
    className,
}: {
    stat: Stat;
    className: string;
}) {
    return (
        <div
            className={`ff-ui absolute flex items-center gap-3 whitespace-nowrap rounded-xl bg-white p-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${className}`}
        >
            <Image src={stat.icon} alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
            <div>
                <p className="text-[22px] font-bold leading-tight text-[#0B4654]">{stat.value}</p>
                {stat.label && (
                    <p className="text-[13px] font-medium leading-tight text-[#0B4654]">{stat.label}</p>
                )}
            </div>
        </div>
    );
}

function SlideView({ slide, active, priority }: { slide: Slide; active: boolean; priority: boolean }) {
    return (
        <div
            aria-hidden={!active}
            className={`col-start-1 row-start-1 grid grid-cols-1 items-center gap-[20px] transition-[opacity,visibility] duration-500 lg:grid-cols-2 ${active ? "visible opacity-100" : "invisible opacity-0"
                }`}
        >
            {/* Left */}
            <div className="flex flex-col gap-[20px]">
                <div className="ff-ui inline-flex w-fit items-center gap-2 rounded-[50px] bg-[#18373D] px-5 py-2 text-[16px] font-medium capitalize text-[#8FD3D2] backdrop-blur-[20px]">
                    <Image src="/home/fem.svg" alt="" width={20} height={20} className="h-5 w-5" />
                    {slide.badge}
                </div>

                <h1 className="ff-heading max-w-[560px] text-[30px] font-bold leading-[1.2] text-white md:text-[40px] xl:text-[56px]">
                    {slide.headingWhite}{" "}
                    <span className="text-[#59C6C8]">{slide.headingAccent}</span>
                </h1>

                <p className="ff-body max-w-[560px] text-[16px] font-normal leading-[1.2] text-[#B4C4C6] md:text-[20px]">
                    {slide.text}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                    <span className="ff-body text-[13px] font-normal text-[#B4C4C6]">For</span>
                    {slide.audience.map((a) => (
                        <span
                            key={a}
                            className="ff-ui rounded-[50px] border border-[#FFFFFF4D] bg-[#FFFFFF1A] px-[14px] py-1 text-[13px] text-white"
                        >
                            {a}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-[20px]">
                    <Link
                        href={slide.primaryCta.href}
                        tabIndex={active ? 0 : -1}
                        className="ff-ui rounded-xl bg-[#E2542B] px-[26px] py-3 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
                    >
                        {slide.primaryCta.label}
                    </Link>
                    <a
                        href={slide.secondaryCta.href}
                        tabIndex={active ? 0 : -1}
                        className="ff-ui rounded-xl border border-white bg-transparent px-[26px] py-3 text-[17px] font-medium text-white transition-colors hover:bg-white/10"
                    >
                        {slide.secondaryCta.label}
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className="relative w-full max-w-[520px] lg:justify-self-end">
                <div className="relative aspect-square w-full overflow-hidden rounded-t-[24px]">
                    <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        fill
                        priority={priority}
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="flex gap-2">
                    {COLOR_TAGS.map((c) => (
                        <span key={c} className="h-[18px] flex-1 rounded-b-[8px]" style={{ background: c }} />
                    ))}
                </div>

                {slide.stats?.top && (
                    <StatCard
                        stat={slide.stats.top}
                        className="right-3 top-4 lg:-right-[24px] xl:-right-[63px] xl:top-[69px]"
                    />
                )}
                {slide.stats?.bottom && (
                    <StatCard
                        stat={slide.stats.bottom}
                        className="bottom-8 left-3 lg:-left-[24px] xl:-left-[59px] xl:bottom-[84px]"
                    />
                )}
            </div>
        </div>
    );
}

const controlBtn =
    "flex h-[30px] w-[30px] items-center justify-center rounded-[4px] border border-[#FFFFFF1A] bg-[#FFFFFF1A] transition-colors hover:bg-[#FFFFFF33] md:h-[46px] md:w-[46px]";

const iconCls = "h-4 w-4 md:h-6 md:w-6";

export default function HeroSlider() {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
    const total = SLIDES.length;

    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Services"
            className="w-full overflow-x-clip bg-[var(--hero-bg)]"
        >
            <div className="section-container section-y">
                <div className="flex flex-col gap-[50px]">
                    {/* Slides (stacked in one grid cell so height never jumps) */}
                    <div className="grid">
                        {SLIDES.map((s, i) => (
                            <SlideView key={s.tab} slide={s} active={i === index} priority={i === 0} />
                        ))}
                    </div>

                    {/* Tabs + controls */}
                    <div className="flex items-center justify-between gap-4 xl:gap-[50px]">
                        <div className="flex flex-1 gap-2">
                            {SLIDES.map((s, i) => (
                                <button
                                    key={s.tab}
                                    type="button"
                                    onClick={() => setIndex(i)}
                                    aria-label={s.tab}
                                    aria-current={i === index}
                                    className="ff-ui group min-w-0 flex-1 text-left"
                                >
                                    <div className="h-[3px] w-full bg-[#21404A]">
                                        {i === index && (
                                            <div
                                                className="h-full bg-[#01ADC5]"
                                                style={{
                                                    animation: `hero-progress ${SLIDE_MS}ms linear forwards`,
                                                    animationPlayState: playing ? "running" : "paused",
                                                }}
                                                onAnimationEnd={() => playing && next()}
                                            />
                                        )}
                                    </div>
                                    <span className="mt-3 hidden truncate text-[16px] font-normal text-[#8FA3A8] transition-colors group-hover:text-white md:block xl:text-[20px]">
                                        {s.tab}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Controls (right of timeline) */}
                        <div className="flex shrink-0 items-center gap-2">
                            <button type="button" onClick={prev} aria-label="Previous slide" className={controlBtn}>
                                <Image src="/home/icons/leftArrow.svg" alt="" width={24} height={24} className={iconCls} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setPlaying((p) => !p)}
                                aria-label={playing ? "Pause autoplay" : "Play autoplay"}
                                aria-pressed={!playing}
                                className={`${controlBtn} aria-pressed:bg-[#FFFFFF33]`}
                            >
                                <Image src="/home/icons/pose.svg" alt="" width={24} height={24} className={iconCls} />
                            </button>

                            <button type="button" onClick={next} aria-label="Next slide" className={controlBtn}>
                                <Image src="/home/icons/rightArrow.svg" alt="" width={24} height={24} className={iconCls} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

type Testimonial = {
    quote: string;
    author: string;
    role: string;
    initials: string;
    color: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        quote: "School Express have been providing transport for our SEND pupils for over five years. Their drivers are consistent, caring and always professional — the families trust them completely.",
        author: "Emma Richardson",
        role: "SENCO, Ridgeway Academy",
        initials: "ER",
        color: "#66BBED",
    },
    {
        quote: "We switched from our previous provider after ongoing punctuality issues. School Express turned that around immediately — we have had no missed pickups in two years.",
        author: "David Okafor",
        role: "Transport Manager, Oxfordshire County Council",
        initials: "DO",
        color: "#F79398",
    },
    {
        quote: "The wheelchair-accessible vehicle is spotless and my son's driver always makes sure the ramp is secure before moving. It's the small things that matter to us as parents.",
        author: "Sarah Whitmore",
        role: "Parent, Reading",
        initials: "SW",
        color: "#0EACC2",
    },
    {
        quote: "We used School Express for our Year 11 prom and it was completely stress-free. 48 students, three minibuses, all on time. We'll definitely book again.",
        author: "James Patel",
        role: "Head of Year, Prospect School",
        initials: "JP",
        color: "#009A65",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full bg-white">
            <div className="section-container section-y">
                {/* Header */}
                <div className="mb-12">
                    <p className="ff-ui mb-3 text-[14px] font-semibold uppercase tracking-widest text-[#E2542B]">
                        What people say
                    </p>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <h2 className="ff-heading text-[32px] font-bold leading-[1.15] text-[#0B4654] md:text-[44px]">
                            Trusted by schools, councils
                            <br className="hidden md:block" />{" "}
                            <span className="text-[#01ADC5]">and families</span>
                        </h2>
                        <div className="flex shrink-0 items-center gap-3">
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg
                                            key={i}
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="#F59E0B"
                                            aria-hidden="true"
                                        >
                                            <path d="M9 1.5l2.09 4.26 4.7.68-3.4 3.31.8 4.68L9 12.27l-4.19 2.2.8-4.68L2.21 6.44l4.7-.68L9 1.5z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="ff-ui mt-1 text-[13px] text-[#4A6872]">
                                    4.9 / 5 · 1,200+ ratings
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.author}
                            className="flex flex-col gap-5 rounded-2xl border border-[#E6EEF0] bg-[#F7FAFB] p-6"
                        >
                            {/* Stars */}
                            <div className="flex gap-1" aria-label="5 out of 5 stars">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 18 18"
                                        fill="#F59E0B"
                                        aria-hidden="true"
                                    >
                                        <path d="M9 1.5l2.09 4.26 4.7.68-3.4 3.31.8 4.68L9 12.27l-4.19 2.2.8-4.68L2.21 6.44l4.7-.68L9 1.5z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="ff-body flex-1 text-[15px] leading-[1.65] text-[#2D4A52]">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <span
                                    className="ff-ui flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
                                    style={{ background: t.color }}
                                >
                                    {t.initials}
                                </span>
                                <div>
                                    <p className="ff-ui text-[14px] font-semibold text-[#0B4654]">
                                        {t.author}
                                    </p>
                                    <p className="ff-body text-[13px] text-[#6B8F9A]">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


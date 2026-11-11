const AREAS = [
    "Reading",
    "Berkshire",
    "Oxfordshire",
    "Hampshire",
    "Surrey",
    "Wiltshire",
    "West Berkshire",
    "South Oxfordshire",
    "Vale of White Horse",
    "Slough",
    "Windsor & Maidenhead",
    "Bracknell Forest",
    "Wokingham",
    "Basingstoke",
    "Southampton",
    "Portsmouth",
    "Guildford",
    "Milton Keynes",
];

export default function AreasCovered() {
    return (
        <section className="w-full bg-[#0B4654]">
            <div className="section-container section-y">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
                    {/* Left */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="ff-ui mb-3 text-[14px] font-semibold uppercase tracking-widest text-[#8FD3D2]">
                                Areas we cover
                            </p>
                            <h2 className="ff-heading text-[32px] font-bold leading-[1.15] text-white md:text-[44px]">
                                Serving the{" "}
                                <span className="text-[#59C6C8]">South East</span>
                            </h2>
                        </div>
                        <p className="ff-body max-w-[480px] text-[17px] leading-[1.6] text-[#B4C4C6]">
                            Based in Reading, we operate across Berkshire, Oxfordshire, Hampshire, Surrey and beyond. If you&apos;re unsure whether we cover your route, give us a call — we&apos;re happy to check.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="tel:01491414040"
                                className="ff-ui rounded-xl bg-[#E2542B] px-6 py-3 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
                            >
                                Call 01491 414040
                            </a>
                            <a
                                href="mailto:office@schoolexpressuk.com"
                                className="ff-ui rounded-xl border border-white/40 px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-white/10"
                            >
                                Email us
                            </a>
                        </div>
                    </div>

                    {/* Right — areas grid */}
                    <div className="flex flex-wrap content-start gap-3">
                        {AREAS.map((area) => (
                            <span
                                key={area}
                                className="ff-ui rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[14px] font-medium text-white backdrop-blur-sm"
                            >
                                {area}
                            </span>
                        ))}
                        <span className="ff-ui rounded-full border border-[#8FD3D2]/40 bg-[#8FD3D2]/10 px-4 py-2 text-[14px] font-medium text-[#8FD3D2]">
                            + more on request
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}


type Reason = {
    number: string;
    title: string;
    description: string;
    color: string;
};

const REASONS: Reason[] = [
    {
        number: "01",
        title: "15+ years of SEND expertise",
        description:
            "Since 2009, we have specialised in SEND and passenger transport — giving councils, schools and families the confidence that comes from deep experience.",
        color: "#66BBED",
    },
    {
        number: "02",
        title: "Enhanced DBS checked staff",
        description:
            "Every driver and passenger assistant holds an enhanced DBS disclosure. Regular in-house safeguarding training keeps standards high year-round.",
        color: "#F79398",
    },
    {
        number: "03",
        title: "Largest accessible fleet locally",
        description:
            "With 20+ wheelchair-accessible vehicles — ramp and lift equipped, with ISOFIX-compliant restraints — we serve passengers with complex mobility needs.",
        color: "#0EACC2",
    },
    {
        number: "04",
        title: "Familiar driver every morning",
        description:
            "We assign consistent drivers to routes so children and adults build trust with the person picking them up — an often-overlooked detail that matters.",
        color: "#009A65",
    },
    {
        number: "05",
        title: "Council-trusted across the South East",
        description:
            "We hold contracts with local authorities across Berkshire, Oxfordshire and Hampshire — a track record that speaks to our reliability and compliance.",
        color: "#96ADBB",
    },
    {
        number: "06",
        title: "100+ vehicle fleet, one number to call",
        description:
            "Saloon cars, MPVs, minibuses and wheelchair-accessible coaches — whatever the journey, we have the right vehicle and you have one point of contact.",
        color: "#F4A060",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-[#F4F9F9]">
            <div className="section-container section-y">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="ff-ui mb-3 text-[14px] font-semibold uppercase tracking-widest text-[#E2542B]">
                        Why School Express
                    </p>
                    <h2 className="ff-heading text-[32px] font-bold leading-[1.15] text-[#0B4654] md:text-[44px]">
                        What makes us different
                    </h2>
                    <p className="ff-body mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.6] text-[#4A6872]">
                        Safe, reliable specialist transport isn't just about vehicles — it's about the people, processes and experience behind every journey.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {REASONS.map((r) => (
                        <div key={r.number} className="flex flex-col gap-4">
                            {/* Coloured bar + number */}
                            <div className="flex items-center gap-3">
                                <span
                                    className="block h-[6px] w-[47px] rounded-b-[4px]"
                                    style={{ background: r.color }}
                                    aria-hidden="true"
                                />
                                <span className="ff-ui text-[13px] font-semibold text-[#9AAFC2]">
                                    {r.number}
                                </span>
                            </div>

                            <h3 className="ff-heading text-[20px] font-bold leading-snug text-[#0B4654]">
                                {r.title}
                            </h3>
                            <p className="ff-body text-[15px] leading-[1.6] text-[#4A6872]">
                                {r.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


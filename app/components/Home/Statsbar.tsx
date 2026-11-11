type Stat = {
    value: string;
    bold: string; // bold part of paragraph
    rest: string; // regular part of paragraph
    color: string; // top bar color
    mobileOrder: string; // mobile order differs from desktop
};


const STATS: Stat[] = [
    {
        value: "15+",
        bold: "years’ experience",
        rest: " in specialist SEND and passenger transport",
        color: "#66BBED",
        mobileOrder: "order-1",
    },
    {
        value: "10,000+",
        bold: "children transported",
        rest: " safely since we began",
        color: "#F79398",
        mobileOrder: "order-3",
    },
    {
        value: "100+",
        bold: "vehicles",
        rest: " in our fleet, from saloons to minibuses",
        color: "#0EACC2",
        mobileOrder: "order-2",
    },
    {
        value: "20+",
        bold: "wheelchair-accessible vehicles",
        rest: ", the largest fleet in our area",
        color: "#009A65",
        mobileOrder: "order-4",
    },
    {
        value: "200+",
        bold: "drivers and passenger assistants",
        rest: ", all enhanced DBS checked",
        color: "#96ADBB",
        mobileOrder: "order-5",
    },
];

export default function StatsBar() {
    return (
        <section className="w-full bg-[#0E2A33]">
            {/* only left/right padding, no top/bottom */}
            <div className="section-container">
                <ul className="grid grid-cols-2 gap-x-[40px] gap-y-[44px] pb-[40px] xl:grid-cols-5 xl:gap-0 xl:pb-0">
                    {STATS.map((s, i) => (
                        <li
                            key={s.value}
                            className={`flex flex-col xl:order-none xl:pb-[40px] xl:pl-[26px] xl:pr-[22px] ${s.mobileOrder} ${i > 0 ? "xl:border-l xl:border-[#FFFFFF1A]" : ""
                                }`}
                        >
                            <span
                                className="block h-[6px] w-[47px] rounded-b-[4px]"
                                style={{ background: s.color }}
                                aria-hidden="true"
                            />

                            <p className="ff-heading mt-6 text-[40px] font-extrabold leading-none text-white [font-variation-settings:'opsz'_96] xl:mt-[50px] xl:text-[length:min(56px,calc(2.5vw_+_8px))]">
                                {s.value}
                            </p>

                            <p className="ff-body mt-4 text-[15px] font-normal leading-[18px] text-[#B4C4C6]">
                                <strong className="font-bold text-white">{s.bold}</strong>
                                {s.rest}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
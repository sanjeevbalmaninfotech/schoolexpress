import Link from "next/link";

export default function CtaBanner() {
    return (
        <section className="w-full bg-[#E2542B]">
            <div className="section-container section-y">
                <div className="flex flex-col items-center gap-8 text-center">
                    <div>
                        <p className="ff-ui mb-3 text-[14px] font-semibold uppercase tracking-widest text-white/70">
                            Ready to get started?
                        </p>
                        <h2 className="ff-heading text-[32px] font-bold leading-[1.15] text-white md:text-[48px]">
                            Get a quote in minutes
                        </h2>
                        <p className="ff-body mx-auto mt-4 max-w-[520px] text-[18px] leading-[1.6] text-white/80">
                            Tell us about your route and requirements. We&apos;ll get back to you quickly with a no-obligation quote tailored to your needs.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/get-a-quote"
                            className="ff-ui rounded-xl bg-white px-8 py-4 text-[18px] font-semibold text-[#E2542B] shadow-lg transition-opacity hover:opacity-90"
                        >
                            Request a quote
                        </Link>
                        <a
                            href="tel:01491414040"
                            className="ff-ui rounded-xl border-2 border-white/60 px-8 py-4 text-[18px] font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Call 01491 414040
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap justify-center gap-6 text-white/80">
                        {[
                            "No obligation quote",
                            "Response within 24 hours",
                            "15+ years' experience",
                        ].map((item) => (
                            <div key={item} className="ff-ui flex items-center gap-2 text-[14px] font-medium">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.25)" />
                                    <path
                                        d="M5 8l2 2 4-4"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


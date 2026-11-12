import Image from "next/image";
import Link from "next/link";

const TAGS = [
  {
    label: "Parents and carers",
    icon: "/home/icons/men.svg",
    color: "#F59E9A",
  },
  {
    label: "Schools, trusts and colleges",
    icon: "/home/icons/phonepad.svg",
    color: "#6AC5F6",
  },
  {
    label: "Care homes and social care",
    icon: "/home/icons/heartCyan.svg",
    color: "#009D66",
  },
  {
    label: "Groups and events",
    icon: "/home/icons/groups.svg",
    color: "#0BAFC9",
  },
];

const CARDS = [
  {
    // "C:\repos\schoolexpress\public\home\images\Schooltrustsand.jpg"
    href: "/school-college-transport",
    src: "/home/images/Schooltrustsand.jpg",
    alt: "Pupils with backpacks walking towards their school transport",
    title: "Schools, trusts and colleges",
    text: "Daily home-to-school and college runs, booked by families, schools, trusts and colleges.",
    color: "#67BDF5",
  },
  {
    href: "/adult-social-care-transport", // adultsandsocialcare
    src: "/home/images/adultsandsocialcare.jpg",
    alt: "Two carers smiling with an older woman in a wheelchair",
    title: "Adults and social care",
    text: "Travel for adults and care home residents to day centres, appointments and activities.",
    color: "#8FA9BE",
  },
  {
    href: "/group-travel",
    src: "/home/images/grouptravel.jpg",
    alt: "Group of smiling teenagers on a day out",
    title: "Group travel and events",
    text: "Minibus travel for school trips, sports fixtures, proms and outings.",
    color: "#0BAFC9",
  },
  {
    href: "/wheelchair-accessible-transport",
    src: "/home/images/Wheelchairaccessible.jpg",
    alt: "Wheelchair user boarding a van by its ramp",
    title: "Wheelchair accessible",
    text: "20+ accessible vehicles, the largest fleet in our area, for wheelchair users of any age and any journey.",
    color: "#0E9150",
  },
  {
    href: "/send-transport",
    src: "/home/images/additional.jpg",
    alt: "Boy in a wheelchair holding a basketball and smiling",
    title: "SEND and additional needs",
    text: "Trained passenger assistants and journeys planned around each passenger's needs.",
    color: "#F59E9A",
  },
];

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function TransportSection() {
  return (
    <section className="w-full bg-[#0B1E24]">
      <div className="section-container section-y">
        <div className="flex flex-col gap-[20px] md:gap-[45px]">
          {/* 1. Heading */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="section-head max-w-[640px]">
              <h2 className="section-heading">Transport for every passenger</h2>
              <p className="section-paragraph">
                One team, with more than 15 years of SEND expertise behind every
                journey. Whoever you are and wherever you’re going, we’ll plan
                it around the people travelling.
              </p>
            </div>

            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-[17px] font-semibold leading-none text-[#31CDD7]"
            >
              All services
              <ArrowRight className="" />
            </Link>
          </div>

          {/* 2. Who we help */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="w-full text-[13px] font-bold uppercase leading-none tracking-[0.1em] text-[#B5CFDD] xl:w-auto">
              Who we help
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              {TAGS.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-[13px] rounded-[14.29px] border-l-[7.94px] bg-[#112A32] px-5 py-4 shadow-[0.5px_0_0_0.5px_#FFFFFF33]"
                  style={{ borderLeftColor: t.color }}
                >
                  <Image
                    src={t.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 shrink-0"
                  />
                  <span className="text-[15px] font-semibold leading-none text-[#F1F3F4]">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Cards */}
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CARDS.map((c) => (
              <li key={c.href} className="flex">
                <Link
                  href={c.href}
                  className="group flex w-full flex-col overflow-hidden rounded-[14px] border border-[#FFFFFF1A] bg-[#112A32]"
                >
                  <div className="relative h-[208px] w-full">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 1280px) 224px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="h-[10px] w-full"
                    style={{ background: c.color }}
                  />
                  <div className="ff-ui flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-[20px] font-semibold leading-[24px] text-white">
                      {c.title}
                    </h3>
                    <p className="text-[14px] font-normal leading-[18px] text-[#B4C4C6]">
                      {c.text}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-3 text-[17px] font-semibold leading-none text-[#31CDD7]">
                      Find out more
                      <ArrowRight className="" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

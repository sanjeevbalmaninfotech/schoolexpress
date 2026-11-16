import { HomeSlide } from "@/types/home";

const Home_ICON_TOP = "/home/icons/hartinpink.svg";
const Home_ICON_BOTTOM = "/home/icons/busicon.svg";

const HomeCTAS = {
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "Call 01491 414040", href: "tel:01491414040" },
};


export const HomeSlides: HomeSlide[] = [
    {
        tab: "All services",
        badge: "Trusted by local councils across the South East",
        headingWhite: "Safe, reliable transport for every journey,",
        headingAccent: "trusted for 15+ years",
        text: "School and college runs, care home and social care journeys, wheelchair-accessible transport and group travel across the South East. All built on more than 15 years of specialist SEND transport and 10,000+ children carried safely.",
        audience: [
            "Families",
            "Schools and trusts",
            "Colleges",
            "Care homes",
            "Social care",
        ],
        ...HomeCTAS,
        image: {
            src: "/images/children-walking-into-school.jpg",
            alt: "Children with colourful backpacks walking into school",
        },
        statTop: {
            icon: Home_ICON_TOP,
            value: "10,000+",
            label: "children transported safely",
        },
        statBottom: {
            icon: Home_ICON_BOTTOM,
            value: "100+",
            label: "1200+ user ratings",
        },
    },
    {
        tab: "Schools & colleges",
        badge: "School and college transport",
        headingWhite: "Daily school and college runs families rely on",
        text: "Regular home-to-school and college routes with a familiar driver each day, passenger assistants for children who need extra support, and minibuses for school trips and fixtures.",
        audience: ["Parents and carers", "Schools and trusts", "Colleges"],
        ...HomeCTAS,
        image: {
            src: "/images/primary-pupils-walking-to-school.jpg",
            alt: "Primary school pupils in uniform walking together",
        },
        statBottom: { icon: Home_ICON_BOTTOM, label: "A familiar driver every morning" },
    },
    {
        tab: "Care & accessible",
        badge: "Care, social care and accessible transport",
        headingWhite: "Accessible, unhurried travel for adults and care homes",
        text: "Comfortable journeys to day centres, appointments and activities, with ramp and lift access and secure wheelchair restraints. Our 20+ wheelchair-accessible vehicles make up the largest accessible fleet in the area.",
        audience: ["Care homes", "Social care providers", "Adults and families"],
        ...HomeCTAS,
        image: {
            src: "/images/wheelchair-user-accessible-van-lift.jpg",
            alt: "Wheelchair user rolling onto the lowered lift of an accessible van",
        },
        statBottom: {
            icon: Home_ICON_BOTTOM,
            value: "20+",
            label: "accessible vehicles ready to go",
        },
    },
];

export const COLOR_TAGS = [
    "#5BB8F0",
    "#F4A1A1",
    "#0B8C4A",
    "#9AAFC2",
    "#00A9C4",
    "#1F9A8A",
];
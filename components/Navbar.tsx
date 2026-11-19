"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    title: "Schools, trusts and colleges",
    text: "Daily school, trust and college runs",
    href: "/school-college-transport",
  },
  {
    title: "Adults and social care",
    text: "Care homes, day centres and appointments",
    href: "/adult-social-care-transport",
  },
  {
    title: "Group travel and events",
    text: "Trips, fixtures, proms and outings",
    href: "/group-travel",
  },
  {
    title: "Wheelchair accessible",
    text: "The area's largest accessible fleet",
    href: "/wheelchair-accessible-transport",
  },
  {
    title: "SEND and additional needs",
    text: "15+ years of specialist experience",
    href: "/send-transport",
  },
];

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fleet", href: "/about#fleet" },
  { label: "Your Council", href: "/#councils" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const QUOTE_HREF = "/contact#quote";

const navItem =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-[20px] font-medium leading-none text-[color:var(--nav-text)] transition-colors hover:bg-[var(--nav-hover)]";

const ctaButton =
  "rounded-[4px] bg-[#E2542B] px-6 py-3 text-[20px] font-medium leading-none text-white transition-opacity hover:opacity-90";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M3 6l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Track scroll position for shrink + shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Outside click + Esc
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Active link helper
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const activeNavItem = `${navItem} bg-[var(--nav-hover)]`;

  return (
    <header
      ref={navRef}
      className={[
        // ── Sticky ──
        "sticky top-0 z-50 w-full",
        // ── Background: white always, blur + stronger shadow on scroll ──
        "bg-white/95 backdrop-blur-md",
        "transition-shadow duration-300",
        scrolled
          ? "shadow-[0_2px_16px_rgba(14,42,51,0.12)]"
          : "shadow-[0_1px_0_rgba(14,42,51,0.08)]",
      ].join(" ")}
    >
      <div className="section-container">
        {/* ── Bar ── */}
        <div
          className={[
            "flex items-center justify-between transition-[height] duration-300",
            scrolled
              ? "h-[60px] md:h-[68px]"
              : "h-[72px] md:h-[84px] 2xl:h-[100px]",
          ].join(" ")}
        >
          {/* Logo */}
          <Link href="/" aria-label="School Express home" className="shrink-0">
            <Image
              src="/navAndFooter/nav/navIcon.png"
              alt="School Express"
              width={114}
              height={64}
              priority
              className={[
                "h-auto transition-[width] duration-300",
                scrolled
                  ? "w-[70px] md:w-[84px]"
                  : "w-[84px] md:w-[100px] 2xl:w-[114px]",
              ].join(" ")}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-[6px]">
              <li>
                <Link
                  href="/"
                  className={isActive("/") ? activeNavItem : navItem}
                >
                  Home
                </Link>
              </li>

              {/* Services dropdown */}
              <li
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`${navItem} ${servicesOpen || SERVICES.some((s) => isActive(s.href))
                      ? "bg-[var(--nav-hover)]"
                      : ""
                    }`}
                >
                  Services
                  <Chevron open={servicesOpen} />
                </button>

                {/* Dropdown panel — pt-2 keeps hover alive between button and panel */}
                <div
                  className={[
                    "absolute left-0 top-full pt-2",
                    "transition-all duration-200 origin-top",
                    servicesOpen
                      ? "opacity-100 scale-y-100 pointer-events-auto"
                      : "opacity-0 scale-y-95 pointer-events-none",
                  ].join(" ")}
                >
                  <div className="w-[300px] rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <ul>
                      {SERVICES.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className={`block rounded-lg px-4 py-3 transition-colors hover:bg-[var(--nav-hover)] ${isActive(s.href) ? "bg-[var(--nav-hover)]" : ""
                              }`}
                          >
                            <span className="block text-[18px] font-medium leading-snug text-[color:var(--nav-text)]">
                              {s.title}
                            </span>
                            <span className="mt-1 block text-[14px] leading-snug text-[color:var(--nav-text)] opacity-75">
                              {s.text}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mx-4 my-2 h-px bg-black/10" />
                    <Link
                      href="/services"
                      className={`block rounded-lg px-4 py-3 text-[18px] font-medium leading-snug text-[color:var(--nav-text)] transition-colors hover:bg-[var(--nav-hover)] ${isActive("/services") ? "bg-[var(--nav-hover)]" : ""
                        }`}
                    >
                      All services →
                    </Link>
                  </div>
                </div>
              </li>

              {LINKS.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={isActive(l.href) ? activeNavItem : navItem}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link
            href={QUOTE_HREF}
            className={`${ctaButton} hidden xl:inline-block`}
          >
            Get a quote
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[color:var(--nav-text)] xl:hidden"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  d="M5 5l16 16M21 5L5 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 7h20M3 13h20M3 19h20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile / tablet panel ── */}
      <div
        className={[
          "absolute left-0 right-0 top-full overflow-y-auto bg-white",
          "shadow-[0_8px_30px_rgba(0,0,0,0.12)] xl:hidden",
          "transition-all duration-300 origin-top",
          mobileOpen
            ? "max-h-[calc(100dvh-60px)] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="section-container py-4">
          <ul className="flex flex-col gap-[6px]">
            <li>
              <Link
                href="/"
                className={`${isActive("/") ? activeNavItem : navItem} w-full`}
              >
                Home
              </Link>
            </li>

            <li>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`${navItem} w-full justify-between ${mobileServicesOpen ? "bg-[var(--nav-hover)]" : ""
                  }`}
              >
                Services
                <Chevron open={mobileServicesOpen} />
              </button>

              <div
                className={[
                  "overflow-hidden transition-all duration-300",
                  mobileServicesOpen ? "max-h-[600px] mt-1" : "max-h-0",
                ].join(" ")}
              >
                <div className="pl-3">
                  <ul>
                    {SERVICES.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className={`block rounded-lg px-3 py-3 transition-colors hover:bg-[var(--nav-hover)] ${isActive(s.href) ? "bg-[var(--nav-hover)]" : ""
                            }`}
                        >
                          <span className="block text-[18px] font-medium leading-snug text-[color:var(--nav-text)]">
                            {s.title}
                          </span>
                          <span className="mt-1 block text-[14px] leading-snug text-[color:var(--nav-text)] opacity-75">
                            {s.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mx-3 my-2 h-px bg-black/10" />
                  <Link
                    href="/services"
                    className="block rounded-lg px-3 py-3 text-[18px] font-medium leading-snug text-[color:var(--nav-text)] transition-colors hover:bg-[var(--nav-hover)]"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            </li>

            {LINKS.slice(1).map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${isActive(l.href) ? activeNavItem : navItem} w-full`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={QUOTE_HREF}
            className={`${ctaButton} mt-4 block text-center`}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}

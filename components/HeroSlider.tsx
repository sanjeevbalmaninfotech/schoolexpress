"use client";

import { COLOR_TAGS, HomeSlides } from "@/constants/homepage";
import { HomeSlide, Stat } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SLIDE_MS = 5000;

function StatCard({ stat, className }: { stat: Stat; className: string }) {
  return (
    <div
      className={`ff-ui absolute flex items-center gap-3 whitespace-nowrap rounded-xl bg-white p-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${className}`}
    >
      <Image
        src={stat.icon}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
      />
      <div>
        {stat.value && (
          <p className="text-[22px] font-bold leading-tight text-[#0B4654]">
            {stat.value}
          </p>
        )}
        <p className="text-[13px] font-medium leading-tight text-[#0B4654]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function SlideView({
  slide,
  active,
  priority,
}: {
  slide: HomeSlide;
  active: boolean;
  priority: boolean;
}) {
  return (
    <div
      aria-hidden={!active}
      className={`col-start-1 row-start-1 grid grid-cols-1 items-center gap-8 transition-[opacity,visibility] duration-500 lg:grid-cols-2 lg:gap-[20px] ${active ? "visible opacity-100" : "invisible opacity-0"
        }`}
    >
      {/* Left */}
      <div className="flex flex-col gap-[20px]">
        <div className="ff-ui inline-flex w-fit items-center gap-2 rounded-[50px] bg-[#18373D] px-5 py-2 text-[14px] font-medium capitalize text-[#8FD3D2] backdrop-blur-[20px] md:text-[16px]">
          <Image
            src="/home/icons/homeHeroicon.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
          />
          {slide.badge}
        </div>

        <h1 className="ff-heading max-w-[560px] text-[34px] font-bold leading-[1.2] text-white md:text-[40px] xl:text-[56px]">
          {slide.headingWhite}{" "}
          {slide.headingAccent && (
            <span className="text-[#59C6C8]">{slide.headingAccent}</span>
          )}
        </h1>

        <p className="ff-body max-w-[560px] text-[20px] font-normal leading-[1.2] text-[#B4C4C6]">
          {slide.text}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="ff-body text-[13px] font-normal text-[#B4C4C6]">
            For
          </span>
          {slide.audience.map((a) => (
            <span
              key={a}
              className="ff-ui rounded-[50px] border border-[#FFFFFF4D] bg-[#FFFFFF1A] px-[14px] py-1 text-[15px] text-white md:text-[13px]"
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

      {/* Right (image comes first on mobile) */}
      <div className="relative order-first w-full max-w-[520px] lg:order-none lg:justify-self-end">
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
            <span
              key={c}
              className="h-[18px] flex-1 rounded-b-[8px]"
              style={{ background: c }}
            />
          ))}
        </div>

        {slide.statTop && (
          <StatCard
            stat={slide.statTop}
            className="-right-3 -top-6 lg:top-4 lg:-right-[24px] xl:-right-[63px] xl:top-[69px]"
          />
        )}
        {slide.statBottom && (
          <StatCard
            stat={slide.statBottom}
            className="-left-2 bottom-9 lg:bottom-8 lg:-left-[24px] xl:-left-[59px] xl:bottom-[84px]"
          />
        )}
      </div>
    </div>
  );
}

const controlBtn =
  "flex h-[46px] w-[46px] items-center justify-center rounded-[4px] border border-[#FFFFFF1A] bg-[#FFFFFF1A] transition-colors hover:bg-[#FFFFFF33]";

const iconCls = "h-6 w-6";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const total = HomeSlides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Services"
      className="w-full overflow-x-clip bg-[var(--hero-bg)]"
    >
      {/* mobile: 24px side / 56px top-bottom padding (! beats the global unlayered classes) */}
      <div className="section-container section-y max-md:px-6! max-md:py-14!">
        <div className="flex flex-col gap-[50px]">
          {/* Slides (stacked in one grid cell so height never jumps) */}
          <div className="grid">
            {HomeSlides.map((s, i) => (
              <SlideView
                key={s.tab}
                slide={s}
                active={i === index}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Tabs + controls (mobile: controls centered below tabs) */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4 xl:gap-[50px]">
            <div className="flex w-full flex-1 gap-2">
              {HomeSlides.map((s, i) => (
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
                  <span className="mt-3 block text-[14px] font-normal text-[#8FA3A8] transition-colors group-hover:text-white md:truncate md:text-[16px] xl:text-[20px]">
                    {s.tab}
                  </span>
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className={controlBtn}
              >
                <Image
                  src="/home/icons/rightarrow.svg"

                  alt=""
                  width={24}
                  height={24}
                  className={iconCls}
                />
              </button>

              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause autoplay" : "Play autoplay"}
                aria-pressed={!playing}
                className={`${controlBtn} aria-pressed:bg-[#FFFFFF33]`}
              >
                <Image

                  src="/home/icons/leftArrow.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={iconCls}
                />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className={controlBtn}
              >
                <Image
                  src="/home/icons/push.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={iconCls}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
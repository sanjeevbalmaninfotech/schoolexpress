export type Stat = { icon: string; value?: string; label: string };

export type HomeSlide = {
    tab: string;
    badge: string;
    headingWhite: string;
    headingAccent?: string;
    text: string;
    audience: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: { src: string; alt: string };
    statTop?: Stat; // top right of image
    statBottom?: Stat; // bottom left of image
};


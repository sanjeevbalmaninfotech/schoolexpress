# School Express (Next.js)

    npm install
    npm run dev

- Routes: `/`, `/services`, `/school-college-transport`, `/send-transport`, `/wheelchair-accessible-transport`,
  `/adult-social-care-transport`, `/group-travel`, `/about`, `/careers`, `/contact`, `/location-page-template`
- Figma-built Tailwind sections: `components/` (TopBanner, Navbar, HeroSlider, StatsBar, TransportSection, Footer)
- Sections not yet redesigned still use the original stylesheet: `components/legacy/legacy.css`
  (scoped under `.legacy`). Replace them with Tailwind components one by one.
- Not in this zip (your own assets): `public/home/` (icons, fem.svg, slide images)
- Forms post to `#`. Connect them to your form handler / email service.

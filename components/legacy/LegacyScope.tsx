import "./legacy.css";
import Sprite from "./Sprite";

// Wraps the sections that still use the original stylesheet (.legacy).
// Renders the SVG icon sprite once; use a single <LegacyScope> per page.
export default function LegacyScope({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="legacy">
      <Sprite />
      {children}
    </div>
  );
}

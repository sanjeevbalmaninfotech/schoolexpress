import HeroSlider from "@components/Home/Heroslider";
import StatsBar from "@components/Home/Statsbar";
import ServicesGrid from "@components/Home/ServicesGrid";
import WhyChooseUs from "@components/Home/WhyChooseUs";
import Testimonials from "@components/Home/Testimonials";
import AreasCovered from "@components/Home/AreasCovered";
import CtaBanner from "@components/Home/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <AreasCovered />
      <CtaBanner />
    </>
  );
}

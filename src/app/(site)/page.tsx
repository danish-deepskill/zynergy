import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Problems />
      <Services />
      <Features />
      <WhyUs />
      <Pricing />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}

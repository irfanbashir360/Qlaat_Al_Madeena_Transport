import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

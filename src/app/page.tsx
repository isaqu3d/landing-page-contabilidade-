'use client';

import { Footer, Header, HeroSection } from '@/components';
import { BenefitsSection } from '@/components/BenefitsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
}

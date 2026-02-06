import React from 'react';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';
import { SkipLink } from '@/components/SkipLink';
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { AccessibilityDemo } from '@/components/AccessibilityDemo';
import { WhoWeServe } from '@/components/WhoWeServe';
import { WhyNow } from '@/components/WhyNow';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-background">
        {/* Skip Link for Keyboard Navigation */}
        <SkipLink />
        
        {/* Accessibility Toolbar */}
        <AccessibilityToolbar />
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main id="main-content" role="main">
          <HeroSection />
          <HowItWorks />
          <FeaturesGrid />
          <AccessibilityDemo />
          <WhoWeServe />
          <WhyNow />
          <Partners />
          <Testimonials />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </AccessibilityProvider>
  );
};

export default Index;

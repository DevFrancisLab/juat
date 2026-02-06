import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Mic, 
  Smartphone, 
  Monitor, 
  MessageSquare, 
  Phone, 
  Accessibility,
  ArrowRight,
  Play
} from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="hero-gradient text-primary-foreground py-20 md:py-28 lg:py-32 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Accessibility Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-up">
              <Accessibility className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium">Accessibility-First Platform</span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Access Assistive Technology —{' '}
              <span className="text-accent">Made Simple</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              JUAT helps persons with disabilities easily discover, apply for, and track 
              assistive technology and support programs across Kenya.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-6 py-3 sm:px-8 sm:py-6 font-semibold touch-target"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              
            </div>

            {/* Voice Indicator */}
            <div
              className="flex items-center gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                <div className="relative">
                  <Mic className="w-5 h-5 text-accent" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse-subtle" />
                </div>
                <span className="text-sm font-medium">Voice-Enabled Assistance</span>
              </div>
            </div>
          </div>

          {/* Device Mockups */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: '300ms' }}
            aria-hidden="true"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Desktop Mockup */}
              <div className="relative z-20 bg-card rounded-2xl shadow-2xl p-4 transform lg:translate-x-8">
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-primary" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -left-4 lg:-left-12 z-30 bg-card rounded-3xl shadow-2xl p-3 w-28 sm:w-32 lg:w-40">
                <div className="bg-muted rounded-2xl aspect-[9/16] flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-secondary" />
                </div>
              </div>

              {/* Channel Icons */}
              <div className="absolute top-4 -right-4 lg:-right-8 z-10 space-y-3">
                <div className="bg-card rounded-xl p-3 shadow-lg">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <div className="bg-card rounded-xl p-3 shadow-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="bg-accent rounded-xl p-3 shadow-lg">
                  <Mic className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Accessibility Icons */}
              <div className="absolute -bottom-4 right-8 lg:right-16 z-10 flex gap-2">
                <div className="bg-secondary rounded-full p-3 shadow-lg">
                  <Accessibility className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Badges */}
        <div
          className="mt-16 lg:mt-20 animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <p className="text-center text-primary-foreground/60 text-sm mb-6">
            Access JUAT through multiple channels
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Web', 'Mobile App', 'USSD', 'SMS', 'Voice'].map((channel) => (
              <span
                key={channel}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

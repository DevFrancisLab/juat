import React from 'react';
import {
  Landmark,
  Heart,
  Factory,
  Hospital,
  Truck,
  Handshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const partnerTypes = [
  { icon: Landmark, label: 'Government Agencies', count: '12+' },
  { icon: Heart, label: 'NGOs & Foundations', count: '25+' },
  { icon: Factory, label: 'AT Manufacturers', count: '18+' },
  { icon: Hospital, label: 'Healthcare Providers', count: '30+' },
  { icon: Truck, label: 'Distributors', count: '15+' },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="partners-heading"
            className="section-heading font-display"
          >
            Our Partners
          </h2>
          <p className="section-subheading">
            Working together with leading organizations to expand access to assistive technology
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {partnerTypes.map((type) => (
            <div
              key={type.label}
              className="feature-card text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <type.icon className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <p className="font-display text-3xl font-bold text-secondary mb-1">
                {type.count}
              </p>
              <p className="text-sm text-muted-foreground">{type.label}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="font-display text-xl font-bold text-center mb-8">
            Trusted By Leading Organizations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-card rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-24 h-6 bg-border/50 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Partner CTA */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center">
              <Handshake className="w-8 h-8 text-accent-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Become a Partner
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Join our network of partners committed to making assistive technology 
              accessible to all Kenyans with disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold touch-target"
              >
                Partner With Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold touch-target"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

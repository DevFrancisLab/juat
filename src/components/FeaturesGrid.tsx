import React from 'react';
import {
  Layers,
  FileType,
  Bot,
  Database,
  Languages,
  MonitorCheck,
} from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Multi-Channel Access',
    description: 'Access JUAT through web, mobile app, USSD, SMS, or voice — choose what works best for you.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: FileType,
    title: 'Accessible Content Formats',
    description: 'Information available in multiple formats including audio, large text, and screen reader compatible layouts.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Bot,
    title: 'AI Voice & Chat Assistant',
    description: 'Get instant help through our intelligent voice and chat assistant available in local languages.',
    color: 'text-accent',
    bgColor: 'bg-accent/20',
  },
  {
    icon: Database,
    title: 'Centralized Opportunity Database',
    description: 'One platform connecting you to all assistive technology programs and support opportunities in Kenya.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Languages,
    title: 'Local Language Support',
    description: 'Navigate and communicate in English, Kiswahili, and other Kenyan languages.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: MonitorCheck,
    title: 'Screen Reader Friendly UI',
    description: 'Fully compatible with JAWS, NVDA, VoiceOver, and other screen reader technologies.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="py-20 lg:py-28 bg-muted"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="section-heading font-display"
          >
            Platform Features
          </h2>
          <p className="section-subheading">
            Built from the ground up with accessibility and inclusion at its core
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
              >
                <feature.icon
                  className={`w-7 h-7 ${feature.color}`}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

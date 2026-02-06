import React from 'react';
import {
  Landmark,
  Smartphone,
  Bot,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const reasons = [
  {
    icon: Landmark,
    title: 'Digital Government Initiative',
    description: 'Kenya\'s government is investing heavily in digital transformation, creating opportunities for inclusive platforms.',
    stat: '90%',
    statLabel: 'of government services going digital',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Nation',
    description: 'With over 90% mobile penetration, Kenya is ready for accessible digital solutions that meet people where they are.',
    stat: '59M+',
    statLabel: 'mobile subscriptions in Kenya',
  },
  {
    icon: Bot,
    title: 'AI Voice Technology',
    description: 'Advances in AI and voice recognition now enable natural language interaction in local Kenyan languages.',
    stat: '40+',
    statLabel: 'Kenyan languages supported',
  },
  {
    icon: TrendingUp,
    title: 'Inclusion Momentum',
    description: 'Growing global focus on disability inclusion creates unprecedented opportunities for impact.',
    stat: '4.6M',
    statLabel: 'Kenyans with disabilities',
  },
];

export function WhyNow() {
  return (
    <section
      className="py-20 lg:py-28 hero-gradient text-primary-foreground"
      aria-labelledby="why-now-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="why-now-heading"
            className="section-heading font-display text-primary-foreground"
          >
            Why Now?
          </h2>
          <p className="section-subheading text-primary-foreground/80 max-w-2xl mx-auto">
            The convergence of technology, policy, and social momentum creates the perfect 
            opportunity for transformative change
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="glass rounded-2xl p-8 group hover:bg-card transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {reason.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-secondary">
                      {reason.stat}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {reason.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#partners"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors touch-target"
          >
            Join the Movement
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

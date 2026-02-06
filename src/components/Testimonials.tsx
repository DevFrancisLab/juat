import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'JUAT has transformed how we connect our members with assistive technology programs. The multi-channel access means no one is left behind.',
    author: 'Mary Wanjiku',
    role: 'Program Director',
    organization: 'Kenya Disability Support Network',
    avatar: 'MW',
  },
  {
    quote: 'The voice navigation feature is a game-changer. I can now independently search and apply for support programs in my own language.',
    author: 'John Ochieng',
    role: 'Beneficiary',
    organization: 'Nairobi',
    avatar: 'JO',
  },
  {
    quote: 'As a government partner, JUAT helps us reach more citizens with disabilities and track program outcomes effectively.',
    author: 'Dr. Grace Muthoni',
    role: 'Deputy Director',
    organization: 'National Council for Persons with Disabilities',
    avatar: 'GM',
  },
];

export function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28 bg-muted"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="section-heading font-display"
          >
            What People Say
          </h2>
          <p className="section-subheading">
            Hear from beneficiaries and partners using JUAT
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className="testimonial-card flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-secondary/30" aria-hidden="true" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="flex-1">
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-4 pt-6 border-t border-border">
                <div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
                  aria-hidden="true"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="not-italic">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-secondary font-medium">
                      {testimonial.organization}
                    </p>
                  </cite>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

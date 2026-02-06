import React from 'react';
import { 
  LogIn, 
  Search, 
  FileText, 
  BarChart3,
  ArrowRight,
  Globe,
  Smartphone,
  Hash,
  MessageSquare,
  Mic
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Access',
    description: 'Connect through web, mobile app, USSD, SMS, or voice call',
    icon: LogIn,
    color: 'bg-primary',
  },
  {
    number: 2,
    title: 'Discover',
    description: 'Find assistive technologies and support programs tailored to your needs',
    icon: Search,
    color: 'bg-secondary',
  },
  {
    number: 3,
    title: 'Apply',
    description: 'Submit applications with guided assistance in your preferred language',
    icon: FileText,
    color: 'bg-primary',
  },
  {
    number: 4,
    title: 'Track',
    description: 'Monitor your application status and receive updates',
    icon: BarChart3,
    color: 'bg-secondary',
  },
];

const channels = [
  { name: 'Web', icon: Globe, description: 'Full-featured web platform' },
  { name: 'Mobile', icon: Smartphone, description: 'iOS & Android apps' },
  { name: 'USSD', icon: Hash, description: 'Dial *XXX# to access' },
  { name: 'SMS', icon: MessageSquare, description: 'Text-based navigation' },
  { name: 'Voice', icon: Mic, description: 'Call & speak naturally' },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="section-heading font-display"
          >
            How JUAT Works
          </h2>
          <p className="section-subheading">
            A simple four-step process to access assistive technology and support programs
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-1 bg-border"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`step-circle ${step.color} transition-transform group-hover:scale-110`}
                  >
                    {step.number}
                  </div>
                  {/* Arrow for non-last items on desktop */}
                  {index < steps.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon
                    className={`w-10 h-10 mx-auto ${
                      step.color === 'bg-primary' ? 'text-primary' : 'text-secondary'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Channels */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Choose Your Preferred Channel
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="feature-card text-center group cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <channel.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{channel.name}</h4>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

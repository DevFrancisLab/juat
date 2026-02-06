import React from 'react';
import {
  User,
  Heart,
  Users,
  Building2,
  GraduationCap,
  Briefcase,
  Landmark,
  Hospital,
  Factory,
  Truck,
} from 'lucide-react';

const beneficiaries = [
  { icon: User, label: 'Persons with Disabilities', description: 'Seeking assistive technology and support' },
  { icon: Heart, label: 'Caregivers & Families', description: 'Supporting loved ones with disabilities' },
  { icon: Users, label: 'Disability Organizations', description: 'Connecting members to opportunities' },
  { icon: GraduationCap, label: 'Students', description: 'Accessing educational support resources' },
  { icon: Briefcase, label: 'Job Seekers', description: 'Finding inclusive employment opportunities' },
];

const institutions = [
  { icon: Landmark, label: 'Government Agencies', description: 'Managing disability support programs' },
  { icon: Building2, label: 'NGOs & Foundations', description: 'Distributing assistive technology' },
  { icon: Hospital, label: 'Healthcare Providers', description: 'Connecting patients to resources' },
  { icon: Factory, label: 'AT Manufacturers', description: 'Reaching beneficiaries directly' },
  { icon: Truck, label: 'Distributors', description: 'Streamlining delivery of devices' },
];

export function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="py-20 lg:py-28 bg-muted"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="who-we-serve-heading"
            className="section-heading font-display"
          >
            Who JUAT Serves
          </h2>
          <p className="section-subheading">
            Connecting beneficiaries with institutions to create an inclusive ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Beneficiaries */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Beneficiaries
              </h3>
            </div>

            <div className="space-y-4">
              {beneficiaries.map((item) => (
                <article
                  key={item.label}
                  className="feature-card flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Institutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Institutions
              </h3>
            </div>

            <div className="space-y-4">
              {institutions.map((item) => (
                <article
                  key={item.label}
                  className="feature-card flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Connection Visual */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-2xl shadow-card">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-8 h-0.5 bg-border" aria-hidden="true" />
              <span className="font-display font-bold text-lg text-primary">JUAT</span>
              <span className="w-8 h-0.5 bg-border" aria-hidden="true" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
          </div>
          <p className="text-muted-foreground mt-4">
            Bridging the gap between those who need support and those who provide it
          </p>
        </div>
      </div>
    </section>
  );
}

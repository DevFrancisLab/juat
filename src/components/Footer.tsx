import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Accessibility,
  Check,
} from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Accessibility', href: '#accessibility' },
    { label: 'Channels', href: '#how-it-works' },
  ],
  resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Community', href: '#' },
  ],
  partners: [
    { label: 'Become a Partner', href: '#partners' },
    { label: 'Partner Portal', href: '#' },
    { label: 'API Access', href: '#' },
    { label: 'Integration Guide', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility Statement', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2 mb-6"
              aria-label="JUAT - Home"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">J</span>
              </div>
              <span className="font-display font-bold text-2xl text-primary-foreground">JUAT</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Connecting persons with disabilities to assistive technology and support 
              programs across Kenya through accessible digital channels.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@juat.ke"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>info@juat.ke</span>
              </a>
              <a
                href="tel:+254700000000"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+254 700 000 000</span>
              </a>
              <p className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>Nairobi, Kenya</span>
              </p>
            </div>
          </div>

          {/* Platform Links */}
          <nav aria-label="Platform links">
            <h3 className="font-display font-bold text-primary-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources Links */}
          <nav aria-label="Resources links">
            <h3 className="font-display font-bold text-primary-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Partners Links */}
          <nav aria-label="Partner links">
            <h3 className="font-display font-bold text-primary-foreground mb-4">Partners</h3>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal links">
            <h3 className="font-display font-bold text-primary-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Accessibility Statement & Compliance */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Accessibility Statement */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Accessibility className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">
                  Accessibility Statement
                </h3>
                <p className="text-sm text-primary-foreground/70 max-w-lg">
                  JUAT is committed to ensuring digital accessibility for persons with disabilities. 
                  We continually improve the user experience for everyone and apply relevant 
                  accessibility standards.
                </p>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg">
                <Check className="w-4 h-4 text-success" aria-hidden="true" />
                <span className="text-sm font-medium text-primary-foreground">WCAG 2.1 AA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg">
                <Check className="w-4 h-4 text-success" aria-hidden="true" />
                <span className="text-sm font-medium text-primary-foreground">Section 508</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} JUAT. All rights reserved. Made with ♥ in Kenya.
            </p>

            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

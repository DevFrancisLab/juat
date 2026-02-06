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
  Play,
  Search,
  Volume2,
  Contrast,
  Type,
  Zap,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  MessageCircle,
  MapPin,
  ChevronRight,
  Headphones,
  Lightbulb,
  PhoneCall,
  Settings
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
              {/* Desktop Mockup - Discovery Dashboard */}
              <div className="relative z-20 bg-card rounded-2xl shadow-2xl overflow-hidden transform lg:translate-x-8 border border-border">
                {/* Browser Header */}
                <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 ml-4 text-xs text-muted-foreground">juat.co.ke/discover</div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-background">
                  {/* Header with Accessibility Controls */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-accent rounded-lg" />
                      <span className="font-bold text-sm">JUAT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Text Size">
                        <Type className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="High Contrast">
                        <Contrast className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Text-to-Speech">
                        <Volume2 className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-5">
                    <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-lg border border-border">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Search assistive tools, services, or support..." 
                        className="bg-transparent text-sm flex-1 outline-none placeholder-muted-foreground"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Categories:</span>
                    <div className="flex flex-wrap gap-2 w-full">
                      <button className="flex items-center gap-2 px-3 py-2 bg-accent/20 text-accent rounded-lg text-xs font-medium hover:bg-accent/30 transition-colors">
                        <Zap className="w-3 h-3" /> Mobility
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg text-xs font-medium transition-colors">
                        <Headphones className="w-3 h-3" /> Hearing
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg text-xs font-medium transition-colors">
                        <Lightbulb className="w-3 h-3" /> Vision
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg text-xs font-medium transition-colors">
                        <GraduationCap className="w-3 h-3" /> Education
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg text-xs font-medium transition-colors">
                        <Briefcase className="w-3 h-3" /> Jobs
                      </button>
                    </div>
                  </div>

                  {/* Result Cards */}
                  <div className="space-y-3">
                    {/* Card 1 */}
                    <div className="p-3 bg-muted/30 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Hearing Loops</h4>
                          <p className="text-xs text-muted-foreground mt-1">FM systems for clear sound in noisy environments</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded">NGO Provider</span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded">All Ages</span>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-3 bg-muted/30 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Mobility Grants Program</h4>
                          <p className="text-xs text-muted-foreground mt-1">Government funding for wheelchairs and mobility aids</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded">Government</span>
                        <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded">18+ Eligible</span>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-3 bg-muted/30 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Screen Reader Training</h4>
                          <p className="text-xs text-muted-foreground mt-1">Free NVDA & JAWS training for visually impaired users</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded">Private</span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded">Free</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup - AI Assistant Experience */}
              <div className="absolute -bottom-8 -left-4 lg:-left-12 z-30 bg-card rounded-3xl shadow-2xl p-3 w-32 lg:w-40 border border-border overflow-hidden">
                {/* Phone Status Bar */}
                <div className="bg-muted/50 rounded-2xl px-3 py-2 text-xs text-muted-foreground flex justify-between mb-2">
                  <span>9:41</span>
                  <span className="flex gap-0.5">📶 📡 🔋</span>
                </div>

                {/* Chat Content */}
                <div className="bg-background rounded-2xl p-3 h-64 lg:h-80 flex flex-col justify-between">
                  {/* Messages */}
                  <div className="space-y-2 flex-1 overflow-hidden">
                    {/* Assistant Message */}
                    <div className="flex gap-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-accent rounded-full flex-shrink-0" />
                      <div className="bg-muted rounded-lg p-2 text-xs lg:text-sm max-w-xs">
                        <p className="font-semibold text-accent mb-1">JUAT Assistant</p>
                        <p className="text-foreground">I found 12 hearing support programs available in Nairobi.</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 mt-3 pl-8">
                      <button className="w-full text-left px-2 py-1.5 bg-accent/20 text-accent rounded text-xs font-medium hover:bg-accent/30 transition-colors truncate">
                        📱 Find Hearing Devices
                      </button>
                      <button className="w-full text-left px-2 py-1.5 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium hover:bg-blue-500/30 transition-colors truncate">
                        🎯 Check Support Programs
                      </button>
                      <button className="w-full text-left px-2 py-1.5 bg-green-500/20 text-green-700 dark:text-green-300 rounded text-xs font-medium hover:bg-green-500/30 transition-colors truncate">
                        ✅ Apply for Assistance
                      </button>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="flex gap-2 pt-2 border-t border-border">
                    <button className="p-2 bg-accent/20 text-accent rounded hover:bg-accent/30 transition-colors flex-shrink-0">
                      <Mic className="w-4 h-4" />
                    </button>
                    <input 
                      type="text" 
                      placeholder="Ask..." 
                      className="flex-1 bg-muted rounded px-2 py-1.5 text-xs outline-none placeholder-muted-foreground"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Channel Icons */}
              <div className="absolute top-4 -right-4 lg:-right-8 z-10 space-y-3">
                <div className="bg-card rounded-xl p-3 shadow-lg border border-border hover:border-accent/50 transition-colors">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <div className="bg-card rounded-xl p-3 shadow-lg border border-border hover:border-accent/50 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="bg-accent rounded-xl p-3 shadow-lg">
                  <Mic className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Accessibility Indicator */}
              <div className="absolute -bottom-4 right-8 lg:right-16 z-10 flex gap-2">
                <div className="bg-secondary rounded-full p-3 shadow-lg border border-border hover:border-secondary/80 transition-colors">
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

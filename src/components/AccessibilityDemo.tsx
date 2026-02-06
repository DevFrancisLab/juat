import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ZoomIn,
  ZoomOut,
  Contrast,
  Volume2,
  Keyboard,
  Mic,
  Eye,
  Type,
  Check,
} from 'lucide-react';

interface DemoControl {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  active: boolean;
}

export function AccessibilityDemo() {
  const [demoControls, setDemoControls] = useState<DemoControl[]>([
    { id: 'font-resize', icon: Type, label: 'Font Resize', description: 'Increase or decrease text size for better readability', active: false },
    { id: 'contrast', icon: Contrast, label: 'High Contrast', description: 'Toggle high contrast mode for improved visibility', active: false },
    { id: 'read-aloud', icon: Volume2, label: 'Read Aloud', description: 'Have page content read to you audibly', active: false },
    { id: 'keyboard', icon: Keyboard, label: 'Keyboard Navigation', description: 'Navigate the entire platform using only your keyboard', active: false },
    { id: 'voice', icon: Mic, label: 'Voice Navigation', description: 'Control the platform using voice commands', active: false },
    { id: 'screen-reader', icon: Eye, label: 'Screen Reader', description: 'Full compatibility with assistive screen reader software', active: true },
  ]);

  const toggleControl = (id: string) => {
    setDemoControls(controls =>
      controls.map(control =>
        control.id === id ? { ...control, active: !control.active } : control
      )
    );
  };

  const [demoFontSize, setDemoFontSize] = useState(16);

  return (
    <section
      id="accessibility"
      className="py-20 lg:py-28 bg-background"
      aria-labelledby="accessibility-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="accessibility-heading"
            className="section-heading font-display"
          >
            Accessibility Features
          </h2>
          <p className="section-subheading">
            Experience our accessibility controls — try them out right here
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Demo */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card order-2 lg:order-1">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Interactive Demo
            </h3>

            {/* Demo Preview Area */}
            <div
              className="bg-muted rounded-xl p-6 mb-6"
              style={{ fontSize: `${demoFontSize}px` }}
              role="region"
              aria-label="Demo preview area"
            >
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Sample Content:</strong> This text demonstrates how JUAT's 
                accessibility features work. Try adjusting the font size or enabling 
                different accessibility modes.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={demoControls.find(c => c.id === 'contrast')?.active ? 'bg-foreground text-background' : ''}
                >
                  Sample Button
                </Button>
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground"
                >
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Font Size Controls */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-muted rounded-xl">
              <span className="font-medium text-foreground">Font Size:</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDemoFontSize(s => Math.max(12, s - 2))}
                aria-label="Decrease font size"
                className="touch-target"
              >
                <ZoomOut className="w-4 h-4" aria-hidden="true" />
              </Button>
              <span className="text-muted-foreground w-16 text-center" aria-live="polite">
                {demoFontSize}px
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDemoFontSize(s => Math.min(24, s + 2))}
                aria-label="Increase font size"
                className="touch-target"
              >
                <ZoomIn className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            {/* Control Toggles */}
            <div className="space-y-3">
              {demoControls.slice(0, 3).map((control) => (
                <button
                  key={control.id}
                  onClick={() => toggleControl(control.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all touch-target ${
                    control.active
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                  role="switch"
                  aria-checked={control.active}
                >
                  <control.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">{control.label}</span>
                  <div
                    className={`ml-auto w-10 h-6 rounded-full relative transition-colors ${
                      control.active ? 'bg-accent' : 'bg-border'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-card transition-transform ${
                        control.active ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {demoControls.map((control) => (
              <article
                key={control.id}
                className={`feature-card flex items-start gap-4 transition-all ${
                  control.active ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    control.active ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <control.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">
                      {control.label}
                    </h3>
                    {control.active && (
                      <span className="flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                        <Check className="w-3 h-3" aria-hidden="true" />
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {control.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Compliance Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-success/10 text-success rounded-full">
            <Check className="w-5 h-5" aria-hidden="true" />
            <span className="font-semibold">WCAG 2.1 AA/AAA Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

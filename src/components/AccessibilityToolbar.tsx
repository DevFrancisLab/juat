import React, { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import {
  Minus,
  Plus,
  Contrast,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Keyboard,
  Mic,
  Globe,
  ChevronDown,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'ki', name: 'Kikuyu' },
  { code: 'luo', name: 'Dholuo' },
  { code: 'kal', name: 'Kalenjin' },
];

export function AccessibilityToolbar() {
  const {
    fontSize,
    highContrast,
    darkMode,
    keyboardNav,
    isSpeaking,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleDarkMode,
    toggleKeyboardNav,
    speakPage,
    stopSpeaking,
  } = useAccessibility();

  const [selectedLang, setSelectedLang] = useState('en');
  const [voiceNavActive, setVoiceNavActive] = useState(false);

  return (
    <nav
      className="a11y-toolbar"
      role="navigation"
      aria-label="Accessibility toolbar"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <span className="sr-only">Accessibility Controls</span>
          
          {/* Font Size Controls */}
          <div className="flex items-center gap-1 mr-2" role="group" aria-label="Text size controls">
            <button
              className="a11y-btn touch-target"
              onClick={decreaseFontSize}
              aria-label="Decrease text size"
              disabled={fontSize === 'sm'}
            >
              <Minus className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">A-</span>
            </button>
            <button
              className="a11y-btn touch-target"
              onClick={increaseFontSize}
              aria-label="Increase text size"
              disabled={fontSize === '2xl'}
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">A+</span>
            </button>
          </div>

          {/* High Contrast */}
          <button
            className="a11y-btn touch-target"
            onClick={toggleHighContrast}
            aria-pressed={highContrast}
            aria-label={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
          >
            <Contrast className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Contrast</span>
          </button>

          {/* Dark/Light Mode */}
          <button
            className="a11y-btn touch-target"
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>

          {/* Text to Speech */}
          <button
            className="a11y-btn touch-target"
            onClick={isSpeaking ? stopSpeaking : speakPage}
            aria-pressed={isSpeaking}
            aria-label={isSpeaking ? 'Stop reading page' : 'Read page aloud'}
          >
            {isSpeaking ? (
              <VolumeX className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Volume2 className="w-4 h-4" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">{isSpeaking ? 'Stop' : 'Read'}</span>
          </button>

          {/* Keyboard Navigation */}
          <button
            className="a11y-btn touch-target"
            onClick={toggleKeyboardNav}
            aria-pressed={keyboardNav}
            aria-label={keyboardNav ? 'Hide keyboard focus indicators' : 'Show keyboard focus indicators'}
          >
            <Keyboard className="w-4 h-4" aria-hidden="true" />
            <span className="hidden md:inline">Keyboard</span>
          </button>

          {/* Voice Navigation */}
          <button
            className="a11y-btn touch-target"
            onClick={() => setVoiceNavActive(!voiceNavActive)}
            aria-pressed={voiceNavActive}
            aria-label={voiceNavActive ? 'Disable voice navigation' : 'Enable voice navigation'}
          >
            <Mic className="w-4 h-4" aria-hidden="true" />
            <span className="hidden md:inline">Voice</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="a11y-btn touch-target"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">
                  {languages.find(l => l.code === selectedLang)?.name}
                </span>
                <ChevronDown className="w-3 h-3" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className="cursor-pointer"
                >
                  <span className={selectedLang === lang.code ? 'font-bold' : ''}>
                    {lang.name}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Keyboard Nav Indicator */}
          {keyboardNav && (
            <div
              className="flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
              role="status"
              aria-live="polite"
            >
              <Keyboard className="w-3 h-3" aria-hidden="true" />
              <span>Tab to navigate</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

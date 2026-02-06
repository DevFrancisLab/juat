import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AccessibilityState {
  fontSize: 'normal' | 'sm' | 'lg' | 'xl' | '2xl';
  highContrast: boolean;
  darkMode: boolean;
  keyboardNav: boolean;
  isSpeaking: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleHighContrast: () => void;
  toggleDarkMode: () => void;
  toggleKeyboardNav: () => void;
  speakPage: () => void;
  stopSpeaking: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const fontSizes = ['sm', 'normal', 'lg', 'xl', '2xl'] as const;

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccessibilityState>({
    fontSize: 'normal',
    highContrast: false,
    darkMode: false,
    keyboardNav: false,
    isSpeaking: false,
  });

  // Apply font size to HTML element
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('text-sm', 'text-lg', 'text-xl', 'text-2xl');
    if (state.fontSize !== 'normal') {
      html.classList.add(`text-${state.fontSize}`);
    }
  }, [state.fontSize]);

  // Apply dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (state.darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [state.darkMode]);

  // Apply high contrast
  useEffect(() => {
    const html = document.documentElement;
    if (state.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }
  }, [state.highContrast]);

  // Apply keyboard nav indicator
  useEffect(() => {
    const html = document.documentElement;
    if (state.keyboardNav) {
      html.classList.add('keyboard-nav');
    } else {
      html.classList.remove('keyboard-nav');
    }
  }, [state.keyboardNav]);

  // Detect keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setState(prev => ({ ...prev, keyboardNav: true }));
      }
    };

    const handleMouseDown = () => {
      setState(prev => ({ ...prev, keyboardNav: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const increaseFontSize = useCallback(() => {
    setState(prev => {
      const currentIndex = fontSizes.indexOf(prev.fontSize);
      if (currentIndex < fontSizes.length - 1) {
        return { ...prev, fontSize: fontSizes[currentIndex + 1] };
      }
      return prev;
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setState(prev => {
      const currentIndex = fontSizes.indexOf(prev.fontSize);
      if (currentIndex > 0) {
        return { ...prev, fontSize: fontSizes[currentIndex - 1] };
      }
      return prev;
    });
  }, []);

  const toggleHighContrast = useCallback(() => {
    setState(prev => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const toggleKeyboardNav = useCallback(() => {
    setState(prev => ({ ...prev, keyboardNav: !prev.keyboardNav }));
  }, []);

  const speakPage = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const mainContent = document.querySelector('main');
      const text = mainContent?.textContent || document.body.textContent || '';
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-KE';
      utterance.rate = 0.9;
      utterance.onend = () => setState(prev => ({ ...prev, isSpeaking: false }));
      utterance.onerror = () => setState(prev => ({ ...prev, isSpeaking: false }));
      window.speechSynthesis.speak(utterance);
      setState(prev => ({ ...prev, isSpeaking: true }));
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setState(prev => ({ ...prev, isSpeaking: false }));
    }
  }, []);

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        increaseFontSize,
        decreaseFontSize,
        toggleHighContrast,
        toggleDarkMode,
        toggleKeyboardNav,
        speakPage,
        stopSpeaking,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

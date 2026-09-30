import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Calendar,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  onOpenGpGuide: () => void;
  onOpenContact: () => void;
  onGoHome?: () => void;
  onNavigateSection?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGpGuide,
  onOpenContact,
  onGoHome,
  onNavigateSection,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll detection: hides when scrolling down, reveals when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if user has scrolled past top margin
      setIsScrolled(currentScrollY > 20);

      // Top of page: always reveal
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 8) {
        // Scrolling down by more than 8px -> hide navbar
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (lastScrollY.current - currentScrollY > 8) {
        // Scrolling up by more than 8px -> reveal navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoHome) {
      onGoHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
      }`}
    >
      {/* Floating Pill Container */}
      <div
        className={`relative bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-200 border ${
          isScrolled
            ? 'shadow-lg shadow-black/8 border-stone-200/90'
            : 'shadow-md shadow-black/5 border-stone-200/70'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* LEFT: Official Brand Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            id="header-brand-logo"
            className="flex items-center group text-decoration-none focus:outline-none shrink-0"
            aria-label="GOQii Home"
          >
            <img
              src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
              alt="GOQii"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* CENTER: Desktop Navigation matching website sections */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-medium text-stone-700"
            aria-label="Main Navigation"
          >
            {/* 1. Care Pathways */}
            <button
              onClick={() => scrollToSection('care-programmes')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              Care Pathways
            </button>

            {/* 2. How It Works */}
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              How It Works
            </button>

            {/* 3. Clinical Outcomes / Evidence */}
            <button
              onClick={() => scrollToSection('health-outcomes')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              Evidence
            </button>

            {/* 4. Patient Stories */}
            <button
              onClick={() => scrollToSection('patient-stories')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              Stories
            </button>

            {/* 5. UK Network */}
            <button
              onClick={() => scrollToSection('uk-network')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              UK Network
            </button>

            {/* 6. About GOQii UK */}
            <button
              onClick={() => scrollToSection('about-platform')}
              className="px-3 py-1.5 rounded-full hover:text-stone-950 hover:bg-stone-100/70 transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* RIGHT: High-contrast Gradient "Request a Demo" CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="header-request-demo-btn"
              onClick={() => {
                scrollToSection('contact-section');
              }}
              className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#0d9488] hover:opacity-95 text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 active:scale-95"
            >
              <span>Request a Demo</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-700 hover:text-stone-950 rounded-full lg:hidden hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden mt-3 pt-3 border-t border-stone-100 pb-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 text-stone-800"
          >
            <div className="grid grid-cols-1 gap-0.5">
              <button
                onClick={() => scrollToSection('care-programmes')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Care Pathways & Programmes</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>How It Works (People, Data & Prevention)</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('methodology')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>The GOQii Methodology & 4 Pillars</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('goqii-app')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Connected App & Medical Devices</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('health-outcomes')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Clinical Outcomes & Evidence</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('patient-stories')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Patient Stories</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>Certifications & NHS Compliance</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('uk-network')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>UK Healthcare Network (Modality Partnership)</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
              <button
                onClick={() => scrollToSection('about-platform')}
                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl hover:bg-stone-100 flex items-center justify-between"
              >
                <span>About GOQii UK</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGpGuide();
                }}
                className="w-full py-2 px-4 text-xs font-semibold text-[#0d9488] bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Talk to your GP (Referral Checklist)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('contact-section');
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#10b981] to-[#0d9488] rounded-full flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Request a Demo / Message Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

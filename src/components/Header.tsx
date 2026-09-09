import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Activity,
  Heart,
  FileText,
  Layers,
  Sparkles,
  Smartphone,
  BarChart2,
  Users,
  Building2,
  Info,
  Calendar,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  onOpenGpGuide: () => void;
  onOpenContact: () => void;
}


export const Header: React.FC<HeaderProps> = ({ onOpenGpGuide, onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'programmes' | 'methodology' | null>(null);
  
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        setActiveDropdown(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (dropdown: 'programmes' | 'methodology') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
            {/* 1. Care Pathways Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('programmes')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'programmes' ? null : 'programmes')}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeDropdown === 'programmes'
                    ? 'text-[#0d9488] bg-teal-50/80 font-semibold'
                    : 'hover:text-stone-950 hover:bg-stone-100/70'
                }`}
              >
                <span>Care Pathways</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    activeDropdown === 'programmes' ? 'rotate-180 text-[#0d9488]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu for Care Pathways */}
              {activeDropdown === 'programmes' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl p-2 shadow-xl border border-stone-200/90 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Clinical Care Pathways
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { title: 'Diabetes Reversal & Management', tag: 'Metabolic Care', id: 'care-programmes' },
                      { title: 'Hypertension & Heart Health', tag: 'Cardiovascular', id: 'care-programmes' },
                      { title: 'Chronic Kidney Disease (CKD)', tag: 'Renal Care', id: 'care-programmes' },
                      { title: 'Clinical Weight Management', tag: 'Metabolic & Obesity', id: 'care-programmes' },
                      { title: 'Pre-diabetes & Prevention', tag: 'Early Intervention', id: 'care-programmes' },
                      { title: 'Active Longevity & Vitality', tag: 'Healthy Ageing', id: 'care-programmes' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors group flex items-start justify-between gap-2"
                      >
                        <div>
                          <div className="text-xs font-semibold text-stone-800 group-hover:text-[#0d9488] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-stone-400 font-normal">
                            {item.tag}
                          </div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-stone-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. How It Works Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('methodology')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'methodology' ? null : 'methodology')}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeDropdown === 'methodology'
                    ? 'text-[#0d9488] bg-teal-50/80 font-semibold'
                    : 'hover:text-stone-950 hover:bg-stone-100/70'
                }`}
              >
                <span>How It Works</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                    activeDropdown === 'methodology' ? 'rotate-180 text-[#0d9488]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu for How It Works */}
              {activeDropdown === 'methodology' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl p-2 shadow-xl border border-stone-200/90 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Clinical Methodology
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => scrollToSection('how-it-works')}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors group flex items-center gap-2.5"
                    >
                      <Layers className="w-4 h-4 text-[#0d9488]" />
                      <div>
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-[#0d9488]">
                          People, Data & Prevention
                        </div>
                        <div className="text-[10px] text-stone-400">The 3-tier care model</div>
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToSection('methodology')}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors group flex items-center gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-[#0d9488]">
                          4-Stage Care Pathway
                        </div>
                        <div className="text-[10px] text-stone-400">Plan • Initiate • Thrive • Data</div>
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToSection('clinical-methodology')}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors group flex items-center gap-2.5"
                    >
                      <Heart className="w-4 h-4 text-rose-500" />
                      <div>
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-[#0d9488]">
                          4 Pillars of Health
                        </div>
                        <div className="text-[10px] text-stone-400">Move • Eat • Sleep • Stress</div>
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToSection('goqii-app')}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-stone-50 transition-colors group flex items-center gap-2.5"
                    >
                      <Smartphone className="w-4 h-4 text-blue-500" />
                      <div>
                        <div className="text-xs font-semibold text-stone-800 group-hover:text-[#0d9488]">
                          Connected App & Devices
                        </div>
                        <div className="text-[10px] text-stone-400">Smart devices & live analytics</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

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

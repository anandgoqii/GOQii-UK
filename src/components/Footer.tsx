import React, { useState } from 'react';
import { ArrowUp, X, ShieldCheck } from 'lucide-react';
import { GOQII_UK_CONTACT } from '../data/content';

interface FooterProps {
  onOpenGpGuide: () => void;
  onOpenContact: () => void;
  onOpenPrivacyPolicy?: () => void;
  onNavigateSection?: (id: string) => void;
  onGoHome?: () => void;
}

type ModalType = 'privacy' | 'terms' | 'accessibility' | null;

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenPrivacyPolicy,
  onNavigateSection,
  onGoHome,
}) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#f9faf9] text-stone-600 border-t border-stone-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200/80">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onGoHome) {
                onGoHome();
              } else {
                scrollToTop();
              }
            }}
            className="inline-block focus:outline-none"
            aria-label="GOQii Home"
          >
            <img
              src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
              alt="GOQii"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Navigation Tabs */}
          <nav className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-[13px] font-medium text-stone-600">
            <button
              onClick={() => scrollToSection('about-platform')}
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              About
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                if (onOpenPrivacyPolicy) {
                  onOpenPrivacyPolicy();
                } else {
                  setActiveModal('privacy');
                }
              }}
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              Terms and Conditions
            </button>
            <a
              href="https://insight.goqii.com/goqii_uk_home/assets/pdf/GOQii-UK-Compliance-Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              Compliance
            </a>
            <a
              href="https://insight.goqii.com/goqii_uk_home/assets/pdf/GOQii-Accessibility-Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors focus:outline-none cursor-pointer"
            >
              Accessibility Statement
            </a>
          </nav>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {GOQII_UK_CONTACT.companyName}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-md bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 shadow-xs transition-colors"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Policy & Compliance Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <h3 className="text-base font-bold text-stone-900">
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms and Conditions'}
                  {activeModal === 'accessibility' && 'Accessibility Statement'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto text-xs sm:text-sm text-stone-600 leading-relaxed space-y-4">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    <strong>GOQii UK Limited</strong> is committed to protecting and respecting your privacy. In accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, all personal and medical health data collected via our smart devices, mobile app, and coaching platform is encrypted in transit and at rest within secure UK-based cloud infrastructure.
                  </p>
                  <p>
                    We never sell, rent, or monetize your individual health information. Telemetry data and progress notes are only accessible by certified coaches and clinical personnel assigned directly to your care pathway, or shared with your NHS General Practitioner with your explicit consent.
                  </p>
                  <p>
                    For inquiries or Subject Access Requests (SAR), please contact our Data Protection Officer at <a href={`mailto:${GOQII_UK_CONTACT.email}`} className="text-teal-700 underline">{GOQII_UK_CONTACT.email}</a>.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>
                    The GOQii platform and digital health coaching services provide lifestyle and behavioural support, chronic condition self-management, and vitals monitoring to complement primary NHS healthcare.
                  </p>
                  <p>
                    Our services are not intended as a substitute for urgent clinical intervention or emergency medical triage. Users experiencing acute symptoms should immediately contact NHS 111 or emergency services on 999.
                  </p>
                  <p>
                    By participating in our care programmes, you agree to engage safely and consult your GP before making drastic alterations to prescribed pharmaceutical regimens.
                  </p>
                </>
              )}

              {activeModal === 'accessibility' && (
                <>
                  <p>
                    GOQii is committed to ensuring digital accessibility for people of all abilities. We continually strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards across our web applications and digital interfaces.
                  </p>
                  <p>
                    Our platform includes high-contrast colour themes, screen-reader semantic markup, keyboard navigable controls, scalable typography, and descriptive text alternatives for media.
                  </p>
                  <p>
                    If you experience any accessibility barriers or require assistive accommodations, please let us know via <a href={`mailto:${GOQII_UK_CONTACT.email}`} className="text-teal-700 underline">{GOQII_UK_CONTACT.email}</a>.
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-stone-100 bg-stone-50/50 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors shadow-2xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

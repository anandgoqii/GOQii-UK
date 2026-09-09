import React from 'react';
import { ShieldCheck, ArrowUp, Globe } from 'lucide-react';
import { GOQII_UK_CONTACT } from '../data/content';

interface FooterProps {
  onOpenGpGuide: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGpGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-stone-100/90 text-stone-600 border-t border-stone-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & UK Entity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
                alt="GOQii"
                className="h-8 sm:h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-teal-50 text-teal-800 border border-teal-200 rounded">
                2.0
              </span>
              <span className="text-xs font-semibold text-stone-600">
                🇬🇧 United Kingdom
              </span>
            </div>

            <p className="text-stone-600 text-xs leading-relaxed max-w-sm">
              GOQii 2.0 is an intelligent connected digital healthcare platform combining certified 1-on-1 human coaching, medical vitals telemetry, and clinical expertise to prevent and manage chronic lifestyle conditions across the UK.
            </p>

            <div className="pt-2 text-stone-500 text-xs space-y-1">
              <div className="font-semibold text-stone-800">{GOQII_UK_CONTACT.companyName}</div>
              <div>{GOQII_UK_CONTACT.address}</div>
              <div>Company Registered in England & Wales</div>
            </div>
          </div>

          {/* Col 2: Care Programmes */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Care Programmes
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Diabetes Care</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Hypertension Management</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Thyroid Care</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Women's Health & Care</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Cancer Rehabilitation</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Anxiety & Stress</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">Arthritis Management</a></li>
              <li><a href="#care-programmes" className="hover:text-stone-900 transition-colors">COVID-19 Recovery</a></li>
            </ul>
          </div>

          {/* Col 3: Platform & Methodology */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Platform & Clinical
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-stone-900 transition-colors">How GOQii Works</a></li>
              <li><a href="#methodology" className="hover:text-stone-900 transition-colors">Clinical Methodology & Pillars</a></li>
              <li><a href="#goqii-app" className="hover:text-stone-900 transition-colors">GOQii App & Smart Devices</a></li>
              <li><a href="#health-outcomes" className="hover:text-stone-900 transition-colors">Clinical Outcomes & Evidence</a></li>
              <li><a href="#patient-stories" className="hover:text-stone-900 transition-colors">Real Patient Stories</a></li>
              <li><a href="#uk-network" className="hover:text-stone-900 transition-colors">UK Healthcare Network</a></li>
              <li>
                <button onClick={onOpenGpGuide} className="text-teal-700 hover:text-teal-800 font-medium text-left">
                  GP Referral Information →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Compliance */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Governance & Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#certifications" className="hover:text-stone-900 transition-colors">NHS DTAC Compliance</a></li>
              <li><a href="#certifications" className="hover:text-stone-900 transition-colors">Cyber Essentials Plus</a></li>
              <li><a href="#certifications" className="hover:text-stone-900 transition-colors">ISO 27001 Certification</a></li>
              <li><a href="#certifications" className="hover:text-stone-900 transition-colors">UK GDPR & Data Protection</a></li>
              <li><a href="#about-goqii" className="hover:text-stone-900 transition-colors">Modality Partnership Alignment</a></li>
              <li><a href="#contact-section" className="hover:text-stone-900 transition-colors">Accessibility Statement</a></li>
              <li><a href="#contact-section" className="hover:text-stone-900 transition-colors">Terms and Conditions</a></li>
              <li><a href="#contact-section" className="hover:text-stone-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Region Switcher, Top Button */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} GOQii UK Limited. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-stone-700">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              Approved UK Healthcare Digital Provider
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-stone-700">
              <Globe className="w-3.5 h-3.5 text-stone-500" />
              <span>United Kingdom (English)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-300 shadow-xs transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

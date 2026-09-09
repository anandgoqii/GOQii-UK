import React, { useState } from 'react';
import {
  Heart,
  Users,
  Leaf,
  BarChart2,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react';

import mountainHeroImg from '../assets/images/woman_mountain_arms_open_1788861401090.jpg';

// Authentic Vector SVG Logos for each certification body

// 1. ISO Globe Logo
const IsoLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-12' }) => (
  <svg viewBox="0 0 100 65" fill="none" className={className}>
    {/* Globe circles / meridians */}
    <circle cx="50" cy="32.5" r="28" stroke="#025596" strokeWidth="2" fill="none" opacity="0.4" />
    <ellipse cx="50" cy="32.5" rx="20" ry="28" stroke="#025596" strokeWidth="1.75" fill="none" opacity="0.5" />
    <ellipse cx="50" cy="32.5" rx="10" ry="28" stroke="#025596" strokeWidth="1.75" fill="none" opacity="0.6" />
    <line x1="22" y1="32.5" x2="78" y2="32.5" stroke="#025596" strokeWidth="1.5" opacity="0.5" />
    <line x1="26" y1="20" x2="74" y2="20" stroke="#025596" strokeWidth="1.2" opacity="0.4" />
    <line x1="26" y1="45" x2="74" y2="45" stroke="#025596" strokeWidth="1.2" opacity="0.4" />
    {/* Bold ISO Lettering with white glow for legibility */}
    <rect x="23" y="19" width="54" height="27" rx="6" fill="white" fillOpacity="0.92" />
    <text
      x="50"
      y="38.5"
      textAnchor="middle"
      fill="#025596"
      fontSize="20"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5"
    >
      ISO
    </text>
  </svg>
);

// 2. NHS DTAC Logo
const NhsLogo: React.FC<{ className?: string }> = ({ className = 'w-20 h-10' }) => (
  <svg viewBox="0 0 96 44" fill="none" className={className}>
    <rect width="96" height="44" rx="4" fill="#005EB8" />
    <text
      x="48"
      y="31.5"
      textAnchor="middle"
      fill="white"
      fontSize="27"
      fontWeight="900"
      fontStyle="italic"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-1"
    >
      NHS
    </text>
  </svg>
);

// 3. BSI Logo (bsi. with red dot)
const BsiLogo: React.FC<{ className?: string }> = ({ className = 'w-20 h-10' }) => (
  <svg viewBox="0 0 90 38" fill="none" className={className}>
    <text
      x="12"
      y="28"
      fill="#111827"
      fontSize="30"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-1"
    >
      bsi
    </text>
    <circle cx="58" cy="27" r="3.2" fill="#e11d48" />
  </svg>
);

// 4. ICO Logo (ico. with Information Commissioner's Office)
const IcoLogo: React.FC<{ className?: string }> = ({ className = 'w-20 h-10' }) => (
  <svg viewBox="0 0 100 44" fill="none" className={className}>
    <text
      x="48"
      y="26"
      textAnchor="middle"
      fill="#002D62"
      fontSize="30"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="-0.5"
    >
      ico.
    </text>
    <text
      x="48"
      y="37"
      textAnchor="middle"
      fill="#002D62"
      fontSize="5.5"
      fontWeight="600"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="0.2"
    >
      Information Commissioner's Office
    </text>
  </svg>
);

// 5. CE Mark Logo
const CeMarkLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-10' }) => (
  <svg viewBox="0 0 80 44" fill="none" className={className}>
    {/* C */}
    <path
      d="M32 9 A 16 16 0 1 0 32 35 L 32 29 A 10 10 0 1 1 32 15 Z"
      fill="#111827"
    />
    {/* E */}
    <path
      d="M58 9 A 16 16 0 1 0 58 35 L 58 29 A 10 10 0 1 1 58 15 Z"
      fill="#111827"
    />
    <rect x="46" y="20" width="10" height="4" fill="#111827" />
  </svg>
);

// 6. FSSAI Logo
const FssaiLogo: React.FC<{ className?: string }> = ({ className = 'w-20 h-10' }) => (
  <svg viewBox="0 0 100 44" fill="none" className={className}>
    {/* Stylized leaves on top */}
    <path
      d="M72 12 C 75 6, 80 5, 84 8 C 82 12, 77 14, 72 12 Z"
      fill="#16a34a"
    />
    <path
      d="M84 9 C 88 7, 91 8, 92 12 C 89 13, 86 11, 84 9 Z"
      fill="#ea580c"
    />
    {/* fssai script */}
    <text
      x="50"
      y="31"
      textAnchor="middle"
      fill="#1e3a8a"
      fontSize="24"
      fontWeight="800"
      fontStyle="italic"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      fssa<tspan fill="#ea580c">i</tspan>
    </text>
  </svg>
);

// 7. USDA Organic Seal
const UsdaOrganicLogo: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <circle cx="30" cy="30" r="28" stroke="#166534" strokeWidth="3.5" fill="#f0fdf4" />
    <circle cx="30" cy="30" r="22.5" stroke="#166534" strokeWidth="1" fill="none" />
    {/* Horizontal bands */}
    <path
      d="M9 30 C 9 18, 51 18, 51 30 Z"
      fill="#15803d"
    />
    <text
      x="30"
      y="25"
      textAnchor="middle"
      fill="white"
      fontSize="7.5"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="0.5"
    >
      USDA
    </text>
    <text
      x="30"
      y="40"
      textAnchor="middle"
      fill="#166534"
      fontSize="6.5"
      fontWeight="900"
      fontFamily="system-ui, -apple-system, sans-serif"
      letterSpacing="0.5"
    >
      ORGANIC
    </text>
  </svg>
);

interface CertificationItem {
  id: string;
  code: string;
  name: string;
  sublabel: string;
  logo: React.ComponentType<{ className?: string }>;
  description: string;
}

export const Certifications: React.FC = () => {
  // Default to BSI as highlighted in the reference screenshot
  const [activeCertId, setActiveCertId] = useState<string>('bsi');
  const [modalCert, setModalCert] = useState<CertificationItem | null>(null);

  const certifications: CertificationItem[] = [
    {
      id: 'iso-27001',
      code: 'ISO 27001',
      name: 'ISO 27001',
      sublabel: 'Information Security Management',
      logo: IsoLogo,
      description:
        'Certified for international information security management standards, guaranteeing end-to-end encryption and bank-grade data confidentiality across all cloud services.',
    },
    {
      id: 'iso-27701',
      code: 'ISO 27701',
      name: 'ISO 27701',
      sublabel: 'Privacy Information Management',
      logo: IsoLogo,
      description:
        'Audited compliance for Privacy Information Management Systems (PIMS), ensuring comprehensive personal data governance aligning with UK and European GDPR frameworks.',
    },
    {
      id: 'nhs-dtac',
      code: 'NHS DTAC',
      name: 'NHS DTAC',
      sublabel: 'Digital Technology Assessment Criteria',
      logo: NhsLogo,
      description:
        'Formally assessed and compliant with NHS England DTAC across clinical safety (DCB0129), data protection, technical security, interoperability, and usability.',
    },
    {
      id: 'bsi',
      code: 'BSI',
      name: 'BSI',
      sublabel: 'Quality Management Systems',
      logo: BsiLogo,
      description:
        'Our quality management systems are certified by the British Standards Institution (BSI), demonstrating our commitment to best-in-class processes and continuous improvement.',
    },
    {
      id: 'ico',
      code: 'ICO',
      name: 'ICO',
      sublabel: 'Data Protection Compliance',
      logo: IcoLogo,
      description:
        'Registered with the UK Information Commissioner’s Office, adhering to strict data sovereignty, user consent, and Caldicott guardian principles.',
    },
    {
      id: 'ce-mark',
      code: 'CE Mark',
      name: 'CE Mark',
      sublabel: 'Conformité Européenne (for applicable devices)',
      logo: CeMarkLogo,
      description:
        'Smart hardware devices and sensors meet European health, safety, and environmental protection standards for diagnostic and telemetry accuracy.',
    },
    {
      id: 'fssai',
      code: 'FSSAI',
      name: 'FSSAI',
      sublabel: 'Food Safety Compliance',
      logo: FssaiLogo,
      description:
        'Strict regulatory manufacturing and formulation compliance across all clinical nutrition, botanical supplements, and healthy food products.',
    },
    {
      id: 'usda-organic',
      code: 'USDA Organic',
      name: 'USDA Organic',
      sublabel: 'Certified Nutrition Products',
      logo: UsdaOrganicLogo,
      description:
        'Pure, non-GMO, chemical-free certification for select organic botanical and clean wellness superfoods curated for metabolic health.',
    },
  ];

  const activeCert = certifications.find((c) => c.id === activeCertId) || certifications[3];

  return (
    <section
      id="certifications"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#dcf2ea]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#edf6f2]/50 blur-3xl pointer-events-none -z-0" />

      {/* Decorative Foliage on Bottom Left */}
      <div className="absolute -bottom-10 -left-6 w-48 h-48 pointer-events-none opacity-25 select-none z-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#1e4d44]">
          <path
            d="M0 200 C 50 140, 110 120, 170 100 C 130 160, 90 180, 0 200 Z"
            fill="currentColor"
          />
          <path
            d="M0 160 C 60 100, 100 50, 160 20 C 120 100, 70 140, 0 160 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Left Headline & Subtext + Right Mountain Wellness Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Eyebrow, Title & Subtitle */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 select-none">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                SECTION 12 — CERTIFICATIONS & COMPLIANCE
              </span>
              <div className="w-10 sm:w-14 h-px bg-stone-400" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
              Built with <span className="text-[#1e4d44] font-medium">trust</span> at its core.
            </h2>

            {/* Paragraph Subtext */}
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Our programmes, data practices and technology are backed by globally recognised certifications and rigorous compliance standards — so you can feel confident, every step of the way.
            </p>
          </div>

          {/* Right Column: Mountain Lifestyle Image with Handwritten Script */}
          <div className="lg:col-span-5 relative">
            
            {/* Hero Image Container */}
            <div className="relative rounded-[32px] overflow-hidden shadow-md border border-white/80 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src={mountainHeroImg}
                alt="Woman standing on mountain with arms wide open, smiling at sky"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

        {/* 8 CERTIFICATION CARDS ROW WITH DYNAMIC TOOLTIP BUBBLE */}
        <div className="relative pt-6 pb-2">
          
          {/* Active Tooltip Speech Bubble Container */}
          <div className="hidden lg:flex justify-center mb-6 relative">
            <div className="relative bg-[#1e4d44] text-white rounded-2xl p-5 max-w-md shadow-xl border border-[#2a665a] text-left transition-all duration-300">
              <div className="text-sm font-bold tracking-tight text-white mb-1">
                {activeCert.code}
              </div>
              <div className="w-8 h-0.5 bg-[#a3d4c3] mb-2 rounded-full" />
              <p className="text-xs text-stone-200 leading-relaxed font-normal">
                {activeCert.description}
              </p>
              {/* Downward Speech Bubble Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1e4d44] transform rotate-45 border-r border-b border-[#2a665a]" />
            </div>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
            {certifications.map((item) => {
              const LogoComponent = item.logo;
              const isActive = item.id === activeCertId;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveCertId(item.id);
                    setModalCert(item);
                  }}
                  onMouseEnter={() => setActiveCertId(item.id)}
                  className={`relative p-3.5 sm:p-4 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer min-h-[170px] sm:min-h-[185px] ${
                    isActive
                      ? 'bg-[#dcf2ea] border-2 border-[#1e4d44] shadow-md -translate-y-1'
                      : 'bg-white border border-stone-200/90 shadow-2xs hover:border-stone-400 hover:shadow-xs hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Logo Container */}
                  <div className="w-full h-14 flex items-center justify-center mb-2">
                    <LogoComponent className="max-h-11 max-w-[85%] object-contain" />
                  </div>

                  {/* Title & Sublabel */}
                  <div className="w-full">
                    <h3 className="text-xs sm:text-[13px] font-bold text-stone-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-normal mt-1 leading-snug line-clamp-3">
                      {item.sublabel}
                    </p>
                  </div>

                  {/* Tiny indicator bar */}
                  <div
                    className={`w-6 h-0.5 rounded-full mt-2 transition-all ${
                      isActive ? 'bg-[#1e4d44] w-8' : 'bg-transparent'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile Tooltip Helper under the grid */}
          <div className="lg:hidden mt-4 p-4 rounded-xl bg-[#1e4d44] text-white text-xs leading-relaxed">
            <div className="font-bold text-sm text-[#dcf2ea] mb-1">{activeCert.name}</div>
            <p className="text-stone-200">{activeCert.description}</p>
          </div>

        </div>

        {/* BOTTOM VERIFICATION BAR */}
        <div className="mt-16 pt-8 border-t border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
          
          {/* 4 Value Badges with vertical dividers */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Healthier<br />Lives
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Stronger<br />Communities
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Sustainable<br />Change
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <BarChart2 className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                A Brighter<br />Tomorrow
              </div>
            </div>
          </div>

          {/* Right Tagline */}
          <div className="inline-flex items-center gap-3">
            <div className="w-8 sm:w-12 h-px bg-stone-300" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-stone-500">
              REAL PEOPLE. A HEALTHIER UK.
            </span>
            <div className="w-8 sm:w-12 h-px bg-stone-300" />
          </div>

        </div>

      </div>

      {/* Interactive Certification Detail Modal */}
      {modalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-10 bg-white border border-stone-200 rounded-xl p-1 flex items-center justify-center">
                  <modalCert.logo className="max-h-8 max-w-full" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900 leading-tight">
                    {modalCert.name}
                  </h4>
                  <div className="text-xs text-stone-500">{modalCert.sublabel}</div>
                </div>
              </div>
              <button
                onClick={() => setModalCert(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {modalCert.description}
              </p>

              <div className="bg-[#f0f7f4] rounded-2xl p-4 border border-[#d2ebe1] space-y-2 text-xs text-stone-800">
                <div className="flex items-center gap-2 font-semibold text-[#1e4d44]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Audited & Continuously Verified</span>
                </div>
                <div className="text-stone-600">
                  Compliance is renewed through recurring independent third-party audits and clinical safety governance boards.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalCert(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#1e4d44] hover:bg-[#153831] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

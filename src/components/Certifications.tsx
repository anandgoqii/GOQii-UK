import React, { useState } from 'react';
import {
  Heart,
  Users,
  Leaf,
  BarChart2,
  CheckCircle2,
  X,
} from 'lucide-react';

import mountainHeroImg from '../assets/images/woman_mountain_arms_open_1788861401090.jpg';

// Authentic Official Certification & Compliance Badges
import certImg1 from '../assets/certificates/img-cetificate-1.png';
import certImg2 from '../assets/certificates/img-cetificate-2.png';
import certImg3 from '../assets/certificates/img-cetificate-3.png';
import certImg4 from '../assets/certificates/img-cetificate-4.png';
import certImg5 from '../assets/certificates/img-cetificate-5.png';
import certImg6 from '../assets/certificates/img-cetificate-6.png';
import certImg7 from '../assets/certificates/img-cetificate-7.png';
import certImg8 from '../assets/certificates/img-cetificate-8.png';
import certImg9 from '../assets/certificates/img-cetificate-9.png';

interface CertificationItem {
  id: string;
  code: string;
  name: string;
  sublabel: string;
  image: string;
  description: string;
  standard?: string;
}

export const Certifications: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      id: 'iso-27001',
      code: 'ISO 27001',
      name: 'ISO 27001',
      sublabel: 'Information Security Management',
      image: certImg2,
      description:
        'Internationally accredited Information Security Management System (ISMS), enforcing end-to-end data encryption, rigorous infrastructure safeguards, and bank-grade confidentiality across all digital health services.',
      standard: 'ISO/IEC 27001:2022 ISMS Accredited',
    },
    {
      id: 'iso-27701',
      code: 'ISO 27701',
      name: 'ISO 27701',
      sublabel: 'Privacy Information Management',
      image: certImg7,
      description:
        'Certified Privacy Information Management System (PIMS), ensuring comprehensive personal health data governance and sovereignty aligned with UK Data Protection and GDPR frameworks.',
      standard: 'ISO/IEC 27701:2019 PIMS Certified',
    },
    {
      id: 'iso-9001',
      code: 'ISO 9001',
      name: 'ISO 9001',
      sublabel: 'Quality Management Systems',
      image: certImg3,
      description:
        'Global benchmark for quality management systems, validating structured care delivery, patient satisfaction metrics, clinician supervision, and continuous service enhancement.',
      standard: 'ISO 9001:2015 QMS Certified',
    },
    {
      id: 'cyber-essentials',
      code: 'Cyber Essentials Plus',
      name: 'Cyber Essentials+',
      sublabel: 'UK Government NCSC Verified',
      image: certImg4,
      description:
        'UK Government and National Cyber Security Centre (NCSC) backed technical accreditation confirming hands-on penetration testing and resilient defenses against digital threats.',
      standard: 'UK NCSC Cyber Essentials Plus',
    },
    {
      id: 'cqc',
      code: 'CQC Registered',
      name: 'Care Quality Commission',
      sublabel: 'Healthcare Regulatory Standard',
      image: certImg8,
      description:
        'Independent regulator of health and adult social care in England, guaranteeing care pathways meet essential national standards of clinical safety, quality, and member compassion.',
      standard: 'England Health & Social Care Regulated',
    },
    {
      id: 'ico',
      code: 'ICO Registered',
      name: 'ICO Registration',
      sublabel: 'Data Protection & Caldicott',
      image: certImg6,
      description:
        'Formally registered with the UK Information Commissioner’s Office, strictly adhering to the Data Protection Act 2018, member privacy sovereignty, and Caldicott Guardian principles.',
      standard: 'UK Information Commissioner Registered',
    },
    {
      id: 'soc-2',
      code: 'AICPA SOC 2',
      name: 'SOC 2 Type II',
      sublabel: 'Cloud Security & Trust',
      image: certImg9,
      description:
        'Independently audited compliance report validating Security, Availability, and Confidentiality Trust Services Criteria across all member cloud infrastructure and telehealth systems.',
      standard: 'AICPA SOC 2 Type II Certified',
    },
    {
      id: 'ce-mark',
      code: 'CE Mark',
      name: 'CE Conformity',
      sublabel: 'Medical Device Conformity',
      image: certImg5,
      description:
        'Conformité Européenne compliance confirming compatible wearable biometric trackers and telemetric devices adhere to rigorous health, safety, and diagnostic accuracy directives.',
      standard: 'Medical Device Regulation Compliant',
    },
    {
      id: 'data-security',
      code: 'Data Security & Privacy',
      name: 'Data Security',
      sublabel: 'Clinical Privacy & Safeguards',
      image: certImg1,
      description:
        'Multi-tiered health data protection protocols ensuring patient records, continuous glucose telemetry, and clinical coach consultations remain completely confidential and tamper-proof.',
      standard: 'NHS & UK Health Data Compliant',
    },
  ];

  const [activeCertId, setActiveCertId] = useState<string>('iso-27001');
  const [modalCert, setModalCert] = useState<CertificationItem | null>(null);

  const activeCert = certifications.find((c) => c.id === activeCertId) || certifications[0];

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

        {/* 9 CERTIFICATION CARDS ROW WITH DYNAMIC TOOLTIP BUBBLE */}
        <div className="relative pt-6 pb-2">
          
          {/* Active Tooltip Speech Bubble Container */}
          <div className="hidden lg:flex justify-center mb-6 relative">
            <div className="relative bg-[#1e4d44] text-white rounded-2xl p-4 sm:p-5 max-w-xl shadow-xl border border-[#2a665a] text-left transition-all duration-300 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 p-2 flex items-center justify-center shrink-0 border border-white/15 shadow-inner">
                <img
                  src={activeCert.image}
                  alt={activeCert.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold tracking-tight text-white">
                    {activeCert.code}
                  </span>
                  {activeCert.standard && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-[#a3d4c3] font-medium">
                      {activeCert.standard}
                    </span>
                  )}
                </div>
                <div className="w-8 h-0.5 bg-[#a3d4c3] my-1.5 rounded-full" />
                <p className="text-xs text-stone-200 leading-relaxed font-normal">
                  {activeCert.description}
                </p>
              </div>
              {/* Downward Speech Bubble Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1e4d44] transform rotate-45 border-r border-b border-[#2a665a]" />
            </div>
          </div>

          {/* 9 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-3.5">
            {certifications.map((item) => {
              const isActive = item.id === activeCertId;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveCertId(item.id);
                    setModalCert(item);
                  }}
                  onMouseEnter={() => setActiveCertId(item.id)}
                  className={`group relative p-3 sm:p-3.5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer min-h-[180px] sm:min-h-[195px] ${
                    isActive
                      ? 'bg-[#dcf2ea] border-2 border-[#1e4d44] shadow-md -translate-y-1'
                      : 'bg-white border border-stone-200/90 shadow-2xs hover:border-[#1e4d44]/50 hover:shadow-xs hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Logo Container with Official Icon */}
                  <div className="w-full h-16 sm:h-20 flex items-center justify-center mb-2 px-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-14 sm:max-h-16 max-w-full object-contain filter drop-shadow-2xs transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Sublabel */}
                  <div className="w-full">
                    <h3 className="text-xs sm:text-[13px] font-bold text-stone-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-stone-500 font-normal mt-1 leading-snug line-clamp-2">
                      {item.sublabel}
                    </p>
                  </div>

                  {/* Tiny indicator bar */}
                  <div
                    className={`w-6 h-0.5 rounded-full mt-2 transition-all duration-200 ${
                      isActive ? 'bg-[#1e4d44] w-8' : 'bg-transparent'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile Tooltip Helper under the grid */}
          <div className="lg:hidden mt-4 p-4 rounded-xl bg-[#1e4d44] text-white text-xs leading-relaxed flex items-start gap-3">
            <div className="w-12 h-12 rounded-lg bg-white/10 p-1.5 shrink-0 flex items-center justify-center border border-white/15">
              <img
                src={activeCert.image}
                alt={activeCert.name}
                className="max-h-9 max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-[#dcf2ea] mb-0.5">{activeCert.name}</div>
              <p className="text-stone-200">{activeCert.description}</p>
            </div>
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
                <div className="w-14 h-14 bg-white border border-stone-200 rounded-xl p-2 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src={modalCert.image}
                    alt={modalCert.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900 leading-tight">
                    {modalCert.name}
                  </h4>
                  <div className="text-xs text-stone-500">{modalCert.sublabel}</div>
                  {modalCert.standard && (
                    <div className="text-[10px] text-[#1e4d44] font-medium mt-0.5">
                      {modalCert.standard}
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={() => setModalCert(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer transition-colors"
                aria-label="Close dialog"
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
                  Compliance is verified through recurring independent third-party audits, clinical safety DCB0129 / DCB0160 governance reviews, and UK regulatory renewals.
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalCert(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#1e4d44] hover:bg-[#153831] transition-colors cursor-pointer"
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

import React, { useState } from 'react';
import {
  Droplet,
  Pill,
  HeartPulse,
  Heart,
  Users,
  Leaf,
  BarChart2,
  Info,
  CheckCircle2,
  X,
} from 'lucide-react';

import mountainHeroImg from '../assets/images/woman_mountain_arms_open_1788861401090.jpg';

// Custom Scaled Bathroom Scale Icon matching reference
const ScaleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="8.5" r="3" />
    <line x1="12" y1="8.5" x2="13.5" y2="7" strokeLinecap="round" />
    <path d="M7 17h10" strokeLinecap="round" strokeDasharray="1 2.5" />
  </svg>
);

// Custom Measuring Tape Icon matching reference
const TapeMeasureIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="7" width="18" height="10" rx="3" />
    <line x1="7" y1="7" x2="7" y2="11" strokeLinecap="round" />
    <line x1="10" y1="7" x2="10" y2="10" strokeLinecap="round" />
    <line x1="13" y1="7" x2="13" y2="11" strokeLinecap="round" />
    <line x1="16" y1="7" x2="16" y2="10" strokeLinecap="round" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

interface MetricOutcome {
  id: string;
  metric: string;
  metricLabel: string[];
  subtext: string;
  color: string;
  accentBar: string;
  badgeBg: string;
  badgeBorder: string;
  badgeColor: string;
  ringTrack: string;
  ringColor: string;
  ringProgress: number; // 0-100 percentage for svg circle
  icon: React.ElementType;
  studyDetails: {
    cohort: string;
    duration: string;
    description: string;
    clinicalReference: string;
  };
}

export const HealthOutcomes: React.FC = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<MetricOutcome | null>(null);

  const outcomes: MetricOutcome[] = [
    {
      id: 'body-weight',
      metric: '10%',
      metricLabel: ['Average reduction', 'in body weight'],
      subtext: 'Preserving lean muscle mass and metabolic rate',
      color: 'text-stone-900',
      accentBar: 'bg-[#1e4d44]',
      badgeBg: 'bg-[#d8eee5]',
      badgeBorder: 'border-[#b9e2d2]',
      badgeColor: 'text-[#1e4d44]',
      ringTrack: '#e5f3ed',
      ringColor: '#234d43',
      ringProgress: 68,
      icon: ScaleIcon,
      studyDetails: {
        cohort: '4,200+ adults across UK pilot programmes',
        duration: '12 to 24 weeks sustained',
        description:
          'Participants achieved clinically significant weight loss driven by sustainable daily habits and continuous dietary coaching without calorie deprivation.',
        clinicalReference: 'Published in international digital medicine peer-reviewed real-world evidence trials.',
      },
    },
    {
      id: 'cholesterol',
      metric: '7%',
      metricLabel: ['Average reduction', 'in cholesterol'],
      subtext: 'Significant improvement in lipid profiles and cardiovascular risk',
      color: 'text-stone-900',
      accentBar: 'bg-[#ea580c]',
      badgeBg: 'bg-[#fde8dc]',
      badgeBorder: 'border-[#fad0bc]',
      badgeColor: 'text-[#ea580c]',
      ringTrack: '#fef1ea',
      ringColor: '#ea580c',
      ringProgress: 60,
      icon: HeartPulse,
      studyDetails: {
        cohort: 'Cardiometabolic risk patients',
        duration: '90 days post-onboarding',
        description:
          'Consistent reduction in total serum cholesterol and LDL fractions through Mediterranean diet coaching and monitored daily aerobic movement.',
        clinicalReference: 'NHS Modality Partnership clinical collaboration study cohort.',
      },
    },
    {
      id: 'waist',
      metric: '9 cm',
      metricLabel: ['Average reduction', 'in waist circumference'],
      subtext: 'Direct proxy for visceral adiposity and fatty liver reversal',
      color: 'text-stone-900',
      accentBar: 'bg-[#7c3aed]',
      badgeBg: 'bg-[#ede9fe]',
      badgeBorder: 'border-[#ddd6fe]',
      badgeColor: 'text-[#7c3aed]',
      ringTrack: '#f5f1fe',
      ringColor: '#7c3aed',
      ringProgress: 65,
      icon: TapeMeasureIcon,
      studyDetails: {
        cohort: 'Adults with abdominal obesity markers',
        duration: '16 weeks average observation',
        description:
          'Marked reduction in visceral fat circumference, associated with improved insulin sensitivity and lower systemic inflammatory cytokines.',
        clinicalReference: 'GOQii Digital Therapeutics Outcomes Registry 2024.',
      },
    },
    {
      id: 'hba1c',
      metric: '20%',
      metricLabel: ['Average reduction', 'in HbA1c'],
      subtext: 'Normalising glycemic regulation in pre-diabetes and Type 2 diabetes',
      color: 'text-stone-900',
      accentBar: 'bg-[#2563eb]',
      badgeBg: 'bg-[#dbeafe]',
      badgeBorder: 'border-[#bfdbfe]',
      badgeColor: 'text-[#2563eb]',
      ringTrack: '#eff6ff',
      ringColor: '#2563eb',
      ringProgress: 75,
      icon: Droplet,
      studyDetails: {
        cohort: 'Type 2 Diabetes and Pre-diabetes registered users',
        duration: '90 to 180 days',
        description:
          'Patients experienced an average reduction of 1.4% to 1.8% absolute HbA1c, bringing elevated cohorts into target glycemic range under GP supervision.',
        clinicalReference: 'Peer-reviewed clinical evidence published in leading Endocrinology & Diabetes journals.',
      },
    },
    {
      id: 'medication',
      metric: '85%',
      metricLabel: ['Average reduction', 'in medication'],
      subtext: 'Deprescribing and dosage step-downs conducted by licensed GPs',
      color: 'text-stone-900',
      accentBar: 'bg-[#16a34a]',
      badgeBg: 'bg-[#dcfce7]',
      badgeBorder: 'border-[#bbf7d0]',
      badgeColor: 'text-[#16a34a]',
      ringTrack: '#f0fdf4',
      ringColor: '#16a34a',
      ringProgress: 88,
      icon: Pill,
      studyDetails: {
        cohort: 'Hypertension and oral hypoglycaemic cohorts',
        duration: '6 to 12 months',
        description:
          'Physicians safely reduced or eliminated daily prescription counts as biological vitals and glucose regulation normalised through sustained lifestyle transformation.',
        clinicalReference: 'Clinical audit conducted across UK GP primary care networks.',
      },
    },
  ];

  return (
    <section
      id="health-outcomes"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#dcf2ea]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#e8f5f0]/40 blur-3xl pointer-events-none -z-0" />

      {/* Foliage Accent in Bottom Right */}
      <div className="absolute -bottom-12 -right-8 w-52 h-52 pointer-events-none opacity-30 select-none z-10">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#1e4d44]">
          <path
            d="M200 200 C 150 140, 90 120, 30 100 C 70 160, 110 180, 200 200 Z"
            fill="currentColor"
          />
          <path
            d="M200 160 C 140 100, 100 50, 40 20 C 80 100, 130 140, 200 160 Z"
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
                SECTION 10 — HEALTH OUTCOMES
              </span>
              <div className="w-10 sm:w-14 h-px bg-stone-400" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
              Creating a lasting, <br />
              <span className="text-[#1e4d44] font-medium">positive health impact.</span>
            </h2>

            {/* Paragraph Subtext */}
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Real people. Measurable progress. Our integrated approach helps people make meaningful improvements in their health, wellbeing and quality of life.
            </p>

          </div>

          {/* Right Column: Mountain Lifestyle Image with Handwritten Script & Vertical Motto */}
          <div className="lg:col-span-5 relative">
            
            {/* Top Right Vertical Motto (Connect, Support, Progress, Thrive) */}
            <div className="hidden sm:block absolute right-3 lg:-right-4 -top-8 text-[10px] tracking-[0.22em] uppercase text-stone-400 font-medium leading-loose select-none text-right z-20">
              <div>CONNECT</div>
              <div>SUPPORT</div>
              <div>PROGRESS</div>
              <div>THRIVE</div>
              <div className="w-8 h-0.5 bg-stone-300 ml-auto mt-1.5" />
            </div>

            {/* Hero Image Container */}
            <div className="relative rounded-[32px] overflow-hidden shadow-md border border-white/80 aspect-[16/10] sm:aspect-[16/11]">
              <img
                src={mountainHeroImg}
                alt="Woman standing on mountain with arms wide open, smiling at sky"
                className="w-full h-full object-cover object-[center_35%]"
              />
              {/* Soft overlay gradient on image edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

        {/* 5 CIRCULAR RING METRIC GAUGES ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 items-start justify-center">
          {outcomes.map((item) => {
            const Icon = item.icon;
            // SVG circle math: circumference = 2 * PI * r = 2 * 3.14159 * 52 ≈ 326.7
            const radius = 52;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (circumference * item.ringProgress) / 100;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedOutcome(item)}
                className="group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* CIRCULAR GAUGE CONTAINER */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center mb-5">
                  
                  {/* Circular SVG Rings */}
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Faint Track */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke={item.ringTrack}
                      strokeWidth="9"
                      fill="transparent"
                      strokeLinecap="round"
                    />

                    {/* Colored Active Arc */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke={item.ringColor}
                      strokeWidth="9"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  {/* Centered Large Metric Value */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                    <span className="text-3xl sm:text-[34px] font-bold text-stone-900 tracking-tight leading-none">
                      {item.metric}
                    </span>
                  </div>

                  {/* Top Badge Icon (placed at top center of gauge) */}
                  <div className="absolute -top-1 inset-x-0 flex justify-center z-10">
                    <div
                      className={`w-10 h-10 rounded-full ${item.badgeBg} ${item.badgeColor} border-2 border-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                </div>

                {/* 2-Line Label */}
                <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug max-w-[140px]">
                  <div>{item.metricLabel[0]}</div>
                  <div>{item.metricLabel[1]}</div>
                </div>

                {/* Colored Horizontal Accent Bar */}
                <div className={`w-9 h-1 rounded-full ${item.accentBar} mt-3 transition-all group-hover:w-12`} />
              </div>
            );
          })}
        </div>

        {/* BOTTOM VERIFICATION BAR */}
        <div className="mt-16 pt-8 border-t border-stone-200/90 flex flex-col xl:flex-row items-center justify-between gap-6 select-none">
          
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

          {/* Right Disclaimer Note with (i) Icon */}
          <div className="flex items-center gap-2 text-stone-500 max-w-xl text-center xl:text-left">
            <Info className="w-4 h-4 shrink-0 text-stone-400" />
            <span className="text-[11px] leading-relaxed">
              These outcomes reflect average results observed among people using GOQii in real-world settings. Individual results may vary.
            </span>
          </div>

        </div>

      </div>

      {/* Clinical Details Modal */}
      {selectedOutcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${selectedOutcome.badgeBg} ${selectedOutcome.badgeColor} flex items-center justify-center`}
                >
                  <selectedOutcome.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900 leading-tight">
                    {selectedOutcome.metric} {selectedOutcome.metricLabel.join(' ')}
                  </h4>
                  <div className="text-xs text-stone-500">
                    Clinical Evidence & Methodology
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedOutcome(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-stone-600">
              <p className="font-medium text-stone-800">
                {selectedOutcome.studyDetails.description}
              </p>

              <div className="bg-[#f0f7f4] rounded-xl p-4 border border-[#d2ebe1] space-y-2">
                <div className="flex items-center gap-2 text-stone-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4d44]" />
                  <span>Observed Cohort: {selectedOutcome.studyDetails.cohort}</span>
                </div>
                <div className="text-stone-600">
                  <span className="font-semibold text-stone-700">Observation Window:</span>{' '}
                  {selectedOutcome.studyDetails.duration}
                </div>
                <div className="text-stone-600">
                  <span className="font-semibold text-stone-700">Clinical Governance:</span>{' '}
                  {selectedOutcome.studyDetails.clinicalReference}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedOutcome(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#234d43] hover:bg-[#1a3b33]"
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

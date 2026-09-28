import React, { useState } from 'react';
import {
  Users,
  Heart,
  MapPin,
  Leaf,
  BarChart2,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
} from 'lucide-react';

import bigBenImg from '../assets/images/london_big_ben_tower_1788862337258.jpg';
import gpConsultingImg from '../assets/images/gp_consulting_patient_1788862358030.jpg';
import { UK_MAP_PATHS } from '../data/ukMapPaths';

// Authentic Modality Partnerships Logo SVG
const ModalityLogo: React.FC<{ className?: string }> = ({ className = 'w-48 h-12' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Stylized two-person / M arch emblem */}
    <div className="relative w-11 h-11 shrink-0">
      <svg viewBox="0 0 54 50" fill="none" className="w-full h-full">
        {/* Left person */}
        <circle cx="17" cy="10" r="5" fill="#007791" />
        <path
          d="M6 38 C 6 22, 17 20, 24 38 Z"
          fill="#007791"
        />
        {/* Right person */}
        <circle cx="37" cy="10" r="5" fill="#00a896" />
        <path
          d="M26 38 C 33 20, 44 22, 48 38 Z"
          fill="#00a896"
        />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0c2340] font-heading">
        Modality
      </div>
      <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#0c2340]">
        Partnerships
      </div>
    </div>
  </div>
);

interface RegionData {
  id: 'scotland' | 'north' | 'midlands' | 'south';
  name: string;
  pinLabel: string;
  color: string;
  fillClass: string;
  hoverFill: string;
  pinX: number;
  pinY: number;
  hubsCount: number;
  patientsServed: string;
  clinics: string[];
  summary: string;
}

export const UkHealthcareNetwork: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<'scotland' | 'north' | 'midlands' | 'south'>('south');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const regions: Record<string, RegionData> = {
    scotland: {
      id: 'scotland',
      name: 'Scotland',
      pinLabel: 'Scotland',
      color: '#205c50',
      fillClass: 'fill-[#205c50]',
      hoverFill: '#18463d',
      pinX: 320,
      pinY: 530,
      hubsCount: 14,
      patientsServed: '95,000+',
      clinics: ['Lothian Primary Care Cluster', 'Greater Glasgow Health Hub', 'Grampian Wellness Centre'],
      summary: 'Delivering remote preventative monitoring and digital metabolic coaching across Scottish primary care networks.',
    },
    north: {
      id: 'north',
      name: 'North England',
      pinLabel: 'North England',
      color: '#2e8b7d',
      fillClass: 'fill-[#2e8b7d]',
      hoverFill: '#257367',
      pinX: 490,
      pinY: 760,
      hubsCount: 22,
      patientsServed: '180,000+',
      clinics: ['Airedale & Wharfedale Medical Practice', 'Crosshills Health Centre', 'Wokingham & Leeds Cluster'],
      summary: 'Full integration with Modality Yorkshire and North East GP practices for diabetes and cardiovascular reversal.',
    },
    midlands: {
      id: 'midlands',
      name: 'Midlands',
      pinLabel: 'Midlands',
      color: '#9bc7a6',
      fillClass: 'fill-[#9bc7a6]',
      hoverFill: '#86b592',
      pinX: 470,
      pinY: 940,
      hubsCount: 35,
      patientsServed: '260,000+',
      clinics: ['Modality Birmingham Super-practice', 'Sandwell Primary Care Network', 'Walsall Community Health Centre'],
      summary: 'Modality’s flagship super-practice region pioneering multidisciplinary lifestyle therapeutics and medication tapering.',
    },
    south: {
      id: 'south',
      name: 'South England',
      pinLabel: 'South England',
      color: '#77aae3',
      fillClass: 'fill-[#77aae3]',
      hoverFill: '#6297d1',
      pinX: 550,
      pinY: 1080,
      hubsCount: 28,
      patientsServed: '220,000+',
      clinics: ['London West Primary Care Hub', 'Surrey Hills Medical Group', 'Thames Valley Community Practice'],
      summary: 'Extensive London, Thames Valley, and South Coast primary care partnerships with streamlined electronic GP referrals.',
    },
  };

  const activeRegion = regions[selectedRegionId];

  return (
    <section
      id="uk-network"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] rounded-full bg-[#dcf2ea]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#edf6f2]/50 blur-3xl pointer-events-none -z-0" />

      {/* Decorative Foliage on Bottom Right */}
      <div className="absolute -bottom-10 -right-8 w-56 h-56 pointer-events-none opacity-25 select-none z-10">
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
        
        {/* TOP ROW: Title & Subtitle + Top-Right Vertical Motto & Big Ben Backdrop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12 lg:mb-16">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-3 select-none">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                SECTION 13 — UK HEALTHCARE NETWORK
              </span>
              <div className="w-10 sm:w-14 h-px bg-stone-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
              Connected to healthcare <br />
              <span className="text-[#1e4d44] font-medium">across the UK.</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              Through our partnership with Modality Partnerships, UK’s largest General practitioner super that operates primary health care and community services nationally.
            </p>
          </div>

          {/* Right: Vertical Motto */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="text-[10px] tracking-[0.22em] uppercase text-stone-400 font-medium leading-loose select-none text-right">
              <div>CONNECT</div>
              <div>SUPPORT</div>
              <div>PROGRESS</div>
              <div>THRIVE</div>
              <div className="w-8 h-0.5 bg-stone-300 ml-auto mt-1.5" />
            </div>
          </div>

        </div>

        {/* MAIN 3-PANEL INTERACTIVE DISPLAY:
            1. Left: GP Consulting Patient Photography with Cursive Script
            2. Center: UK Map with 4 Clickable Regions + "Select a region" Callout
            3. Right: "Our Partner - Modality Partnerships" Card + Big Ben Tower Backdrop
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. LEFT PANEL: Doctor & Patient Consultation */}
          <div className="lg:col-span-4 relative">
            
            {/* Doctor Consulting Patient Photo */}
            <div className="relative rounded-[32px] overflow-hidden shadow-md border border-white/80 aspect-[4/3] sm:aspect-[1.2/1]">
              <img
                src={gpConsultingImg}
                alt="Compassionate female GP consulting with senior patient using digital tablet"
                className="w-full h-full object-cover object-[center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              
              {/* Doctor Consultation Info Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200/80 shadow-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-stone-800">Primary Care Integration</span>
                </div>
                <span className="text-[11px] text-teal-800 font-medium">GP Super-practices</span>
              </div>
            </div>

          </div>

          {/* 2. CENTER PANEL: Interactive UK Vector Map with 4 Regions */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            
            {/* "Select a region to learn more" Callout with curved arrow */}
            <div className="absolute -top-12 sm:-top-14 right-2 sm:right-6 z-20 flex flex-col items-center">
              <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-sm border border-stone-200/80 text-[11px] font-semibold text-teal-800 leading-tight">
                Select a region <br />
                <span className="text-stone-500 font-normal">to learn more</span>
              </div>
              {/* Hand-drawn style curved arrow SVG */}
              <svg className="w-6 h-6 text-stone-400 -mt-1 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 4 C 14 12, 10 14, 6 18" strokeLinecap="round" />
                <polyline points="6 12 6 18 12 18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Interactive SVG UK Map */}
            <div className="relative w-full max-w-[370px] aspect-[740/1260] flex items-center justify-center py-2">
              <svg
                viewBox={UK_MAP_PATHS.viewBox}
                className="w-full h-full select-none cursor-pointer"
                style={{ filter: 'drop-shadow(0 12px 24px rgba(12, 35, 64, 0.08))' }}
              >
                <defs>
                  {/* Subtle Region Drop Shadow */}
                  <filter id="regionActiveShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0c2340" floodOpacity="0.25" />
                  </filter>
                  <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0c2340" floodOpacity="0.18" />
                  </filter>
                </defs>

                {/* 0. NORTHERN IRELAND (Subtle background territory to complete UK map) */}
                <g className="transition-opacity duration-300 opacity-65">
                  <path
                    d={UK_MAP_PATHS.northernIreland}
                    fill="#d7e6df"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <text
                    x="165"
                    y="710"
                    textAnchor="middle"
                    fill="#52796f"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    className="select-none pointer-events-none opacity-80"
                  >
                    N. Ireland
                  </text>
                </g>

                {/* 1. SCOTLAND (Top Region: #205c50) */}
                <g
                  onClick={() => setSelectedRegionId('scotland')}
                  className="transition-all duration-300 group"
                  filter={selectedRegionId === 'scotland' ? 'url(#regionActiveShadow)' : undefined}
                >
                  <path
                    d={UK_MAP_PATHS.scotland}
                    className={`${regions.scotland.fillClass} hover:brightness-110 transition-all duration-200 stroke-white ${
                      selectedRegionId === 'scotland' ? 'stroke-[3.5] opacity-100' : 'stroke-[1.8] opacity-95'
                    }`}
                    strokeLinejoin="round"
                  />
                </g>

                {/* 2. NORTH ENGLAND (Mid-North Region: #2e8b7d) */}
                <g
                  onClick={() => setSelectedRegionId('north')}
                  className="transition-all duration-300 group"
                  filter={selectedRegionId === 'north' ? 'url(#regionActiveShadow)' : undefined}
                >
                  <path
                    d={UK_MAP_PATHS.north}
                    className={`${regions.north.fillClass} hover:brightness-110 transition-all duration-200 stroke-white ${
                      selectedRegionId === 'north' ? 'stroke-[3.5] opacity-100' : 'stroke-[1.8] opacity-95'
                    }`}
                    strokeLinejoin="round"
                  />
                </g>

                {/* 3. MIDLANDS & WALES (Middle Region: #9bc7a6) */}
                <g
                  onClick={() => setSelectedRegionId('midlands')}
                  className="transition-all duration-300 group"
                  filter={selectedRegionId === 'midlands' ? 'url(#regionActiveShadow)' : undefined}
                >
                  <path
                    d={UK_MAP_PATHS.midlands}
                    className={`${regions.midlands.fillClass} hover:brightness-105 transition-all duration-200 stroke-white ${
                      selectedRegionId === 'midlands' ? 'stroke-[3.5] opacity-100' : 'stroke-[1.8] opacity-95'
                    }`}
                    strokeLinejoin="round"
                  />
                </g>

                {/* 4. SOUTH ENGLAND (Bottom Blue Region: #77aae3) */}
                <g
                  onClick={() => setSelectedRegionId('south')}
                  className="transition-all duration-300 group"
                  filter={selectedRegionId === 'south' ? 'url(#regionActiveShadow)' : undefined}
                >
                  <path
                    d={UK_MAP_PATHS.south}
                    className={`${regions.south.fillClass} hover:brightness-110 transition-all duration-200 stroke-white ${
                      selectedRegionId === 'south' ? 'stroke-[3.5] opacity-100' : 'stroke-[1.8] opacity-95'
                    }`}
                    strokeLinejoin="round"
                  />
                </g>

                {/* INTERACTIVE REGION PINS & LABELS */}
                {(['scotland', 'north', 'midlands', 'south'] as const).map((regKey) => {
                  const reg = regions[regKey];
                  const isSelected = selectedRegionId === regKey;
                  return (
                    <g
                      key={reg.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRegionId(reg.id);
                      }}
                      className="cursor-pointer group"
                    >
                      {/* Active pulse aura */}
                      {isSelected && (
                        <circle
                          cx={reg.pinX}
                          cy={reg.pinY}
                          r="26"
                          className="animate-ping opacity-35"
                          fill={reg.color}
                        />
                      )}

                      {/* Pin Outer White Disc */}
                      <circle
                        cx={reg.pinX}
                        cy={reg.pinY}
                        r={isSelected ? 18 : 15}
                        fill="white"
                        filter="url(#pinShadow)"
                        className="transition-transform duration-200 group-hover:scale-110"
                        style={{ transformOrigin: `${reg.pinX}px ${reg.pinY}px` }}
                      />

                      {/* Pin Inner Color Disc */}
                      <circle
                        cx={reg.pinX}
                        cy={reg.pinY}
                        r={isSelected ? 11 : 9}
                        fill={reg.color}
                        className="transition-transform duration-200 group-hover:scale-110"
                        style={{ transformOrigin: `${reg.pinX}px ${reg.pinY}px` }}
                      />

                      {/* Pin Center White Dot */}
                      <circle
                        cx={reg.pinX}
                        cy={reg.pinY}
                        r="3.5"
                        fill="white"
                      />

                      {/* Pin Label Floating Badge */}
                      <g className="transition-all duration-200">
                        <rect
                          x={reg.pinX - 62}
                          y={reg.pinY + (isSelected ? 24 : 22)}
                          width="124"
                          height="28"
                          rx="14"
                          fill="white"
                          stroke={isSelected ? reg.color : '#e2e8f0'}
                          strokeWidth={isSelected ? 2 : 1}
                          filter="url(#pinShadow)"
                        />
                        <text
                          x={reg.pinX}
                          y={reg.pinY + (isSelected ? 43 : 41)}
                          textAnchor="middle"
                          fill={isSelected ? '#0c2340' : '#334155'}
                          fontSize="13"
                          fontWeight={isSelected ? '700' : '600'}
                          fontFamily="system-ui, -apple-system, sans-serif"
                          className="select-none pointer-events-none tracking-tight"
                        >
                          {reg.pinLabel}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Region Quick Strip on Mobile */}
            <div className="mt-2 text-center text-xs text-stone-600">
              Active: <span className="font-bold text-stone-900">{activeRegion.name}</span> ({activeRegion.hubsCount} Hubs)
            </div>

          </div>

          {/* 3. RIGHT PANEL: Floating Partner Card with Big Ben Behind */}
          <div className="lg:col-span-4 relative">
            
            {/* Big Ben Elizabeth Tower Architectural Photo Peeking Behind Card */}
            <div className="hidden xl:block absolute -top-8 -right-8 w-44 h-72 rounded-3xl overflow-hidden opacity-45 pointer-events-none shadow-sm -z-0">
              <img
                src={bigBenImg}
                alt="Big Ben Elizabeth Tower London"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#fbfdfc]" />
            </div>

            {/* OUR PARTNER CARD */}
            <div className="relative z-10 bg-white rounded-[32px] p-7 sm:p-8 shadow-lg border border-stone-200/90 space-y-6">
              
              {/* Card Eyebrow */}
              <div className="inline-flex items-center gap-3 select-none">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-stone-400 uppercase">
                  OUR PARTNER
                </span>
                <div className="w-12 h-px bg-stone-300" />
              </div>

              {/* Modality Logo */}
              <div>
                <ModalityLogo />
              </div>

              {/* Partnership Narrative */}
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                GOQii has forged a partnership with Modality Partnerships to support primary health care and community services across the UK.
              </p>

              {/* 3 Pill Feature Items matching reference screenshot */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100">
                {/* 1. Primary Health Care */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5f0] text-[#1e4d44] flex items-center justify-center mb-1.5 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-stone-800 leading-tight">
                    Primary<br />health care
                  </span>
                </div>

                {/* 2. Community Services */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#fde8dc] text-[#c2410c] flex items-center justify-center mb-1.5 shadow-2xs">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-stone-800 leading-tight">
                    Community<br />services
                  </span>
                </div>

                {/* 3. Across the UK */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#e0effe] text-[#1d4ed8] flex items-center justify-center mb-1.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-stone-800 leading-tight">
                    Across<br />the UK
                  </span>
                </div>
              </div>

              {/* Dynamic Active Region Pill Callout */}
              <div className="pt-2 border-t border-stone-100">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f4faf7] hover:bg-[#e8f5f0] border border-[#d2ebe1] text-xs font-semibold text-[#1e4d44] flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Explore {activeRegion.name} Hubs ({activeRegion.hubsCount})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

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

      {/* Regional Clinic Directory Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#1e4d44]" />
                <div>
                  <h4 className="text-base font-bold text-stone-900 leading-tight">
                    {activeRegion.name} Primary Care Hubs
                  </h4>
                  <div className="text-xs text-stone-500">
                    Modality Partnership Network
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeRegion.summary}
              </p>

              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#f0f7f4] rounded-2xl border border-[#d2ebe1]">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-stone-500">Registered Practice Hubs</div>
                  <div className="text-lg font-bold text-stone-900">{activeRegion.hubsCount} Super Hubs</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-stone-500">Covered NHS Population</div>
                  <div className="text-lg font-bold text-[#1e4d44]">{activeRegion.patientsServed}</div>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-stone-800">Featured Network Hubs in {activeRegion.name}:</div>
                {activeRegion.clinics.map((clinic, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#1e4d44] shrink-0" />
                    <span>{clinic}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
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

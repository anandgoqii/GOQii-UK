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
      fillClass: 'fill-[#205c50] hover:fill-[#18463d]',
      pinX: 180,
      pinY: 120,
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
      fillClass: 'fill-[#2e8b7d] hover:fill-[#257367]',
      pinX: 205,
      pinY: 198,
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
      fillClass: 'fill-[#9bc7a6] hover:fill-[#86b592]',
      pinX: 205,
      pinY: 275,
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
      fillClass: 'fill-[#77aae3] hover:fill-[#6297d1]',
      pinX: 215,
      pinY: 345,
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
            <div className="relative w-full max-w-[340px] aspect-[1/1.3] flex items-center justify-center">
              <svg
                viewBox="0 0 340 460"
                className="w-full h-full drop-shadow-md select-none cursor-pointer"
              >
                {/* 1. SCOTLAND (Top Region: #205c50) */}
                <g
                  onClick={() => setSelectedRegionId('scotland')}
                  className="transition-all duration-300"
                >
                  <path
                    d="M 140,55 
                       C 145,40 160,25 180,30 
                       C 195,35 210,40 215,55 
                       C 220,70 205,85 220,105 
                       C 230,115 210,135 200,145 
                       C 180,165 170,165 150,165 
                       C 135,165 130,150 120,140 
                       C 110,130 115,115 110,105 
                       C 105,95 120,80 130,70 Z"
                    className={`${regions.scotland.fillClass} stroke-white stroke-[2.5] ${
                      selectedRegionId === 'scotland' ? 'filter drop-shadow-lg' : 'opacity-90'
                    }`}
                  />
                  {/* Outer Islands accents */}
                  <circle cx="105" cy="85" r="4" fill="#205c50" />
                  <circle cx="112" cy="72" r="3.5" fill="#205c50" />
                  <circle cx="118" cy="58" r="4" fill="#205c50" />
                </g>

                {/* 2. NORTH ENGLAND (Mid-North Region: #2e8b7d) */}
                <g
                  onClick={() => setSelectedRegionId('north')}
                  className="transition-all duration-300"
                >
                  <path
                    d="M 150,165 
                       C 170,165 180,165 200,145 
                       C 210,155 225,170 235,190 
                       C 245,210 240,225 245,235 
                       C 225,245 205,250 185,250 
                       C 165,250 155,235 150,220 
                       C 145,200 148,180 150,165 Z"
                    className={`${regions.north.fillClass} stroke-white stroke-[2.5] ${
                      selectedRegionId === 'north' ? 'filter drop-shadow-lg' : 'opacity-90'
                    }`}
                  />
                </g>

                {/* 3. MIDLANDS (Middle-Green Region: #9bc7a6) */}
                <g
                  onClick={() => setSelectedRegionId('midlands')}
                  className="transition-all duration-300"
                >
                  <path
                    d="M 185,250 
                       C 205,250 225,245 245,235 
                       C 255,255 250,280 248,300 
                       C 225,315 200,320 180,315 
                       C 160,310 140,305 135,285 
                       C 130,265 155,250 185,250 Z"
                    className={`${regions.midlands.fillClass} stroke-white stroke-[2.5] ${
                      selectedRegionId === 'midlands' ? 'filter drop-shadow-lg' : 'opacity-90'
                    }`}
                  />
                  {/* Wales extension attached */}
                  <path
                    d="M 150,260 
                       C 135,260 120,270 125,295 
                       C 130,315 155,310 160,295 Z"
                    className={`${regions.midlands.fillClass} stroke-white stroke-[2]`}
                  />
                </g>

                {/* 4. SOUTH ENGLAND (Bottom Blue Region: #77aae3) */}
                <g
                  onClick={() => setSelectedRegionId('south')}
                  className="transition-all duration-300"
                >
                  <path
                    d="M 180,315 
                       C 200,320 225,315 248,300 
                       C 260,320 275,340 265,365 
                       C 255,385 220,380 200,380 
                       C 170,380 150,375 135,365 
                       C 115,360 85,380 75,375 
                       C 85,355 110,345 135,340 
                       C 150,325 165,320 180,315 Z"
                    className={`${regions.south.fillClass} stroke-white stroke-[2.5] ${
                      selectedRegionId === 'south' ? 'filter drop-shadow-lg' : 'opacity-90'
                    }`}
                  />
                </g>

                {/* REGION PINS & LABELS */}

                {/* Pin 1: Scotland */}
                <g
                  onClick={() => setSelectedRegionId('scotland')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="180"
                    cy="98"
                    r="8"
                    className={`stroke-white stroke-2 transition-all ${
                      selectedRegionId === 'scotland' ? 'fill-white stroke-[#205c50] stroke-[3]' : 'fill-[#205c50]'
                    }`}
                  />
                  <circle
                    cx="180"
                    cy="98"
                    r="3.5"
                    className={selectedRegionId === 'scotland' ? 'fill-[#205c50]' : 'fill-white'}
                  />
                  <text
                    x="180"
                    y="118"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    className="drop-shadow-sm select-none"
                  >
                    Scotland
                  </text>
                </g>

                {/* Pin 2: North England */}
                <g
                  onClick={() => setSelectedRegionId('north')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="205"
                    cy="188"
                    r="8"
                    className={`stroke-white stroke-2 transition-all ${
                      selectedRegionId === 'north' ? 'fill-white stroke-[#2e8b7d] stroke-[3]' : 'fill-[#2e8b7d]'
                    }`}
                  />
                  <circle
                    cx="205"
                    cy="188"
                    r="3.5"
                    className={selectedRegionId === 'north' ? 'fill-[#2e8b7d]' : 'fill-white'}
                  />
                  <text
                    x="205"
                    y="208"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    className="drop-shadow-sm select-none"
                  >
                    North England
                  </text>
                </g>

                {/* Pin 3: Midlands */}
                <g
                  onClick={() => setSelectedRegionId('midlands')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="200"
                    cy="280"
                    r="8"
                    className={`stroke-white stroke-2 transition-all ${
                      selectedRegionId === 'midlands' ? 'fill-white stroke-[#205c50] stroke-[3]' : 'fill-[#205c50]'
                    }`}
                  />
                  <circle
                    cx="200"
                    cy="280"
                    r="3.5"
                    className={selectedRegionId === 'midlands' ? 'fill-[#205c50]' : 'fill-white'}
                  />
                  <text
                    x="200"
                    y="300"
                    textAnchor="middle"
                    fill="#153e35"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    className="drop-shadow-2xs select-none"
                  >
                    Midlands
                  </text>
                </g>

                {/* Pin 4: South England */}
                <g
                  onClick={() => setSelectedRegionId('south')}
                  className="cursor-pointer group"
                >
                  <circle
                    cx="215"
                    cy="348"
                    r="8"
                    className={`stroke-white stroke-2 transition-all ${
                      selectedRegionId === 'south' ? 'fill-white stroke-[#1d4ed8] stroke-[3]' : 'fill-[#1d4ed8]'
                    }`}
                  />
                  <circle
                    cx="215"
                    cy="348"
                    r="3.5"
                    className={selectedRegionId === 'south' ? 'fill-[#1d4ed8]' : 'fill-white'}
                  />
                  <text
                    x="215"
                    y="368"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    className="drop-shadow-sm select-none"
                  >
                    South England
                  </text>
                </g>
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

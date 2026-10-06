import React, { useState } from 'react';
import {
  Users,
  Heart,
  MapPin,
  Leaf,
  BarChart2,
  CheckCircle2,
  X,
  ChevronRight,
  Building2,
  Activity,
  ArrowRight,
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
        <circle cx="17" cy="10" r="5" fill="#007791" />
        <path d="M6 38 C 6 22, 17 20, 24 38 Z" fill="#007791" />
        <circle cx="37" cy="10" r="5" fill="#00a896" />
        <path d="M26 38 C 33 20, 44 22, 48 38 Z" fill="#00a896" />
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

export interface ModalityDivisionData {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  region: string;
  icbName: string;
  color: string;
  pinX: number;
  pinY: number;
  labelX: number;
  labelY: number;
  labelAnchor: 'middle' | 'start' | 'end';
  hubsCount: number;
  practicesCount: number;
  patientsServed: string;
  clinics: string[];
  summary: string;
  programmes: string[];
}

export const UkHealthcareNetwork: React.FC = () => {
  // 7 Modality Partnership Divisions requested by the user
  const divisions: Record<string, ModalityDivisionData> = {
    awc: {
      id: 'awc',
      name: 'AWC',
      shortName: 'AWC',
      fullName: 'Airedale, Wharfedale & Craven',
      region: 'Yorkshire & Humber',
      icbName: 'Bradford District & Craven ICB',
      color: '#0284c7',
      pinX: 450,
      pinY: 760,
      labelX: 450,
      labelY: 728,
      labelAnchor: 'middle',
      hubsCount: 15,
      practicesCount: 7,
      patientsServed: '95,000+',
      clinics: [
        'Holycroft Surgery (Keighley)',
        'Farfield Group Practice (Keighley)',
        'Fisher Medical Centre (Skipton)',
        'Cross Hills Group Practice (Craven)',
        'Silsden & Steeton Medical Practice',
      ],
      summary:
        'Delivering integrated digital metabolic pathways, continuous glucose monitoring (CGM) pilots, and remote hypertension telemonitoring across the Yorkshire Dales, Keighley, and Craven.',
      programmes: ['Type 2 Diabetes Remission', 'Hypertension Telemetry', 'Dales Remote Care'],
    },
    birmingham: {
      id: 'birmingham',
      name: 'Birmingham',
      shortName: 'Birmingham',
      fullName: 'Birmingham & Sandwell',
      region: 'West Midlands',
      icbName: 'Birmingham and Solihull ICB',
      color: '#10b981',
      pinX: 465,
      pinY: 960,
      labelX: 532,
      labelY: 960,
      labelAnchor: 'middle',
      hubsCount: 35,
      practicesCount: 18,
      patientsServed: '140,000+',
      clinics: [
        'Handsworth Wood Medical Centre',
        'Enki Medical Centre (Soho Road)',
        'Laurie Pike Health Centre',
        'St Paul’s Medical Practice (Smethwick)',
        'Westbourne Medical Centre',
        'Modality Community Outpatients Hub',
      ],
      summary:
        'Modality’s flagship super-practice division pioneering multidisciplinary lifestyle therapeutics, culturally adapted nutritional coaching, and clinical medication tapering across Birmingham and Sandwell.',
      programmes: ['Multilingual Diabetes Coaching', 'Cardiac Health Hub', 'Community Outpatients'],
    },
    'east-surrey': {
      id: 'east-surrey',
      name: 'East-Surrey',
      shortName: 'East-Surrey',
      fullName: 'East Surrey Division',
      region: 'South East',
      icbName: 'Surrey Heartlands ICB',
      color: '#3b82f6',
      pinX: 560,
      pinY: 1105,
      labelX: 628,
      labelY: 1105,
      labelAnchor: 'middle',
      hubsCount: 12,
      practicesCount: 5,
      patientsServed: '55,000+',
      clinics: [
        'Townhill Medical Practice (Caterham)',
        'Birchwood Medical Practice (Horley)',
        'South Godstone Surgery',
        'Smallfield Surgery (Redhill)',
        'Moat House Surgery (Merstham)',
      ],
      summary:
        'Integrated primary care division across East Surrey providing proactive chronic disease identification, digital cardiovascular rehab, and seamless GP electronic health record telemetry.',
      programmes: ['Cardiovascular Risk Audits', 'Remote Vitals Monitoring', 'Surrey Prevention Pilot'],
    },
    lewisham: {
      id: 'lewisham',
      name: 'Lewisham',
      shortName: 'Lewisham',
      fullName: 'Lewisham Division (London)',
      region: 'Greater London',
      icbName: 'South East London ICS',
      color: '#f59e0b',
      pinX: 575,
      pinY: 1060,
      labelX: 638,
      labelY: 1060,
      labelAnchor: 'middle',
      hubsCount: 14,
      practicesCount: 6,
      patientsServed: '60,000+',
      clinics: [
        'Bellingham Medical Centre',
        'Sydenham Green Group Practice',
        'Mornington Surgery (New Cross)',
        'Honor Oak Health Centre',
        'Jenner Practice (Forest Hill)',
      ],
      summary:
        'High-density urban primary care collaborative focused on tackling health inequalities, clinical obesity interventions, and proactive digital nurse coaching in South East London.',
      programmes: ['Urban Health Equity', 'Clinical Weight Management', 'NHS App Integration'],
    },
    'mid-sussex': {
      id: 'mid-sussex',
      name: 'Mid-Sussex',
      shortName: 'Mid-Sussex',
      fullName: 'Mid-Sussex & Crawley',
      region: 'South East',
      icbName: 'Sussex Health and Care ICB',
      color: '#ec4899',
      pinX: 565,
      pinY: 1148,
      labelX: 565,
      labelY: 1184,
      labelAnchor: 'middle',
      hubsCount: 11,
      practicesCount: 5,
      patientsServed: '50,000+',
      clinics: [
        'Crawley Down Health Centre',
        'Judges Close Surgery (East Grinstead)',
        'Ship Street Surgery (East Grinstead)',
        'Pound Hill Medical Group (Crawley)',
        'Park Surgery (Horsham & Mid-Sussex)',
      ],
      summary:
        'Dedicated West Sussex network uniting GP practices across Crawley and Mid-Sussex with wearable telemetry, pre-diabetes interventions, and autonomic stress reduction pathways.',
      programmes: ['Pre-diabetes Intervention', 'Wearable Health Telemetry', 'Active Healthy Ageing'],
    },
    walsall: {
      id: 'walsall',
      name: 'Walsall',
      shortName: 'Walsall',
      fullName: 'Walsall Division',
      region: 'West Midlands',
      icbName: 'Black Country ICB',
      color: '#0d9488',
      pinX: 440,
      pinY: 915,
      labelX: 375,
      labelY: 915,
      labelAnchor: 'middle',
      hubsCount: 12,
      practicesCount: 5,
      patientsServed: '45,000+',
      clinics: [
        'St Peter’s Surgery (Walsall)',
        'Lockstown Practice (Willenhall)',
        'Darlaston Health Centre',
        'Pinfold Health Centre (Wednesbury)',
        'Pleck Health Centre (Walsall)',
      ],
      summary:
        'Black Country healthcare cluster driving early chronic kidney disease (CKD) identification, cardiac pacing, and nurse-led digital lifestyle consultations in primary care.',
      programmes: ['Chronic Kidney Disease Screening', 'Cardiac Care Coaching', 'Black Country Diabetes'],
    },
    wokingham: {
      id: 'wokingham',
      name: 'Wokingham',
      shortName: 'Wokingham',
      fullName: 'Wokingham Division',
      region: 'Berkshire & Thames Valley',
      icbName: 'Frimley Health & Care ICB',
      color: '#8b5cf6',
      pinX: 505,
      pinY: 1060,
      labelX: 435,
      labelY: 1060,
      labelAnchor: 'middle',
      hubsCount: 9,
      practicesCount: 4,
      patientsServed: '40,000+',
      clinics: [
        'Wokingham Medical Centre',
        'Wilderness Road Surgery (Earley)',
        'Finchampstead Surgery',
        'Woosehill Medical Practice',
      ],
      summary:
        'Thames Valley primary care innovation hub connecting continuous health biomarkers, structured nutrition, and personalized GP pathway referrals in Berkshire.',
      programmes: ['Thames Valley CGM Pilot', 'Preventative Longevity', 'Direct GP Referrals'],
    },
  };

  const divisionKeys = ['awc', 'birmingham', 'east-surrey', 'lewisham', 'mid-sussex', 'walsall', 'wokingham'] as const;
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>('birmingham');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalDivisionId, setModalDivisionId] = useState<string>('birmingham');

  const activeDivision = divisions[selectedDivisionId] || divisions.birmingham;
  const modalDivision = divisions[modalDivisionId] || activeDivision;

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
        
        {/* TOP ROW: Title & Subtitle + Top-Right Vertical Motto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 lg:mb-12">
          
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
              Through our national partnership with Modality Partnerships, UK’s largest General Practice super-partnership, delivering primary care integration and community services across key English divisions.
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

        {/* 7 DIVISION SELECTOR CHIPS */}
        <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-800 tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#1e4d44]" />
              <span>Modality Partnership Divisions (7)</span>
            </div>
            <span className="text-[11px] text-stone-500">
              Select a division to highlight on map & explore primary care hubs
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {divisionKeys.map((key) => {
              const div = divisions[key];
              const isSelected = selectedDivisionId === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivisionId(div.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#1e4d44] text-white shadow-sm ring-2 ring-[#1e4d44]/30 scale-102'
                      : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700 hover:text-stone-900 border border-stone-200/60'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: isSelected ? '#ffffff' : div.color }}
                  />
                  <span>{div.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-stone-600'
                    }`}
                  >
                    {div.hubsCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN 3-PANEL INTERACTIVE DISPLAY:
            1. Left: GP Consulting Patient Photography
            2. Center: UK Vector Map with 7 Divisions
            3. Right: "Our Partner - Modality Partnerships" Card
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 1. LEFT PANEL: Doctor & Patient Consultation */}
          <div className="lg:col-span-4 relative">
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

          {/* 2. CENTER PANEL: Interactive UK Vector Map with 7 Divisions */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            
            {/* Interactive SVG UK Map */}
            <div className="relative w-full max-w-[390px] aspect-[740/1260] flex items-center justify-center py-2">
              <svg
                viewBox={UK_MAP_PATHS.viewBox}
                className="w-full h-full select-none cursor-pointer"
                style={{ filter: 'drop-shadow(0 12px 24px rgba(12, 35, 64, 0.08))' }}
              >
                <defs>
                  <filter id="divisionShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0c2340" floodOpacity="0.22" />
                  </filter>
                  <filter id="activeBeaconShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1e4d44" floodOpacity="0.35" />
                  </filter>
                </defs>

                {/* 0. NORTHERN IRELAND */}
                <g className="opacity-60">
                  <path
                    d={UK_MAP_PATHS.northernIreland}
                    fill="#d7e6df"
                    stroke="#ffffff"
                    strokeWidth="1.8"
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

                {/* 1. SCOTLAND (Background Region) */}
                <g className="opacity-90">
                  <path
                    d={UK_MAP_PATHS.scotland}
                    fill="#205c50"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text
                    x="330"
                    y="520"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="14"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    className="select-none pointer-events-none opacity-70"
                  >
                    Scotland
                  </text>
                </g>

                {/* 2. NORTH ENGLAND (Contains AWC Division) */}
                <g>
                  <path
                    d={UK_MAP_PATHS.north}
                    fill="#2e8b7d"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    className="opacity-95"
                  />
                </g>

                {/* 3. MIDLANDS (Contains Walsall & Birmingham Divisions) */}
                <g>
                  <path
                    d={UK_MAP_PATHS.midlands}
                    fill="#9bc7a6"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    className="opacity-95"
                  />
                </g>

                {/* 4. SOUTH ENGLAND (Contains Wokingham, Lewisham, East-Surrey, Mid-Sussex) */}
                <g>
                  <path
                    d={UK_MAP_PATHS.south}
                    fill="#77aae3"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    className="opacity-95"
                  />
                </g>

                {/* INTERACTIVE 7 MODALITY PARTNERSHIP DIVISION PINS */}
                {divisionKeys.map((key) => {
                  const div = divisions[key];
                  const isSelected = selectedDivisionId === div.id;

                  return (
                    <g
                      key={div.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDivisionId(div.id);
                      }}
                      className="cursor-pointer group"
                    >
                      {/* Active static halo (no animation / no movement) */}
                      {isSelected && (
                        <circle
                          cx={div.pinX}
                          cy={div.pinY}
                          r="20"
                          fill={div.color}
                          opacity="0.2"
                        />
                      )}

                      {/* Connection line from pin to floating label badge if offset */}
                      {Math.hypot(div.labelX - div.pinX, div.labelY - div.pinY) > 25 && (
                        <line
                          x1={div.pinX}
                          y1={div.pinY}
                          x2={div.labelX}
                          y2={div.labelY}
                          stroke={isSelected ? '#1e4d44' : '#cbd5e1'}
                          strokeWidth={isSelected ? 1.5 : 1}
                          opacity={isSelected ? 0.8 : 0.4}
                        />
                      )}

                      {/* Pin Outer White Disc */}
                      <circle
                        cx={div.pinX}
                        cy={div.pinY}
                        r={isSelected ? 16 : 13}
                        fill="white"
                        filter="url(#divisionShadow)"
                        className="transition-transform duration-200 group-hover:scale-115"
                        style={{ transformOrigin: `${div.pinX}px ${div.pinY}px` }}
                      />

                      {/* Pin Inner Color Disc */}
                      <circle
                        cx={div.pinX}
                        cy={div.pinY}
                        r={isSelected ? 10 : 8}
                        fill={isSelected ? '#1e4d44' : div.color}
                        className="transition-transform duration-200 group-hover:scale-115"
                        style={{ transformOrigin: `${div.pinX}px ${div.pinY}px` }}
                      />

                      {/* Pin Center White Dot */}
                      <circle
                        cx={div.pinX}
                        cy={div.pinY}
                        r="3"
                        fill="white"
                      />

                      {/* Pin Division Label Pill Badge */}
                      <g className="transition-all duration-200">
                        {/* Calculate pill width dynamically based on label length */}
                        {(() => {
                          const badgeWidth = div.name.length > 8 ? 88 : div.name.length > 5 ? 78 : 64;
                          const badgeHeight = 24;
                          const bx = div.labelX - badgeWidth / 2;
                          const by = div.labelY - badgeHeight / 2;

                          return (
                            <>
                              <rect
                                x={bx}
                                y={by}
                                width={badgeWidth}
                                height={badgeHeight}
                                rx="12"
                                fill={isSelected ? '#1e4d44' : '#ffffff'}
                                stroke={isSelected ? '#dcf2ea' : '#e2e8f0'}
                                strokeWidth={isSelected ? 2 : 1}
                                filter={isSelected ? 'url(#activeBeaconShadow)' : 'url(#divisionShadow)'}
                              />
                              <text
                                x={div.labelX}
                                y={div.labelY + 4}
                                textAnchor="middle"
                                fill={isSelected ? '#ffffff' : '#0f172a'}
                                fontSize="11"
                                fontWeight={isSelected ? '800' : '700'}
                                fontFamily="system-ui, -apple-system, sans-serif"
                                className="select-none pointer-events-none tracking-tight"
                              >
                                {div.name}
                              </text>
                            </>
                          );
                        })()}
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Division Quick Strip on Mobile */}
            <div className="mt-2 text-center text-xs text-stone-600">
              Active Division:{' '}
              <span className="font-bold text-stone-900">{activeDivision.fullName}</span> (
              {activeDivision.hubsCount} Hubs)
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
            <div className="relative z-10 bg-white rounded-[32px] p-6 sm:p-7 shadow-lg border border-stone-200/90 space-y-5">
              
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
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                GOQii has forged a national partnership with Modality Partnerships to deliver preventative clinical coaching and digital pathways directly integrated into primary care practices.
              </p>

              {/* ACTIVE DIVISION HIGHLIGHT CARD */}
              <div className="p-4 rounded-2xl bg-[#f4faf7] border border-[#d2ebe1] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: activeDivision.color }}
                    />
                    <span className="text-xs font-bold text-stone-900 tracking-tight">
                      {activeDivision.name} Division
                    </span>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white text-[#1e4d44] border border-[#d2ebe1]">
                    {activeDivision.region}
                  </span>
                </div>

                <div className="text-xs text-stone-700 font-medium">
                  {activeDivision.fullName}
                </div>

                {/* 2 Stats Columns */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#d2ebe1]/70 text-xs">
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase font-semibold">Hubs & Clinics</div>
                    <div className="text-sm font-bold text-stone-900">
                      {activeDivision.hubsCount} Hubs <span className="text-[11px] font-normal text-stone-500">({activeDivision.practicesCount} Surgeries)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase font-semibold">Population Covered</div>
                    <div className="text-sm font-bold text-[#1e4d44]">
                      {activeDivision.patientsServed}
                    </div>
                  </div>
                </div>

                {/* Featured Practices Preview */}
                <div className="pt-2 border-t border-[#d2ebe1]/70 space-y-1">
                  <div className="text-[10px] uppercase font-semibold text-stone-500">
                    Featured Modality Surgeries:
                  </div>
                  <div className="space-y-1">
                    {activeDivision.clinics.slice(0, 3).map((clinic, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1e4d44] shrink-0" />
                        <span className="truncate">{clinic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button to open directory modal */}
                <button
                  onClick={() => {
                    setModalDivisionId(activeDivision.id);
                    setModalOpen(true);
                  }}
                  className="w-full mt-2 py-2 px-3.5 rounded-xl bg-[#1e4d44] hover:bg-[#153831] text-white text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer shadow-xs"
                >
                  <span>Explore {activeDivision.name} Directory</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3 Pill Feature Items */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-[#e8f5f0] text-[#1e4d44] flex items-center justify-center mb-1 shadow-2xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-stone-800 leading-tight">
                    Primary<br />health care
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-[#fde8dc] text-[#c2410c] flex items-center justify-center mb-1 shadow-2xs">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-stone-800 leading-tight">
                    Community<br />services
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-full bg-[#e0effe] text-[#1d4ed8] flex items-center justify-center mb-1 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-medium text-stone-800 leading-tight">
                    7 National<br />Divisions
                  </span>
                </div>
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

      {/* Regional Clinic Directory Modal with 7 Division Tabs */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#1e4d44]" />
                <div>
                  <h4 className="text-base font-bold text-stone-900 leading-tight">
                    Modality Partnership Division Directory
                  </h4>
                  <div className="text-xs text-stone-500">
                    Primary Care Super-Partnership Network
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Division Switcher in Modal */}
            <div className="px-5 pt-3 pb-2 border-b border-stone-100 bg-stone-50/70 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
              {divisionKeys.map((key) => {
                const div = divisions[key];
                const isActive = modalDivisionId === div.id;
                return (
                  <button
                    key={div.id}
                    onClick={() => setModalDivisionId(div.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#1e4d44] text-white shadow-xs'
                        : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-200'
                    }`}
                  >
                    {div.name}
                  </button>
                );
              })}
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-base font-bold text-stone-900">
                    {modalDivision.fullName}
                  </h5>
                  <div className="text-xs text-stone-500">{modalDivision.icbName}</div>
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
                  style={{ backgroundColor: modalDivision.color }}
                >
                  {modalDivision.name}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {modalDivision.summary}
              </p>

              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#f0f7f4] rounded-2xl border border-[#d2ebe1]">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-stone-500">Practice Hubs</div>
                  <div className="text-base font-bold text-stone-900">
                    {modalDivision.hubsCount} Hubs ({modalDivision.practicesCount} Surgeries)
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-stone-500">Covered NHS Population</div>
                  <div className="text-base font-bold text-[#1e4d44]">{modalDivision.patientsServed}</div>
                </div>
              </div>

              {/* Active Programmes in this Division */}
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-stone-800">Active Digital Pathways:</div>
                <div className="flex flex-wrap gap-1.5">
                  {modalDivision.programmes.map((prog, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200/70 text-teal-800 font-medium"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>

              {/* Registered NHS Surgeries in Division */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-stone-800">
                  Registered Modality GP Practices & Health Centres:
                </div>
                {modalDivision.clinics.map((clinic, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl border border-stone-200/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1e4d44] shrink-0" />
                    <span>{clinic}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                <button
                  onClick={() => {
                    setSelectedDivisionId(modalDivision.id);
                    setModalOpen(false);
                  }}
                  className="text-xs font-semibold text-[#1e4d44] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Select {modalDivision.name} on Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setModalOpen(false)}
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

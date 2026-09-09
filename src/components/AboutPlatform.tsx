import React, { useState } from 'react';
import {
  Users,
  BarChart2,
  Leaf,
  Heart,
  ChevronRight,
  Target,
  FileCheck,
  Laptop,
  Handshake,
  Footprints,
  Apple,
  Flower2,
  Moon,
  Activity,
  Scale,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import activeMatureManImg from '../assets/images/active_mature_man_1788862642799.jpg';
import doctorCoachImg from '../assets/images/female_doctor_coach_1788862666659.jpg';

export const AboutPlatform: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="about-platform"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#dcf2ea]/25 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-[#eef6fc]/40 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: Header Title + Top Badges & Cursive Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 lg:mb-16">
          
          {/* Left: Eyebrow, Title & Subtitle */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-3 select-none">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                SECTION 14 — ABOUT GOQii UK
              </span>
              <div className="w-10 sm:w-14 h-px bg-stone-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
              A healthcare platform <br />
              <span className="text-[#1e4d44] font-medium">built around people.</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
              GOQii UK brings together people, technology and evidence-based care to help individuals take charge of their health and live a better tomorrow.
            </p>
          </div>

          {/* Right: Top Metric Badges */}
          <div className="lg:col-span-5 flex flex-col items-end justify-end self-stretch space-y-6">
            
            {/* 4 Pillars Header Strip with Vertical Dividers */}
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 select-none">
              
              {/* 1. Real People */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f5f0] text-[#1e4d44] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-medium text-stone-700 leading-tight">
                  Real People<br />Real Support
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-stone-200" />

              {/* 2. Data-Driven Insights */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e0effe] text-[#1d4ed8] flex items-center justify-center shrink-0">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-medium text-stone-700 leading-tight">
                  Data-Driven<br />Insights
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-stone-200" />

              {/* 3. Preventive Care */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#eaf7ee] text-[#16a34a] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-medium text-stone-700 leading-tight">
                  Preventive<br />Care
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-stone-200" />

              {/* 4. Healthier Communities */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#fde8dc] text-[#c2410c] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-medium text-stone-700 leading-tight">
                  Healthier<br />Communities
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3 MAIN FEATURE PILLAR CARDS: 01 PEOPLE | 02 DATA | 03 PREVENTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          
          {/* CARD 01: PEOPLE */}
          <div
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#eef8f4] via-[#f7fbf9] to-white border border-[#d2ebe1] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Top: Number & Floating Badge */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#2e8b7d] font-heading block">
                    01
                  </span>
                  <div className="w-8 h-0.5 bg-[#2e8b7d] mt-1 rounded-full" />
                </div>

                <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-2xs border border-[#d2ebe1] flex items-center gap-2 text-[10px] font-semibold text-stone-700">
                  <Users className="w-3.5 h-3.5 text-[#2e8b7d]" />
                  <span>Support • Guidance • Accountability</span>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-1.5 mb-3">
                <h3 className="text-xs tracking-[0.25em] font-bold text-[#1e4d44] uppercase">
                  PEOPLE
                </h3>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                  Healthcare professionals and coaches.
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-6">
                Our programmes are delivered by a team of certified healthcare professionals, coaches and specialists who provide personalised guidance and ongoing support — every step of the way.
              </p>

              {/* Photography Artwork Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-5 shadow-xs border border-white">
                <img
                  src={doctorCoachImg}
                  alt="Doctor consulting with patient"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Handwritten note */}
              <div className="font-['Caveat',cursive] text-[#2c6155] text-xl sm:text-2xl text-center mb-6">
                People at the heart of better health.
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#e2f1eb] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#2e8b7d]/40 flex items-center justify-center text-[#2e8b7d] shadow-2xs group-hover:bg-[#2e8b7d] group-hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-stone-700 uppercase">
                EXPERT CARE. REAL SUPPORT.
              </span>
            </div>
          </div>

          {/* CARD 02: DATA */}
          <div
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#eef6fc] via-[#f7fafd] to-white border border-[#d6e7f7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Top: Number & Floating Badge */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#1d4ed8] font-heading block">
                    02
                  </span>
                  <div className="w-8 h-0.5 bg-[#1d4ed8] mt-1 rounded-full" />
                </div>

                <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-2xs border border-[#d6e7f7] flex items-center gap-2 text-[10px] font-semibold text-stone-700">
                  <BarChart2 className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>Insights for a healthier tomorrow</span>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-1.5 mb-3">
                <h3 className="text-xs tracking-[0.25em] font-bold text-[#1e4d44] uppercase">
                  DATA
                </h3>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                  Insights from health information.
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5">
                We use health data and advanced analytics to uncover meaningful insights, track progress and enable more informed, personalised care decisions.
              </p>

              {/* Data Phone Mockup & Radial Rings */}
              <div className="relative rounded-2xl p-4 bg-white/70 backdrop-blur-xs border border-[#d6e7f7] shadow-xs mb-6 overflow-hidden">
                {/* Background radar rings */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-blue-200/50 pointer-events-none" />
                <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-blue-200/60 pointer-events-none" />

                {/* Smartphone Device Mockup UI */}
                <div className="relative mx-auto max-w-[210px] bg-stone-900 rounded-[24px] p-2 shadow-md border-2 border-stone-800">
                  {/* Speaker bar */}
                  <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mb-2" />
                  
                  {/* Screen Content */}
                  <div className="bg-white rounded-[18px] p-2.5 space-y-2 text-stone-900">
                    <div className="flex items-center justify-between text-[9px] font-bold text-stone-800 border-b border-stone-100 pb-1">
                      <span>&lt; My Health</span>
                      <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                    </div>

                    <div className="flex justify-between text-[8px] text-stone-400 font-semibold px-0.5">
                      <span className="text-blue-600 font-bold">Trends</span>
                      <span>Insights</span>
                      <span>Goals</span>
                    </div>

                    {/* Metric 1: Steps */}
                    <div className="p-1.5 rounded-lg bg-[#f0fdf4] border border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Footprints className="w-3.5 h-3.5 text-emerald-600" />
                        <div>
                          <div className="text-[7px] text-stone-500 uppercase font-bold">Steps</div>
                          <div className="text-[10px] font-bold text-stone-900">8,246</div>
                        </div>
                      </div>
                      <span className="text-[7px] text-emerald-700 font-bold">+12% this week</span>
                    </div>

                    {/* Metric 2: Sleep */}
                    <div className="p-1.5 rounded-lg bg-[#faf5ff] border border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Moon className="w-3.5 h-3.5 text-purple-600" />
                        <div>
                          <div className="text-[7px] text-stone-500 uppercase font-bold">Sleep</div>
                          <div className="text-[10px] font-bold text-stone-900">7h 32m</div>
                        </div>
                      </div>
                      <span className="text-[7px] text-purple-700 font-bold">Improving</span>
                    </div>

                    {/* Metric 3: Heart Rate */}
                    <div className="p-1.5 rounded-lg bg-[#fff1f2] border border-rose-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-rose-600" />
                        <div>
                          <div className="text-[7px] text-stone-500 uppercase font-bold">Heart Rate</div>
                          <div className="text-[10px] font-bold text-stone-900">72 bpm</div>
                        </div>
                      </div>
                      <span className="text-[7px] text-rose-700 font-bold">In range</span>
                    </div>

                    {/* Metric 4: Weight */}
                    <div className="p-1.5 rounded-lg bg-[#f0f9ff] border border-sky-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-sky-600" />
                        <div>
                          <div className="text-[7px] text-stone-500 uppercase font-bold">Weight</div>
                          <div className="text-[10px] font-bold text-stone-900">68.4 kg</div>
                        </div>
                      </div>
                      <span className="text-[7px] text-sky-700 font-bold">-1.2 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#dcecf9] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#1d4ed8]/40 flex items-center justify-center text-[#1d4ed8] shadow-2xs group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-stone-700 uppercase">
                TURNING DATA INTO POSSIBILITIES.
              </span>
            </div>
          </div>

          {/* CARD 03: PREVENTION */}
          <div
            onMouseEnter={() => setActiveCard(3)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#fff6f0] via-[#fefaf7] to-white border border-[#fde4d4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Top: Number & Floating Action Pills */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#ea580c] font-heading block">
                    03
                  </span>
                  <div className="w-8 h-0.5 bg-[#ea580c] mt-1 rounded-full" />
                </div>

                {/* 3 stacked action pills matching reference */}
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="bg-white/95 px-3 py-1 rounded-full shadow-2xs border border-orange-100 flex items-center gap-1.5 text-[10px] font-bold text-stone-700">
                    <Footprints className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>Move More</span>
                  </div>
                  <div className="bg-white/95 px-3 py-1 rounded-full shadow-2xs border border-emerald-100 flex items-center gap-1.5 text-[10px] font-bold text-stone-700">
                    <Apple className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Eat Better</span>
                  </div>
                  <div className="bg-white/95 px-3 py-1 rounded-full shadow-2xs border border-purple-100 flex items-center gap-1.5 text-[10px] font-bold text-stone-700">
                    <Flower2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Feel Stronger</span>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-1.5 mb-3">
                <h3 className="text-xs tracking-[0.25em] font-bold text-[#1e4d44] uppercase">
                  PREVENTION
                </h3>
                <h4 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                  Helping people take action earlier.
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-6">
                We focus on preventive healthcare and self-care, empowering individuals to adopt healthier habits, manage chronic conditions and reduce future health risks.
              </p>

              {/* Photography Artwork Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-5 shadow-xs border border-white">
                <img
                  src={activeMatureManImg}
                  alt="Active mature man smiling outdoors"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Handwritten note */}
              <div className="font-['Caveat',cursive] text-[#2c6155] text-xl sm:text-2xl text-center mb-6">
                Healthier Today Brighter Tomorrows
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#fde4d4] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#ea580c]/40 flex items-center justify-center text-[#ea580c] shadow-2xs group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#ea580c] uppercase">
                PREVENTION FIRST. BRIGHTER TOMORROW.
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM VERIFICATION BAR (6 Feature Items + Right Slogan) */}
        <div className="mt-16 pt-8 border-t border-stone-200/90 flex flex-col lg:flex-row items-center justify-between gap-6 select-none">
          
          {/* 6 Capabilities with dividers */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-stone-800">
            
            {/* 1. Self-care */}
            <div className="flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Self-care<br />
                <span className="text-stone-500">for healthier lives</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            {/* 2. Chronic disease management */}
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Chronic disease<br />
                <span className="text-stone-500">management</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            {/* 3. Certified professionals */}
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Certified<br />
                <span className="text-stone-500">professionals</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            {/* 4. Health data analytics */}
            <div className="flex items-center gap-2.5">
              <BarChart2 className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Health data<br />
                <span className="text-stone-500">analytics</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            {/* 5. Digital healthcare */}
            <div className="flex items-center gap-2.5">
              <Laptop className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Digital<br />
                <span className="text-stone-500">healthcare</span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            {/* 6. Modality partnerships */}
            <div className="flex items-center gap-2.5">
              <Handshake className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium leading-tight">
                Modality<br />
                <span className="text-stone-500">partnerships</span>
              </div>
            </div>

          </div>

          {/* Right Slogan */}
          <div className="shrink-0 text-right lg:pl-6 lg:border-l lg:border-stone-200">
            <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-stone-400">
              PEOPLE.
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-stone-400">
              TECHNOLOGY.
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#1e4d44]">
              A HEALTHIER UK.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

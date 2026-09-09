import React, { useState } from 'react';
import {
  BarChart2,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  Footprints,
  Moon,
  Flame,
  Smile,
  Heart,
  Leaf,
  Bell,
  Home,
  BookOpen,
  MoreHorizontal,
  ChevronRight,
  TrendingUp,
  Star,
  Sparkles,
  CheckCircle2,
  X,
} from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'home' | 'track' | 'coach' | 'learn'>('home');
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      id: 'track',
      title: 'Track',
      description: 'Monitor your health, activity, sleep and more.',
      icon: BarChart2,
      bg: 'bg-[#d8eee5]',
      color: 'text-[#1e4d44]',
    },
    {
      id: 'connect',
      title: 'Connect',
      description: 'Get continuous support from experts and coaches.',
      icon: Users,
      bg: 'bg-[#fde8dc]',
      color: 'text-[#c2410c]',
    },
    {
      id: 'learn',
      title: 'Learn',
      description: 'Access personalised insights and resources.',
      icon: Lightbulb,
      bg: 'bg-[#ede9fe]',
      color: 'text-[#6d28d9]',
    },
    {
      id: 'stay-motivated',
      title: 'Stay Motivated',
      description: 'Celebrate milestones and keep moving forward.',
      icon: Award,
      bg: 'bg-[#dbeafe]',
      color: 'text-[#1d4ed8]',
    },
  ];

  const stats = [
    { value: '10M+', label: 'Lives Touched' },
    { value: '4.8 ★', label: 'App Rating', hasStar: true },
    { value: '150+', label: 'Expert Coaches' },
    { value: '90%', label: 'Users Feel Healthier' },
  ];

  return (
    <section
      id="goqii-app"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Soft mint backdrop halo behind the phone */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-[#dcf2ea]/45 blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#f0f9f5]/50 blur-3xl pointer-events-none -z-0" />

      {/* Top Right Vertical Text: PREVENT PERSONALISE PROGRESS */}
      <div className="hidden xl:block absolute right-8 lg:right-12 top-20 text-[11px] tracking-[0.22em] uppercase text-stone-400 font-medium leading-loose select-none text-right z-10">
        <div>PREVENT</div>
        <div>PERSONALISE</div>
        <div>PROGRESS</div>
        <div className="w-8 h-0.5 bg-stone-300 ml-auto mt-2" />
      </div>

      {/* Bottom Right Decorative Plant Accent (SVG) */}
      <div className="absolute -bottom-10 -right-8 w-44 h-44 pointer-events-none opacity-25 select-none -z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#1e4d44]">
          <path
            d="M180 180 C 140 120, 80 100, 20 80 C 60 140, 100 160, 180 180 Z"
            fill="currentColor"
          />
          <path
            d="M190 190 C 130 110, 90 60, 40 30 C 70 110, 120 150, 190 190 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Eyebrow, Heading, Features, Stats & App Store Badges */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-3 select-none">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                YOUR HEALTH IN YOUR HANDS
              </span>
              <div className="w-10 sm:w-14 h-px bg-stone-400" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
              Smarter tools <br />
              <span className="text-[#1e4d44] font-medium">for lasting health.</span>
            </h2>

            {/* Subhead narrative */}
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              The GOQii app brings together personalised guidance, expert support and real-time insights — all in one place.
            </p>

            {/* 4 Feature Columns with Circle Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 pt-2">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex flex-col items-start">
                    <div
                      className={`w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-3 shadow-2xs border border-white`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-sm font-semibold text-stone-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-normal mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Metrics / Stats Strip */}
            <div className="pt-4 pb-2 border-y border-stone-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
              {stats.map((st, idx) => (
                <div key={idx} className="relative pr-2">
                  <div className="text-2xl sm:text-[26px] font-semibold text-stone-900 tracking-tight flex items-center gap-1">
                    {st.hasStar ? (
                      <>
                        <span>4.8</span>
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </>
                    ) : (
                      st.value
                    )}
                  </div>
                  <div className="text-[11px] sm:text-xs text-stone-500 font-normal mt-0.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button and Store Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary Green Pill Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore the GOQii App</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Apple App Store Badge */}
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-stone-800 transition-colors shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-.99 1.74-.86 2.76 1.01.08 2.05-.53 2.59-1.26z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] uppercase tracking-wider text-stone-300">Download on the</div>
                  <div className="text-[13px] font-semibold tracking-tight">App Store</div>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-stone-800 transition-colors shadow-xs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a2.36 2.36 0 0 1-.22-.986V2.8a2.36 2.36 0 0 1 .219-.986z"
                    fill="#2196F3"
                  />
                  <path
                    d="M17.153 8.638L4.85 1.543A2.08 2.08 0 0 0 3.61 1.814l10.183 10.186 3.36-3.362z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M3.609 22.186c.38.254.846.353 1.24.129l12.304-7.096-3.361-3.363L3.609 22.186z"
                    fill="#F44336"
                  />
                  <path
                    d="M20.528 10.579l-3.375-1.941-3.361 3.362 3.361 3.363 3.375-1.942a1.644 1.644 0 0 0 0-2.842z"
                    fill="#FFEB3B"
                  />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[9px] uppercase tracking-wider text-stone-300">GET IT ON</div>
                  <div className="text-[13px] font-semibold tracking-tight">Google Play</div>
                </div>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic Floating iPhone Mockup with 4 Surrounding Floating Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            
            {/* 4 FLOATING WIDGET CARDS AROUND PHONE */}

            {/* 1. Floating Card: More Movement (Top-Left of phone) */}
            <div className="absolute -top-3 sm:top-2 left-0 sm:-left-6 lg:-left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-stone-200/90 z-20 flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-full bg-[#d8eee5] text-[#1e4d44] flex items-center justify-center shrink-0">
                <Footprints className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-900 leading-tight">More Movement</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-stone-400 font-mono">llll</span>
                  <span className="text-xs font-bold text-teal-700">+24% ↑</span>
                </div>
              </div>
            </div>

            {/* 2. Floating Card: Better Sleep (Middle-Left of phone) */}
            <div className="absolute top-[44%] sm:top-[42%] -left-2 sm:-left-8 lg:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-stone-200/90 z-20 flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-full bg-[#e0effe] text-[#1d4ed8] flex items-center justify-center shrink-0">
                <Moon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-900 leading-tight">Better Sleep</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-stone-400 font-mono">llll</span>
                  <span className="text-xs font-bold text-teal-700">+18% ↑</span>
                </div>
              </div>
            </div>

            {/* 3. Floating Card: Calmer Mind (Top-Right of phone) */}
            <div className="absolute top-8 sm:top-14 -right-1 sm:-right-6 lg:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-stone-200/90 z-20 flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-full bg-[#ffe4e6] text-[#e11d48] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-900 leading-tight">Calmer Mind</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-stone-400 font-mono">llll</span>
                  <span className="text-xs font-bold text-teal-700">+32% ↑</span>
                </div>
              </div>
            </div>

            {/* 4. Floating Card: Healthier Choices (Bottom-Right of phone) */}
            <div className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-8 lg:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-stone-200/90 z-20 flex items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-stone-900 leading-tight">Healthier Choices</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-stone-400 font-mono">llll</span>
                  <span className="text-xs font-bold text-teal-700">+28% ↑</span>
                </div>
              </div>
            </div>

            {/* THE iPHONE MOCKUP FRAME */}
            <div className="relative w-[285px] sm:w-[315px] rounded-[48px] bg-stone-900 p-3 shadow-2xl ring-1 ring-stone-800 border-[3.5px] border-stone-700 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* iPhone screen glass */}
              <div className="relative rounded-[40px] bg-stone-50 overflow-hidden border border-stone-200 flex flex-col justify-between select-none">
                
                {/* Dynamic Island and Status Bar */}
                <div className="pt-3 px-5 pb-2 flex items-center justify-between text-[11px] font-semibold text-stone-900 bg-white">
                  <span>9:41</span>
                  {/* Pill Dynamic Island */}
                  <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                  <div className="flex items-center gap-1 text-stone-700 text-[10px]">
                    <span className="font-mono text-[9px]">5G</span>
                    <div className="w-3.5 h-2 border border-stone-600 rounded-2xs p-0.5 flex items-center">
                      <div className="w-2 h-1 bg-stone-800 rounded-3xs" />
                    </div>
                  </div>
                </div>

                {/* Inside App Content */}
                <div className="p-4 space-y-3.5 bg-[#fbfdfc] flex-1">
                  
                  {/* In-App Header: Logo + Bell + Avatar */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      {/* 4 dots/squares GOQii logo */}
                      <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                        <div className="w-1.5 h-1.5 rounded-2xs bg-[#e11d48]" />
                        <div className="w-1.5 h-1.5 rounded-2xs bg-[#3b82f6]" />
                        <div className="w-1.5 h-1.5 rounded-2xs bg-[#f59e0b]" />
                        <div className="w-1.5 h-1.5 rounded-2xs bg-[#10b981]" />
                      </div>
                      <span className="text-sm font-bold tracking-tight text-stone-900">GOQii</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                        <Bell className="w-3.5 h-3.5" />
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="User profile"
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-stone-300"
                      />
                    </div>
                  </div>

                  {/* Greeting */}
                  <div>
                    <h4 className="text-base font-bold text-stone-900 tracking-tight leading-tight">
                      Hi there!
                    </h4>
                    <p className="text-[11px] text-stone-500 font-normal">
                      Daily progress. Lasting vitality.
                    </p>
                  </div>

                  {/* Today's Progress Card with 72% Ring */}
                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="text-xs font-semibold text-stone-800 mb-2">
                      Today&apos;s Progress
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="#e5e7eb"
                            strokeWidth="4"
                            fill="transparent"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="#1e4d44"
                            strokeWidth="4"
                            strokeDasharray="125.6"
                            strokeDashoffset="35.1"
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <span className="absolute text-[11px] font-bold text-stone-800">
                          72%
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-medium text-stone-800 leading-tight">
                          You&apos;re doing great!
                        </div>
                        <div className="text-[10px] text-stone-500 font-normal">
                          Keep it up!
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
                    </div>
                  </div>

                  {/* 4 Metric Pills Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Steps */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#d8eee5] text-[#1e4d44] flex items-center justify-center shrink-0">
                        <Footprints className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-400 font-medium">Steps</div>
                        <div className="text-xs font-bold text-stone-800">6,432</div>
                      </div>
                    </div>

                    {/* Sleep */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#ede9fe] text-[#6d28d9] flex items-center justify-center shrink-0">
                        <Moon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-400 font-medium">Sleep</div>
                        <div className="text-xs font-bold text-stone-800">7h 20m</div>
                      </div>
                    </div>

                    {/* Calories */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#fee2e2] text-[#ef4444] flex items-center justify-center shrink-0">
                        <Flame className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-400 font-medium">Calories</div>
                        <div className="text-xs font-bold text-stone-800">1,320</div>
                      </div>
                    </div>

                    {/* Mood */}
                    <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center shrink-0">
                        <Smile className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-400 font-medium">Mood</div>
                        <div className="text-xs font-bold text-stone-800">Good</div>
                      </div>
                    </div>
                  </div>

                  {/* Today's Insight Card */}
                  <div className="p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                        <Lightbulb className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] font-semibold text-stone-800">
                        Today&apos;s Insight
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-600 font-normal leading-relaxed">
                      A 20-minute walk can boost your mood and energy levels.
                    </p>
                  </div>

                </div>

                {/* In-App Bottom Navigation Bar */}
                <div className="pt-2 pb-3 px-4 bg-white border-t border-stone-200/80 flex items-center justify-between text-stone-400">
                  <div className="flex flex-col items-center gap-0.5 text-[#1e4d44]">
                    <Home className="w-4 h-4" />
                    <span className="text-[9px] font-semibold">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
                    <Users className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Coach</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
                    <BarChart2 className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Track</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-[9px] font-medium">Learn</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-stone-700 cursor-pointer">
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="text-[9px] font-medium">More</span>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="h-4 bg-white flex items-center justify-center pb-1">
                  <div className="w-28 h-1 bg-stone-300 rounded-full" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* App Exploration / Download Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1e4d44]" />
                <span className="text-sm font-semibold text-stone-900">
                  Experience GOQii 2.0
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h4 className="text-lg font-medium text-stone-900">
                Your Health Journey Starts Today
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Connect your devices, track vitals in real time, and gain continuous access to certified UK health coaches and GP-reviewed care plans.
              </p>

              <div className="space-y-2 pt-1 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4d44]" />
                  <span>Compatible with iOS (HealthKit) and Android (Google Fit)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4d44]" />
                  <span>Free 14-day trial with dedicated health coach assignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4d44]" />
                  <span>Seamless GP report exports and NHS primary care alignment</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    const el = document.getElementById('contact-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 py-3 rounded-full text-xs font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-colors text-center"
                >
                  Book GP or Coach Consultation
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-3 rounded-full text-xs font-medium text-stone-600 hover:bg-stone-100"
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

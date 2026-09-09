import React, { useState } from 'react';
import {
  Sprout,
  Activity,
  Moon,
  Flower2,
  ArrowRight,
  Heart,
  Users,
  Leaf,
  BarChart2,
  X,
  CheckCircle2,
} from 'lucide-react';

import nutritionImg from '../assets/images/woman_eating_salad_nutrition_1788859991059.jpg';
import exerciseImg from '../assets/images/man_jogging_park_exercise_1788860015063.jpg';
import sleepImg from '../assets/images/woman_sleeping_pillow_rest_1788860036063.jpg';
import mentalHealthImg from '../assets/images/woman_meditating_living_room_1788860054967.jpg';

interface PillarDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  handwritten: string[];
  image: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  borderColor: string;
  ringColor: string;
  clinicalPoints: string[];
}

export const ClinicalMethodology: React.FC = () => {
  const [activeModalPillar, setActiveModalPillar] = useState<PillarDetail | null>(null);

  const pillars: PillarDetail[] = [
    {
      id: 'nutrition',
      title: 'Nutrition',
      tagline: 'Fuel your body.',
      description: 'Practical, sustainable nutrition guidance designed for your lifestyle.',
      handwritten: ['Better', 'Food', 'Brighter', 'Days'],
      image: nutritionImg,
      icon: Sprout,
      iconBg: 'bg-[#d8f0e5]',
      iconColor: 'text-[#1e4d44]',
      cardBg: 'from-[#f0f9f5] via-[#e5f5ed] to-[#d9f0e4]',
      borderColor: 'border-[#c7ebd9]',
      ringColor: 'ring-[#1e4d44]/15',
      clinicalPoints: [
        'Culturally tailored UK meal plans and low-glycaemic index guidance',
        'Continuous dietary logging paired with live feedback from clinical dietitians',
        'Sustainable micro-swaps that avoid rigid restrictions or crash diets',
        'Direct alignment with blood glucose, cholesterol, and metabolic biomarkers',
      ],
    },
    {
      id: 'exercise',
      title: 'Exercise',
      tagline: 'Move with purpose.',
      description: 'Guidance and support to help you build healthier habits.',
      handwritten: ['Stronger', 'Everyday'],
      image: exerciseImg,
      icon: Activity,
      iconBg: 'bg-[#ffe8dc]',
      iconColor: 'text-[#c2410c]',
      cardBg: 'from-[#fff6f0] via-[#feede2] to-[#fee2d3]',
      borderColor: 'border-[#fad3be]',
      ringColor: 'ring-[#c2410c]/15',
      clinicalPoints: [
        'Personalised step, cardio, and resistance pacing based on baseline stamina',
        'Gentle functional movement routines for joint safety and mobility',
        'Real-time heart rate and activity telemetry synced from smart wearable',
        'Progressive weekly challenges reviewed by certified exercise physiologists',
      ],
    },
    {
      id: 'sleep',
      title: 'Sleep',
      tagline: 'Recover deeply.',
      description: 'Tools and support for better sleep and restorative rest.',
      handwritten: ['Rest', 'Recharge', 'Repeat'],
      image: sleepImg,
      icon: Moon,
      iconBg: 'bg-[#e0effe]',
      iconColor: 'text-[#1d4ed8]',
      cardBg: 'from-[#f2f8fe] via-[#e6f1fd] to-[#d8ebfc]',
      borderColor: 'border-[#c5e1fa]',
      ringColor: 'ring-[#1d4ed8]/15',
      clinicalPoints: [
        'Circadian rhythm optimisation and evening blue-light wind-down protocols',
        'Sleep stage tracking (REM, Deep, Light) with autonomic recovery insights',
        'Non-pharmacological sleep hygiene habits designed to reduce morning grogginess',
        'Continuous correlation between sleep quality and next-day glucose stability',
      ],
    },
    {
      id: 'mental-health',
      title: 'Mental Health',
      tagline: 'Build resilience.',
      description: 'Support for a calmer, healthier mind and a brighter tomorrow.',
      handwritten: ['A', 'Calmer', 'Brighter', 'You'],
      image: mentalHealthImg,
      icon: Flower2,
      iconBg: 'bg-[#eee7fe]',
      iconColor: 'text-[#6d28d9]',
      cardBg: 'from-[#f7f3fe] via-[#ede5fc] to-[#e4d6fa]',
      borderColor: 'border-[#d8c5f6]',
      ringColor: 'ring-[#6d28d9]/15',
      clinicalPoints: [
        'Guided somatic breathing and vagus nerve stimulation for quick down-regulation',
        'Heart Rate Variability (HRV) telemetry to detect and preempt chronic stress',
        '1-on-1 mindfulness coaches providing compassionate, judgment-free support',
        'CBT-informed micro-reframing techniques for long-term emotional resilience',
      ],
    },
  ];

  return (
    <section
      id="mind-body-pillars"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Organic mint background glow and decorative botanical petal */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#dcf2ea]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-[#edf5fd]/40 blur-3xl pointer-events-none -z-0" />

      {/* Bottom Left Decorative Botanical Leaves Accent */}
      <div className="absolute -bottom-10 -left-10 w-44 h-44 pointer-events-none opacity-30 select-none -z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#2c6155]">
          <path
            d="M20 180 C 40 120, 100 80, 180 60 C 140 120, 100 160, 20 180 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M10 190 C 20 110, 80 40, 170 20 C 120 90, 80 150, 10 190 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: Split Headline and Description with Vertical Divider */}
        <div className="mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 select-none">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
              MIND + BODY
            </span>
            <div className="w-10 sm:w-14 h-px bg-stone-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Headline */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
                Health is more <br />
                <span className="text-[#1e4d44] font-medium">than a diagnosis.</span>
              </h2>
            </div>

            {/* Middle Divider on large screens */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="w-px h-20 bg-stone-300 mx-auto" />
            </div>

            {/* Right: Explanatory Subtext */}
            <div className="lg:col-span-5">
              <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
                True health comes from a balance of good nutrition, regular exercise, quality sleep and a healthy mind. GOQii supports you across every aspect of your well-being.
              </p>
            </div>
          </div>
        </div>

        {/* 4 PILLAR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className={`group relative rounded-[28px] bg-gradient-to-br ${pillar.cardBg} border ${pillar.borderColor} shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Content Section: Icon, Titles, Body, Learn More & Handwritten Note */}
                <div className="p-6 pb-4 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Top Circular Icon with soft glow halo */}
                    <div className="mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center shadow-xs border border-white/80 transition-transform group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Pillar Title & Tagline */}
                    <h3 className="text-2xl font-normal text-stone-900 tracking-tight leading-tight">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-stone-700 mt-1 mb-3">
                      {pillar.tagline}
                    </div>

                    {/* Pillar Description */}
                    <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Learn More Action Link */}
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveModalPillar(pillar)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-[#1e4d44] transition-colors group/btn cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-stone-600 group-hover/btn:text-[#1e4d44]" />
                    </button>
                  </div>

                  {/* Handwritten Script Tag at Bottom Left */}
                  <div className="pt-6 font-['Caveat',cursive] text-[#2c6155] text-xl leading-tight select-none -rotate-3">
                    {pillar.handwritten.map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>
                </div>

                {/* Right / Bottom Half: Lifestyle Photography with Soft Frame */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={`${pillar.title} - ${pillar.tagline}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gentle top gradient overlay to soften boundary */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM VERIFICATION BAR */}
        <div className="mt-14 pt-8 border-t border-stone-200/90 flex flex-col xl:flex-row items-center justify-between gap-6 select-none">
          
          {/* 4 Value Badges with vertical dividers */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Whole Person<br />Health
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Expert<br />Support
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <Leaf className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Sustainable<br />Habits
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <BarChart2 className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                A Healthier<br />Tomorrow
              </div>
            </div>
          </div>

          {/* Right Signature Motto */}
          <div className="flex items-center gap-3">
            <div className="w-10 sm:w-16 h-px bg-stone-300" />
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-stone-500">
              A HEALTHIER UK, TOGETHER
            </span>
            <div className="w-10 sm:w-16 h-px bg-stone-300" />
          </div>

        </div>

      </div>

      {/* Pillar Detail Modal */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${activeModalPillar.iconBg} ${activeModalPillar.iconColor} flex items-center justify-center`}
                >
                  <activeModalPillar.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-stone-900 leading-tight">
                    {activeModalPillar.title} — {activeModalPillar.tagline}
                  </h4>
                  <div className="text-xs text-stone-500">
                    GOQii Clinical Care Pillar
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveModalPillar(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-5">
              <div className="h-44 w-full rounded-2xl overflow-hidden relative">
                <img
                  src={activeModalPillar.image}
                  alt={activeModalPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    {activeModalPillar.description}
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2.5">
                  Clinical Protocols & Ongoing Coaching
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                  {activeModalPillar.clinicalPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1e4d44] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-3 border-t border-stone-100">
                <button
                  onClick={() => setActiveModalPillar(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-colors"
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

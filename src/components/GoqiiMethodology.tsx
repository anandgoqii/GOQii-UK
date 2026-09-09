import React, { useRef } from 'react';
import {
  FileText,
  Activity,
  Flower2,
  BarChart2,
  Users,
  Heart,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import planImg from '../assets/images/man_notebook_planning_1788859617103.jpg';
import initiateImg from '../assets/images/woman_stretching_fitness_1788859645992.jpg';
import thriveImg from '../assets/images/woman_sunlight_thrive_1788859666312.jpg';
import dataImg from '../assets/images/phone_health_score_data_1788859700836.jpg';

export const GoqiiMethodology: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      step: '01',
      title: 'Plan your Path',
      description:
        'Understand your current health, identify your goals and create a personalised plan with the support of our experts.',
      badge: 'UNDERSTAND TODAY',
      icon: FileText,
      iconBg: 'bg-[#d8eee5]',
      iconColor: 'text-[#1e4d44]',
      numberColor: 'text-[#d8eee5]',
      image: planImg,
      alt: 'Patient planning health goals with a notebook and pen',
    },
    {
      step: '02',
      title: 'Initiate Action to Progress',
      description:
        'Get continuous support from your health coach and take small, consistent steps towards your goals.',
      badge: 'BUILD HEALTHIER HABITS',
      icon: Activity,
      iconBg: 'bg-[#fde8dc]',
      iconColor: 'text-[#c2410c]',
      numberColor: 'text-[#fde8dc]',
      image: initiateImg,
      alt: 'Active woman stretching arm wearing smart tracker',
    },
    {
      step: '03',
      title: 'A Transformation to Thrive',
      description:
        'Experience positive changes in your health, well-being and quality of life with ongoing guidance and motivation.',
      badge: 'LASTING VITALITY',
      icon: Flower2,
      iconBg: 'bg-[#ede9fe]',
      iconColor: 'text-[#6d28d9]',
      numberColor: 'text-[#ede9fe]',
      image: thriveImg,
      alt: 'Happy woman smiling outdoors in warm natural sunlight',
    },
    {
      step: '04',
      title: 'Data Driven Insights for Change',
      description:
        'Track your progress with your health data, get meaningful insights and make informed choices for a healthier tomorrow.',
      badge: 'STAY ON TRACK',
      icon: BarChart2,
      iconBg: 'bg-[#dbeafe]',
      iconColor: 'text-[#1d4ed8]',
      numberColor: 'text-[#dbeafe]',
      image: dataImg,
      alt: 'Hands holding smartphone displaying health score and graphs',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = 320 * (direction === 'left' ? -1 : 1);
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="methodology"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Ambient mint halo glow */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[#dcf2ea]/35 blur-3xl pointer-events-none -z-0" />

      {/* Top Left Vertical Text */}
      <div className="hidden xl:block absolute left-8 lg:left-12 top-24 text-[11px] tracking-[0.24em] uppercase text-stone-400 font-medium leading-loose select-none">
        <div>PLAN</div>
        <div>ACT</div>
        <div>THRIVE</div>
        <div>INSIGHTS</div>
        <div className="w-8 h-0.5 bg-stone-300 mt-2" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4 select-none">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
              THE GOQii METHODOLOGY
            </span>
            <div className="w-10 sm:w-14 h-px bg-stone-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.18]">
            A journey that goes <span className="text-[#1e4d44] font-medium">beyond conventional care</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-3xl mx-auto">
            A structured and personalised approach that helps you understand your health, take the right steps, make lasting changes and stay on track with data-driven insights.
          </p>
        </div>

        {/* 4 CONNECTED STAGE CARDS GRID */}
        <div className="relative">
          
          {/* Subtle Connecting Flow Line Behind Badges (Desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-px border-t border-dashed border-stone-300 pointer-events-none z-0" />

          <div
            ref={scrollContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  id={`stage-${stage.step}`}
                  className="group relative rounded-3xl bg-white/95 border border-[#dcebe5] shadow-xs hover:shadow-lg hover:border-[#1e4d44]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  {/* Card Header & Body */}
                  <div className="p-6 pb-4 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Row: Big Watermark Number + Circle Icon */}
                      <div className="flex items-center justify-between mb-4 relative">
                        {/* Large Watermarked Step Number */}
                        <span
                          className={`text-5xl lg:text-6xl font-bold tracking-tighter ${stage.numberColor} select-none leading-none`}
                        >
                          {stage.step}
                        </span>

                        {/* Circular Icon with shadow */}
                        <div
                          className={`w-12 h-12 rounded-full ${stage.iconBg} ${stage.iconColor} flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 border border-white`}
                        >
                          <Icon className="w-5 h-5" strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Stage Title */}
                      <h3 className="text-xl sm:text-[22px] font-medium text-[#1e4d44] tracking-tight leading-snug">
                        {stage.title}
                      </h3>

                      {/* Stage Description */}
                      <p className="mt-3 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    {/* Subtle micro-divider */}
                    <div className="w-8 h-0.5 bg-stone-200 mt-5 rounded-full" />
                  </div>

                  {/* Card Photo with Bottom Pill Badge */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Translucent pill badge at bottom */}
                    <div className="absolute bottom-3.5 inset-x-3 flex justify-center z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#2f554c]/85 hover:bg-[#234d43] backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap shadow-xs text-center border border-white/20 transition-colors">
                        {stage.badge}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM BAR: 4 Value Badges, Centered Motto, and Navigation Controls */}
        <div className="mt-14 pt-8 border-t border-stone-200/90 flex flex-col xl:flex-row items-center justify-between gap-6 select-none">
          
          {/* Left Value Badges Row with vertical dividers */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Personalised<br />for You
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Supported<br />at Every Step
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Clinically<br />Led
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-stone-200" />

            <div className="flex items-center gap-2.5">
              <BarChart2 className="w-5 h-5 text-[#1e4d44]" strokeWidth={1.75} />
              <div className="text-xs font-medium text-stone-800 leading-tight">
                Lasting<br />Results
              </div>
            </div>
          </div>

          {/* Center Motto */}
          <div className="flex items-center gap-3">
            <div className="w-10 sm:w-16 h-px bg-stone-300" />
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-stone-500">
              A HEALTHIER UK, TOGETHER
            </span>
            <div className="w-10 sm:w-16 h-px bg-stone-300" />
          </div>

          {/* Right Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll methodology stages left"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-stone-300 text-stone-700 hover:border-teal-700 hover:text-teal-800 bg-white shadow-2xs hover:bg-teal-50 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll methodology stages right"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#234d43] text-white bg-[#234d43] hover:bg-[#1a3b33] shadow-xs transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

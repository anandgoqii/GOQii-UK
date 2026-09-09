import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CARE_PROGRAMMES } from '../data/content';
import { CareProgramme } from '../types';
import {
  Droplet,
  Heart,
  Activity,
  Ribbon,
  User,
  Flower2,
  Wind,
  Bone,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCheck,
  BarChart2,
  Leaf,
} from 'lucide-react';

import womanPhoneImg from '../assets/images/woman_couch_phone_1788857899122.jpg';
import glucoseImg from '../assets/images/glucose_meter_test_1788857949039.jpg';
import bpImg from '../assets/images/blood_pressure_cuff_1788858028997.jpg';
import thyroidImg from '../assets/images/thyroid_neck_care_1788857993561.jpg';
import cancerImg from '../assets/images/cancer_pink_ribbon_1788857969102.jpg';
import womanStretchImg from '../assets/images/woman_stretching_sun_1788858051525.jpg';
import arthritisImg from '../assets/images/arthritis_joint_care_1788858074301.jpg';

interface CareProgrammesProps {
  onSelectProgramme: (programme: CareProgramme) => void;
  onOpenGpGuide: () => void;
}

export const CareProgrammes: React.FC<CareProgrammesProps> = ({
  onSelectProgramme,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dedicated visual metadata for the 8 carousel cards matching the reference image
  const programmeCards = [
    {
      id: 'diabetes-care',
      title: 'Diabetes Care',
      description: 'Personalised support to help you manage and improve your health.',
      icon: Droplet,
      iconBg: 'bg-[#d8eee5]',
      iconColor: 'text-[#1e4d44]',
      cardBg: 'bg-[#f0f8f4]',
      image: glucoseImg,
      alt: 'Blood glucose monitoring',
    },
    {
      id: 'hypertension-management',
      title: 'Hypertension Management',
      description: 'Guidance and support for a healthier heart.',
      icon: Heart,
      iconBg: 'bg-[#fae2e4]',
      iconColor: 'text-[#a63d4a]',
      cardBg: 'bg-[#faf2f3]',
      image: bpImg,
      alt: 'Blood pressure cuff monitoring',
    },
    {
      id: 'thyroid-care',
      title: 'Thyroid Care',
      description: 'Personalised care to help you manage your thyroid health.',
      icon: Activity,
      iconBg: 'bg-[#e9def8]',
      iconColor: 'text-[#5a32a3]',
      cardBg: 'bg-[#f6f2fc]',
      image: thyroidImg,
      alt: 'Thyroid healthcare checkup',
    },
    {
      id: 'cancer-care',
      title: 'Cancer Care',
      description: 'Support through every step of your journey.',
      icon: Ribbon,
      iconBg: 'bg-[#ffd5dc]',
      iconColor: 'text-[#b8334b]',
      cardBg: 'bg-[#fdf3f5]',
      image: cancerImg,
      alt: 'Pink cancer care support ribbon',
    },
    {
      id: 'womens-health',
      title: 'Women’s Health & Care',
      description: 'Support for every stage of your health journey.',
      icon: User,
      iconBg: 'bg-[#fed7aa]',
      iconColor: 'text-[#9a3412]',
      cardBg: 'bg-[#fef6ef]',
      image: womanStretchImg,
      alt: 'Women vitality and hormonal wellness',
    },
    {
      id: 'anxiety-stress',
      title: 'Anxiety & Stress Management',
      description: 'Tools and support for a calmer, healthier mind.',
      icon: Flower2,
      iconBg: 'bg-[#d7ecd9]',
      iconColor: 'text-[#2d6a4f]',
      cardBg: 'bg-[#f1f8f3]',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      alt: 'Mindfulness and calming stress relief',
    },
    {
      id: 'covid-recovery',
      title: 'COVID-19 Recovery',
      description: 'Personalised support to help you rebuild your health.',
      icon: Wind,
      iconBg: 'bg-[#dbeafe]',
      iconColor: 'text-[#1d4ed8]',
      cardBg: 'bg-[#f0f6ff]',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
      alt: 'Post-viral stamina and lung conditioning',
    },
    {
      id: 'arthritis-management',
      title: 'Arthritis Management',
      description: 'Support to help you move better and live well.',
      icon: Bone,
      iconBg: 'bg-[#fef3c7]',
      iconColor: 'text-[#b45309]',
      cardBg: 'bg-[#fffbeb]',
      image: arthritisImg,
      alt: 'Joint care and mobility support',
    },
  ];

  const checkScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = 230;
    const scrollAmount = cardWidth * 2 * (direction === 'left' ? -1 : 1);
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCardClick = (id: string) => {
    const prog = CARE_PROGRAMMES.find((p) => p.id === id);
    if (prog) {
      onSelectProgramme(prog);
    }
  };

  const handleViewAll = () => {
    const first = CARE_PROGRAMMES[0];
    if (first) {
      onSelectProgramme(first);
    }
  };

  return (
    <section
      id="care-programmes"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#f9fbfa] via-white to-[#f4f8f6] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Organic Mint Backdrop Glow */}
      <div className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full bg-[#dcf2ea]/40 blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full bg-[#e3f4ed]/50 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HERO / BANNER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-10 lg:mb-12">
          
          {/* Left Column: Eyebrow, Title, Subhead */}
          <div className="lg:col-span-4 xl:col-span-5 space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 select-none">
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                OUR PROGRAMMES
              </span>
              <div className="w-10 h-px bg-stone-400" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal text-stone-900 tracking-tight leading-[1.12]">
              Care designed <br />
              <span className="text-[#1e4d44] font-medium">around you</span>
            </h2>

            {/* Subhead */}
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-sm">
              Personalised programmes built around your condition, your lifestyle and your goals.
            </p>
          </div>

          {/* Middle Column: Lifestyle Woman with Phone & Floating Chat Bubbles */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
            
            {/* Soft Ambient Radial Frame */}
            <div className="relative w-72 sm:w-80 md:w-88 h-60 sm:h-64 rounded-3xl overflow-hidden shadow-xs border border-white/60">
              <img
                src={womanPhoneImg}
                alt="Smiling woman receiving coaching updates on her phone"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
            </div>

            {/* Handwritten script on left: "Your Health Matters Here" */}
            <div className="absolute -left-2 sm:left-1 top-4 z-20 font-['Caveat',cursive] text-[#2c6155] text-xl sm:text-2xl leading-none select-none -rotate-6 text-center">
              <div>Your</div>
              <div>Health</div>
              <div>Matters</div>
              <div className="tracking-wide">Here</div>
              <div className="w-9 h-0.5 bg-[#2c6155]/60 mx-auto mt-1 rounded-full" />
            </div>

            {/* Top Chat Bubble (Clinician): "Great progress this week! Keep it up! 💚" */}
            <div className="absolute top-2 -right-2 sm:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 flex items-center gap-2.5 max-w-[210px] sm:max-w-[230px] animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80"
                alt="Doctor avatar"
                className="w-8 h-8 rounded-full object-cover shrink-0 border border-teal-200"
              />
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold text-stone-800 leading-tight">
                  Great progress this week!
                </div>
                <div className="flex items-center justify-between text-[10px] text-stone-600 mt-0.5">
                  <span className="font-medium">Keep it up! 💚</span>
                  <span className="text-[9px] text-stone-400">10:24 AM</span>
                </div>
              </div>
            </div>

            {/* Bottom Chat Bubble (Patient): "Thank you! Feeling more energetic already." */}
            <div className="absolute bottom-2 right-0 sm:right-4 z-20 bg-[#dcf2e8]/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-md border border-[#c3e7d8] max-w-[200px] sm:max-w-[220px]">
              <div className="text-[11px] font-normal text-stone-800 leading-tight">
                Thank you! Feeling <br />
                more energetic already.
              </div>
              <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#2c6155] font-medium">
                <span>10:28 AM</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#1e4d44]" />
              </div>
            </div>

          </div>

          {/* Right Column: PREVENT PERSONALISE PROGRESS & Carousel Arrows */}
          <div className="lg:col-span-2 flex flex-col items-end justify-between space-y-6 lg:h-48 pt-2">
            {/* Vertical Motto */}
            <div className="text-right text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-stone-500 font-medium leading-relaxed select-none">
              <div>PREVENT</div>
              <div>PERSONALISE</div>
              <div>PROGRESS</div>
              <div className="w-8 h-0.5 bg-stone-300 ml-auto mt-1 rounded-full" />
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
                aria-label="Previous programme card"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  canScrollLeft
                    ? 'bg-white border-stone-300 text-stone-800 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50 shadow-xs cursor-pointer'
                    : 'bg-stone-100/80 border-stone-200 text-stone-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
                aria-label="Next programme card"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  canScrollRight
                    ? 'bg-white border-stone-300 text-stone-800 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50 shadow-xs cursor-pointer'
                    : 'bg-stone-100/80 border-stone-200 text-stone-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* CAROUSEL CARDS STRIP */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
            tabIndex={0}
            role="region"
            aria-label="Care programmes carousel list"
          >
            {programmeCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  id={`programme-${card.id}`}
                  onClick={() => handleCardClick(card.id)}
                  className={`w-[190px] sm:w-[210px] md:w-[225px] shrink-0 snap-start group relative rounded-2xl ${card.cardBg} border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-[#1e4d44]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer select-none`}
                >
                  {/* Top Photo */}
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-stone-100">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Floating Circle Icon */}
                    <div
                      className={`absolute -bottom-3 left-3 w-8 h-8 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-xs border border-white z-10`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="p-4 pt-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#1e4d44] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-[10px] sm:text-[11px] text-stone-600 line-clamp-3 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer: Learn More & Arrow Button */}
                    <div className="pt-2 flex items-center justify-between text-[11px] font-medium text-stone-700 group-hover:text-[#1e4d44] transition-colors">
                      <div className="flex items-center gap-1">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>

                      <div className="w-6 h-6 rounded-full bg-white/90 border border-stone-200 group-hover:border-[#1e4d44] flex items-center justify-center shadow-2xs transition-colors">
                        <ArrowRight className="w-3 h-3 text-stone-600 group-hover:text-[#1e4d44]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM BAR: Badges on left, divider in middle, CTA on right */}
        <div className="mt-8 pt-6 border-t border-stone-200/90 flex flex-col lg:flex-row items-center justify-between gap-6 select-none">
          
          {/* Left Value Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2.5 text-stone-800">
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#1e4d44]" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-stone-700">Prevent<br />Today</span>
            </div>

            <div className="flex items-center gap-2.5 text-stone-800">
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                <BarChart2 className="w-4 h-4 text-[#1e4d44]" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-stone-700">Healthier<br />Tomorrow</span>
            </div>

            <div className="flex items-center gap-2.5 text-stone-800">
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#1e4d44]" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium text-stone-700">A Stronger<br />You</span>
            </div>
          </div>

          {/* Center Divider & Motto */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 sm:w-14 h-px bg-stone-300" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500 font-medium">
              A HEALTHIER UK, TOGETHER
            </span>
            <div className="w-10 sm:w-14 h-px bg-stone-300" />
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>View All Programmes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

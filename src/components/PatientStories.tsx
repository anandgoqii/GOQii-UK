import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Users,
  Leaf,
  BarChart2,
  X,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import sarahImg from '../assets/images/sarah_yoga_story_1788861663366.jpg';
import rajImg from '../assets/images/raj_diabetes_story_1788861685517.jpg';

interface PatientStory {
  id: string;
  name: string;
  role: string;
  category: string;
  quote: string;
  fullNarrative: string;
  duration: string;
  videoPrompt: string;
  image: string;
  stats: {
    metric: string;
    label: string;
  };
}

const STORIES: PatientStory[] = [
  {
    id: 'sarah-t',
    name: 'Sarah T.',
    role: 'GOQii Programme Member',
    category: 'WEIGHT MANAGEMENT',
    quote:
      'GOQii has helped me make healthier choices that actually fit into my life. I feel more in control, more energetic and more like myself again.',
    fullNarrative:
      'Balancing a demanding marketing job and family life, Sarah struggled with yo-yo dieting and chronic fatigue. Through GOQii, she was paired with a dedicated nutrition and lifestyle coach who helped her introduce mindful morning walks, balanced Mediterranean meal prep, and stress regulation practices without feeling restricted.',
    duration: '02:14',
    videoPrompt: 'Watch her story',
    image: sarahImg,
    stats: {
      metric: '-11.4 kg',
      label: 'Sustained over 9 months',
    },
  },
  {
    id: 'raj-m',
    name: 'Raj M.',
    role: 'GOQii Programme Member',
    category: 'DIABETES SUPPORT',
    quote:
      'Within four months of coaching and continuous glucose tracking, my HbA1c dropped from 8.2% to 5.8%. My GP was able to safely reduce my metformin.',
    fullNarrative:
      'Diagnosed with Type 2 diabetes 5 years ago, Raj felt overwhelmed by conflicting dietary advice. GOQii integrated his continuous glucose monitoring data with real-time feedback from an endocrinology coach, helping him identify personal glucose spikes and transform his metabolic health.',
    duration: '02:45',
    videoPrompt: 'Watch his story',
    image: rajImg,
    stats: {
      metric: '-2.4%',
      label: 'Absolute HbA1c drop',
    },
  },
  {
    id: 'elena-r',
    name: 'Elena R.',
    role: 'GOQii Programme Member',
    category: 'HYPERTENSION CARE',
    quote:
      'Having a dedicated coach to message whenever I had questions about meals or blood pressure readings gave me the reassurance I never had before.',
    fullNarrative:
      'Elena suffered from stage-2 hypertension and frequent headaches. Regular blood pressure logging paired with targeted sodium reduction and breathing routines recommended by her coach helped stabilise her systolic readings from 152 down to 124 mmHg.',
    duration: '01:58',
    videoPrompt: 'Watch her story',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    stats: {
      metric: '-28 mmHg',
      label: 'Systolic blood pressure reduction',
    },
  },
  {
    id: 'marcus-w',
    name: 'Marcus W.',
    role: 'GOQii Programme Member',
    category: 'CARDIAC WELLNESS',
    quote:
      'Small daily habits recommended by my GOQii coach lowered my resting heart rate by 12 bpm and helped me get back to weekend cycling with my kids.',
    fullNarrative:
      'After an acute cardiovascular wake-up call, Marcus joined GOQii via his employer wellness benefit. Guided by daily sleep tracking and progressive aerobic micro-goals, he regained physical stamina and lowered arterial stiffness markers.',
    duration: '02:30',
    videoPrompt: 'Watch his story',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    stats: {
      metric: '12 bpm',
      label: 'Resting heart rate improvement',
    },
  },
];

export const PatientStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [modalStory, setModalStory] = useState<PatientStory | null>(null);

  const current = STORIES[currentIndex];
  const nextIndex = (currentIndex + 1) % STORIES.length;
  const nextStory = STORIES[nextIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="patient-stories"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Soft Ambient Background Halos */}
      <div className="absolute top-1/4 left-10 w-[520px] h-[520px] rounded-full bg-[#dcf2ea]/35 blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#edf6f2]/60 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP / MAIN ROW: Left Header & Navigation + Center/Right Story Card & Next Peek */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Section Title, Subtitle, Arrows & Handwritten Script */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch space-y-8">
            
            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 select-none">
                <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                  SECTION 11 — PATIENT STORIES
                </span>
                <div className="w-10 sm:w-14 h-px bg-stone-400" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.15]">
                Real people. <br />
                <span className="text-[#1e4d44] font-medium">Real journeys.</span>
              </h2>

              {/* Subtitle */}
              <div className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
                <div>Different starting points.</div>
                <div>A shared goal — lasting health</div>
                <div>and vitality.</div>
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous story"
                  className="w-11 h-11 rounded-full bg-[#1e4d44] text-white flex items-center justify-center hover:bg-[#153831] transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next story"
                  className="w-11 h-11 rounded-full bg-white border border-[#1e4d44] text-[#1e4d44] flex items-center justify-center hover:bg-[#f2f8f5] transition-colors shadow-xs cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* CENTER & RIGHT: Primary Split Card + Peeking Next Card */}
          <div className="lg:col-span-8 relative">
            <div className="flex items-stretch gap-6 overflow-visible">
              
              {/* PRIMARY FEATURED STORY CARD (Split: Photo Left, Quote Right) */}
              <div className="flex-1 min-w-0 bg-white rounded-[32px] overflow-hidden shadow-sm border border-stone-200/90 grid grid-cols-1 md:grid-cols-12 transition-all duration-300">
                
                {/* Left Side: Photo with Video Button Overlay */}
                <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto min-h-[300px] sm:min-h-[380px]">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Play Video CTA Button Overlaid */}
                  <button
                    onClick={() => setModalStory(current)}
                    className="absolute bottom-5 left-5 inline-flex items-center gap-3 text-white text-left group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-white group-hover:text-[#1e4d44] transition-all shadow-md">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs sm:text-sm font-medium tracking-tight">
                        {current.videoPrompt}
                      </div>
                      <div className="text-[11px] text-stone-300 font-mono">
                        {current.duration}
                      </div>
                    </div>
                  </button>
                </div>

                {/* Right Side: Mint Card with Quote & Member Info */}
                <div className="md:col-span-6 p-7 sm:p-9 lg:p-10 bg-[#eef7f3] flex flex-col justify-between relative">
                  
                  {/* Top Left Quote Mark */}
                  <div className="text-4xl sm:text-5xl font-serif text-[#a3d4c3] select-none leading-none mb-2">
                    “
                  </div>

                  {/* Quote Paragraph */}
                  <blockquote className="text-base sm:text-lg lg:text-[19px] font-normal text-stone-800 leading-relaxed z-10">
                    {current.quote}
                  </blockquote>

                  {/* Bottom Right Quote Mark */}
                  <div className="text-4xl sm:text-5xl font-serif text-[#a3d4c3] select-none leading-none text-right -mt-2 mb-4">
                    ”
                  </div>

                  {/* Member Meta */}
                  <div className="pt-3 border-t border-[#d4ebe1]">
                    <div className="text-sm sm:text-base font-bold text-stone-900 leading-tight">
                      {current.name}
                    </div>
                    <div className="text-xs text-stone-500 font-normal mt-0.5">
                      {current.role}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] font-semibold text-stone-400 uppercase mt-2">
                      {current.category}
                    </div>
                  </div>

                </div>

              </div>

              {/* PEEKING NEXT STORY CARD ON RIGHT */}
              <div
                onClick={handleNext}
                className="hidden xl:flex flex-col w-56 shrink-0 rounded-[32px] overflow-hidden bg-white border border-stone-200/90 shadow-2xs cursor-pointer group hover:border-[#1e4d44]/40 transition-all opacity-90 hover:opacity-100"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={nextStory.image}
                    alt={nextStory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="p-3.5 bg-white">
                  <div className="text-xs font-bold text-stone-900 leading-tight">
                    {nextStory.name}
                  </div>
                  <div className="text-[9px] tracking-[0.18em] font-semibold text-stone-400 uppercase mt-1">
                    {nextStory.category}
                  </div>
                </div>
              </div>

            </div>

            {/* Center Carousel Pagination Indicators */}
            <div className="mt-8 flex items-center justify-center gap-3 select-none">
              <div className="w-12 h-px bg-stone-300" />
              <div className="flex items-center gap-2">
                {STORIES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to story ${idx + 1}`}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? 'w-3 h-3 bg-[#1e4d44]'
                        : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
              <div className="w-12 h-px bg-stone-300" />
            </div>

          </div>

        </div>

        {/* BOTTOM VERIFICATION & TAGLINE STRIP */}
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

      {/* Video Story Modal */}
      {modalStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            
            {/* Modal Header */}
            <div className="p-5 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1e4d44]" />
                <span className="text-sm font-semibold text-stone-900">
                  {modalStory.name}’s Journey — {modalStory.category}
                </span>
              </div>
              <button
                onClick={() => setModalStory(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Mockup Container */}
            <div className="relative aspect-video bg-stone-900 flex items-center justify-center overflow-hidden">
              <img
                src={modalStory.image}
                alt={modalStory.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform cursor-pointer">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Recorded Clinical Testimonial</div>
                  <div className="text-xs text-stone-300 font-mono">
                    Duration: {modalStory.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Story Description */}
            <div className="p-6 space-y-4">
              <blockquote className="text-sm sm:text-base italic text-stone-800 bg-[#f0f7f4] p-4 rounded-2xl border border-[#d2ebe1]">
                “{modalStory.quote}”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {modalStory.fullNarrative}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="w-4 h-4 text-[#1e4d44]" />
                  <span>Documented Outcome: {modalStory.stats.metric} ({modalStory.stats.label})</span>
                </div>
                <button
                  onClick={() => setModalStory(null)}
                  className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#1e4d44] hover:bg-[#153831] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

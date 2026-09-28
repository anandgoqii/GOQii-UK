import React from 'react';
import { Heart, BarChart2, Leaf, ArrowRight, ArrowDown, Activity, Utensils, Moon, Flower2 } from 'lucide-react';
import heroWomanPhoto from '../assets/images/hero_woman_terrace_1788852065194.jpg';

interface HeroProps {
  onOpenGpGuide: () => void;
  onExploreProgrammes: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProgrammes }) => {
  const lifestylePills = [
    { icon: Activity, title: 'Move', subtitle: 'More' },
    { icon: Utensils, title: 'Eat', subtitle: 'Better' },
    { icon: Moon, title: 'Sleep', subtitle: 'Well' },
    { icon: Flower2, title: 'Stress', subtitle: 'Less' },
  ];

  const handleScrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('how-it-works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[640px] lg:min-h-[720px] pt-24 pb-14 sm:pt-28 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#f9fbfa] via-[#f5f9f7] to-[#eef6f3] flex items-center"
    >
      {/* Ambient Organic Background Washes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft mint wash top-right */}
        <div className="absolute -top-24 right-0 w-[550px] h-[550px] rounded-full bg-[#dbeee7]/45 blur-3xl" />
        {/* Mint wash bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#dbeee7]/40 blur-3xl" />
        {/* Subtle center warm glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#edf7f3]/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative, Headline, CTAs, Highlights */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left pt-4 sm:pt-0">
            
            {/* Eyebrow */}
            <div className="tracking-[0.25em] text-xs font-medium text-stone-500 uppercase select-none">
              PREVENT &nbsp;•&nbsp; PERSONALISE &nbsp;•&nbsp; PROGRESS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-normal text-stone-900 tracking-tight leading-[1.12]">
              Empowering you to <br />
              Regain control of <br />
              <span className="text-[#1e4d44] font-medium">your health</span>
            </h1>

            {/* Subhead Body Text */}
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-xl">
              With a focus on prevention and early intervention, our personalised healthcare platform delivers tailored guidance from skilled general practitioners, certified coaches and experts that enable you to make lasting, positive lifestyle changes.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                id="hero-know-more-btn"
                onClick={onExploreProgrammes}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-works-btn"
                onClick={handleScrollToHowItWorks}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-[#1e4d44] transition-colors cursor-pointer py-2"
              >
                <span>Explore how GOQii works</span>
                <ArrowDown className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Bottom Left Highlights Bar */}
            <div className="pt-4 sm:pt-6">
              <div className="inline-flex flex-wrap items-center gap-4 sm:gap-8 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl bg-[#e6f3ee]/90 border border-[#cbe4db] shadow-2xs backdrop-blur-xs">
                <div className="flex items-center gap-2.5 text-stone-800">
                  <Heart className="w-5 h-5 text-[#234d43]" strokeWidth={1.75} />
                  <span className="text-xs font-medium leading-tight">
                    Better<br />Health
                  </span>
                </div>

                <div className="hidden sm:block w-px h-6 bg-[#bcdccc]" />

                <div className="flex items-center gap-2.5 text-stone-800">
                  <BarChart2 className="w-5 h-5 text-[#234d43]" strokeWidth={1.75} />
                  <span className="text-xs font-medium leading-tight">
                    Healthier<br />Habits
                  </span>
                </div>

                <div className="hidden sm:block w-px h-6 bg-[#bcdccc]" />

                <div className="flex items-center gap-2.5 text-stone-800">
                  <Leaf className="w-5 h-5 text-[#234d43]" strokeWidth={1.75} />
                  <span className="text-xs font-medium leading-tight">
                    Brighter<br />Tomorrow
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Circular Hero Photo Showcase with Teal Accent Ring & Orbiting Badges */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center lg:justify-end py-6 sm:py-8 lg:py-4">
            
            {/* Circle Showcase Composition Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Ambient Soft Glow Behind the Circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#234d43]/15 via-[#c2e5dc]/50 to-[#2dd4bf]/20 blur-2xl pointer-events-none" />

              {/* Outer Decorative Concentric Accent Halo Ring (Fixed, perfectly concentric) */}
              <div className="absolute w-[94%] h-[94%] rounded-full border-[10px] sm:border-[14px] lg:border-[18px] border-[#c2e5dc]/80 pointer-events-none transition-transform duration-500" />

              {/* Delicate Outer Dashed Accent Ring */}
              <div className="absolute w-[102%] h-[102%] rounded-full border border-dashed border-[#1e4d44]/20 pointer-events-none" />

              {/* Main Circular Photo Frame (Holds the woman hero photo) */}
              <div className="relative z-10 w-[78%] h-[78%] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl bg-stone-100 select-none">
                <img
                  src={heroWomanPhoto}
                  alt="Empowered healthy woman enjoying morning sunlight on rooftop terrace"
                  className="w-full h-full object-cover object-[72%_center] filter brightness-[1.02] contrast-[0.98]"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle natural lighting gradient inside the circle */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e4d44]/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card: Health Score Donut (Top-Left of Circle) */}
              <div className="absolute -left-2 sm:-left-4 lg:-left-6 top-4 sm:top-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/90 text-center w-28 sm:w-34 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-[10px] sm:text-[11px] font-medium text-stone-500 mb-1.5 sm:mb-2">Health Score</div>
                
                <div className="relative w-13 h-13 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Background Track */}
                    <path
                      className="text-stone-200"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Progress Arc */}
                    <path
                      className="text-[#1e4d44]"
                      strokeDasharray="82, 100"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute font-bold text-lg sm:text-xl text-stone-900">82</div>
                </div>

                <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs font-semibold text-[#1e4d44] flex items-center justify-center gap-0.5">
                  <span>↑ 6%</span>
                </div>
                <div className="text-[9px] text-stone-500 font-medium">This month</div>
              </div>

              {/* Floating Lifestyle Badges Stack (Right of Circle) */}
              <div className="absolute -right-2 sm:-right-4 lg:-right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 sm:gap-2.5">
                {lifestylePills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/95 hover:bg-white backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/90 shadow-md flex items-center gap-2 sm:gap-2.5 transition-all duration-200 hover:scale-105 hover:shadow-lg select-none"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-teal-50 text-[#1e4d44] flex items-center justify-center shrink-0">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
                      </div>
                      <div className="text-[10px] sm:text-xs font-medium text-stone-800 leading-tight text-left">
                        <div>{pill.title}</div>
                        <div className="text-stone-500 font-normal">{pill.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Status Pill: Connected Coach (Bottom-Left) */}
              <div className="absolute -bottom-2 sm:bottom-2 left-4 sm:left-8 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 sm:py-2 rounded-full border border-white/90 shadow-md flex items-center gap-2 select-none transition-transform hover:scale-105">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-stone-700">
                  <strong className="text-stone-900 font-semibold">Live Coach</strong> Connected
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

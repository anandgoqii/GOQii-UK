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
      className="relative min-h-[640px] lg:min-h-[720px] pt-24 pb-14 sm:pt-28 lg:pt-32 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#f9fbfa] to-[#f4f8f6] flex items-center"
    >
      {/* Background Photography Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* The photo on the right half with smooth blending mask */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 h-full">
          <img
            src={heroWomanPhoto}
            alt="Empowered healthy woman enjoying morning sunlight on rooftop terrace"
            className="w-full h-full object-cover object-[75%_center] lg:object-center filter brightness-[1.02] contrast-[0.98]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle directional gradients for natural blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9fbfa] via-[#f9fbfa]/80 to-transparent lg:via-[#f9fbfa]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f8f6] via-transparent to-[#f9fbfa]/60" />
        </div>

        {/* Ambient Organic Mint Wash on bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#dbeee7]/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative, Headline, CTAs, Highlights */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left pt-6 sm:pt-0">
            
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

          {/* RIGHT COLUMN: Visual Overlays (Health Score Donut, Floating Lifestyle Badges, Arc, Script Quotes) */}
          <div className="lg:col-span-6 xl:col-span-5 relative min-h-[380px] sm:min-h-[460px] flex items-center justify-end">
            
            {/* Background Halo Arc */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-72 sm:w-88 md:w-96 lg:w-[420px] h-72 sm:h-88 md:h-96 lg:h-[420px] rounded-full border-[18px] lg:border-[22px] border-[#c2e5dc]/60 pointer-events-none -z-0" />


            {/* Floating Card: Health Score Donut */}
            <div className="absolute top-12 left-2 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/90 text-center w-32 sm:w-36 animate-fade-in transition-transform hover:-translate-y-1">
              <div className="text-[11px] font-medium text-stone-500 mb-2">Health Score</div>
              
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
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
                <div className="absolute font-bold text-xl text-stone-900">82</div>
              </div>

              <div className="mt-2 text-xs font-semibold text-[#1e4d44] flex items-center justify-center gap-0.5">
                <span>↑ 6%</span>
              </div>
              <div className="text-[9px] text-stone-500 font-medium">This month</div>
            </div>

            {/* Right-Side Lifestyle Badges Stack */}
            <div className="relative z-20 flex flex-col gap-2.5 sm:gap-3 mr-0 sm:mr-2">
              {lifestylePills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/90 hover:bg-white/95 backdrop-blur-md px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/80 shadow-md flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105 select-none"
                  >
                    <div className="w-6 h-6 rounded-lg bg-teal-50 text-[#1e4d44] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-stone-800 leading-tight text-left">
                      <div>{pill.title}</div>
                      <div className="text-stone-600">{pill.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Leaf, User, BarChart2 } from 'lucide-react';
import londonBg from '../assets/images/london_big_ben_skyline_1788855403188.jpg';
import preventImg from '../assets/images/uk_man_active_prevent_1788855350775.jpg';
import personaliseImg from '../assets/images/uk_woman_personalise_1788855388965.jpg';
import progressImg from '../assets/images/uk_couple_active_progress_1788855366295.jpg';

interface HowItWorksProps {
  onOpenGpGuide: () => void;
  onExploreProgrammes: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onExploreProgrammes }) => {
  const cards = [
    {
      id: 'prevent',
      title: 'Prevent',
      description: 'Take action before health becomes a bigger problem.',
      badge: 'HEALTHIER TODAY',
      icon: Leaf,
      iconBg: 'bg-[#d7ede4]',
      iconColor: 'text-[#1e4d44]',
      image: preventImg,
      alt: 'Active British man outdoors in London taking charge of his health',
      hasDivider: false,
    },
    {
      id: 'personalise',
      title: 'Personalise',
      description: 'Healthcare designed around your unique needs, lifestyle and goals.',
      badge: 'YOUR HEALTH. YOUR PLAN',
      icon: User,
      iconBg: 'bg-[#faebd7]',
      iconColor: 'text-[#8b5a2b]',
      image: personaliseImg,
      alt: 'Smiling woman at home with cup of tea enjoying tailored health coaching',
      hasDivider: true,
    },
    {
      id: 'progress',
      title: 'Progress',
      description: 'Build healthier habits and create lasting change.',
      badge: 'STRONGER TOMORROWS',
      icon: BarChart2,
      iconBg: 'bg-[#d7ede4]',
      iconColor: 'text-[#1e4d44]',
      image: progressImg,
      alt: 'Fit smiling couple walking outdoors along London embankment',
      hasDivider: false,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f9fbfa] via-white to-[#f4f8f6] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Background London Westminster Atmosphere (Top-Right) */}
      <div className="absolute right-0 top-0 w-full md:w-7/12 lg:w-1/2 h-80 lg:h-96 pointer-events-none opacity-25 mix-blend-multiply overflow-hidden">
        <img
          src={londonBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[right_top] filter brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f9fbfa]/60 to-[#f9fbfa]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f9fbfa]" />
      </div>

      {/* Abstract Flowing Vector Wave on Left */}
      <div className="absolute -left-20 top-16 w-96 h-96 rounded-full bg-[#dcf1ea]/40 blur-3xl pointer-events-none" />
      <svg
        className="absolute left-0 top-10 w-80 h-72 text-[#bde3d4]/30 pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M-50 80 C 80 40, 160 140, 240 90 C 320 40, 360 110, 420 80" />
        <path d="M-50 120 C 70 80, 170 180, 260 130 C 350 80, 370 150, 420 120" />
        <path d="M-50 160 C 90 120, 180 220, 280 170 C 360 120, 390 190, 430 160" />
      </svg>

      {/* Top Left Vertical Motto */}
      <div className="hidden xl:block absolute left-8 lg:left-12 top-28 text-[11px] tracking-[0.22em] uppercase text-stone-400 font-medium leading-relaxed select-none">
        <div>PREVENT</div>
        <div>TODAY</div>
        <div>FOR A BRIGHTER</div>
        <div>TOMORROW</div>
      </div>

      {/* Top Right Handwritten Script Tag: "Healthier People Brighter Tomorrows" */}
      <div className="hidden sm:block absolute right-8 sm:right-12 lg:right-16 top-10 font-['Caveat',cursive] text-[#2c6155] text-2xl lg:text-[28px] leading-tight select-none text-center rotate-2 z-10">
        <div>Healthier</div>
        <div>People</div>
        <div>Brighter</div>
        <div>Tomorrows</div>
        <div className="w-12 h-0.5 bg-[#2c6155]/60 mx-auto mt-1 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 select-none">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
              A HEALTHIER TOMORROW
            </span>
            <div className="w-10 sm:w-14 h-px bg-stone-400" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-stone-900 tracking-tight leading-[1.18]">
            Healthcare shouldn't begin <br />
            when <span className="text-[#1e4d44] font-medium">something goes wrong.</span>
          </h2>

          {/* Subtitle Body Copy */}
          <p className="mt-5 text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto">
            At GOQii UK, we believe in prevention and early intervention — helping you understand your health, make informed choices and build a healthier, brighter tomorrow.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`card-${card.id}`}
                onClick={onExploreProgrammes}
                className="group relative rounded-3xl bg-white/95 border border-[#dcebe5] shadow-xs hover:shadow-lg hover:border-[#234d43]/40 transition-all duration-300 overflow-hidden flex flex-row items-stretch cursor-pointer min-h-[290px] sm:min-h-[310px]"
              >
                {/* Left Half: Icon, Title, Description */}
                <div className="w-[53%] sm:w-[54%] p-6 sm:p-7 flex flex-col justify-between z-10">
                  <div>
                    {/* Circle Icon */}
                    <div
                      className={`w-11 h-11 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-5 transition-transform group-hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-[28px] font-medium text-[#1e4d44] tracking-tight leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                      {card.description}
                    </p>

                    {/* Subtle underline on specific card (Personalise) */}
                    {card.hasDivider && (
                      <div className="w-8 h-0.5 bg-stone-300 mt-4 rounded-full" />
                    )}
                  </div>

                  {/* Micro action prompt on hover */}
                  <div className="pt-2 text-[11px] font-medium text-teal-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore care plan →
                  </div>
                </div>

                {/* Right Half: Photo with Frosted Pill Badge */}
                <div className="w-[47%] sm:w-[46%] relative overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle blend vignette */}
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />

                  {/* Frosted Pill Badge at Bottom */}
                  <div className="absolute bottom-3 left-2 right-2 flex justify-center z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#2f554c]/85 hover:bg-[#234d43] backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap shadow-xs text-center border border-white/20 transition-colors">
                      {card.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Horizontal Rule & Signature */}
        <div className="mt-14 lg:mt-16 flex items-center justify-center gap-3 sm:gap-4 select-none">
          <div className="w-12 sm:w-20 h-px bg-stone-300" />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-stone-500">
            A HEALTHIER UK, TOGETHER
          </span>
          <div className="w-12 sm:w-20 h-px bg-stone-300" />
        </div>

      </div>
    </section>
  );
};

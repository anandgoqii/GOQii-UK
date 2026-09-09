import React, { useState } from 'react';
import {
  BarChart2,
  Droplet,
  Heart,
  Activity,
  Ribbon,
  User,
  Flower2,
  Wind,
  Bone,
  Apple,
  Footprints,
  Moon,
  ArrowRight,
  Play,
  Check,
  TrendingDown,
  TrendingUp,
  X,
} from 'lucide-react';
import { CareProgramme } from '../types';
import { CARE_PROGRAMMES } from '../data/content';
import manDiabetesImg from '../assets/images/man_couch_glasses_diabetes_1788859208228.jpg';
import bpImg from '../assets/images/blood_pressure_cuff_1788858028997.jpg';
import thyroidImg from '../assets/images/thyroid_neck_care_1788857993561.jpg';
import cancerImg from '../assets/images/cancer_pink_ribbon_1788857969102.jpg';
import womanStretchImg from '../assets/images/woman_stretching_sun_1788858051525.jpg';
import arthritisImg from '../assets/images/arthritis_joint_care_1788858074301.jpg';

interface FeaturedCareStoryProps {
  onSelectProgramme: (programme: CareProgramme) => void;
  onOpenGpGuide: () => void;
}

interface StoryData {
  id: string;
  name: string;
  categoryTitle: string;
  subtitle: string;
  taglineBold: string;
  taglineRest: string;
  description: string;
  ctaText: string;
  image: string;
  wallArtText?: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ElementType;
    trend?: 'up' | 'down' | 'check';
    color: string;
  }[];
}

export const FeaturedCareStory: React.FC<FeaturedCareStoryProps> = ({
  onSelectProgramme,
}) => {
  const [activeTab, setActiveTab] = useState<string>('diabetes-care');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Tab definitions matching the bottom bar in reference image
  const tabs = [
    { id: 'diabetes-care', label: 'Diabetes Care', icon: Droplet },
    { id: 'hypertension-management', label: 'Hypertension Management', icon: Heart },
    { id: 'thyroid-care', label: 'Thyroid Care', icon: Activity },
    { id: 'cancer-care', label: 'Cancer Care', icon: Ribbon },
    { id: 'womens-health', label: "Women's Health & Care", icon: User },
    { id: 'anxiety-stress', label: 'Anxiety & Stress Management', icon: Flower2 },
    { id: 'covid-recovery', label: 'COVID-19 Recovery', icon: Wind },
    { id: 'arthritis-management', label: 'Arthritis Management', icon: Bone },
  ];

  const stories: Record<string, StoryData> = {
    'diabetes-care': {
      id: 'diabetes-care',
      name: 'Diabetes Care',
      categoryTitle: 'Diabetes Care',
      subtitle: 'Personalised support to help you manage and improve your health.',
      taglineBold: 'A healthier tomorrow',
      taglineRest: 'is within reach.',
      description:
        'Our Diabetes Care programme provides personalised guidance and ongoing support to help you manage your condition, make healthier choices and improve your overall well-being.',
      ctaText: 'Explore Diabetes Care',
      image: manDiabetesImg,
      wallArtText: 'Better Choices Brighter Days',
      metrics: [
        { label: 'Blood Sugar', value: 'Improving', icon: Droplet, trend: 'down', color: 'text-emerald-700' },
        { label: 'Activity', value: 'On Track', icon: Footprints, trend: 'up', color: 'text-emerald-700' },
        { label: 'Nutrition', value: 'Good', icon: Apple, trend: 'check', color: 'text-emerald-700' },
      ],
    },
    'hypertension-management': {
      id: 'hypertension-management',
      name: 'Hypertension Management',
      categoryTitle: 'Hypertension Care',
      subtitle: 'Continuous cardiovascular monitoring and lifestyle support for stable blood pressure.',
      taglineBold: 'A stronger heart',
      taglineRest: 'begins with small daily habits.',
      description:
        'Personalised GP-guided blood pressure tracking, sodium balance coaching, and low-impact cardiovascular routines tailored for sustained arterial health.',
      ctaText: 'Explore Hypertension Care',
      image: bpImg,
      wallArtText: 'Calm Mind Steady Rhythm',
      metrics: [
        { label: 'Blood Pressure', value: '122/80 mmHg', icon: Heart, trend: 'down', color: 'text-emerald-700' },
        { label: 'Daily Sodium', value: '< 2.0g Tracked', icon: Apple, trend: 'check', color: 'text-emerald-700' },
        { label: 'Resting Pulse', value: '64 bpm', icon: Activity, trend: 'down', color: 'text-emerald-700' },
      ],
    },
    'thyroid-care': {
      id: 'thyroid-care',
      name: 'Thyroid Care',
      categoryTitle: 'Thyroid Care',
      subtitle: 'Endocrine support to restore daily energy, metabolism, and hormonal harmony.',
      taglineBold: 'Renewed energy',
      taglineRest: 'and metabolic balance.',
      description:
        'Comprehensive nutrition plans, symptom tracking, and medication alignment overseen by certified clinical dietitians and endocrinology advisors.',
      ctaText: 'Explore Thyroid Care',
      image: thyroidImg,
      metrics: [
        { label: 'Energy Levels', value: 'Sustained', icon: Activity, trend: 'up', color: 'text-emerald-700' },
        { label: 'Metabolism', value: 'Optimised', icon: Footprints, trend: 'check', color: 'text-emerald-700' },
        { label: 'Thyroid Labs', value: 'Stable', icon: Droplet, trend: 'check', color: 'text-emerald-700' },
      ],
    },
    'cancer-care': {
      id: 'cancer-care',
      name: 'Cancer Care',
      categoryTitle: 'Cancer Rehabilitation',
      subtitle: 'Compassionate rehabilitation and vitality recovery alongside your oncology team.',
      taglineBold: 'Compassionate care',
      taglineRest: 'through every step of recovery.',
      description:
        'Nutritional restorative therapies, restorative fatigue management, and emotional well-being circles guided by specialized healthcare professionals.',
      ctaText: 'Explore Cancer Care',
      image: cancerImg,
      metrics: [
        { label: 'Fatigue Score', value: 'Reduced 38%', icon: Activity, trend: 'down', color: 'text-emerald-700' },
        { label: 'Mobility', value: 'Restored', icon: Footprints, trend: 'up', color: 'text-emerald-700' },
        { label: 'Nutrition', value: 'Tailored', icon: Apple, trend: 'check', color: 'text-emerald-700' },
      ],
    },
    'womens-health': {
      id: 'womens-health',
      name: "Women's Health & Care",
      categoryTitle: "Women's Health",
      subtitle: 'Support for every phase of life — from hormonal cycles to perimenopause vitality.',
      taglineBold: 'Total balance',
      taglineRest: 'crafted for female wellness.',
      description:
        'Individualized hormonal health plans, bone density protection protocols, and sleep architecture coaching for women throughout the UK.',
      ctaText: "Explore Women's Care",
      image: womanStretchImg,
      metrics: [
        { label: 'Sleep Score', value: '88% Optimal', icon: Moon, trend: 'up', color: 'text-emerald-700' },
        { label: 'Hormonal Rhythm', value: 'Harmonised', icon: Flower2, trend: 'check', color: 'text-emerald-700' },
        { label: 'Vitality', value: 'Peak', icon: Activity, trend: 'up', color: 'text-emerald-700' },
      ],
    },
    'anxiety-stress': {
      id: 'anxiety-stress',
      name: 'Anxiety & Stress Management',
      categoryTitle: 'Mental Well-Being',
      subtitle: 'Evidence-based mindfulness, vagal tone regulation, and autonomic calm.',
      taglineBold: 'Mental clarity',
      taglineRest: 'and restorative calm.',
      description:
        'Guided somatic breathing, HRV tracking, and 1-on-1 psychology-informed coaching to build lifelong resilience against work and personal stressors.',
      ctaText: 'Explore Stress Care',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      metrics: [
        { label: 'Stress Biomarker', value: 'Down 42%', icon: Flower2, trend: 'down', color: 'text-emerald-700' },
        { label: 'HRV Index', value: 'Elevated', icon: Activity, trend: 'up', color: 'text-emerald-700' },
        { label: 'Deep Sleep', value: '+45 mins/night', icon: Moon, trend: 'up', color: 'text-emerald-700' },
      ],
    },
    'covid-recovery': {
      id: 'covid-recovery',
      name: 'COVID-19 Recovery',
      categoryTitle: 'Post-Viral Rehab',
      subtitle: 'Gentle cardiopulmonary conditioning and stamina restoration.',
      taglineBold: 'Breath by breath,',
      taglineRest: 'reclaim your full strength.',
      description:
        'Structured pacing, respiratory physiotherapy coaching, and chronic fatigue mitigation to safely restore work and family independence.',
      ctaText: 'Explore Recovery Care',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      metrics: [
        { label: 'Lung Stamina', value: '+30% Pacing', icon: Wind, trend: 'up', color: 'text-emerald-700' },
        { label: 'Energy Bank', value: 'Balanced', icon: Activity, trend: 'check', color: 'text-emerald-700' },
        { label: 'Recovery Steps', value: 'Steady', icon: Footprints, trend: 'up', color: 'text-emerald-700' },
      ],
    },
    'arthritis-management': {
      id: 'arthritis-management',
      name: 'Arthritis Management',
      categoryTitle: 'Joint & Mobility',
      subtitle: 'Specialized physiotherapy, anti-inflammatory nutrition, and movement therapy.',
      taglineBold: 'Free movement',
      taglineRest: 'and painless days ahead.',
      description:
        'Low-friction aquatic and home mobility exercises paired with anti-inflammatory meal planning to preserve cartilage and reduce morning stiffness.',
      ctaText: 'Explore Arthritis Care',
      image: arthritisImg,
      metrics: [
        { label: 'Joint Pain', value: 'Decreased 50%', icon: Bone, trend: 'down', color: 'text-emerald-700' },
        { label: 'Daily Mobility', value: 'Active', icon: Footprints, trend: 'up', color: 'text-emerald-700' },
        { label: 'Anti-Inflam Diet', value: 'Adhering', icon: Apple, trend: 'check', color: 'text-emerald-700' },
      ],
    },
  };

  const currentStory = stories[activeTab] || stories['diabetes-care'];

  const handleExplore = () => {
    const programme = CARE_PROGRAMMES.find((p) => p.id === currentStory.id) || CARE_PROGRAMMES[0];
    onSelectProgramme(programme);
  };

  return (
    <section
      id="featured-care-story"
      className="relative py-16 lg:py-24 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Organic Mint Wave Accents */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#dcf2ea]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#e8f5f0]/60 blur-3xl pointer-events-none" />

      {/* Top Left Vertical Motto */}
      <div className="hidden xl:block absolute left-8 lg:left-12 top-28 text-[11px] tracking-[0.22em] uppercase text-stone-400 font-medium leading-relaxed select-none">
        <div>HEALTHIER</div>
        <div>TODAY</div>
        <div>FOR A BRIGHTER</div>
        <div>TOMORROW</div>
        <div className="w-6 h-0.5 bg-stone-300 mt-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: FEATURED CARE STORY — */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3 select-none">
            <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
              FEATURED CARE STORY
            </span>
            <div className="w-10 sm:w-14 h-px bg-stone-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-stone-900 tracking-tight leading-tight">
            {currentStory.name}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed max-w-xl mx-auto">
            {currentStory.subtitle}
          </p>
        </div>

        {/* TWO-COLUMN FEATURED SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* LEFT COLUMN: Lifestyle Photo with Overlaid Progress Card & Bottom-Left Badge */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Lifestyle Photo Frame */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-md border border-white/80 bg-stone-100 aspect-[4/3] sm:aspect-[1.15/1]">
              <img
                src={currentStory.image}
                alt={currentStory.name}
                className="w-full h-full object-cover object-[center_35%]"
              />

              {/* In-photo wall art print if present */}
              {currentStory.wallArtText && (
                <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
                  <div className="border border-stone-300/60 bg-white/70 backdrop-blur-xs px-3 py-2 rounded shadow-2xs text-center">
                    <div className="text-[10px] font-serif tracking-widest uppercase text-stone-500 leading-tight">
                      Better
                    </div>
                    <div className="text-[10px] font-serif tracking-widest uppercase text-stone-500 leading-tight">
                      Choices
                    </div>
                    <div className="text-[10px] font-serif tracking-widest uppercase text-stone-500 leading-tight">
                      Brighter
                    </div>
                    <div className="text-[10px] font-serif tracking-widest uppercase text-stone-500 leading-tight">
                      Days
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

              {/* OVERLAID CARD: "Your Progress" */}
              <div className="absolute bottom-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/90 min-w-[200px] sm:min-w-[225px] z-20">
                <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-stone-100">
                  <BarChart2 className="w-4 h-4 text-[#1e4d44]" />
                  <span className="text-xs font-semibold text-stone-800 tracking-tight">Your Progress</span>
                </div>

                <div className="space-y-2 text-xs">
                  {currentStory.metrics.map((metric, idx) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-stone-700">
                          <MetricIcon className="w-3.5 h-3.5 text-stone-400" />
                          <span className="text-[11px] font-medium">{metric.label}</span>
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-[11px] text-teal-800">
                          {metric.trend === 'down' && <TrendingDown className="w-3 h-3 text-teal-700" />}
                          {metric.trend === 'up' && <TrendingUp className="w-3 h-3 text-teal-700" />}
                          {metric.trend === 'check' && <Check className="w-3 h-3 text-teal-700 stroke-[2.5]" />}
                          <span>{metric.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Curved Bottom Left Overlay: "Progress is possible" */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#234d43]/85 backdrop-blur-md text-white border border-white/20 shadow-sm">
                <BarChart2 className="w-4 h-4 text-[#a3e5ce]" />
                <span className="text-xs font-medium tracking-wide">Progress is possible</span>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Copy, 4 Pillar Icons, and Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full bg-[#dcf2ea] text-[#1e4d44] text-[11px] font-semibold tracking-wider uppercase">
                PROGRAMME
              </span>
            </div>

            {/* Main Catchphrase */}
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-stone-900 tracking-tight leading-[1.16]">
              {currentStory.taglineBold} <br />
              <span className="text-[#1e4d44] font-medium">{currentStory.taglineRest}</span>
            </h3>

            {/* Description */}
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              {currentStory.description}
            </p>

            {/* 4 Feature Columns Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 pt-2">
              {/* Feature 1: Expert Coaches */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-full bg-[#f0f7f4] border border-[#d2ebe1] flex items-center justify-center text-[#1e4d44] mb-2.5 shadow-2xs">
                  <User className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold text-stone-900 leading-snug">
                  Expert Coaches
                </div>
                <div className="text-[11px] text-stone-500 font-normal mt-0.5 leading-relaxed">
                  Personalised guidance
                </div>
              </div>

              {/* Feature 2: Nutrition Support */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-full bg-[#f0f7f4] border border-[#d2ebe1] flex items-center justify-center text-[#1e4d44] mb-2.5 shadow-2xs">
                  <Apple className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold text-stone-900 leading-snug">
                  Nutrition Support
                </div>
                <div className="text-[11px] text-stone-500 font-normal mt-0.5 leading-relaxed">
                  Practical and sustainable advice
                </div>
              </div>

              {/* Feature 3: Exercise Guidance */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-full bg-[#f0f7f4] border border-[#d2ebe1] flex items-center justify-center text-[#1e4d44] mb-2.5 shadow-2xs">
                  <Footprints className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold text-stone-900 leading-snug">
                  Exercise Guidance
                </div>
                <div className="text-[11px] text-stone-500 font-normal mt-0.5 leading-relaxed">
                  Build healthier habits
                </div>
              </div>

              {/* Feature 4: Sleep & Lifestyle */}
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="w-11 h-11 rounded-full bg-[#f0f7f4] border border-[#d2ebe1] flex items-center justify-center text-[#1e4d44] mb-2.5 shadow-2xs">
                  <Moon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className="text-xs font-semibold text-stone-900 leading-snug">
                  Sleep & Lifestyle
                </div>
                <div className="text-[11px] text-stone-500 font-normal mt-0.5 leading-relaxed">
                  Support for overall well-being
                </div>
              </div>
            </div>

            {/* CTAs: Explore Programme + Watch how it helps */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium text-white bg-[#234d43] hover:bg-[#1a3b33] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>{currentStory.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-3 text-left group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-stone-300 group-hover:border-[#1e4d44] flex items-center justify-center text-stone-700 group-hover:text-[#1e4d44] group-hover:bg-[#f0f7f4] transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-900 group-hover:text-[#1e4d44] transition-colors leading-tight">
                    Watch how it helps
                  </div>
                  <div className="text-[11px] text-stone-500 font-normal">
                    Real stories. Real progress.
                  </div>
                </div>
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM HORIZONTAL PROGRAMMES TABS BAR */}
        <div className="mt-8 pt-6 border-t border-stone-200/90 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[920px] gap-2 py-2">
            {tabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#1e4d44] shadow-xs border border-stone-200 font-semibold ring-1 ring-[#234d43]/20'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70 border border-transparent'
                    }`}
                  >
                    <TabIcon
                      className={`w-4 h-4 ${isActive ? 'text-[#1e4d44]' : 'text-stone-400'}`}
                      strokeWidth={1.75}
                    />
                    <span>{tab.label}</span>
                  </button>

                  {idx < tabs.length - 1 && (
                    <div className="h-4 w-px bg-stone-200 shrink-0 select-none" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>

      {/* Video Modal Preview */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
            <div className="p-4 flex items-center justify-between border-b border-stone-100 bg-[#f9fbfa]">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#1e4d44] fill-[#1e4d44]" />
                <span className="text-sm font-semibold text-stone-900">
                  {currentStory.name} — Real Patient Story
                </span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="aspect-video w-full rounded-2xl bg-stone-900 relative overflow-hidden flex flex-col items-center justify-center text-white">
                <img
                  src={currentStory.image}
                  alt={currentStory.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-[#1e4d44] text-white flex items-center justify-center mx-auto mb-3 shadow-lg ring-4 ring-white/20">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <h4 className="text-lg font-medium">{currentStory.name} in Action</h4>
                  <p className="text-xs text-stone-300 mt-1 max-w-sm mx-auto">
                    Discover how our UK multidisciplinary care team helped members reduce HbA1c, lower medications, and regain energy.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-stone-600 hover:bg-stone-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    handleExplore();
                  }}
                  className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#234d43] hover:bg-[#1a3b33]"
                >
                  Explore This Programme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

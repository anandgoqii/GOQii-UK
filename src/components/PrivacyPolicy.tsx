import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Lock,
  FileText,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Database,
  Eye,
  Smartphone,
  Server,
  Layers,
  ArrowUp
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onOpenContact?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome, onOpenContact }) => {
  const [activeSection, setActiveSection] = useState<string>('our-policy');

  const sections = [
    { id: 'our-policy', title: 'Our Policy' },
    { id: 'dpdp-notice', title: 'Notice under DPDP Act 2023' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'lawful-basis', title: 'Lawful Basis for Processing' },
    { id: 'location-info', title: 'Location Information' },
    { id: 'apple-google-health', title: 'Apple Health & Google Connect' },
    { id: 'cookies-tracking', title: 'Cookies & Tracking' },
    { id: 'retention-deletion', title: 'Data Retention & Deletion' },
    { id: 'truedepth-skinalyze', title: 'TrueDepth API (Skinalyze)' },
    { id: 'use-of-data', title: 'Our Use of Information' },
    { id: 'disclosure-sharing', title: 'Disclosure & Sub-processors' },
    { id: 'children-data', title: "Children's & Minor Protection" },
    { id: 'parental-rights', title: 'Parental & Guardian Rights' },
    { id: 'security-breach', title: 'Security & Breach Response' },
    { id: 'data-principal-rights', title: 'Your Data Principal Rights' },
    { id: 'international-transfers', title: 'International Transfer' },
    { id: 'hipaa-notice', title: 'HIPAA Notice of Privacy' },
    { id: 'grievance-officer', title: 'Grievance Officer & Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 font-['Poppins',sans-serif]">
      {/* Top Banner / Breadcrumb Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center text-xs font-semibold text-[#1e4d44] hover:text-teal-800 transition-colors py-1.5 px-3 rounded-lg hover:bg-stone-100"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-medium text-stone-500">Legal & Governance</span>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-bold text-stone-800">Privacy Policy</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-[#1e4d44] border border-teal-200/80">
              <ShieldCheck className="w-3 h-3 mr-1 text-teal-600" />
              DPDP 2023 & UK GDPR Aligned
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-[#f2f7f5] to-[#fafaf9] border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-300/60 text-[#1e4d44] text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-[#1e4d44]" />
            Official Policy Document
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-heading leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            GOQii is committed to protecting your personal, biometric, and medical telemetry data across our connected apps, coaching services, and smart wearables.
          </p>

          {/* Policy Meta Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-stone-600">
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-stone-200 shadow-2xs font-medium text-stone-700">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-stone-400" />
              Last updated: May 2026
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-stone-200 shadow-2xs font-medium text-stone-700">
              Version 2.0
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-stone-200 shadow-2xs font-medium text-stone-700">
              Minimum age: 13+
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
              Zero Commercial Ad Sharing
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Desktop Left Sidebar: Sticky Navigation */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] text-stone-400 font-normal">18 sections</span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 text-xs text-stone-600">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all flex items-center justify-between ${
                      activeSection === item.id
                        ? 'bg-[#1e4d44] text-white shadow-xs font-semibold'
                        : 'hover:bg-stone-100 hover:text-stone-900 text-stone-600'
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ml-1.5 ${activeSection === item.id ? 'text-teal-200' : 'text-stone-400'}`} />
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <div className="text-[11px] font-semibold text-stone-800">Need immediate help?</div>
                <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                  Reach out directly to our Data Protection & Grievance desk.
                </p>
                <a
                  href="mailto:privacy@goqii.com"
                  className="mt-2.5 inline-flex items-center text-xs font-semibold text-[#1e4d44] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 mr-1 text-[#1e4d44]" />
                  privacy@goqii.com
                </a>
              </div>
            </div>
          </aside>

          {/* Right Main Column: Full Legal Content */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-12">
            
            {/* 1. Our Policy */}
            <section id="our-policy" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Our Policy
              </h2>
              <div className="prose prose-stone text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  We, <strong>GOQii</strong> (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and its affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.
                </p>
                <p>
                  While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the <strong>“GOQii App”</strong> (available on iOS and Android) and a wearable GOQii fitness band (<strong>"GOQii Tracker"</strong>).
                </p>
                <p>
                  You can read more about GOQii and our product at website <a href="https://goqii.com" target="_blank" rel="noreferrer" className="text-[#1e4d44] underline font-medium">goqii.com</a> (together with the GOQii App is hereby referred to as the <strong>"Platform"</strong>). For ease of reading and clarity, the Platform, the GOQii App and the GOQii Tracker are collectively referred to as the <strong>"Services"</strong>. Your use of the Platform and Services are governed by the Terms of Use and other policies of GOQii.
                </p>
                <p>
                  We know that the privacy of your personal data is very important to you. This Privacy Policy sets forth GOQii’s policy with respect to information including personally identifiable data (<strong>"Personal Data"</strong>) and other information that is collected from Platform visitors and users.
                </p>
              </div>
            </section>

            {/* 2. Notice under DPDP Act */}
            <section id="dpdp-notice" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Notice under the Digital Personal Data Protection Act, 2023 (DPDP Act)
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  GOQii Technologies Pvt. Ltd. processes your personal data for the following legitimate and explicit purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-stone-700 pl-2">
                  <li>Providing personalised health coaching, fitness tracking, and wellness services;</li>
                  <li>Operating and improving our platform;</li>
                  <li>Communicating with you about your account and services;</li>
                  <li>Complying with legal obligations.</li>
                </ul>
                <p>
                  The categories of personal data we collect are described in the <em>'Information We Collect'</em> section below. You have the right to access, correct, erase, and port your personal data; to withdraw consent; to nominate another individual to exercise your rights; and to raise grievances as described in this policy. To exercise any of these rights, please contact our Grievance Officer whose details are provided at the end of this policy.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Age Requirement:</strong> GOQii is accessible to users aged 13 and above. Users under 18 (or under 13 in the USA) are subject to additional protections and parental consent requirements described in the Children's and Minor Users Data section.
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Information We Collect */}
            <section id="information-collected" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Information We Collect
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  We collect Personal Data from you when you voluntarily provide such information, such as when you register for access to GOQii Services, use the GOQii Tracker, post information or comments, respond to surveys, or allow us to access your location information.
                </p>

                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                    Categories of Collected Personal Data:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Full name & email address</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Account credentials (hashed password)</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Gender, DOB & profile picture</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Contact details & postal address</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Height, weight & BMI metrics</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Diet, digestive & meal logs</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Fitness routines & exercise logs</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Medical history, conditions & medications</div>
                  </div>
                </div>

                <p>
                  By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to us, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of GOQii and the authorised third parties referred to herein, located worldwide, subject to the safeguards described in the <em>'International Transfer'</em> section.
                </p>
              </div>
            </section>

            {/* 4. Lawful Basis for Processing */}
            <section id="lawful-basis" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Lawful Basis for Processing
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>We process your personal data on the following bases:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/40">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">1. Consent</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      For health data, sensitive personal data, and optional features such as AI skin analysis, location tracking, Apple HealthKit / Google Fit integration, and data sharing with insurance or wellness partners. For users under 18, consent must be provided by a parent or guardian.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">2. Contractual Necessity</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Required for account registration, profile setup, 1-on-1 certified human coaching delivery, and customer service fulfillment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">3. Legitimate Interests</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      For platform fraud prevention, system security, software diagnosis, quality assurance, and aggregate de-identified analytics.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">4. Legal Obligation</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      For compliance with applicable statutory, regulatory, and healthcare audit mandates in India, UK, USA, and other operating regions.
                    </p>
                  </div>
                </div>

                <p className="font-medium text-stone-900 pt-2">
                  For health and sensitive personal data (fitness metrics, medical history, biometric data, HealthKit data, Health Connect data), we rely exclusively on your explicit consent.
                </p>
              </div>
            </section>

            {/* 5. Location Information & Choices */}
            <section id="location-info" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Location Information & Your Choices
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  Our Service collects and uses your precise location data (via the GPS on your mobile device or your GOQii Band). This data is strictly collected to enable core app functionality, such as tracking your outdoor activities, calculating distance, and providing localized health insights. We use this location information in conjunction with your Personal Data to provide these services.
                </p>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Your Choices</h4>
                  <p className="text-xs sm:text-sm text-stone-600">
                    You can use the Platform without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain GOQii Services that require account credentials or telemetry synchronisation.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Apple Health & Google Fit / Connect */}
            <section id="apple-google-health" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Apple Health (HealthKit) and Google Fit / Google Health Connect Data
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  GOQii integrates with Apple Health (HealthKit) on iOS and Google Fit / Google Health Connect on Android. If you choose to connect these platforms, the following applies:
                </p>

                <h3 className="text-base font-bold text-stone-900 pt-2">Data Types Accessed</h3>
                <p>With your permission, GOQii may read and/or write the following health data types from Apple Health or Google Health Connect:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700 pl-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Steps, distance, and active energy burned</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Heart rate, resting HR & HRV</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Sleep analysis and sleep duration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Body weight, height, and BMI</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Blood glucose and blood pressure (user-entered)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-600" /> Workout and activity sessions</li>
                </ul>

                <p className="text-xs text-stone-500 italic">
                  We request only the minimum data types necessary to provide your coaching and wellness service. You can see the exact permissions requested at the time of connection.
                </p>

                <h3 className="text-base font-bold text-stone-900 pt-2">How We Use This Data</h3>
                <ul className="list-disc list-inside space-y-1 pl-2 text-stone-700 text-xs sm:text-sm">
                  <li>To provide personalised health coaching, activity tracking, and wellness insights within the Services.</li>
                  <li>To correlate wearable data with your coaching goals.</li>
                  <li>To display your health trends and progress within the GOQii app.</li>
                  <li>For users under 18, health platform integrations require explicit parental or guardian consent in addition to the user's own consent, and data is used solely for service delivery — never for any commercial purpose.</li>
                </ul>

                <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-900">
                  <strong>Strict Advertising Prohibition:</strong> We do NOT use Apple HealthKit data or Google Health Connect data for advertising purposes. We do NOT sell this data to third parties. We do NOT share this data with third parties for advertising or marketing purposes.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm mb-1">Apple HealthKit Specific Restrictions (App Store §5.1.3)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Data read from Apple HealthKit will not be used for advertising, sold to data brokers, or shared with third parties for any advertising or marketing purpose. HealthKit data will not be used for any purpose not described in this Privacy Policy. HealthKit data will only be shared with third parties when necessary to provide or improve health or fitness features, with your explicit consent, or as required by law.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm mb-1">Google Health Connect Specific Disclosures</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      GOQii's use of Google Health Connect data is limited to providing and improving the health and fitness features within the Services. Health Connect data is not used for advertising, profiling, or any purpose unrelated to health and fitness services. GOQii complies with the Google Health Connect Permission Policy.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm mb-2">How to Connect or Disconnect</h4>
                  <div className="text-xs text-stone-600 space-y-1">
                    <div><strong>Apple Health:</strong> iPhone Settings &gt; Health &gt; Data Access &amp; Devices &gt; GOQii</div>
                    <div><strong>Google Fit / Health Connect:</strong> Android Settings &gt; Health Connect &gt; App permissions &gt; GOQii</div>
                    <div><strong>GOQii App:</strong> Settings &gt; Privacy &gt; Connected Platforms &gt; Disconnect</div>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Disconnecting a health platform stops future data sync. Data already imported will be retained for 3 months after disconnection and then deleted, unless you request earlier deletion via the data erasure process described in 'Your Data Principal Rights'.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Cookies & Non-Identifiable Data */}
            <section id="cookies-tracking" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Non-Identifiable Data (Cookies)
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  When you interact with GOQii through the Platform, we receive and store certain non-identifiable information using technologies such as cookies, web beacons, and device identifiers. We use cookies and similar technologies as follows:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Strictly Necessary Cookies:</span>
                    <p className="text-stone-600 text-xs mt-1">Required for the Platform to function securely. Cannot be disabled.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Analytics Cookies:</span>
                    <p className="text-stone-600 text-xs mt-1">Help us understand how users interact with our Platform (session duration, visits). Optional.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Preference Cookies:</span>
                    <p className="text-stone-600 text-xs mt-1">Remember your settings, language, and display preferences. Optional.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Marketing Cookies:</span>
                    <p className="text-stone-600 text-xs mt-1">Deliver relevant content. We do not use marketing cookies to target health-related ads without consent.</p>
                  </div>
                </div>

                <p className="text-xs text-stone-600">
                  You may manage your cookie preferences at any time via the cookie settings link in the footer of our website or under Settings &gt; Privacy in the GOQii app. We endeavour to honour Do Not Track (DNT) browser signals for optional tracking technologies.
                </p>
              </div>
            </section>

            {/* 8. Data Retention and Deletion Table */}
            <section id="retention-deletion" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Data Retention and Deletion
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  GOQii retains your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. The following retention periods apply:
                </p>

                {/* Structured Table */}
                <div className="overflow-x-auto rounded-xl border border-stone-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1e4d44] text-white">
                        <th className="py-3 px-4 font-semibold">Data Type</th>
                        <th className="py-3 px-4 font-semibold">Retention Period</th>
                        <th className="py-3 px-4 font-semibold">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 bg-white">
                      <tr className="hover:bg-stone-50/70">
                        <td className="py-3 px-4 font-semibold text-stone-900">Personal data of users under 18</td>
                        <td className="py-3 px-4 text-emerald-800 font-medium">Deleted within 30 days of parental/guardian deletion request or account closure</td>
                        <td className="py-3 px-4 text-stone-600">Enhanced protection for minor users; no retention beyond strict necessity</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70 bg-stone-50/30">
                        <td className="py-3 px-4 font-semibold text-stone-900">User profile data</td>
                        <td className="py-3 px-4 text-stone-700">3 months after account deletion</td>
                        <td className="py-3 px-4 text-stone-600">Account recovery & pending issue resolution</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70">
                        <td className="py-3 px-4 font-semibold text-stone-900">Health & activity data (steps, sleep, heart rate, logs, labs)</td>
                        <td className="py-3 px-4 text-stone-700">3 months after account deletion or last activity</td>
                        <td className="py-3 px-4 text-stone-600">Continuity of care</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70 bg-stone-50/30">
                        <td className="py-3 px-4 font-semibold text-stone-900">Apple HealthKit data (read/synced from Apple Health)</td>
                        <td className="py-3 px-4 text-stone-700">3 months after account deletion or revocation of HealthKit permission</td>
                        <td className="py-3 px-4 text-stone-600">Same as health data; deleted on permission revocation</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70">
                        <td className="py-3 px-4 font-semibold text-stone-900">Google Fit / Health Connect data (read/synced)</td>
                        <td className="py-3 px-4 text-stone-700">3 months after account deletion or revocation of Health Connect permission</td>
                        <td className="py-3 px-4 text-stone-600">Same as health data; deleted on permission revocation</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70 bg-stone-50/30">
                        <td className="py-3 px-4 font-semibold text-stone-900">Coach / health professional chats</td>
                        <td className="py-3 px-4 text-stone-700">1 year after last interaction</td>
                        <td className="py-3 px-4 text-stone-600">Quality audits, service history</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70">
                        <td className="py-3 px-4 font-semibold text-stone-900">Device & app metadata</td>
                        <td className="py-3 px-4 text-stone-700">6 months</td>
                        <td className="py-3 px-4 text-stone-600">Diagnostics, engagement metrics</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70 bg-stone-50/30">
                        <td className="py-3 px-4 font-semibold text-stone-900">Consent logs & audit trails</td>
                        <td className="py-3 px-4 text-stone-700">7 years</td>
                        <td className="py-3 px-4 text-stone-600">Legal & compliance traceability</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70">
                        <td className="py-3 px-4 font-semibold text-stone-900">Support tickets</td>
                        <td className="py-3 px-4 text-stone-700">2 years</td>
                        <td className="py-3 px-4 text-stone-600">Historical support context</td>
                      </tr>
                      <tr className="hover:bg-stone-50/70 bg-stone-50/30">
                        <td className="py-3 px-4 font-semibold text-stone-900">Communication logs (in-app, WhatsApp)</td>
                        <td className="py-3 px-4 text-stone-700">6 months</td>
                        <td className="py-3 px-4 text-stone-600">Operational analysis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-stone-600">
                  After the applicable retention period, data is securely deleted using <strong>NIST 800-88</strong> compliant methods. You may request early deletion of your data as described in the <em>'Your Data Principal Rights'</em> section below.
                </p>
              </div>
            </section>

            {/* 9. TrueDepth API for AI Skin Analysis */}
            <section id="truedepth-skinalyze" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Use of TrueDepth API for AI Skin Analysis (Skinalyze)
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  Our Skin Wellness Assessment (Skinalyze) feature uses your device's TrueDepth camera API. We handle this data with the following core principles:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/30">
                    <h4 className="font-bold text-stone-900 mb-1">On-Device Processing</h4>
                    <p className="text-stone-600">
                      All TrueDepth camera data is processed in real time on your device only. Raw TrueDepth scan data is NEVER transmitted to or stored on GOQii's servers.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 mb-1">AI Analysis Results</h4>
                    <p className="text-stone-600">
                      AI-generated skin analysis results (e.g., numeric scores, identified conditions) are NOT stored by default.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 mb-1">User-Saved Results</h4>
                    <p className="text-stone-600">
                      If you explicitly choose to save your results by tapping 'Save Results', only the analysis output (not the facial scan) is stored. Retained for 6 months or until deleted via Settings &gt; Health Data &gt; Skin Analysis.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900 mb-1">No Ads or Third-Party Sharing</h4>
                    <p className="text-stone-600">
                      TrueDepth data is never used for facial recognition, user identification, advertising, or marketing, and never shared with third parties or used to train AI models.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-100 text-xs text-stone-700">
                  <strong>Age Gate:</strong> The AI skin analysis (Skinalyze) feature using the TrueDepth camera is available only to users aged 18 and above. This feature is automatically disabled for accounts where the registered age is under 18.
                </div>
              </div>
            </section>

            {/* 10. Our Use of Your Personal Data */}
            <section id="use-of-data" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Our Use of Your Personal Data and Other Information
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  GOQii uses the Personal Data you provide in a manner consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. GOQii and its Related Companies may use your Personal Data to help us improve the content and functionality of the Platform, better understand our users, and improve GOQii Services.
                </p>
                <p>
                  Email communications we send you will contain instructions permitting you to opt out of receiving future communications. SMS/IVR communications can be opted out by writing to <a href="mailto:support@goqii.com" className="text-[#1e4d44] underline font-medium">support@goqii.com</a>.
                </p>
                <p>
                  GOQii limits the collection, use, and disclosure of health information and Protected Health Information (PHI) to the minimum necessary to accomplish the intended purpose of each specific use or disclosure. We do not use your health data for targeted advertising without your explicit, separate consent.
                </p>
                
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-stone-800 space-y-2">
                  <div className="font-bold text-[#1e4d44]">Additional restrictions for users under 18:</div>
                  <p>GOQii does not use the personal data or health data of users under 18 for:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Targeted or behavioural advertising;</li>
                    <li>Sale or sharing with data brokers or advertising networks;</li>
                    <li>Profiling for commercial purposes;</li>
                    <li>Any purpose beyond direct delivery of coaching and wellness services.</li>
                  </ul>
                  <p className="text-xs text-stone-600">HealthKit and Health Connect data of users under 18 is never shared with third parties without explicit parental/guardian consent.</p>
                </div>
              </div>
            </section>

            {/* 11. Our Disclosure & Sub-processors */}
            <section id="disclosure-sharing" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Our Disclosure of Your Personal Data and Other Information
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  <strong>GOQii is not in the business of selling your information.</strong> There are, however, certain circumstances in which we may share your Personal Data with certain third parties:
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900">Business Transfers</h4>
                    <p className="text-stone-600 mt-1">
                      As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganisation, dissolution or similar event, Personal Data may be part of the transferred assets.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900">Related Companies</h4>
                    <p className="text-stone-600 mt-1">
                      We may share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900">Data Processors and Sub-processors</h4>
                    <p className="text-stone-600 mt-1">
                      We share your Personal Data with the following categories of third-party service providers who process data on our behalf under written Data Processing Agreements:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 pl-2 text-stone-600">
                      <li><strong>Cloud infrastructure:</strong> Amazon Web Services (AWS) — hosting and storage under a HIPAA Business Associate Addendum.</li>
                      <li><strong>Health platform integrations:</strong> Apple (HealthKit) and Google (Health Connect) — subject to platform-specific restrictions described above.</li>
                      <li><strong>Diagnostics and health partners:</strong> e.g. Thyrocare Technologies Ltd., Max Hospitals — only with your prior explicit consent.</li>
                      <li><strong>Insurance partners:</strong> Only when you have specifically authorised this before purchasing a product.</li>
                      <li><strong>Analytics and product improvement:</strong> Using aggregated or pseudonymised data only.</li>
                      <li><strong>Customer support tools.</strong></li>
                    </ul>
                    <p className="text-xs text-stone-500 mt-2">
                      All processors are contractually required to protect your data, process it only on our instructions, and comply with applicable data protection laws including the DPDP Act 2023. We will notify you of material changes to our processor list.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <h4 className="font-bold text-stone-900">Legal Requirements</h4>
                    <p className="text-stone-600 mt-1">
                      GOQii may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to: comply with a legal obligation, protect and defend the rights or property of GOQii, act in urgent circumstances to protect personal safety, or protect against legal liability.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-stone-600">
                  We do not share the personal data of users under 18 with insurance partners, analytics companies, or wellness partners for commercial purposes without fresh, explicit parental/guardian consent for each specific third party.
                </p>
              </div>
            </section>

            {/* 12. Children's Data */}
            <section id="children-data" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Children's Data
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">India DPDP Sec. 9:</span>
                    <p className="text-stone-600 text-xs mt-1">Users 13–17 require verifiable parental consent; no tracking, profiling, or behavioral ads.</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">USA COPPA:</span>
                    <p className="text-stone-600 text-xs mt-1">Children under 13 not permitted; 5-day deletion turnaround.</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">EU GDPR Art. 8:</span>
                    <p className="text-stone-600 text-xs mt-1">Country-specific age of digital consent (13–16 years).</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Universal &lt;18 Protections:</span>
                    <p className="text-stone-600 text-xs mt-1">Zero ads, zero profiling, zero commercial sharing, data minimisation, TrueDepth disabled.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. Parental and Guardian Rights */}
            <section id="parental-rights" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Parental and Guardian Rights
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>Parents and legal guardians may exercise the following rights regarding their minor's data:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-stone-700">
                  <li>Review all personal, health, and activity data collected from the minor;</li>
                  <li>Request correction or deletion of personal data;</li>
                  <li>Withdraw consent at any time (including health platform integrations);</li>
                  <li>Object to any commercial use or external processing;</li>
                  <li>Request a portable machine-readable copy of the minor's data.</li>
                </ul>
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <strong>Accelerated Response SLA:</strong> 15 days (faster than standard 30 days).
                    <div className="text-xs text-teal-800">Email: privacy@goqii.com with subject <em>'Minor Account Request'</em>.</div>
                  </div>
                  <a
                    href="mailto:privacy@goqii.com?subject=Minor%20Account%20Request"
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#1e4d44] text-white text-xs font-semibold hover:bg-teal-800 shrink-0"
                  >
                    Submit Minor Request
                  </a>
                </div>
              </div>
            </section>

            {/* 14. Exclusions, Links & Social Media */}
            <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Exclusions</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  This Privacy Policy does not apply to any Personal Data collected by GOQii other than Personal Data collected through the Services. General product feedback, feature suggestions, and non-personal unsolicited information you share with GOQii may be used by GOQii without obligation of confidentiality or compensation. However, any personal data, health data, or sensitive personal data you include in such communications remains subject to this Privacy Policy and applicable data protection law, and will not be treated as freely usable non-confidential information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Links To Other Web Sites</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  This Privacy Policy applies only to the Platform and to the services provided. Our Platform may contain links to other web sites not operated or controlled by GOQii (Third Party Sites). The policies and procedures we describe here do not apply to those Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Social Media</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  GOQii may allow you to access certain Social Media Services (such as Facebook and Twitter) through the Platform. When you add Social Media Service accounts to GOQii Services or log in using your Social Media Services account, we will collect relevant information necessary to enable the Platform to access that Social Media Service. The manner in which Social Media Services use, store and disclose your information is governed by the policies of those Social Media Services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Advertising</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  GOQii may display third-party advertisements on the Platform and via the Services. GOQii will not share your health data, medical history, biometric data, HealthKit data, Health Connect data, or sensitive personal data with advertisers for targeting purposes. Any interest-based advertising using your non-sensitive activity data will be disclosed in this Privacy Policy and subject to your consent preferences manageable via Settings &gt; Privacy &gt; Advertising. For users under 18: no advertising of any kind — interest-based or contextual — will be served. Accounts identified as belonging to users under 18 have all advertising disabled by default and this cannot be changed.
                </p>
              </div>
            </section>

            {/* 15. Security & Data Breach Notification */}
            <section id="security-breach" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Security & Data Breach Notification
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  GOQii takes reasonable steps to protect the Personal Data provided via the Platform and the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. We have adopted reasonable security practices and procedures as further described in our information security policy. While we implement robust security measures, no system is completely immune to security incidents. In the event of a personal data breach affecting your rights and freedoms, we will notify you and, where required, relevant regulatory authorities in accordance with applicable law. Our liability for data breaches resulting from our failure to maintain reasonable security measures will not be excluded or limited to the extent prohibited by applicable law.
                </p>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 text-xs sm:text-sm mb-2">Data Breach Escalation Timelines:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    <div>• <strong>User Notification:</strong> within 72 hours</div>
                    <div>• <strong>DPBI Notification:</strong> under DPDP Sec. 17</div>
                    <div>• <strong>CERT-In Notification:</strong> within 6 hours per Directions 2022</div>
                    <div>• <strong>HHS Notification:</strong> for HIPAA breaches</div>
                  </div>
                  <div className="mt-3 text-xs text-stone-600">
                    Dedicated Security Desk: <a href="mailto:security@goqii.com" className="text-[#1e4d44] underline font-medium">security@goqii.com</a>
                  </div>
                </div>
              </div>
            </section>

            {/* 16. Your Data Principal Rights */}
            <section id="data-principal-rights" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                Your Data Principal Rights
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>Under applicable data protection laws including the DPDP Act 2023 and GDPR, you have the following rights:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Access:</span>
                    <p className="text-stone-600 mt-1">Request a copy of the personal data we hold about you. We will respond within 30 days.</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Correction:</span>
                    <p className="text-stone-600 mt-1">Request correction of inaccurate or incomplete personal data within 30 days.</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Erasure:</span>
                    <p className="text-stone-600 mt-1">Request deletion of personal data. Where processing is based on consent, deleted within 30 days.</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Withdraw Consent:</span>
                    <p className="text-stone-600 mt-1">Withdraw consent at any time, including HealthKit and Health Connect access.</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Data Portability:</span>
                    <p className="text-stone-600 mt-1">Request personal data in machine-readable JSON/CSV via Settings &gt; Privacy &gt; Download My Data.</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900">Right to Grievance Redressal:</span>
                    <p className="text-stone-600 mt-1">Raise a grievance with our Grievance Officer and escalate to the Data Protection Board of India.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg border border-teal-200 bg-teal-50/50 text-xs sm:text-sm">
                  <span className="font-bold text-[#1e4d44]">Right to Nominate (DPDP Sec. 13):</span>
                  <p className="text-stone-700 mt-1">
                    You may nominate another individual to exercise your data rights in the event of your death or incapacity. Submit nominee details to <a href="mailto:grievance@goqii.com" className="text-[#1e4d44] underline font-medium">grievance@goqii.com</a>.
                  </p>
                </div>

                <p className="text-xs text-stone-600">
                  To exercise any right, contact us via in-app Settings &gt; Privacy, or email <a href="mailto:privacy@goqii.com" className="text-[#1e4d44] underline font-medium">privacy@goqii.com</a>. We will respond within 30 days. If we deny a request, we will provide written reasons and inform you of your right to escalate to the Data Protection Board of India.
                </p>
              </div>
            </section>

            {/* 17. International Transfer */}
            <section id="international-transfers" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#1e4d44] rounded-full inline-block" />
                International Transfer & Other Terms
              </h2>
              <div className="text-stone-700 text-sm sm:text-[15px] leading-relaxed space-y-4">
                <p>
                  Your personal data may be transferred to and processed in the following countries: <strong>India</strong> (GOQii Technologies Pvt. Ltd. headquarters) and the <strong>United States</strong> (Amazon Web Services infrastructure, GOQii Inc.). For transfers of personal data outside India, we rely on the following safeguards:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-stone-700">
                  <li>Standard Contractual Clauses (SCCs) for GDPR-covered transfers;</li>
                  <li>The AWS Business Associate Addendum and Data Processing Addendum for health data;</li>
                  <li>Contractual protections consistent with DPDP Act 2023 requirements.</li>
                </ul>
                <p>
                  We do not transfer your personal data to countries restricted by the Government of India under the DPDP Act. By using our Services, you consent to these transfers under the safeguards described above.
                </p>
                <div className="pt-2 text-xs text-stone-600">
                  Your access to and use of this Platform is subject to the Terms of Service at <a href="https://goqii.com/terms" target="_blank" rel="noreferrer" className="text-[#1e4d44] underline">goqii.com/terms</a>.
                </div>
              </div>
            </section>

            {/* 18. Changes & HIPAA Notice */}
            <section id="hipaa-notice" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Changes to GOQii's Privacy Policy</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  GOQii reserves the right to update or modify this Privacy Policy at any time. For material changes, we will notify you via email or in-app notification at least 30 days before the changes take effect. Your continued use of the Platform after that notice period constitutes acceptance of the revised Privacy Policy. The current version number and last updated date are stated at the top of this policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">HIPAA Notice of Privacy Practices</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  If you are a user in the United States and your health information constitutes Protected Health Information (PHI) under HIPAA, you have additional rights including: the right to request restrictions on uses and disclosures of your PHI; request confidential communications; receive an accounting of disclosures of your PHI; and file a complaint with the U.S. Department of Health and Human Services (HHS). A full HIPAA Notice of Privacy Practices is available by contacting <a href="mailto:privacy@goqii.com" className="text-[#1e4d44] underline">privacy@goqii.com</a> or by writing to our Grievance Officer at the address provided below.
                </p>
              </div>
            </section>

            {/* 19. Grievance Officer & Contacting Us */}
            <section id="grievance-officer" className="bg-gradient-to-br from-[#1e4d44] to-[#12332d] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-teal-300" />
                Grievance Officer & Contact Information
              </h2>
              <div className="text-sm leading-relaxed space-y-5 text-stone-200">
                <p>
                  In accordance with the Information Technology Act, 2000, the IT (Intermediary Guidelines) Rules, 2011, and the Digital Personal Data Protection Act, 2023, GOQii has designated a Grievance Officer for data privacy matters:
                </p>

                {/* Grievance Officer Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15 space-y-2 text-xs sm:text-sm text-white">
                  <div className="font-bold text-base text-teal-200">Pravin Shelki</div>
                  <div className="text-stone-300">Data Protection Officer & Privacy Officer</div>
                  <div className="text-stone-300 font-semibold">GOQii Technologies Private Limited</div>
                  <div className="flex items-start gap-2 pt-1 text-stone-300">
                    <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                    <span>101, Satyam Towers, Sanghavi Corporate Park, Off BKSD Marg, Deonar, Govandi East, Mumbai 400 088, Maharashtra, India</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs">
                    <a href="mailto:grievance@goqii.com" className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white underline">
                      <Mail className="w-3.5 h-3.5" />
                      grievance@goqii.com
                    </a>
                    <span className="inline-flex items-center gap-1.5 text-stone-300">
                      <Phone className="w-3.5 h-3.5 text-teal-300" />
                      +91 84199 40404 (Mon to Sat 10 AM to 7 PM)
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  You may also raise concerns via the in-app Help & Support section. We will acknowledge your grievance within <strong>48 hours</strong> and endeavour to resolve it within <strong>30 days</strong>. If unresolved to your satisfaction, you may escalate to the Data Protection Board of India or seek other remedies under applicable law.
                </p>

                <div className="pt-4 border-t border-white/15">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-teal-200 mb-3">Directory of Inquiries</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                      <span className="text-stone-400 block">General Privacy Queries:</span>
                      <a href="mailto:privacy@goqii.com" className="text-teal-200 hover:underline font-medium">privacy@goqii.com</a>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                      <span className="text-stone-400 block">Data Protection Officer (GDPR):</span>
                      <a href="mailto:dpo@goqii.com" className="text-teal-200 hover:underline font-medium">dpo@goqii.com</a>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                      <span className="text-stone-400 block">Grievance (DPDP / IT Rules):</span>
                      <a href="mailto:grievance@goqii.com" className="text-teal-200 hover:underline font-medium">grievance@goqii.com</a>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20 border border-white/10">
                      <span className="text-stone-400 block">Security Incidents:</span>
                      <a href="mailto:security@goqii.com" className="text-teal-200 hover:underline font-medium">security@goqii.com</a>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-stone-300">
                    In-app navigation: Settings &gt; Privacy &gt; Contact Us
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Floating Bottom Quick Action */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#1e4d44] hover:bg-teal-800 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

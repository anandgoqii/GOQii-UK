import React, { useState } from 'react';
import {
  Calendar,
  ArrowRight,
  User,
  Heart,
  TrendingUp,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import gpConsultingDeskImg from '../assets/images/gp_consulting_desk_1788864660152.jpg';

interface ContactSectionProps {
  onOpenGpGuide: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenGpGuide }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name, mobile number, and email.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setMobileNumber('');
    setEmail('');
    setComments('');
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact-section"
      className="relative py-20 lg:py-28 bg-[#fbfdfc] text-stone-900 overflow-hidden border-t border-stone-200/80"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] rounded-full bg-[#dcf2ea]/30 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-[#edf6f2]/50 blur-3xl pointer-events-none -z-0" />

      {/* Decorative Foliage on Bottom Left */}
      <div className="absolute -bottom-10 -left-6 w-48 h-48 pointer-events-none opacity-20 select-none z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#1e4d44]">
          <path
            d="M0 200 C 50 140, 110 120, 170 100 C 130 160, 90 180, 0 200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: TALK TO YOUR GP + CONSULTATION PHOTO + BENEFITS */}
          <div className="lg:col-span-6 space-y-8 relative">
            
            {/* Header Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 select-none">
                <span className="text-[11px] sm:text-xs tracking-[0.25em] font-medium text-stone-500 uppercase">
                  TALK TO YOUR GP
                </span>
                <div className="w-10 sm:w-14 h-px bg-stone-400" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-stone-900 tracking-tight leading-[1.15]">
                Your health <br />
                is a conversation <br />
                <span className="text-[#1e4d44] font-medium">away.</span>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                Speak to your GP to find out if GOQii is right for you. Together, we can take the first step towards better health and wellbeing.
              </p>

              {/* Talk to GP Primary CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenGpGuide}
                  className="bg-[#0e4b41] hover:bg-[#0a3831] text-white px-7 py-3.5 rounded-2xl font-medium inline-flex items-center gap-3 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
                >
                  <Calendar className="w-5 h-5 text-white/90" />
                  <span className="text-sm font-semibold tracking-wide">Talk to your GP</span>
                  <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 3 Value Guidance Items */}
            <div className="space-y-5 pt-2">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200/90 shadow-2xs flex items-center justify-center shrink-0 text-[#1e4d44]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">
                    Discuss your goals
                  </h4>
                  <p className="text-xs text-stone-500 font-normal mt-0.5">
                    Get personalised guidance from your GP
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200/90 shadow-2xs flex items-center justify-center shrink-0 text-[#1e4d44]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">
                    Explore GOQii
                  </h4>
                  <p className="text-xs text-stone-500 font-normal mt-0.5">
                    Learn how it can support your health journey
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200/90 shadow-2xs flex items-center justify-center shrink-0 text-[#1e4d44]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">
                    Take the next step
                  </h4>
                  <p className="text-xs text-stone-500 font-normal mt-0.5">
                    Build healthier habits with expert support
                  </p>
                </div>
              </div>

            </div>

            {/* Doctor Consultation Visual Backdrop & Framed Motto */}
            <div className="relative pt-4">
              <div className="relative rounded-[28px] overflow-hidden shadow-md border border-white aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={gpConsultingDeskImg}
                  alt="Doctor consulting with patient across consultation desk"
                  className="w-full h-full object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />

                {/* Framed Wall Motto in Clinic Art */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-stone-200/80 shadow-xs text-right">
                  <div className="font-serif italic text-xs sm:text-sm text-stone-800 leading-tight">
                    Better Health
                  </div>
                  <div className="font-serif italic text-xs sm:text-sm text-[#1e4d44] leading-tight">
                    Brighter Tomorrows
                  </div>
                </div>

                {/* Patient Consultation Caption Pill */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl text-[11px] font-semibold text-stone-800 shadow-xs border border-stone-200">
                  NHS & GP Practice Consultations
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: "SEND US A MESSAGE" FORM CARD */}
          <div className="lg:col-span-6">
            <div className="relative bg-white rounded-[32px] p-7 sm:p-10 shadow-xl border border-stone-200/90 space-y-6">
              
              {/* Form Card Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-3 select-none">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-stone-400 uppercase">
                    GET IN TOUCH
                  </span>
                  <div className="w-12 h-px bg-stone-300" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-heading">
                  Send us a message.
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 font-normal">
                  Fill in the form below and we’ll get back to you as soon as possible.
                </p>
              </div>

              {/* Submission Notice */}
              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#eef8f4] border border-[#d2ebe1] text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#0e4b41] mx-auto" />
                  <div className="text-base font-bold text-stone-900">Message Received!</div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Thank you, {fullName}. Our UK clinical liaison team will review your inquiry and contact you within 1 business day.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-3 px-5 py-2 rounded-xl bg-[#0e4b41] text-white text-xs font-semibold hover:bg-[#0a3831] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#0e4b41] focus:ring-1 focus:ring-[#0e4b41] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* 2. Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-800">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter your mobile number"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#0e4b41] focus:ring-1 focus:ring-[#0e4b41] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* 3. Email ID */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-800">
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#0e4b41] focus:ring-1 focus:ring-[#0e4b41] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* 4. Comments */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-stone-800">
                      Comments <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-stone-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="Tell us how we can help"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#0e4b41] focus:ring-1 focus:ring-[#0e4b41] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0e4b41] hover:bg-[#0a3831] text-white py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Bottom Office Info & Brand Footer Inside Card */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Left: Location Pin & Registered Address */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0e4b41] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] text-stone-700 leading-snug">
                    <div className="font-bold text-stone-900">GOQii UK Limited</div>
                    <div>29 West Way</div>
                    <div>Hove, England</div>
                    <div>BN3 8LS</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-10 w-px bg-stone-200" />

                {/* Right: Real People Tag */}
                <div className="text-right select-none">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-stone-400">
                    REAL PEOPLE.
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#0e4b41]">
                    A HEALTHIER UK.
                  </div>
                  <div className="w-8 h-0.5 bg-stone-300 ml-auto mt-1" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CareProgramme } from '../types';
import { X, CheckCircle2, ShieldCheck, HeartHandshake, ChevronRight, Stethoscope } from 'lucide-react';

interface ProgrammeModalProps {
  programme: CareProgramme | null;
  onClose: () => void;
  onOpenContact: () => void;
  onOpenGpGuide: () => void;
}

export const ProgrammeModal: React.FC<ProgrammeModalProps> = ({
  programme,
  onClose,
  onOpenContact,
  onOpenGpGuide,
}) => {
  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="care-programme-detail-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-stone-900 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          aria-label="Close programme details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-full sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 shrink-0 shadow-xs">
            <img
              src={programme.image}
              alt={programme.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-white/95 text-teal-800 border border-stone-200 shadow-xs backdrop-blur-md">
                {programme.category}
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              UK Approved Clinical Care Pathway
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900 font-heading">
              {programme.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {programme.tagline}
            </p>

            {programme.stats && (
              <div className="inline-flex items-baseline gap-2 pt-2 px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-lg font-bold text-teal-700 font-heading">
                  {programme.stats.value}
                </span>
                <span className="text-xs text-stone-600 font-medium">
                  {programme.stats.label}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Deep Description */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Clinical Strategy & Overview:
          </div>
          <p>{programme.longDescription}</p>
        </div>

        {/* Clinical Focus Areas & Programme Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="font-bold text-teal-700 uppercase tracking-wider text-[11px]">
              Clinical Biomarker Focus:
            </div>
            <div className="space-y-1.5">
              {programme.clinicalFocus.map((focus, idx) => (
                <div key={idx} className="flex items-start gap-2 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="font-bold text-teal-700 uppercase tracking-wider text-[11px]">
              Patient Outcomes & Benefits:
            </div>
            <div className="space-y-1.5">
              {programme.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coaching Structure */}
        <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-start gap-3 text-xs text-teal-900">
          <HeartHandshake className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-teal-950 block">Dedicated Coaching Protocol</span>
            <p className="mt-0.5 text-teal-800">{programme.coachingApproach}</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-xs"
          >
            <span>Enquire About {programme.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenGpGuide();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-teal-700" />
            <span>GP Referral Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};

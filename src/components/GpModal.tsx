import React, { useState } from 'react';
import { X, Stethoscope, CheckCircle2, Download, ShieldCheck, FileText } from 'lucide-react';

interface GpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const GpModal: React.FC<GpModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const checklistItems = [
    'Recent fasting blood glucose or HbA1c lab numbers (within last 6 months)',
    'Current daily medication list (e.g. Metformin, ACE inhibitors, statins)',
    'Home blood pressure logs or wearable heart rate readings',
    'Specific lifestyle goals: weight reduction, energy recovery, stress control',
    'Request for social prescribing or digital health self-management referral',
  ];

  const handleSimulateDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="gp-referral-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-stone-900 space-y-6"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-[10px] font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              NHS Primary Care Referral Guide
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 font-heading">
              How to Talk to Your GP About GOQii
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              GOQii operates in clinical collaboration with NHS General Practitioners to support chronic condition management through lifestyle medicine and continuous biometric telemetry.
            </p>
          </div>
        </div>

        {/* 3 Step Guide */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
            3 Steps to Discuss With Your GP Practice:
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                1
              </span>
              <div>
                <div className="font-bold text-stone-900">Book a Routine Chronic Review or Medication Review</div>
                <p className="text-stone-600 mt-0.5">
                  Request an appointment with your GP, practice nurse, or primary care social prescribing link worker.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                2
              </span>
              <div>
                <div className="font-bold text-stone-900">Mention GOQii DTAC Compliance & Modality Network</div>
                <p className="text-stone-600 mt-0.5">
                  Inform your doctor that GOQii is NHS DTAC assessed and works with Modality Partnership for remote diabetes, hypertension, and lifestyle pathways.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                3
              </span>
              <div>
                <div className="font-bold text-stone-900">Share Your Biometric Summaries for Clinical Deprescribing</div>
                <p className="text-stone-600 mt-0.5">
                  As your biomarkers normalize, your GP can safely review and taper prescriptions (e.g. blood pressure or diabetes medication) based on verified GOQii tracking reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GP Discussion Checklist */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-teal-600" />
              Pre-Appointment Checklist
            </span>
            <span className="text-[11px] text-teal-700 font-semibold">Bring to your appointment</span>
          </div>

          <div className="space-y-2">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleSimulateDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Checklist Downloaded (PDF)' : 'Download GP Discussion Checklist'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
          >
            <span>Have GOQii Contact My Practice</span>
          </button>
        </div>
      </div>
    </div>
  );
};

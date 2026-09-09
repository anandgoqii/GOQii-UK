import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { CareProgrammes } from './components/CareProgrammes';
import { FeaturedCareStory } from './components/FeaturedCareStory';
import { GoqiiMethodology } from './components/GoqiiMethodology';
import { ClinicalMethodology } from './components/ClinicalMethodology';
import { AppShowcase } from './components/AppShowcase';
import { HealthOutcomes } from './components/HealthOutcomes';
import { PatientStories } from './components/PatientStories';
import { Certifications } from './components/Certifications';
import { UkHealthcareNetwork } from './components/UkHealthcareNetwork';
import { AboutPlatform } from './components/AboutPlatform';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GpModal } from './components/GpModal';
import { ProgrammeModal } from './components/ProgrammeModal';
import { CareProgramme } from './types';

export default function App() {
  const [gpGuideOpen, setGpGuideOpen] = useState<boolean>(false);
  const [selectedProgramme, setSelectedProgramme] = useState<CareProgramme | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProgrammes = () => {
    const el = document.getElementById('care-programmes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-teal-600 selection:text-white font-['Poppins',sans-serif]">
      {/* GOQii 2.0 Header */}
      <Header
        onOpenGpGuide={() => setGpGuideOpen(true)}
        onOpenContact={scrollToContact}
      />

      <main className="flex-1">
        {/* Section 01: Hero */}
        <Hero
          onOpenGpGuide={() => setGpGuideOpen(true)}
          onExploreProgrammes={scrollToProgrammes}
        />

        {/* Section 02: How GOQii Works (People, Data & Prevention) */}
        <HowItWorks
          onOpenGpGuide={() => setGpGuideOpen(true)}
          onExploreProgrammes={scrollToProgrammes}
        />

        {/* Section 03: Care Programmes Carousel */}
        <CareProgrammes
          onSelectProgramme={(prog) => setSelectedProgramme(prog)}
          onOpenGpGuide={() => setGpGuideOpen(true)}
        />

        {/* Section 03b: Featured Care Story */}
        <FeaturedCareStory
          onSelectProgramme={(prog) => setSelectedProgramme(prog)}
          onOpenGpGuide={() => setGpGuideOpen(true)}
        />

        {/* Section 04a: The GOQii Methodology (Journey Beyond Conventional Care) */}
        <GoqiiMethodology />

        {/* Section 04b: The 4 Pillars of Lasting Health */}
        <ClinicalMethodology />

        {/* Section 05: Connected App & Medical Devices */}
        <AppShowcase />

        {/* Section 06: Clinical Outcomes & Evidence */}
        <HealthOutcomes />

        {/* Section 07: Real Patient Stories */}
        <PatientStories />

        {/* Section 08: Governance & Certifications (SECTION 12 — CERTIFICATIONS & COMPLIANCE) */}
        <Certifications />

        {/* Section 09: UK Healthcare Network & Modality Partnership */}
        <UkHealthcareNetwork />

        {/* Section 10: About GOQii UK (SECTION 14 — ABOUT GOQii UK) */}
        <AboutPlatform />

        {/* Section 11: Contact & GP Referral Hub */}
        <ContactSection onOpenGpGuide={() => setGpGuideOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenGpGuide={() => setGpGuideOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Interactive GP Referral Checklist Modal */}
      <GpModal
        isOpen={gpGuideOpen}
        onClose={() => setGpGuideOpen(false)}
      />

      {/* Interactive Care Programme Details Modal */}
      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onOpenGpGuide={() => {
          setSelectedProgramme(null);
          setGpGuideOpen(true);
        }}
      />
    </div>
  );
}

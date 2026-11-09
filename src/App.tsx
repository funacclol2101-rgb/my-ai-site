import React, { useState } from 'react';
import { Currency, ServiceGroupItem, ServiceComboPackage, ProjectCaseStudy } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { PricingSection } from './components/PricingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickChatFloatingButton } from './components/QuickChatFloatingButton';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('VND');
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlanForConsultation, setSelectedPlanForConsultation] = useState<string | undefined>();

  // Handlers for smooth scrolling and modal triggers
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (planName?: string) => {
    if (planName) {
      setSelectedPlanForConsultation(planName);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenConsultation = (planName?: string) => {
    setSelectedPlanForConsultation(planName);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceGroup = (group: ServiceGroupItem) => {
    const priceText = currency === 'VND' 
      ? `${group.priceVndRange} ${group.unitVnd}` 
      : `${group.priceUsdRange} ${group.unitUsd}`;
    handleOpenConsultation(`${group.name} (${priceText})`);
  };

  const handleSelectCombo = (combo: ServiceComboPackage) => {
    const priceText = currency === 'VND' 
      ? `${combo.priceVndDisplay} ${combo.unit}` 
      : `${combo.priceUsdDisplay} ${combo.unit}`;
    handleOpenConsultation(`${combo.name} (${priceText})`);
  };

  const handleCustomSelectionQuote = (selectedIds: string[], minPriceVnd: number, maxPriceVnd: number) => {
    const desc = `Tùy chọn kết hợp (${selectedIds.length} nhóm dịch vụ · Ước tính ${(minPriceVnd/1000000).toFixed(0)}–${(maxPriceVnd/1000000).toFixed(0)} triệu VNĐ)`;
    scrollToContact(desc);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#2C1E19] flex flex-col font-sans selection:bg-[#8F121E]/15 selection:text-[#8F121E]">
      
      {/* Sticky Header */}
      <Header
        currency={currency}
        onCurrencyToggle={setCurrency}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection
          onScrollToPricing={scrollToPricing}
          onScrollToPortfolio={scrollToPortfolio}
        />

        {/* Section 2: The TDC Manifesto */}
        <ManifestoSection />

        {/* Section 3: 5 Service Groups & Pricing Table */}
        <div id="services">
          <PricingSection
            currency={currency}
            onCurrencyToggle={setCurrency}
            onSelectServiceGroup={handleSelectServiceGroup}
            onSelectCombo={handleSelectCombo}
            onCustomSelectionQuote={handleCustomSelectionQuote}
          />
        </div>

        {/* Section 4: Selected Portfolio (Asymmetric Editorial Magazine Grid) */}
        <PortfolioSection
          onSelectProject={(project) => setActiveProject(project)}
        />

        {/* Section 5: 3-Step Collaborative Process */}
        <ProcessSection />

        {/* Section 6: Client Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Quick Consultation Form & Footer */}
        <ContactFooterSection
          initialPackage={selectedPlanForConsultation}
        />
      </main>

      {/* Project Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onBookConsultation={(projectTitle) => handleOpenConsultation(`Tư vấn dự án tương tự: ${projectTitle}`)}
      />

      {/* Direct Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        preselectedPackage={selectedPlanForConsultation}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating Quick Chat (Zalo / Messenger in Warm Editorial Palette) */}
      <QuickChatFloatingButton />

    </div>
  );
}

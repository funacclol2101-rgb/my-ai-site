import React from 'react';
import { ProjectCaseStudy } from '../types';
import { X, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onBookConsultation: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onBookConsultation,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2C1E19]/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F8F6F2] text-[#2C1E19] rounded-3xl border border-[#2C1E19]/20 shadow-2xl p-6 sm:p-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#2C1E19]/5 hover:bg-[#2C1E19]/10 text-[#2C1E19] transition-colors cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E8267] mb-2">
          <span>{project.number}</span>
          <span>·</span>
          <span>{project.client}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2C1E19] font-sans mb-6">
          {project.title}
        </h2>

        {/* Featured Image Frame */}
        <div className="overflow-hidden rounded-2xl border border-[#2C1E19]/15 mb-8 max-h-[380px] bg-[#F2EEE6]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Highlights & Metrics Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#F2EEE6] border border-[#2C1E19]/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#2C1E19]/60 font-semibold uppercase tracking-wider block">
              Kết quả đột phá đạt được:
            </span>
            <div className="text-2xl sm:text-3xl font-bold text-[#8F121E] font-sans tabular-nums mt-0.5">
              {project.resultMetric}
            </div>
            <div className="text-xs text-[#2C1E19]/80 font-medium">
              {project.resultLabel}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
            {project.categories.map((cat, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#2C1E19]/10 text-xs text-[#2C1E19] font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#2C1E19]/10">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E19]/60 mb-2">
              Thách thức ban đầu
            </h4>
            <p className="text-sm text-[#2C1E19]/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E19]/60 mb-2">
              Giải pháp sáng tạo từ TDC
            </h4>
            <p className="text-sm text-[#2C1E19]/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1E19]/60 mb-3">
            Hạng mục đầu việc thực hiện:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.fullDeliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#2C1E19]/85">
                <CheckCircle2 className="w-4 h-4 text-[#6E8267] shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <div className="p-5 rounded-2xl bg-[#6E8267]/10 border border-[#6E8267]/20 mb-8">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-[#8F121E] shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm text-[#2C1E19] italic leading-relaxed mb-2">
                “{project.founderQuote.text}”
              </p>
              <div className="text-xs font-bold text-[#2C1E19]">
                {project.founderQuote.author} · <span className="font-normal text-[#2C1E19]/70">{project.founderQuote.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#2C1E19]/20 text-xs font-medium text-[#2C1E19] hover:bg-[#2C1E19]/5 transition-colors cursor-pointer"
          >
            Đóng
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookConsultation(project.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#8F121E] hover:bg-[#740D17] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Tư vấn định hướng tương tự</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

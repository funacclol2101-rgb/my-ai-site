import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F8F6F2] relative border-b border-[#2C1E19]/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Subtle Tag */}
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-8">
          — ĐÁNH GIÁ TỪ ĐỐI TÁC —
        </div>

        {/* Minimalist Quote Icon */}
        <div className="flex justify-center mb-8">
          <Quote className="w-10 h-10 text-[#8F121E]/30 stroke-[1.2]" />
        </div>

        {/* Big Editorial Quote */}
        <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-[#2C1E19] leading-relaxed font-normal mb-10 text-balance min-h-[140px] flex items-center justify-center">
          “{current.quote}”
        </blockquote>

        {/* Author Attribution */}
        <div className="space-y-1 mb-10">
          <div className="text-base font-bold text-[#2C1E19]">
            {current.author}
          </div>
          <div className="text-xs text-[#2C1E19]/70">
            {current.role}, <span className="text-[#8F121E] font-medium">{current.company}</span>
          </div>
          <div className="inline-block px-3 py-1 mt-2 rounded-full bg-[#6E8267]/10 text-[#6E8267] text-[11px] font-semibold">
            {current.metric}
          </div>
        </div>

        {/* Client selector tabs */}
        <div className="flex items-center justify-center gap-3">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-xs px-4 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'border-[#2C1E19] bg-[#2C1E19] text-[#F8F6F2] font-semibold'
                  : 'border-[#2C1E19]/20 bg-transparent text-[#2C1E19]/60 hover:text-[#2C1E19] hover:border-[#2C1E19]/40'
              }`}
            >
              {t.company.split('(')[0].trim()}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

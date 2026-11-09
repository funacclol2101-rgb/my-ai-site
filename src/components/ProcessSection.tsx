import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F8F6F2] relative border-b border-[#2C1E19]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-3">
            [ QUY TRÌNH HỢP TÁC ]
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2C1E19] uppercase font-sans">
            Quy Trình Đồng Hành 3 Bước Tinh Gọn
          </h2>
          <p className="mt-3 text-base text-[#2C1E19]/75 font-normal">
            Không thủ tục rườm rà. Chúng tôi thiết lập nhịp độ làm việc kỷ luật để doanh nghiệp của bạn luôn nhìn thấy tiến độ và kết quả rõ ràng qua từng tuần.
          </p>
        </div>

        {/* 3 Columns Separated by Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2C1E19]/15 border-y border-[#2C1E19]/15">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="py-10 md:py-12 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between">
              <div>
                {/* Step Index in Editorial Serif */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-italic text-3xl sm:text-4xl text-[#8F121E]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#2C1E19]/50 uppercase">
                    GIAI ĐOẠN {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#2C1E19] uppercase mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#2C1E19]/75 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-[#2C1E19]/10 space-y-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/60">
                  Đầu ra cam kết:
                </div>
                {step.deliverables.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2 text-xs text-[#2C1E19]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8267] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

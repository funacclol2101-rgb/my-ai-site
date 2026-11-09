import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollToPricing: () => void;
  onScrollToPortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToPricing,
  onScrollToPortfolio,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#2C1E19]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 60% Typography & Value Proposition (col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E8267]/10 border border-[#6E8267]/20 text-[#6E8267] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E8267]"></span>
              <span>STUDIO SÁNG TẠO & TIẾP THỊ SỐ DÀNH CHO SME</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2C1E19] leading-[1.12] uppercase font-sans">
              Chiến Lược Số Hiện Đại <br />
              Giao Thoa Cùng{' '}
              <span className="font-serif-italic font-normal lowercase tracking-normal text-[#8F121E] px-1 text-5xl sm:text-6xl lg:text-7xl">
                nghệ thuật
              </span>{' '}
              Sáng Tạo.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#2C1E19]/80 font-normal leading-relaxed max-w-2xl">
              Chúng tôi đồng hành cùng các doanh nghiệp đang tăng trưởng xây dựng bản sắc riêng biệt,
              mở rộng độ phủ số và tối ưu chuyển đổi khách hàng—tinh gọn, thực chiến và không rập khuôn.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                type="button"
                onClick={onScrollToPricing}
                className="px-7 py-3.5 text-sm font-medium text-[#F8F6F2] bg-[#2C1E19] hover:bg-[#8F121E] rounded-full transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2 group cursor-pointer"
              >
                <span>Khám phá Bảng giá</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onScrollToPortfolio}
                className="text-sm font-semibold text-[#2C1E19] hover:text-[#8F121E] transition-colors flex items-center gap-2 group cursor-pointer py-2"
              >
                <span>Xem Dự án Tiêu biểu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-[#2C1E19]/10 grid grid-cols-3 gap-4 max-w-xl text-xs text-[#2C1E19]/70">
              <div>
                <span className="block font-semibold text-[#2C1E19] text-sm">Việt Nam SME</span>
                <span>Tối ưu cho văn hóa kinh doanh bản địa</span>
              </div>
              <div>
                <span className="block font-semibold text-[#2C1E19] text-sm">Cam Kết KPI</span>
                <span>Minh bạch số liệu và tiến độ</span>
              </div>
              <div>
                <span className="block font-semibold text-[#2C1E19] text-sm">Không Khóa Kênh</span>
                <span>Bàn giao 100% tài sản sáng tạo</span>
              </div>
            </div>

          </div>

          {/* Right Column: 40% Editorial Mood Board (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative space-y-4">
              
              {/* Top Row: Two Asymmetric Images */}
              <div className="grid grid-cols-2 gap-4 items-end">
                
                {/* Left: Detail product / craft texture */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#2C1E19]/10 bg-[#F2EEE6] shadow-xs">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/src/assets/images/hero_detail_craft_1793614203625.jpg"
                      alt="Chi tiết thủ công và chất liệu tự nhiên"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-[11px] font-medium text-[#2C1E19]/80 flex items-center justify-between border-t border-[#2C1E19]/5">
                    <span>Chất liệu & Cảm xúc</span>
                    <span className="font-serif-italic text-[#6E8267]">№ 01</span>
                  </div>
                </div>

                {/* Right: Arched top photo (Natural light creative space) */}
                <div className="group relative overflow-hidden rounded-t-[100px] rounded-b-2xl border border-[#2C1E19]/10 bg-[#F2EEE6] shadow-xs">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/src/assets/images/hero_studio_arch_1793614204003.jpg"
                      alt="Không gian studio sáng tạo tràn ngập ánh sáng"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-[11px] font-medium text-[#2C1E19]/80 flex items-center justify-between border-t border-[#2C1E19]/5">
                    <span>Không gian TDC Studio</span>
                    <span className="font-serif-italic text-[#8F121E]">Warm Studio</span>
                  </div>
                </div>

              </div>

              {/* Bottom Horizontal Frame: Creative Workspace / Behind the scenes */}
              <div className="group relative overflow-hidden rounded-2xl border border-[#2C1E19]/10 bg-[#F2EEE6] shadow-xs">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/src/assets/images/hero_creative_workspace_1793614203778.jpg"
                    alt="Bàn làm việc sáng tạo và nghiên cứu mood board"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3.5 flex items-center justify-between text-xs text-[#2C1E19] border-t border-[#2C1E19]/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8F121E]"></span>
                    <span className="font-medium">Quy trình sản xuất nội dung độc bản</span>
                  </div>
                  <span className="text-[11px] text-[#2C1E19]/60 font-mono">EST. 2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

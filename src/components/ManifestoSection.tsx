import React from 'react';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#F8F6F2] relative border-b border-[#2C1E19]/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Label */}
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-8">
          — Triết Lý Của Chúng Tôi —
        </div>

        {/* Manifesto Quote */}
        <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] text-[#2C1E19] leading-[1.35] tracking-tight font-normal text-balance max-w-4xl mx-auto mb-16">
          “Thay vì những giải pháp đại trà, TDC kiến tạo hệ sinh thái nội dung{' '}
          <span className="font-serif-italic text-[#8F121E] underline decoration-[#8F121E]/30 underline-offset-8">
            độc bản
          </span>
          —được đo ni đóng giày cho vị thế hiện tại và sẵn sàng cho mục tiêu bứt phá trong tương lai của doanh nghiệp bạn.”
        </blockquote>

        {/* 3 Metric Pillars with hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2C1E19]/10 pt-10 border-t border-[#2C1E19]/10 max-w-4xl mx-auto">
          
          <div className="py-6 md:py-2 md:px-8 text-center">
            <div className="text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#8F121E] tabular-nums mb-2">
              +140%
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#2C1E19]/90">
              Tăng Trưởng Độ Phủ
            </div>
            <p className="text-xs text-[#2C1E19]/60 mt-1 max-w-xs mx-auto">
              Trung bình mức tăng lượt tiếp cận thực tế sau 90 ngày đồng hành
            </p>
          </div>

          <div className="py-6 md:py-2 md:px-8 text-center">
            <div className="text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#2C1E19] tabular-nums mb-2">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#2C1E19]/90">
              Sáng Tạo Độc Bản
            </div>
            <p className="text-xs text-[#2C1E19]/60 mt-1 max-w-xs mx-auto">
              Không dùng template có sẵn hàng loạt, chuẩn hóa riêng theo ADN thương hiệu
            </p>
          </div>

          <div className="py-6 md:py-2 md:px-8 text-center">
            <div className="text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#6E8267] tabular-nums mb-2">
              3x
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#2C1E19]/90">
              Tỷ Lệ Gắn Bó
            </div>
            <p className="text-xs text-[#2C1E19]/60 mt-1 max-w-xs mx-auto">
              Gấp ba lần tỷ lệ tương tác và phản hồi tự nhiên từ tệp khách mục tiêu
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

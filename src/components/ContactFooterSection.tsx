import React, { useState } from 'react';
import { Check, Send, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ContactFooterSectionProps {
  initialPackage?: string;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactInfo: '',
    servicePlan: initialPackage || 'Gói Tăng Trưởng ($800/tháng - Phổ biến)',
    goals: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.contactInfo.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `TDC-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      contactInfo: '',
      servicePlan: 'Gói Tăng Trưởng ($800/tháng - Phổ biến)',
      goals: '',
    });
  };

  return (
    <footer id="contact" className="bg-[#2C1E19] text-[#F8F6F2] relative pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-3">
            — BẮT ĐẦU ĐỒNG HÀNH —
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F8F6F2] uppercase font-sans leading-tight">
            Sẵn Sàng Nâng Tầm <br />
            Hiện Diện Số Của Bạn?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F6F2]/75 font-normal">
            Hãy chia sẻ với TDC về hiện trạng và mục tiêu sắp tới của doanh nghiệp bạn. Chúng tôi sẽ phản hồi kèm bản đề xuất phân tích sơ bộ trong vòng 24 giờ làm việc.
          </p>
        </div>

        {/* Contact Form & Studio Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#F8F6F2]/10">
          
          {/* Left Column: Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#FAF8F5]/5 border border-[#F8F6F2]/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#6E8267]/20 text-[#6E8267] flex items-center justify-center mx-auto border border-[#6E8267]/40">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F6F2]">
                  Yêu Cầu Tư Vấn Đã Được Tiếp Nhận
                </h3>
                <p className="text-sm text-[#F8F6F2]/80 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <strong>{formData.fullName}</strong>. Chuyên viên chiến lược cấp cao của TDC Co., Ltd sẽ liên hệ qua <strong>{formData.contactInfo}</strong> trong vòng 24 giờ.
                </p>
                <div className="inline-block px-4 py-2 rounded-full bg-[#F8F6F2]/10 border border-[#F8F6F2]/15 text-xs font-mono text-[#F8F6F2]/90">
                  Mã hồ sơ: <span className="font-bold text-[#8F121E]">{ticketId}</span> · Gói quan tâm: {formData.servicePlan}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 text-xs font-semibold text-[#F8F6F2]/70 hover:text-[#F8F6F2] underline underline-offset-4 cursor-pointer"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/80">
                      Họ và tên của bạn <span className="text-[#8F121E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#2C1E19]/60 border border-[#F8F6F2]/20 text-[#F8F6F2] placeholder-[#F8F6F2]/30 text-sm focus:outline-none focus:border-[#8F121E] transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/80">
                      Tên doanh nghiệp / Thương hiệu
                    </label>
                    <input
                      type="text"
                      placeholder="Công ty / Brand của bạn"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#2C1E19]/60 border border-[#F8F6F2]/20 text-[#F8F6F2] placeholder-[#F8F6F2]/30 text-sm focus:outline-none focus:border-[#8F121E] transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone / Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/80">
                      Số điện thoại hoặc Email <span className="text-[#8F121E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="090x xxx xxx hoặc mail@company.com"
                      value={formData.contactInfo}
                      onChange={e => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#2C1E19]/60 border border-[#F8F6F2]/20 text-[#F8F6F2] placeholder-[#F8F6F2]/30 text-sm focus:outline-none focus:border-[#8F121E] transition-colors"
                    />
                  </div>

                  {/* Service Plan Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/80">
                      Gói dịch vụ quan tâm
                    </label>
                    <select
                      value={formData.servicePlan}
                      onChange={e => setFormData({ ...formData, servicePlan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#2C1E19] border border-[#F8F6F2]/20 text-[#F8F6F2] text-sm focus:outline-none focus:border-[#8F121E] transition-colors cursor-pointer"
                    >
                      <option value="1. Đánh giá và định hướng Marketing (2–4 triệu)">1. Đánh giá & định hướng Marketing (2–4 triệu / dự án)</option>
                      <option value="2. Lập kế hoạch Marketing (4–7 triệu)">2. Lập kế hoạch Marketing (4–7 triệu / kế hoạch)</option>
                      <option value="3. Content và Social Media (5–8 triệu / tháng)">3. Content & Social Media (5–8 triệu / tháng) - Phổ biến</option>
                      <option value="4. Digital Marketing (4–7 triệu / tháng)">4. Digital Marketing (4–7 triệu / tháng)</option>
                      <option value="5. Đo lường và cải thiện (2–3 triệu / dự án)">5. Đo lường & cải thiện (2–3 triệu / dự án)</option>
                      <option value="Gói Khởi Đầu Chiến Lược (Nhóm 1 + 2: 6–10 triệu)">Gói Khởi Đầu Chiến Lược (Nhóm 1 + 2: 6–10 triệu)</option>
                      <option value="Gói Vận Hành Tăng Trưởng (Nhóm 3 + 4: 9–14 triệu)">Gói Vận Hành Tăng Trưởng (Nhóm 3 + 4: 9–14 triệu / tháng)</option>
                      <option value="Gói Đồng Hành Toàn Diện (Trọn gói 5 nhóm: 16–26 triệu)">Gói Đồng Hành Toàn Diện (Trọn gói 5 nhóm: 16–26 triệu / tháng)</option>
                      <option value="Tùy chọn kết hợp riêng">Tùy chọn kết hợp riêng theo nhu cầu</option>
                    </select>
                  </div>

                </div>

                {/* Specific Goals / Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/80">
                    Mục tiêu hoặc thách thức tiếp thị số hiện tại
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Cần tăng độ nhận diện cho sản phẩm mới, cải thiện hình ảnh fanpage, hoặc tối ưu chi phí quảng cáo..."
                    value={formData.goals}
                    onChange={e => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#2C1E19]/60 border border-[#F8F6F2]/20 text-[#F8F6F2] placeholder-[#F8F6F2]/30 text-sm focus:outline-none focus:border-[#8F121E] transition-colors resize-none"
                  />
                </div>

                {/* Submit Pill Button in Oxblood */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#8F121E] hover:bg-[#a31523] text-[#F8F6F2] font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Đang gửi thông tin...' : 'GỬI YÊU CẦU TƯ VẤN (MIỄN PHÍ)'}</span>
                  </button>
                  <p className="text-[11px] text-center text-[#F8F6F2]/50 mt-2.5">
                    Bảo mật 100% dữ liệu. TDC cam kết không gửi thư rác hay chia sẻ thông tin cho bên thứ ba.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information & Direct Contact (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold font-serif-display text-[#F8F6F2] mb-1">
                  TDC Co., Ltd
                </h4>
                <p className="text-xs text-[#F8F6F2]/60 font-medium">
                  Công ty TNHH Top Digital Creative
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#F8F6F2]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8F121E] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#F8F6F2]">Trụ sở chính:</span>
                    <span className="text-xs text-[#F8F6F2]/70">
                      Tầng 6, Tháp Creative, Quận 1, TP. Hồ Chí Minh
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8F121E] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#F8F6F2]">Hotline / Zalo:</span>
                    <span className="text-xs text-[#F8F6F2]/70">
                      +84 (0) 90 829 3888 (Tư vấn trực tiếp 8:30 – 18:30)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8F121E] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-[#F8F6F2]">Email dự án:</span>
                    <span className="text-xs text-[#F8F6F2]/70">
                      hello@topdigitalcreative.vn
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours & Guarantee */}
              <div className="p-4 rounded-2xl bg-[#F8F6F2]/5 border border-[#F8F6F2]/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-semibold text-[#6E8267]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cam kết chất lượng TDC:</span>
                </div>
                <p className="text-[#F8F6F2]/70 leading-relaxed">
                  Tất cả tài nguyên sáng tạo (hình ảnh, video, kịch bản, file gốc) thuộc quyền sở hữu 100% của khách hàng ngay sau khi nghiệm thu.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[#F8F6F2]/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F8F6F2]/50 block mb-3">
                Kênh kết nối chính thức:
              </span>
              <div className="flex flex-wrap gap-3 text-xs">
                {['Facebook', 'Instagram', 'LinkedIn', 'Zalo Official'].map((social) => (
                  <span
                    key={social}
                    className="px-3 py-1.5 rounded-full bg-[#F8F6F2]/10 hover:bg-[#8F121E] transition-colors cursor-pointer text-[#F8F6F2]"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8F6F2]/60">
          <div>
            © 2026 TDC Co., Ltd (Top Digital Creative). Bảo lưu mọi quyền.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#services" className="hover:text-[#F8F6F2] transition-colors">Dịch vụ</a>
            <a href="#portfolio" className="hover:text-[#F8F6F2] transition-colors">Dự án</a>
            <a href="#pricing" className="hover:text-[#F8F6F2] transition-colors">Bảng giá</a>
            <a href="#process" className="hover:text-[#F8F6F2] transition-colors">Về TDC</a>
            <a href="#" className="hover:text-[#F8F6F2] transition-colors">Chính sách bảo mật</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  preselectedPackage?: string;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  preselectedPackage,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    company: '',
    plan: preselectedPackage || 'Gói Tăng Trưởng ($800/tháng - Phổ biến)',
    preferredDate: '',
    preferredTime: '10:00 - 11:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactInfo) return;

    const code = `TDC-CAL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C1E19]/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#F8F6F2] text-[#2C1E19] rounded-3xl border border-[#2C1E19]/20 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#2C1E19]/5 hover:bg-[#2C1E19]/10 text-[#2C1E19] transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#6E8267]/20 text-[#6E8267] flex items-center justify-center mx-auto border border-[#6E8267]/40">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold font-sans text-[#2C1E19]">
              Đặt Lịch Tư Vấn Thành Công!
            </h3>
            <p className="text-xs sm:text-sm text-[#2C1E19]/80 leading-relaxed max-w-sm mx-auto">
              Chuyên viên TDC đã ghi nhận lịch hẹn cùng <strong>{formData.fullName}</strong> ({formData.preferredTime} ngày {formData.preferredDate || 'sớm nhất'}).
            </p>
            <div className="p-3 rounded-xl bg-[#F2EEE6] border border-[#2C1E19]/10 text-xs font-mono">
              Mã xác nhận: <strong className="text-[#8F121E]">{bookingCode}</strong>
            </div>
            <p className="text-[11px] text-[#2C1E19]/60">
              Link phòng họp trực tuyến (Google Meet) sẽ được gửi đến email/số điện thoại của bạn.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#2C1E19] text-[#F8F6F2] text-xs font-semibold cursor-pointer hover:bg-[#8F121E] transition-colors"
            >
              Hoàn tất & Đóng
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8267] block mb-1">
                PHIÊN CHIẾN LƯỢC 1:1
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#2C1E19] font-sans">
                Đặt Lịch Tư Vấn Trực Tiếp Cùng TDC
              </h3>
              <p className="text-xs text-[#2C1E19]/70 mt-1">
                30–45 phút đánh giá hiện trạng truyền thông số và đề xuất giải pháp phù hợp ngân sách.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="090x xxx xxx"
                    value={formData.contactInfo}
                    onChange={e => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                    Tên thương hiệu / Công ty
                  </label>
                  <input
                    type="text"
                    placeholder="Tên doanh nghiệp"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                  Gói dịch vụ đang quan tâm
                </label>
                <select
                  value={formData.plan}
                  onChange={e => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                >
                  <option value="1. Đánh giá và định hướng Marketing (2–4 triệu)">1. Đánh giá & định hướng Marketing (2–4 triệu / dự án)</option>
                  <option value="2. Lập kế hoạch Marketing (4–7 triệu)">2. Lập kế hoạch Marketing (4–7 triệu / kế hoạch)</option>
                  <option value="3. Content và Social Media (5–8 triệu)">3. Content và Social Media (5–8 triệu / tháng)</option>
                  <option value="4. Digital Marketing (4–7 triệu)">4. Digital Marketing (4–7 triệu / tháng)</option>
                  <option value="5. Đo lường và cải thiện (2–3 triệu)">5. Đo lường và cải thiện (2–3 triệu / dự án)</option>
                  <option value="Gói Khởi Đầu Chiến Lược (Nhóm 1 + 2: 6–10 triệu)">Gói Khởi Đầu Chiến Lược (Nhóm 1 + 2: 6–10 triệu)</option>
                  <option value="Gói Vận Hành Tăng Trưởng (Nhóm 3 + 4: 9–14 triệu)">Gói Vận Hành Tăng Trưởng (Nhóm 3 + 4: 9–14 triệu / tháng)</option>
                  <option value="Gói Đồng Hành Toàn Diện (Trọn gói 5 nhóm: 16–26 triệu)">Gói Đồng Hành Toàn Diện (Trọn gói 5 nhóm: 16–26 triệu / tháng)</option>
                  <option value="Gói Tự Chọn Tùy Chỉnh">Gói Tự Chọn Tùy Chỉnh (Nhiều nhóm kết hợp)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                    Ngày mong muốn
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2C1E19]/70 mb-1">
                    Khung giờ phù hợp
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2C1E19]/15 text-xs focus:outline-none focus:border-[#8F121E]"
                  >
                    <option value="09:00 - 10:00">09:00 - 10:00 (Sáng)</option>
                    <option value="10:00 - 11:00">10:00 - 11:00 (Sáng)</option>
                    <option value="14:00 - 15:00">14:00 - 15:00 (Chiều)</option>
                    <option value="16:00 - 17:00">16:00 - 17:00 (Chiều)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#8F121E] hover:bg-[#740D17] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>XÁC NHẬN ĐẶT LỊCH TƯ VẤN</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

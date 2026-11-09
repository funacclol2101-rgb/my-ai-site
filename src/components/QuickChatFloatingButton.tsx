import React, { useState } from 'react';
import { MessageSquare, X, PhoneCall, ExternalLink, Check, Copy } from 'lucide-react';

export const QuickChatFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const zaloNumber = '0908293888';

  const handleCopyZalo = () => {
    navigator.clipboard.writeText(zaloNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-[#F8F6F2] border border-[#2C1E19]/15 shadow-2xl p-5 text-[#2C1E19] animate-fade-in space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#2C1E19]/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6E8267]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2C1E19]">
                Tư Vấn Nhanh (Zalo & Messenger)
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#2C1E19]/60 hover:text-[#2C1E19] hover:bg-[#2C1E19]/5 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#2C1E19]/80 leading-relaxed">
            Đội ngũ tư vấn TDC trực tuyến từ 8:30 đến 18:30 (Thứ 2 – Thứ 7). Bạn có thể kết nối ngay qua:
          </p>

          <div className="space-y-2.5">
            {/* Zalo option in warm editorial styling */}
            <div className="p-3 rounded-xl bg-[#F2EEE6] border border-[#2C1E19]/10 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold text-[#2C1E19]">Zalo Doanh Nghiệp</span>
                <span className="text-[11px] font-mono text-[#2C1E19]/70">{zaloNumber}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyZalo}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#2C1E19] text-[#F8F6F2] hover:bg-[#8F121E] transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
              </button>
            </div>

            {/* Messenger option */}
            <a
              href="https://m.me/topdigitalcreative"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#FAF8F5] border border-[#2C1E19]/10 flex items-center justify-between hover:border-[#8F121E]/40 transition-colors group"
            >
              <div>
                <span className="block text-xs font-bold text-[#2C1E19] group-hover:text-[#8F121E] transition-colors">
                  Facebook Messenger
                </span>
                <span className="text-[11px] text-[#2C1E19]/60">Phản hồi trung bình: 10 phút</span>
              </div>
              <ExternalLink className="w-4 h-4 text-[#2C1E19]/50 group-hover:text-[#8F121E]" />
            </a>

            {/* Direct hotline */}
            <a
              href="tel:0908293888"
              className="p-3 rounded-xl bg-[#8F121E]/10 border border-[#8F121E]/20 flex items-center justify-between text-[#8F121E] hover:bg-[#8F121E]/15 transition-colors"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span className="text-xs font-bold">Gọi trực tiếp Hotline</span>
              </div>
              <span className="text-xs font-mono font-bold">090 829 3888</span>
            </a>
          </div>

          <div className="text-[10px] text-center text-[#2C1E19]/50 pt-1">
            Không làm phiền · Tư vấn đúng chuyên môn
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 rounded-full bg-[#2C1E19] hover:bg-[#8F121E] text-[#F8F6F2] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-semibold tracking-wide border border-[#F8F6F2]/20 active:scale-95"
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <MessageSquare className="w-4 h-4 text-[#F8F6F2]" />
        )}
        <span>{isOpen ? 'Đóng' : 'Chat tư vấn nhanh'}</span>
      </button>

    </div>
  );
};

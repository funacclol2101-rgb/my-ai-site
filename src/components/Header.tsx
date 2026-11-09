import React, { useState } from 'react';
import { Currency } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currency: Currency;
  onCurrencyToggle: (currency: Currency) => void;
  onOpenConsultation: (packageId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyToggle,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F8F6F2]/90 border-b border-[#2C1E19]/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark */}
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold tracking-tight text-[#2C1E19] font-serif-display whitespace-nowrap shrink-0 group flex items-center gap-2"
        >
          <span>TDC Co., Ltd</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#6E8267]/15 text-[#6E8267] font-sans font-medium tracking-normal hidden sm:inline-block">
            Creative & Marketing
          </span>
        </a>

        {/* Zone 2: 4 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C1E19]/80">
          <a 
            href="#services" 
            className="hover:text-[#8F121E] transition-colors whitespace-nowrap"
          >
            Dịch vụ
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-[#8F121E] transition-colors whitespace-nowrap"
          >
            Dự án
          </a>
          <a 
            href="#pricing" 
            className="hover:text-[#8F121E] transition-colors whitespace-nowrap"
          >
            Bảng giá
          </a>
          <a 
            href="#process" 
            className="hover:text-[#8F121E] transition-colors whitespace-nowrap"
          >
            Về TDC
          </a>
        </nav>

        {/* Zone 3: Currency Switcher & Primary Action Pill Button */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Quick Currency Toggle Pill */}
          <div className="hidden sm:flex items-center bg-[#2C1E19]/5 p-0.5 rounded-full border border-[#2C1E19]/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onCurrencyToggle('USD')}
              className={`px-2.5 py-1 rounded-full transition-all whitespace-nowrap ${
                currency === 'USD'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
              title="Xem giá theo Đô la Mỹ"
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => onCurrencyToggle('VND')}
              className={`px-2.5 py-1 rounded-full transition-all whitespace-nowrap ${
                currency === 'VND'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
              title="Xem giá theo Đồng Việt Nam"
            >
              VNĐ (đ)
            </button>
          </div>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={() => onOpenConsultation()}
            className="px-5 py-2.5 text-xs md:text-sm font-medium text-[#F8F6F2] bg-[#2C1E19] hover:bg-[#8F121E] rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-98 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Đặt lịch tư vấn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2C1E19] hover:bg-[#2C1E19]/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2C1E19]/10 bg-[#F8F6F2] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#2C1E19]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F121E]"
            >
              Dịch vụ
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F121E]"
            >
              Dự án
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F121E]"
            >
              Bảng giá
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#8F121E]"
            >
              Về TDC
            </a>
          </nav>

          <div className="pt-4 border-t border-[#2C1E19]/10 flex items-center justify-between">
            <span className="text-xs text-[#2C1E19]/70">Đơn vị tiền tệ:</span>
            <div className="flex items-center bg-[#2C1E19]/5 p-0.5 rounded-full border border-[#2C1E19]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onCurrencyToggle('USD')}
                className={`px-3 py-1 rounded-full ${currency === 'USD' ? 'bg-[#2C1E19] text-[#F8F6F2]' : 'text-[#2C1E19]/70'}`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => onCurrencyToggle('VND')}
                className={`px-3 py-1 rounded-full ${currency === 'VND' ? 'bg-[#2C1E19] text-[#F8F6F2]' : 'text-[#2C1E19]/70'}`}
              >
                VNĐ (đ)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

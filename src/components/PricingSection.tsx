import React, { useState } from 'react';
import { Currency, ServiceGroupItem, ServiceComboPackage } from '../types';
import { SERVICE_GROUPS, COMBO_PACKAGES } from '../data/content';
import { Check, Sparkles, Plus, Calculator, ArrowRight, Table, Layers, FileCheck, CheckCircle2 } from 'lucide-react';

interface PricingSectionProps {
  currency: Currency;
  onCurrencyToggle: (currency: Currency) => void;
  onSelectServiceGroup: (group: ServiceGroupItem) => void;
  onSelectCombo: (combo: ServiceComboPackage) => void;
  onCustomSelectionQuote: (selectedIds: string[], minPrice: number, maxPrice: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currency,
  onCurrencyToggle,
  onSelectServiceGroup,
  onSelectCombo,
  onCustomSelectionQuote,
}) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table' | 'combos'>('cards');
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>(['content-social', 'digital-marketing']);

  const toggleGroup = (id: string) => {
    setSelectedGroupIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate dynamic sum for selected service groups
  const calculateTotal = () => {
    const selected = SERVICE_GROUPS.filter(g => selectedGroupIds.includes(g.id));
    const minVnd = selected.reduce((sum, g) => sum + g.minVnd, 0);
    const maxVnd = selected.reduce((sum, g) => sum + g.maxVnd, 0);
    const minUsd = selected.reduce((sum, g) => sum + g.minUsd, 0);
    const maxUsd = selected.reduce((sum, g) => sum + g.maxUsd, 0);
    return { minVnd, maxVnd, minUsd, maxUsd, count: selected.length };
  };

  const totals = calculateTotal();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F8F6F2] relative border-b border-[#2C1E19]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#2C1E19]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-3">
              <span>BẢNG GIÁ & PHẠM VI DỊCH VỤ MINH BẠCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2C1E19] uppercase font-sans">
              Các Nhóm Dịch Vụ & Báo Giá Dự Kiến
            </h2>
            <p className="mt-3 text-base text-[#2C1E19]/75 font-normal">
              Chi tiết phạm vi công việc, sản phẩm bàn giao thực tế và mức ngân sách dự kiến cho từng giai đoạn tiếp thị số.
            </p>
          </div>

          {/* Controls: View Mode & Currency Switcher */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-[#F2EEE6] p-1 rounded-full border border-[#2C1E19]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                    : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Thẻ chi tiết</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                    : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Bảng so sánh</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('combos')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'combos'
                    ? 'bg-[#8F121E] text-[#F8F6F2] shadow-xs'
                    : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gói Combo</span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center bg-[#F2EEE6] p-1 rounded-full border border-[#2C1E19]/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onCurrencyToggle('VND')}
                className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currency === 'VND'
                    ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                    : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
                }`}
              >
                VNĐ (đ)
              </button>
              <button
                type="button"
                onClick={() => onCurrencyToggle('USD')}
                className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                    : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
                }`}
              >
                USD ($)
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MODE 1: EDITORIAL SERVICE CARDS (5 NHÓM DỊCH VỤ)
           ========================================================================= */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICE_GROUPS.map((group) => {
              const isSelected = selectedGroupIds.includes(group.id);
              const isHighlighted = group.highlighted;

              return (
                <div
                  key={group.id}
                  className={`flex flex-col justify-between rounded-3xl border transition-all duration-300 relative ${
                    isHighlighted
                      ? 'border-[#8F121E] bg-[#FAF8F5] shadow-sm ring-1 ring-[#8F121E]/20'
                      : 'border-[#2C1E19]/15 bg-[#F2EEE6]/50 hover:bg-[#F2EEE6]'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#8F121E] text-[#F8F6F2] text-[10px] font-bold tracking-wider rounded-full uppercase shadow-xs flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>PHỔ BIẾN NHẤT</span>
                    </div>
                  )}

                  <div className="p-7 sm:p-8">
                    {/* Header index and price */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-serif-italic text-2xl text-[#8F121E]">
                        {group.order}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-[#2C1E19]/50 uppercase">
                        NHÓM DỊCH VỤ {group.order}
                      </span>
                    </div>

                    {/* Group Title */}
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#2C1E19] mb-4">
                      {group.name}
                    </h3>

                    {/* Price Range Banner */}
                    <div className="py-3 px-4 rounded-xl bg-white border border-[#2C1E19]/10 mb-6 flex items-baseline justify-between">
                      <span className="text-xs text-[#2C1E19]/60 font-medium">Giá dự kiến:</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-[#8F121E] font-sans tabular-nums">
                          {currency === 'VND' ? group.priceVndRange : group.priceUsdRange}
                        </span>
                        <span className="text-xs text-[#2C1E19]/70 font-medium pl-1">
                          {currency === 'VND' ? group.unitVnd : group.unitUsd}
                        </span>
                      </div>
                    </div>

                    {/* Scope of Work */}
                    <div className="mb-5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2C1E19]/60 mb-2">
                        Phạm vi công việc:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2C1E19]/80 leading-relaxed bg-[#F8F6F2]/60 p-3 rounded-xl border border-[#2C1E19]/5">
                        {group.scope}
                      </p>
                    </div>

                    {/* Deliverables Bullets */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#6E8267] mb-2">
                        Sản phẩm bàn giao:
                      </h4>
                      {group.deliverableBullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C1E19]/85 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8267] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-7 sm:p-8 pt-0 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.id)}
                      className={`flex-1 py-2.5 px-4 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                        isSelected
                          ? 'bg-[#6E8267] text-white border-[#6E8267]'
                          : 'bg-white hover:bg-[#F2EEE6] text-[#2C1E19] border-[#2C1E19]/20'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isSelected ? 'Đã thêm vào bộ chọn' : 'Thêm vào bộ chọn'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectServiceGroup(group)}
                      className="p-2.5 rounded-full bg-[#2C1E19] hover:bg-[#8F121E] text-white transition-colors cursor-pointer shrink-0"
                      title="Nhận tư vấn nhóm dịch vụ này"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            MODE 2: SPECIFICATION TABLE VIEW (BẢNG 4 CỘT CHUẨN)
           ========================================================================= */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-3xl border border-[#2C1E19]/15 bg-white shadow-xs mb-16">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[#2C1E19] text-[#F8F6F2] text-xs uppercase tracking-wider font-semibold font-sans">
                  <th className="py-4 px-6 w-1/5 border-r border-[#F8F6F2]/10">Nhóm dịch vụ</th>
                  <th className="py-4 px-6 w-2/5 border-r border-[#F8F6F2]/10">Phạm vi công việc</th>
                  <th className="py-4 px-6 w-1/4 border-r border-[#F8F6F2]/10">Sản phẩm bàn giao</th>
                  <th className="py-4 px-6 w-1/6 text-right">Giá dự kiến</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C1E19]/10 text-xs sm:text-sm text-[#2C1E19]">
                {SERVICE_GROUPS.map((group) => {
                  const isChecked = selectedGroupIds.includes(group.id);
                  return (
                    <tr 
                      key={group.id}
                      className={`hover:bg-[#F2EEE6]/50 transition-colors ${
                        isChecked ? 'bg-[#FAF8F5]' : ''
                      }`}
                    >
                      <td className="py-5 px-6 font-bold align-top border-r border-[#2C1E19]/10">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleGroup(group.id)}
                            className="mt-1 accent-[#8F121E] cursor-pointer"
                          />
                          <div>
                            <span className="block text-sm">{group.name}</span>
                            <span className="text-[11px] text-[#6E8267] font-medium font-serif-italic">
                              Giai đoạn {group.order}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 px-6 leading-relaxed align-top border-r border-[#2C1E19]/10 text-[#2C1E19]/80">
                        {group.scope}
                      </td>

                      <td className="py-5 px-6 leading-relaxed align-top border-r border-[#2C1E19]/10">
                        <div className="space-y-1.5 text-xs text-[#2C1E19]/85">
                          {group.deliverableBullets.map((b, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-[#6E8267] font-bold">·</span>
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </td>

                      <td className="py-5 px-6 align-top text-right whitespace-nowrap">
                        <div className="font-bold text-base text-[#8F121E] tabular-nums font-sans">
                          {currency === 'VND' ? group.priceVndRange : group.priceUsdRange}
                        </div>
                        <div className="text-xs text-[#2C1E19]/60 font-medium">
                          {currency === 'VND' ? group.unitVnd : group.unitUsd}
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectServiceGroup(group)}
                          className="mt-2 text-[11px] font-semibold text-[#2C1E19] hover:text-[#8F121E] underline cursor-pointer inline-block"
                        >
                          Tư vấn gói này →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* =========================================================================
            MODE 3: COMBINATION & FULL SOLUTIONS (GÓI COMBO TỐI ƯU CHI PHÍ)
           ========================================================================= */}
        {viewMode === 'combos' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {COMBO_PACKAGES.map((combo) => {
              const isHighlighted = combo.highlighted;
              return (
                <div
                  key={combo.id}
                  className={`flex flex-col justify-between rounded-3xl border transition-all duration-300 relative ${
                    isHighlighted
                      ? 'border-[#8F121E] bg-[#FAF8F5] shadow-md ring-1 ring-[#8F121E]/30'
                      : 'border-[#2C1E19]/15 bg-[#F2EEE6]/60 hover:bg-[#F2EEE6]'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8F121E] text-[#F8F6F2] text-[11px] font-bold tracking-wider rounded-full uppercase shadow-xs flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{combo.badge || 'PHỔ BIẾN NHẤT'}</span>
                    </div>
                  )}

                  <div className="p-8 sm:p-10">
                    <div className="text-xs font-mono font-medium tracking-widest text-[#2C1E19]/60 uppercase mb-3">
                      {combo.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2C1E19] uppercase mb-2 font-sans">
                      {combo.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2C1E19]/70 mb-6 min-h-[40px] leading-relaxed">
                      {combo.idealFor}
                    </p>

                    {/* Price Range */}
                    <div className="py-5 border-y border-[#2C1E19]/10 mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl font-bold tracking-tight tabular-nums ${
                          isHighlighted ? 'text-[#8F121E]' : 'text-[#2C1E19]'
                        }`}>
                          {currency === 'VND' ? combo.priceVndDisplay : combo.priceUsdDisplay}
                        </span>
                        <span className="text-xs font-medium text-[#2C1E19]/60">{combo.unit}</span>
                      </div>
                      <div className="text-[11px] text-[#6E8267] font-medium mt-1">
                        Bao gồm: {combo.includedServices.join(' + ')}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#2C1E19]/80 mb-2">
                        Quyền lợi & hạng mục thực hiện:
                      </div>
                      {combo.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C1E19]/85 leading-snug">
                          <Check className="w-4 h-4 text-[#8F121E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 pt-0">
                    <button
                      type="button"
                      onClick={() => onSelectCombo(combo)}
                      className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow flex items-center justify-center gap-2 cursor-pointer ${
                        isHighlighted
                          ? 'bg-[#8F121E] text-[#F8F6F2] hover:bg-[#740D17]'
                          : 'bg-[#2C1E19] text-[#F8F6F2] hover:bg-[#8F121E]'
                      }`}
                    >
                      <span>{combo.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            INTERACTIVE SERVICE CALCULATOR / BỘ CHỌN & TÍNH GIÁ LINH HOẠT
           ========================================================================= */}
        <div className="rounded-3xl border border-[#2C1E19]/15 bg-[#FAF8F5] p-8 md:p-12 shadow-xs">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#2C1E19]/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>BỘ CHỌN DỊCH VỤ LINH HOẠT THEO NHU CẦU</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2C1E19] uppercase font-sans">
                Tự Chọn Các Nhóm Dịch Vụ Cần Triển Khai
              </h3>
              <p className="text-sm text-[#2C1E19]/75 mt-1">
                Tích chọn các giai đoạn doanh nghiệp của bạn đang cần hỗ trợ để nhận ước tính ngân sách tức thì:
              </p>
            </div>

            <div className="text-xs text-[#2C1E19]/70 bg-[#F2EEE6] px-4 py-2 rounded-full border border-[#2C1E19]/10">
              Đã chọn: <strong className="text-[#8F121E]">{totals.count} / 5 nhóm</strong>
            </div>
          </div>

          {/* Quick Toggle Checkbox Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {SERVICE_GROUPS.map((group) => {
              const isChecked = selectedGroupIds.includes(group.id);
              return (
                <div
                  key={group.id}
                  onClick={() => toggleGroup(group.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between ${
                    isChecked
                      ? 'border-[#8F121E] bg-[#F2EEE6] shadow-xs ring-1 ring-[#8F121E]/20'
                      : 'border-[#2C1E19]/10 bg-white hover:border-[#2C1E19]/25'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-[#8F121E] text-white' : 'border border-[#2C1E19]/30 bg-transparent'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#2C1E19]">
                        {group.name}
                      </span>
                      <span className="text-[11px] text-[#6E8267] font-mono">
                        {currency === 'VND' ? `${group.priceVndRange} ${group.unitVnd}` : `${group.priceUsdRange} ${group.unitUsd}`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Summary Bar */}
          <div className="bg-[#2C1E19] text-[#F8F6F2] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-[#F8F6F2]/60">
                Ước tính ngân sách dự kiến ({totals.count} nhóm dịch vụ đã chọn):
              </div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF8F5] tabular-nums font-sans">
                  {currency === 'VND' 
                    ? `${(totals.minVnd / 1000000).toFixed(0)} – ${(totals.maxVnd / 1000000).toFixed(0)} triệu VNĐ`
                    : `$${totals.minUsd} – $${totals.maxUsd} USD`
                  }
                </span>
                <span className="text-xs text-[#F8F6F2]/70">
                  (Tùy quy mô và thời lượng dự án)
                </span>
              </div>
              <p className="text-xs text-[#F8F6F2]/70 pt-1">
                ✓ Báo cáo nghiệm thu minh bạch · Bàn giao 100% file thiết kế và quyền quản trị kênh
              </p>
            </div>

            <button
              type="button"
              disabled={totals.count === 0}
              onClick={() => onCustomSelectionQuote(selectedGroupIds, totals.minVnd, totals.maxVnd)}
              className="px-8 py-4 rounded-full bg-[#8F121E] hover:bg-[#740D17] text-white font-semibold text-sm transition-all duration-200 shadow hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Nhận báo giá nhóm đã chọn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

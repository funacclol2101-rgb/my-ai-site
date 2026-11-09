import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { ProjectCaseStudy } from '../types';
import { ArrowUpRight, Plus, Eye } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'social') return project.categories.some(c => c.toLowerCase().includes('social') || c.toLowerCase().includes('reels'));
    if (activeFilter === 'ads') return project.categories.some(c => c.toLowerCase().includes('ads') || c.toLowerCase().includes('quảng cáo'));
    if (activeFilter === 'brand') return project.categories.some(c => c.toLowerCase().includes('tái định vị') || c.toLowerCase().includes('nhận diện'));
    return true;
  });

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#F8F6F2] relative border-b border-[#2C1E19]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#2C1E19]/10">
          <div>
            <div className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6E8267] mb-3">
              [ DỰ ÁN CHỌN LỌC ]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2C1E19] uppercase font-sans">
              Những Câu Chuyện Định Hình Bản Sắc & Tăng Trưởng
            </h2>
            <p className="mt-3 text-base text-[#2C1E19]/75 font-normal max-w-2xl">
              Mỗi thương hiệu là một tác phẩm độc bản. Chúng tôi đo lường thành công bằng sự chuyển hóa trong cảm nhận khách hàng và chỉ số doanh số thực tế.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2EEE6] rounded-full border border-[#2C1E19]/10 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
            >
              Tất cả dự án
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('social')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === 'social'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
            >
              Social & Reels
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ads')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === 'ads'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
            >
              Quảng cáo Ads
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('brand')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === 'brand'
                  ? 'bg-[#2C1E19] text-[#F8F6F2] shadow-xs'
                  : 'text-[#2C1E19]/70 hover:text-[#2C1E19]'
              }`}
            >
              Tái định vị
            </button>
          </div>
        </div>

        {/* Asymmetrical Editorial Magazine Grid (Pair 1: Large 4:5 + Square 1:1; Pair 2: Square 1:1 + Large 4:5) */}
        <div className="space-y-12">
          
          {/* Pair 1: Project 1 (Maison & Co. 4:5) + Project 2 (L'Étoile 1:1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Project 01 (Col 7) */}
            {filteredProjects.find(p => p.id === 'maison-and-co') && (
              <div 
                onClick={() => onSelectProject(filteredProjects.find(p => p.id === 'maison-and-co')!)}
                className="lg:col-span-7 group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl border border-[#2C1E19]/15 bg-[#F2EEE6] relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src="/src/assets/images/project_maison_editorial_1793614204975.jpg"
                      alt="Maison & Co. Editorial Lookbook"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Subtle Floating Tag */}
                  <div className="absolute top-5 left-5 px-3 py-1 bg-[#F8F6F2]/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#2C1E19] border border-[#2C1E19]/10">
                    DỰ ÁN 01 · THỜI TRANG & BÁN LẺ
                  </div>

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#2C1E19] text-[#F8F6F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Metadata block */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#2C1E19]/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C1E19] group-hover:text-[#8F121E] transition-colors">
                      Maison & Co. — Tái Định Vị & Tiếp Thị Bán Lẻ
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#2C1E19]/70 mt-1">
                      <span>Tái định vị</span>
                      <span>·</span>
                      <span>Social Media</span>
                      <span>·</span>
                      <span>Meta Ads</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold font-sans text-[#8F121E] tabular-nums">
                      +85%
                    </div>
                    <div className="text-[11px] text-[#2C1E19]/60 uppercase tracking-wider">
                      Khách hàng tiềm năng
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 02 (Col 5) */}
            {filteredProjects.find(p => p.id === 'letoile-ceramics') && (
              <div 
                onClick={() => onSelectProject(filteredProjects.find(p => p.id === 'letoile-ceramics')!)}
                className="lg:col-span-5 group cursor-pointer lg:mt-12"
              >
                <div className="overflow-hidden rounded-3xl border border-[#2C1E19]/15 bg-[#F2EEE6] relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/src/assets/images/project_ceramics_still_1793614204757.jpg"
                      alt="L'Étoile Fine Ceramics"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute top-5 left-5 px-3 py-1 bg-[#F8F6F2]/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#2C1E19] border border-[#2C1E19]/10">
                    DỰ ÁN 02 · GỐM & NGHỆ THUẬT SỐNG
                  </div>

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#2C1E19] text-[#F8F6F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#2C1E19]/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C1E19] group-hover:text-[#8F121E] transition-colors">
                      L'Étoile Ceramics — Chiến Dịch ROAS
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#2C1E19]/70 mt-1">
                      <span>Quảng cáo chuyển đổi</span>
                      <span>·</span>
                      <span>Visual Storytelling</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold font-sans text-[#8F121E] tabular-nums">
                      4.2x ROAS
                    </div>
                    <div className="text-[11px] text-[#2C1E19]/60 uppercase tracking-wider">
                      Hiệu quả chuyển đổi
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Pair 2: Project 3 (Botanist 1:1) + Project 4 (An Nam Heritage 4:5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Project 03 (Col 5) */}
            {filteredProjects.find(p => p.id === 'botanist-lab') && (
              <div 
                onClick={() => onSelectProject(filteredProjects.find(p => p.id === 'botanist-lab')!)}
                className="lg:col-span-5 group cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl border border-[#2C1E19]/15 bg-[#F2EEE6] relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/src/assets/images/project_botanist_visual_1793614220836.jpg"
                      alt="The Botanist Lab Skincare"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute top-5 left-5 px-3 py-1 bg-[#F8F6F2]/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#2C1E19] border border-[#2C1E19]/10">
                    DỰ ÁN 03 · DƯỠNG DA SINH THÁI
                  </div>

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#2C1E19] text-[#F8F6F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#2C1E19]/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C1E19] group-hover:text-[#8F121E] transition-colors">
                      The Botanist Lab — Sản Xuất Reels
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#2C1E19]/70 mt-1">
                      <span>Sản xuất Reels</span>
                      <span>·</span>
                      <span>Nhiếp ảnh sản phẩm</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold font-sans text-[#8F121E] tabular-nums">
                      120.000+
                    </div>
                    <div className="text-[11px] text-[#2C1E19]/60 uppercase tracking-wider">
                      Lượt xem tự nhiên
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 04 (Col 7) */}
            {filteredProjects.find(p => p.id === 'annam-heritage') && (
              <div 
                onClick={() => onSelectProject(filteredProjects.find(p => p.id === 'annam-heritage')!)}
                className="lg:col-span-7 group cursor-pointer lg:-mt-12"
              >
                <div className="overflow-hidden rounded-3xl border border-[#2C1E19]/15 bg-[#F2EEE6] relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src="/src/assets/images/project_annam_heritage_1793614221107.jpg"
                      alt="An Nam Heritage Craft Exhibition"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute top-5 left-5 px-3 py-1 bg-[#F8F6F2]/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[#2C1E19] border border-[#2C1E19]/10">
                    DỰ ÁN 04 · THỦ CÔNG DI SẢN VIỆT
                  </div>

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#2C1E19] text-[#F8F6F2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#2C1E19]/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2C1E19] group-hover:text-[#8F121E] transition-colors">
                      An Nam Heritage — Ra Mắt Đa Kênh
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#2C1E19]/70 mt-1">
                      <span>Chiến dịch ra mắt</span>
                      <span>·</span>
                      <span>Đồng bộ nhận diện</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold font-sans text-[#8F121E] tabular-nums">
                      Chuẩn hóa 100%
                    </div>
                    <div className="text-[11px] text-[#2C1E19]/60 uppercase tracking-wider">
                      Hệ thống nhận diện số
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

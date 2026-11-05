import React, { useState } from 'react';
import { URBAN_ZONES } from '../data/spongeCityData';
import { UrbanZone } from '../types/spongeCity';
import { School, Recycle, Trees, ArrowRight, CheckCircle2, MapPin, ShieldAlert, Sparkles, Layers } from 'lucide-react';

interface SpatialOverviewProps {
  onSelectSimulation: () => void;
  onSelectEcoCell: () => void;
}

export const SpatialOverview: React.FC<SpatialOverviewProps> = ({
  onSelectSimulation,
  onSelectEcoCell,
}) => {
  const [selectedZone, setSelectedZone] = useState<UrbanZone>(URBAN_ZONES[0]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <School className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'community':
        return <Recycle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'park':
        return <Trees className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Visual Section */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Phường Tân Mỹ, TP. Hồ Chí Minh</span>
                <span aria-hidden="true">·</span>
                <span>Mô hình Đô thị Thích ứng Biến đổi Khí hậu</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hệ Thống Đô Thị Bọt Biển Xanh &amp; Kinh Tế Tuần Hoàn
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Giải pháp toàn diện giải quyết bài toán ngập úng kép (mưa lớn và triều cường) tại Phường Tân Mỹ, kết hợp tái chế 100% rác thải nhựa thành khối lát nền bọt biển đa năng <strong>Eco-Cell</strong>, bổ sung tầng nước ngầm và chống sụt lún địa tầng.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onSelectSimulation}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <span>Chạy mô phỏng Mưa &amp; Triều cường</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onSelectEcoCell}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Khám phá Cấu trúc Eco-Cell
                </button>
              </div>
            </div>

            {/* Quick Context Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">1.450</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Tốc độ thấm (mm/h)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400 tabular-nums">15.000</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Hầm trữ ngầm (m³)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 tabular-nums">100%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Nhựa rác tuần hoàn</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <img
              src="/src/assets/images/hero_sponge_city_tanmy_1793890429201.jpg"
              alt="Mô hình tổng quan đô thị bọt biển Phường Tân Mỹ"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs lg:hidden">
              Phối cảnh quy hoạch Đô thị bọt biển tại Phường Tân Mỹ
            </div>
          </div>
        </div>
      </section>

      {/* 3 Trọng Điểm Không Gian Mô Hình */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Cấu trúc không gian tích hợp
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Ba Phân Khu Trọng Điểm Tại Phường Tân Mỹ
            </h2>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Nhấp chọn phân khu để xem chi tiết kỹ thuật và giải pháp triển khai
          </div>
        </div>

        {/* Zone Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {URBAN_ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-5 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(zone.category)}
                  </div>
                  {isSelected && (
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Đang chọn</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white line-clamp-1">
                  {zone.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {zone.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedZone.image}
                alt={selectedZone.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                {selectedZone.role}
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {getCategoryIcon(selectedZone.category)}
                  <span>Phân khu chức năng đô thị Tân Mỹ</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedZone.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {selectedZone.fullDesc}
                </p>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Điểm nhấn kỹ thuật &amp; xã hội:
                  </p>
                  <ul className="space-y-1.5">
                    {selectedZone.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics Band */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {selectedZone.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Flow Diagram: Chuỗi liên kết 3 phân khu */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-6 sm:p-8">
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          Mô hình kết nối liên hoàn
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mt-1">
          Dòng Lưu Chuyển Tài Nguyên &amp; Nước Giữa 3 Phân Khu
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl">
          Rác thải nhựa từ cộng đồng trở thành vật liệu lát nền cho trường học và công viên. Nước mưa trên toàn phường được thấm hút qua khối lát và thu gom an toàn về hầm ngầm công viên trước khi xả ra sông lớn.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Node 1 */}
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <Recycle className="w-4 h-4" />
              <span>Bước 1: Trạm Thu Gom Rác</span>
            </div>
            <h4 className="text-sm font-bold text-white">Nguồn Nguyên Liệu Đầu Vào</h4>
            <p className="text-xs text-slate-300">
              Thu gom phế liệu nhựa sinh hoạt (nắp chai, xô chậu, bao bì HDPE/PP) từ các hộ dân Phường Tân Mỹ. Băm nhỏ và đúc ép nhiệt thành khối Eco-Cell.
            </p>
            <div className="text-[11px] text-emerald-300 font-mono bg-emerald-950/60 p-2 rounded-md">
              ➡ Cung ứng 700 khối Eco-Cell/tháng
            </div>
          </div>

          {/* Node 2 */}
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
              <School className="w-4 h-4" />
              <span>Bước 2: Trường Lê Văn Tám</span>
            </div>
            <h4 className="text-sm font-bold text-white">Ứng Dụng Lát Nền &amp; Giáo Dục STEM</h4>
            <p className="text-xs text-slate-300">
              Lát 1.200 m² sân trường và vỉa hè bằng Eco-Cell. Nước mưa thấm tức thì không đọng vũng, học sinh học tập nguyên lý kinh tế tuần hoàn và bọt biển xanh.
            </p>
            <div className="text-[11px] text-sky-300 font-mono bg-sky-950/60 p-2 rounded-md">
              ➡ Thấm 180 m³ nước mưa/tháng vào đất
            </div>
          </div>

          {/* Node 3 */}
          <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold">
              <Trees className="w-4 h-4" />
              <span>Bước 3: Công Viên &amp; Hầm Ngầm</span>
            </div>
            <h4 className="text-sm font-bold text-white">Điều Tiết Lũ &amp; Bơm Cưỡng Bức</h4>
            <p className="text-xs text-slate-300">
              Dung tích hầm ngầm 15.000 m³ trữ nước mưa dồn về. Van một chiều ngăn triều sông dâng, máy bơm cưỡng bức kích hoạt tự động xả nước khi nguy cấp.
            </p>
            <div className="text-[11px] text-teal-300 font-mono bg-teal-950/60 p-2 rounded-md">
              ➡ Bảo vệ 100% diện tích không ngập úng
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

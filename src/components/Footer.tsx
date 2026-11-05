import React from 'react';
import { Waves, MapPin, School, Recycle } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Waves className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                Đô Thị Bọt Biển Tân Mỹ
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Hệ thống giải pháp tích hợp: Mô hình đô thị bọt biển xanh chống ngập triều cường và kinh tế tuần hoàn tái chế rác nhựa thành khối lát nền đa năng Eco-Cell tại Phường Tân Mỹ, TP. Hồ Chí Minh.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Phường Tân Mỹ, Quận 7, TP. Hồ Chí Minh</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3 text-xs">
            <p className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Phân Khu Trọng Điểm
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('spatial')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Trường Tiểu học Lê Văn Tám (STEM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('spatial')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Trạm Thu gom Rác Phường Tân Mỹ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('spatial')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Công viên &amp; Hầm ngầm 15.000 m³
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 text-xs">
            <p className="font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Mô Phỏng &amp; Kỹ Thuật
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('hydrology')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Mô phỏng Mưa &amp; Triều cường (+1.75m)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('ecocell')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Kết cấu Vòm Bóng Rỗng Eco-Cell
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('circular')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Bảo trì Plug &amp; Play 90 giây
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('stem')}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Chứng nhận Đại sứ Xanh STEM
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Dự Án Mô Hình Đô Thị Bọt Biển Xanh Phường Tân Mỹ, TP.HCM · Kinh Tế Tuần Hoàn &amp; Thích Ứng Khí Hậu.
          </div>
          <div className="flex items-center gap-4">
            <span>Tiêu chuẩn TCVN đô thị sinh thái</span>
            <span>Tuần hoàn rác nhựa 100%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

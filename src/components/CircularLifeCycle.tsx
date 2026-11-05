import React, { useState } from 'react';
import { LIFE_CYCLE_STEPS } from '../data/spongeCityData';
import { 
  RefreshCw, 
  Trash2, 
  Scissors, 
  Layers, 
  Boxes, 
  Droplets, 
  Wrench, 
  Clock, 
  VolumeX, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  RotateCcw
} from 'lucide-react';

interface PaverBlock {
  id: number;
  label: string;
  isWorn: boolean;
  status: 'nominal' | 'worn' | 'removed' | 'replaced';
  ageYears: number;
}

export const CircularLifeCycle: React.FC = () => {
  // Pavement grid state (3x4 = 12 blocks)
  const initialBlocks: PaverBlock[] = [
    { id: 1, label: 'Block A1', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 2, label: 'Block A2', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 3, label: 'Block A3', isWorn: true, status: 'worn', ageYears: 6.5 },
    { id: 4, label: 'Block A4', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 5, label: 'Block B1', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 6, label: 'Block B2', isWorn: true, status: 'worn', ageYears: 7 },
    { id: 7, label: 'Block B3', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 8, label: 'Block B4', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 9, label: 'Block C1', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 10, label: 'Block C2', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 11, label: 'Block C3', isWorn: false, status: 'nominal', ageYears: 4 },
    { id: 12, label: 'Block C4', isWorn: false, status: 'nominal', ageYears: 4 },
  ];

  const [blocks, setBlocks] = useState<PaverBlock[]>(initialBlocks);
  const [selectedBlockId, setSelectedBlockId] = useState<number>(3);
  const [recycledBlocksCount, setRecycledBlocksCount] = useState<number>(0);

  const selectedBlock = blocks.find((b) => b.id === selectedBlockId) || blocks[0];

  const handleRemoveBlock = (id: number) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'removed' } : b))
    );
  };

  const handleInstallNewBlock = (id: number) => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: 'replaced', isWorn: false, ageYears: 0 } : b
      )
    );
    setRecycledBlocksCount((prev) => prev + 1);
  };

  const handleResetSandbox = () => {
    setBlocks(initialBlocks);
    setSelectedBlockId(3);
    setRecycledBlocksCount(0);
  };

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trash2':
        return <Trash2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <RefreshCw className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Title */}
      <div>
        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Vòng đời vô tận &amp; Không rác thải (Zero-Waste)
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          Kinh Tế Tuần Hoàn &amp; Cơ Chế Bảo Trì Thông Minh &quot;Plug &amp; Play&quot;
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
          Giải quyết triệt để vấn đề đào bới đục phá đường sá gây ô nhiễm và ùn tắc giao thông. Khối lát Eco-Cell được thiết kế theo chuẩn khớp nối mô-đun, dễ dàng tháo rời từng miếng bị hỏng và tái chế tuần hoàn 100% tại Phường Tân Mỹ.
        </p>
      </div>

      {/* 6-Step Closed Loop Diagram */}
      <section className="space-y-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          Sơ Đồ Chu Trình Khép Kín 6 Giai Đoạn Tại Tân Mỹ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LIFE_CYCLE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Giai đoạn {step.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                📍 {step.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Plug & Play Sandbox */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Trải nghiệm thực hành trực quan
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Mô Phỏng Bảo Trì &quot;Plug &amp; Play&quot; Trên Mặt Vỉa Hè Thực Tế
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Nhấp vào khối lát nền bị hao mòn (màu vàng cam) để thực hiện thao tác tháo rời và thay thế bằng khối mới trong 90 giây!
            </p>
          </div>

          <button
            onClick={handleResetSandbox}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại mặt đường</span>
          </button>
        </div>

        {/* Sandbox Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4x3 Interactive Pavement Grid */}
          <div className="lg:col-span-7 bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span className="font-semibold">Mặt cắt vỉa hè Phường Tân Mỹ (12 Module Eco-Cell)</span>
              <span className="font-mono text-emerald-400">
                Khối đã tái sinh: {recycledBlocksCount}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {blocks.map((block) => {
                const isSelected = selectedBlockId === block.id;

                let blockBg = 'bg-emerald-950/80 border-emerald-500/70 text-emerald-300';
                let statusLabel = 'Tốt (4 năm)';

                if (block.status === 'worn') {
                  blockBg = 'bg-amber-950/90 border-amber-500 text-amber-200 animate-pulse';
                  statusLabel = 'Hao mòn (6.5 năm)';
                } else if (block.status === 'removed') {
                  blockBg = 'bg-slate-950 border-dashed border-slate-600 text-slate-500';
                  statusLabel = 'Đang trống';
                } else if (block.status === 'replaced') {
                  blockBg = 'bg-teal-950/90 border-teal-400 text-teal-200';
                  statusLabel = 'Mới 100% (Tái sinh)';
                }

                return (
                  <button
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between aspect-square ${blockBg} ${
                      isSelected ? 'ring-2 ring-white scale-102' : 'hover:opacity-90'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span>{block.label}</span>
                      {block.status === 'worn' && <AlertCircle className="w-3 h-3 text-amber-400" />}
                      {block.status === 'replaced' && <CheckCircle2 className="w-3 h-3 text-teal-400" />}
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-5 h-5 mx-auto mb-1 rounded-full border border-current flex items-center justify-center opacity-60">
                        <div className="w-2 h-2 rounded-full bg-current" />
                      </div>
                      <p className="text-[10px] font-medium leading-tight truncate">
                        {statusLabel}
                      </p>
                    </div>

                    <div className="text-[9px] text-slate-400 text-right">
                      {block.ageYears > 0 ? `${block.ageYears}y` : '0y'}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600" />
                <span>Hoạt động tốt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-500" />
                <span>Cần bảo trì sau 5-7 năm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-teal-400" />
                <span>Đã thay mới tái sinh</span>
              </div>
            </div>
          </div>

          {/* Right: Action Deck for Selected Block */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                  Chi tiết khối được chọn:
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedBlock.label}
                </span>
              </div>

              <div>
                <p className="text-base font-bold text-slate-900 dark:text-white">
                  Tình trạng: {selectedBlock.status === 'worn' ? 'Cần bảo trì thay thế' : selectedBlock.status === 'removed' ? 'Đã tháo - Chuẩn bị lắp khối mới' : selectedBlock.status === 'replaced' ? 'Đã thay mới tái sinh thành công' : 'Đang hoạt động ổn định'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Tuổi thọ vận hành: {selectedBlock.ageYears} năm (chu kỳ chuẩn: 5 - 7 năm)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                {selectedBlock.status === 'worn' && (
                  <button
                    onClick={() => handleRemoveBlock(selectedBlock.id)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Tháo rời khối hỏng (Nhấc ngàm trong 30 giây)</span>
                  </button>
                )}

                {selectedBlock.status === 'removed' && (
                  <button
                    onClick={() => handleInstallNewBlock(selectedBlock.id)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Boxes className="w-4 h-4" />
                    <span>Lắp khối Eco-Cell tái sinh mới (Khớp Plug &amp; Play 60 giây)</span>
                  </button>
                )}

                {selectedBlock.status === 'replaced' && (
                  <div className="p-3 bg-teal-50 dark:bg-teal-950/40 rounded-lg text-xs text-teal-800 dark:text-teal-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Khối cũ đã được chuyển về trạm rác Tân Mỹ băm nhỏ và ép nhiệt lại 100%!</span>
                  </div>
                )}

                {selectedBlock.status === 'nominal' && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Khối này đang chịu lực và thoát nước tốt, chưa cần bảo dưỡng. Bạn hãy bấm vào các khối màu vàng (Block A3 hoặc Block B2) để thử nghiệm thay thế!
                  </p>
                )}
              </div>
            </div>

            {/* Time & Environmental Efficiency Comparison */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Eco-Cell Plug &amp; Play</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-base">90 giây / khối</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  0 tiếng ồn, không bụi mịn, không cấm đường.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-rose-600 mb-1">
                  <VolumeX className="w-4 h-4" />
                  <span>Bê tông truyền thống</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-white text-base">3 - 4 ngày</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Máy đục bê tông 110dB, bụi bặm, tắc đường kẹt xe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

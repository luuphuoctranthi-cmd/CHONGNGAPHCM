import React, { useState, useEffect, useRef } from 'react';
import { 
  CloudRain, 
  Waves, 
  Gauge, 
  Zap, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  ArrowDown, 
  SlidersHorizontal,
  Info
} from 'lucide-react';

export const HydrologySimulator: React.FC = () => {
  // Simulator Controls
  const [rainIntensity, setRainIntensity] = useState<number>(85); // mm/h
  const [tideLevel, setTideLevel] = useState<number>(1.75); // meters (+0.6m to +2.0m)
  const [isAutoMode, setIsAutoMode] = useState<boolean>(true);
  const [manualPumpActive, setManualPumpActive] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Dynamic simulation internal state
  const [detentionWaterLevel, setDetentionWaterLevel] = useState<number>(35); // percentage (0 - 100)
  const [aquiferRechargeTotal, setAquiferRechargeTotal] = useState<number>(240); // m3 accumulated
  const groundElevation = 1.40; // Ground elevation baseline: +1.40m

  // Derived state
  const isTideHigherThanGround = tideLevel > groundElevation;
  
  // Flap valve state:
  // If tide > ground elevation, hydrostatic pressure of the river forces the one-way valve shut.
  // If tide < ground elevation, gravity allows rain runoff to flow freely out.
  const isFlapValveClosed = isTideHigherThanGround;

  // Pump state:
  // In auto mode: pump triggers if detention water level >= 70% AND flap valve is closed (or rain is overwhelming).
  const isPumpActive = isAutoMode
    ? (detentionWaterLevel >= 70 && (isFlapValveClosed || rainIntensity > 90))
    : manualPumpActive;

  // Real-time animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDetentionWaterLevel((prev) => {
        // Rain inflow rate based on rain intensity
        // Eco-Cell absorbs ~60% directly to aquifer, ~40% flows to detention vault
        const inflow = (rainIntensity / 100) * 2.8;

        // Outflow rate:
        // If flap valve is open and tide is low, gravity outflow is high
        let gravityOutflow = 0;
        if (!isFlapValveClosed) {
          gravityOutflow = 1.8;
        }

        // Forced pump outflow if active
        const pumpOutflow = isPumpActive ? 3.5 : 0;

        const netChange = inflow - gravityOutflow - pumpOutflow;
        const newLevel = Math.max(5, Math.min(98, prev + netChange));
        return Math.round(newLevel * 10) / 10;
      });

      // Increase aquifer recharge if rain is falling
      if (rainIntensity > 5) {
        setAquiferRechargeTotal((prev) => prev + Math.round((rainIntensity / 40) * 1));
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying, rainIntensity, isFlapValveClosed, isPumpActive]);

  // Presets
  const applyPreset = (preset: 'dry' | 'moderate' | 'heavy' | 'storm_tide') => {
    switch (preset) {
      case 'dry':
        setRainIntensity(0);
        setTideLevel(0.9);
        break;
      case 'moderate':
        setRainIntensity(35);
        setTideLevel(1.2);
        break;
      case 'heavy':
        setRainIntensity(75);
        setTideLevel(1.45);
        break;
      case 'storm_tide':
        setRainIntensity(125);
        setTideLevel(1.85); // Historic storm & tide
        break;
    }
  };

  // Conventional street flood depth calculation for comparison
  const conventionalFloodDepth = Math.max(
    0,
    Math.round(
      (rainIntensity > 30 ? (rainIntensity - 30) * 0.35 : 0) +
      (isTideHigherThanGround ? (tideLevel - groundElevation) * 50 : 0)
    )
  );

  return (
    <div className="space-y-8">
      {/* Header & Concept Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Cơ chế chống ngập tích hợp
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Mô Phỏng Thủy Văn: Mưa Lớn &amp; Triều Cường TP.HCM
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Tương tác điều chỉnh lượng mưa và mực nước triều sông lớn để quan sát cách <strong>vỉa hè Eco-Cell</strong>, <strong>van cơ học một chiều</strong>, <strong>hầm ngầm trữ nước</strong> và <strong>trạm bơm cưỡng bức</strong> phối hợp chống ngập 100%.
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Tạm dừng' : 'Tiếp tục'}</span>
          </button>
          <button
            onClick={() => {
              applyPreset('heavy');
              setDetentionWaterLevel(35);
            }}
            aria-label="Reset simulation"
            className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800/60 rounded-xl text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-300 px-2 flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Kịch bản thực tế:
        </span>
        <button
          onClick={() => applyPreset('dry')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
            rainIntensity === 0 ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-xs font-semibold' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          Trời khô ráo (Nắng)
        </button>
        <button
          onClick={() => applyPreset('moderate')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
            rainIntensity === 35 ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-400 shadow-xs font-semibold' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          Mưa rào nhẹ (35 mm/h)
        </button>
        <button
          onClick={() => applyPreset('heavy')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
            rainIntensity === 75 ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-400 shadow-xs font-semibold' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          Mưa lớn đô thị (75 mm/h)
        </button>
        <button
          onClick={() => applyPreset('storm_tide')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
            rainIntensity === 125 ? 'bg-rose-600 text-white shadow-xs font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-rose-600'
          }`}
        >
          Cực đoan: Mưa bão + Triều đỉnh (+1.85m)
        </button>
      </div>

      {/* Main Simulation Sandbox & Interactive Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left/Center Visual Canvas: SVG Hydraulic Cross-Section */}
        <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between">
          {/* Top Status Indicators */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs z-10">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">Cốt nền nội đô:</span>
              <span className="font-mono text-emerald-400 font-bold bg-slate-800/80 px-2 py-0.5 rounded">
                +{groundElevation.toFixed(2)}m
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Flap Valve status */}
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
                <span className="text-slate-400">Van cơ học 1 chiều:</span>
                <span className={`font-semibold ${isFlapValveClosed ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {isFlapValveClosed ? 'ĐÓNG KÍN (Áp lực triều)' : 'MỞ TỰ NHIÊN'}
                </span>
              </div>

              {/* Pump status */}
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md">
                <span className="text-slate-400">Trạm bơm cưỡng bức:</span>
                <span className={`font-semibold ${isPumpActive ? 'text-rose-400 animate-pulse' : 'text-slate-400'}`}>
                  {isPumpActive ? 'ĐANG BƠM XẢ XUNG LỰC' : 'CHẾ ĐỘ CHỜ'}
                </span>
              </div>
            </div>
          </div>

          {/* SVG Hydraulic Cross Section */}
          <div className="relative w-full my-6 bg-slate-950/70 rounded-xl border border-slate-800/80 p-2 overflow-hidden aspect-[16/9] min-h-[340px]">
            <svg viewBox="0 0 800 450" className="w-full h-full select-none" preserveAspectRatio="xMidYMid meet">
              <defs>
                {/* Patterns & Gradients */}
                <pattern id="soilPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#2d261e" />
                  <circle cx="5" cy="5" r="1.5" fill="#3f352b" />
                  <circle cx="15" cy="12" r="1" fill="#4a3e32" />
                </pattern>
                
                <pattern id="ecoCellGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <rect width="24" height="24" fill="#0f2b23" stroke="#10b981" strokeWidth="0.8" />
                  <circle cx="12" cy="12" r="6" fill="none" stroke="#34d399" strokeWidth="1" />
                </pattern>

                <linearGradient id="riverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="detentionWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Rain Drops (Simulated based on rainIntensity) */}
              {rainIntensity > 5 && (
                <g opacity={Math.min(1, rainIntensity / 80)}>
                  {[...Array(24)].map((_, i) => (
                    <line
                      key={i}
                      x1={30 + (i * 32) % 650}
                      y1={15 + (i * 18) % 80}
                      x2={25 + (i * 32) % 650}
                      y2={45 + (i * 18) % 80}
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      className="animate-rain-particle"
                    />
                  ))}
                </g>
              )}

              {/* Sky / Urban Surface */}
              <text x="30" y="30" fill="#94a3b8" fontSize="11" fontWeight="600">
                Mưa: {rainIntensity} mm/h {rainIntensity > 80 ? '⚡ CỰC ĐOAN' : ''}
              </text>

              {/* Urban Ground Section (Left to Center-Right) */}
              {/* Soil Subgrade */}
              <rect x="0" y="160" width="620" height="290" fill="url(#soilPattern)" />

              {/* Natural Aquifer layer at bottom */}
              <rect x="0" y="380" width="620" height="70" fill="#075985" opacity="0.6" />
              <text x="30" y="420" fill="#7dd3fc" fontSize="12" fontWeight="600">
                Tầng Nước Ngầm Tự Nhiên (Aquifer) - Chống sụt lún địa tầng TP.HCM
              </text>

              {/* Eco-Cell Permeable Pavement Top Layer */}
              <rect x="20" y="140" width="300" height="30" fill="url(#ecoCellGrid)" rx="4" />
              <text x="30" y="132" fill="#34d399" fontSize="12" fontWeight="700">
                Vỉa hè &amp; Sân trường Lê Văn Tám (Khối Eco-Cell)
              </text>

              {/* Park Lawn Green Top Layer */}
              <rect x="330" y="140" width="280" height="20" fill="#15803d" rx="2" />
              <text x="340" y="132" fill="#86efac" fontSize="12" fontWeight="700">
                Công viên Sinh thái Tân Mỹ
              </text>

              {/* Infiltration Arrows through Eco-Cell */}
              {rainIntensity > 5 && (
                <g stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 4" className="animate-water-flow">
                  <line x1="70" y1="175" x2="70" y2="375" />
                  <line x1="160" y1="175" x2="160" y2="375" />
                  <line x1="250" y1="175" x2="250" y2="375" />
                </g>
              )}
              {rainIntensity > 5 && (
                <text x="120" y="270" fill="#38bdf8" fontSize="11" fontWeight="600" textAnchor="middle">
                  Thấm ngấm 1.450 mm/h
                </text>
              )}

              {/* Underground Stormwater Detention Vault (Hầm ngầm công viên) */}
              <rect x="340" y="220" width="240" height="150" fill="#0f172a" stroke="#475569" strokeWidth="3" rx="6" />
              
              {/* Detention Vault Water Body (dynamic height based on detentionWaterLevel) */}
              {(() => {
                const waterHeight = (detentionWaterLevel / 100) * 140;
                const waterY = 368 - waterHeight;
                return (
                  <g>
                    <rect x="343" y={waterY} width="234" height={waterHeight} fill="url(#detentionWaterGrad)" rx="2" />
                    <line x1="343" y1={waterY} x2="577" y2={waterY} stroke="#7dd3fc" strokeWidth="2" />
                  </g>
                );
              })()}

              <text x="460" y="245" fill="#e2e8f0" fontSize="12" fontWeight="700" textAnchor="middle">
                Hầm Ngầm Trữ Nước (15.000 m³)
              </text>
              <text x="460" y="265" fill="#38bdf8" fontSize="11" textAnchor="middle">
                Mức trữ hiện tại: {detentionWaterLevel}% {detentionWaterLevel >= 75 ? '⚠️ Báo động' : 'Bình thường'}
              </text>

              {/* Water level sensor indicator in vault */}
              <circle cx="360" cy="270" r="7" fill={detentionWaterLevel >= 70 ? "#ef4444" : "#10b981"} />
              <text x="375" y="274" fill="#cbd5e1" fontSize="10">Cảm biến IoT mực nước</text>

              {/* Inflow Drain Pipe from Eco-Cell to Detention Vault */}
              <path d="M 270 170 L 270 290 L 340 290" fill="none" stroke="#64748b" strokeWidth="12" strokeLinecap="round" />
              {rainIntensity > 15 && (
                <path d="M 270 170 L 270 290 L 340 290" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="8 6" className="animate-water-flow" />
              )}

              {/* Outflow / Discharge Channel to Sông Lớn */}
              <rect x="580" y="300" width="80" height="36" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              
              {/* One-way Mechanical Flap Valve (Van cơ học một chiều) */}
              <g transform="translate(655, 300)">
                {isFlapValveClosed ? (
                  // Closed state: Flap pressed vertically against the door seal
                  <g>
                    <line x1="0" y1="0" x2="0" y2="36" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="0" cy="4" r="4" fill="#f87171" />
                    <text x="-15" y="-12" fill="#ef4444" fontSize="10" fontWeight="700">VAN ĐÓNG</text>
                  </g>
                ) : (
                  // Open state: Flap pushed up by outgoing water
                  <g>
                    <line x1="0" y1="0" x2="18" y2="15" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="0" cy="4" r="4" fill="#34d399" />
                    <text x="-15" y="-12" fill="#10b981" fontSize="10" fontWeight="700">VAN MỞ</text>
                  </g>
                )}
              </g>

              {/* Outgoing gravity water when valve is open */}
              {!isFlapValveClosed && rainIntensity > 10 && (
                <path d="M 580 318 L 680 318" fill="none" stroke="#38bdf8" strokeWidth="6" strokeDasharray="8 6" className="animate-water-flow" />
              )}

              {/* Forced Pump Station (Trạm bơm cưỡng bức) */}
              <rect x="490" y="170" width="60" height="50" fill="#334155" stroke="#64748b" strokeWidth="2" rx="4" />
              <text x="520" y="195" fill="#f1f5f9" fontSize="10" fontWeight="700" textAnchor="middle">TRẠM BƠM</text>
              <text x="520" y="210" fill={isPumpActive ? "#38bdf8" : "#94a3b8"} fontSize="9" textAnchor="middle">
                {isPumpActive ? 'HOẠT ĐỘNG' : 'CHỜ'}
              </text>

              {/* Pump Discharge Pipe arching directly over the levee into the river */}
              <path d="M 520 170 L 520 130 L 680 130 L 680 240" fill="none" stroke="#475569" strokeWidth="8" />
              {isPumpActive && (
                <path d="M 520 170 L 520 130 L 680 130 L 680 240" fill="none" stroke="#06b6d4" strokeWidth="5" strokeDasharray="10 6" className="animate-water-flow" />
              )}
              {isPumpActive && (
                <text x="600" y="120" fill="#06b6d4" fontSize="10" fontWeight="700">
                  Bơm cưỡng bức 2.500 m³/h ➔
                </text>
              )}

              {/* Sông Lớn (River - Right side of levee) */}
              {/* Levee / Sea-wall */}
              <polygon points="630,450 645,140 665,140 680,450" fill="#334155" />
              
              {/* River water body with height proportional to tideLevel */}
              {(() => {
                // Tide level: +0.6m -> y=340, +1.40m -> y=230, +2.0m -> y=150
                const riverTopY = Math.max(150, 360 - ((tideLevel - 0.5) / 1.5) * 200);
                return (
                  <g>
                    <rect x="670" y={riverTopY} width="130" height={450 - riverTopY} fill="url(#riverGrad)" />
                    <line x1="665" y1={riverTopY} x2="800" y2={riverTopY} stroke="#38bdf8" strokeWidth="2.5" />
                    <text x="735" y={riverTopY - 8} fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle">
                      Triều: +{tideLevel.toFixed(2)}m
                    </text>
                  </g>
                );
              })()}

              <text x="735" y="420" fill="#e0f2fe" fontSize="12" fontWeight="700" textAnchor="middle">
                SÔNG NHÀ BÈ
              </text>
              {isTideHigherThanGround && (
                <text x="735" y="380" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="600">
                  ▲ Cao hơn cốt nền (+1.40m)
                </text>
              )}
            </svg>
          </div>

          {/* Bottom Live Explanatory Status Bar */}
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200">
                {isTideHigherThanGround
                  ? 'Triều sông dâng cao (+1.75m). Van 1 chiều tự đóng kín, nước mưa dồn vào hầm ngầm công viên, kích hoạt bơm cưỡng bức.'
                  : 'Triều sông ở mức an toàn. Nước mưa vừa thấm qua vỉa hè Eco-Cell, vừa tự chảy qua cống xả ra sông.'}
              </span>
            </div>
            <div className="text-emerald-400 font-semibold whitespace-nowrap">
              Đô thị Tân Mỹ: Khô ráo (0 cm ngập)
            </div>
          </div>
        </div>

        {/* Right Side: Control Sliders & Live Analytics */}
        <div className="lg:col-span-4 space-y-5">
          {/* Controls Deck Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-5 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between">
              <span>Bảng Điều Khiển Tham Số</span>
              <span className="text-xs font-normal text-emerald-600 dark:text-emerald-400 font-mono">
                {isAutoMode ? 'Chế độ Tự Động' : 'Thủ Công'}
              </span>
            </h3>

            {/* Rain Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CloudRain className="w-4 h-4 text-sky-600" />
                  Cường độ mưa:
                </span>
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                  {rainIntensity} mm/h
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={rainIntensity}
                onChange={(e) => setRainIntensity(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0 mm/h (Nắng)</span>
                <span>60 mm/h (To)</span>
                <span>150 mm/h (Lũ)</span>
              </div>
            </div>

            {/* River Tide Slider */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-teal-600" />
                  Mực nước triều sông lớn:
                </span>
                <span className="font-mono font-bold text-teal-600 dark:text-teal-400 tabular-nums">
                  +{tideLevel.toFixed(2)} m
                </span>
              </div>
              <input
                type="range"
                min="0.6"
                max="2.0"
                step="0.05"
                value={tideLevel}
                onChange={(e) => setTideLevel(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>+0.6m (Rút)</span>
                <span className="text-emerald-600 font-semibold">+1.4m (Cốt nền)</span>
                <span className="text-rose-500 font-semibold">+2.0m (Đỉnh triều)</span>
              </div>
            </div>

            {/* Automation Mode Toggle */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Tự động hóa cảm biến
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Tự đóng van &amp; bật trạm bơm khi đầy
                </p>
              </div>
              <button
                onClick={() => setIsAutoMode(!isAutoMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  isAutoMode ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAutoMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Manual Pump Toggle if Auto Mode is disabled */}
            {!isAutoMode && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-900 dark:text-amber-200">
                    Bơm Cưỡng Bức Thủ Công:
                  </span>
                  <button
                    onClick={() => setManualPumpActive(!manualPumpActive)}
                    className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${
                      manualPumpActive
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {manualPumpActive ? 'ĐANG BƠM' : 'BẬT MÁY BƠM'}
                  </button>
                </div>
                <p className="text-[11px] text-amber-700 dark:text-amber-300">
                  Bạn đang ở chế độ thủ công. Có thể thử tắt máy bơm để xem hầm ngầm bị đầy như thế nào!
                </p>
              </div>
            )}
          </div>

          {/* Comparative Card: Conventional vs Sponge City Tan My */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              So Sánh Thực Tế Tại Phường Tân Mỹ
            </h3>

            <div className="space-y-3">
              {/* Traditional Road */}
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-900 dark:text-rose-200">
                    Đô thị bê tông truyền thống
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                    Ngập: {conventionalFloodDepth} cm
                  </span>
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-300 leading-relaxed">
                  Bề mặt bê tông không thấm nước + triều cường tràn ngược qua miệng cống ➔ Ngập úng đường sá, xe máy chết máy, kẹt xe.
                </p>
              </div>

              {/* Sponge City Tan My */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    Mô hình bọt biển Eco-Cell Tân Mỹ
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    Khô ráo 0 cm
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  Eco-Cell hút 1.450 mm/h + Van một chiều chặn sạch triều ngược + Hầm 15.000 m³ và bơm cưỡng bức xả an toàn.
                </p>
              </div>
            </div>

            {/* Environmental Gain Stat */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Nước nạp vào tầng ngầm:</span>
              <span className="font-mono font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                +{aquiferRechargeTotal} m³
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

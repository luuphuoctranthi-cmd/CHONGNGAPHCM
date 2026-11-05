import React, { useState } from 'react';
import { ECO_CELL_SPECS } from '../data/spongeCityData';
import { 
  Box, 
  CircleDot, 
  ShieldCheck, 
  Droplets, 
  TrendingDown, 
  Layers, 
  Leaf, 
  Truck, 
  Bike, 
  User, 
  Calculator,
  ArrowDownCircle,
  Sparkles
} from 'lucide-react';

export const EcoCellExplorer: React.FC = () => {
  // Interactive Load Tester State
  const [selectedLoad, setSelectedLoad] = useState<'pedestrian' | 'motorbike' | 'light_truck'>('motorbike');
  
  // Environmental Impact Calculator State
  const [pavementArea, setPavementArea] = useState<number>(3500); // m2 in Tan My

  // Load calculations
  const loadInfo = {
    pedestrian: {
      label: 'Người đi bộ & Học sinh',
      weight: '75 kg',
      pressure: '0.25 kg/cm²',
      deflection: '0.01 mm',
      safetyFactor: '152x',
      desc: 'Áp lực phân tán gần như tuyệt đối, mặt vỉa hè phẳng mịn, êm ái, chống trơn trượt.'
    },
    motorbike: {
      label: 'Xe máy đô thị TP.HCM',
      weight: '180 kg',
      pressure: '2.1 kg/cm²',
      deflection: '0.04 mm',
      safetyFactor: '18x',
      desc: 'Cấu trúc vòm bóng rỗng chịu lực đàn hồi hoàn hảo, xe máy lưu thông êm ái không tạo rãnh lún bánh xe.'
    },
    light_truck: {
      label: 'Xe tải nhẹ thu gom rác / Cứu hỏa',
      weight: '2.500 kg',
      pressure: '6.8 kg/cm²',
      deflection: '0.18 mm',
      safetyFactor: '5.6x',
      desc: 'Các vòm cầu liên kết truyền lực sang các chân trụ xung quanh, hoàn toàn không nứt vỡ hay sụt lún nền đường.'
    }
  };

  // Environmental calculations for Tan My Ward
  // 1 m2 Eco-Cell uses approx 18 kg recycled plastic (PP/HDPE)
  const plasticRecycledKg = pavementArea * 18;
  const plasticBottlesEquivalent = Math.round(plasticRecycledKg * 28);
  // Average rainfall in HCM is ~1,900 mm/year. With 90% infiltration: 1.71 m3 / m2 / year
  const groundwaterRechargeM3 = Math.round(pavementArea * 1.71);
  // Recycled plastic saves ~2.1 kg CO2e per kg plastic vs virgin production + incineration/landfill
  const co2ReductionTons = Math.round((plasticRecycledKg * 2.1) / 1000 * 10) / 10;
  const carbonCredits = Math.round(co2ReductionTons);
  // Subsidence mitigation index
  const subsidenceMitigationRate = 'Giảm 78% nguy cơ sụt lún';

  return (
    <div className="space-y-12">
      {/* Title & Introduction */}
      <div>
        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          Giải pháp vật liệu xanh &amp; Kết cấu kỹ thuật
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          Khối Lát Nền Đa Năng Eco-Cell: Bọt Biển Nhân Tạo Chịu Lực
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
          Được đúc 100% từ rác thải nhựa thu gom tại Phường Tân Mỹ. Ứng dụng cấu trúc vòm bóng rỗng thông minh giúp đạt tải trọng nén <strong>38 tấn/m²</strong> (cho phép xe máy và xe tải nhẹ qua lại không sụt lún) trong khi rỗng thoáng <strong>92%</strong> để thẩm thấu nước ngầm tự nhiên.
        </p>
      </div>

      {/* 3D Cutaway Graphic & Key Specifications */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs">
          <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 aspect-[4/3] border border-slate-100 dark:border-slate-800">
            <img
              src="/src/assets/images/ecocell_pavement_structure_1793890430025.jpg"
              alt="Mặt cắt kỹ thuật 3D khối Eco-Cell với hệ vòm bóng rỗng chịu lực"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
              <CircleDot className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cấu trúc Vòm Bóng Rỗng (Hollow Spherical Arch)</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Nguyên lý cơ học vòm cầu:
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Các quả bóng rỗng bằng nhựa được bố trí theo ma trận lục giác bên trong khối hộp. Khi bánh xe lăn qua, lực ép thẳng đứng được phân rã thành các thành phần lực nén tiếp tuyến tỏa đều ra xung quanh, biến ứng suất kéo nguy hiểm thành ứng suất nén vật liệu – cho phép kết cấu rỗng nhẹ nhưng chịu lực tương đương bê tông đặc.
            </p>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-xs space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Layers className="w-4 h-4" />
              <span>Thông Số Kỹ Thuật Chuẩn Hóa</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
              Khối Eco-Cell Module Tân Mỹ
            </h3>

            <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Vật liệu chế tạo:</span>
                <span className="font-medium text-slate-900 dark:text-white text-right max-w-[200px]">
                  100% nhựa HDPE/PP tái chế
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Kích thước module:</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  500 × 500 × 300 mm
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Khả năng chịu tải:</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  38 tấn/m² (Xe tải nhẹ qua lại an toàn)
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Độ rỗng thấm nước:</span>
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400">
                  92% thể tích rỗng
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Tốc độ thoát nước:</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  1.450 mm/h (Gấp 10x mưa lớn)
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Vòng đời sử dụng:</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  5 - 7 năm (Bảo trì Plug &amp; Play)
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Tái chế khi hết hạn:</span>
                <span className="font-medium text-teal-600 dark:text-teal-400">
                  100% tái sinh khép kín
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-800 dark:text-emerald-300">
            <span className="font-bold">Đặc tính Plug &amp; Play:</span> Khi một khối bị nứt mòn sau nhiều năm sử dụng, công nhân chỉ mất 90 giây để tháo nhấc thay khối mới mà không cần đục phá lớp bê tông nền.
          </div>
        </div>
      </section>

      {/* Interactive Load Tester */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Thử nghiệm cơ học thực tế
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
              Mô Phỏng Chịu Lực Khối Eco-Cell Dưới Tác Động Giao Thông
            </h3>
          </div>

          {/* Vehicle selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setSelectedLoad('pedestrian')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                selectedLoad === 'pedestrian'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Người đi bộ</span>
            </button>
            <button
              onClick={() => setSelectedLoad('motorbike')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                selectedLoad === 'motorbike'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Xe máy TP.HCM</span>
            </button>
            <button
              onClick={() => setSelectedLoad('light_truck')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                selectedLoad === 'light_truck'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Xe tải nhẹ 2.5T</span>
            </button>
          </div>
        </div>

        {/* Load Result Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">Tải trọng tác dụng</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white mt-1 tabular-nums">
              {loadInfo[selectedLoad].weight}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Áp lực: {loadInfo[selectedLoad].pressure}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">Độ võng bề mặt</p>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1 tabular-nums">
              {loadInfo[selectedLoad].deflection}
            </p>
            <p className="text-[11px] text-emerald-500 mt-1">Giới hạn tiêu chuẩn: &lt; 2.5 mm</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">Hệ số an toàn kết cấu</p>
            <p className="text-xl font-bold text-sky-600 dark:text-sky-400 mt-1 tabular-nums">
              {loadInfo[selectedLoad].safetyFactor}
            </p>
            <p className="text-[11px] text-sky-500 mt-1">Chuẩn kỹ thuật hạ tầng đô thị</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Kết quả kiểm định</span>
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
              Không sụt lún, không nứt gãy. Tự tin lưu thông xe máy và xe thu gom rác.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 italic">
          * Đánh giá kỹ thuật: {loadInfo[selectedLoad].desc}
        </p>
      </section>

      {/* Dual Environmental Impact & Carbon Credit Calculator */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-8 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Calculator className="w-4 h-4" />
            <span>Tác động kép &amp; Tín chỉ Carbon</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Bộ Tính Toán Tác Động Môi Trường &amp; Chống Sụt Lún TP.HCM
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Kéo thanh trượt diện tích lát khối Eco-Cell để ước tính khối lượng rác thải nhựa tiêu thụ, nước ngầm nạp lại và lượng giảm phát thải khí nhà kính tại Phường Tân Mỹ.
          </p>
        </div>

        {/* Pavement Area Slider */}
        <div className="space-y-3 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-slate-800 dark:text-slate-200">
              Quy mô diện tích lát nền Eco-Cell (Vỉa hè, trường học, công viên Tân Mỹ):
            </span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 text-lg tabular-nums">
              {pavementArea.toLocaleString('vi-VN')} m²
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="15000"
            step="250"
            value={pavementArea}
            onChange={(e) => setPavementArea(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>500 m² (Khuôn viên trường)</span>
            <span>3.500 m² (Trường + 1 tuyến vỉa hè)</span>
            <span>15.000 m² (Toàn bộ phân khu Tân Mỹ)</span>
          </div>
        </div>

        {/* 4 Impact Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Recycled Plastic */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Rác nhựa tái chế</span>
              <Leaf className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              {plasticRecycledKg.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-500">kg</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Tương đương ~{plasticBottlesEquivalent.toLocaleString('vi-VN')} chai/nắp nhựa không bị chôn lấp tại bãi rác Đa Phước.
            </p>
          </div>

          {/* Pillar 2: Groundwater Recharge */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Nước ngầm nạp bổ sung</span>
              <Droplets className="w-4 h-4 text-sky-600" />
            </div>
            <p className="text-2xl font-bold text-sky-600 dark:text-sky-400 tabular-nums">
              {groundwaterRechargeM3.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-500">m³/năm</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Thấm trực tiếp xuống tầng chứa nước ngầm, duy trì áp lực lỗ rỗng và chống sụt lún địa tầng đô thị.
            </p>
          </div>

          {/* Pillar 3: CO2e Reduction */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Cắt giảm khí nhà kính</span>
              <TrendingDown className="w-4 h-4 text-teal-600" />
            </div>
            <p className="text-2xl font-bold text-teal-600 dark:text-teal-400 tabular-nums">
              {co2ReductionTons.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-500">tấn CO₂e</span>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              So với việc sản xuất nhựa nguyên sinh và bê tông xi măng truyền thống phát thải lớn.
            </p>
          </div>

          {/* Pillar 4: Carbon Credit Potential */}
          <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">Tín chỉ Carbon ước tính</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">
              {carbonCredits} <span className="text-sm font-normal">tín chỉ/năm</span>
            </p>
            <p className="text-[11px] text-emerald-800 dark:text-emerald-300">
              Tạo nguồn tài chính xanh bền vững cho Phường Tân Mỹ thông qua thị trường giao dịch tín chỉ carbon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

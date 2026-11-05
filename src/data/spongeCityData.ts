import { UrbanZone, EcoCellSpec, QuizQuestion } from '../types/spongeCity';

export const URBAN_ZONES: UrbanZone[] = [
  {
    id: 'school',
    name: 'Trường Tiểu học Lê Văn Tám',
    category: 'education',
    role: 'Trung tâm Giáo dục STEM & Nhận thức Sinh thái Thế hệ trẻ',
    shortDesc: 'Nơi triển khai các mô hình thực nghiệm bọt biển xanh, vườn mưa thẩm thấu và giáo dục phân loại rác thải cho học sinh tiểu học.',
    fullDesc: 'Tại Trường Tiểu học Lê Văn Tám (Phường Tân Mỹ), sân trường và các lối đi nội bộ được lát hoàn toàn bằng khối Eco-Cell thấm nước. Khuôn viên trường tích hợp Vườn mưa sinh thái (Rain Garden) và bồn thu gom nước mưa phục vụ tưới tiêu cây xanh. Học sinh được tham gia các tiết học STEM thực hành: đo tốc độ thấm nước, so sánh nhiệt độ bề mặt gạch bê tông và gạch sinh thái, xây dựng ý thức bảo vệ môi trường và tuần hoàn tài nguyên ngay từ lứa tuổi thiếu nhi.',
    image: '/src/assets/images/school_stem_garden_green_1793890431766.jpg',
    highlights: [
      '1.200 m² sân trường lát khối bọt biển Eco-Cell thấm nước 100%',
      'Phòng thực nghiệm STEM bọt biển & Vườn mưa sinh thái học đường',
      'Điểm tiếp nhận rác nhựa sạch do học sinh và phụ huynh thu gom đổi quà xanh'
    ],
    metrics: [
      { label: 'Diện tích thấm nước', value: '1.200 m²' },
      { label: 'Học sinh tham gia STEM', value: '850+ em' },
      { label: 'Nước mưa tái sử dụng tưới', value: '180 m³/tháng' }
    ]
  },
  {
    id: 'community',
    name: 'Trạm Thu gom Rác thải Phường Tân Mỹ',
    category: 'community',
    role: 'Điểm đầu vào Nguyên liệu Tuần hoàn & Chế biến Nhựa phế liệu',
    shortDesc: 'Thu gom phế liệu nhựa sinh hoạt đô thị, băm nhỏ và ép nhiệt định hình để sản xuất trực tiếp các khối lát nền Eco-Cell.',
    fullDesc: 'Trạm thu gom rác thải sinh hoạt Phường Tân Mỹ đóng vai trò là "mắt xích khởi nguyên" của chuỗi kinh tế tuần hoàn. Rác nhựa (chai nhựa, nắp chai HDPE, bao bì PP dày, xô chậu vỡ) được phân loại kỹ lưỡng, đưa vào máy băm nhỏ thành hạt vảy nhựa (flakes), sau đó chuyển qua dây chuyền ép nhiệt và đúc khuôn để sản xuất ra các "Khối lát nền đa năng Eco-Cell" ngay tại địa phương, loại bỏ hoàn toàn chi phí vận chuyển xa và giảm phát thải chôn lấp.',
    image: '/src/assets/images/plastics_recycling_station_1793890432197.jpg',
    highlights: [
      'Tiếp nhận trung bình 3,5 tấn rác thải nhựa/tháng từ các hộ dân Tân Mỹ',
      'Dây chuyền băm nhỏ và ép nhiệt áp suất cao không phát sinh khói độc',
      'Định hình thành các khối Eco-Cell chuẩn kỹ thuật hạ tầng đô thị'
    ],
    metrics: [
      { label: 'Công suất nhựa xử lý', value: '3,5 tấn/tháng' },
      { label: 'Tỷ lệ nhựa tái chế', value: '100% HDPE/PP' },
      { label: 'Khối Eco-Cell sản xuất', value: '700 khối/tháng' }
    ]
  },
  {
    id: 'park',
    name: 'Công viên Sinh thái & Hạ tầng Ngầm Tân Mỹ',
    category: 'park',
    role: 'Trái tim Thoát lũ, Trữ ngầm & Điều hòa Khí hậu Đô thị',
    shortDesc: 'Khu cảnh quan xanh mặt đất kết hợp hầm ngầm trữ nước, cảm biến mực nước thông minh, van một chiều chống triều và trạm bơm cưỡng bức.',
    fullDesc: 'Công viên trung tâm phường Tân Mỹ là "lá phổi xanh" và đồng thời là "chiếc bọt biển khổng lồ" của khu vực. Mặt đất là thảm cỏ sinh thái và đường dạo bộ lát Eco-Cell. Bên dưới là hệ thống hầm ngầm trữ nước mưa (Underground Detention Vault) thể tích 15.000 m³. Cửa cống ra sông lớn được gắn van cơ học một chiều tự động đóng khi triều cường dâng cao, cùng trạm bơm cưỡng bức kích hoạt tự động bằng cảm biến mực nước để bơm thoát nước an toàn ra sông trong những trận mưa cực đoan.',
    image: '/src/assets/images/hero_sponge_city_tanmy_1793890429201.jpg',
    highlights: [
      'Hầm ngầm trữ nước mưa 15.000 m³ bên dưới thảm cỏ công viên',
      'Van cơ học một chiều (Flap Gate) tự động ngăn triều ngược từ sông lớn',
      'Trạm bơm cưỡng bức tự động kích hoạt bởi cảm biến mực nước ngầm thông minh'
    ],
    metrics: [
      { label: 'Dung tích hầm ngầm trữ', value: '15.000 m³' },
      { label: 'Công suất bơm cưỡng bức', value: '2.500 m³/h' },
      { label: 'Thời gian ngăn triều', value: '100% tự động' }
    ]
  }
];

export const ECO_CELL_SPECS: EcoCellSpec = {
  material: 'Nhựa tái chế 100% (HDPE và PP từ rác sinh hoạt Phường Tân Mỹ)',
  recycledPlasticRatio: 100,
  loadCapacityTons: 38,
  voidRatio: 92,
  dimensions: '500 mm × 500 mm × 300 mm',
  waterInfiltrationRate: 1450,
  lifespanYears: '5 - 7 năm',
  recyclability: '100% tuần hoàn khép kín'
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Tại sao đô thị truyền thống với mặt đường bê tông hóa thường xuyên bị ngập úng nặng khi trời mưa tại TP.HCM?',
    options: [
      'Vì bê tông tạo bề mặt không thấm nước, 95% nước mưa biến thành dòng chảy mặt gây quá tải cống.',
      'Do bê tông hấp thụ quá nhiều nước mưa và làm nước bốc hơi nhanh.',
      'Do bê tông làm tăng độ mặn của nguồn nước triều cường.',
      'Do nhiệt độ của mặt đường bê tông quá lạnh.'
    ],
    correctIndex: 0,
    explanation: 'Bê tông hóa bịt kín bề mặt tự nhiên, khiến hệ số thấm gần như bằng 0. Nước mưa không thể ngấm xuống đất mà dồn ứ thành dòng chảy mặt, gây quá tải hệ thống thoát nước đô thị.'
  },
  {
    id: 2,
    question: 'Cấu trúc "vòm bóng rỗng" bên trong khối Eco-Cell mang lại ưu điểm kỹ thuật vượt trội nào?',
    options: [
      'Làm khối nhẹ để trôi nổi trên mặt nước khi lũ lụt.',
      'Tạo cấu trúc vòm cầu phân tán lực nén đều, giúp khối chịu tải tới 38 tấn/m² mà rỗng đến 92% để chứa và thấm nước.',
      'Chỉ để trang trí cho đẹp mắt khi mở nắp vỉa hè ra.',
      'Ngăn không cho vi khuẩn và rác lọt qua.'
    ],
    correctIndex: 1,
    explanation: 'Cấu trúc vòm hình cầu (Spherical Arch) là kết cấu chịu lực tối ưu trong vật lý: lực ép từ xe máy và xe tải nhẹ được phân bố tỏa đều xuống các chân chịu lực, tạo độ rỗng rỗng thoáng 92% cho nước lưu thông thần tốc.'
  },
  {
    id: 3,
    question: 'Khi triều cường sông dâng cao hơn cốt nền TP.HCM trong lúc trời đang mưa to, hệ thống chống ngập Tân Mỹ vận hành như thế nào?',
    options: [
      'Mở toang van cống để nước sông tràn vào làm mát hầm ngầm.',
      'Van cơ học một chiều tự động ép kín chặn triều ngược; nước mưa dồn vào hầm ngầm công viên, cảm biến kích hoạt trạm bơm cưỡng bức đẩy ra sông an toàn.',
      'Người dân phải đắp bao cát thủ công quanh các nắp cống.',
      'Tắt toàn bộ hệ thống thoát nước chờ nước rút tự nhiên.'
    ],
    correctIndex: 1,
    explanation: 'Van một chiều bị áp lực triều cường đẩy tự động đóng kín ngay lập tức. Nước mưa được gom về hầm ngầm 15.000 m³ dưới công viên, khi mực nước chạm ngưỡng cảm biến, trạm bơm cưỡng bức sẽ bơm xả cưỡng bức ra sông.'
  },
  {
    id: 4,
    question: 'Vì sao việc nước mưa thấm ngấm tự nhiên qua khối Eco-Cell lại giúp "chống sụt lún nền đất" cho TP.HCM?',
    options: [
      'Vì nước mưa làm đất nở to ra và nâng các tòa nhà cao ốc lên.',
      'Bổ sung lượng nước hao hụt vào tầng chứa nước ngầm (aquifer), duy trì áp lực nước lỗ rỗng và ngăn chặn sự nén chặt của tầng đất bùn sét yếu.',
      'Làm tan chảy các lớp cát bên dưới bề mặt đô thị.',
      'Tạo ra dòng điện từ trường giữ chặt nền đất.'
    ],
    correctIndex: 1,
    explanation: 'TP.HCM bị sụt lún phần lớn do khai thác nước ngầm quá mức kết hợp với bê tông hóa ngăn nước ngấm bổ sung. Eco-Cell giúp nạp lại tầng nước ngầm, duy trì áp lực lỗ rỗng và ngăn ngừa sụt lún địa tầng.'
  },
  {
    id: 5,
    question: 'Cơ chế "Plug & Play" trong bảo dưỡng khối lát Eco-Cell mang lại lợi ích gì sau 5-7 năm vận hành?',
    options: [
      'Phải đào tung toàn bộ tuyến đường để lát lại từ đầu bằng xi măng.',
      'Tháo rời từng module bị mòn trong vài phút để thay mới, khối cũ được đưa về trạm rác Tân Mỹ băm nhỏ và ép nhiệt lại 100%.',
      'Đốt các khối cũ để lấy tro làm phân bón cây xanh.',
      'Chôn lấp khối cũ xuống sâu dưới lòng đất.'
    ],
    correctIndex: 1,
    explanation: 'Tính năng Plug & Play cho phép thay thế cục bộ từng khối hư hại mà không cần đào phá mặt đường gây bụi bặm và tắc đường. Khối cũ được thu hồi đưa vào chu trình băm nhỏ và tái sinh khép kín.'
  }
];

export const LIFE_CYCLE_STEPS = [
  {
    step: '01',
    title: 'Thu gom phế liệu nhựa',
    location: 'Trạm rác Phường Tân Mỹ & Trường Lê Văn Tám',
    desc: 'Hộ dân và học sinh phân loại rác nhựa (nắp chai, hộp nhựa, chai HDPE/PP), chuyển đến trạm thu gom tập trung.',
    iconName: 'Trash2'
  },
  {
    step: '02',
    title: 'Băm nhỏ & Rửa sạch',
    location: 'Xưởng sơ chế vật liệu sinh thái',
    desc: 'Nhựa được băm thành hạt vảy nhựa kích thước 4-6mm, loại bỏ tạp chất và sấy khô tự nhiên bằng năng lượng mặt trời.',
    iconName: 'Scissors'
  },
  {
    step: '03',
    title: 'Ép nhiệt & Đúc khối Eco-Cell',
    location: 'Dây chuyền ép khuôn thủy lực áp suất cao',
    desc: 'Vảy nhựa được gia nhiệt ở 190°C–210°C và ép vào khuôn vòm bóng rỗng tạo thành khối hộp bọt biển đa năng với độ rỗng 92%.',
    iconName: 'Layers'
  },
  {
    step: '04',
    title: 'Lắp đặt dạng module Plug & Play',
    location: 'Vỉa hè, sân trường Lê Văn Tám, công viên',
    desc: 'Ghép các khối bằng khớp ngàm âm dương liên kết nhanh, lót vải địa kỹ thuật, không dùng vữa xi măng hay đầm nén nặng.',
    iconName: 'Boxes'
  },
  {
    step: '05',
    title: 'Vận hành thấm nước 5 - 7 năm',
    location: 'Hạ tầng giao thông & sinh thái đô thị',
    desc: 'Thấm hút nước mưa với tốc độ 1.450 mm/h, chịu tải xe máy và xe tải nhẹ 38 tấn/m², giảm nhiệt độ mặt đường 4-6°C.',
    iconName: 'Droplets'
  },
  {
    step: '06',
    title: 'Bảo dưỡng thay thế & Tái sinh 100%',
    location: 'Chu trình khép kín Zero-Waste',
    desc: 'Sau 5-7 năm, khối mòn được nhấc ra thay thế trong 90 giây; khối cũ được chuyển về máy băm để bắt đầu chu trình mới.',
    iconName: 'RefreshCw'
  }
];

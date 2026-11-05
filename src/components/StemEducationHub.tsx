import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/spongeCityData';
import { 
  GraduationCap, 
  Lightbulb, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Share2,
  Sparkles,
  School
} from 'lucide-react';

export const StemEducationHub: React.FC = () => {
  // Lesson Tab state
  const [activeLesson, setActiveLesson] = useState<number>(0);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Học Sinh Lê Văn Tám');

  const lessons = [
    {
      id: 0,
      title: 'Bí Mật Bọt Biển Xanh: Giảm Ngập & Làm Mát Đô Thị',
      subtitle: 'Thí nghiệm so sánh bề mặt bê tông nóng bỏng và vỉa hè Eco-Cell xốp thấm',
      content: `Khi mưa rơi xuống sân trường bê tông thông thường, nước không thể ngấm mà đọng vũng, bốc hơi chậm và tích tụ nhiệt lượng tới 42°C vào buổi trưa. 
      Ngược lại, khối Eco-Cell với hệ thống lỗ rỗng 92% hoạt động như một "miếng bọt biển rửa bát khổng lồ": nước mưa được hút thần tốc với vận tốc 1.450 mm/h. Lượng nước thấm ngấm này vừa cấp ẩm cho đất, vừa làm mát mặt đất giảm 4-6°C thông qua hiện tượng thoát hơi nước tự nhiên, tạo sân chơi thoáng mát cho các em học sinh.`,
      experiment: 'Thử nghiệm thực tế: Đổ 1 xô nước 10L lên sân trường lát Eco-Cell. Kết quả: Nước biến mất hoàn toàn trong chưa đầy 3 giây!'
    },
    {
      id: 1,
      title: 'Nguyên Lý Cơ Học: Vòm Cầu Rỗng Chịu Xe Tải 2.5 Tấn',
      subtitle: 'Tại sao quả bóng tròn bằng nhựa lại không bị bẹp khi xe cộ chạy qua?',
      content: `Nếu dùng một tấm nhựa phẳng mỏng, xe máy chạy qua sẽ bị gãy vụn ngay lập tức. Nhưng khi những quả bóng nhựa rỗng được xếp san sát bên trong khối hộp, chúng tạo thành cấu trúc "Vòm Cầu" (Arch Structure) – tương tự như kiến trúc mái vòm của các nhà thờ và cầu vòm đá cổ đại.
      Khi bánh xe đè xuống đỉnh quả bóng, trọng lực không đè bẹp mà bị chuyển hướng thành lực nén chạy dọc theo đường cong hình cầu xuống chân trụ. Nhờ vậy, khối vừa rỗng nhẹ để chứa nước, vừa chịu được tải trọng tới 38 tấn/m²!`,
      experiment: 'Thử nghiệm thực tế: Đặt 4 quả bóng nhựa rỗng vào góc hộp và đặt một chồng sách giáo khoa nặng 10kg lên trên. Quả bóng không hề bị biến dạng!'
    },
    {
      id: 2,
      title: 'Áp Suất Thủy Tĩnh: Van Một Chiều Đánh Bại Triều Cường',
      subtitle: 'Làm thế nào để nước sông không trào ngược vào trường học khi triều cường dâng cao?',
      content: `TP.HCM có triều cường sông dâng cao tới +1.80m, trong khi sân trường và đường phố chỉ cao +1.40m. Nếu không có van, nước sông mặn đục sẽ tràn ngược vào cống và dâng lên miệng cống gây ngập thối.
      Van cơ học một chiều hoạt động hoàn toàn tự động bằng quy luật trọng lực và áp lực nước:
      1. Khi triều sông thấp: Áp lực nước mưa trong nội đô đẩy cánh van mở ra để xả nước ra sông.
      2. Khi triều sông dâng cao hơn: Chính áp lực của nước sông ép chặt cánh van vào vành cao su gioăng kín, chặn đứng 100% dòng triều trào ngược mà không tốn 1 kWh điện!`,
      experiment: 'Thử nghiệm thực tế: Mô hình ống nước có nắp lật một chiều. Thổi từ trong ra thì nắp mở, thổi từ ngoài vào thì nắp đóng chặt.'
    }
  ];

  // Quiz calculations
  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (isQuizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsQuizSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const score = calculateScore();
  const isPassed = score >= 4;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
          <School className="w-4 h-4" />
          <span>Trường Tiểu học Lê Văn Tám · Phường Tân Mỹ</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          Góc Giáo Dục STEM &amp; Không Gian Sáng Tạo Sinh Thái
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
          Nơi các em học sinh tiểu học khám phá khoa học ứng dụng: tìm hiểu cách một thành phố bọt biển vận hành, tự tay phân loại rác nhựa tái chế và trở thành những Đại sứ môi trường tương lai của TP.HCM.
        </p>
      </div>

      {/* 3 Interactive STEM Lessons */}
      <section className="space-y-6">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Bài Học Khoa Học Trực Quan (Interactive STEM Modules)</span>
        </h3>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {lessons.map((lesson, idx) => {
            const isActive = activeLesson === idx;
            return (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-sky-500 ring-2 ring-sky-500/20 shadow-xs'
                    : 'bg-white/60 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
                  Bài học 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2">
                  {lesson.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Lesson Viewer */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-5">
          <div>
            <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
              STEM MODULE 0{activeLesson + 1}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {lessons[activeLesson].title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              {lessons[activeLesson].subtitle}
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {lessons[activeLesson].content}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 dark:text-amber-200">
              <span className="font-bold">Góc thực hành thí nghiệm trường học:</span> {lessons[activeLesson].experiment}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive STEM Quiz & Certificate Generator */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Đố vui khoa học &amp; Cấp chứng nhận</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Thử Thách: Em Là Chuyên Gia Đô Thị Bọt Biển Tân Mỹ
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Trả lời đúng từ 4/5 câu hỏi để nhận Chứng Nhận Điện Tử &quot;Đại Sứ Đô Thị Bọt Biển Tân Mỹ&quot;!
            </p>
          </div>

          {isQuizSubmitted && (
            <button
              onClick={handleResetQuiz}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại thử thách</span>
            </button>
          )}
        </div>

        {/* Student Name Input for Certificate */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
            Tên học sinh / Người tham gia:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Nhập họ và tên của em..."
            className="w-full sm:w-80 px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Questions Carousel / List */}
        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, qIndex) => {
            const userAnswer = selectedAnswers[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === q.correctIndex;

            return (
              <div
                key={q.id}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {q.id}
                    </span>
                    <span>{q.question}</span>
                  </h4>

                  {isQuizSubmitted && (
                    <div>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" /> Đúng
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-600">
                          <XCircle className="w-4 h-4" /> Chưa đúng
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = userAnswer === optIndex;
                    let optionStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300';

                    if (isQuizSubmitted) {
                      if (optIndex === q.correctIndex) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                      } else if (isSelected && optIndex !== q.correctIndex) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelectAnswer(q.id, optIndex)}
                        disabled={isQuizSubmitted}
                        className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center gap-3 ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Post-submit explanation */}
                {isQuizSubmitted && (
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Giải thích khoa học:</span> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {!isQuizSubmitted && (
          <div className="text-center pt-2">
            <button
              onClick={() => setIsQuizSubmitted(true)}
              disabled={Object.keys(selectedAnswers).length < 5}
              className={`px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs ${
                Object.keys(selectedAnswers).length === 5
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              Nộp Bài Kiểm Tra (Đã làm {Object.keys(selectedAnswers).length}/5 câu)
            </button>
          </div>
        )}

        {/* Certificate Section if passed */}
        {isQuizSubmitted && (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            {isPassed ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white border-2 border-emerald-500/40 space-y-6 text-center relative overflow-hidden shadow-xl">
                <div className="absolute top-2 right-2 text-emerald-400/20">
                  <Award className="w-48 h-48 -mr-10 -mt-10" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Chứng Nhận Danh Dự Xuất Sắc · Điểm số: {score}/5</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    CHỨNG NHẬN ĐẠI SỨ ĐÔ THỊ BỌT BIỂN TÂN MỸ
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Dự án Đô thị Bọt biển Xanh &amp; Kinh tế Tuần hoàn Phường Tân Mỹ, TP.HCM
                  </p>
                </div>

                <div className="py-4 border-y border-emerald-700/50 max-w-lg mx-auto relative z-10">
                  <p className="text-xs text-slate-300 uppercase tracking-widest">Trao tặng cho:</p>
                  <p className="text-2xl font-bold text-emerald-300 mt-1 font-serif">
                    {studentName || 'Học Sinh Xuất Sắc'}
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    Đã hoàn thành xuất sắc chương trình STEM thực nghiệm về mô hình thủy văn chống ngập, van cơ học một chiều và công nghệ khối lát nền Eco-Cell tái chế từ rác nhựa.
                  </p>
                </div>

                <div className="flex justify-between items-center text-[11px] text-emerald-300/80 max-w-lg mx-auto relative z-10">
                  <div>Trường Tiểu học Lê Văn Tám</div>
                  <div>Phường Tân Mỹ, TP.HCM</div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-center space-y-3">
                <p className="text-sm font-bold text-amber-900 dark:text-amber-200">
                  Em đạt được {score}/5 điểm!
                </p>
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  Em hãy đọc lại các bài học STEM phía trên và bấm &quot;Làm lại thử thách&quot; để đạt từ 4/5 câu và nhận Giấy chứng nhận Đại sứ Xanh nhé!
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

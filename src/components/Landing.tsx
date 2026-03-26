'use client';

interface LandingProps {
  onStart: () => void;
  onShowRanking: () => void;
}

export default function Landing({ onStart, onShowRanking }: LandingProps) {
  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🧪</div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#171717] mb-2">
            Guess the Molecule
          </h1>
          <p className="text-sm text-[#525252] font-light leading-relaxed">
            단계별 힌트를 통해 어떤 분자인지 추론해보세요!<br />
            빠르게 맞출수록 높은 점수를 받습니다.
          </p>
        </div>

        {/* Rules */}
        <div className="rounded-2xl bg-[#f9f9f9] p-5 mb-6 text-sm text-[#525252] font-light">
          <div className="grid grid-cols-4 gap-3 text-center mb-4">
            {[
              { stage: '1단계', pts: '10점', color: 'text-[#DC2626]' },
              { stage: '2단계', pts: '6점', color: 'text-[#EA580C]' },
              { stage: '3단계', pts: '4점', color: 'text-[#CA8A04]' },
              { stage: '4단계', pts: '2점', color: 'text-[#16A34A]' },
            ].map(({ stage, pts, color }) => (
              <div key={stage}>
                <span className="text-xs text-[#a3a3a3] block">{stage}</span>
                <span className={`text-base font-semibold ${color}`}>{pts}</span>
              </div>
            ))}
          </div>
          <ul className="space-y-1.5 text-xs text-[#737373]">
            <li>• 단계가 올라갈수록 쉬운 힌트가 추가됩니다</li>
            <li>• 한 단계당 시간 제한은 <strong className="text-[#171717]">10초</strong>입니다</li>
            <li>• 정답을 맞추면 다음 분자로, 4단계에서도 못 맞추면 게임 종료!</li>
            <li>• 연속으로 맞추면 점수가 계속 누적됩니다</li>
          </ul>
        </div>

        {/* Buttons */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl bg-[#6366F1] text-white font-medium text-lg transition-all hover:bg-[#4F46E5] hover:shadow-lg active:scale-[0.98]"
        >
          게임 시작
        </button>

        <button
          onClick={onShowRanking}
          className="w-full py-3 mt-3 rounded-2xl border border-[#e5e5e5] text-sm text-[#737373] font-light transition-all hover:bg-[#f9f9f9] hover:border-[#d4d4d4] active:scale-[0.99]"
        >
          랭킹 보기
        </button>

        {/* Hint */}
        <p className="text-xs text-[#a3a3a3] font-light text-center mt-4">
          고등학교 화학 교육과정 범위의 분자들이 출제됩니다
        </p>
      </div>
    </div>
  );
}

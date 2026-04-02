'use client';

import Image from 'next/image';

interface LandingProps {
  onStart: () => void;
  onShowRanking: () => void;
}

export default function Landing({ onStart, onShowRanking }: LandingProps) {
  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="animate-float inline-block mb-4">
            <Image
              src="/logo.png"
              alt="Guess the Molecule"
              width={220}
              height={100}
              priority
              className="mx-auto drop-shadow-lg"
            />
          </div>
          <p className="text-sm text-[#525252] font-light leading-relaxed">
            단계별 힌트를 통해 어떤 분자인지 추론해보세요!<br />
            빠르게 맞출수록 높은 점수를 받습니다.
          </p>
        </div>

        {/* Score Rules */}
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm p-5 mb-6 text-sm text-[#525252] font-light">
          <div className="grid grid-cols-4 gap-3 text-center mb-4">
            {[
              { stage: '1단계', pts: '10점', color: 'text-[#DC2626]', bg: 'bg-red-50' },
              { stage: '2단계', pts: '6점', color: 'text-[#EA580C]', bg: 'bg-orange-50' },
              { stage: '3단계', pts: '4점', color: 'text-[#CA8A04]', bg: 'bg-yellow-50' },
              { stage: '4단계', pts: '2점', color: 'text-[#16A34A]', bg: 'bg-green-50' },
            ].map(({ stage, pts, color, bg }) => (
              <div key={stage} className={`${bg} rounded-xl py-2.5 px-1`}>
                <span className="text-[10px] text-[#a3a3a3] font-medium block mb-0.5">{stage}</span>
                <span className={`text-lg font-bold ${color}`}>{pts}</span>
              </div>
            ))}
          </div>
          <ul className="space-y-2 text-xs text-[#737373]">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-px">&#9679;</span>
              <span>단계가 올라갈수록 쉬운 힌트가 추가됩니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-px">&#9679;</span>
              <span>한 단계당 시간 제한은 <strong className="text-[#171717]">10초</strong>입니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-px">&#9679;</span>
              <span>정답을 맞추면 다음 분자로, 4단계에서도 못 맞추면 게임 종료!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-px">&#9679;</span>
              <span>연속으로 맞추면 점수가 계속 누적됩니다</span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl btn-primary text-white font-semibold text-lg"
        >
          게임 시작
        </button>

        <button
          onClick={onShowRanking}
          className="w-full py-3 mt-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e5e5e5] text-sm text-[#737373] font-light transition-all hover:bg-white hover:border-[#d4d4d4] hover:shadow-sm active:scale-[0.99]"
        >
          랭킹 보기
        </button>

        {/* Hint */}
        <p className="text-[11px] text-[#a3a3a3] font-light text-center mt-5">
          고등학교 화학 교육과정 범위의 분자들이 출제됩니다
        </p>
      </div>
    </div>
  );
}

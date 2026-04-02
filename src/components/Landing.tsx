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

      {/* Footer */}
      <footer className="w-full py-4 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-3">
          <span className="text-[11px] text-[#a3a3a3] font-light">
            &copy; 2026 사이음(sci_eum). 과학의 사이, 사람을 잇다.
          </span>
          <div className="flex items-center gap-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sci_eum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@chem_is_try_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#FF0000] transition-colors"
              aria-label="YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

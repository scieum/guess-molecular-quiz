'use client';

import { Molecule } from '@/lib/molecules';

interface AnswerRecord {
  molecule: Molecule;
  points: number; // 0 if failed
  stage: number; // 0-3
}

interface GameOverProps {
  totalScore: number;
  answers: AnswerRecord[];
  failedMolecule: Molecule;
  onRestart: () => void;
}

export default function GameOver({
  totalScore,
  answers,
  failedMolecule,
  onRestart,
}: GameOverProps) {
  const correctCount = answers.filter((a) => a.points > 0).length;

  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* Result Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">
            {totalScore >= 30 ? '🏆' : totalScore >= 15 ? '🧪' : '🔬'}
          </div>
          <h2 className="text-xl font-semibold text-[#171717] mb-1">게임 종료!</h2>
          <div className="text-5xl font-bold text-[#6366F1] my-3">
            {totalScore}<span className="text-xl font-medium text-[#a3a3a3] ml-1">점</span>
          </div>
          <p className="text-sm text-[#525252] font-light">
            {correctCount}개의 분자를 맞추셨습니다
          </p>
        </div>

        {/* Failed molecule reveal */}
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-4 mb-4 text-center">
          <p className="text-xs text-red-400 font-medium mb-1">마지막 정답</p>
          <p className="text-2xl font-bold text-red-600">{failedMolecule.formula}</p>
          <p className="text-sm text-red-500">{failedMolecule.nameKorean} ({failedMolecule.nameEnglish})</p>
        </div>

        {/* Answer history */}
        {answers.length > 0 && (
          <div className="rounded-2xl bg-[#f9f9f9] p-4 mb-6">
            <h3 className="text-xs font-medium text-[#a3a3a3] mb-3">맞춘 분자들</h3>
            <div className="space-y-2">
              {answers
                .filter((a) => a.points > 0)
                .map((a, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#a3a3a3] w-5">#{idx + 1}</span>
                      <span className="font-medium text-sm text-[#171717]">
                        {a.molecule.formula}
                      </span>
                      <span className="text-xs text-[#737373]">{a.molecule.nameKorean}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#a3a3a3]">{a.stage + 1}단계</span>
                      <span className="text-sm font-bold text-green-600">+{a.points}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Grade comment */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#525252] font-light">
            {totalScore >= 50
              ? '놀라운 분자 전문가!'
              : totalScore >= 30
              ? '분자를 잘 알고 있네요!'
              : totalScore >= 15
              ? '좋은 시작이에요!'
              : '화학 공부를 더 해볼까요?'}
          </p>
        </div>

        {/* Restart */}
        <button
          onClick={onRestart}
          className="w-full py-4 rounded-2xl bg-[#6366F1] text-white font-medium text-lg transition-all hover:bg-[#4F46E5] hover:shadow-lg active:scale-[0.98]"
        >
          다시 도전하기
        </button>
      </div>
    </div>
  );
}

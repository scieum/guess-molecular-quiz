'use client';

import { useState } from 'react';
import { Molecule } from '@/lib/molecules';
import ScoreSubmitForm from './ScoreSubmitForm';
import RankingBoard from './RankingBoard';

interface AnswerRecord {
  molecule: Molecule;
  points: number;
  stage: number;
}

interface GameOverProps {
  totalScore: number;
  answers: AnswerRecord[];
  failedMolecule: Molecule | null;
  isPerfectClear?: boolean;
  onRestart: () => void;
}

export default function GameOver({
  totalScore,
  answers,
  failedMolecule,
  isPerfectClear,
  onRestart,
}: GameOverProps) {
  const [phase, setPhase] = useState<'result' | 'ranking'>('result');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const correctCount = answers.filter((a) => a.points > 0).length;
  const roundReached = correctCount;
  const perfectCount = answers.filter((a) => a.points === 10).length;

  if (phase === 'ranking') {
    return <RankingBoard highlightId={submittedId} onRestart={onRestart} />;
  }

  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col animate-slide-up">
        {/* Result Header */}
        <div className="text-center mb-4">
          <div className="text-5xl mb-2">
            {isPerfectClear ? '🏆' : totalScore >= 30 ? '🏆' : totalScore >= 15 ? '🧪' : '🔬'}
          </div>
          <h2 className="text-xl font-semibold text-[#171717] mb-1">
            {isPerfectClear ? '완벽한 클리어!' : '게임 종료!'}
          </h2>
          <div className="text-4xl font-bold text-[#6366F1] my-2">
            {totalScore}<span className="text-lg font-medium text-[#a3a3a3] ml-1">점</span>
          </div>
          <p className="text-sm text-[#525252] font-light">
            {isPerfectClear ? '모든 분자를 맞추셨습니다!' : `${correctCount}개의 분자를 맞추셨습니다`}
          </p>
        </div>

        {/* Failed molecule reveal */}
        {failedMolecule && (
          <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-3 mb-3 text-center">
            <p className="text-xs text-red-400 font-medium mb-1">마지막 정답</p>
            <p className="text-2xl font-bold text-red-600">{failedMolecule.formula}</p>
            <p className="text-sm text-red-500">{failedMolecule.nameKorean} ({failedMolecule.nameEnglish})</p>
          </div>
        )}

        {/* Score submit form */}
        <div className="mb-4">
          <ScoreSubmitForm
            totalScore={totalScore}
            roundReached={roundReached}
            perfectCount={perfectCount}
            onSubmitted={(id) => {
              setSubmittedId(id);
              setPhase('ranking');
            }}
            onSkip={() => setPhase('ranking')}
          />
        </div>

        {/* Answer history — collapsible */}
        {answers.filter((a) => a.points > 0).length > 0 && (
          <details className="rounded-2xl bg-[#f9f9f9] p-4 mb-4">
            <summary className="text-xs font-medium text-[#a3a3a3] cursor-pointer">
              맞춘 분자들 보기 ({answers.filter((a) => a.points > 0).length}개)
            </summary>
            <div className="space-y-2 mt-3">
              {answers
                .filter((a) => a.points > 0)
                .map((a, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#a3a3a3] w-5">#{idx + 1}</span>
                      <span className="font-medium text-sm text-[#171717]">{a.molecule.formula}</span>
                      <span className="text-xs text-[#737373]">{a.molecule.nameKorean}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#a3a3a3]">{a.stage + 1}단계</span>
                      <span className="text-sm font-bold text-green-600">+{a.points}</span>
                    </div>
                  </div>
                ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

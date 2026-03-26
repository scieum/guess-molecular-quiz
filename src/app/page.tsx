'use client';

import { useState, useCallback, useMemo } from 'react';
import { Molecule, molecules, shuffle } from '@/lib/molecules';
import Landing from '@/components/Landing';
import GameBoard from '@/components/GameBoard';
import GameOver from '@/components/GameOver';

interface AnswerRecord {
  molecule: Molecule;
  points: number;
  stage: number;
}

type Phase = 'landing' | 'playing' | 'gameover';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [queue, setQueue] = useState<Molecule[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [failedMolecule, setFailedMolecule] = useState<Molecule | null>(null);

  const currentMolecule = useMemo(() => queue[currentIdx] ?? null, [queue, currentIdx]);

  const handleStart = useCallback(() => {
    const shuffled = shuffle(molecules);
    setQueue(shuffled);
    setCurrentIdx(0);
    setTotalScore(0);
    setAnswers([]);
    setFailedMolecule(null);
    setPhase('playing');
  }, []);

  const handleCorrect = useCallback(
    (points: number, stage: number) => {
      if (!currentMolecule) return;
      setTotalScore((s) => s + points);
      setAnswers((prev) => [
        ...prev,
        { molecule: currentMolecule, points, stage },
      ]);
      setCurrentIdx((i) => i + 1);
    },
    [currentMolecule]
  );

  const handleFail = useCallback(() => {
    if (!currentMolecule) return;
    setFailedMolecule(currentMolecule);
    setPhase('gameover');
  }, [currentMolecule]);

  const handleRestart = useCallback(() => {
    setPhase('landing');
  }, []);

  // If we've exhausted all molecules, game over (win!)
  if (phase === 'playing' && currentIdx >= queue.length && queue.length > 0) {
    return (
      <div className="min-h-dvh flex flex-col py-6 px-4">
        <div className="max-w-lg w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-[#171717] mb-2">완벽한 클리어!</h2>
          <p className="text-5xl font-bold text-[#6366F1] my-3">
            {totalScore}<span className="text-xl font-medium text-[#a3a3a3] ml-1">점</span>
          </p>
          <p className="text-sm text-[#525252] font-light mb-6">
            모든 분자를 맞추셨습니다!
          </p>
          <button
            onClick={handleRestart}
            className="w-full py-4 rounded-2xl bg-[#6366F1] text-white font-medium text-lg transition-all hover:bg-[#4F46E5] hover:shadow-lg active:scale-[0.98]"
          >
            다시 도전하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-white">
      {phase === 'landing' && <Landing onStart={handleStart} />}

      {phase === 'playing' && currentMolecule && (
        <GameBoard
          key={currentMolecule.id}
          molecule={currentMolecule}
          moleculeIndex={currentIdx}
          totalScore={totalScore}
          onCorrect={handleCorrect}
          onFail={handleFail}
        />
      )}

      {phase === 'gameover' && failedMolecule && (
        <GameOver
          totalScore={totalScore}
          answers={answers}
          failedMolecule={failedMolecule}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

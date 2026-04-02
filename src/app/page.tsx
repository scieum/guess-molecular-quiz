'use client';

import { useState, useCallback, useMemo } from 'react';
import { Molecule, molecules, shuffle } from '@/lib/molecules';
import Landing from '@/components/Landing';
import GameBoard from '@/components/GameBoard';
import GameOver from '@/components/GameOver';
import RankingBoard from '@/components/RankingBoard';

interface AnswerRecord {
  molecule: Molecule;
  points: number;
  stage: number;
}

type Phase = 'landing' | 'playing' | 'gameover' | 'ranking';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [queue, setQueue] = useState<Molecule[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [failedMolecule, setFailedMolecule] = useState<Molecule | null>(null);
  const [isPerfectClear, setIsPerfectClear] = useState(false);

  const currentMolecule = useMemo(() => queue[currentIdx] ?? null, [queue, currentIdx]);

  const handleStart = useCallback(() => {
    const shuffled = shuffle(molecules);
    setQueue(shuffled);
    setCurrentIdx(0);
    setTotalScore(0);
    setAnswers([]);
    setFailedMolecule(null);
    setIsPerfectClear(false);
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

  // If we've exhausted all molecules — perfect clear
  if (phase === 'playing' && currentIdx >= queue.length && queue.length > 0) {
    if (!isPerfectClear) {
      setIsPerfectClear(true);
      setPhase('gameover');
    }
  }

  return (
    <div className="min-h-dvh bg-[#f8fafc]">
      {phase === 'landing' && (
        <Landing onStart={handleStart} onShowRanking={() => setPhase('ranking')} />
      )}

      {phase === 'playing' && currentMolecule && (
        <GameBoard
          key={currentMolecule.id}
          molecule={currentMolecule}
          moleculeIndex={currentIdx}
          totalScore={totalScore}
          onCorrect={handleCorrect}
          onFail={handleFail}
          onQuit={handleRestart}
        />
      )}

      {phase === 'gameover' && (
        <GameOver
          totalScore={totalScore}
          answers={answers}
          failedMolecule={failedMolecule}
          isPerfectClear={isPerfectClear}
          onRestart={handleRestart}
        />
      )}

      {phase === 'ranking' && (
        <RankingBoard onRestart={handleRestart} />
      )}
    </div>
  );
}

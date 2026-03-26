'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Molecule, STAGE_POINTS, TIME_LIMIT, checkAnswer } from '@/lib/molecules';

interface GameBoardProps {
  molecule: Molecule;
  moleculeIndex: number;
  totalScore: number;
  onCorrect: (points: number, stage: number) => void;
  onFail: () => void;
}

const STAGE_COLORS = [
  { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-500', text: 'text-red-700' },
  { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-500', text: 'text-orange-700' },
  { bg: 'bg-yellow-50', border: 'border-yellow-200', badge: 'bg-yellow-600', text: 'text-yellow-700' },
  { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-500', text: 'text-green-700' },
];

export default function GameBoard({
  molecule,
  moleculeIndex,
  totalScore,
  onCorrect,
  onFail,
}: GameBoardProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [frozen, setFrozen] = useState(false);

  // All mutable game state in refs to avoid effect dependency issues
  const stageRef = useRef(0);
  const frozenRef = useRef(false);
  const timeRef = useRef(TIME_LIMIT);
  const onFailRef = useRef(onFail);
  const onCorrectRef = useRef(onCorrect);
  const composingRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hintEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewHeight, setViewHeight] = useState<number | null>(null);

  // Track visual viewport to handle mobile keyboard
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const onResize = () => {
      setViewHeight(vv.height);
    };

    vv.addEventListener('resize', onResize);
    onResize();
    return () => vv.removeEventListener('resize', onResize);
  }, []);

  // Auto-scroll to latest hint when stage changes or keyboard opens
  const scrollToHint = useCallback(() => {
    requestAnimationFrame(() => {
      hintEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }, []);

  useEffect(() => {
    scrollToHint();
  }, [currentStage, viewHeight, scrollToHint]);

  // Keep callback refs fresh
  onFailRef.current = onFail;
  onCorrectRef.current = onCorrect;

  // Single timer effect — only restarts when molecule changes
  useEffect(() => {
    // Reset everything for new molecule
    stageRef.current = 0;
    frozenRef.current = false;
    timeRef.current = TIME_LIMIT;
    setCurrentStage(0);
    setTimeLeft(TIME_LIMIT);
    setFrozen(false);
    setAnswer('');
    setFeedback(null);
    setTimeout(() => inputRef.current?.focus(), 100);

    const interval = setInterval(() => {
      if (frozenRef.current) return;

      timeRef.current -= 1;
      setTimeLeft(timeRef.current);

      if (timeRef.current <= 0) {
        if (stageRef.current < 3) {
          stageRef.current += 1;
          timeRef.current = TIME_LIMIT;
          setCurrentStage(stageRef.current);
          setTimeLeft(TIME_LIMIT);
        } else {
          frozenRef.current = true;
          setFrozen(true);
          onFailRef.current();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [molecule.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (composingRef.current) return;
    if (!answer.trim() || frozenRef.current) return;

    if (checkAnswer(molecule, answer)) {
      frozenRef.current = true;
      setFeedback('correct');
      setFrozen(true);
      const points = STAGE_POINTS[stageRef.current];
      const stage = stageRef.current;
      setTimeout(() => onCorrectRef.current(points, stage), 1500);
    } else {
      setFeedback('wrong');
      setAnswer('');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handleNextHint = () => {
    if (stageRef.current < 3 && !frozenRef.current) {
      stageRef.current += 1;
      timeRef.current = TIME_LIMIT;
      setCurrentStage(stageRef.current);
      setTimeLeft(TIME_LIMIT);
      inputRef.current?.focus();
    }
  };

  const timerPercent = (timeLeft / TIME_LIMIT) * 100;
  const timerColor =
    timeLeft > 6 ? 'bg-green-500' : timeLeft > 3 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div
      ref={containerRef}
      className="flex flex-col"
      style={{ height: viewHeight ? `${viewHeight}px` : '100dvh' }}
    >
      {/* Top bar */}
      <div className="shrink-0 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-[#171717]">
                #{moleculeIndex + 1}
              </span>
              <span className="text-xs text-[#a3a3a3]">
                {currentStage + 1}단계 · {STAGE_POINTS[currentStage]}점
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#a3a3a3]">총점</span>
              <span className="text-lg font-bold text-[#6366F1]">{totalScore}</span>
            </div>
          </div>

          {!frozen && (
            <>
              <div className="h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-linear ${timerColor}`}
                  style={{ width: `${timerPercent}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className={`text-xs font-mono font-medium ${timeLeft <= 3 ? 'text-red-500' : 'text-[#a3a3a3]'}`}>
                  {timeLeft}초
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hint cards */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-2">
        <div className="max-w-2xl mx-auto space-y-1.5">
          {molecule.hints.map((stageHints, stageIdx) => {
            if (stageIdx > currentStage) return null;
            const colors = STAGE_COLORS[stageIdx];
            const isActive = stageIdx === currentStage && !frozen;

            return (
              <div
                key={stageIdx}
                className={`rounded-lg border px-3 py-2 transition-all animate-slide-up ${colors.bg} ${colors.border} ${
                  isActive ? 'ring-2 ring-offset-1 ring-[#6366F1]/30' : 'opacity-80'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold text-white px-1.5 py-px rounded-full ${colors.badge}`}>
                    {stageIdx + 1}단계
                  </span>
                  <span className="text-[10px] text-[#a3a3a3]">
                    {STAGE_POINTS[stageIdx]}점
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {stageHints.map((hint, hintIdx) => (
                    <li key={hintIdx} className={`text-sm font-light ${colors.text} flex items-start gap-1.5`}>
                      <span className="shrink-0">💡</span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div ref={hintEndRef} />
        </div>
      </div>

      {/* Correct overlay */}
      {feedback === 'correct' && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/20 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl animate-bounce-in">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-xl font-bold text-[#171717] mb-1">정답!</p>
            <p className="text-2xl font-bold text-[#6366F1]">{molecule.formula}</p>
            <p className="text-sm text-[#525252] mt-1">{molecule.nameKorean}</p>
            <p className="text-lg font-bold text-green-600 mt-3">+{STAGE_POINTS[currentStage]}점</p>
          </div>
        </div>
      )}

      {/* Bottom input */}
      <div className="shrink-0 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-2xl mx-auto px-4 py-3">
          {feedback === 'wrong' && (
            <p className="text-xs text-red-500 font-medium mb-2 animate-fade-in text-center">
              틀렸습니다! 다시 시도해보세요.
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onFocus={scrollToHint}
              onCompositionStart={() => { composingRef.current = true; }}
              onCompositionEnd={(e) => {
                composingRef.current = false;
                setAnswer(e.currentTarget.value);
              }}
              placeholder="분자식 또는 이름 (예: H2O, 물)"
              disabled={frozen}
              className="flex-1 px-4 py-3 rounded-xl border border-[#e5e5e5] text-base font-light placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] disabled:opacity-50"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!answer.trim() || frozen}
              className="px-5 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-medium transition-all hover:bg-[#4F46E5] active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              제출
            </button>
          </form>

          {currentStage < 3 && !frozen && (
            <button
              onClick={handleNextHint}
              className="w-full mt-2 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] font-light transition-all hover:bg-[#f9f9f9] hover:border-[#d4d4d4] active:scale-[0.99]"
            >
              추가 힌트 보기 →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

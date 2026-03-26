'use client';

import { useState, useEffect } from 'react';

interface RankingEntry {
  id: string;
  nickname: string;
  school_name: string;
  region_name: string;
  total_score: number;
  round_reached: number;
  perfect_count: number;
  created_at: string;
}

interface RankingBoardProps {
  highlightId?: string | null;
  onRestart: () => void;
}

export default function RankingBoard({ highlightId, onRestart }: RankingBoardProps) {
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rankings?limit=50')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRankings(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col animate-slide-up">
        <div className="text-center mb-5">
          <div className="text-4xl mb-2">🏅</div>
          <h2 className="text-xl font-semibold text-[#171717]">랭킹 보드</h2>
        </div>

        <div className="flex-1 overflow-y-auto rounded-2xl bg-[#f9f9f9] p-4 mb-4">
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 bg-white rounded-lg animate-pulse" />
              ))}
            </div>
          ) : rankings.length === 0 ? (
            <p className="text-sm text-[#a3a3a3] text-center py-8">아직 등록된 기록이 없습니다</p>
          ) : (
            <div className="space-y-1.5">
              {/* Header */}
              <div className="grid grid-cols-[2rem_1fr_1fr_3rem_2.5rem_2.5rem] gap-1 px-2 py-1 text-[10px] text-[#a3a3a3] font-medium">
                <span>#</span>
                <span>닉네임</span>
                <span>소속교</span>
                <span className="text-right">점수</span>
                <span className="text-right">R</span>
                <span className="text-right">10p</span>
              </div>

              {rankings.map((entry, idx) => {
                const isHighlighted = entry.id === highlightId;
                const rankEmoji = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;

                return (
                  <div
                    key={entry.id}
                    className={`grid grid-cols-[2rem_1fr_1fr_3rem_2.5rem_2.5rem] gap-1 items-center px-2 py-2.5 rounded-lg ${
                      isHighlighted
                        ? 'bg-[#EEF2FF] border border-[#6366F1]/30 ring-1 ring-[#6366F1]/20'
                        : 'bg-white'
                    }`}
                  >
                    <span className="text-xs font-bold text-[#a3a3a3]">
                      {rankEmoji ?? idx + 1}
                    </span>
                    <span className="text-xs font-medium text-[#171717] truncate">
                      {entry.nickname}
                    </span>
                    <span className="text-[10px] text-[#737373] truncate">
                      {entry.school_name}
                    </span>
                    <span className="text-xs font-bold text-[#6366F1] text-right">
                      {entry.total_score}
                    </span>
                    <span className="text-[10px] text-[#737373] text-right">
                      {entry.round_reached}
                    </span>
                    <span className="text-[10px] text-red-500 font-medium text-right">
                      {entry.perfect_count}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

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

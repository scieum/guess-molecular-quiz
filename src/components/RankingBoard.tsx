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

const MEDAL_EMOJIS = ['🥇', '🥈', '🥉'];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  if (isToday) return '오늘';
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return '어제';
  const diffDay = Math.floor((now.getTime() - date.getTime()) / 86400000);
  return `${diffDay}일 전`;
}

export default function RankingBoard({ highlightId, onRestart }: RankingBoardProps) {
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rankings?limit=20')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRankings(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-dvh flex flex-col py-6 px-4">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col animate-slide-up">
        {/* Header */}
        <div className="text-center mb-1 pt-2">
          <h2 className="text-2xl font-bold text-[#171717]">랭킹 보드</h2>
          <p className="text-sm text-[#a3a3a3] font-light mt-1">상위 20명의 기록</p>
        </div>

        {/* Ranking list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-2.5">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-20 bg-[#f5f5f5] rounded-2xl animate-pulse" />
            ))
          ) : rankings.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-3">🏅</div>
              <p className="text-sm text-[#a3a3a3]">아직 등록된 기록이 없습니다</p>
            </div>
          ) : (
            rankings.map((entry, idx) => {
              const isHighlighted = entry.id === highlightId;
              const medal = MEDAL_EMOJIS[idx];
              const isTop3 = idx < 3;

              return (
                <div
                  key={entry.id}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${
                    isHighlighted
                      ? 'bg-[#EEF2FF] border-2 border-[#6366F1]/40 shadow-sm'
                      : isTop3
                      ? 'bg-white border border-[#e5e5e5] shadow-sm'
                      : 'bg-white border border-[#f0f0f0]'
                  }`}
                >
                  {/* Rank */}
                  <div className="shrink-0 w-10 flex flex-col items-center">
                    {medal ? (
                      <span className="text-2xl">{medal}</span>
                    ) : (
                      <span className="text-sm font-bold text-[#a3a3a3]">{idx + 1}</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[15px] font-semibold text-[#171717] truncate block">
                      {entry.nickname}
                    </span>
                    <span className="text-xs text-[#a3a3a3] truncate block mt-0.5">
                      {entry.school_name}
                    </span>
                  </div>

                  {/* Score + Date */}
                  <div className="shrink-0 text-right">
                    <span className="text-xl font-bold text-[#6366F1] block">
                      {entry.total_score.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#a3a3a3] block mt-0.5">
                      {formatDate(entry.created_at)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom button */}
        <div className="pt-2 pb-2">
          <button
            onClick={onRestart}
            className="w-full py-4 rounded-2xl bg-[#6366F1] text-white font-medium text-lg transition-all hover:bg-[#4F46E5] hover:shadow-lg active:scale-[0.98]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

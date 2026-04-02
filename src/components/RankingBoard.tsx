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

const MEDAL_EMOJIS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];
const MEDAL_BG = ['bg-amber-50 border-amber-200', 'bg-gray-50 border-gray-200', 'bg-orange-50 border-orange-200'];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}시간 전`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 1) return '오늘';
  if (diffDay === 1) return '어제';
  return `${diffDay}일 전`;
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
    <div className="min-h-dvh flex flex-col py-6 px-4 bg-[#f8fafc]">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col animate-slide-up">
        {/* Header */}
        <div className="text-center mb-4 pt-2">
          <h2 className="text-2xl font-bold text-[#171717]">랭킹 보드</h2>
          <p className="text-sm text-[#a3a3a3] font-light mt-1">상위 50명의 기록</p>
        </div>

        {/* Ranking list */}
        <div className="flex-1 overflow-y-auto py-2 space-y-2">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-20 bg-white rounded-2xl animate-pulse border border-[#f0f0f0]" />
            ))
          ) : rankings.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-3">{'\u{1F3C5}'}</div>
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
                      ? 'bg-indigo-50 border-2 border-[#6366F1]/40 shadow-md animate-pulse-ring'
                      : isTop3
                      ? `${MEDAL_BG[idx]} border shadow-sm`
                      : 'bg-white border border-[#f0f0f0] hover:shadow-sm hover:border-[#e5e5e5]'
                  }`}
                >
                  {/* Rank */}
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                    {medal ? (
                      <span className="text-2xl">{medal}</span>
                    ) : (
                      <span className="text-sm font-bold text-[#c0c0c0] bg-[#f5f5f5] w-8 h-8 rounded-full flex items-center justify-center">{idx + 1}</span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-semibold text-[#171717] truncate">
                        {entry.nickname}
                      </span>
                      {entry.perfect_count > 0 && (
                        <span className="shrink-0 text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full border border-red-100">
                          10p x{entry.perfect_count}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs text-[#a3a3a3] truncate">{entry.school_name}</span>
                      <span className="text-[10px] text-[#d4d4d4]">&middot;</span>
                      <span className="text-xs text-[#a3a3a3]">R{entry.round_reached}</span>
                      <span className="text-[10px] text-[#d4d4d4]">&middot;</span>
                      <span className="text-xs text-[#a3a3a3] shrink-0">{formatDate(entry.created_at)}</span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="shrink-0 text-right">
                    <span className="text-xl font-bold text-[#6366F1]">
                      {entry.total_score.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom button */}
        <div className="pt-3 pb-2">
          <button
            onClick={onRestart}
            className="w-full py-4 rounded-2xl btn-primary text-white font-semibold text-lg"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

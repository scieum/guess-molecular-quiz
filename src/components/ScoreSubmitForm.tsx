'use client';

import { useState } from 'react';
import SchoolSearch from './SchoolSearch';

interface ScoreSubmitFormProps {
  totalScore: number;
  roundReached: number;
  perfectCount: number;
  onSubmitted: (id: string) => void;
  onSkip: () => void;
}

interface SchoolInfo {
  code: string;
  name: string;
  regionCode: string;
  regionName: string;
}

export default function ScoreSubmitForm({
  totalScore,
  roundReached,
  perfectCount,
  onSubmitted,
  onSkip,
}: ScoreSubmitFormProps) {
  const [nickname, setNickname] = useState('');
  const [school, setSchool] = useState<SchoolInfo | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = nickname.trim().length > 0 && school !== null && !submitting;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !school) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/rankings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nickname: nickname.trim(),
          school_name: school.name,
          school_code: school.code,
          region_code: school.regionCode,
          region_name: school.regionName,
          total_score: totalScore,
          round_reached: roundReached,
          perfect_count: perfectCount,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || '제출 실패');
      onSubmitted(data.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : '제출 중 오류가 발생했습니다');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#f9f9f9] p-5 space-y-4">
      <h3 className="text-sm font-semibold text-[#171717]">랭킹 등록</h3>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white rounded-lg py-2">
          <span className="text-lg font-bold text-[#6366F1]">{totalScore}</span>
          <span className="text-[10px] text-[#a3a3a3] block">총점</span>
        </div>
        <div className="bg-white rounded-lg py-2">
          <span className="text-lg font-bold text-[#171717]">{roundReached}</span>
          <span className="text-[10px] text-[#a3a3a3] block">라운드</span>
        </div>
        <div className="bg-white rounded-lg py-2">
          <span className="text-lg font-bold text-red-500">{perfectCount}</span>
          <span className="text-[10px] text-[#a3a3a3] block">10점</span>
        </div>
      </div>

      {/* Nickname */}
      <div>
        <label className="text-xs text-[#737373] font-medium block mb-1">닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임 입력 (최대 20자)"
          maxLength={20}
          className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-light placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1]"
        />
      </div>

      {/* School */}
      <div>
        <label className="text-xs text-[#737373] font-medium block mb-1">소속교</label>
        <SchoolSearch onSelect={setSchool} />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onSkip}
          className="flex-1 py-3 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] font-light transition-all hover:bg-white active:scale-[0.98]"
        >
          건너뛰기
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className="flex-1 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-medium transition-all hover:bg-[#4F46E5] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {submitting ? '등록 중...' : '랭킹 등록'}
        </button>
      </div>
    </form>
  );
}

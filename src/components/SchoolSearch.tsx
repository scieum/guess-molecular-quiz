'use client';

import { useState } from 'react';
import { REGIONS } from '@/lib/regions';

interface SchoolSearchProps {
  onSelect: (school: { code: string; name: string; regionCode: string; regionName: string }) => void;
}

export default function SchoolSearch({ onSelect }: SchoolSearchProps) {
  const [regionCode, setRegionCode] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    if (!regionCode || !schoolName.trim()) return;
    const region = REGIONS.find((r) => r.code === regionCode);
    setSubmitted(true);
    onSelect({
      code: '',
      name: schoolName.trim(),
      regionCode,
      regionName: region?.name ?? '',
    });
  };

  return (
    <div className="space-y-2">
      <select
        value={regionCode}
        onChange={(e) => {
          setRegionCode(e.target.value);
          setSubmitted(false);
        }}
        className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-light text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] bg-white"
      >
        <option value="">지역 선택</option>
        {REGIONS.map((r) => (
          <option key={r.code} value={r.code}>
            {r.name}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <input
          type="text"
          value={schoolName}
          onChange={(e) => {
            setSchoolName(e.target.value);
            setSubmitted(false);
          }}
          placeholder={regionCode ? '학교 이름 입력 (예: 속초고등학교)' : '먼저 지역을 선택하세요'}
          disabled={!regionCode}
          className="flex-1 px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-base font-light placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] disabled:opacity-50"
          autoComplete="off"
        />
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!regionCode || !schoolName.trim() || submitted}
          className="px-4 py-2.5 rounded-xl bg-[#6366F1] text-white text-sm font-medium transition-all hover:bg-[#4F46E5] active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          확인
        </button>
      </div>

      {submitted && (
        <p className="text-xs text-green-600 font-medium">
          {schoolName} 선택됨
        </p>
      )}
    </div>
  );
}

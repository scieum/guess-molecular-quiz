'use client';

import { useState, useEffect, useRef } from 'react';
import { REGIONS } from '@/lib/regions';

interface School {
  code: string;
  name: string;
  address: string;
}

interface SchoolSearchProps {
  onSelect: (school: { code: string; name: string; regionCode: string; regionName: string }) => void;
}

export default function SchoolSearch({ onSelect }: SchoolSearchProps) {
  const [regionCode, setRegionCode] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<School[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const composingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // debounced search
  useEffect(() => {
    if (composingRef.current) return;
    if (!regionCode || query.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    if (selected) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/schools?region=${regionCode}&query=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setResults(data);
          setOpen(data.length > 0);
        }
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [regionCode, query, selected]);

  const handleSelect = (school: School) => {
    const region = REGIONS.find((r) => r.code === regionCode);
    setQuery(school.name);
    setSelected(school.name);
    setOpen(false);
    onSelect({
      code: school.code,
      name: school.name,
      regionCode,
      regionName: region?.name ?? '',
    });
  };

  return (
    <div ref={wrapperRef} className="space-y-2">
      <select
        value={regionCode}
        onChange={(e) => {
          setRegionCode(e.target.value);
          setSelected(null);
          setQuery('');
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

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
          }}
          onCompositionStart={() => { composingRef.current = true; }}
          onCompositionEnd={(e) => {
            composingRef.current = false;
            setQuery(e.currentTarget.value);
          }}
          onFocus={() => results.length > 0 && !selected && setOpen(true)}
          placeholder={regionCode ? '학교 이름 검색 (2글자 이상)' : '먼저 지역을 선택하세요'}
          disabled={!regionCode}
          className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-base font-light placeholder:text-[#a3a3a3] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] disabled:opacity-50"
          autoComplete="off"
        />
        {loading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#a3a3a3]">검색 중...</span>
        )}

        {open && results.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-[#e5e5e5] rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {results.map((s) => (
              <li
                key={s.code}
                onClick={() => handleSelect(s)}
                className="px-3 py-2 hover:bg-[#f5f3ff] cursor-pointer border-b border-[#f0f0f0] last:border-b-0"
              >
                <span className="text-sm font-medium text-[#171717]">{s.name}</span>
                <span className="text-xs text-[#a3a3a3] block">{s.address}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected && (
        <p className="text-xs text-green-600 font-medium">
          {selected} 선택됨
        </p>
      )}
    </div>
  );
}

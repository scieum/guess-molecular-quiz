'use client';

import { useState, useEffect, useMemo } from 'react';
import { REGIONS } from '@/lib/regions';

interface School {
  code: string;
  name: string;
  district: string;
}

interface SchoolSearchProps {
  onSelect: (school: { code: string; name: string; regionCode: string; regionName: string }) => void;
}

export default function SchoolSearch({ onSelect }: SchoolSearchProps) {
  const [regionCode, setRegionCode] = useState('');
  const [district, setDistrict] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch all high schools when region changes
  useEffect(() => {
    if (!regionCode) {
      setSchools([]);
      setDistrict('');
      setSchoolCode('');
      return;
    }

    setLoading(true);
    setDistrict('');
    setSchoolCode('');
    setSchools([]);

    fetch(`/api/schools?region=${regionCode}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setSchools(data);
      })
      .finally(() => setLoading(false));
  }, [regionCode]);

  // Get unique districts
  const districts = useMemo(() => {
    const set = new Set(schools.map((s) => s.district));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [schools]);

  // Get schools in selected district
  const filteredSchools = useMemo(() => {
    if (!district) return [];
    return schools.filter((s) => s.district === district);
  }, [schools, district]);

  const handleSchoolSelect = (code: string) => {
    setSchoolCode(code);
    const school = schools.find((s) => s.code === code);
    if (school) {
      const region = REGIONS.find((r) => r.code === regionCode);
      onSelect({
        code: school.code,
        name: school.name,
        regionCode,
        regionName: region?.name ?? '',
      });
    }
  };

  return (
    <div className="space-y-2">
      {/* 시/도 선택 */}
      <select
        value={regionCode}
        onChange={(e) => setRegionCode(e.target.value)}
        className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-light text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] bg-white"
      >
        <option value="">시/도 선택</option>
        {REGIONS.map((r) => (
          <option key={r.code} value={r.code}>{r.name}</option>
        ))}
      </select>

      {/* 시/군/구 선택 */}
      <select
        value={district}
        onChange={(e) => {
          setDistrict(e.target.value);
          setSchoolCode('');
        }}
        disabled={!regionCode || loading}
        className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-light text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] bg-white disabled:opacity-50"
      >
        <option value="">
          {loading ? '불러오는 중...' : '시/군/구 선택'}
        </option>
        {districts.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      {/* 학교 선택 */}
      <select
        value={schoolCode}
        onChange={(e) => handleSchoolSelect(e.target.value)}
        disabled={!district}
        className="w-full px-3 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-light text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30 focus:border-[#6366F1] bg-white disabled:opacity-50"
      >
        <option value="">학교 선택</option>
        {filteredSchools.map((s) => (
          <option key={s.code} value={s.code}>{s.name}</option>
        ))}
      </select>

      {schoolCode && (
        <p className="text-xs text-green-600 font-medium">
          {schools.find((s) => s.code === schoolCode)?.name} 선택됨
        </p>
      )}
    </div>
  );
}

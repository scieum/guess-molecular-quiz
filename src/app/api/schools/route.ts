import { NextRequest, NextResponse } from 'next/server';
import { REGIONS } from '@/lib/regions';

interface SchoolRow {
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  ORG_RDNMA: string;
  SCHUL_KND_SC_NM: string;
}

// Extract 시/군/구 from address (e.g. "강원특별자치도 속초시 ..." → "속초시")
function extractDistrict(address: string): string {
  const parts = address.split(' ');
  return parts[1] || '기타';
}

export async function GET(req: NextRequest) {
  const region = req.nextUrl.searchParams.get('region') ?? '';

  if (!REGIONS.some((r) => r.code === region)) {
    return NextResponse.json({ error: '유효하지 않은 지역 코드' }, { status: 400 });
  }

  const apiKey = process.env.NEIS_API_KEY ?? '';

  // Fetch all high schools in the region (paginate if needed)
  const allSchools: { code: string; name: string; district: string }[] = [];
  let page = 1;
  const pageSize = 1000;

  try {
    while (true) {
      const url = new URL('https://open.neis.go.kr/hub/schoolInfo');
      url.searchParams.set('Type', 'json');
      url.searchParams.set('pIndex', String(page));
      url.searchParams.set('pSize', String(pageSize));
      url.searchParams.set('ATPT_OFCDC_SC_CODE', region);
      url.searchParams.set('SCHUL_KND_SC_NM', '고등학교');
      if (apiKey) url.searchParams.set('KEY', apiKey);

      const res = await fetch(url.toString());
      const data = await res.json();

      const rows: SchoolRow[] | undefined = data?.schoolInfo?.[1]?.row;
      if (!rows || rows.length === 0) break;

      for (const r of rows) {
        allSchools.push({
          code: r.SD_SCHUL_CODE,
          name: r.SCHUL_NM,
          district: extractDistrict(r.ORG_RDNMA || ''),
        });
      }

      // If we got fewer than pageSize, we're done
      if (rows.length < pageSize) break;
      page++;
    }

    // Sort by district then name
    allSchools.sort((a, b) => a.district.localeCompare(b.district) || a.name.localeCompare(b.name));

    return NextResponse.json(allSchools);
  } catch {
    return NextResponse.json({ error: 'NEIS API 오류' }, { status: 502 });
  }
}

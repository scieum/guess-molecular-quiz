import { NextRequest, NextResponse } from 'next/server';
import { REGIONS } from '@/lib/regions';

export async function GET(req: NextRequest) {
  const region = req.nextUrl.searchParams.get('region') ?? '';
  const query = req.nextUrl.searchParams.get('query') ?? '';

  if (!REGIONS.some((r) => r.code === region)) {
    return NextResponse.json({ error: '유효하지 않은 지역 코드' }, { status: 400 });
  }
  if (query.length < 2) {
    return NextResponse.json({ error: '검색어는 2글자 이상' }, { status: 400 });
  }

  const apiKey = process.env.NEIS_API_KEY ?? '';
  const url = new URL('https://open.neis.go.kr/hub/schoolInfo');
  url.searchParams.set('Type', 'json');
  url.searchParams.set('pSize', '20');
  url.searchParams.set('ATPT_OFCDC_SC_CODE', region);
  url.searchParams.set('SCHUL_NM', query);
  if (apiKey) url.searchParams.set('KEY', apiKey);

  try {
    const res = await fetch(url.toString());
    const data = await res.json();

    const rows = data?.schoolInfo?.[1]?.row;
    if (!rows) return NextResponse.json([]);

    const schools = rows.map((r: Record<string, string>) => ({
      code: r.SD_SCHUL_CODE,
      name: r.SCHUL_NM,
      address: r.ORG_RDNMA,
    }));

    return NextResponse.json(schools);
  } catch {
    return NextResponse.json({ error: 'NEIS API 오류' }, { status: 502 });
  }
}

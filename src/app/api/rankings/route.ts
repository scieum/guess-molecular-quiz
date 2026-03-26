import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const limit = Number(req.nextUrl.searchParams.get('limit')) || 100;

  const { data, error } = await supabase
    .from('rankings')
    .select('*')
    .order('total_score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(limit);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nickname, school_name, school_code, region_code, region_name, total_score, round_reached, perfect_count } = body;

  if (!nickname || !school_name || !region_code || !region_name || total_score == null || round_reached == null || perfect_count == null) {
    return NextResponse.json({ error: '필수 필드가 누락되었습니다' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('rankings')
    .insert({
      nickname,
      school_name,
      school_code: school_code || null,
      region_code,
      region_name,
      total_score,
      round_reached,
      perfect_count,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

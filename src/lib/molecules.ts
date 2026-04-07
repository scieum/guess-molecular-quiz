export interface Molecule {
  id: string;
  formula: string;
  nameKorean: string;
  nameEnglish: string;
  acceptedAnswers: string[];
  hints: [string[], string[], string[], string[]];
}

export const STAGE_POINTS = [10, 6, 4, 2] as const;
export const TIME_LIMIT = 10; // seconds per stage

export const molecules: Molecule[] = [
  {
    id: 'h2o',
    formula: 'H₂O',
    nameKorean: '물',
    nameEnglish: 'Water',
    acceptedAnswers: ['h2o', 'water', '물', 'h₂o'],
    hints: [
      // Stage 1 (10pts) — 포괄적 힌트
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      // Stage 2 (6pts)
      [
        '중심 원자에 비공유 전자쌍이 2개 있다.',
        '중심 원자는 2주기 원소이다.',
      ],
      // Stage 3 (4pts)
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
      ],
      // Stage 4 (2pts) — 구체적 힌트
      [
        '중심 원자는 산소(O)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 수소(H)와 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'co2',
    formula: 'CO₂',
    nameKorean: '이산화 탄소',
    nameEnglish: 'Carbon Dioxide',
    acceptedAnswers: ['co2', 'co₂', 'carbon dioxide', '이산화탄소', '이산화 탄소'],
    hints: [
      [
        '무극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '쌍극자 모멘트의 합이 0이다.',
        '중심 원자에 비공유 전자쌍이 없다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 직선형이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 16이다.',
        '구성 원소는 탄소(C)와 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'nh3',
    formula: 'NH₃',
    nameKorean: '암모니아',
    nameEnglish: 'Ammonia',
    acceptedAnswers: ['nh3', 'nh₃', 'ammonia', '암모니아'],
    hints: [
      [
        '극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 1개 있다.',
        '구성 원소의 종류는 2가지이다.',
      ],
      [
        '4원자 분자이다.',
        '분자의 구조는 삼각뿔형이다.',
      ],
      [
        '중심 원자는 질소(N)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 질소(N)와 수소(H)이다.',
      ],
    ],
  },
  {
    id: 'ch4',
    formula: 'CH₄',
    nameKorean: '메테인',
    nameEnglish: 'Methane',
    acceptedAnswers: ['ch4', 'ch₄', 'methane', '메테인', '메탄'],
    hints: [
      [
        '무극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '5원자 분자이다.',
        '분자의 구조는 정사면체형이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 탄소(C)와 수소(H)이다.',
      ],
    ],
  },
  {
    id: 'bf3',
    formula: 'BF₃',
    nameKorean: '삼플루오린화 붕소',
    nameEnglish: 'Boron Trifluoride',
    acceptedAnswers: ['bf3', 'bf₃', 'boron trifluoride', '삼플루오린화붕소', '삼플루오린화 붕소'],
    hints: [
      [
        '무극성 분자이다.',
        '평면 구조이다.',
      ],
      [
        '극성 공유 결합을 포함한다.',
        '중심 원자에 비공유 전자쌍이 없다.',
      ],
      [
        '4원자 분자이다.',
        '분자의 구조는 평면 삼각형이다.',
      ],
      [
        '중심 원자는 붕소(B)이다.',
        '원자가 전자 수의 합은 24이다.',
        '구성 원소는 붕소(B)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'nf3',
    formula: 'NF₃',
    nameKorean: '삼플루오린화 질소',
    nameEnglish: 'Nitrogen Trifluoride',
    acceptedAnswers: ['nf3', 'nf₃', 'nitrogen trifluoride', '삼플루오린화질소', '삼플루오린화 질소'],
    hints: [
      [
        '극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '쌍극자 모멘트의 합이 0이 아니다.',
        '중심 원자는 2주기 원소이다.',
      ],
      [
        '4원자 분자이다.',
        '분자의 구조는 삼각뿔형이다.',
      ],
      [
        '중심 원자는 질소(N)이다.',
        '원자가 전자 수의 합은 26이다.',
        '구성 원소는 질소(N)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'of2',
    formula: 'OF₂',
    nameKorean: '이플루오린화 산소',
    nameEnglish: 'Oxygen Difluoride',
    acceptedAnswers: ['of2', 'of₂', 'oxygen difluoride', '이플루오린화산소', '이플루오린화 산소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 2개 있다.',
        '구성 원소의 종류는 2가지이다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
      ],
      [
        '중심 원자는 산소(O)이다.',
        '원자가 전자 수의 합은 20이다.',
        '구성 원소는 산소(O)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'ccl4',
    formula: 'CCl₄',
    nameKorean: '사염화 탄소',
    nameEnglish: 'Carbon Tetrachloride',
    acceptedAnswers: ['ccl4', 'ccl₄', 'carbon tetrachloride', '사염화탄소', '사염화 탄소'],
    hints: [
      [
        '무극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '극성 공유 결합을 포함한다.',
        '쌍극자 모멘트의 합이 0이다.',
      ],
      [
        '5원자 분자이다.',
        '분자의 구조는 정사면체형이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 32이다.',
        '구성 원소는 탄소(C)와 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'cs2',
    formula: 'CS₂',
    nameKorean: '이황화 탄소',
    nameEnglish: 'Carbon Disulfide',
    acceptedAnswers: ['cs2', 'cs₂', 'carbon disulfide', '이황화탄소', '이황화 탄소'],
    hints: [
      [
        '무극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '쌍극자 모멘트의 합이 0이다.',
        '중심 원자에 비공유 전자쌍이 없다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 직선형이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 16이다.',
        '구성 원소는 탄소(C)와 황(S)이다.',
      ],
    ],
  },
  {
    id: 'so2',
    formula: 'SO₂',
    nameKorean: '이산화 황',
    nameEnglish: 'Sulfur Dioxide',
    acceptedAnswers: ['so2', 'so₂', 'sulfur dioxide', '이산화황', '이산화 황'],
    hints: [
      [
        '극성 분자이다.',
        '평면 구조이다.',
      ],
      [
        '중심 원자는 3주기 원소이다.',
        '중심 원자에 비공유 전자쌍이 1개 있다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
      ],
      [
        '중심 원자는 황(S)이다.',
        '원자가 전자 수의 합은 18이다.',
        '구성 원소는 황(S)과 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'h2s',
    formula: 'H₂S',
    nameKorean: '황화 수소',
    nameEnglish: 'Hydrogen Sulfide',
    acceptedAnswers: ['h2s', 'h₂s', 'hydrogen sulfide', '황화수소', '황화 수소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자는 3주기 원소이다.',
        '중심 원자에 비공유 전자쌍이 2개 있다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
      ],
      [
        '중심 원자는 황(S)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 수소(H)와 황(S)이다.',
      ],
    ],
  },
  {
    id: 'hcl',
    formula: 'HCl',
    nameKorean: '염화 수소',
    nameEnglish: 'Hydrogen Chloride',
    acceptedAnswers: ['hcl', 'hydrogen chloride', '염화수소', '염화 수소', '염산'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소의 종류는 2가지이다.',
      ],
      [
        '분자의 구조는 직선형이다.',
        '쌍극자 모멘트의 방향은 전기 음성도가 큰 원자 쪽이다.',
      ],
      [
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 수소(H)와 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'hf',
    formula: 'HF',
    nameKorean: '플루오린화 수소',
    nameEnglish: 'Hydrogen Fluoride',
    acceptedAnswers: ['hf', 'hydrogen fluoride', '플루오린화수소', '플루오린화 수소', '불화수소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '전기 음성도 차이가 매우 큰 결합을 가진다.',
      ],
      [
        '분자의 구조는 직선형이다.',
        '구성 원소 중 전기 음성도가 가장 큰 원소가 포함되어 있다.',
      ],
      [
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 수소(H)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'n2',
    formula: 'N₂',
    nameKorean: '질소',
    nameEnglish: 'Nitrogen',
    acceptedAnswers: ['n2', 'n₂', 'nitrogen', '질소'],
    hints: [
      [
        '무극성 분자이다.',
        '무극성 공유 결합으로 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 1가지이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '3중 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 10이다.',
        '구성 원소는 질소(N)이다.',
      ],
    ],
  },
  {
    id: 'o2',
    formula: 'O₂',
    nameKorean: '산소',
    nameEnglish: 'Oxygen',
    acceptedAnswers: ['o2', 'o₂', 'oxygen', '산소'],
    hints: [
      [
        '무극성 분자이다.',
        '무극성 공유 결합으로 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 1가지이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 12이다.',
        '구성 원소는 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'cl2',
    formula: 'Cl₂',
    nameKorean: '염소',
    nameEnglish: 'Chlorine',
    acceptedAnswers: ['cl2', 'cl₂', 'chlorine', '염소'],
    hints: [
      [
        '무극성 분자이다.',
        '무극성 공유 결합으로 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 1가지이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 3주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 염소(Cl)이다.',
        '상온에서 황록색 기체이다.',
      ],
    ],
  },
  {
    id: 'f2',
    formula: 'F₂',
    nameKorean: '플루오린',
    nameEnglish: 'Fluorine',
    acceptedAnswers: ['f2', 'f₂', 'fluorine', '플루오린'],
    hints: [
      [
        '무극성 분자이다.',
        '무극성 공유 결합으로 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 1가지이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 2주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 플루오린(F)이다.',
        '전기 음성도가 가장 큰 원소로 이루어져 있다.',
      ],
    ],
  },
  {
    id: 'pcl3',
    formula: 'PCl₃',
    nameKorean: '삼염화 인',
    nameEnglish: 'Phosphorus Trichloride',
    acceptedAnswers: ['pcl3', 'pcl₃', 'phosphorus trichloride', '삼염화인', '삼염화 인'],
    hints: [
      [
        '극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '중심 원자는 3주기 원소이다.',
        '중심 원자에 비공유 전자쌍이 1개 있다.',
      ],
      [
        '4원자 분자이다.',
        '분자의 구조는 삼각뿔형이다.',
      ],
      [
        '중심 원자는 인(P)이다.',
        '원자가 전자 수의 합은 26이다.',
        '구성 원소는 인(P)과 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'cf4',
    formula: 'CF₄',
    nameKorean: '사플루오린화 탄소',
    nameEnglish: 'Carbon Tetrafluoride',
    acceptedAnswers: ['cf4', 'cf₄', 'carbon tetrafluoride', '사플루오린화탄소', '사플루오린화 탄소'],
    hints: [
      [
        '무극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '극성 공유 결합을 포함한다.',
        '중심 원자에 비공유 전자쌍이 없다.',
      ],
      [
        '5원자 분자이다.',
        '분자의 구조는 정사면체형이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 32이다.',
        '구성 원소는 탄소(C)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'h2',
    formula: 'H₂',
    nameKorean: '수소',
    nameEnglish: 'Hydrogen',
    acceptedAnswers: ['h2', 'h₂', 'hydrogen', '수소'],
    hints: [
      [
        '무극성 분자이다.',
        '무극성 공유 결합으로 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 1가지이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 1주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 2이다.',
        '구성 원소는 수소(H)이다.',
        '가장 가벼운 분자이다.',
      ],
    ],
  },
  // ── 이원자 분자 (이종) ──
  {
    id: 'clf',
    formula: 'ClF',
    nameKorean: '플루오린화 염소',
    nameEnglish: 'Chlorine Monofluoride',
    acceptedAnswers: ['clf', 'chlorine monofluoride', '플루오린화염소', '플루오린화 염소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 모두 할로겐 원소이다.',
      ],
      [
        '단일 결합으로 이루어져 있다.',
        '구성 원소는 각각 2주기와 3주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 염소(Cl)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'icl',
    formula: 'ICl',
    nameKorean: '염화 아이오딘',
    nameEnglish: 'Iodine Monochloride',
    acceptedAnswers: ['icl', 'iodine monochloride', '염화아이오딘', '염화 아이오딘', '일염화아이오딘'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 모두 할로겐 원소이다.',
      ],
      [
        '단일 결합으로 이루어져 있다.',
        '구성 원소 중 하나는 5주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 아이오딘(I)과 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'brf',
    formula: 'BrF',
    nameKorean: '플루오린화 브로민',
    nameEnglish: 'Bromine Monofluoride',
    acceptedAnswers: ['brf', 'bromine monofluoride', '플루오린화브로민', '플루오린화 브로민'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소는 모두 할로겐 원소이다.',
      ],
      [
        '단일 결합으로 이루어져 있다.',
        '구성 원소 중 하나는 4주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 브로민(Br)과 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'co',
    formula: 'CO',
    nameKorean: '일산화 탄소',
    nameEnglish: 'Carbon Monoxide',
    acceptedAnswers: ['co', 'carbon monoxide', '일산화탄소', '일산화 탄소'],
    hints: [
      [
        '극성 분자이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '3중 결합을 포함한다.',
      ],
      [
        '구성 원소의 종류는 2가지이다.',
        '구성 원소는 모두 2주기 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 10이다.',
        '구성 원소는 탄소(C)와 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'hbr',
    formula: 'HBr',
    nameKorean: '브로민화 수소',
    nameEnglish: 'Hydrogen Bromide',
    acceptedAnswers: ['hbr', 'hydrogen bromide', '브로민화수소', '브로민화 수소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '2원자 분자이다.',
        '구성 원소 중 하나는 4주기 원소이다.',
      ],
      [
        '단일 결합으로 이루어져 있다.',
        '구성 원소 중 하나는 할로겐 원소이다.',
      ],
      [
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 수소(H)와 브로민(Br)이다.',
      ],
    ],
  },
  // ── 다원자 분자 (중심 원자 1개) ──
  {
    id: 'hcn',
    formula: 'HCN',
    nameKorean: '시안화 수소',
    nameEnglish: 'Hydrogen Cyanide',
    acceptedAnswers: ['hcn', 'hydrogen cyanide', '시안화수소', '시안화 수소', '청산'],
    hints: [
      [
        '극성 분자이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '3중 결합을 포함한다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 직선형이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 10이다.',
        '구성 원소는 수소(H), 탄소(C), 질소(N)이다.',
      ],
    ],
  },
  {
    id: 'ch2o',
    formula: 'CH₂O',
    nameKorean: '폼알데하이드',
    nameEnglish: 'Formaldehyde',
    acceptedAnswers: ['ch2o', 'ch₂o', 'hcho', 'formaldehyde', '폼알데하이드', '포름알데히드', '메탄알'],
    hints: [
      [
        '극성 분자이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '평면 구조이다.',
      ],
      [
        '4원자 분자이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 12이다.',
        '구성 원소는 탄소(C), 수소(H), 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'cocl2',
    formula: 'COCl₂',
    nameKorean: '포스겐',
    nameEnglish: 'Phosgene',
    acceptedAnswers: ['cocl2', 'cocl₂', 'phosgene', '포스겐'],
    hints: [
      [
        '극성 분자이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '평면 구조이다.',
      ],
      [
        '4원자 분자이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 24이다.',
        '구성 원소는 탄소(C), 산소(O), 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'sih4',
    formula: 'SiH₄',
    nameKorean: '실레인',
    nameEnglish: 'Silane',
    acceptedAnswers: ['sih4', 'sih₄', 'silane', '실레인'],
    hints: [
      [
        '무극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '극성 공유 결합을 포함한다.',
        '중심 원자에 비공유 전자쌍이 없다.',
      ],
      [
        '5원자 분자이다.',
        '분자의 구조는 정사면체형이다.',
      ],
      [
        '중심 원자는 규소(Si)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 규소(Si)와 수소(H)이다.',
      ],
    ],
  },
  {
    id: 'sif4',
    formula: 'SiF₄',
    nameKorean: '사플루오린화 규소',
    nameEnglish: 'Silicon Tetrafluoride',
    acceptedAnswers: ['sif4', 'sif₄', 'silicon tetrafluoride', '사플루오린화규소', '사플루오린화 규소'],
    hints: [
      [
        '무극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '극성 공유 결합을 포함한다.',
        '중심 원자는 3주기 원소이다.',
      ],
      [
        '5원자 분자이다.',
        '분자의 구조는 정사면체형이다.',
      ],
      [
        '중심 원자는 규소(Si)이다.',
        '원자가 전자 수의 합은 32이다.',
        '구성 원소는 규소(Si)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'ph3',
    formula: 'PH₃',
    nameKorean: '포스핀',
    nameEnglish: 'Phosphine',
    acceptedAnswers: ['ph3', 'ph₃', 'phosphine', '포스핀', '인화수소', '인화 수소'],
    hints: [
      [
        '극성 분자이다.',
        '입체 구조이다.',
      ],
      [
        '중심 원자는 3주기 원소이다.',
        '중심 원자에 비공유 전자쌍이 1개 있다.',
      ],
      [
        '4원자 분자이다.',
        '분자의 구조는 삼각뿔형이다.',
      ],
      [
        '중심 원자는 인(P)이다.',
        '원자가 전자 수의 합은 8이다.',
        '구성 원소는 인(P)과 수소(H)이다.',
      ],
    ],
  },
  {
    id: 'scl2',
    formula: 'SCl₂',
    nameKorean: '이염화 황',
    nameEnglish: 'Sulfur Dichloride',
    acceptedAnswers: ['scl2', 'scl₂', 'sulfur dichloride', '이염화황', '이염화 황'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자는 3주기 원소이다.',
        '중심 원자에 비공유 전자쌍이 2개 있다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
      ],
      [
        '중심 원자는 황(S)이다.',
        '원자가 전자 수의 합은 20이다.',
        '구성 원소는 황(S)과 염소(Cl)이다.',
      ],
    ],
  },
  // ── 다원자 분자 (중심 원자 2개 이상) ──
  {
    id: 'h2o2',
    formula: 'H₂O₂',
    nameKorean: '과산화 수소',
    nameEnglish: 'Hydrogen Peroxide',
    acceptedAnswers: ['h2o2', 'h₂o₂', 'hydrogen peroxide', '과산화수소', '과산화 수소'],
    hints: [
      [
        '극성 분자이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '구성 원소의 종류는 2가지이다.',
        '같은 종류의 원자끼리의 결합을 포함한다.',
      ],
      [
        '4원자 분자이다.',
        '비공유 전자쌍을 가진 원자가 2개 있다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 수소(H)와 산소(O)이다.',
        'O-O 결합을 포함한다.',
      ],
    ],
  },
  {
    id: 'c2h2',
    formula: 'C₂H₂',
    nameKorean: '에타인',
    nameEnglish: 'Acetylene',
    acceptedAnswers: ['c2h2', 'c₂h₂', 'acetylene', '에타인', '아세틸렌'],
    hints: [
      [
        '무극성 분자이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '3중 결합을 포함한다.',
        '분자의 구조는 직선형이다.',
      ],
      [
        '4원자 분자이다.',
        '탄소 원자 2개를 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 10이다.',
        '구성 원소는 탄소(C)와 수소(H)이다.',
        'C≡C 3중 결합을 포함한다.',
      ],
    ],
  },
  {
    id: 'c2h4',
    formula: 'C₂H₄',
    nameKorean: '에텐',
    nameEnglish: 'Ethylene',
    acceptedAnswers: ['c2h4', 'c₂h₄', 'ethylene', '에텐', '에틸렌'],
    hints: [
      [
        '무극성 분자이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '2중 결합을 포함한다.',
        '평면 구조이다.',
      ],
      [
        '6원자 분자이다.',
        '탄소 원자 2개를 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 12이다.',
        '구성 원소는 탄소(C)와 수소(H)이다.',
        'C=C 2중 결합을 포함한다.',
      ],
    ],
  },
  {
    id: 'c2h6',
    formula: 'C₂H₆',
    nameKorean: '에테인',
    nameEnglish: 'Ethane',
    acceptedAnswers: ['c2h6', 'c₂h₆', 'ethane', '에테인', '에탄'],
    hints: [
      [
        '무극성 분자이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '비공유 전자쌍이 없다.',
        '입체 구조이다.',
      ],
      [
        '8원자 분자이다.',
        '탄소 원자 2개를 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 14이다.',
        '구성 원소는 탄소(C)와 수소(H)이다.',
        'C-C 단일 결합을 포함한다.',
      ],
    ],
  },
  {
    id: 'n2f2',
    formula: 'N₂F₂',
    nameKorean: '이플루오린화 이질소',
    nameEnglish: 'Dinitrogen Difluoride',
    acceptedAnswers: ['n2f2', 'n₂f₂', 'dinitrogen difluoride', '이플루오린화이질소', '이플루오린화 이질소'],
    hints: [
      [
        '다중 결합을 포함한다.',
        '비공유 전자쌍을 포함한다.',
      ],
      [
        '2중 결합을 포함한다.',
        '같은 종류의 원자끼리의 결합을 포함한다.',
      ],
      [
        '4원자 분자이다.',
        'N=N 2중 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 24이다.',
        '구성 원소는 질소(N)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'n2f4',
    formula: 'N₂F₄',
    nameKorean: '사플루오린화 이질소',
    nameEnglish: 'Dinitrogen Tetrafluoride',
    acceptedAnswers: ['n2f4', 'n₂f₄', 'dinitrogen tetrafluoride', '사플루오린화이질소', '사플루오린화 이질소'],
    hints: [
      [
        '단일 결합으로만 이루어져 있다.',
        '비공유 전자쌍을 포함한다.',
      ],
      [
        '같은 종류의 원자끼리의 결합을 포함한다.',
        '각 질소 원자에 비공유 전자쌍이 1개 있다.',
      ],
      [
        '6원자 분자이다.',
        'N-N 단일 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 38이다.',
        '구성 원소는 질소(N)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'o2f2',
    formula: 'O₂F₂',
    nameKorean: '이플루오린화 이산소',
    nameEnglish: 'Dioxygen Difluoride',
    acceptedAnswers: ['o2f2', 'o₂f₂', 'dioxygen difluoride', '이플루오린화이산소', '이플루오린화 이산소'],
    hints: [
      [
        '극성 분자이다.',
        '단일 결합으로만 이루어져 있다.',
      ],
      [
        '같은 종류의 원자끼리의 결합을 포함한다.',
        '비공유 전자쌍을 포함한다.',
      ],
      [
        '4원자 분자이다.',
        'O-O 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 26이다.',
        '구성 원소는 산소(O)와 플루오린(F)이다.',
      ],
    ],
  },
  {
    id: 'c2f2',
    formula: 'C₂F₂',
    nameKorean: '디플루오로에타인',
    nameEnglish: 'Difluoroacetylene',
    acceptedAnswers: ['c2f2', 'c₂f₂', 'difluoroacetylene', '디플루오로에타인', '디플루오로아세틸렌'],
    hints: [
      [
        '무극성 분자이다.',
        '다중 결합을 포함한다.',
      ],
      [
        '3중 결합을 포함한다.',
        '분자의 구조는 직선형이다.',
      ],
      [
        '4원자 분자이다.',
        '같은 종류의 원자끼리의 결합을 포함한다.',
      ],
      [
        '원자가 전자 수의 합은 22이다.',
        '구성 원소는 탄소(C)와 플루오린(F)이다.',
        'C≡C 3중 결합을 포함한다.',
      ],
    ],
  },
  {
    id: 'nocl',
    formula: 'NOCl',
    nameKorean: '염화 나이트로실',
    nameEnglish: 'Nitrosyl Chloride',
    acceptedAnswers: ['nocl', 'nitrosyl chloride', '염화나이트로실', '염화 나이트로실'],
    hints: [
      [
        '극성 분자이다.',
        '2중 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 1개 있다.',
        '분자의 구조는 굽은형이다.',
      ],
      [
        '3원자 분자이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 질소(N)이다.',
        '원자가 전자 수의 합은 18이다.',
        '구성 원소는 질소(N), 산소(O), 염소(Cl)이다.',
      ],
    ],
  },
  {
    id: 'hcn',
    formula: 'HCN',
    nameKorean: '사이안화 수소',
    nameEnglish: 'Hydrogen Cyanide',
    acceptedAnswers: ['hcn', 'hydrogen cyanide', '사이안화수소', '사이안화 수소', '시안화수소', '시안화 수소'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '3중 결합을 포함한다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 직선형이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 10이다.',
        '구성 원소는 수소(H), 탄소(C), 질소(N)이다.',
      ],
    ],
  },
  {
    id: 'fcn',
    formula: 'FCN',
    nameKorean: '플루오린화 사이아노젠',
    nameEnglish: 'Cyanogen Fluoride',
    acceptedAnswers: ['fcn', 'cyanogen fluoride', '플루오린화사이아노젠', '플루오린화 사이아노젠', '사이아노젠플루오라이드'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 없다.',
        '3중 결합을 포함한다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 직선형이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 탄소(C)이다.',
        '원자가 전자 수의 합은 16이다.',
        '구성 원소는 플루오린(F), 탄소(C), 질소(N)이다.',
      ],
    ],
  },
  {
    id: 'fno',
    formula: 'FNO',
    nameKorean: '플루오린화 나이트로실',
    nameEnglish: 'Nitrosyl Fluoride',
    acceptedAnswers: ['fno', 'nitrosyl fluoride', '플루오린화나이트로실', '플루오린화 나이트로실', '나이트로실플루오라이드'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 1개 있다.',
        '2중 결합을 포함한다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 질소(N)이다.',
        '원자가 전자 수의 합은 18이다.',
        '구성 원소는 플루오린(F), 질소(N), 산소(O)이다.',
      ],
    ],
  },
  {
    id: 'hno',
    formula: 'HNO',
    nameKorean: '나이트록실',
    nameEnglish: 'Nitroxyl',
    acceptedAnswers: ['hno', 'nitroxyl', '나이트록실', '니트록실'],
    hints: [
      [
        '극성 분자이다.',
        '극성 공유 결합을 포함한다.',
      ],
      [
        '중심 원자에 비공유 전자쌍이 1개 있다.',
        '2중 결합을 포함한다.',
      ],
      [
        '3원자 분자이다.',
        '분자의 구조는 굽은형이다.',
        '구성 원소의 종류는 3가지이다.',
      ],
      [
        '중심 원자는 질소(N)이다.',
        '원자가 전자 수의 합은 12이다.',
        '구성 원소는 수소(H), 질소(N), 산소(O)이다.',
      ],
    ],
  },
];

/** Shuffle an array (Fisher-Yates) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Check if the user's answer matches */
export function checkAnswer(molecule: Molecule, answer: string): boolean {
  const normalized = answer.trim().toLowerCase().replace(/\s+/g, '');
  return molecule.acceptedAnswers.some(
    (a) => a.toLowerCase().replace(/\s+/g, '') === normalized
  );
}

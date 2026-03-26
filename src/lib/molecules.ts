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

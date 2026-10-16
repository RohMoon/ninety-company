import type { YearEntry } from "../lib/group-by-year";

export const companyIntro = {
  ko: [
    "‘움직임 연구소’라는 모티브를 가지고 움직임에 대한 나인티만의 철학과 독창성을 기반으로 제작된 작품을 창작하여 선사하는 브레이킹 저변 확대 목적 예술 법인이다.",
    "NINETY는 숫자 90을 뜻한다.",
    "본 단체 나인티는 예술이란 완벽함이 없으며 항상 발전하고 관객들에게 100%의 공연을 보여주기 위해 항상 90%의 위치에서 100%를 위해 노력한다는 뜻을 내포하고 있다.",
  ],
  en: "Built around the motif of a ‘Movement Lab’, NINETY is a nonprofit arts organization dedicated to expanding the reach of breaking, creating and presenting original works grounded in its own philosophy and originality of movement. NINETY stands for the number 90 — a reminder that art is never perfect and always evolving. To give audiences a 100% performance, we always stand at 90% and keep striving toward 100%.",
} as const;

export const companyImage = {
  src: "/images/company.jpg",
  alt: "흰 셔츠의 무용수 다섯 명이 조명 아래에서 두 팔을 들어 올린 장면",
};

// 최신순 — 같은 연도 안의 순서는 단체가 보낸 원문 그대로 둔다
export const history: readonly YearEntry[] = [
  { year: "2026", text: "K-ART 청년창작지원 사업 <오색 : 난장> 선정" },
  { year: "2026", text: "청양군 청소년페스티벌 초청 공연" },
  { year: "2026", text: "공주 TAPDANCE 경연대회 3위" },
  { year: "2026", text: "청양군 지역예술단체 지원사업 선정" },
  { year: "2026", text: "SEOUL TAPDANCE FESTIVAL 삼족오 우승" },
  { year: "2026", text: "여수세계섬박람회 지역대표예술단체 선정 및 공연" },
  { year: "2026", text: "화성시교육협력지원본부 <예술탐구공연> 선정" },
  { year: "2025", text: "한국소리문화의전당 찾아가는 예술극장 선정" },
  { year: "2025", text: "인천문화재단 YOUTH STAGE 초청" },
  { year: "2025", text: "충청남도 찾아가는 문화활동 선정" },
  { year: "2025", text: "청양군 지역문화예술단체 지원사업 선정" },
  { year: "2025", text: "화성교육협력지원본부 예술탐구공연 지원사업 선정" },
  { year: "2025", text: "대전한밭도서관 토요문화극장 초청" },
  { year: "2024", text: "시립구로청소년센터 청소년 IT-SUE <THREE GO SHOW> 초청" },
  { year: "2024", text: "춘천시립도서관 청소년의 날 책 축제 초청 공연" },
  { year: "2024", text: "구로청소년센터 학교연계 지원 사업 기획 및 강사 참여" },
  { year: "2024", text: "한국소리문화의전당 찾아가는 예술극장 선정 및 공연" },
  { year: "2024", text: "대전한밭도서관 토요문화극장 <사물-보이> 비보이 부문 참여" },
  { year: "2024", text: "구로청소년센터 예술교육사업 <청소년 잇-슈> 운영 및 주 강사" },
  { year: "2024", text: "관악문화재단 꿈의 무용단 <으라차찬> Breaking 특별 강의" },
  { year: "2024", text: "관악문화재단 <관광버스> 선정 및 공연" },
  { year: "2024", text: "사단법인 나인티 창립" },
  { year: "2015~2020", text: "전 전주시 홍보대사 위촉 및 활동 (하치훈 단장, 현재훈 예술감독)" },
];

export const awards: readonly YearEntry[] = [
  { year: "2019", text: "광명동굴 B-BOY 초청 게스트" },
  { year: "2018", text: "B-Boy Challenge 2nd" },
  { year: "2018", text: "BBIC 한국대표 선발전 TOP4" },
  { year: "2018", text: "부천시 BOMBJAM Special Showcase" },
  { year: "2017", text: "MB Crew 15th Anniversary Party 3rd" },
  { year: "2017", text: "Battle New School Korea Representative Selection Top 4" },
  { year: "2017", text: "Cyber shock 초청 및 TOP4" },
  { year: "2016", text: "Trophy Masters Korea Representative Selection 2nd Place" },
  { year: "2015", text: "Jeonju B-Boy Grand Prix 3rd" },
  { year: "2014", text: "Jeonju B-Boy Grand Prix 1st" },
];

export const contact = {
  organization: "사단법인 나인티",
  person: "하치훈 단장",
  phone: "0507-1318-1526",
};

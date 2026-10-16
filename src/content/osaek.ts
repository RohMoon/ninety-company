export const HIGHLIGHT_VIDEO_ID = "zTXLqGjEbXo";
export const CHANNEL_URL = "https://www.youtube.com/@%EC%B1%84%EB%84%90%EB%82%98%EC%9D%B8%ED%8B%B0";

export const intent = {
  ko: "오색 : 난장은 청·흑·적·백·황, 오색에 담긴 전통의 철학과 무속적 의미를 현대적으로 재해석한 공연입니다. 현대무용과 브레이킹을 결합해, 색이 품은 삶의 의미와 덕을 새로운 무용극으로 펼쳐냅니다.",
  en: "Osaek: Nanjang is a performance that reinterprets the traditional philosophy and shamanistic meanings of the five colors — blue, black, red, white, and yellow — through a contemporary lens. Blending contemporary dance with breaking, it unfolds the meanings of life and virtue embodied in these colors through a new form of dance theatre.",
  image: "/images/intent.jpg",
};

export type OsaekColor = {
  id: string;
  hanja: string;
  direction: string;
  accent: string;
  titleKo: string;
  titleEn: string;
  ko: string;
  en: string;
  image: string;
  alt: string;
  videoId: string;
};

export const colors: readonly OsaekColor[] = [
  {
    id: "blue",
    hanja: "靑",
    direction: "東",
    accent: "#2f6fdf",
    titleKo: "동쪽의 기운 청(靑)",
    titleEn: "The Energy of the East: Blue",
    ko: "생명의 탄생은 차갑고 깊은 정적과 어둠 속에서 피어나는 작은 온기에서 시작됩니다. 작품 속 청색은 거친 흙을 뚫고 피어나는 생명과 축복을 상징하며, 고요를 깨고 태어나는 푸른 생명의 순간을 담아냅니다.",
    en: "The birth of life begins with a small warmth emerging from the cold, profound silence and darkness. The blue in this work symbolizes life breaking through the rugged earth and the blessings that accompany its emergence. It captures the moment when new life awakens, breaking the stillness and emerging into the world in vibrant shades of blue.",
    image: "/images/blue.jpg",
    alt: "푸른 조명 아래 같은 동작을 취한 두 무용수",
    videoId: "dvSNQs9hqbI",
  },
  {
    id: "black",
    hanja: "黑",
    direction: "北",
    accent: "#8b8b8b",
    titleKo: "북쪽의 깊은 바람 흑(黑)",
    titleEn: "The Deep Winds of the North: Black",
    ko: "모든 빛이 사라진 어둠은 죽음 앞에 선 인간의 정적과 마주합니다. 흑색은 후회와 체념을 넘어, 새로운 시작을 품은 문이자 또 다른 생명으로 나아가는 침묵을 상징합니다.",
    en: "In the darkness where all light has vanished, one confronts the stillness of humanity standing before death. Beyond regret and resignation, black symbolizes a gateway that holds the promise of a new beginning, and the silence that leads toward another form of life.",
    image: "/images/black.jpg",
    alt: "검은 의상의 무용수 다섯 명이 어두운 무대에 일렬로 선 장면",
    videoId: "-VCu-6nCC2s",
  },
  {
    id: "red",
    hanja: "赤",
    direction: "南",
    accent: "#d7262e",
    titleKo: "남쪽의 뜨거운 불꽃 적(赤)",
    titleEn: "The Fiery Flames of the South: Red",
    ko: "적색은 액운을 막고 잡귀를 쫓는 정화와 벽사의 상징입니다. 붉은 불꽃 속에서 맺힌 한을 태우고, 해원과 액막이의 판을 펼칩니다.",
    en: "Red symbolizes purification and the warding off of misfortune and evil spirits. Within the crimson flames, pent-up sorrow and unresolved anguish are burned away, opening a sacred space for the release of lingering grievances and the dispelling of misfortune.",
    image: "/images/red.jpg",
    alt: "오색 천을 뒤집어쓴 무용수를 네 명이 둘러싼 장면",
    videoId: "KW2HoY8fbvg",
  },
  {
    id: "white",
    hanja: "白",
    direction: "西",
    accent: "#ece8dc",
    titleKo: "서쪽에서 차올라 세상을 맑게 비추는 백(白)",
    titleEn: "The Radiant Light Rising from the West: White",
    ko: "백색은 비움과 순결, 그리고 어둠 속에서 마주하는 첫 빛을 상징합니다. 고난 속에서도 꺾이지 않는 영혼들이 빛을 향해 도약하는 순간을 담아냅니다.",
    en: "White symbolizes emptiness, purity, and the first light encountered in the darkness. It captures the moment when unyielding spirits, undaunted by hardship, rise toward the light and take a leap toward hope and renewal.",
    image: "/images/white.jpg",
    alt: "흰 셔츠의 무용수 여섯 명이 빛줄기를 향해 팔을 뻗은 장면",
    videoId: "SPMDOdOmYLM",
  },
  {
    id: "yellow",
    hanja: "黃",
    direction: "中",
    accent: "#f0b72f",
    titleKo: "동서남북 사방이 모여드는 우주의 중심 황(黃)",
    titleEn: "The Cosmic Center Where the Four Directions Converge: Yellow",
    ko: "태동의 청, 비움의 흑, 정화의 적, 빛의 백이 하나로 어우러져 황금빛 축복으로 피어납니다. 새로운 봄의 시작, 모두의 삶에 풍요와 안녕이 깃들기를 기원하는 대축복의 판입니다.",
    en: "The blue of new beginnings, the black of emptiness, the red of purification, and the white of light come together, blossoming into a golden blessing. Marking the dawn of a new spring, this grand celebration of blessings offers a heartfelt wish for abundance, peace, and well-being in everyone's life.",
    image: "/images/yellow.jpg",
    alt: "노란 꽃가루가 흩날리는 가운데 공중 동작을 하는 무용수",
    videoId: "0Nwoav1Rfls",
  },
];

export const customIntro = {
  leadKo: "본 작품은 기획과 공간에 맞추어 유연하게 완성되는 맞춤형 옴니버스 커스텀 퍼포먼스입니다.",
  leadEn: "This work is a customized omnibus performance tailored flexibly to the event’s concept, venue, and scale.",
  ko: "<오색:난장>은 5가지 색채(청·흑·적·백·황) 테마를 개별 또는 통합하여 구성할 수 있는 모듈형 옴니버스 구조를 갖추고 있습니다. 대형 극장 기획 공연부터 축제 및 특별 초청 행사까지, 주최 측의 예산, 러닝타임, 무대 환경에 맞춘 최적의 커스터마이징 큐레이션으로 가장 완벽한 몰입의 무대를 선사합니다.",
  en: "<Osaek: Nanjang> features a modular omnibus structure that can be presented individually or seamlessly combined around five color themes: Blue, Black, Red, White, and Yellow. From large-scale theater productions to festivals and special showcase events, we provide tailored curation optimized for your budget, run time, and stage environment, delivering an immersive performance experience.",
  image: "/images/custom.jpg",
};

export type PerformanceType = {
  id: string;
  venueKo: string;
  venueEn: string;
  // 비어 있으면 기획 의도에 따라 자유롭게 조합하는 타입
  colorIds: readonly string[];
  colorsKo: string;
  colorsEn: string;
  featureKo: string;
  featureEn: string;
};

export const performanceTypes: readonly PerformanceType[] = [
  {
    id: "A",
    venueKo: "미술관, 전시관, 패션쇼, 팝업스토어 등 공간 전시 연계형",
    venueEn: "Museums, Art Galleries, Fashion Shows, Pop-up Stores & Spatial Exhibitions",
    colorIds: ["blue", "black", "white"],
    colorsKo: "청색, 흑색, 백색",
    colorsEn: "Blue, Black, White",
    featureKo:
      "현대무용과 브레이킹이 적재적소에 융합되어 조화를 이루는 연출. 절제된 미니멀리즘과 공간의 질감을 살린 감각적이고 모던한 퍼포먼스.",
    featureEn:
      "Contemporary dance and breaking seamlessly blended in harmony. A sophisticated, modern performance highlighting restrained minimalism and spatial textures.",
  },
  {
    id: "B",
    venueKo: "국악 페스티벌, 전통 및 야외 행사형",
    venueEn: "Korean Traditional Music Festivals, Cultural & Outdoor Events",
    colorIds: ["red", "yellow"],
    colorsKo: "적색, 황색",
    colorsEn: "Red, Yellow",
    featureKo: "강렬한 주술적 에너지와 국악 형태 음악을 기반으로 한 퍼포먼스. 대형 축제의 흥과 몰입감을 극대화.",
    featureEn:
      "A high-energy performance driven by shamanic rituals and traditional-inspired soundscapes, maximizing the dynamic festival atmosphere and audience engagement.",
  },
  {
    id: "C",
    venueKo: "극장 기획 공연, 거리 예술 축제형",
    venueEn: "Main Stage Theater Productions, Street Art Festivals",
    colorIds: ["blue", "black", "red", "white", "yellow"],
    colorsKo: "오색 전체 (청·흑·적·백·황)",
    colorsEn: "All 5 Colors (Blue, Black, Red, White, Yellow)",
    featureKo: "60분가량 펼쳐지는 오방색의 서사와 브레이킹의 진수를 온전히 담아낸 풀스케일 무용극.",
    featureEn:
      "A full-scale 60-minute physical theater production capturing the complete narrative of the five colors and the peak of breaking performance.",
  },
  {
    id: "D",
    venueKo: "커스텀 협의형",
    venueEn: "Customized Consultation",
    colorIds: [],
    colorsKo: "기획 의도에 따른 자유로운 조합",
    colorsEn: "Flexible Combinations Based on Concept",
    featureKo: "주최 측의 요청 및 현장 환경에 맞춘 유연한 큐레이션 및 러닝타임 조절.",
    featureEn:
      "Flexible curation and run-time adjustments tailored to the organizer’s specific needs and venue constraints.",
  },
];

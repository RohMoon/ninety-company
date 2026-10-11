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
  },
];

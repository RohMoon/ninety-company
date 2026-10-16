import { describe, expect, it } from "vitest";
import { groupByYear } from "./group-by-year";

describe("groupByYear — 정상", () => {
  it("연이은 같은 연도를 한 묶음으로 합친다", () => {
    const result = groupByYear([
      { year: "2026", text: "가" },
      { year: "2026", text: "나" },
      { year: "2025", text: "다" },
    ]);
    expect(result).toEqual([
      { year: "2026", items: ["가", "나"] },
      { year: "2025", items: ["다"] },
    ]);
  });
});

describe("groupByYear — 엣지케이스", () => {
  it("빈 목록이면 빈 배열을 반환한다", () => {
    expect(groupByYear([])).toEqual([]);
  });

  it("떨어져 있는 같은 연도는 정렬하지 않고 원문 순서대로 따로 둔다", () => {
    const result = groupByYear([
      { year: "2026", text: "가" },
      { year: "2025", text: "나" },
      { year: "2026", text: "다" },
    ]);
    expect(result.map((group) => group.year)).toEqual(["2026", "2025", "2026"]);
  });

  it("입력 배열을 변경하지 않는다", () => {
    const input = Object.freeze([Object.freeze({ year: "2024", text: "가" })]);
    expect(() => groupByYear(input)).not.toThrow();
  });
});

describe("groupByYear — 시나리오", () => {
  it.each([
    { name: "범위 연도 뒤에 내림차순 연도", years: ["2015~2020", "2026", "2026"], expected: ["2015~2020", "2026"] },
    { name: "모두 다른 연도", years: ["2019", "2018", "2017"], expected: ["2019", "2018", "2017"] },
    { name: "모두 같은 연도", years: ["2024", "2024", "2024"], expected: ["2024"] },
  ])("$name", ({ years, expected }) => {
    const result = groupByYear(years.map((year, index) => ({ year, text: String(index) })));
    expect(result.map((group) => group.year)).toEqual(expected);
  });
});

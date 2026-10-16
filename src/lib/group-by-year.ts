export type YearEntry = { year: string; text: string };
export type YearGroup = { year: string; items: readonly string[] };

// 원문 순서를 유지한 채 연이은 같은 연도만 한 묶음으로 합친다 (정렬하지 않는다)
export function groupByYear(entries: readonly YearEntry[]): YearGroup[] {
  return entries.reduce<YearGroup[]>((groups, entry) => {
    const last = groups.at(-1);
    if (last?.year === entry.year) {
      return [...groups.slice(0, -1), { year: last.year, items: [...last.items, entry.text] }];
    }
    return [...groups, { year: entry.year, items: [entry.text] }];
  }, []);
}

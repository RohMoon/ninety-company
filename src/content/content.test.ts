import { describe, expect, it } from "vitest";
import { contact } from "./company";
import { colors, performanceTypes } from "./osaek";

describe("공연문의 연락처", () => {
  it("공개 페이지에는 개인 휴대폰(010) 이 아닌 대표번호를 쓴다", () => {
    expect(contact.phone).not.toMatch(/^010-/);
  });

  it("전화 연결 링크로 쓸 수 있는 숫자-하이픈 형식이다", () => {
    expect(contact.phone).toMatch(/^\d{2,4}-\d{3,4}-\d{4}$/);
  });
});

const colorIds = new Set(colors.map((color) => color.id));

describe("오색 콘텐츠 — 작품 영상", () => {
  it.each(colors.map((color) => [color.id, color.videoId]))("%s 작품 영상 ID 가 유튜브 11자 형식이다", (_, videoId) => {
    expect(videoId).toMatch(/^[\w-]{11}$/);
  });

  it("작품마다 서로 다른 영상을 쓴다", () => {
    expect(new Set(colors.map((color) => color.videoId)).size).toBe(colors.length);
  });
});

describe("오색 콘텐츠 — 공연 타입 가이드", () => {
  it("A~D 네 타입이 순서대로 있다", () => {
    expect(performanceTypes.map((type) => type.id)).toEqual(["A", "B", "C", "D"]);
  });

  it.each(performanceTypes.map((type) => [type.id, type.colorIds]))("%s 타입의 구성 색은 모두 실제 오색 id 다", (_, ids) => {
    expect(ids.every((id) => colorIds.has(id))).toBe(true);
  });

  it("C 타입은 오색 전체로 구성된다", () => {
    const typeC = performanceTypes.find((type) => type.id === "C");
    expect(new Set(typeC?.colorIds)).toEqual(colorIds);
  });
});

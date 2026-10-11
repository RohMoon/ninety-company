import { afterEach, describe, expect, it, vi } from "vitest";
import { assetPath } from "./asset-path";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("assetPath — 정상", () => {
  it("NEXT_PUBLIC_BASE_PATH 가 없으면 입력 경로를 그대로 반환한다", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", undefined);
    expect(assetPath("/images/main.jpg")).toBe("/images/main.jpg");
  });
});

describe("assetPath — 엣지케이스", () => {
  it("NEXT_PUBLIC_BASE_PATH 가 빈 문자열이면 입력 경로를 그대로 반환한다", () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "");
    expect(assetPath("/images/main.jpg")).toBe("/images/main.jpg");
  });
});

describe("assetPath — 시나리오 표 (basePath /ninety-company)", () => {
  it.each([
    { path: "/images/main.jpg", expected: "/ninety-company/images/main.jpg" },
    { path: "/images/intent.jpg", expected: "/ninety-company/images/intent.jpg" },
    { path: "/images/blue.jpg", expected: "/ninety-company/images/blue.jpg" },
  ])("$path → $expected", ({ path, expected }) => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/ninety-company");
    expect(assetPath(path)).toBe(expected);
  });
});

import { describe, expect, it, vi } from "vitest";
import { buildBackgroundSrc, isEndedMessage, sendPlayerCommand, YOUTUBE_ORIGIN } from "./youtube-player";

const ORIGIN = "https://www.youtube-nocookie.com";

function makeMessage(origin: string, data: unknown): MessageEvent {
  return new MessageEvent("message", { origin, data });
}

function makeIframe(postMessage = vi.fn()) {
  return { contentWindow: { postMessage } } as unknown as HTMLIFrameElement;
}

describe("isEndedMessage — 정상", () => {
  it("youtube-nocookie origin 의 playerState 0 메시지는 true", () => {
    const data = JSON.stringify({ event: "infoDelivery", info: { playerState: 0 } });
    expect(isEndedMessage(makeMessage(ORIGIN, data))).toBe(true);
  });
});

describe("sendPlayerCommand — 정상", () => {
  it("playVideo 명령을 JSON 으로 직렬화해 YOUTUBE_ORIGIN 으로 postMessage 한다", () => {
    const postMessage = vi.fn();
    sendPlayerCommand(makeIframe(postMessage), "playVideo");
    expect(postMessage).toHaveBeenCalledWith(
      JSON.stringify({ event: "command", func: "playVideo", args: [] }),
      YOUTUBE_ORIGIN,
    );
  });

  it("seekTo 명령은 args [9, true] 를 포함해 postMessage 한다", () => {
    const postMessage = vi.fn();
    sendPlayerCommand(makeIframe(postMessage), "seekTo", [9, true]);
    expect(postMessage).toHaveBeenCalledWith(
      JSON.stringify({ event: "command", func: "seekTo", args: [9, true] }),
      YOUTUBE_ORIGIN,
    );
  });
});

describe("buildBackgroundSrc — 정상", () => {
  const src = buildBackgroundSrc("abc");

  it("embed 경로에 videoId 가 들어간다", () => {
    expect(src).toContain("/embed/abc?");
  });

  it("구간 반복·자동재생·JS API 파라미터를 포함한다", () => {
    expect(src).toContain("start=9");
    expect(src).toContain("end=142");
    expect(src).toContain("mute=1");
    expect(src).toContain("autoplay=1");
    expect(src).toContain("enablejsapi=1");
  });

  it("loop=1 은 포함하지 않는다", () => {
    expect(src).not.toContain("loop=1");
  });
});

describe("isEndedMessage — 엣지케이스", () => {
  it("youtube.com origin 이면 false", () => {
    const data = JSON.stringify({ info: { playerState: 0 } });
    expect(isEndedMessage(makeMessage("https://www.youtube.com", data))).toBe(false);
  });

  it("알 수 없는 origin 이면 false", () => {
    const data = JSON.stringify({ info: { playerState: 0 } });
    expect(isEndedMessage(makeMessage("https://evil.example", data))).toBe(false);
  });

  it("data 가 문자열이 아닌 객체이면 false", () => {
    expect(isEndedMessage(makeMessage(ORIGIN, { info: { playerState: 0 } }))).toBe(false);
  });

  it("깨진 JSON 이면 false (throw 하지 않음)", () => {
    expect(isEndedMessage(makeMessage(ORIGIN, "{not json"))).toBe(false);
  });

  it("info 가 없으면 false", () => {
    expect(isEndedMessage(makeMessage(ORIGIN, JSON.stringify({ event: "infoDelivery" })))).toBe(false);
  });
});

describe("sendPlayerCommand — 엣지케이스", () => {
  it("iframe 이 null 이어도 throw 하지 않는다", () => {
    expect(() => sendPlayerCommand(null, "playVideo")).not.toThrow();
  });

  it("contentWindow 가 null 인 iframe 도 throw 하지 않는다", () => {
    const iframe = { contentWindow: null } as unknown as HTMLIFrameElement;
    expect(() => sendPlayerCommand(iframe, "playVideo")).not.toThrow();
  });
});

describe("isEndedMessage — 플레이어 상태 시나리오", () => {
  it.each([
    { name: "unstarted", playerState: -1, expected: false },
    { name: "ended", playerState: 0, expected: true },
    { name: "playing", playerState: 1, expected: false },
    { name: "paused", playerState: 2, expected: false },
    { name: "buffering", playerState: 3, expected: false },
    { name: "cued", playerState: 5, expected: false },
  ])("playerState $playerState ($name) → $expected", ({ playerState, expected }) => {
    const data = JSON.stringify({ event: "infoDelivery", info: { playerState } });
    expect(isEndedMessage(makeMessage(ORIGIN, data))).toBe(expected);
  });
});

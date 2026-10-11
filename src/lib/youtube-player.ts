export const LOOP_START_SEC = 9;
export const LOOP_END_SEC = 142;
export const PLAYER_STATE_ENDED = 0;
export const YOUTUBE_ORIGIN = "https://www.youtube-nocookie.com";
// 영상 앞 0~8초는 타이틀 카드, 144초 이후는 로고 엔딩 — 무대 장면 구간만 반복한다

export function buildBackgroundSrc(videoId: string): string {
  return (
    `${YOUTUBE_ORIGIN}/embed/${videoId}` +
    `?autoplay=1&mute=1&start=${LOOP_START_SEC}&end=${LOOP_END_SEC}` +
    "&controls=0&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&enablejsapi=1"
  );
}

export type PlayerCommand = "playVideo" | "pauseVideo" | "seekTo";

export function sendPlayerCommand(iframe: HTMLIFrameElement | null, func: PlayerCommand, args: unknown[] = []) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), YOUTUBE_ORIGIN);
}

export function isEndedMessage(event: MessageEvent): boolean {
  if (event.origin !== YOUTUBE_ORIGIN || typeof event.data !== "string") return false;
  try {
    return JSON.parse(event.data)?.info?.playerState === PLAYER_STATE_ENDED;
  } catch {
    return false;
  }
}

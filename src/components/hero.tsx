"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { type RefObject, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HIGHLIGHT_VIDEO_ID, colors } from "@/content/osaek";
import { assetPath } from "@/lib/asset-path";
import {
  buildBackgroundSrc,
  isEndedMessage,
  LOOP_START_SEC,
  sendPlayerCommand,
  YOUTUBE_ORIGIN,
} from "@/lib/youtube-player";

const EMPHASIZED_DECELERATE = [0.05, 0.7, 0.1, 1] as const;
// YouTube 기본 UI(제목·로고)가 첫 1~2초 노출되므로 그 뒤에 영상 레이어를 드러낸다
const VIDEO_REVEAL_DELAY_MS = 1800;
const BACKGROUND_SRC = buildBackgroundSrc(HIGHLIGHT_VIDEO_ID);

const subscribeNoop = () => () => {};

// end 파라미터에 도달하면 ENDED 가 오므로 시작 지점으로 되감아 구간 반복한다
function useSegmentLoop(iframeRef: RefObject<HTMLIFrameElement | null>) {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!isEndedMessage(event)) return;
      sendPlayerCommand(iframeRef.current, "seekTo", [LOOP_START_SEC, true]);
      sendPlayerCommand(iframeRef.current, "playVideo");
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [iframeRef]);
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  // 서버 HTML 에 iframe 이 있으면 하이드레이션 전에 load 가 끝나 onLoad 를 놓친다 — 클라이언트에서만 그린다
  const isClient = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const showVideo = isClient && !reduceMotion;
  useSegmentLoop(iframeRef);

  function handleVideoLoad() {
    // 플레이어가 상태 변화(ENDED 등)를 이 창으로 보내도록 구독한다
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: "hero" }), YOUTUBE_ORIGIN);
    setTimeout(() => setVideoVisible(true), VIDEO_REVEAL_DELAY_MS);
  }

  function togglePlayback() {
    sendPlayerCommand(iframeRef.current, paused ? "playVideo" : "pauseVideo");
    setPaused(!paused);
  }

  return (
    <section id="top" className="relative flex h-svh min-h-[560px] items-end overflow-hidden bg-black">
      <Image
        src={assetPath("/images/main.jpg")}
        alt="오색 의상을 입은 다섯 무용수가 어둠 속에 나란히 선 모습"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />

      {showVideo && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${
            videoVisible && !paused ? "opacity-100" : "opacity-0"
          }`}
        >
          <iframe
            ref={iframeRef}
            src={BACKGROUND_SRC}
            title="오색 : 난장 하이라이트 배경 영상"
            tabIndex={-1}
            allow="autoplay; encrypted-media"
            onLoad={handleVideoLoad}
            className="absolute left-1/2 top-1/2 h-[max(100svh,56.25vw)] w-[max(100vw,177.78svh)] -translate-x-1/2 -translate-y-1/2 scale-[1.15]"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EMPHASIZED_DECELERATE }}
          className="text-sm font-medium tracking-[0.3em] text-zinc-300"
        >
          NINETY COMPANY PRESENTS
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EMPHASIZED_DECELERATE }}
          className="mt-4 text-6xl font-extrabold tracking-tight text-white sm:text-8xl lg:text-9xl"
        >
          오색 : 난장
        </motion.h1>

        <div className="mt-6 flex h-1.5 w-full max-w-md gap-1.5" aria-hidden>
          {colors.map((color, index) => (
            <motion.span
              key={color.id}
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.12, ease: EMPHASIZED_DECELERATE }}
              className="flex-1 origin-left rounded-full"
              style={{ backgroundColor: color.accent, outline: "1px solid rgb(255 255 255 / 0.15)" }}
            />
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: EMPHASIZED_DECELERATE }}
        >
          <p className="mt-6 text-lg text-zinc-200 sm:text-xl">
            Osaek : Nanjang — 현대무용과 브레이킹으로 펼치는 오컬트 무용극
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#video"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              하이라이트 보기
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              작품 소개
            </a>
          </div>
        </motion.div>
      </div>

      {showVideo && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={paused ? "배경 영상 재생" : "배경 영상 일시정지"}
          className="absolute bottom-6 right-6 z-10 rounded-full border border-white/40 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-black/60"
        >
          {paused ? "▶ 재생" : "❚❚ 정지"}
        </button>
      )}
    </section>
  );
}

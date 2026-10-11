import { Reveal } from "@/components/reveal";
import { HIGHLIGHT_VIDEO_ID } from "@/content/osaek";

export function VideoSection() {
  return (
    <section id="video" className="scroll-mt-14 bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">HIGHLIGHT</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">하이라이트 영상</h2>
        </Reveal>
        <Reveal className="mt-12" delay={0.15}>
          <div className="relative aspect-video overflow-hidden rounded-sm bg-zinc-900">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${HIGHLIGHT_VIDEO_ID}?rel=0&playsinline=1`}
              title="오색 : 난장 하이라이트"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { colors, type OsaekColor } from "@/content/osaek";
import { assetPath } from "@/lib/asset-path";

function ColorScene({ color, index }: { color: OsaekColor; index: number }) {
  const imageFirst = index % 2 === 0;

  return (
    <article id={color.id} className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:items-center">
      <Reveal className={`lg:col-span-7 ${imageFirst ? "" : "lg:order-2"}`}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
          <Image src={assetPath(color.image)} alt={color.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
      </Reveal>

      <Reveal className="relative lg:col-span-5" delay={0.15}>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 select-none text-[9rem] font-black leading-none opacity-15 sm:text-[12rem]"
          style={{ color: color.accent }}
        >
          {color.hanja}
        </span>
        <p className="relative text-sm font-medium tracking-[0.3em] text-zinc-400">
          {String(index + 1).padStart(2, "0")} · {color.direction}
        </p>
        <div className="relative mt-4 h-1 w-16 rounded-full" style={{ backgroundColor: color.accent }} />
        <h3 className="relative mt-6 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
          {color.titleKo}
        </h3>
        <p className="relative mt-2 text-sm font-medium text-zinc-400">{color.titleEn}</p>
        <p className="relative mt-8 text-lg leading-relaxed text-zinc-200">{color.ko}</p>
        <p className="relative mt-6 text-base leading-relaxed text-zinc-400">{color.en}</p>
      </Reveal>

      {/* 이미지가 오른쪽인 장면은 이미지에 order-2 가 붙으므로 영상은 order-3 으로 항상 맨 아래에 둔다 */}
      <Reveal className="lg:order-3 lg:col-span-12">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">PERFORMANCE VIDEO</p>
        <div className="relative mt-4 aspect-video overflow-hidden rounded-sm bg-zinc-900">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${color.videoId}?rel=0&playsinline=1`}
            title={`${color.titleKo} 작품 영상`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </Reveal>
    </article>
  );
}

export function ColorsSection() {
  return (
    <section id="colors" className="scroll-mt-14 bg-zinc-950 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">FIVE COLORS</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">오색(五色)</h2>
        <p className="mt-6 text-lg text-zinc-300">청 · 흑 · 적 · 백 · 황 — 다섯 방위와 다섯 빛깔에 담긴 삶의 의미</p>
      </Reveal>
      <div className="mt-20 flex flex-col gap-28 sm:gap-36">
        {colors.map((color, index) => (
          <ColorScene key={color.id} color={color} index={index} />
        ))}
      </div>
    </section>
  );
}

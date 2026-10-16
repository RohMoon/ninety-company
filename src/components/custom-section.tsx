import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { colors, customIntro, performanceTypes, type PerformanceType } from "@/content/osaek";
import { assetPath } from "@/lib/asset-path";

const accentById = new Map(colors.map((color) => [color.id, color.accent]));

function ColorChips({ colorIds }: { colorIds: readonly string[] }) {
  // 자유 조합 타입은 구성 색이 정해져 있지 않아 오색 전체를 흐리게 보여준다
  const isFree = colorIds.length === 0;
  const ids = isFree ? colors.map((color) => color.id) : colorIds;

  return (
    <div className="flex gap-1.5" aria-hidden>
      {ids.map((id) => (
        <span
          key={id}
          className={`h-3 w-3 rounded-full ring-1 ring-white/15 ${isFree ? "opacity-40" : ""}`}
          style={{ backgroundColor: accentById.get(id) }}
        />
      ))}
    </div>
  );
}

function TypeCard({ type }: { type: PerformanceType }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-white/10 bg-zinc-950 p-7 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">
          <span className="mr-2 text-4xl font-black tracking-tight text-white">{type.id}</span>TYPE
        </p>
        <ColorChips colorIds={type.colorIds} />
      </div>
      <h4 className="mt-5 text-lg font-bold leading-snug text-white">{type.venueKo}</h4>
      <p className="mt-1 text-sm text-zinc-400">{type.venueEn}</p>
      <dl className="mt-6 space-y-5 border-t border-white/10 pt-6">
        <div>
          <dt className="text-xs font-medium tracking-[0.2em] text-zinc-500">구성 색채 · COLORS</dt>
          <dd className="mt-1.5 text-base text-zinc-200">{type.colorsKo}</dd>
          <dd className="text-sm text-zinc-400">{type.colorsEn}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-[0.2em] text-zinc-500">특징 · FEATURES</dt>
          <dd className="mt-1.5 text-base leading-relaxed text-zinc-200">{type.featureKo}</dd>
          <dd className="mt-2 text-sm leading-relaxed text-zinc-400">{type.featureEn}</dd>
        </div>
      </dl>
    </article>
  );
}

export function CustomSection() {
  return (
    <section id="custom" className="scroll-mt-14 bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">CUSTOM PERFORMANCE</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">커스텀 퍼포먼스</h2>
            <p className="mt-8 text-xl font-semibold leading-relaxed text-white sm:text-2xl">{customIntro.leadKo}</p>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">{customIntro.leadEn}</p>
            <p className="mt-8 text-lg leading-relaxed text-zinc-200">{customIntro.ko}</p>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">{customIntro.en}</p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
              <Image
                src={assetPath(customIntro.image)}
                alt="흰 셔츠와 검은 바지 차림의 나인티 단원 여섯 명이 무대 위에서 포즈를 취한 단체 사진"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">PERFORMANCE TYPE GUIDE</p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">공연 타입 가이드</h3>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {performanceTypes.map((type, index) => (
            <Reveal key={type.id} className="h-full" delay={(index % 2) * 0.1}>
              <TypeCard type={type} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

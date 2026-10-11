import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { intent } from "@/content/osaek";
import { assetPath } from "@/lib/asset-path";

export function IntentSection() {
  return (
    <section id="about" className="scroll-mt-14 bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">ABOUT</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">기획의도</h2>
          <p className="mt-8 text-lg leading-relaxed text-zinc-200">{intent.ko}</p>
          <p className="mt-6 text-base leading-relaxed text-zinc-400">{intent.en}</p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.15}>
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
            <Image
              src={assetPath(intent.image)}
              alt="원형 조명 아래 다섯 무용수가 팔을 뻗고 한 명이 브레이킹 동작을 하는 장면"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

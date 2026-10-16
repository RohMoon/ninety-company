import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { awards, companyImage, companyIntro, contact, history } from "@/content/company";
import { assetPath } from "@/lib/asset-path";
import { groupByYear, type YearEntry } from "@/lib/group-by-year";

function Timeline({ eyebrow, title, entries }: { eyebrow: string; title: string; entries: readonly YearEntry[] }) {
  return (
    <>
      <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">{eyebrow}</p>
      <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">{title}</h3>
      <dl className="mt-8 border-t border-white/10">
        {groupByYear(entries).map((group, index) => (
          <div key={`${group.year}-${index}`} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-white/10 py-5">
            <dt className="text-sm font-semibold tabular-nums text-white">{group.year}</dt>
            <dd>
              <ul className="space-y-2 break-keep text-[0.95rem] leading-relaxed text-zinc-300">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export function CompanySection() {
  return (
    <section id="company" className="scroll-mt-14 bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
              <Image
                src={assetPath(companyImage.src)}
                alt={companyImage.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="relative lg:col-span-5" delay={0.15}>
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 right-0 select-none text-[9rem] font-black leading-none text-white opacity-10 sm:text-[12rem]"
            >
              90
            </span>
            <p className="relative text-sm font-medium tracking-[0.3em] text-zinc-400">ABOUT NINETY</p>
            <h2 className="relative mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">단체소개</h2>
            <div className="relative mt-8 space-y-5 text-lg leading-relaxed text-zinc-200">
              {companyIntro.ko.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="relative mt-6 text-base leading-relaxed text-zinc-400">{companyIntro.en}</p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Timeline eyebrow="HISTORY" title="연혁" entries={history} />
          </Reveal>
          <Reveal delay={0.15}>
            <Timeline eyebrow="CAREER" title="대회 경력" entries={awards} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-14 bg-black py-24 sm:py-32">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-[0.3em] text-zinc-400">CONTACT</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">공연문의 및 협업제안</h2>
        <p className="mt-2 text-sm font-medium text-zinc-400">Performance Inquiries &amp; Collaboration</p>
        <div className="mt-12 flex flex-col gap-10 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid grid-cols-[4.5rem_1fr] gap-x-6 gap-y-3 text-lg">
            <dt className="text-zinc-500">단체</dt>
            <dd className="text-white">{contact.organization}</dd>
            <dt className="text-zinc-500">담당</dt>
            <dd className="text-white">{contact.person}</dd>
            <dt className="text-zinc-500">연락처</dt>
            <dd className="tabular-nums text-white">{contact.phone}</dd>
          </dl>
          <a
            href={`tel:${contact.phone}`}
            className="rounded-full bg-white px-8 py-4 text-center text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            전화로 문의하기
          </a>
        </div>
      </Reveal>
    </section>
  );
}

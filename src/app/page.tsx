import { ColorsSection } from "@/components/colors-section";
import { CompanySection, ContactSection } from "@/components/company-section";
import { CustomSection } from "@/components/custom-section";
import { Hero } from "@/components/hero";
import { IntentSection } from "@/components/intent-section";
import { SiteHeader } from "@/components/site-header";
import { CHANNEL_URL } from "@/content/osaek";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <IntentSection />
        <ColorsSection />
        <CustomSection />
        <CompanySection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold tracking-[0.25em] text-white">NINETY COMPANY</p>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            YouTube · 채널나인티
          </a>
          <p>© 2026 Ninety Company</p>
        </div>
      </footer>
    </>
  );
}

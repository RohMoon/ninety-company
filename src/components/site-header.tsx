// 좁은 화면에서는 로고 옆에 다 들어가지 않아 mobile 항목만 보여준다
const NAV_ITEMS = [
  { href: "#about", label: "기획의도", mobile: false },
  { href: "#colors", label: "오색", mobile: true },
  { href: "#custom", label: "커스텀", mobile: true },
  { href: "#company", label: "단체소개", mobile: false },
  { href: "#contact", label: "문의", mobile: true },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-sm font-bold tracking-[0.25em] text-white">
          NINETY COMPANY
        </a>
        <nav aria-label="주요 메뉴">
          <ul className="flex gap-4 text-sm font-medium text-zinc-300 sm:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={item.mobile ? undefined : "hidden sm:block"}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { navLinks } from "@/lib/data";

type HeaderProps = {
  variant?: "hero" | "page";
};

export function Header({ variant = "page" }: HeaderProps) {
  const isHero = variant === "hero";

  const logoClass = isHero
    ? "h-28 w-auto max-h-28 object-contain brightness-0 invert"
    : "h-14 w-auto object-contain md:h-18 lg:h-25";

  return (
    <nav
      className={`flex h-fit min-w-0 items-center justify-between gap-4 ${
        isHero ? "" : "bg-[#fdfbf7]/95 px-4 py-5 md:px-15 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link href="#home" scroll={true} className="hover-lift shrink-0">
        <img
          src="/images/logo.png"
          alt="Flying Safari Logo"
          width={403}
          height={180}
          className={`${logoClass} hidden lg:block`}
        />

        <img
          src="/images/logo.png"
          alt="Flying Safari Logo"
          width={403}
          height={180}
          className={`${logoClass} block h-8 lg:hidden`}
        />
      </Link>

      {/* Desktop Navigation */}
      <div
        className={`hidden min-w-0 shrink items-center gap-4 rounded-lg border border-[hsla(0,0%,100%,0.4)] bg-[hsla(0,0%,100%,0.12)] px-5 py-3 backdrop-blur-lg md:flex ${
          isHero ? "" : "!border-primary/20 !bg-white/80"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            scroll={true}
            className={`shrink-0 text-sm font-bold tracking-wide whitespace-nowrap transition-opacity hover-nav xl:text-base xl:tracking-widest ${
              isHero ? "text-white" : "text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="min-w-0 shrink md:hidden">
        <div
          className={`no-scrollbar flex max-w-[calc(100vw-8rem)] gap-3 overflow-x-auto rounded-lg border px-3 py-2 text-[11px] font-bold tracking-wide whitespace-nowrap ${
            isHero
              ? "border-[hsla(0,0%,100%,0.4)] bg-[hsla(0,0%,100%,0.12)] text-white backdrop-blur-lg"
              : "border-primary/20 bg-white text-primary"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={true}
              className="hover-nav shrink-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
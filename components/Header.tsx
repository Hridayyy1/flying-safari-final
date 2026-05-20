import Link from "next/link";

type HeaderProps = {
  variant?: "hero" | "page";
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Destination", href: "#destination" },
  { label: "Itineraries", href: "#itineraries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header({ variant = "page" }: HeaderProps) {
  const isHero = variant === "hero";

  const logoClass = isHero
    ? "h-20 w-auto object-contain brightness-0 invert lg:h-28"
    : "h-14 w-auto object-contain lg:h-20";

  return (
    <nav
      className={`flex items-center justify-between ${
        isHero
          ? ""
          : "bg-[#fdfbf7]/95 px-4 py-5 md:px-15 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <img
          src="/images/logo.png"
          alt="Flying Safari Logo"
          width={403}
          height={180}
          className={logoClass}
        />
      </Link>

      {/* Desktop Nav */}
      <div
        className={`hidden lg:flex items-center gap-6 whitespace-nowrap rounded-lg border border-[hsla(0,0%,100%,0.4)] bg-[hsla(0,0%,100%,0.12)] px-5 py-3 backdrop-blur-lg ${
          isHero ? "" : "!border-primary/20 !bg-white/80"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-xs lg:text-sm font-bold tracking-wide whitespace-nowrap transition-opacity hover:opacity-70 ${
              isHero ? "text-white" : "text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <button type="button">
          <img
            src="/images/menu.svg"
            alt="menu"
            className={`h-6 w-6 ${
              isHero ? "brightness-0 invert" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
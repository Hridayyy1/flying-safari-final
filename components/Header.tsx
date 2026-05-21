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
      className={`
        flex
        w-full
        items-start
        justify-between
        ${isHero ? "" : "bg-[#fdfbf7]/95 px-4 py-5 md:px-15 md:py-6"}
      `}
    >
      {/* LOGO */}
      <Link href="/" className="shrink-0">
        
        {/* Desktop Logo */}
        <img
          src="/images/logo.png"
          alt="Flying Safari Logo"
          width={403}
          height={180}
          className={`${logoClass} hidden lg:block`}
        />

        {/* Mobile Logo */}
        <img
          src="/images/icons/safari_mobile.png"
          alt="Flying Safari Mobile Logo"
          width={180}
          height={80}
          className={`h-14 w-auto object-contain lg:hidden ${
            isHero ? "brightness-0 invert" : ""
          }`}
        />

      </Link>

      {/* DESKTOP NAVBAR */}
      <div className="hidden flex-1 justify-end pt-7 lg:flex">
        <div
          className={`
            flex
            items-center
            gap-9
            whitespace-nowrap
            rounded-xl
            border
            border-[hsla(0,0%,100%,0.4)]
            bg-[hsla(0,0%,100%,0.12)]
            px-8
            py-3.5
            backdrop-blur-lg
            ${
              isHero
                ? ""
                : "!border-primary/20 !bg-white/80"
            }
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                flex
                items-center
                justify-center
                text-[17px]
                font-bold
                tracking-wide
                whitespace-nowrap
                transition-opacity
                hover:opacity-70
                ${isHero ? "text-white" : "text-primary"}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className="flex items-center lg:hidden">
        <button type="button">
          <img
            src="/images/icons/menu.png"
            alt="menu"
            className={`h-7 w-7 ${
              isHero ? "brightness-0 invert" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
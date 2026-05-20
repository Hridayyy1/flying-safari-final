import { Header } from "@/components/Header";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-160 w-full bg-cover bg-center bg-no-repeat md:h-150"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div className="relative grid h-full w-full grid-rows-[1fr_auto_2fr] bg-linear-to-l from-[hsla(0,0%,0%,0)] to-[hsla(0,0%,0%,0.5)] px-4 py-5 md:grid-rows-[1fr_auto_1fr] md:px-15 md:py-8">
        <Header variant="hero" />
        <div>
          <h1 className="text-2xl text-white md:text-5xl md:leading-16">
            Embark on <span className="font-pacifico">experiences</span> not
            just <br className="hidden md:inline" /> destinations with{" "}
            <span className="font-pacifico text-nowrap">our trips</span>
          </h1>
        </div>
        <button
          type="button"
          className="hover-btn absolute top-1/2 right-0 flex -translate-y-1/2 items-center gap-2 transition"
        >
          <span className="font-bold text-white">Next</span>
          <span className="h-0.5 w-30 bg-white" />
        </button>
      </div>
    </section>
  );
}

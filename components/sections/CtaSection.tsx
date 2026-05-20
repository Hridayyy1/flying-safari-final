export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-top bg-no-repeat xl:h-[564px]"
      style={{ backgroundImage: "url(/images/cta-bg.jpg)" }}
    >
      <h2 className="absolute top-0 left-0 w-full -translate-10 text-center text-5xl text-white sm:text-7xl md:text-8xl lg:text-[132px] xl:text-[170px]">
        FLYING SAFARI
      </h2>
      <div className="absolute top-0 left-0 h-28 w-full bg-linear-to-b from-white to-transparent" />
      <div className="space-y-2 px-4 md:pt-40">
        <p className="text-lg font-bold text-white md:text-xl">
          Subscribe for latest update &amp; offers
        </p>
        <div className="flex min-w-120 overflow-hidden rounded-full bg-white/40 p-1 backdrop-blur-[88px]">
          <input
            id="cta-email"
            placeholder="Your Email Address"
            className="flex-1 border-0 pl-3 text-sm font-bold text-white outline-0 placeholder:text-white md:text-base"
            type="email"
            name="cta-email"
          />
          <button
            type="button"
            className="hover-btn rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition md:text-base"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

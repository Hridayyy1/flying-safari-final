export function CtaSection() {
  return (
    <section
      id="cta"
      className="
        relative
        flex
        min-h-[420px]
        items-center
        justify-center
        overflow-hidden
        bg-cover
        bg-top
        bg-no-repeat
        px-4
        py-16
        md:min-h-[500px]
        xl:h-[564px]
      "
      style={{ backgroundImage: "url(/images/cta-bg.jpg)" }}
    >
      {/* BACKGROUND TEXT */}
      <h2
        className="
          absolute
          top-5
          left-1/2
          w-full
          -translate-x-1/2
          text-center
          text-[42px]
          leading-none
          text-white
          opacity-90
          sm:text-6xl
          md:top-0
          md:left-0
          md:w-full
          md:translate-x-0
          md:-translate-y-10
          md:text-8xl
          lg:text-[132px]
          xl:text-[170px]
        "
      >
        FLYING SAFARI
      </h2>

      {/* TOP WHITE GRADIENT */}
      <div className="absolute top-0 left-0 h-28 w-full bg-linear-to-b from-white to-transparent" />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[540px]
          flex-col
          items-center
          pt-16
          text-center
          md:pt-40
        "
      >
        {/* SUBTITLE */}
        <p className="mb-4 text-base font-bold text-white md:text-xl">
          Subscribe for latest update &amp; offers
        </p>

        {/* SUBSCRIBE BOX */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-3
            rounded-[28px]
            bg-white/30
            p-3
            backdrop-blur-[88px]
            md:min-w-[520px]
            md:flex-row
            md:items-center
            md:overflow-hidden
            md:rounded-full
            md:p-1
          "
        >
          {/* INPUT */}
          <input
            id="cta-email"
            placeholder="Your Email Address"
            className="
              h-[54px]
              w-full
              rounded-full
              border-0
              bg-transparent
              px-5
              text-sm
              font-bold
              text-white
              outline-0
              placeholder:text-white
              md:flex-1
              md:rounded-none
              md:px-6
              md:text-base
            "
            type="email"
            name="cta-email"
          />

          {/* BUTTON */}
          <button
            type="button"
            className="
              hover-btn
              h-[54px]
              w-full
              rounded-full
              bg-primary
              px-8
              text-sm
              font-bold
              text-white
              transition
              md:w-auto
              md:text-base
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
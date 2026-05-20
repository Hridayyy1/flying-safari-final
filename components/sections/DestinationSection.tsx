import { destinations } from "@/lib/data";

type DestinationSectionProps = {
  withHeroOffset?: boolean;
};

export function DestinationSection({
  withHeroOffset = false,
}: DestinationSectionProps) {
  return (
    <section
      id="destination"
      className={`flex w-full justify-center gap-20 bg-[#fdfbf7] pb-16 ${
        withHeroOffset ? "pt-[400px] md:pt-[250px]" : "pt-16 md:pt-20"
      }`}
    >
      <div className="flex w-full max-w-[1440px] flex-col gap-6 px-4 md:gap-12 md:px-20 lg:gap-16 xl:flex-row-reverse xl:gap-20">
        <div className="my-auto shrink-0 space-y-8 md:space-y-12">
          <div>
            <h3 className="text-sm font-semibold text-secondary lg:text-lg">
              POPULAR DESTINATION
            </h3>
            <h2 className="text-[1.75rem] text-[#2c2c2c] sm:text-3xl lg:text-5xl">
              East Africa Iconic <br /> Safari Destinations
            </h2>
          </div>
          <button
            type="button"
            className="hover-btn rounded bg-primary px-6 py-2.5 text-sm text-white transition lg:text-base"
          >
            Explore Destination
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {destinations.map((dest) => (
            <div
              key={dest.slug}
              className="hover-card aspect-[13/9] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat transition"
              style={{
                backgroundImage: `url(/images/destinations/${dest.slug}.jpg)`,
              }}
            >
              <div className="relative flex h-full w-full items-center justify-center bg-black/40 px-5">
                <h3 className="text-left text-sm text-white md:text-base lg:text-xl xl:leading-8">
                  {dest.name}
                </h3>
                {dest.featured && (
                  <span className="absolute top-0 left-0 rounded-br-2xl bg-primary px-3 py-1 text-[10px] text-white md:text-xs">
                    Featured
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

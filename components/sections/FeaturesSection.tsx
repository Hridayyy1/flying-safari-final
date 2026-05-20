import Image from "next/image";
import { features } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative flex justify-center bg-cover bg-center bg-no-repeat px-10 py-5 md:px-20 md:py-15"
      style={{ backgroundImage: "url(/images/features-bg.jpg)" }}
    >
      <div className="grid max-w-[1280px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-13 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="hover-lift relative flex flex-col items-center justify-center text-center md:gap-5"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="mb-6 h-14 md:mb-8 md:h-16"
            />
            <span className="absolute top-6 left-1/2 size-20 -translate-x-1/2 rotate-x-80 rounded-full bg-secondary/20 md:top-8 md:size-25" />
            <h2 className="mb-1 text-lg font-medium md:mb-0 md:text-2xl">
              {feature.title}
            </h2>
            <p className="text-sm text-[#595959] md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 h-20 w-full bg-linear-to-b from-transparent to-white" />
    </section>
  );
}

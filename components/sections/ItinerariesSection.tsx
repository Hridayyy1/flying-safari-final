import Image from "next/image";
import { itineraries } from "@/lib/data";

const activityIcons = [
  "/images/sf-img-36.png",
  "/images/sf-img-37.png",
  "/images/sf-img-38.png",
  "/images/sf-img-39.png",
  "/images/sf-img-40.png",
];

export function ItinerariesSection() {
  return (
    <section
      id="itineraries"
      className="bg-cover bg-center bg-no-repeat py-7 md:py-15"
      style={{ backgroundImage: "url(/images/itineraries-bg.jpg)" }}
    >
      <div className="flex items-end justify-between px-4 md:px-20">
        <div>
          <p className="text-sm text-secondary md:text-base">
            POPULAR ITINERARIES
          </p>
          <h1 className="text-[1.75rem] text-white md:text-5xl">
            Safari Itineraries <br />
            Curated just for you
          </h1>
        </div>
        <div className="hidden space-x-6 md:block">
          <button type="button" className="hover-arrow transition">
            <Image
              src="/images/arrows/green-left.png"
              alt="back-button"
              width={164}
              height={80}
              className="h-10 w-auto"
            />
          </button>
          <button type="button" className="hover-arrow transition">
            <Image
              src="/images/arrows/green-right.png"
              alt="back-button"
              width={164}
              height={80}
              className="h-10 w-auto"
            />
          </button>
        </div>
      </div>

      <div className="no-scrollbar mt-10 flex w-full gap-7 overflow-x-auto px-4 pb-2 md:px-20">
        {itineraries.map((item) => (
          <div
            key={item.title}
            className="hover-card w-86 shrink-0 overflow-hidden rounded-lg bg-[#f8f5f0] transition md:w-100"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt=""
                width={400}
                height={225}
                className="aspect-video w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded bg-white px-2 py-1 text-sm">
                {item.park}
              </span>
            </div>
            <div className="flex flex-col items-center px-6 py-5">
              <div className="text-xs text-[#595959]">
                <span>{item.nights}</span> |<span> {item.locations}</span>
              </div>
              <h3 className="mt-4 text-center text-lg text-[#2C2C2C] md:text-2xl">
                {item.title}
              </h3>
              <div className="mt-4 flex gap-3">
                {activityIcons.map((icon) => (
                  <Image
                    key={icon}
                    src={icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 shrink-0 object-contain"
                    aria-hidden
                  />
                ))}
              </div>
              <button
                type="button"
                className="hover-btn mt-11 rounded border border-[#595959]/40 px-6 py-2 text-sm font-bold text-[#595959] transition md:py-3 md:text-base"
              >
                VIEW ITINERARY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

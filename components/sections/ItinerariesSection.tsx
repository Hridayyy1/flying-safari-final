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
      className="overflow-x-hidden bg-cover bg-center bg-no-repeat py-10 md:py-15"
      style={{ backgroundImage: "url(/images/itineraries-bg.jpg)" }}
    >
      {/* HEADER */}
      <div className="flex items-end justify-between px-5 md:px-20">
        
        {/* TEXT */}
        <div>
          <p className="text-sm tracking-[0.15em] text-secondary md:text-base">
            POPULAR ITINERARIES
          </p>

          <h1 className="mt-2 text-[2rem] leading-tight text-white md:text-5xl">
            Safari Itineraries <br />
            Curated just for you
          </h1>
        </div>

        {/* DESKTOP ARROWS */}
        <div className="hidden items-center gap-6 md:flex">
          
          <button
            type="button"
            className="hover-arrow transition"
          >
            <Image
              src="/images/arrows/green-left.png"
              alt="Previous"
              width={164}
              height={80}
              className="h-10 w-auto"
            />
          </button>

          <button
            type="button"
            className="hover-arrow transition"
          >
            <Image
              src="/images/arrows/green-right.png"
              alt="Next"
              width={164}
              height={80}
              className="h-10 w-auto"
            />
          </button>

        </div>
      </div>

      {/* CAROUSEL */}
      <div
        className="
          no-scrollbar
          mt-10
          flex
          snap-x
          snap-mandatory
          gap-5
          overflow-x-auto
          px-5
          pb-4
          scroll-smooth
          md:gap-7
          md:px-20
        "
      >
        {itineraries.map((item) => (
          <div
            key={item.title}
            className="
              hover-card
              w-[85%]
              snap-center
              shrink-0
              overflow-hidden
              rounded-[20px]
              bg-[#f8f5f0]
              transition
              md:w-[400px]
            "
          >
            {/* IMAGE */}
            <div className="relative">
              
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={225}
                className="aspect-video w-full object-cover"
              />

              {/* PARK TAG */}
              <span
                className="
                  absolute
                  left-4
                  top-4
                  rounded-md
                  bg-white
                  px-3
                  py-2
                  text-sm
                  text-[#2C2C2C]
                "
              >
                {item.park}
              </span>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center px-6 py-7">

              {/* DETAILS */}
              <div className="text-sm tracking-[0.15em] text-[#666666] md:text-base">
                <span>{item.nights}</span>

                <span className="mx-2">•</span>

                <span>{item.locations}</span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-5
                  text-center
                  text-[1.9rem]
                  leading-tight
                  text-[#2C2C2C]
                  md:text-2xl
                "
              >
                {item.title}
              </h3>

              {/* ICONS */}
              <div className="mt-6 flex items-center gap-4">
                {activityIcons.map((icon) => (
                  <Image
                    key={icon}
                    src={icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    aria-hidden
                  />
                ))}
              </div>

              {/* BUTTON */}
              <button
                type="button"
                className="
                  hover-btn
                  mt-8
                  rounded-lg
                  border
                  border-[#595959]/40
                  px-8
                  py-4
                  text-lg
                  font-bold
                  tracking-[0.08em]
                  text-[#595959]
                  transition
                "
              >
                VIEW ITINERARY
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* MOBILE ARROWS */}
      <div className="mt-10 flex items-center justify-center gap-10 md:hidden">
        
        <button
          type="button"
          className="hover-arrow transition"
        >
          <Image
            src="/images/arrows/green-left.png"
            alt="Previous"
            width={120}
            height={60}
            className="h-8 w-auto"
          />
        </button>

        <button
          type="button"
          className="hover-arrow transition"
        >
          <Image
            src="/images/arrows/green-right.png"
            alt="Next"
            width={120}
            height={60}
            className="h-8 w-auto"
          />
        </button>

      </div>
    </section>
  );
}
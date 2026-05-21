// QuickAction.tsx

import Image from "next/image";

export function QuickAction() {
  return (
    <div
      id="quick-action"
      className="absolute top-[500px] left-[50%] mx-auto w-[calc(100%-3.75rem)] max-w-[1280px] -translate-x-[50%] transform grid grid-cols-[auto_auto] grid-rows-[auto_auto_auto_auto] md:top-[450px] md:grid-cols-2"
    >
      <div className="flex justify-between overflow-hidden rounded-t-lg bg-[#f3f3f3]">
        <button
          type="button"
          className="hover-btn flex flex-1 items-center justify-center gap-3 bg-white px-3 py-3 text-lg font-bold tracking-widest transition md:justify-start md:px-4 md:first:pl-8"
        >
          <img
            src="/images/icons/Book.jpg"
            alt=""
            width={50}
            height={48}
            className="h-7 w-7 shrink-0 object-contain"
            aria-hidden
          />
          <span className="hidden md:block">Book Flights</span>
        </button>

        <button
          type="button"
          className="hover-btn flex flex-1 items-center justify-center gap-3 px-3 py-3 text-lg font-bold tracking-widest transition md:justify-start md:px-4"
        >
          <img
            src="/images/icons/Reserve.jpg"
            alt=""
            width={50}
            height={48}
            className="h-7 w-7 shrink-0 object-contain"
            aria-hidden
          />
          <span className="hidden md:block">Find Reservations</span>
        </button>

        <button
          type="button"
          className="hover-btn flex flex-1 items-center justify-center gap-3 px-3 py-3 text-lg font-bold tracking-widest transition md:justify-start md:px-4 md:last:pr-8"
        >
          <img
            src="/images/icons/Check_in.jpg"
            alt=""
            width={48}
            height={48}
            className="h-7 w-7 shrink-0 object-contain"
            aria-hidden
          />
          <span className="hidden md:block">Check-In</span>
        </button>
      </div>

      <div className="col-span-2 row-span-3 row-start-2 rounded-b-lg rounded-tr-lg bg-white shadow-lg">
        
        <div className="px-6 py-3">
          <button
            type="button"
            className="hover-btn bg-primary p-3 text-lg text-white transition"
          >
            Round Trip
          </button>

          <button
            type="button"
            className="hover-btn bg-[#f3f3f3] p-3 text-lg text-primary transition"
          >
            One Way
          </button>
        </div>

        <div className="grid grid-rows-[2fr_1fr_1fr_1fr] gap-4 p-4 md:grid-cols-[2fr_1fr_1fr_1fr] md:grid-rows-1">
          
          <div className="relative grid grid-rows-2 gap-4 text-sm md:grid-cols-2 md:grid-rows-1">
            
            <input
              className="w-full rounded bg-[#f3f3f3] px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
              placeholder="FROM"
              type="text"
            />

            <input
              className="w-full rounded bg-[#f3f3f3] px-3 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
              placeholder="TO"
              type="text"
            />

            <button
              type="button"
              title="swap"
              className="hover-btn absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1 transition"
            >
              <Image
                src="/images/icons/swap.jpg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0 object-contain"
                aria-hidden
              />
            </button>
          </div>

          <input
            className="w-full rounded bg-[#f3f3f3] px-2 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
            placeholder="DEPART DATE"
            type="date"
          />

          <input
            className="w-full rounded bg-[#f3f3f3] px-2 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
            placeholder="RETURN DATE"
            type="date"
          />

          <select
            name="PASSENGERS"
            title="passengers"
            className="w-full rounded bg-[#f3f3f3] px-2 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
            defaultValue="1"
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 p-4 md:flex-row md:items-center">
          
          <div className="flex items-center gap-2">
            <Image
              src="/images/icons/tabler-icon-ticket.jpg"
              alt=""
              width={24}
              height={24}
              className="size-5 shrink-0 object-contain md:size-6"
              aria-hidden
            />

            <p className="text-sm md:text-base">
              Have a coupon code? Enter it here
            </p>
          </div>

          <button
            type="button"
            className="hover-btn rounded bg-primary px-6 py-2.5 text-sm font-bold text-white transition md:py-3 md:text-lg"
          >
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
}
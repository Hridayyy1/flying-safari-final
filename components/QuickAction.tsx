import Image from "next/image";

export function QuickAction() {
  return (
    <div
      id="quick-action"
      className="absolute top-[350px] left-[50%] mx-auto w-[calc(100%-3.75rem)] max-w-[1280px] -translate-x-[50%] transform grid grid-cols-[auto_auto] grid-rows-[auto_auto_auto_auto] md:top-[450px] md:grid-cols-2"
    >
      {/* Top Navigation Buttons */}
      <div
        className="
          flex
          h-[60px]
          w-[657px]
          justify-between
          overflow-hidden
          rounded-t-lg
          rounded-tr-[8px]
          bg-[#f3f3f3]
          pr-[20px]
        "
      >

        {/* Book Flights */}
        <button
          type="button"
          className="
            hover-btn
            flex
            flex-1
            items-center
            justify-center
            gap-2
            bg-white
            px-3
            py-2
            text-sm
            font-bold
            tracking-[0.15em]
            transition
            md:justify-start
            md:first:pl-6
          "
        >
          <img
            src="/images/icons/Book.jpg"
            alt=""
            width={40}
            height={40}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />

          <span className="hidden md:block">
            Book Flights
          </span>
        </button>

        {/* Find Reservations */}
        <button
          type="button"
          className="
            hover-btn
            flex
            flex-1
            items-center
            justify-center
            gap-2
            px-3
            py-2
            text-sm
            font-bold
            tracking-[0.15em]
            transition
            md:justify-start
          "
        >
          <img
            src="/images/icons/Reserve.jpg"
            alt=""
            width={40}
            height={40}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />

          <span className="hidden md:block">
            Find Reservations
          </span>
        </button>

        {/* Check-In */}
        <button
          type="button"
          className="
            hover-btn
            flex
            flex-1
            items-center
            justify-center
            gap-2
            px-3
            py-2
            text-sm
            font-bold
            tracking-[0.15em]
            transition
            md:justify-start
          "
        >
          <img
            src="/images/icons/Check_in.jpg"
            alt=""
            width={40}
            height={40}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />

          <span className="hidden md:block">
            Check-In
          </span>
        </button>

      </div>

      {/* Main Card */}
      <div className="col-span-2 row-span-3 row-start-2 rounded-b-lg rounded-tr-lg bg-white shadow-lg">

        {/* Trip Type Buttons */}
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

        {/* Form Inputs */}
        <div className="grid grid-rows-[2fr_1fr_1fr_1fr] gap-4 p-4 md:grid-cols-[2fr_1fr_1fr_1fr] md:grid-rows-1">

          {/* From / To */}
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

            {/* Swap Button */}
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

          {/* Depart Date */}
          <input
            className="w-full rounded bg-[#f3f3f3] px-2 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
            placeholder="DEPART DATE"
            type="date"
          />

          {/* Return Date */}
          <input
            className="w-full rounded bg-[#f3f3f3] px-2 py-3 outline-none transition focus:ring-2 focus:ring-primary/30"
            placeholder="RETURN DATE"
            type="date"
          />

          {/* Passenger Select */}
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

        {/* Bottom Row */}
        <div className="flex flex-col items-start justify-between gap-3 p-4 md:flex-row md:items-center">

          {/* Coupon */}
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

          {/* Search Button */}
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
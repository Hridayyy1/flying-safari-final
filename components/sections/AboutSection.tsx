import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/about-bg.jpg)" }}
    >
      <div className="absolute -top-2 h-12 w-full bg-linear-to-b from-[#fdfbf7] to-[#fdfbf7]/0" />
      <div className="flex h-full flex-col items-center justify-center gap-10 px-4 py-6 pb-16 md:p-20">
        <div className="max-w-[874px] text-center">
          <p className="text-lg font-medium text-secondary">
            In Tanzania, the rhythm of the wild is untouched by time. From the
            roar of lions to the whispers of the savannah winds, the land
            invites you to wander beyond the ordinary and embrace.
          </p>
          <h3 className="mt-4 font-pacifico text-[1.75rem] md:text-5xl">
            Flying Safari
          </h3>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/about/photo-1.jpg"
            alt="image-1"
            width={320}
            height={480}
            className="aspect-[9/13] w-1/3 max-w-80 -rotate-12 translate-x-1/12 translate-y-1/8 object-cover object-center transition hover:scale-105"
          />
          <Image
            src="/images/about/photo-2.jpg"
            alt="image-2"
            width={320}
            height={480}
            className="z-10 aspect-[9/13] w-1/3 max-w-80 object-cover object-center transition hover:scale-105"
          />
          <Image
            src="/images/about/photo-3.jpg"
            alt="image-3"
            width={320}
            height={480}
            className="aspect-[9/13] w-1/3 max-w-80 rotate-12 -translate-x-1/12 translate-y-1/8 object-cover object-center transition hover:scale-105"
          />
        </div>

        <Link
          href="/about"
          className="hover-btn rounded bg-primary px-6 py-2.5 text-sm text-white transition md:py-3 md:text-base"
        >
          About Us
        </Link>
        <div className="absolute bottom-0 h-12 w-full bg-linear-to-t from-[#fdfbf7] to-[#fdfbf7]/0" />
      </div>
    </section>
  );
}

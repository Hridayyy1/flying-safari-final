import Image from "next/image";
import Link from "next/link";

type HomeScrollSectionProps = {
  id: string;
  /** Your provided screenshot — used as-is, no substitute assets */
  imageSrc: string;
  imageAlt: string;
  href: string;
};

/**
 * Full-width reference art from your screenshots, in scroll order on the home page.
 */
export function HomeScrollSection({
  id,
  imageSrc,
  imageAlt,
  href,
}: HomeScrollSectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-4 bg-[#fdfbf7]">
      <Link
        href={href}
        className="hover-lift block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={665}
          className="h-auto w-full object-contain object-top"
          sizes="100vw"
          priority={false}
        />
      </Link>
    </section>
  );
}

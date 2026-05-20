import Image from "next/image";

const galleryImages = [1, 2, 3, 4, 5] as const;
const scales = ["z-1", "z-2 scale-110", "z-3 scale-120", "z-2 scale-110", "z-1"] as const;

export function GallerySection() {
  return (
    <section id="gallery" className="overflow-x-hidden py-15">
      <div className="px-4 text-center md:px-20">
        <h2 className="mb-3 text-sm font-medium text-secondary md:mb-2 md:text-lg">
          GALLERY
        </h2>
        <h3 className="text-[1.75rem] md:text-5xl">
          A selection of Images of Our Beautiful
          <br />
          Safari Experiences
        </h3>
      </div>

      <div className="my-20 flex justify-center">
        {galleryImages.map((num, i) => (
          <Image
            key={num}
            src={`/images/gallery/${num}.jpg`}
            alt={`Gallery Image ${num}`}
            width={172}
            height={224}
            className={`hover-card aspect-[10/13] h-auto min-w-[172px] w-1/5 shrink-0 object-cover shadow-lg transition ${scales[i]}`}
          />
        ))}
      </div>

      <div className="flex justify-center space-x-6">
        <button type="button" className="hover-arrow transition">
          <Image
            src="/images/arrows/white-left.png"
            alt="back-button"
            width={164}
            height={80}
            className="h-10 opacity-50"
          />
        </button>
        <button type="button" className="hover-arrow transition">
          <Image
            src="/images/arrows/white-right.png"
            alt="back-button"
            width={164}
            height={80}
            className="h-10 w-auto"
          />
        </button>
      </div>
    </section>
  );
}

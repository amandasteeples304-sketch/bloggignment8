"use client";
import Link from "next/link";
import Image from "next/image";

export default function Carousel({ animals }) {
  const scroll = (offset) => {
    const container = document.querySelector(".carousel-container");
    if (container) {
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  return (
    <div className="relative group">
      <div className="carousel-container no-scrollbar flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth">
        {animals.map((animal) => (
          <Link
            key={animal.id}
            href={`/posts/${animal.id}`}
            className="snap-center shrink-0 transition-transform hover:scale-105 duration-300"
          >
            <div className="w-[75vw] sm:w-[280px] md:w-[320px] bg-white/10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <div className="relative h-[250px] md:h-[300px] w-full">
                <Image
                  src={animal.image}
                  alt={animal.animal}
                  fill
                  sizes="(max-width: 768px) 75vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center bg-black/40 text-white backdrop-blur-md">
                <h3 className="font-bold text-xl tracking-tight">
                  {animal.animal}
                </h3>
                <p className="text-sm opacity-90 mt-1 italic">
                  Seen by {animal.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => scroll(-340)}
          className="flex items-center justify-center absolute left-0 top-1/3 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12  bg-white/90 hover:bg-white text-black rounded-full shadow-2xl border border-black/10 transition-all active:scale-95 md:opacity-0 md:group-hover:opacity-100 -ml-1 md:-ml-2"
          aria-label="Previous image"
        >
          &larr;{" "}
        </button>
        <button
          onClick={() => scroll(340)}
          className="flex items-center justify-center absolute right-0 top-1/3 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-black rounded-full shadow-2xl border border-black/10 transition-all active:scale-95 md:opacity-0 md:group-hover:opacity-100 -mr-1 md:-mr-2"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

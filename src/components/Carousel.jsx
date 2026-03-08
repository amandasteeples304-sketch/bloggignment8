"use client";
import Link from "next/link";
import Image from "next/image";

export default function Carousel({ animals }) {
  const scroll = (offset) => {
    const container = document.querySelector(".no-scrollbar");
    if (container) {
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  return (
    <div className="relative group">
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth">
        {animals.map((animal) => (
          <Link
            key={animal.id}
            href={`/posts/${animal.id}`}
            className="snap-center shrink-0 transition-transform hover:scale-105 duration-300"
          >
            <div className="w-[280px] md:w-[320px] bg-white/10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              <div className="relatve h-[300px] w-full">
                <Image
                  src={animal.image}
                  alt={animal.animal}
                  fill
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
          className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-black rounded-full shadow-2xl border border-black/10 transition-all active:scale-95 opacity-0 group-hover:opacity-100 -ml-2"
          aria-label="Previous image"
        >
          &larr;{" "}
        </button>
        <button
          onClick={() => scroll(340)}
          className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-black rounded-full shadow-2xl border border-black/10 transition-all active:scale-95 opacity-0 group-hover:opacity-100 -mr-2"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

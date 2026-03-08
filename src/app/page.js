import { db } from "@/utils/db";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const sort = params.sort || "created_at";
  const order = params.order === "asc" ? "ASC" : "DESC";
  const validColumns = ["animal", "created_at", "name"];
  const safeSort = validColumns.includes(sort) ? sort : "created_at";
  const result = await db.query(
    `SELECT * FROM animalcomments ORDER BY ${safeSort} ${order}`,
  );
  const animals = result.rows;

  return (
    <>
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold"> Hello, my name is Sophie,</h1>
        <h1 className="text-xl">
          This is a blog about the animals I see on my travels.
        </h1>
        <nav className="mt-6 flex justify-center gap-4 text-sm font-bold uppercase tracking-wider">
          <span>Sort by:</span>
          <Link
            href="/?sort=animal&order=asc"
            aria-label="Sort animals alphabetically from A to Z"
          >
            A-Z
          </Link>{" "}
          |
          <Link
            href="/?sort=animal&order=desc"
            aria-label="Sort animals alphabetically from Z to A"
          >
            Z-A
          </Link>{" "}
          |
          <Link
            href="/?sort=created_at&order=desc"
            aria-label="Sort by newest sightings first"
          >
            Newest
          </Link>{" "}
          |
          <Link
            href="/?sort=created_at&order=asc"
            aria-label="Sort by oldest sightings first"
          >
            Oldest
          </Link>
        </nav>
        <div className="mt-6">
          <Link
            href="/newPost"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all shadow-lg font-bold uppercase tracking-wide"
          >
            Submit your own post
          </Link>
        </div>
      </header>
      <div className="py-10">
        <Carousel animals={animals} />
      </div>
    </>
  );
}

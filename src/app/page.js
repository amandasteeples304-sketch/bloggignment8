import { db } from "@/utils/db";
import Link from "next/link";
import Image from "next/image";

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
      <h1> Hello, my name is Sophie,</h1>
      <h1>This is a blog about the animals I see on my travels.</h1>
      <nav style={{ marginBottom: "20px" }}>
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
      <div>
        {animals.map((animal) => (
          <div key={animal.id}>
            <h2>{animal.animal}</h2>
            <p> Posted by: {animal.name}</p>
            <p>{animal.comment}</p>
            <Link href={`/posts/${animal.id}`}>
              <Image
                src={animal.image}
                alt={animal.name}
                width={200}
                height={200}
              />
            </Link>
            <Link href={`/posts/${animal.id}`}>View Details</Link>
            <Link href={`/posts/${animal.id}`}>Add Comment</Link>
            <Link href="/newPost">Add a new animal sighting</Link>
          </div>
        ))}
      </div>
    </>
  );
}

import { db } from "@/utils/db";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const result = await db.query("SELECT * FROM animalcomments");
  const animals = result.rows;

  return (
    <>
      <h1> Hello, my name is Sophie,</h1>
      <h1>This is a blog about the animals I see on my travels.</h1>
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

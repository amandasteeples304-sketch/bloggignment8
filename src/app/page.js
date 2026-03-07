import { db } from "@/utils/db";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const result = await db.query("SELECT * FROM animalcomments");
  const animals = result.rows;

  return (
    <>
      <h1>A blog about the animals I see on my travels</h1>
      <div>
        {animals.map((animal) => (
          <div key={animal.id}>
            <h2>{animal.animal}</h2>
            <p> Posted by: {animal.name}</p>
            <p>{animal.comment}</p>
            <Image
              src={animal.image}
              alt={animal.name}
              width={200}
              height={200}
            />
            <Link href={`/posts/${animal.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

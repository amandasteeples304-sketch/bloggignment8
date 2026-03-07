import Link from "next/link";
import { db } from "@/utils/db";
import Comments from "@/components/Comments";
import AddComment from "@/components/AddComment";
import Image from "next/image";
import DeleteButton from "@/components/DeleteButton";

export default async function PostsPage({ params }) {
  const { postId } = await params;
  const result = await db.query("SELECT * FROM animalcomments WHERE id = $1", [
    postId,
  ]);
  const animal = result.rows[0];
  if (!animal) {
    return <p>Animal not found</p>;
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{animal.animal}</h1>
      <p>Seen by: {animal.name}</p>
      <Image src={animal.image} alt={animal.animal} width={400} height={400} />
      <h2>Comments</h2>
      <Comments id={id} />
      <AddComment id={id} />
      <DeleteButton id={id} />
    </div>
  );
}

import { db } from "@/utils/db";
import { revalidatePath } from "next/cache";
import Comments from "@/components/Comments";
import AddComment from "@/components/AddComment";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function PostsPage({ params }) {
  const { postId } = await params;
  const result = await db.query("SELECT * FROM animalcomments WHERE id = $1", [
    postId,
  ]);
  const animal = result.rows[0];
  if (!animal) {
    return <p>Animal not found</p>;
  }

  async function handleDelete(commentId) {
    "use server";
    await db.query("DELETE FROM friendcomments WHERE id = $1", [commentId]);
    revalidatePath(`/posts/${postId}`);
  }

  return (
    <div>
      <h1>{animal.animal}</h1>
      <p>Seen by: {animal.name}</p>
      <Image src={animal.image} alt={animal.animal} width={400} height={400} />
      <h2>Comments</h2>
      <Comments id={postId} handleDelete={handleDelete} />
      <AddComment id={postId} />
    </div>
  );
}

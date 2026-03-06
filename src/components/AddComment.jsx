import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import pg from "pg";

export default async function AddComment({ id }) {
  async function handleComment(formData) {
    "use server";
    console.log("Saving comment to the datebase");
    const { username, comment } = Object.fromEntries(formData);

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    await db.query(
      "insert into comments (animal_id, name, comment) values ($1, $2, $3)",
      [animal_id, username, comment],
    );
    revalidatePath(`/posts/${id}`);
  }

  return (
    <>
      <form action={handleComment}>
        <label htmlFor="content" required />
        <input name="username" required />
        <textarea name="comment" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

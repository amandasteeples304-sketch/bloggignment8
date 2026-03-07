import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "../utils/db";

export default async function AddComment({ id }) {
  async function handleComment(formData) {
    "use server";
    console.log("Saving comment to the datebase");
    const { animal_id, username, comment } = Object.fromEntries(formData);

    await db.query(
      "INSERT INTO friendcomments (animal_id, name, comment) VALUES ($1, $2, $3)",
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

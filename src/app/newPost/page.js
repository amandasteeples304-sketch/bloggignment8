import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/db";

export default async function NewPostPage() {
  async function handleSubmit(formData) {
    "use server";
    const { animal, name, comment, image } = Object.fromEntries(formData);
    await db.query(
      "INSERT INTO animalcomments (animal, name, comment, image) VALUES ($1, $2, $3, $4)",
      [animal, name, comment, image],
    );
    revalidatePath("/");
    redirect("/");
  }
  return (
    <>
      <h2>Create New Post</h2>
      <form action={handleSubmit}>
        <input name="animal" placeholder="Animal Name" required />
        <input name="name" placeholder="Your Name" required />
        <textarea name="comment" placeholder="Your Comment" required />
        <input name="image" placeholder="Image URL" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

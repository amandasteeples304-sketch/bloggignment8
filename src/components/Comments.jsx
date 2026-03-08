import { db } from "@/utils/db";
import DeleteButton from "@/components/DeleteButton";

export default async function Comments({ id, handleDelete }) {
  const result = await db.query(
    "SELECT * FROM friendcomments WHERE animal_id = $1",
    [id],
  );
  const comments = result.rows;

  return (
    <div>
      {comments.map((item) => (
        <div
          key={item.id}
          style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
        >
          <p>
            <strong>{item.name}</strong>
          </p>
          <p>{item.comment}</p>
          <p>{item.created_at.toLocaleString()}</p>
          <DeleteButton id={item.id} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

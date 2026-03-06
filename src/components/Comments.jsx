import pg from "pg";
export default async function Comments({ id }) {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  const result = await db.query(
    "SELECT * FROM friendcomments WHERE animal_id = $1",
    [id],
  );
  const comments = result.rows;

  return (
    <div>
      {comments.map((item) => (
        <div key={item.id}>
          <p>
            <strong>{item.name}</strong>
          </p>
          <p>{item.comment}</p>
          <p>{item.created_at}</p>
        </div>
      ))}
    </div>
  );
}

import { db } from "@/utils/db";
import DeleteButton from "@/components/DeleteButton";

export default async function Comments({ id, handleDelete }) {
  const postRes = await db.query("SELECT * FROM animalcomments WHERE id = $1", [
    id,
  ]);

  const friendsRes = await db.query(
    "SELECT * FROM friendcomments WHERE animal_id = $1 ORDER BY created_at DESC",
    [id],
  );
  const mainPost = postRes.rows[0];
  const friendComments = friendsRes.rows;

  return (
    <div className="space-y-10">
      <section>
        <h3 className="font-bold text-xl mb-4 italic text-black/80">
          Sophie&apos;s thoughts:
        </h3>
        <div className="p-6 bg-white/40 rounded-lg border-l-4 border-black shadow-md">
          <p className="text-xl leading-relaxed font-medium">
            {mainPost?.comment}
          </p>
          <p className="text-xs mt-3 opacity-60 uppercase tracking-widest">
            Posted by Sophie on {mainPost?.created_at?.toLocaleDateString()}
          </p>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-lg mb-4 text-black/70">
          What friends are saying:
        </h3>
        <div className="grid gap-4">
          {friendComments.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white/20 rounded-xl border border-black/5"
            >
              <p className="font-vold text-sm">{item.name}</p>
              <p className="text-md mt-1">{item.comment}</p>
              <div className="mt-2 scale-75 origin-left">
                <DeleteButton id={item.id} handleDelete={handleDelete} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

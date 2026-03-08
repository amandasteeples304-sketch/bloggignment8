"use client";

export default function DeleteButton({ id, handleDelete }) {
  const handleClick = async () => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete this?",
    );
    if (confirmed) {
      await handleDelete(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="Delete your comment"
      style={{
        marginTop: "25px",
        backgroundColor: "white",
        color: "black",
        border: "2px solid black",
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      Delete comment
    </button>
  );
}

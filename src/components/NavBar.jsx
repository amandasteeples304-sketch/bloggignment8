import Link from "next/link";
export default function NavBar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px",
    borderBottom: "2px solid black",
    marginBottom: "20px",
    backgroundColor: "white",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle} aria-label="Navigate to home page">
        Home
      </Link>
      <Link
        href="/aboutPage"
        style={linkStyle}
        aria-label="Navigate to about page"
      >
        About
      </Link>
    </nav>
  );
}

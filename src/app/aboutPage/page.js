export default function AboutPage() {
  const containerStyle = {
    maxWidth: "800px",
    lineHeight: "1.6",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <h1>About Sophie's Animal Blog</h1>
      <p>
        Welcome to my animal blog! I created this to showcase the strange and
        wonderful animals that I meet while I travel. Feel free to leave any
        thoughts and opinions on the images! You can even submit your own animal
        post!
      </p>
    </div>
  );
}

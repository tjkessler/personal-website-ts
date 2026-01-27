export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">About Me</h1>
      <p>Hi! I'm Dr. Travis Kessler, machine learning and software engineer. Welcome to my website!</p>
      <br></br>
      <a
        href="/files/kessler_travis_cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-link mt-4"
      >
        View my curriculum vitae
      </a>
    </div>
  );
}

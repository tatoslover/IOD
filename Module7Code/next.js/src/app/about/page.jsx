import Link from "next/link";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        This is the about page. Nothing to see, go <Link href="/">home</Link>.
      </p>

      <div className="about-info">
        <h2>How this page works:</h2>
        <ul>
          <li>This page exists at <code>/about</code> because it's in the <code>app/about/</code> folder</li>
          <li>The folder structure under <code>app/</code> determines the URL routes</li>
          <li>Each page must export a React component as the default export</li>
          <li>The layout wrapper provides the shared structure around this content</li>
        </ul>
      </div>
    </div>
  );
}

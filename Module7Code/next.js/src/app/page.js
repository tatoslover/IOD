import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <Image
          className="hero-logo"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Welcome to Next.js App Router</h1>
        <p className="hero-subtitle">
          Exploring modern React development with file-based routing and layouts
        </p>
      </div>



      <div className="navigation-section">
        <h2>Explore the Application</h2>
        <div className="nav-cards">
          <Link href="/about" className="nav-card">
            <h3>About Page</h3>
            <p>Learn how pages are created and how layouts work together</p>
            <span className="nav-arrow">→</span>
          </Link>

          <Link href="/dash" className="nav-card">
            <h3>Dashboard</h3>
            <p>See practical examples of Next.js features in action</p>
            <span className="nav-arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="getting-started">
        <h2>Next.js Framework Overview</h2>
        <p>
          Next.js is a rapidly-evolving, widely-used, feature-rich React framework
          that provides full-stack application potential. It includes built-in support
          for features such as routing, performance optimizations and error handling,
          to simplify some common React tasks.
        </p>
        <p style={{marginTop: '15px'}}>
          It also introduces several new concepts, and a new way of thinking involving
          server-side vs client-side task separation. These ultimately increase flexibility
          and support for complex applications, but can be overwhelming for beginners.
        </p>
        <ol style={{marginTop: '20px'}}>
          <li>
            Edit <code>src/app/page.js</code> to customize this home page
          </li>
          <li>
            Create new pages by adding folders with <code>page.jsx</code> files in the <code>app</code> directory
          </li>
          <li>
            Add shared layouts using <code>layout.jsx</code> files
          </li>
          <li>
            Use the NavBar to navigate between pages and see the routing in action
          </li>
        </ol>
      </div>
    </div>
  );
}

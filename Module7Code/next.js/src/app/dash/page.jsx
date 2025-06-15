export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <div className="dashboard-info">
        <h2>Next.js App Router Features:</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🗂️ File-based Routing</h3>
            <p>Create routes by adding files to the <code>app</code> directory. No need for route configuration!</p>
          </div>

          <div className="feature-card">
            <h3>🎯 Nested Layouts</h3>
            <p>Layouts wrap pages and maintain state across navigation. Perfect for headers, sidebars, and footers.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Server Components</h3>
            <p>Components render on the server by default for better performance. Use &apos;use client&apos; when needed.</p>
          </div>

          <div className="feature-card">
            <h3>🔗 Enhanced Navigation</h3>
            <p>The Link component provides client-side navigation with prefetching for optimal performance.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Data Fetching</h3>
            <p>Server components handle data fetching with extended fetch API supporting caching and revalidation.</p>
          </div>

          <div className="feature-card">
            <h3>🎛️ Dynamic Routes</h3>
            <p>File-system-based dynamic routing using square brackets like <code>[id]</code> for path segments.</p>
          </div>

          <div className="feature-card">
            <h3>🔀 Server & Client</h3>
            <p>Seamless integration between server and client components with search params and state management.</p>
          </div>

          <div className="feature-card">
            <h3>⚠️ Error Handling</h3>
            <p>Built-in Error Boundaries with <code>error.jsx</code> files for graceful error recovery.</p>
          </div>
        </div>

        <div className="routing-example">
          <h3>Next.js Summary</h3>
          <p>Next.js is a rapidly-evolving, widely-used, feature-rich React framework that provides full-stack application potential.</p>
          <p>It includes built-in support for features such as routing, performance optimizations and error handling, to simplify some common React tasks.</p>
          <p>It also introduces several new concepts, and a new way of thinking involving server-side vs client-side task separation.</p>
          <p>These ultimately increase flexibility and support for complex applications, but can be overwhelming for beginners.</p>
          <p>Although this course includes an introduction to the key concepts of Next.js, there is much more that cannot be covered in this limited timeframe.</p>
        </div>

        <div className="routing-example">
          <h3>Folder Structure = URL Structure</h3>
          <ul>
            <li><code>app/page.jsx</code> → <code>/</code> (Home)</li>
            <li><code>app/about/page.jsx</code> → <code>/about</code></li>
            <li><code>app/dash/page.jsx</code> → <code>/dash</code> (This page!)</li>
            <li><code>app/posts/page.jsx</code> → <code>/posts</code> (Data Fetching)</li>
            <li><code>app/posts/[id]/page.jsx</code> → <code>/posts/123</code> (Dynamic Routes)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

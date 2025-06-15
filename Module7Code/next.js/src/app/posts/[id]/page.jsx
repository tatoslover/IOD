import Link from "next/link"

// Since Next.js uses file-system-based routing, its support for dynamic routes
// (where the path segments are not fixed or known in advance) leverages file system naming conventions.
// A Dynamic Segment can be created by wrapping a folder name in square brackets (e.g. [id]).
// The bracketed folder name (id) is passed with the matched path segment (1 or 2 etc)
// as the params prop to layout and page components.

async function getPostData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/'
    + 'posts/' + id);
  if (!res.ok) {
    throw new Error('Failed to fetch post #'+id)
  }
  return res.json()
}

// Uses params prop to get value of [id] from path segment
// so for /posts/3/, params will be { id: 3 }
export default async function Post({params}) {
  const post = await getPostData(params.id);

  return (
    <>
      <div className="post">
        {post ?
          <>
            <h3>Post #{post.id}: {post.title}</h3>
            <p>{post.body}</p>
          </>
          : "Loading ..." }
      </div>
      <Link href="/posts">All Posts</Link>
    </>
  )
}

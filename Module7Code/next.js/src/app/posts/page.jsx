import Link from "next/link"
import PostsLimit from "@/components/PostsLimit"

// Data fetching in Next.js is usually the job of server components.
// This example is a Next.js equivalent to the previous PostsPage React Router example.
// Next.js extends the fetch function to simplify its return and support caching and revalidating.
// The recommended pattern is to create an async getData function which is called from the server component.

async function getPostsData(limit, page = 1) {
  const res = await fetch('https://jsonplaceholder.typicode.com/' +
    'posts?_limit='+limit+'&_page='+page);
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

// Server components can access read-only search parameters via the searchParams prop object.
// Once the user has chosen a new posts limit via the client-side component, the route is updated
// to include the new limit value as a search parameter, e.g. localhost:3000/posts?limit=10.
// Since this is a new route and a new server request, the updated markup is sent to the browser
// for rendering and the user sees the updated post list.
export default async function Posts({searchParams}) {
  const limit = searchParams.limit ? searchParams.limit : 5;
  const posts = await getPostsData(limit);
  const postList = posts.map(post => (
    <li key={post.id}><Link href={"/posts/" + post.id}>
      Post #{post.id}: {post.title}</Link></li>
  ))

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <ul>{postList}</ul>
      <PostsLimit defaultLimit={limit}/>
    </div>
  )
}

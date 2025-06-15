'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// Posts is currently a server component which fetches data.
// To implement the page limit drop-down from earlier, we will also need to introduce
// some client functionality to allow the user to choose the limit value and re-render the screen.
// We can access the search (or query) parameters from both client and server components.
// useSearchParams is a client-side hook allowing read-only access.
// We can update search params by changing the route via useRouter.

export default function PostsLimit({defaultLimit}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const limit = searchParams.has('limit') ?
    searchParams.get('limit') : defaultLimit;

  const handleChangeLimit = (e) => {
    router.replace(pathname + '?limit=' + e.target.value)
  }

  return (
    <label className="PostsLimit">Number of posts:
      <select onChange={handleChangeLimit} value={limit}>
        <option>5</option>
        <option>10</option>
        <option>20</option>
      </select>
    </label>
  )
}

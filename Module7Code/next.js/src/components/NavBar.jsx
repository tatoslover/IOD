'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavBar() {
  const path = usePathname();
  return (
    <nav className="NavBar">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Next.js Portfolio</h2>
        </div>
        <ul className="menu">
          <li><Link href="/" className={path === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/posts" className={path.startsWith('/posts') ? 'active' : ''}>Posts</Link></li>
          <li><Link href="/dash" className={path.startsWith('/dash') ? 'active' : ''}>Dashboard</Link></li>
          <li><Link href="/about" className={path.startsWith('/about') ? 'active' : ''}>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex nav">
      <div className="nav-logo"></div>
      <div className="nav-items">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/products" className="nav-item">All products</Link>
        <Link href="/categories" className="nav-item">Categories</Link>
        <Link href="/about" className="nav-item">About</Link>
      </div>
    </div>
  )
}

export default Nav;
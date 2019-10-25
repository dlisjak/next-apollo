import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex nav">
      <div className="nav-logo"></div>
      <div className="nav-items">
        <Link href="/"><a className="nav-item">Home</a></Link>
        <Link href="/products"><a className="nav-item">All products</a></Link>
        <Link href="/categories"><a className="nav-item">Categories</a></Link>
        <Link href="/about"><a className="nav-item">About</a></Link>
      </div>
    </div>
  )
}

export default Nav;
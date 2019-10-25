import Link from 'next/link';

import './nav.style.scss';

const Nav = () => {
  return (
    <div className="flex align-center justify-center nav">
      <div className="nav-items nav-items-primary">
        <Link href="/"><a className="nav-item">Home</a></Link>
        <Link href="/about"><a className="nav-item">About</a></Link>
      </div>
      <div className="flex nav-logo">
        <img src="/static/logo/logo_simple.svg" alt="Logo" className="nav-logo-image" />
      </div>
      <div className="nav-items nav-items-secondary">
        <Link href="/products"><a className="nav-item">All products</a></Link>
        <Link href="/categories"><a className="nav-item">Categories</a></Link>
      </div>
    </div>
  )
}

export default Nav;
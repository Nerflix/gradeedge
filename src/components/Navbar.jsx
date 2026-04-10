import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Academic', href: '#academic' },
  { label: 'Tech',     href: '#tech'     },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <img src="/Badge.jpeg" alt="GradeEdge" className="navbar__logo" />
          <span className="navbar__name">GradeEdge</span>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Get Started</a>

        <button
          className={`navbar__hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'open' : ''}`}>
        <div className="navbar__mobile-inner">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold" onClick={() => setOpen(false)}>Get Started</a>
        </div>
      </div>
    </nav>
  )
}
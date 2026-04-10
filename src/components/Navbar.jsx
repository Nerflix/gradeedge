import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { t, toggle, lang }     = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { key: 'nav_services', href: '#services' },
    { key: 'nav_academic', href: '#academic' },
    { key: 'nav_tech',     href: '#tech'     },
    { key: 'nav_skills',   href: '#skills'   },
    { key: 'nav_contact',  href: '#contact'  },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Brand */}
        <a href="#hero" className="navbar__brand">
          <img src="/Badge.jpeg" alt="GradeEdge" className="navbar__logo" />
          <span className="navbar__name">GradeEdge · 优分坊</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.key}>
              <a href={l.href} className="navbar__link">{t(l.key)}</a>
            </li>
          ))}
        </ul>

        {/* Desktop right side — toggle + cta */}
        <div className="navbar__actions">
          <button className="navbar__toggle" onClick={toggle}>
            {t('nav_toggle')}
          </button>
          <a href="#contact" className="navbar__cta">{t('nav_cta')}</a>
        </div>

        {/* Mobile right side — toggle + hamburger */}
        <div className="navbar__mobile-right">
          <button className="navbar__toggle" onClick={toggle}>
            {t('nav_toggle')}
          </button>
          <button
            className={`navbar__hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${open ? 'open' : ''}`}>
        <div className="navbar__mobile-inner">
          {links.map(l => (
            <a
              key={l.key}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setOpen(false)}
            >
              {t(l.key)}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold" onClick={() => setOpen(false)}>
            {t('nav_cta')}
          </a>
        </div>
      </div>
    </nav>
  )
}
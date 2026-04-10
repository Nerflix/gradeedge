import { useState, useEffect, useRef } from 'react'
import { techProjects, categoryColors } from '../data/techProjects'

const tagClassMap = {
  'Machine Learning':    'tag--blue',
  'Data Science':        'tag--green',
  'Applied Mathematics': 'tag--purple',
  'Applied Science':     'tag--amber',
  'Networking':          'tag--red',
  'Frontend':            '',
  'Blockchain':          'tag--orange',
}

export default function TechProjects() {
  const [filter, setFilter] = useState('All')
  const refs = useRef([])

  const categories = ['All', ...new Set(techProjects.map(p => p.category))]
  const filtered   = filter === 'All' ? techProjects : techProjects.filter(p => p.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <section id="tech" className="section section--alt">
      <div className="container">
        <div className="section-center">
          <p className="section-label">GitHub</p>
          <h2 className="section-title">Tech <span>Projects</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            From machine learning pipelines to blockchain contracts — built and deployed.
          </p>
          <a
            href="https://github.com/Nerflix"
            target="_blank"
            rel="noreferrer"
            className="tech-github-link"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="filters">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filtered.map((p, i) => (
            <a
              key={p.id}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              ref={el => refs.current[i] = el}
              className="tech-card fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="tech-card__top">
                <span className={`tag ${tagClassMap[p.category] || ''}`}>{p.category}</span>
                {p.featured && <span className="tech-card__featured">★ Featured</span>}
              </div>

              <h3 className="tech-card__title">{p.title}</h3>
              <p className="tech-card__desc">{p.description}</p>

              <div className="tags-row">
                {p.tags.slice(0, 4).map(t => <span key={t} className="pill">{t}</span>)}
                {p.tags.length > 4 && <span className="pill">+{p.tags.length - 4}</span>}
              </div>

              <div className="tech-card__footer">
                <span>github.com/Nerflix</span>
                <span className="tech-card__arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
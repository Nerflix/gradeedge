import { useEffect, useRef } from 'react'

const skillGroups = [
  { label: 'Languages',        skills: ['Python', 'JavaScript', 'PHP', 'Solidity', 'HTML/CSS', 'SCSS', 'GDScript'] },
  { label: 'Frameworks',       skills: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Git', 'VS Code', 'Jupyter'] },
  { label: 'Data Science & ML',skills: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'statsmodels', 'VAR Models'] },
  { label: 'Blockchain',       skills: ['Solidity', 'BNB Smart Chain', 'BEP-20', 'Smart Contracts', 'DeFi'] },
  { label: 'Networking',       skills: ['Distance Vector', 'Split Horizon', 'Bellman-Ford', 'TCP/IP', 'Routing Protocols'] },
  { label: 'Academic Writing', skills: ['APA', 'Harvard', 'Chicago', 'MLA', 'Essays', 'Dissertations', 'Case Studies'] },
]

const disciplines = [
  'Business Strategy', 'Finance & Accounting', 'Sports Science',
  'Cognitive Psychology', 'Neuroscience', 'Healthcare Statistics',
  'Digital Business', 'Pharmaceuticals', 'Media Studies',
  'Stochastic Processes', 'Materials Science', 'Computer Networks',
  'Econometrics', 'Machine Learning', 'Game Development',
]

export default function Skills() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-center">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & <span>Tools</span></h2>
          <div className="divider divider--center" />
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              ref={el => refs.current[i] = el}
              className="skill-card fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="skill-card__title">{group.label}</h3>
              <div className="tags-row">
                {group.skills.map(s => <span key={s} className="pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="disciplines">
          <p className="section-label">Academic Disciplines</p>
          <div className="disciplines__list">
            {disciplines.map(d => <span key={d} className="pill">{d}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
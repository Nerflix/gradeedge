import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

const skillGroups = [
  { titleKey: 'skill1_title', skills: ['Python', 'JavaScript', 'PHP', 'Solidity', 'HTML/CSS', 'SCSS', 'GDScript'] },
  { titleKey: 'skill2_title', skills: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Git', 'VS Code', 'Jupyter'] },
  { titleKey: 'skill3_title', skills: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'statsmodels', 'VAR Models'] },
  { titleKey: 'skill4_title', skills: ['Solidity', 'BNB Smart Chain', 'BEP-20', 'Smart Contracts', 'DeFi'] },
  { titleKey: 'skill5_title', skills: ['Distance Vector', 'Split Horizon', 'Bellman-Ford', 'TCP/IP', 'Routing Protocols'] },
  { titleKey: 'skill6_title', skills: ['APA', 'Harvard', 'Chicago', 'MLA', 'Essays', 'Dissertations', 'Case Studies'] },
]

const disciplines = [
  'Business Strategy', 'Finance & Accounting', 'Sports Science',
  'Cognitive Psychology', 'Neuroscience', 'Healthcare Statistics',
  'Digital Business', 'Pharmaceuticals', 'Media Studies',
  'Stochastic Processes', 'Materials Science', 'Computer Networks',
  'Econometrics', 'Machine Learning', 'Game Development',
]

export default function Skills() {
  const refs  = useRef([])
  const { t } = useLang()

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
          <p className="section-label">{t('skills_label')}</p>
          <h2 className="section-title">{t('skills_title')} <span>{t('skills_title_span')}</span></h2>
          <div className="divider divider--center" />
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.titleKey}
              ref={el => refs.current[i] = el}
              className="skill-card fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="skill-card__title">{t(group.titleKey)}</h3>
              <div className="tags-row">
                {group.skills.map(s => <span key={s} className="pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="disciplines">
          <p className="section-label">{t('skills_disciplines_label')}</p>
          <div className="disciplines__list">
            {disciplines.map(d => <span key={d} className="pill">{d}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
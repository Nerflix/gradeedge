import { useEffect, useRef } from 'react'

const services = [
  { icon: '✍️', title: 'Essays & Reports',         desc: 'Undergraduate to postgraduate level. Any discipline, any citation style.' },
  { icon: '📖', title: 'Theses & Dissertations',   desc: 'Full dissertation writing, chapter-by-chapter support, and structural editing.' },
  { icon: '🔬', title: 'Research & Case Studies',  desc: 'Literature reviews, data analysis, discussion and recommendations.' },
  { icon: '📝', title: 'Grammar & Citations',      desc: 'APA, Harvard, Chicago — precise citation formatting and grammar polish.' },
  { icon: '💻', title: 'Technical Writing',        desc: 'CS assignments, data science reports, algorithm documentation.' },
  { icon: '⚡', title: 'Urgent Turnaround',        desc: 'Deadline approaching? We deliver quality work fast.' },
]

export default function Services() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <div className="section-center" ref={el => refs.current[0] = el} style={{ transitionDelay: '0ms' }}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Academic <span>Excellence</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            Comprehensive academic support tailored to international students.
            100% Confidential · Fast Turnaround · Satisfaction Guaranteed.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              ref={el => refs.current[i + 1] = el}
              className="service-card fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="services-note">
          Deadline approaching? Contact us now — we deliver quality fast.
        </p>
      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

const services = [
  { icon: '✍️', titleKey: 'service1_title', descKey: 'service1_desc' },
  { icon: '📖', titleKey: 'service2_title', descKey: 'service2_desc' },
  { icon: '🔬', titleKey: 'service3_title', descKey: 'service3_desc' },
  { icon: '📝', titleKey: 'service4_title', descKey: 'service4_desc' },
  { icon: '💻', titleKey: 'service5_title', descKey: 'service5_desc' },
  { icon: '⚡', titleKey: 'service6_title', descKey: 'service6_desc' },
]

export default function Services() {
  const refs  = useRef([])
  const { t } = useLang()

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
        <div className="section-center">
          <p className="section-label">{t('services_label')}</p>
          <h2 className="section-title">{t('services_title')} <span>{t('services_title_span')}</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">{t('services_desc')}</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.titleKey}
              ref={el => refs.current[i] = el}
              className="service-card fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{t(s.titleKey)}</h3>
              <p className="service-card__desc">{t(s.descKey)}</p>
            </div>
          ))}
        </div>

        <p className="services-note">{t('services_note')}</p>
      </div>
    </section>
  )
}
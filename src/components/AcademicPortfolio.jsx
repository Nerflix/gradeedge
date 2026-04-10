import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { academicWork, fieldColors } from '../data/academicWork'

export default function AcademicPortfolio() {
  const [active, setActive] = useState(null)
  const [filter, setFilter] = useState('All')
  const refs                = useRef([])
  const { t, lang }         = useLang()

  const fields   = ['All', ...new Set(academicWork.map(w => w.field))]
  const filtered = filter === 'All' ? academicWork : academicWork.filter(w => w.field === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    refs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [filtered])

  const tagClass = field => {
    const map = { Science: 'tag--blue', Business: '', Finance: 'tag--green', Psychology: 'tag--purple', Healthcare: 'tag--red', Statistics: 'tag--amber' }
    return map[field] || ''
  }

  const fieldLabel = field => {
    if (lang === 'EN') return field
    const zh = { Science: '理科', Business: '商科', Finance: '金融', Psychology: '心理学', Healthcare: '医疗健康', Statistics: '统计学', All: '全部' }
    return zh[field] || field
  }

  return (
    <section id="academic" className="section">
      <div className="container">
        <div className="section-center">
          <p className="section-label">{t('academic_label')}</p>
          <h2 className="section-title">{t('academic_title')} <span>{t('academic_title_span')}</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">{t('academic_desc')}</p>
        </div>

        <div className="filters">
          {fields.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'All' ? t('academic_filter_all') : fieldLabel(f)}
            </button>
          ))}
        </div>

        <div className="academic-grid">
          {filtered.map((work, i) => (
            <div
              key={work.id}
              ref={el => refs.current[i] = el}
              className="academic-card fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setActive(work)}
            >
              <div className="academic-card__top">
                <span className={`tag ${tagClass(work.field)}`}>{fieldLabel(work.field)}</span>
                <span className="academic-card__words">{work.words}</span>
              </div>
              <h3 className="academic-card__title">{work.title}</h3>
              <div className="academic-card__meta">
                {work.subject}
                <div className="academic-card__level">{work.level}</div>
              </div>
              <div className="academic-card__hint">{t('academic_preview_hint')}</div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-overlay open" onClick={() => setActive(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)}>✕</button>

            <span className={`tag ${tagClass(active.field)}`}>{fieldLabel(active.field)}</span>
            <h3 className="modal__title">{active.title}</h3>
            <div className="modal__divider" />

            <div className="modal__meta">
              <span><span className="modal__meta-key">{t('academic_subject')}: </span>{active.subject}</span>
              <span><span className="modal__meta-key">{t('academic_level')}: </span>{active.level}</span>
              <span><span className="modal__meta-key">{t('academic_length')}: </span>{active.words}</span>
            </div>

            <p className="modal__body">{active.description}</p>

            <div className="tags-row">
              {active.skills.map(s => <span key={s} className="pill">{s}</span>)}
            </div>

            <a href={`/docs/${active.docFile}`} download className="modal__download">
              {t('academic_download')}
            </a>

            <p className="modal__note">{t('academic_note')}</p>
          </div>
        </div>
      )}
    </section>
  )
}
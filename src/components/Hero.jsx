import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const ref    = useRef(null)
  const { t }  = useLang()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" />
      <div className="hero__grid-bg" />

      <div ref={ref} className="hero__content fade-up">
        <div className="hero__badge-wrap">
          <img src="/Badge.jpeg" alt="GradeEdge Badge" className="hero__badge" />
        </div>

        <h1 className="hero__title">{t('hero_title')}</h1>
        <p className="hero__tagline">{t('hero_tagline')}</p>
        <p className="hero__sub">{t('hero_sub')}</p>

        <div className="hero__btns">
          <a href="#academic" className="btn btn--gold">{t('hero_btn1')}</a>
          <a href="#contact"  className="btn btn--purple">{t('hero_btn2')}</a>
        </div>

        <div className="hero__stats">
          <div>
            <div className="hero__stat-num">8+</div>
            <div className="hero__stat-label">{t('hero_stat1_label')}</div>
          </div>
          <div>
            <div className="hero__stat-num">10+</div>
            <div className="hero__stat-label">{t('hero_stat2_label')}</div>
          </div>
          <div>
            <div className="hero__stat-num">100%</div>
            <div className="hero__stat-label">{t('hero_stat3_label')}</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>{t('hero_scroll')}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
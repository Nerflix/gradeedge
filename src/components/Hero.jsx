import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

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

        <h1 className="hero__title">GradeEdge</h1>

        <p className="hero__tagline">Behind Every Great Student</p>

        <p className="hero__sub">
          Expert academic writing, research support, and technical development.
          Serving international students across RMIT and beyond.
        </p>

        <div className="hero__btns">
          <a href="#academic" className="btn btn--gold">View Academic Work</a>
          <a href="#contact"  className="btn btn--purple">Contact on WeChat</a>
        </div>

        <div className="hero__stats">
          <div>
            <div className="hero__stat-num">8+</div>
            <div className="hero__stat-label">Disciplines</div>
          </div>
          <div>
            <div className="hero__stat-num">10+</div>
            <div className="hero__stat-label">Tech Projects</div>
          </div>
          <div>
            <div className="hero__stat-num">100%</div>
            <div className="hero__stat-label">Confidential</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-center">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Start Your <span>Project</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            Reach out on WeChat for a fast response. We are here to help.
          </p>
        </div>

        <div ref={ref} className="contact-grid fade-up">

          {/* Left — info */}
          <div>
            <div className="info-block">
              <p className="info-block__label">WeChat ID</p>
              <p className="info-block__value">Mia_LXW</p>
            </div>

            <div className="info-block">
              <p className="info-block__label">Email</p>
              <p className="info-block__value info-block__value--sm">
                <a href="mailto:gradeedge.org@gmail.com">gradeedge.org@gmail.com</a>
              </p>
            </div>

            <div className="info-block">
              <p className="info-block__label">GitHub</p>
              <p className="info-block__value info-block__value--sm">
                <a href="https://github.com/Nerflix" target="_blank" rel="noreferrer">
                  github.com/Nerflix
                </a>
              </p>
            </div>

            <div className="guarantees">
              {[
                '100% Confidential',
                'Fast Turnaround',
                'Satisfaction Guaranteed',
                'All Academic Levels — Undergraduate to PhD',
              ].map(g => (
                <div key={g} className="guarantee-item">
                  <span className="guarantee-item__check">✔</span>
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — QR */}
          <div className="qr-wrap">
            <p className="qr-label">Scan to Add on WeChat</p>
            <img
              src="/QRCode.jpeg"
              alt="WeChat QR Code"
              className="qr-img"
              onClick={() => document.getElementById('qr-modal').classList.add('open')}
            />
            <p className="qr-tap-hint">Tap to enlarge for scanning</p>
            <p className="qr-sub">Scan the QR code to add me as friend</p>
            <p className="qr-sub2">WeChat ID: Mia_LXW</p>
            <img src="/WechatID.jpeg" alt="WeChat ID" className="wechat-id-img" />
          </div>
        </div>
      </div>

      {/* QR Modal */}
      <div
        id="qr-modal"
        className="qr-modal-overlay"
        onClick={() => document.getElementById('qr-modal').classList.remove('open')}
      >
        <div className="qr-modal-box" onClick={e => e.stopPropagation()}>
          <button
            className="qr-modal-close"
            onClick={() => document.getElementById('qr-modal').classList.remove('open')}
          >✕</button>
          <p className="qr-modal-label">Scan to add on WeChat</p>
          <img src="/QRCode.jpeg" alt="WeChat QR Code" className="qr-modal-img" />
          <p className="qr-modal-id">WeChat ID: Mia_LXW</p>
        </div>
      </div>

    </section>
  )
}
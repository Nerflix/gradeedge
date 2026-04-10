import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const ref   = useRef(null)
  const { t } = useLang()

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
          <p className="section-label">{t('contact_label')}</p>
          <h2 className="section-title">{t('contact_title')} <span>{t('contact_title_span')}</span></h2>
          <div className="divider divider--center" />
          <p className="section-desc">{t('contact_desc')}</p>
        </div>

        <div ref={ref} className="contact-grid fade-up">
          <div>
            <div className="info-block">
              <p className="info-block__label">{t('contact_wechat_label')}</p>
              <p className="info-block__value">Mia_LXW</p>
            </div>
            <div className="info-block">
              <p className="info-block__label">{t('contact_email_label')}</p>
              <p className="info-block__value info-block__value--sm">
                <a href="mailto:gradeedge.org@gmail.com">gradeedge.org@gmail.com</a>
              </p>
            </div>
            <div className="info-block">
              <p className="info-block__label">{t('contact_github_label')}</p>
              <p className="info-block__value info-block__value--sm">
                <a href="https://github.com/Nerflix" target="_blank" rel="noreferrer">github.com/Nerflix</a>
              </p>
            </div>
            <div className="guarantees">
              {['contact_guarantee1','contact_guarantee2','contact_guarantee3','contact_guarantee4'].map(key => (
                <div key={key} className="guarantee-item">
                  <span className="guarantee-item__check">✔</span>
                  <span>{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="qr-wrap">
            <p className="qr-label">{t('contact_qr_label')}</p>
            <img
              src="/QRCode.jpeg"
              alt="WeChat QR Code"
              className="qr-img"
              onClick={() => document.getElementById('qr-modal').classList.add('open')}
            />
            <p className="qr-tap-hint">{t('contact_qr_sub')}</p>
            <p className="qr-sub2">WeChat ID: Mia_LXW</p>
            <img src="/WechatID.jpeg" alt="WeChat ID" className="wechat-id-img" />
          </div>
        </div>
      </div>

      {/* QR Modal */}
      <div id="qr-modal" className="qr-modal-overlay" onClick={() => document.getElementById('qr-modal').classList.remove('open')}>
        <div className="qr-modal-box" onClick={e => e.stopPropagation()}>
          <button className="qr-modal-close" onClick={() => document.getElementById('qr-modal').classList.remove('open')}>✕</button>
          <p className="qr-modal-label">{t('contact_qr_label')}</p>
          <img src="/QRCode.jpeg" alt="WeChat QR Code" className="qr-modal-img" />
          <p className="qr-modal-id">WeChat ID: Mia_LXW</p>
        </div>
      </div>
    </section>
  )
}
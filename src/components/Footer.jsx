import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/Badge.jpeg" alt="GradeEdge" className="footer__logo" />
          <span className="footer__brand-name">GradeEdge · 优分坊</span>
        </div>
        <p className="footer__tagline">{t('footer_tagline')}</p>
        <div className="footer__links">
          <a href="mailto:gradeedge.org@gmail.com">{t('footer_email')}</a>
          <a href="https://github.com/Nerflix" target="_blank" rel="noreferrer">GitHub</a>
          <span>WeChat: Mia_LXW</span>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} GradeEdge · 优分坊 · {t('footer_copy')}
      </p>
    </footer>
  )
}
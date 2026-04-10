export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/Badge.jpeg" alt="GradeEdge" className="footer__logo" />
          <span className="footer__brand-name">GradeEdge</span>
        </div>

        <p className="footer__tagline">
          Behind Every Great Student
        </p>

        <div className="footer__links">
          <a href="mailto:gradeedge.org@gmail.com">Email</a>
          <a href="https://github.com/Nerflix" target="_blank" rel="noreferrer">GitHub</a>
          <span>WeChat: Mia_LXW</span>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} GradeEdge — All rights reserved
      </p>
    </footer>
  )
}
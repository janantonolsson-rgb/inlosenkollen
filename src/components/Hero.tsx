import { useLanguage } from '../context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  return (
    <header className="hero">
      <div className="container">
        <span className="eyebrow">● {t.hero.eyebrow}</span>
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.subtitle}</p>
        <div className="cta-row">
          <a href="#calculator" className="btn btn-primary">{t.hero.ctaPrimary}</a>
          <a href="#how" className="btn btn-ghost">{t.hero.ctaSecondary}</a>
        </div>
        <div className="trustbar">
          <div className="item"><span className="dot" /> {t.hero.trust1}</div>
          <div className="item"><span className="dot" /> {t.hero.trust2}</div>
          <div className="item"><span className="dot" /> {t.hero.trust3}</div>
        </div>
        <p className="footnote">{t.hero.footnote}</p>
      </div>
    </header>
  )
}

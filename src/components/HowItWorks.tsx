import { useLanguage } from '../context/LanguageContext'

export function HowItWorks() {
  const { t } = useLanguage()
  const steps = [
    { title: t.howItWorks.step1Title, body: t.howItWorks.step1Body },
    { title: t.howItWorks.step2Title, body: t.howItWorks.step2Body },
    { title: t.howItWorks.step3Title, body: t.howItWorks.step3Body },
  ]
  return (
    <section id="how" className="container">
      <div className="center" style={{ marginBottom: 36 }}>
        <div className="section-eyebrow">{t.howItWorks.eyebrow}</div>
        <h2>{t.howItWorks.title}</h2>
        <p style={{ maxWidth: '70ch', margin: '0 auto' }}>{t.howItWorks.intro}</p>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.title}>
            <h3>{s.title}</h3>
            <p style={{ marginBottom: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
      <div className="center" style={{ marginTop: 28 }}>
        <a href="#calculator" className="btn btn-primary">{t.howItWorks.ctaButton}</a>
      </div>
    </section>
  )
}

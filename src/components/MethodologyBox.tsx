import { useLanguage } from '../context/LanguageContext'

export function MethodologyBox() {
  const { t } = useLanguage()
  return (
    <div className="method">
      <h4>{t.methodology.title}</h4>
      <p style={{ marginBottom: 8 }}>{t.methodology.intro}</p>
      <ul>
        <li>{t.methodology.point1}</li>
        <li>{t.methodology.point2}</li>
        <li>{t.methodology.point3}</li>
        <li>{t.methodology.point4}</li>
        <li>{t.methodology.point5}</li>
      </ul>
      <p className="muted" style={{ fontSize: '0.85rem', marginTop: 10, marginBottom: 0 }}>
        {t.methodology.rangeNote}
      </p>
    </div>
  )
}

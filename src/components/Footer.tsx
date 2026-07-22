import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ maxWidth: '50ch' }}>
          <strong style={{ color: '#fff' }}>Inlösenkollen</strong>
          <p style={{ margin: '6px 0 0', fontSize: '0.85rem' }}>{t.footer.description}</p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <p style={{ margin: 0 }}>{t.footer.rights}</p>
          <p style={{ margin: '4px 0 0' }}>{t.footer.developedBy}</p>
        </div>
      </div>
    </footer>
  )
}

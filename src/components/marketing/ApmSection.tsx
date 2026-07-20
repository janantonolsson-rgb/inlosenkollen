import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'

export function ApmSection() {
  const { t } = useLanguage()

  const methods = [
    { name: 'Swish', description: t.apm.swish },
    { name: 'Klarna', description: t.apm.klarna },
    { name: 'MobilePay', description: t.apm.mobilePay },
    { name: 'Trustly / Vipps / BankAxept', description: t.apm.localMethods },
  ]

  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow={t.apm.eyebrow}
        title={t.apm.title}
        description={t.apm.description}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <Card key={method.name} padding="sm" variant="elevated">
            <h3 className="text-sm font-semibold text-primary">{method.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{method.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

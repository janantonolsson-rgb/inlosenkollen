import { useLanguage } from '../../i18n/LanguageContext'
import { acquirerCatalog } from '../../data/acquirerCatalog'
import type { Acquirer } from '../../types/calculator'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

interface AcquirerCatalogPickerProps {
  acquirers: Acquirer[]
  onImport: (catalogId: string) => void
}

export function AcquirerCatalogPicker({ acquirers, onImport }: AcquirerCatalogPickerProps) {
  const { t } = useLanguage()
  const importedCatalogIds = new Set(
    acquirers.map((a) => a.catalogId).filter(Boolean) as string[],
  )

  return (
    <div>
      <p className="text-sm text-muted">{t.catalog.introText}</p>
      <p
        className="mt-3 rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-muted"
      >
        {t.catalog.membershipNote}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {acquirerCatalog.map((entry) => {
          const isImported = importedCatalogIds.has(entry.id)

          return (
            <Card key={entry.id} padding="sm" variant="elevated" className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-primary">{entry.name}</h3>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    <Badge variant={entry.providerType === 'inlösare' ? 'accent' : 'muted'}>
                      {entry.providerType === 'inlösare' ? t.catalog.acquirerTypeLabel : t.catalog.pspTypeLabel}
                    </Badge>
                    <Badge variant="success">{entry.highlight}</Badge>
                  </div>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{entry.description}</p>
              {entry.partnershipNote && (
                <p className="mt-2 rounded-md bg-accent-muted/30 px-2.5 py-2 text-xs leading-relaxed text-primary">
                  {entry.partnershipNote}
                </p>
              )}
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="text-xs text-muted-light">{t.catalog.sourceLabel} {entry.source}</p>
                {entry.url && entry.url !== entry.applyUrl && (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-accent hover:underline"
                  >
                    {t.catalog.readMoreLabel} ↗
                  </a>
                )}
              </div>
              <Button
                type="button"
                variant={isImported ? 'secondary' : 'primary'}
                size="sm"
                className="mt-4 w-full"
                onClick={() => onImport(entry.id)}
              >
                {isImported ? t.catalog.removeButton : t.catalog.addButton}
              </Button>
              {entry.applyUrl && (
                <a
                  href={entry.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center text-xs font-medium text-accent hover:underline"
                >
                  {entry.applyLabel ?? t.catalog.applyTemplate.replace('{name}', entry.name)} ↗
                </a>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}

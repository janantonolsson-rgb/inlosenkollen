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
  const importedCatalogIds = new Set(
    acquirers.map((a) => a.catalogId).filter(Boolean) as string[],
  )

  return (
    <div>
      <p className="text-sm text-muted">
        Välj etablerade kortinlösare och PSP:er med publicerade eller uppskattade avgifter
        från vår marknadsresearch. Priserna är illustrationer — inte garanti för ert avtal.
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
                      {entry.providerType === 'inlösare' ? 'Inlösare' : 'PSP'}
                    </Badge>
                    <Badge variant="success">{entry.highlight}</Badge>
                  </div>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{entry.description}</p>
              <p className="mt-2 text-xs text-muted-light">Källa: {entry.source}</p>
              <Button
                type="button"
                variant={isImported ? 'secondary' : 'primary'}
                size="sm"
                className="mt-4 w-full"
                disabled={isImported}
                onClick={() => onImport(entry.id)}
              >
                {isImported ? 'Importerad' : 'Importera'}
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

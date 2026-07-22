import { useLanguage } from '../context/LanguageContext'
import { VOLUME_PRESETS, getVolumeBand, createAcquirerFromCatalog } from '../data/defaults'
import { acquirerCatalog } from '../data/acquirerCatalog'
import { getAnnualTransactions } from '../lib/calculations'
import { formatNumber } from '../lib/formatters'
import type { CalculatorState, PricingCategory, TransactionMix } from '../types/calculator'
import { PRICING_CATEGORIES } from '../types/calculator'
import { categoryLabel } from '../lib/calculations'

interface Props {
  state: CalculatorState
  onChange: (patch: Partial<CalculatorState>) => void
}

const MIX_FIELDS: { key: keyof TransactionMix; cat: PricingCategory | 'group' }[] = [
  { key: 'visaDebit', cat: 'swedishDebit' },
  { key: 'mastercardDebit', cat: 'swedishDebit' },
  { key: 'swedishCredit', cat: 'swedishCredit' },
  { key: 'corporate', cat: 'corporate' },
  { key: 'euEes', cat: 'euEes' },
  { key: 'international', cat: 'international' },
  { key: 'amex', cat: 'amex' },
]

export function Calculator({ state, onChange }: Props) {
  const { t } = useLanguage()
  const { volume, mix, current, acquirers, routableShare, implementationCostPerAcquirer } = state

  const txns = getAnnualTransactions(volume)
  const band = getVolumeBand(volume.annualVolume)
  const mixTotal = MIX_FIELDS.reduce((s, f) => s + mix[f.key], 0)

  function setVolume(field: 'annualVolume' | 'averageOrderValue', value: number) {
    onChange({ volume: { ...volume, [field]: value } })
  }
  function setMix(key: keyof TransactionMix, value: number) {
    onChange({ mix: { ...mix, [key]: value } })
  }
  function setCurrentMode(mode: 'blended' | 'detailed') {
    onChange({ current: { ...current, mode } })
  }
  function setBlended(field: 'percent' | 'fixed', value: number) {
    const base = current.blended ?? { percent: 0, fixed: 0 }
    onChange({ current: { ...current, mode: 'blended', blended: { ...base, [field]: value } } })
  }
  function setDetailed(cat: PricingCategory, field: 'percent' | 'fixed', value: number) {
    const detailed = { ...current.detailed }
    detailed[cat] = { ...detailed[cat]!, [field]: value }
    onChange({ current: { ...current, mode: 'detailed', detailed } })
  }
  function toggleAcquirer(catalogId: string) {
    const exists = acquirers.find((a) => a.catalogId === catalogId)
    if (exists) {
      onChange({ acquirers: acquirers.filter((a) => a.catalogId !== catalogId) })
    } else {
      const entry = acquirerCatalog.find((a) => a.id === catalogId)!
      onChange({ acquirers: [...acquirers, createAcquirerFromCatalog(entry)] })
    }
  }

  return (
    <section id="calculator" className="container">
      <div className="center" style={{ marginBottom: 28 }}>
        <div className="section-eyebrow">{t.nav.calculator}</div>
        <h2>{t.calculator.sectionTitle}</h2>
        <p style={{ maxWidth: '70ch', margin: '0 auto' }}>{t.calculator.sectionDescription}</p>
      </div>

      <div className="card card-pad calc-grid">
        {/* STEP 1 */}
        <div>
          <h3 style={{ marginBottom: 4 }}>{t.calculator.step1Title}</h3>
          <p className="muted" style={{ marginBottom: 16 }}>{t.calculator.step1Description}</p>
          <div className="field" style={{ marginBottom: 12 }}>
            <label>{t.calculator.annualVolume}</label>
            <div className="preset-row" style={{ marginBottom: 8 }}>
              {VOLUME_PRESETS.map((p) => (
                <button
                  key={p.value}
                  className={`preset-chip ${volume.annualVolume === p.value ? 'active' : ''}`}
                  onClick={() => setVolume('annualVolume', p.value)}
                  type="button"
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="input-suffix">
              <input
                className="input"
                type="text"
                value={formatNumber(volume.annualVolume)}
                onChange={(e) => setVolume('annualVolume', parseInput(e.target.value))}
              />
              <span className="suffix">kr</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="field">
              <label>{t.calculator.averageOrderValue}</label>
              <div className="input-suffix">
                <input
                  className="input"
                  type="text"
                  value={formatNumber(volume.averageOrderValue)}
                  onChange={(e) => setVolume('averageOrderValue', parseInput(e.target.value))}
                />
                <span className="suffix">kr</span>
              </div>
              <span className="hint">{t.calculator.aovHint}</span>
            </div>
            <div className="field">
              <label>{t.calculator.annualTransactionsComputed}</label>
              <input className="input" value={formatNumber(Math.round(txns))} disabled />
              <span className="hint">{t.calculator.volumeBandLabel}: <strong>{band.label}</strong></span>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* STEP 2 */}
        <div>
          <h3 style={{ marginBottom: 4 }}>{t.calculator.step2Title}</h3>
          <p className="muted" style={{ marginBottom: 16 }}>{t.calculator.step2Description}</p>
          {MIX_FIELDS.map((f) => (
            <div className="mix-row" key={f.key}>
              <span className="label">{mixLabel(f.key, t)}</span>
              <input
                type="range" min={0} max={100} step={1}
                value={mix[f.key]}
                onChange={(e) => setMix(f.key, Number(e.target.value))}
              />
              <span className="pct">{mix[f.key]}%</span>
            </div>
          ))}
          <div style={{ textAlign: 'right', fontSize: '0.85rem', marginTop: 4 }}>
            {t.calculator.totalShareLabel}: <strong style={{ color: Math.abs(mixTotal - 100) < 1 ? 'var(--green)' : 'var(--red)' }}>{mixTotal}%</strong>
          </div>
        </div>

        <div className="divider" />

        {/* STEP 3 */}
        <div>
          <h3 style={{ marginBottom: 4 }}>{t.calculator.step3Title}</h3>
          <p className="muted" style={{ marginBottom: 16 }}>{t.calculator.step3Description}</p>

          {/* Current mode */}
          <div style={{ fontWeight: 700, marginBottom: 8 }}>{t.calculator.currentModeTitle}</div>
          <div className="mode-tabs">
            <button className={`mode-tab ${current.mode === 'blended' ? 'active' : ''}`} onClick={() => setCurrentMode('blended')} type="button">
              <div className="t-title">{t.calculator.currentModeBlended}</div>
              <div className="t-desc">{t.calculator.currentModeBlendedDesc}</div>
            </button>
            <button className={`mode-tab ${current.mode === 'detailed' ? 'active' : ''}`} onClick={() => setCurrentMode('detailed')} type="button">
              <div className="t-title">{t.calculator.currentModeDetailed}</div>
              <div className="t-desc">{t.calculator.currentModeDetailedDesc}</div>
            </button>
          </div>

          {current.mode === 'blended' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field">
                <label>{t.calculator.currentPercentLabel}</label>
                <div className="input-suffix">
                  <input className="input" type="text" value={String(current.blended?.percent ?? '')}
                    onChange={(e) => setBlended('percent', parseInput(e.target.value))} />
                  <span className="suffix">%</span>
                </div>
                <span className="hint">{t.calculator.currentPercentHint}</span>
              </div>
              <div className="field">
                <label>{t.calculator.currentFixedLabel}</label>
                <div className="input-suffix">
                  <input className="input" type="text" value={String(current.blended?.fixed ?? '')}
                    onChange={(e) => setBlended('fixed', parseInput(e.target.value))} />
                  <span className="suffix">kr</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="note blue" style={{ marginBottom: 10 }}>{t.calculator.currentTableHint}</div>
              <div className="table-wrap">
                <table className="data">
                  <thead>
                    <tr>
                      <th>{t.calculator.cardTypeColumn}</th>
                      <th className="num">{t.calculator.percentColumn}</th>
                      <th className="num">{t.calculator.fixedFeeColumn}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_CATEGORIES.map((cat) => (
                      <tr key={cat}>
                        <td>{categoryLabel(cat)}</td>
                        <td className="num">
                          <div className="input-suffix" style={{ maxWidth: 130, marginLeft: 'auto' }}>
                            <input className="input" type="text" style={{ textAlign: 'right' }}
                              value={String(current.detailed?.[cat]?.percent ?? '')}
                              onChange={(e) => setDetailed(cat, 'percent', parseInput(e.target.value))} />
                            <span className="suffix">%</span>
                          </div>
                        </td>
                        <td className="num">
                          <div className="input-suffix" style={{ maxWidth: 110, marginLeft: 'auto' }}>
                            <input className="input" type="text" style={{ textAlign: 'right' }}
                              value={String(current.detailed?.[cat]?.fixed ?? '')}
                              onChange={(e) => setDetailed(cat, 'fixed', parseInput(e.target.value))} />
                            <span className="suffix">kr</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Acquirer multi-select */}
          <div style={{ fontWeight: 700, margin: '20px 0 8px' }}>{t.calculator.acquirersTitle}</div>
          <p className="muted" style={{ fontSize: '0.85rem', marginBottom: 10 }}>{t.calculator.acquirersDescription}</p>
          <div className="catalog-grid">
            {acquirerCatalog.map((a) => {
              const selected = !!acquirers.find((x) => x.catalogId === a.id)
              return (
                <label key={a.id} className={`cat-card ${selected ? 'partner' : ''}`} style={{ cursor: 'pointer', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <input type="checkbox" checked={selected} onChange={() => toggleAcquirer(a.id)} />
                  <div>
                    <div className="name" style={{ fontSize: '0.95rem' }}>{a.name}</div>
                    <div className="src">{a.highlight}</div>
                  </div>
                </label>
              )
            })}
          </div>

          {/* Advanced */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 20 }}>
            <div className="field">
              <label>{t.calculator.routableShareLabel}: {Math.round(routableShare * 100)}%</label>
              <input type="range" min={0.6} max={1} step={0.05} value={routableShare}
                onChange={(e) => onChange({ routableShare: Number(e.target.value) })} />
              <span className="hint">{t.calculator.routableShareHint}</span>
            </div>
            <div className="field">
              <label>{t.calculator.implCostLabel}</label>
              <div className="input-suffix">
                <input className="input" type="text" value={formatNumber(implementationCostPerAcquirer)}
                  onChange={(e) => onChange({ implementationCostPerAcquirer: parseInput(e.target.value) })} />
                <span className="suffix">kr</span>
              </div>
              <span className="hint">{t.calculator.implCostHint}</span>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={() => onChange({ showResults: true })} type="button" style={{ marginTop: 8 }}>
          {t.calculator.ctaCalculate}
        </button>
      </div>
    </section>
  )
}

function parseInput(s: string): number {
  const cleaned = s.replace(/\s/g, '').replace(/kr/gi, '').replace(/[€%]/g, '').replace(',', '.').trim()
  const n = parseFloat(cleaned)
  return Number.isFinite(n) ? n : 0
}

function mixLabel(key: keyof TransactionMix, t: ReturnType<typeof useLanguage>['t']): string {
  const labels: Record<keyof TransactionMix, string> = {
    visaDebit: 'Visa Debit',
    mastercardDebit: 'Mastercard Debit',
    swedishCredit: t.calculator.mixGroupSwedish + ' — kredit',
    corporate: 'Företagskort',
    euEes: 'EU/EES',
    international: t.calculator.mixGroupInternational,
    amex: 'Amex',
  }
  return labels[key]
}

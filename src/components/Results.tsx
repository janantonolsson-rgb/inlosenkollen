import { useLanguage } from '../context/LanguageContext'
import { MethodologyBox } from './MethodologyBox'
import type { Results as ResultsType } from '../types/calculator'

interface Props {
  results: ResultsType
}

export function Results({ results }: Props) {
  const { t, formatMoney } = useLanguage()
  const r = results

  const noAcquirers = r.acquirersUsed === 0 && r.split.routing === 0 && r.split.procurement === 0

  const splitTotal = Math.max(1, r.split.procurement + r.split.routing)
  const seg = (val: number, color: string) => ({
    w: Math.max(0, (val / splitTotal) * 100),
    color,
  })
  const segments = [
    seg(r.split.procurement, 'var(--green)'),
    seg(r.split.routing, 'var(--blue)'),
  ]

  // Flöde: volym per rekommenderad inlösare
  const byAcq = new Map<string, { name: string; volume: number }>()
  for (const c of r.categoryResults) {
    const key = c.routedAcquirerId
    const prev = byAcq.get(key) ?? { name: c.routedAcquirerName, volume: 0 }
    prev.volume += c.volume
    byAcq.set(key, prev)
  }
  const flows = [...byAcq.values()].sort((a, b) => b.volume - a.volume)
  const totalVol = flows.reduce((s, f) => s + f.volume, 0) || 1
  const flowColors = ['#0f9d6b', '#2f6fed', '#b26a00', '#6b7a90', '#1d3a63', '#c0392b']

  return (
    <section className="container" id="results" style={{ paddingTop: 24 }}>
      <div className="card">
        <div className="result-hero">
          <div className="section-eyebrow">{t.results.eyebrow}</div>
          <h2 style={{ marginBottom: 4 }}>{t.results.title}</h2>
          <p className="muted" style={{ marginBottom: 16 }}>{t.results.description}</p>

          {noAcquirers ? (
            <div className="note" style={{ maxWidth: 480, margin: '0 auto' }}>
              <strong>{t.results.noAcquirersTitle}</strong> — {t.results.noAcquirersBody}
            </div>
          ) : (
            <>
              <div className="big">{formatMoney(r.split.net)}</div>
              <div className="range">
                {t.results.savingsRangeLabel}: {formatMoney(r.range.low)} – {formatMoney(r.range.high)}
              </div>
              <div className="range" style={{ marginTop: 4 }}>
                {t.results.savingsPointLabel}: <strong>{formatMoney(r.split.net)}</strong> ({r.percentSavings.toFixed(1).replace('.', ',')} % {t.results.percentLabel})
              </div>
              <div style={{ marginTop: 12, display: 'inline-flex' }}>
                <span className={`badge ${r.precision === 'high' ? 'badge-confirmed' : 'badge-estimate'}`}>
                  {r.precision === 'high' ? t.results.precisionHigh : t.results.precisionLow}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {!noAcquirers && (
        <>
          {/* Metrics */}
          <div className="metric-grid" style={{ marginTop: 16 }}>
            <div className="metric">
              <div className="label">{t.results.metricCurrent}</div>
              <div className="value ink">{formatMoney(r.currentAnnualCost)}</div>
            </div>
            <div className="metric">
              <div className="label">{t.results.metricBestSingle}</div>
              <div className="value blue">{formatMoney(r.bestSingleAnnualCost)}</div>
            </div>
            <div className="metric">
              <div className="label">{t.results.metricRouted}</div>
              <div className="value green">{formatMoney(r.effectiveRoutedCost)}</div>
            </div>
          </div>

          {/* Split */}
          <div className="card card-pad" style={{ marginTop: 16 }}>
            <h3 style={{ marginBottom: 12 }}>{t.results.splitTitle}</h3>
            {r.precision === 'low' && (
              <div className="note" style={{ marginBottom: 12 }}>{t.results.precisionLow}</div>
            )}
            <div className="split-bar">
              {segments.map((s, i) => s.w > 0 ? (
                <div className="seg" key={i} style={{ width: `${s.w}%`, background: s.color }} />
              ) : null)}
            </div>
            <div className="legend">
              <div className="li"><span className="sw" style={{ background: 'var(--green)' }} /> {t.results.splitProcurement}: <strong>{formatMoney(r.split.procurement)}</strong></div>
              <div className="li"><span className="sw" style={{ background: 'var(--blue)' }} /> {t.results.splitRouting}: <strong>{formatMoney(r.split.routing)}</strong></div>
              <div className="li"><span className="sw" style={{ background: 'var(--red)' }} /> {t.results.splitImplementation}: <strong>−{formatMoney(r.split.implementation)}</strong></div>
              <div className="li"><span className="sw" style={{ background: 'var(--ink)' }} /> {t.results.splitNet}: <strong>{formatMoney(r.split.net)}</strong></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 16 }}>
              <div className="metric"><div className="label">{t.results.splitProcurement}</div><div className="value green">{formatMoney(r.split.procurement)}</div><div className="hint" style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>{t.results.splitProcurementDesc}</div></div>
              <div className="metric"><div className="label">{t.results.splitRouting}</div><div className="value blue">{formatMoney(r.split.routing)}</div><div className="hint" style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>{t.results.splitRoutingDesc}</div></div>
              <div className="metric"><div className="label">{t.results.splitImplementation}</div><div className="value ink">−{formatMoney(r.split.implementation)}</div><div className="hint" style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>{t.results.splitImplementationDesc}</div></div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
              <div className="li" style={{ fontWeight: 700 }}>{t.results.savingsOverTime}: {t.results.year1} <strong>{formatMoney(r.split.net)}</strong> · {t.results.year3} <strong>{formatMoney(r.split.net * 3)}</strong></div>
            </div>
          </div>

          {/* Flows */}
          <div className="card card-pad" style={{ marginTop: 16 }}>
            <h3 style={{ marginBottom: 4 }}>{t.results.flowsTitle}</h3>
            <p className="muted" style={{ marginBottom: 16, fontSize: '0.85rem' }}>{t.results.flowsSubtitle}</p>
            <div className="flows">
              {flows.map((f, i) => (
                <div className="flow" key={i}>
                  <div className="cat">{f.name}</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${(f.volume / totalVol) * 100}%`, background: flowColors[i % flowColors.length] }} />
                  </div>
                  <div className="acq">{((f.volume / totalVol) * 100).toFixed(0)}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Routing table */}
          <div className="card card-pad" style={{ marginTop: 16 }}>
            <h3 style={{ marginBottom: 4 }}>{t.results.routingTableTitle}</h3>
            <p className="muted" style={{ marginBottom: 16, fontSize: '0.85rem' }}>{t.results.routingTableSubtitle}</p>
            <div className="table-wrap">
              <table className="data">
                <thead>
                  <tr>
                    <th>{t.results.colCategory}</th>
                    <th className="num">{t.results.colVolume}</th>
                    <th className="num">{t.results.colCurrent}</th>
                    <th>{t.results.colAcquirer}</th>
                    <th className="num">{t.results.colNewCost}</th>
                    <th className="num">{t.results.colSavings}</th>
                  </tr>
                </thead>
                <tbody>
                  {r.categoryResults.map((c) => (
                    <tr key={c.category}>
                      <td>{c.label}</td>
                      <td className="num">{formatMoney(c.volume)}</td>
                      <td className="num">{formatMoney(c.currentCost)}</td>
                      <td>
                        {c.routedAcquirerName}
                        {c.keptCurrent && <span className="muted" style={{ fontSize: '0.75rem' }}> ({t.results.keptCurrent})</span>}
                      </td>
                      <td className="num">{formatMoney(c.routedCost)}</td>
                      <td className="num pos">{c.savings > 0 ? formatMoney(c.savings) : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <MethodologyBox />
          </div>
          <p className="disclaimer" style={{ marginTop: 12 }}>{t.disclaimer}</p>
        </>
      )}
    </section>
  )
}

interface CurrencyLike {
  code: string
  locale: string
}

const moneyFormatterCache = new Map<string, Intl.NumberFormat>()

function getMoneyFormatter(currency: CurrencyLike, decimals: boolean): Intl.NumberFormat {
  const key = `${currency.code}-${currency.locale}-${decimals ? 'dec' : 'int'}`
  let formatter = moneyFormatterCache.get(key)
  if (!formatter) {
    formatter = new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: decimals ? 2 : 0,
      maximumFractionDigits: decimals ? 2 : 0,
    })
    moneyFormatterCache.set(key, formatter)
  }
  return formatter
}

export function formatMoney(value: number, currency: CurrencyLike, decimals = false): string {
  if (!Number.isFinite(value)) return '–'
  return getMoneyFormatter(currency, decimals).format(value)
}

const percentFormatter = new Intl.NumberFormat('sv-SE', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

export function formatPercent(value: number): string {
  if (!Number.isFinite(value)) return '–'
  return percentFormatter.format(value / 100) // value passer som 0.65 => "0,7 %"? se nedan
}

/** formatPercent tar procentsats i "procentenheter" (t.ex. 0.65 => "0,65 %"). */
export function formatPercentRate(rate: number): string {
  if (!Number.isFinite(rate)) return '–'
  return new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rate) + ' %'
}

export function formatNumber(value: number, decimals = 0): string {
  if (!Number.isFinite(value)) return '–'
  return new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export function parseSwedishNumber(input: string): number {
  const cleaned = input
    .replace(/\s/g, '')
    .replace(/kr/gi, '')
    .replace(/[€%]/g, '')
    .replace(',', '.')
    .trim()
  const parsed = parseFloat(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

export function formatInputNumber(value: number): string {
  if (!Number.isFinite(value)) return ''
  return new Intl.NumberFormat('sv-SE', { maximumFractionDigits: 2 }).format(value)
}

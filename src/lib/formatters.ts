const sekFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

const sekDecimalFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const percentFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
})

const numberFormatter = new Intl.NumberFormat('sv-SE', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatSEK(value: number, decimals = false): string {
  if (decimals) {
    return sekDecimalFormatter.format(value)
  }
  return sekFormatter.format(value)
}

export function formatPercent(value: number): string {
  return percentFormatter.format(value / 100)
}

export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export function parseSwedishNumber(input: string): number {
  const cleaned = input
    .replace(/\s/g, '')
    .replace(/kr/gi, '')
    .replace(/%/g, '')
    .replace(',', '.')
    .trim()

  const parsed = parseFloat(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

export function formatInputNumber(value: number): string {
  if (!Number.isFinite(value)) return ''
  return numberFormatter.format(value)
}

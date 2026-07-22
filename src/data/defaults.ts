import type {
  Acquirer,
  AcquirerPricing,
  CalculatorState,
  CurrentAgreement,
  PricingCategory,
  TransactionMix,
  VolumeBand,
  VolumeData,
} from '../types/calculator'
import { PRICING_CATEGORIES } from '../types/calculator'
import { acquirerCatalog, catalogPricing, type CatalogAcquirer } from './acquirerCatalog'
import { INTERCHANGE, SCHEME_FEE, impliedMarkup } from './interchange'

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `id-${Math.random().toString(36).slice(2)}-${Date.now()}`
}

/** Volymband — markup skalas med multiplikator (lägre för stora volymer). */
export const VOLUME_BANDS: VolumeBand[] = [
  { label: '< 50 Mkr', min: 0, max: 50_000_000, markupMultiplier: 1.3 },
  { label: '50 – 250 Mkr', min: 50_000_000, max: 250_000_000, markupMultiplier: 1.1 },
  { label: '250 Mkr – 1 Mdkr', min: 250_000_000, max: 1_000_000_000, markupMultiplier: 1.0 },
  { label: '1 – 5 Mdkr', min: 1_000_000_000, max: 5_000_000_000, markupMultiplier: 0.85 },
  { label: '5 Mdkr +', min: 5_000_000_000, max: Infinity, markupMultiplier: 0.7 },
]

export function getVolumeBand(volume: number): VolumeBand {
  return (
    VOLUME_BANDS.find((b) => volume >= b.min && volume < b.max) ??
    VOLUME_BANDS[VOLUME_BANDS.length - 1]
  )
}

export const defaultVolume: VolumeData = {
  annualVolume: 250_000_000,
  averageOrderValue: 650,
}

export const defaultMix: TransactionMix = {
  visaDebit: 38,
  mastercardDebit: 32,
  swedishCredit: 12,
  corporate: 6,
  euEes: 6,
  international: 4,
  amex: 2,
}

/**
 * Realistisk "typisk incumbent" per-segment (all-i-pris) för demo.
 * Detta är ett medelstort svenskt företag med ett standardavtal — INTE ett
 * orimligt blended snitt applicerat på dyra kort. Ger en ärlig, trovärdig
 * utgångspunkt där besparingen sitter i markup och routing, inte i en
 * orimlig blended jämförelse.
 */
const typicalIncumbentAllIn: Record<PricingCategory, { percent: number; fixed: number }> = {
  swedishDebit: { percent: 0.55, fixed: 0.2 },
  swedishCredit: { percent: 0.75, fixed: 0.2 },
  euEes: { percent: 0.95, fixed: 0.2 },
  corporate: { percent: 1.6, fixed: 0.2 },
  international: { percent: 2.2, fixed: 0.2 },
  amex: { percent: 2.4, fixed: 0.2 },
}

/** Bygg ett detaljerat nuvarande avtal utifrån all-i-priser per segment. */
export function buildDetailedCurrent(
  allIn: Partial<Record<PricingCategory, { percent: number; fixed: number }>>,
): CurrentAgreement {
  const detailed: Partial<Record<PricingCategory, { percent: number; fixed: number }>> = {}
  for (const cat of PRICING_CATEGORIES) {
    const v = allIn[cat] ?? { percent: 0, fixed: 0 }
    detailed[cat] = v
  }
  return { mode: 'detailed', detailed }
}

export const defaultCurrentAgreement: CurrentAgreement = buildDetailedCurrent(typicalIncumbentAllIn)

export function createAcquirerFromCatalog(entry: CatalogAcquirer): Acquirer {
  return {
    id: createId(),
    catalogId: entry.id,
    name: entry.name,
    pricing: structuredClone(catalogPricing(entry)),
  }
}

/** Alla katalogens inlösare är valda från start. */
export const defaultAcquirers: Acquirer[] = acquirerCatalog.map(createAcquirerFromCatalog)

export function createAcquirer(name: string): Acquirer {
  const pricing: AcquirerPricing = {} as AcquirerPricing
  for (const cat of PRICING_CATEGORIES) {
    pricing[cat] = {
      interchange: INTERCHANGE[cat],
      scheme: SCHEME_FEE[cat],
      markup: impliedMarkup(cat, 1.0),
      fixed: 0.2,
    }
  }
  return { id: createId(), name, pricing }
}

export const defaultCalculatorState: CalculatorState = {
  volume: defaultVolume,
  mix: defaultMix,
  current: defaultCurrentAgreement,
  acquirers: defaultAcquirers,
  pricingMode: 'catalog',
  routableShare: 0.8,
  implementationCostPerAcquirer: 25_000,
  currentStep: 1,
  showResults: false,
}

export const VOLUME_PRESETS = [
  { label: '50 Mkr', value: 50_000_000 },
  { label: '250 Mkr', value: 250_000_000 },
  { label: '1 Mdkr', value: 1_000_000_000 },
  { label: '5 Mdkr', value: 5_000_000_000 },
  { label: '10 Mdkr', value: 10_000_000_000 },
]

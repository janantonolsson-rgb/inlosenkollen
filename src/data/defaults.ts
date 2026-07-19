import type {
  Acquirer,
  AcquirerPricing,
  CalculatorState,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import { acquirerCatalog, type CatalogAcquirer } from './acquirerCatalog'

function createId(): string {
  return crypto.randomUUID()
}

function defaultPricing(overrides: Partial<AcquirerPricing> = {}): AcquirerPricing {
  const base: AcquirerPricing = {
    swedishDebit: { percent: 0.45, fixed: 0.2 },
    swedishCredit: { percent: 0.6, fixed: 0.2 },
    corporate: { percent: 1.4, fixed: 0.2 },
    euEes: { percent: 0.85, fixed: 0.2 },
    international: { percent: 1.9, fixed: 0.2 },
    amex: { percent: 1.75, fixed: 0.2 },
  }
  return { ...base, ...overrides }
}

export const defaultVolume: VolumeData = {
  annualVolume: 250_000_000,
  averageOrderValue: 650,
  currentFixedFee: 0.25,
  currentPercentFee: 0.65,
}

export const defaultMix: TransactionMix = {
  visaDebit: 30,
  mastercardDebit: 25,
  swedishCredit: 15,
  corporate: 8,
  euEes: 10,
  international: 7,
  amex: 5,
}

export const exampleMix: TransactionMix = { ...defaultMix }

const elavonCatalogEntry = acquirerCatalog.find((entry) => entry.id === 'elavon')!

/**
 * Standardinlösare vid sidladdning: Elavon, importerad från katalogen så att
 * priserna alltid är i synk med acquirerCatalog.ts. Redigera priserna där, inte här.
 */
export const defaultAcquirers: Acquirer[] = [
  {
    id: 'default-elavon',
    catalogId: elavonCatalogEntry.id,
    name: elavonCatalogEntry.name,
    pricing: structuredClone(elavonCatalogEntry.pricing),
  },
]

export function createAcquirerFromCatalog(entry: CatalogAcquirer): Acquirer {
  return {
    id: createId(),
    catalogId: entry.id,
    name: entry.name,
    pricing: structuredClone(entry.pricing),
  }
}

export function createAcquirer(name: string): Acquirer {
  return {
    id: createId(),
    name,
    pricing: defaultPricing(),
  }
}

export const defaultCalculatorState: CalculatorState = {
  volume: defaultVolume,
  mix: defaultMix,
  acquirers: defaultAcquirers,
  pricingMode: 'catalog',
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

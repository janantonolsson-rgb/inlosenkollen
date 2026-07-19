import type {
  Acquirer,
  AcquirerPricing,
  CalculatorState,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import type { CatalogAcquirer } from './acquirerCatalog'

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
  visaDebit: 38,
  mastercardDebit: 32,
  swedishCredit: 12,
  corporate: 6,
  euEes: 6,
  international: 4,
  amex: 2,
}

export const exampleMix: TransactionMix = { ...defaultMix }

export const defaultAcquirers: Acquirer[] = []

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

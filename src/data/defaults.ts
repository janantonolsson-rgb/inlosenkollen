import type {
  Acquirer,
  AcquirerPricing,
  CalculatorState,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import { type CatalogAcquirer } from './acquirerCatalog'

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
  monthlyVolume: 5_000_000,
  monthlyTransactions: 125_000,
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

export const defaultAcquirers: Acquirer[] = [
  {
    id: 'acquirer-a',
    name: 'Inlösare A',
    pricing: defaultPricing(),
  },
  {
    id: 'acquirer-b',
    name: 'Inlösare B',
    pricing: defaultPricing({
      swedishDebit: { percent: 0.38, fixed: 0.25 },
      swedishCredit: { percent: 0.55, fixed: 0.25 },
      corporate: { percent: 1.25, fixed: 0.25 },
      euEes: { percent: 0.78, fixed: 0.25 },
      international: { percent: 1.75, fixed: 0.25 },
      amex: { percent: 1.55, fixed: 0.25 },
    }),
  },
  {
    id: 'acquirer-c',
    name: 'Inlösare C',
    pricing: defaultPricing({
      swedishDebit: { percent: 0.42, fixed: 0.18 },
      swedishCredit: { percent: 0.58, fixed: 0.18 },
      corporate: { percent: 1.35, fixed: 0.18 },
      euEes: { percent: 0.72, fixed: 0.18 },
      international: { percent: 1.65, fixed: 0.18 },
      amex: { percent: 1.45, fixed: 0.18 },
    }),
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
  pricingMode: 'manual',
  currentStep: 1,
  showResults: false,
}

export const VOLUME_PRESETS = [
  { label: '1 M kr', value: 1_000_000 },
  { label: '5 M kr', value: 5_000_000 },
  { label: '20 M kr', value: 20_000_000 },
  { label: '100 M kr', value: 100_000_000 },
]

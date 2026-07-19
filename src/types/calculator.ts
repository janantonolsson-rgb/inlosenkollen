export type MixCategory =
  | 'visaDebit'
  | 'mastercardDebit'
  | 'swedishCredit'
  | 'corporate'
  | 'euEes'
  | 'international'
  | 'amex'

export type PricingCategory =
  | 'swedishDebit'
  | 'swedishCredit'
  | 'corporate'
  | 'euEes'
  | 'international'
  | 'amex'

export interface FeeStructure {
  percent: number
  fixed: number
}

export interface AcquirerPricing {
  swedishDebit: FeeStructure
  swedishCredit: FeeStructure
  corporate: FeeStructure
  euEes: FeeStructure
  international: FeeStructure
  amex: FeeStructure
}

export interface Acquirer {
  id: string
  name: string
  pricing: AcquirerPricing
  catalogId?: string
}

export type TransactionMix = Record<MixCategory, number>

export interface VolumeData {
  annualVolume: number
  averageOrderValue: number
  currentFixedFee: number
  currentPercentFee: number
}

export type PricingMode = 'manual' | 'simplified' | 'catalog'

export interface CalculatorState {
  volume: VolumeData
  mix: TransactionMix
  acquirers: Acquirer[]
  pricingMode: PricingMode
  currentStep: number
  showResults: boolean
}

export interface CategoryRoutingResult {
  mixCategory: MixCategory
  label: string
  pricingCategory: PricingCategory
  annualVolume: number
  annualTransactions: number
  currentCost: number
  routedCost: number
  annualSavings: number
  recommendedAcquirerId: string
  recommendedAcquirerName: string
}

export interface CalculationResult {
  currentAnnualCost: number
  routedAnnualCost: number
  annualSavings: number
  percentSavings: number
  threeYearSavings: number
  tenYearSavings: number
  categoryResults: CategoryRoutingResult[]
  accumulatedSavings: { years: number; savings: number }[]
  acquirerVolumeDistribution: { acquirerId: string; acquirerName: string; volume: number; percentage: number }[]
  canRoute: boolean
  isSimplifiedMode: boolean
}

export const MIX_CATEGORY_LABELS: Record<MixCategory, string> = {
  visaDebit: 'Svenska Visa Debit',
  mastercardDebit: 'Svenska Mastercard Debit',
  swedishCredit: 'Svenska kreditkort',
  corporate: 'Företagskort',
  euEes: 'Kort utgivna inom EU/EES',
  international: 'Internationella kort utanför EU/EES',
  amex: 'American Express',
}

export const MIX_TO_PRICING: Record<MixCategory, PricingCategory> = {
  visaDebit: 'swedishDebit',
  mastercardDebit: 'swedishDebit',
  swedishCredit: 'swedishCredit',
  corporate: 'corporate',
  euEes: 'euEes',
  international: 'international',
  amex: 'amex',
}

export const PRICING_CATEGORY_LABELS: Record<PricingCategory, string> = {
  swedishDebit: 'Svenska debitkort',
  swedishCredit: 'Svenska kreditkort',
  corporate: 'Företagskort',
  euEes: 'EU/EES-kort',
  international: 'Internationella kort',
  amex: 'American Express',
}

export const MIX_CATEGORIES: MixCategory[] = [
  'visaDebit',
  'mastercardDebit',
  'swedishCredit',
  'corporate',
  'euEes',
  'international',
  'amex',
]

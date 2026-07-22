/**
 * Typdefinitioner för Inlösenkollen 1.0.
 *
 * Kärnskillnad mot tidigare version: priser modelleras som IC++
 * (interchange + scheme fee + acquirer-markup + fast avgift), inte som
 * ett enda blandat procenttal. "Nuvarande avtal" kan anges antingen som
 * ett blended snitt (låg precision → resultat visas som intervall) eller
 * segmenterat per korttyp (hög precision → full tredelad besparing).
 */

export type PricingCategory =
  | 'swedishDebit'
  | 'swedishCredit'
  | 'euEes'
  | 'corporate'
  | 'international'
  | 'amex'

/** Alla prissättningskategorier i visningsordning. */
export const PRICING_CATEGORIES: PricingCategory[] = [
  'swedishDebit',
  'swedishCredit',
  'euEes',
  'corporate',
  'international',
  'amex',
]

/** En IC++-avgift: interchange + scheme + markup + fast per transaktion. */
export interface IcppFee {
  interchange: number
  scheme: number
  markup: number
  fixed: number
}

/** Allt-i-pris (blended) som användaren anger för sitt nuvarande avtal. */
export interface FeeStructure {
  percent: number
  fixed: number
}

export type AcquirerPricing = Record<PricingCategory, IcppFee>

/** Konfidensgrad för ett pris — styr hur det presenteras och vikteras. */
export type PriceConfidence = 'confirmed' | 'published' | 'estimate' | 'unverified'

export interface Acquirer {
  id: string
  catalogId?: string
  name: string
  pricing: AcquirerPricing
}

export interface TransactionMix {
  visaDebit: number
  mastercardDebit: number
  swedishCredit: number
  corporate: number
  euEes: number
  international: number
  amex: number
}

export interface VolumeData {
  annualVolume: number
  averageOrderValue: number
}

export type CurrentMode = 'blended' | 'detailed'

export interface CurrentAgreement {
  mode: CurrentMode
  /** Används när mode === 'blended'. */
  blended?: FeeStructure
  /** Används när mode === 'detailed'. All-i-pris per segment (interchange+scheme+markup inslaget). */
  detailed?: Partial<Record<PricingCategory, FeeStructure>>
}

export interface VolumeBand {
  label: string
  min: number
  max: number
  /** Multiplikator på acquirer-markup för detta volymband (lägre för stora volymer). */
  markupMultiplier: number
}

export interface CalculatorState {
  volume: VolumeData
  mix: TransactionMix
  current: CurrentAgreement
  acquirers: Acquirer[]
  pricingMode: 'catalog' | 'manual'
  routableShare: number
  implementationCostPerAcquirer: number
  currentStep: number
  showResults: boolean
}

/** Per-segment resultatrad. */
export interface CategoryResult {
  category: PricingCategory
  label: string
  volume: number
  transactions: number
  currentCost: number
  bestSingleAcquirerId: string
  bestSingleAcquirerName: string
  bestSingleCost: number
  routedAcquirerId: string
  routedAcquirerName: string
  routedCost: number
  keptCurrent: boolean
  /** Besparing på segmentnivå (nuvarande vs routat). */
  savings: number
}

export interface SavingsSplit {
  /** Bättre single-acquirer / omförhandlat avtal vs nuvarande. */
  procurement: number
  /** Ytterligare vinst av flera inlösare vs bästa enskilda. */
  routing: number
  /** Uppskattad kostnad för fler anslutningar (visas som avdrag). */
  implementation: number
  /** Netto = procurement + routing - implementation. */
  net: number
}

export interface SavingsRange {
  low: number
  high: number
}

export interface Results {
  annualTransactions: number
  currentAnnualCost: number
  bestSingleAnnualCost: number
  routedAnnualCost: number
  /** Effektiv kostnad efter routing + implementeringskostnad (currentCost - net). */
  effectiveRoutedCost: number
  split: SavingsSplit
  range: SavingsRange
  percentSavings: number
  acquirersUsed: number
  categoryResults: CategoryResult[]
  volumeBand: VolumeBand
  precision: 'low' | 'high'
}

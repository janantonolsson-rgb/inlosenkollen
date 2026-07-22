import type {
  Acquirer,
  AcquirerPricing,
  CategoryResult,
  CurrentAgreement,
  PricingCategory,
  Results,
  TransactionMix,
  VolumeBand,
  VolumeData,
} from '../types/calculator'
import { PRICING_CATEGORIES } from '../types/calculator'
import { getVolumeBand } from '../data/defaults'

const CATEGORY_LABELS_SV: Record<PricingCategory, string> = {
  swedishDebit: 'Svenskt debit (Visa/MC)',
  swedishCredit: 'Svenskt kredit',
  euEes: 'EU/EES-konsumentskort',
  corporate: 'Företagskort (corporate)',
  international: 'Internationellt (utanför EES)',
  amex: 'Amex',
}

export function categoryLabel(cat: PricingCategory): string {
  return CATEGORY_LABELS_SV[cat]
}

/** Antal transaktioner per år = årlig omsättning ÷ AoV. */
export function getAnnualTransactions(volume: VolumeData): number {
  if (!volume.averageOrderValue || volume.averageOrderValue <= 0) return 0
  return volume.annualVolume / volume.averageOrderValue
}

/** Konvertera transaktionsmix (7 fält) till andelar per priskategori (6). */
export function getCategoryShares(mix: TransactionMix): Record<PricingCategory, number> {
  const total =
    mix.visaDebit +
    mix.mastercardDebit +
    mix.swedishCredit +
    mix.corporate +
    mix.euEes +
    mix.international +
    mix.amex
  const safe = total > 0 ? total : 1
  return {
    swedishDebit: (mix.visaDebit + mix.mastercardDebit) / safe,
    swedishCredit: mix.swedishCredit / safe,
    euEes: mix.euEes / safe,
    corporate: mix.corporate / safe,
    international: mix.international / safe,
    amex: mix.amex / safe,
  }
}

/** All-i-pris (interchange + scheme + markup) för en IC++-avgift. */
export function allInPercent(fee: { interchange: number; scheme: number; markup: number }): number {
  return fee.interchange + fee.scheme + fee.markup
}

function isValidFee(fee: { percent: number; fixed: number } | undefined | null): fee is { percent: number; fixed: number } {
  return (
    !!fee &&
    typeof fee.percent === 'number' &&
    typeof fee.fixed === 'number' &&
    Number.isFinite(fee.percent) &&
    Number.isFinite(fee.fixed) &&
    fee.percent >= 0 &&
    fee.fixed >= 0
  )
}

function isValidIcpp(fee: { interchange: number; scheme: number; markup: number; fixed: number } | undefined | null): fee is { interchange: number; scheme: number; markup: number; fixed: number } {
  return (
    !!fee &&
    Number.isFinite(fee.interchange) &&
    Number.isFinite(fee.scheme) &&
    Number.isFinite(fee.markup) &&
    Number.isFinite(fee.fixed) &&
    fee.interchange >= 0 &&
    fee.scheme >= 0 &&
    fee.markup >= 0 &&
    fee.fixed >= 0
  )
}

/**
 * Skalad acquirer-prissättning: markup justeras med volymbandets multiplikator.
 * Interchange och scheme är oförändrade (reglerade/schablon).
 */
export function scaleAcquirerPricing(
  pricing: AcquirerPricing,
  multiplier: number,
): AcquirerPricing {
  const out = {} as AcquirerPricing
  for (const cat of PRICING_CATEGORIES) {
    const f = pricing[cat]
    out[cat] = {
      interchange: f.interchange,
      scheme: f.scheme,
      markup: Math.max(0, f.markup * multiplier),
      fixed: f.fixed,
    }
  }
  return out
}

/** Kostnad för en kategori med ett IC++-acquirerpris. */
function acquirerCategoryCost(
  volume: number,
  transactions: number,
  fee: { interchange: number; scheme: number; markup: number; fixed: number } | undefined,
): number {
  if (!isValidIcpp(fee)) return Number.POSITIVE_INFINITY
  const pct = allInPercent(fee) / 100
  return volume * pct + transactions * fee.fixed
}

/** Kostnad för en kategori med nuvarande avtal (blended eller detaljerat). */
function currentCategoryCost(
  category: PricingCategory,
  volume: number,
  transactions: number,
  current: CurrentAgreement,
): number {
  if (current.mode === 'detailed' && current.detailed) {
    const fee = current.detailed[category]
    if (!isValidFee(fee)) return 0
    return (volume * fee.percent) / 100 + transactions * fee.fixed
  }
  // Blended: samma procent/fast appliceras på alla kategorier (låg precision).
  const b = current.blended
  if (!isValidFee(b)) return 0
  return (volume * b.percent) / 100 + transactions * b.fixed
}

export function calculateCurrentAnnualCost(
  volume: VolumeData,
  mix: TransactionMix,
  current: CurrentAgreement,
): number {
  const txns = getAnnualTransactions(volume)
  const shares = getCategoryShares(mix)
  let sum = 0
  for (const cat of PRICING_CATEGORIES) {
    sum += currentCategoryCost(cat, volume.annualVolume * shares[cat], txns * shares[cat], current)
  }
  return Number.isFinite(sum) ? sum : 0
}

interface CoreSavings {
  currentCost: number
  bestSingleCost: number
  bestSingleId: string
  bestSingleName: string
  routedCost: number
  procurement: number
  routing: number
  totalSaving: number
  categoryResults: CategoryResult[]
  acquirersUsed: number
}

function computeCore(
  volume: VolumeData,
  mix: TransactionMix,
  acquirers: Acquirer[],
  current: CurrentAgreement,
  band: VolumeBand,
): CoreSavings {
  const txns = getAnnualTransactions(volume)
  const shares = getCategoryShares(mix)
  const scaled = acquirers.map((a) => ({ acq: a, pricing: scaleAcquirerPricing(a.pricing, band.markupMultiplier) }))

  let currentCost = 0
  let bestSingleCost = Infinity
  let bestSingleId = 'current'
  let bestSingleName = 'Nuvarande inlösare'

  // Beräkna total kostnad per enskild acquirer för att hitta bästa single-alternativ.
  for (const { acq, pricing } of scaled) {
    let total = 0
    for (const cat of PRICING_CATEGORIES) {
      total += acquirerCategoryCost(
        volume.annualVolume * shares[cat],
        txns * shares[cat],
        pricing[cat],
      )
    }
    if (Number.isFinite(total) && total < bestSingleCost) {
      bestSingleCost = total
      bestSingleId = acq.id
      bestSingleName = acq.name
    }
  }

  // Om ingen acquirer är billigare än nuvarande totalt, är "nuvarande" bästa single.
  let currentTotal = 0
  const catCosts: Record<PricingCategory, { volume: number; txns: number; current: number; bestAcq: { id: string; name: string; cost: number } }> = {} as never
  for (const cat of PRICING_CATEGORIES) {
    const v = volume.annualVolume * shares[cat]
    const t = txns * shares[cat]
    const cc = currentCategoryCost(cat, v, t, current)
    currentTotal += cc
    let bestAcq = { id: 'current', name: 'Nuvarande', cost: cc }
    for (const { acq, pricing } of scaled) {
      const c = acquirerCategoryCost(v, t, pricing[cat])
      if (Number.isFinite(c) && c < bestAcq.cost) {
        bestAcq = { id: acq.id, name: acq.name, cost: c }
      }
    }
    catCosts[cat] = { volume: v, txns: t, current: cc, bestAcq }
  }
  currentCost = Number.isFinite(currentTotal) ? currentTotal : 0

  if (bestSingleCost >= currentCost) {
    bestSingleCost = currentCost
    bestSingleId = 'current'
    bestSingleName = 'Nuvarande inlösare'
  }

  // Bygg per-kategori-rader för optimal routing (min av nuvarande och billigaste acquirer).
  const categoryResults: CategoryResult[] = []
  let routedCost = 0
  const usedAcquirerIds = new Set<string>()

  for (const cat of PRICING_CATEGORIES) {
    const { volume: v, txns: t, current: cc, bestAcq } = catCosts[cat]
    const routedCostCat = Math.min(cc, bestAcq.cost)
    const keptCurrent = cc <= bestAcq.cost
    if (!keptCurrent && bestAcq.id !== 'current') usedAcquirerIds.add(bestAcq.id)
    routedCost += routedCostCat
    categoryResults.push({
      category: cat,
      label: categoryLabel(cat),
      volume: v,
      transactions: t,
      currentCost: cc,
      bestSingleAcquirerId: bestSingleId,
      bestSingleAcquirerName: bestSingleName,
      bestSingleCost: bestSingleCost,
      routedAcquirerId: keptCurrent ? 'current' : bestAcq.id,
      routedAcquirerName: keptCurrent ? 'Nuvarande inlösare' : bestAcq.name,
      routedCost: routedCostCat,
      keptCurrent,
      savings: Math.max(0, cc - routedCostCat),
    })
  }
  routedCost = Number.isFinite(routedCost) ? routedCost : currentCost

  const totalSaving = Math.max(0, currentCost - routedCost)
  const procurement = Math.max(0, currentCost - bestSingleCost)
  const routing = Math.max(0, totalSaving - procurement)

  return {
    currentCost,
    bestSingleCost,
    bestSingleId,
    bestSingleName,
    routedCost,
    procurement,
    routing,
    totalSaving,
    categoryResults,
    acquirersUsed: usedAcquirerIds.size,
  }
}

export function calculateResults(
  volume: VolumeData,
  mix: TransactionMix,
  acquirers: Acquirer[],
  current: CurrentAgreement,
  routableShare: number,
  implementationCostPerAcquirer: number,
): Results {
  const band = getVolumeBand(volume.annualVolume)
  const core = computeCore(volume, mix, acquirers, current, band)

  const implementation = implementationCostPerAcquirer * Math.max(0, core.acquirersUsed)
  // Procurement (byte/omförhandling) gäller hela portföljen och skalas inte av
  // routable share. Däremot skalas den äkta routingbesparingen — inte all volym
  // kan alltid styras till valfri inlösare.
  const procurement = core.procurement
  const routing = core.routing * routableShare
  const gross = procurement + routing
  const net = Math.max(0, gross - implementation)

  const range = {
    low: Math.max(0, core.procurement + core.routing * 0.6 - implementation),
    high: Math.max(0, core.procurement + core.routing * 1.0 - implementation),
  }

  const percentSavings = core.currentCost > 0 ? (net / core.currentCost) * 100 : 0

  return {
    annualTransactions: getAnnualTransactions(volume),
    currentAnnualCost: core.currentCost,
    bestSingleAnnualCost: core.bestSingleCost,
    routedAnnualCost: core.routedCost,
    effectiveRoutedCost: core.currentCost - net,
    split: {
      procurement,
      routing,
      implementation,
      net,
    },
    range,
    percentSavings,
    acquirersUsed: core.acquirersUsed,
    categoryResults: core.categoryResults,
    volumeBand: band,
    precision: current.mode === 'detailed' ? 'high' : 'low',
  }
}

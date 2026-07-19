import type {
  Acquirer,
  CalculationResult,
  CategoryRoutingResult,
  FeeStructure,
  PricingCategory,
  PricingMode,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import {
  MIX_CATEGORIES,
  MIX_CATEGORY_LABELS,
  MIX_TO_PRICING,
} from '../types/calculator'
import { routeTransaction, defaultRoutingRules, CURRENT_ACQUIRER_ID, CURRENT_ACQUIRER_NAME } from './routing/engine'

export function calculateCategoryCost(
  volume: number,
  transactions: number,
  fee: FeeStructure,
): number {
  return volume * (fee.percent / 100) + transactions * fee.fixed
}

/**
 * Antal årliga transaktioner beräknas alltid automatiskt utifrån årlig omsättning
 * och genomsnittligt ordervärde (AoV) — användaren matar aldrig in transaktioner direkt.
 *   annual_transactions = annual_revenue / AoV
 */
export function getAnnualTransactions(volume: VolumeData): number {
  if (!volume.averageOrderValue || volume.averageOrderValue <= 0) return 0
  return volume.annualVolume / volume.averageOrderValue
}

export function calculateCurrentAnnualCost(volume: VolumeData): number {
  const annualTransactions = getAnnualTransactions(volume)
  return (
    volume.annualVolume * (volume.currentPercentFee / 100) +
    annualTransactions * volume.currentFixedFee
  )
}

function getCategoryVolume(totalVolume: number, mixPercent: number): number {
  return totalVolume * (mixPercent / 100)
}

function getCategoryTransactions(
  totalTransactions: number,
  mixPercent: number,
): number {
  return totalTransactions * (mixPercent / 100)
}

function calculateCategoryCurrentCost(
  categoryVolume: number,
  categoryTransactions: number,
  currentPercent: number,
  currentFixed: number,
): number {
  return (
    categoryVolume * (currentPercent / 100) +
    categoryTransactions * currentFixed
  )
}

export function calculateResults(
  volume: VolumeData,
  mix: TransactionMix,
  acquirers: Acquirer[],
  pricingMode: PricingMode,
): CalculationResult {
  const currentAnnualCost = calculateCurrentAnnualCost(volume)
  const annualTransactions = getAnnualTransactions(volume)
  const isSimplifiedMode = pricingMode === 'simplified'
  const canRoute = !isSimplifiedMode

  if (!canRoute) {
    return {
      currentAnnualCost,
      routedAnnualCost: currentAnnualCost,
      annualSavings: 0,
      percentSavings: 0,
      threeYearSavings: 0,
      categoryResults: buildCategoryResultsWithoutRouting(volume, mix, annualTransactions),
      accumulatedSavings: buildAccumulatedSavings(0),
      acquirerVolumeDistribution: [],
      canRoute: false,
      isSimplifiedMode,
    }
  }

  const currentFee: FeeStructure = {
    percent: volume.currentPercentFee,
    fixed: volume.currentFixedFee,
  }

  const categoryResults: CategoryRoutingResult[] = []
  const acquirerVolumeMap = new Map<string, { name: string; volume: number }>()
  let invariantViolationDetected = false

  for (const mixCategory of MIX_CATEGORIES) {
    const mixPercent = mix[mixCategory]
    const pricingCategory = MIX_TO_PRICING[mixCategory]
    const categoryVolume = getCategoryVolume(volume.annualVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(annualTransactions, mixPercent)

    const currentCost = calculateCategoryCurrentCost(
      categoryVolume,
      categoryTransactions,
      volume.currentPercentFee,
      volume.currentFixedFee,
    )

    // Nuvarande pris skickas alltid med som en routingkandidat (se engine.ts).
    // Det gör routed_cost <= current_cost matematiskt garanterat.
    const decision = routeTransaction(
      {
        mixCategory,
        pricingCategory,
        categoryVolume,
        categoryTransactions,
        acquirers,
        currentFee,
      },
      defaultRoutingRules,
    )

    // Säkerhetsnät (defense in depth): oavsett vad routingmotorn returnerar kan
    // routad kostnad ALDRIG tillåtas överstiga nuvarande kostnad för kategorin.
    // Om detta någonsin skulle klippas till, är det ett tecken på en bugg i
    // routingmotorn eller korrupt prisdata — logga det så det upptäcks.
    const rawRoutedCost = decision.cost
    if (rawRoutedCost > currentCost + 0.01) {
      invariantViolationDetected = true
      console.error(
        '[Inlösenkollen] Routinginvariant bruten: routad kostnad översteg nuvarande kostnad för kategori. ' +
          'Detta ska vara matematiskt omöjligt — klipper till nuvarande kostnad som skyddsnät.',
        { mixCategory, rawRoutedCost, currentCost },
      )
    }
    const routedCost = Math.min(rawRoutedCost, currentCost)
    const isSafeguarded = routedCost < rawRoutedCost - 0.01

    const annualSavingsForCategory = currentCost - routedCost

    categoryResults.push({
      mixCategory,
      label: MIX_CATEGORY_LABELS[mixCategory],
      pricingCategory,
      annualVolume: categoryVolume,
      annualTransactions: categoryTransactions,
      currentCost,
      routedCost,
      annualSavings: annualSavingsForCategory,
      recommendedAcquirerId: isSafeguarded ? CURRENT_ACQUIRER_ID : decision.acquirerId,
      recommendedAcquirerName: isSafeguarded ? CURRENT_ACQUIRER_NAME : decision.acquirerName,
    })

    const distributionId = isSafeguarded ? CURRENT_ACQUIRER_ID : decision.acquirerId
    const distributionName = isSafeguarded ? CURRENT_ACQUIRER_NAME : decision.acquirerName
    const existing = acquirerVolumeMap.get(distributionId)
    if (existing) {
      existing.volume += categoryVolume
    } else {
      acquirerVolumeMap.set(distributionId, {
        name: distributionName,
        volume: categoryVolume,
      })
    }
  }

  const routedAnnualCost = categoryResults.reduce((sum, r) => sum + r.routedCost, 0)
  const rawAnnualSavings = currentAnnualCost - routedAnnualCost
  // Slutgiltigt skyddsnät på totalnivå: besparing kan aldrig vara negativ.
  const annualSavings = Math.max(0, rawAnnualSavings)
  if (rawAnnualSavings < -0.01) {
    invariantViolationDetected = true
    console.error(
      '[Inlösenkollen] Routinginvariant bruten på totalnivå: total besparing var negativ innan skyddsnät.',
      { rawAnnualSavings },
    )
  }
  const percentSavings = currentAnnualCost > 0 ? (annualSavings / currentAnnualCost) * 100 : 0

  const totalRoutedVolume = [...acquirerVolumeMap.values()].reduce((sum, a) => sum + a.volume, 0)

  const acquirerVolumeDistribution = [...acquirerVolumeMap.entries()].map(
    ([acquirerId, data]) => ({
      acquirerId,
      acquirerName: data.name,
      volume: data.volume,
      percentage: totalRoutedVolume > 0 ? (data.volume / totalRoutedVolume) * 100 : 0,
    }),
  )

  if (invariantViolationDetected) {
    console.warn(
      '[Inlösenkollen] Ett eller flera skyddsnät aktiverades under denna beräkning. ' +
        'Kontrollera inlösarpriser och indata — resultatet visas fortfarande korrekt (aldrig negativ besparing).',
    )
  }

  return {
    currentAnnualCost,
    routedAnnualCost,
    annualSavings,
    percentSavings,
    threeYearSavings: annualSavings * 3,
    categoryResults,
    accumulatedSavings: buildAccumulatedSavings(annualSavings),
    acquirerVolumeDistribution,
    canRoute: true,
    isSimplifiedMode: false,
  }
}

function buildCategoryResultsWithoutRouting(
  volume: VolumeData,
  mix: TransactionMix,
  annualTransactions: number,
): CategoryRoutingResult[] {
  return MIX_CATEGORIES.map((mixCategory) => {
    const mixPercent = mix[mixCategory]
    const pricingCategory = MIX_TO_PRICING[mixCategory]
    const categoryVolume = getCategoryVolume(volume.annualVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(annualTransactions, mixPercent)
    const currentCost = calculateCategoryCurrentCost(
      categoryVolume,
      categoryTransactions,
      volume.currentPercentFee,
      volume.currentFixedFee,
    )

    return {
      mixCategory,
      label: MIX_CATEGORY_LABELS[mixCategory],
      pricingCategory,
      annualVolume: categoryVolume,
      annualTransactions: categoryTransactions,
      currentCost,
      routedCost: currentCost,
      annualSavings: 0,
      recommendedAcquirerId: '',
      recommendedAcquirerName: '—',
    }
  })
}

/** Ackumulerad besparing år 1, 2 och 3, baserat på den beräknade årliga besparingen. */
function buildAccumulatedSavings(annualSavings: number) {
  const years = [1, 2, 3]
  return years.map((y) => ({
    years: y,
    savings: annualSavings * y,
  }))
}

export function getFeeForCategory(
  acquirer: Acquirer,
  pricingCategory: PricingCategory,
): FeeStructure {
  return acquirer.pricing[pricingCategory]
}

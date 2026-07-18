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
import { routeTransaction, defaultRoutingRules } from './routing/engine'

export function calculateCategoryCost(
  volume: number,
  transactions: number,
  fee: FeeStructure,
): number {
  return volume * (fee.percent / 100) + transactions * fee.fixed
}

export function calculateCurrentAnnualCost(volume: VolumeData): number {
  return (
    volume.annualVolume * (volume.currentPercentFee / 100) +
    volume.annualTransactions * volume.currentFixedFee
  )
}

export function getAvgTransactionAmount(volume: VolumeData): number {
  if (volume.annualTransactions <= 0) return 0
  return volume.annualVolume / volume.annualTransactions
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
  const isSimplifiedMode = pricingMode === 'simplified'
  const canRoute = !isSimplifiedMode && acquirers.length > 0

  if (!canRoute) {
    return {
      currentAnnualCost,
      routedAnnualCost: currentAnnualCost,
      annualSavings: 0,
      percentSavings: 0,
      threeYearSavings: 0,
      categoryResults: buildCategoryResultsWithoutRouting(volume, mix),
      accumulatedSavings: buildAccumulatedSavings(0),
      acquirerVolumeDistribution: [],
      canRoute: false,
      isSimplifiedMode,
    }
  }

  const categoryResults: CategoryRoutingResult[] = []
  const acquirerVolumeMap = new Map<string, { name: string; volume: number }>()

  for (const mixCategory of MIX_CATEGORIES) {
    const mixPercent = mix[mixCategory]
    const pricingCategory = MIX_TO_PRICING[mixCategory]
    const categoryVolume = getCategoryVolume(volume.annualVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(
      volume.annualTransactions,
      mixPercent,
    )

    const currentCost = calculateCategoryCurrentCost(
      categoryVolume,
      categoryTransactions,
      volume.currentPercentFee,
      volume.currentFixedFee,
    )

    const decision = routeTransaction(
      {
        mixCategory,
        pricingCategory,
        categoryVolume,
        categoryTransactions,
        acquirers,
      },
      defaultRoutingRules,
    )

    const routedCost = decision.cost
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
      recommendedAcquirerId: decision.acquirerId,
      recommendedAcquirerName: decision.acquirerName,
    })

    const existing = acquirerVolumeMap.get(decision.acquirerId)
    if (existing) {
      existing.volume += categoryVolume
    } else {
      acquirerVolumeMap.set(decision.acquirerId, {
        name: decision.acquirerName,
        volume: categoryVolume,
      })
    }
  }

  const routedAnnualCost = categoryResults.reduce(
    (sum, r) => sum + r.routedCost,
    0,
  )
  const annualSavings = currentAnnualCost - routedAnnualCost
  const percentSavings =
    currentAnnualCost > 0 ? (annualSavings / currentAnnualCost) * 100 : 0

  const totalRoutedVolume = [...acquirerVolumeMap.values()].reduce(
    (sum, a) => sum + a.volume,
    0,
  )

  const acquirerVolumeDistribution = [...acquirerVolumeMap.entries()].map(
    ([acquirerId, data]) => ({
      acquirerId,
      acquirerName: data.name,
      volume: data.volume,
      percentage:
        totalRoutedVolume > 0 ? (data.volume / totalRoutedVolume) * 100 : 0,
    }),
  )

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
): CategoryRoutingResult[] {
  return MIX_CATEGORIES.map((mixCategory) => {
    const mixPercent = mix[mixCategory]
    const pricingCategory = MIX_TO_PRICING[mixCategory]
    const categoryVolume = getCategoryVolume(volume.annualVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(
      volume.annualTransactions,
      mixPercent,
    )
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

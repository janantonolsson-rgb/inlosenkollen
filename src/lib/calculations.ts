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

export function calculateCurrentMonthlyCost(volume: VolumeData): number {
  return (
    volume.monthlyVolume * (volume.currentPercentFee / 100) +
    volume.monthlyTransactions * volume.currentFixedFee
  )
}

export function getAvgTransactionAmount(volume: VolumeData): number {
  if (volume.monthlyTransactions <= 0) return 0
  return volume.monthlyVolume / volume.monthlyTransactions
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
  const currentMonthlyCost = calculateCurrentMonthlyCost(volume)
  const isSimplifiedMode = pricingMode === 'simplified'
  const canRoute = !isSimplifiedMode && acquirers.length > 0

  if (!canRoute) {
    return {
      currentMonthlyCost,
      routedMonthlyCost: currentMonthlyCost,
      monthlySavings: 0,
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
    const categoryVolume = getCategoryVolume(volume.monthlyVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(
      volume.monthlyTransactions,
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
    const monthlySavings = currentCost - routedCost

    categoryResults.push({
      mixCategory,
      label: MIX_CATEGORY_LABELS[mixCategory],
      pricingCategory,
      monthlyVolume: categoryVolume,
      monthlyTransactions: categoryTransactions,
      currentCost,
      routedCost,
      monthlySavings,
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

  const routedMonthlyCost = categoryResults.reduce(
    (sum, r) => sum + r.routedCost,
    0,
  )
  const monthlySavings = currentMonthlyCost - routedMonthlyCost
  const annualSavings = monthlySavings * 12
  const percentSavings =
    currentMonthlyCost > 0 ? (monthlySavings / currentMonthlyCost) * 100 : 0

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
    currentMonthlyCost,
    routedMonthlyCost,
    monthlySavings,
    annualSavings,
    percentSavings,
    threeYearSavings: annualSavings * 3,
    categoryResults,
    accumulatedSavings: buildAccumulatedSavings(monthlySavings),
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
    const categoryVolume = getCategoryVolume(volume.monthlyVolume, mixPercent)
    const categoryTransactions = getCategoryTransactions(
      volume.monthlyTransactions,
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
      monthlyVolume: categoryVolume,
      monthlyTransactions: categoryTransactions,
      currentCost,
      routedCost: currentCost,
      monthlySavings: 0,
      recommendedAcquirerId: '',
      recommendedAcquirerName: '—',
    }
  })
}

function buildAccumulatedSavings(monthlySavings: number) {
  const months = [1, 6, 12, 24, 36]
  return months.map((m) => ({
    months: m,
    savings: monthlySavings * m,
  }))
}

export function getFeeForCategory(
  acquirer: Acquirer,
  pricingCategory: PricingCategory,
): FeeStructure {
  return acquirer.pricing[pricingCategory]
}

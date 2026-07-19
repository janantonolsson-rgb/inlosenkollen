import { describe, expect, it } from 'vitest'
import { calculateResults, getAnnualTransactions, calculateCurrentAnnualCost } from '../calculations'
import { routeTransaction, CURRENT_ACQUIRER_ID } from '../routing/engine'
import type { Acquirer, TransactionMix, VolumeData } from '../../types/calculator'

function makeAcquirer(id: string, name: string, percent: number, fixed = 0): Acquirer {
  return {
    id,
    name,
    pricing: {
      swedishDebit: { percent, fixed },
      swedishCredit: { percent, fixed },
      corporate: { percent, fixed },
      euEes: { percent, fixed },
      international: { percent, fixed },
      amex: { percent, fixed },
    },
  }
}

const evenMix: TransactionMix = {
  visaDebit: 40,
  mastercardDebit: 20,
  swedishCredit: 15,
  corporate: 10,
  euEes: 5,
  international: 5,
  amex: 5,
}

const baseVolume: VolumeData = {
  annualVolume: 100_000_000,
  averageOrderValue: 500,
  currentFixedFee: 0.2,
  currentPercentFee: 0.6,
}

describe('Affärsregel: intelligent routing får aldrig öka kundens kostnad', () => {
  it('routing_cost är aldrig högre än current_cost, även när alla inlösare är dyrare än nuvarande pris', () => {
    // Alla konfigurerade inlösare är MEDVETET dyrare än kundens nuvarande pris (0,6 %).
    const expensiveAcquirers = [
      makeAcquirer('a', 'Dyr inlösare A', 2.5),
      makeAcquirer('b', 'Dyr inlösare B', 3.0),
      makeAcquirer('c', 'Dyr inlösare C', 1.8),
    ]

    const results = calculateResults(baseVolume, evenMix, expensiveAcquirers, 'manual')

    expect(results.routedAnnualCost).toBeLessThanOrEqual(results.currentAnnualCost + 0.01)
    expect(results.annualSavings).toBeGreaterThanOrEqual(0)

    for (const category of results.categoryResults) {
      expect(category.routedCost).toBeLessThanOrEqual(category.currentCost + 0.01)
      expect(category.annualSavings).toBeGreaterThanOrEqual(0)
    }
  })

  it('väljer nuvarande pris (behåll oförändrat) när det är billigast för en kategori', () => {
    const expensiveAcquirer = makeAcquirer('x', 'Dyr inlösare', 5)
    const decision = routeTransaction({
      mixCategory: 'amex',
      pricingCategory: 'amex',
      categoryVolume: 1_000_000,
      categoryTransactions: 2_000,
      acquirers: [expensiveAcquirer],
      currentFee: { percent: 0.6, fixed: 0.2 },
    })

    expect(decision.acquirerId).toBe(CURRENT_ACQUIRER_ID)
    expect(decision.keptCurrent).toBe(true)
  })

  it('väljer den faktiskt billigaste inlösaren när en är billigare än nuvarande pris', () => {
    const cheapAcquirer = makeAcquirer('cheap', 'Billig inlösare', 0.2)
    const expensiveAcquirer = makeAcquirer('exp', 'Dyr inlösare', 5)
    const decision = routeTransaction({
      mixCategory: 'visaDebit',
      pricingCategory: 'swedishDebit',
      categoryVolume: 1_000_000,
      categoryTransactions: 2_000,
      acquirers: [cheapAcquirer, expensiveAcquirer],
      currentFee: { percent: 0.6, fixed: 0.2 },
    })

    expect(decision.acquirerId).toBe('cheap')
    expect(decision.keptCurrent).toBe(false)
  })

  it('total besparing är alltid >= 0 för ett brett spann av slumpade scenarier', () => {
    const percentOptions = [0.1, 0.3, 0.5, 0.65, 0.9, 1.2, 1.5, 2.0, 2.8, 3.5]

    for (let i = 0; i < 30; i++) {
      const currentPercent = percentOptions[i % percentOptions.length]
      const acquirers = [
        makeAcquirer('a', 'A', percentOptions[(i + 1) % percentOptions.length]),
        makeAcquirer('b', 'B', percentOptions[(i + 3) % percentOptions.length]),
      ]
      const volume: VolumeData = {
        ...baseVolume,
        currentPercentFee: currentPercent,
      }

      const results = calculateResults(volume, evenMix, acquirers, 'manual')

      expect(results.annualSavings).toBeGreaterThanOrEqual(0)
      expect(results.routedAnnualCost).toBeLessThanOrEqual(results.currentAnnualCost + 0.01)
      for (const category of results.categoryResults) {
        expect(category.annualSavings).toBeGreaterThanOrEqual(0)
      }
    }
  })

  it('hanterar tom inlösarlista säkert (ingen krasch, ingen negativ besparing)', () => {
    const results = calculateResults(baseVolume, evenMix, [], 'manual')
    expect(results.annualSavings).toBeGreaterThanOrEqual(0)
  })

  it('hanterar korrupt/felaktig prisdata säkert (NaN/negativa avgifter väljs aldrig)', () => {
    const brokenAcquirer: Acquirer = {
      id: 'broken',
      name: 'Trasig data',
      pricing: {
        swedishDebit: { percent: NaN, fixed: 0 },
        swedishCredit: { percent: -1, fixed: 0 },
        corporate: { percent: 0.4, fixed: 0 },
        euEes: { percent: 0.4, fixed: 0 },
        international: { percent: 0.4, fixed: 0 },
        amex: { percent: 0.4, fixed: 0 },
      },
    }

    const results = calculateResults(baseVolume, evenMix, [brokenAcquirer], 'manual')

    expect(Number.isFinite(results.routedAnnualCost)).toBe(true)
    expect(Number.isNaN(results.routedAnnualCost)).toBe(false)
    expect(results.annualSavings).toBeGreaterThanOrEqual(0)
  })

  it('hanterar nollvolym och nollomsättning säkert', () => {
    const zeroVolume: VolumeData = {
      annualVolume: 0,
      averageOrderValue: 500,
      currentFixedFee: 0.2,
      currentPercentFee: 0.6,
    }
    const results = calculateResults(zeroVolume, evenMix, [makeAcquirer('a', 'A', 0.5)], 'manual')
    expect(results.annualSavings).toBeGreaterThanOrEqual(0)
    expect(Number.isNaN(results.annualSavings)).toBe(false)
  })
})

describe('AoV-modell: antal transaktioner beräknas automatiskt', () => {
  it('annual_transactions = annual_revenue / AoV', () => {
    const volume: VolumeData = {
      annualVolume: 100_000_000,
      averageOrderValue: 500,
      currentFixedFee: 0,
      currentPercentFee: 0.6,
    }
    expect(getAnnualTransactions(volume)).toBe(200_000)
  })

  it('hanterar AoV = 0 säkert utan att krascha (division med noll)', () => {
    const volume: VolumeData = {
      annualVolume: 100_000_000,
      averageOrderValue: 0,
      currentFixedFee: 0,
      currentPercentFee: 0.6,
    }
    expect(getAnnualTransactions(volume)).toBe(0)
    expect(Number.isFinite(calculateCurrentAnnualCost(volume))).toBe(true)
  })
})

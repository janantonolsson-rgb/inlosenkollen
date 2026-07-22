import { describe, expect, it } from 'vitest'
import {
  calculateResults,
  getAnnualTransactions,
  allInPercent,
  getCategoryShares,
  scaleAcquirerPricing,
  categoryLabel,
} from './calculations'
import { getVolumeBand, defaultCalculatorState, defaultAcquirers } from '../data/defaults'
import { INTERCHANGE, SCHEME_FEE } from '../data/interchange'
import type {
  Acquirer,
  AcquirerPricing,
  CurrentAgreement,
  PricingCategory,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import { PRICING_CATEGORIES } from '../types/calculator'

function mkAcquirer(id: string, name: string, markup: number, fixed = 0): Acquirer {
  const pricing = {} as AcquirerPricing
  for (const cat of PRICING_CATEGORIES) {
    pricing[cat] = {
      interchange: INTERCHANGE[cat],
      scheme: SCHEME_FEE[cat],
      markup,
      fixed,
    }
  }
  return { id, name, pricing }
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

const baseVolume: VolumeData = { annualVolume: 100_000_000, averageOrderValue: 500 }

function detailedCurrent(allIn: number, fixed = 0.2): CurrentAgreement {
  const detailed: Partial<Record<PricingCategory, { percent: number; fixed: number }>> = {}
  for (const cat of PRICING_CATEGORIES) detailed[cat] = { percent: allIn, fixed }
  return { mode: 'detailed', detailed }
}

describe('Affärsregel: routing får aldrig öka kostnaden', () => {
  it('routed ≤ current även när alla inlösare är dyrare än nuvarande', () => {
    const expensive = [mkAcquirer('a', 'Dyr A', 2.0), mkAcquirer('b', 'Dyr B', 3.0)]
    const current = detailedCurrent(0.6)
    const r = calculateResults(baseVolume, evenMix, expensive, current, 1, 0)
    expect(r.routedAnnualCost).toBeLessThanOrEqual(r.currentAnnualCost + 0.01)
    expect(r.split.net).toBeGreaterThanOrEqual(0)
    for (const c of r.categoryResults) {
      expect(c.routedCost).toBeLessThanOrEqual(c.currentCost + 0.01)
      expect(c.savings).toBeGreaterThanOrEqual(0)
    }
  })

  it('slumpscenarier: netto besparing alltid >= 0', () => {
    const markups = [0.05, 0.15, 0.3, 0.5, 0.8, 1.2, 1.8, 2.5]
    for (let i = 0; i < 30; i++) {
      const acquirers = [
        mkAcquirer('a', 'A', markups[(i + 1) % markups.length]),
        mkAcquirer('b', 'B', markups[(i + 3) % markups.length]),
      ]
      const current = detailedCurrent(markups[i % markups.length] + 0.2)
      const r = calculateResults(baseVolume, evenMix, acquirers, current, 0.8, 25_000)
      expect(r.split.net).toBeGreaterThanOrEqual(0)
      expect(r.routedAnnualCost).toBeLessThanOrEqual(r.currentAnnualCost + 0.01)
    }
  })

  it('tom inlösarlista: inget undantag, ingen negativ besparing', () => {
    const r = calculateResults(baseVolume, evenMix, [], detailedCurrent(0.6), 1, 0)
    expect(r.split.net).toBeGreaterThanOrEqual(0)
    expect(Number.isFinite(r.routedAnnualCost)).toBe(true)
  })

  it('nollvolym och AoV=0 hanteras säkert', () => {
    const r = calculateResults(
      { annualVolume: 0, averageOrderValue: 0 },
      evenMix,
      [mkAcquirer('a', 'A', 0.2)],
      detailedCurrent(0.6),
      1,
      0,
    )
    expect(Number.isNaN(r.split.net)).toBe(false)
    expect(r.split.net).toBeGreaterThanOrEqual(0)
  })
})

describe('Tredelad besparing: inköp vs routing', () => {
  it('en billigare inlösare ger procurement > 0, routing = 0', () => {
    // En inlösare som är billigare på alla kategorier → allt är inköpsbesparing.
    const cheap = mkAcquirer('cheap', 'Billig', 0.05)
    const current = detailedCurrent(2.0) // högre än acq på alla kategorier → allt är inköpsbesparing
    const r = calculateResults(baseVolume, evenMix, [cheap], current, 1, 0)
    expect(r.split.procurement).toBeGreaterThan(0)
    expect(r.split.routing).toBe(0)
  })

  it('två specialiserade inlösare ger routing > 0 utöver procurement', () => {
    // A är billigast på debit, B billigast på corporate/intl — routing ska addera värde.
    const aPricing = {} as AcquirerPricing
    const bPricing = {} as AcquirerPricing
    for (const cat of PRICING_CATEGORIES) {
      const cheap = cat === 'swedishDebit' || cat === 'swedishCredit'
      aPricing[cat] = { interchange: INTERCHANGE[cat], scheme: SCHEME_FEE[cat], markup: cheap ? 0.05 : 1.5, fixed: 0 }
      bPricing[cat] = { interchange: INTERCHANGE[cat], scheme: SCHEME_FEE[cat], markup: cheap ? 1.5 : 0.05, fixed: 0 }
    }
    const acquirers: Acquirer[] = [
      { id: 'a', name: 'A', pricing: aPricing },
      { id: 'b', name: 'B', pricing: bPricing },
    ]
    const current = detailedCurrent(1.0)
    const r = calculateResults(baseVolume, evenMix, acquirers, current, 1, 0)
    expect(r.split.routing).toBeGreaterThan(0)
    expect(r.split.procurement + r.split.routing - r.split.implementation).toBeCloseTo(r.split.net, 1)
  })

  it('implementation dras av från netto', () => {
    const cheap = mkAcquirer('cheap', 'Billig', 0.05)
    const r0 = calculateResults(baseVolume, evenMix, [cheap], detailedCurrent(0.6), 1, 0)
    const r1 = calculateResults(baseVolume, evenMix, [cheap], detailedCurrent(0.6), 1, 50_000)
    expect(r1.split.net).toBeLessThan(r0.split.net)
    expect(r1.split.implementation).toBe(50_000)
  })
})

describe('IC++ och volymband', () => {
  it('allInPercent = interchange + scheme + markup', () => {
    expect(allInPercent({ interchange: 0.2, scheme: 0.08, markup: 0.17 })).toBeCloseTo(0.45, 5)
  })

  it('större volym ger lägre markup → lägre kostnad', () => {
    const acq = mkAcquirer('a', 'A', 0.3)
    const current = detailedCurrent(1.5)
    const small = calculateResults({ annualVolume: 30_000_000, averageOrderValue: 500 }, evenMix, [acq], current, 1, 0)
    const large = calculateResults({ annualVolume: 2_000_000_000, averageOrderValue: 500 }, evenMix, [acq], current, 1, 0)
    expect(large.split.procurement).toBeGreaterThan(small.split.procurement)
  })

  it('scaleAcquirerPricing skalbar markup men behåller interchange/scheme', () => {
    const a = mkAcquirer('a', 'A', 0.4, 0.1)
    const scaled = scaleAcquirerPricing(a.pricing, 0.5)
    for (const cat of PRICING_CATEGORIES) {
      expect(scaled[cat].markup).toBeCloseTo(0.2, 5)
      expect(scaled[cat].interchange).toBe(a.pricing[cat].interchange)
      expect(scaled[cat].scheme).toBe(a.pricing[cat].scheme)
    }
  })

  it('volymband väljs korrekt', () => {
    expect(getVolumeBand(30_000_000).markupMultiplier).toBe(1.3)
    expect(getVolumeBand(250_000_000).markupMultiplier).toBe(1.0)
    expect(getVolumeBand(8_000_000_000).markupMultiplier).toBe(0.7)
  })
})

describe('Precision och intervall', () => {
  it('blended mode = låg precision, detailed = hög', () => {
    const blended: CurrentAgreement = { mode: 'blended', blended: { percent: 0.6, fixed: 0.2 } }
    const r1 = calculateResults(baseVolume, evenMix, defaultAcquirers, blended, 0.8, 0)
    expect(r1.precision).toBe('low')
    const r2 = calculateResults(baseVolume, evenMix, defaultAcquirers, detailedCurrent(0.6), 0.8, 0)
    expect(r2.precision).toBe('high')
  })

  it('intervall: low <= net <= high', () => {
    const r = calculateResults(baseVolume, evenMix, defaultAcquirers, detailedCurrent(0.6), 0.8, 0)
    expect(r.range.low).toBeLessThanOrEqual(r.split.net + 0.01)
    expect(r.split.net).toBeLessThanOrEqual(r.range.high + 0.01)
    expect(r.range.low).toBeLessThanOrEqual(r.range.high)
  })
})

describe('AoV-modell', () => {
  it('annual_transactions = revenue / AoV', () => {
    expect(getAnnualTransactions({ annualVolume: 100_000_000, averageOrderValue: 500 })).toBe(200_000)
  })
  it('AoV=0 → 0 transaktioner, ändlig kostnad', () => {
    expect(getAnnualTransactions({ annualVolume: 100_000_000, averageOrderValue: 0 })).toBe(0)
  })
})

describe('Standardscenario (demo)', () => {
  it('ger en trovärdig, positiv besparing med default-indata', () => {
    const s = defaultCalculatorState
    const r = calculateResults(s.volume, s.mix, s.acquirers, s.current, s.routableShare, s.implementationCostPerAcquirer)
    expect(r.split.net).toBeGreaterThan(0)
    expect(r.split.net).toBeLessThan(r.currentAnnualCost) // inte orimligt högt
    expect(r.percentSavings).toBeGreaterThan(0)
    expect(r.percentSavings).toBeLessThan(60)
    expect(r.split.procurement).toBeGreaterThanOrEqual(0)
    expect(r.split.routing).toBeGreaterThanOrEqual(0)
    // Kategorierna summerar inte över nuvarande
    expect(r.routedAnnualCost).toBeLessThanOrEqual(r.currentAnnualCost)
  })

  it('getCategoryShares kombinerar visa+mastercard debit', () => {
    const shares = getCategoryShares(evenMix)
    expect(shares.swedishDebit).toBeCloseTo(0.6, 2) // 40+20 av 100
    expect(shares.amex).toBeCloseTo(0.05, 2)
  })

  it('categoryLabel returnerar icke-tom sträng för alla kategorier', () => {
    for (const cat of PRICING_CATEGORIES) {
      expect(categoryLabel(cat).length).toBeGreaterThan(0)
    }
  })
})

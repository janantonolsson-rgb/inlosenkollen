import type {
  Acquirer,
  AcquirerPricing,
  CurrentAgreement,
  PricingCategory,
} from '../../types/calculator'
import { allInPercent } from '../calculations'

export const CURRENT_ACQUIRER_ID = 'current-acquirer'
export const CURRENT_ACQUIRER_NAME = 'Nuvarande inlösare'

export interface RoutingContext {
  pricingCategory: PricingCategory
  categoryVolume: number
  categoryTransactions: number
  acquirers: Acquirer[]
  /** Kundens nuvarande pris (per kategori om detailed, annars blended). */
  currentFee: { percent: number; fixed: number }
  /** Multiplikator på markup (från volymband). */
  markupMultiplier: number
}

export interface RoutingDecision {
  acquirerId: string
  acquirerName: string
  cost: number
  keptCurrent: boolean
}

/**
 * Affärsregel: intelligent routing får aldrig öka kundens kostnad. Nuvarande
 * pris är alltid en kandidat i MIN()-jämförelsen, så routed cost ≤ current cost
 * per kategori (och därmed totalt).
 */
export function routeCategory(ctx: RoutingContext): RoutingDecision {
  const currentCost =
    (ctx.categoryVolume * ctx.currentFee.percent) / 100 + ctx.categoryTransactions * ctx.currentFee.fixed

  let best: RoutingDecision = {
    acquirerId: CURRENT_ACQUIRER_ID,
    acquirerName: CURRENT_ACQUIRER_NAME,
    cost: Number.isFinite(currentCost) ? currentCost : Number.POSITIVE_INFINITY,
    keptCurrent: true,
  }

  for (const acquirer of ctx.acquirers) {
    const fee = acquirer.pricing[ctx.pricingCategory]
    if (!fee || !Number.isFinite(fee.markup) || fee.markup < 0) continue
    const pct = (allInPercent({
      interchange: fee.interchange,
      scheme: fee.scheme,
      markup: fee.markup * ctx.markupMultiplier,
    }) ) / 100
    const cost = ctx.categoryVolume * pct + ctx.categoryTransactions * fee.fixed
    if (Number.isFinite(cost) && cost < best.cost) {
      best = { acquirerId: acquirer.id, acquirerName: acquirer.name, cost, keptCurrent: false }
    }
  }

  if (!Number.isFinite(best.cost)) best.cost = 0
  return best
}

export function getCurrentFeeForCategory(
  current: CurrentAgreement,
  category: PricingCategory,
): { percent: number; fixed: number } {
  if (current.mode === 'detailed' && current.detailed?.[category]) {
    return current.detailed[category]!
  }
  return current.blended ?? { percent: 0, fixed: 0 }
}

/** Hjälp för tester: returnera skalad prissättning för en kategori. */
export function scaledFee(pricing: AcquirerPricing, category: PricingCategory, multiplier: number) {
  const f = pricing[category]
  return {
    interchange: f.interchange,
    scheme: f.scheme,
    markup: f.markup * multiplier,
    fixed: f.fixed,
  }
}

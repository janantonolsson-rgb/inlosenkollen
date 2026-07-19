import type { Acquirer, FeeStructure, MixCategory, PricingCategory } from '../../types/calculator'
import { calculateCategoryCost, getFeeForCategory } from '../calculations'

export interface RoutingContext {
  mixCategory: MixCategory
  pricingCategory: PricingCategory
  categoryVolume: number
  categoryTransactions: number
  acquirers: Acquirer[]
  /**
   * Kundens nuvarande, oförändrade pris. Detta MÅSTE alltid finnas med som ett
   * routingalternativ (affärsregel: intelligent routing får aldrig öka kostnaden).
   * Genom att alltid inkludera detta som en kandidat i MIN()-jämförelsen blir det
   * matematiskt omöjligt för routing_cost att bli högre än current_cost.
   */
  currentFee: FeeStructure
}

export interface RoutingDecision {
  acquirerId: string
  acquirerName: string
  cost: number
  ruleApplied: string
  /** true om det billigaste alternativet var att behålla nuvarande inlösare. */
  keptCurrent: boolean
}

export interface RoutingRule {
  id: string
  priority: number
  apply: (ctx: RoutingContext) => RoutingDecision | null
}

export const CURRENT_ACQUIRER_ID = 'current-acquirer'
export const CURRENT_ACQUIRER_NAME = 'Nuvarande inlösare (oförändrat)'

/**
 * Returnerar en säker, ändlig kostnad för en given avgiftsstruktur.
 * Om priset saknas, är NaN, eller negativt (korrupt/felaktig data) returneras
 * Infinity så att alternativet aldrig kan väljas som "billigast" av misstag —
 * hellre utesluta ett misstänkt pris än att råka rekommendera en dyrare inlösare.
 */
function safeCategoryCost(
  volume: number,
  transactions: number,
  fee: FeeStructure | undefined | null,
): number {
  if (
    !fee ||
    typeof fee.percent !== 'number' ||
    typeof fee.fixed !== 'number' ||
    Number.isNaN(fee.percent) ||
    Number.isNaN(fee.fixed) ||
    fee.percent < 0 ||
    fee.fixed < 0
  ) {
    return Number.POSITIVE_INFINITY
  }
  const cost = calculateCategoryCost(volume, transactions, fee)
  return Number.isFinite(cost) ? cost : Number.POSITIVE_INFINITY
}

/**
 * Default rule: route to the cheapest option for this category, where the
 * candidates are every konfigurerad inlösare PLUS kundens nuvarande pris.
 * Eftersom nuvarande pris alltid är en kandidat kan resultatet aldrig bli dyrare
 * än att stå kvar hos nuvarande inlösare.
 */
export const lowestCostRule: RoutingRule = {
  id: 'lowest-cost',
  priority: 100,
  apply(ctx: RoutingContext): RoutingDecision | null {
    const currentCost = safeCategoryCost(ctx.categoryVolume, ctx.categoryTransactions, ctx.currentFee)

    let best: RoutingDecision = {
      acquirerId: CURRENT_ACQUIRER_ID,
      acquirerName: CURRENT_ACQUIRER_NAME,
      cost: currentCost,
      ruleApplied: 'lowest-cost',
      keptCurrent: true,
    }

    for (const acquirer of ctx.acquirers) {
      const fee = getFeeForCategory(acquirer, ctx.pricingCategory)
      const cost = safeCategoryCost(ctx.categoryVolume, ctx.categoryTransactions, fee)

      if (cost < best.cost) {
        best = {
          acquirerId: acquirer.id,
          acquirerName: acquirer.name,
          cost,
          ruleApplied: 'lowest-cost',
          keptCurrent: false,
        }
      }
    }

    return best
  },
}

export const defaultRoutingRules: RoutingRule[] = [lowestCostRule]

export function routeTransaction(
  ctx: RoutingContext,
  rules: RoutingRule[] = defaultRoutingRules,
): RoutingDecision {
  const sortedRules = [...rules].sort((a, b) => a.priority - b.priority)

  for (const rule of sortedRules) {
    const decision = rule.apply(ctx)
    if (decision) return decision
  }

  throw new Error('No routing rule could determine an acquirer')
}

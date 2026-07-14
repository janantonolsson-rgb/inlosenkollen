import type { Acquirer, MixCategory, PricingCategory } from '../../types/calculator'
import { calculateCategoryCost, getFeeForCategory } from '../calculations'

export interface RoutingContext {
  mixCategory: MixCategory
  pricingCategory: PricingCategory
  categoryVolume: number
  categoryTransactions: number
  acquirers: Acquirer[]
}

export interface RoutingDecision {
  acquirerId: string
  acquirerName: string
  cost: number
  ruleApplied: string
}

export interface RoutingRule {
  id: string
  priority: number
  apply: (ctx: RoutingContext) => RoutingDecision | null
}

/**
 * Default rule: route to the acquirer with the lowest calculated cost.
 * Future rules can be added with higher priority, e.g.:
 * - approvalRateRule: prefer acquirer with highest approval rate above threshold
 * - preferredAcquirerRule: prioritize a specific acquirer when costs are within tolerance
 * - failoverRule: ensure redundancy by limiting max share per acquirer
 * - maxShareRule: cap volume routed to a single acquirer
 * - countryRule: route based on card issuing country
 * - cardTypeRule: route based on card type (debit/credit/prepaid)
 * - amountRule: route based on transaction amount tiers
 * - storeRule: route based on store or market
 */
export const lowestCostRule: RoutingRule = {
  id: 'lowest-cost',
  priority: 100,
  apply(ctx: RoutingContext): RoutingDecision | null {
    if (ctx.acquirers.length === 0) return null

    let best: RoutingDecision | null = null

    for (const acquirer of ctx.acquirers) {
      const fee = getFeeForCategory(acquirer, ctx.pricingCategory)
      const cost = calculateCategoryCost(
        ctx.categoryVolume,
        ctx.categoryTransactions,
        fee,
      )

      if (!best || cost < best.cost) {
        best = {
          acquirerId: acquirer.id,
          acquirerName: acquirer.name,
          cost,
          ruleApplied: 'lowest-cost',
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

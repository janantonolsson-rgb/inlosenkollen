import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from 'react'
import { calculateResults } from '../lib/calculations'
import type {
  AcquirerPricing,
  CalculationResult,
  CalculatorState,
  MixCategory,
  PricingMode,
  TransactionMix,
  VolumeData,
} from '../types/calculator'
import { getCatalogAcquirer } from '../data/acquirerCatalog'
import {
  createAcquirer,
  createAcquirerFromCatalog,
  defaultCalculatorState,
  exampleMix,
} from '../data/defaults'

type Action =
  | { type: 'SET_VOLUME'; payload: Partial<VolumeData> }
  | { type: 'SET_MIX'; payload: Partial<TransactionMix> }
  | { type: 'SET_MIX_CATEGORY'; payload: { category: MixCategory; value: number } }
  | { type: 'APPLY_EXAMPLE_MIX' }
  | { type: 'SET_PRICING_MODE'; payload: PricingMode }
  | { type: 'ADD_ACQUIRER' }
  | { type: 'REMOVE_ACQUIRER'; payload: string }
  | { type: 'UPDATE_ACQUIRER_NAME'; payload: { id: string; name: string } }
  | {
      type: 'UPDATE_ACQUIRER_PRICING'
      payload: {
        id: string
        category: keyof AcquirerPricing
        field: 'percent' | 'fixed'
        value: number
      }
    }
  | { type: 'IMPORT_CATALOG_ACQUIRER'; payload: string }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SHOW_RESULTS'; payload: boolean }
  | { type: 'RESET' }

function reducer(state: CalculatorState, action: Action): CalculatorState {
  switch (action.type) {
    case 'SET_VOLUME':
      return { ...state, volume: { ...state.volume, ...action.payload } }
    case 'SET_MIX':
      return { ...state, mix: { ...state.mix, ...action.payload } }
    case 'SET_MIX_CATEGORY':
      return {
        ...state,
        mix: { ...state.mix, [action.payload.category]: action.payload.value },
      }
    case 'APPLY_EXAMPLE_MIX':
      return { ...state, mix: { ...exampleMix } }
    case 'SET_PRICING_MODE':
      return { ...state, pricingMode: action.payload }
    case 'IMPORT_CATALOG_ACQUIRER': {
      const entry = getCatalogAcquirer(action.payload)
      if (!entry) return state
      if (state.acquirers.some((a) => a.catalogId === entry.id)) return state
      return {
        ...state,
        acquirers: [...state.acquirers, createAcquirerFromCatalog(entry)],
      }
    }
    case 'ADD_ACQUIRER': {
      const count = state.acquirers.filter((a) => !a.catalogId).length + 1
      return {
        ...state,
        acquirers: [...state.acquirers, createAcquirer(`Ny inlösare ${count}`)],
      }
    }
    case 'REMOVE_ACQUIRER':
      if (state.acquirers.length <= 1) return state
      return {
        ...state,
        acquirers: state.acquirers.filter((a) => a.id !== action.payload),
      }
    case 'UPDATE_ACQUIRER_NAME':
      return {
        ...state,
        acquirers: state.acquirers.map((a) =>
          a.id === action.payload.id ? { ...a, name: action.payload.name } : a,
        ),
      }
    case 'UPDATE_ACQUIRER_PRICING':
      return {
        ...state,
        acquirers: state.acquirers.map((a) => {
          if (a.id !== action.payload.id) return a
          return {
            ...a,
            pricing: {
              ...a.pricing,
              [action.payload.category]: {
                ...a.pricing[action.payload.category],
                [action.payload.field]: action.payload.value,
              },
            },
          }
        }),
      }
    case 'SET_STEP':
      return { ...state, currentStep: action.payload }
    case 'SHOW_RESULTS':
      return { ...state, showResults: action.payload }
    case 'RESET':
      return { ...defaultCalculatorState }
    default:
      return state
  }
}

interface CalculatorContextValue {
  state: CalculatorState
  dispatch: Dispatch<Action>
  results: CalculationResult
}

const CalculatorContext = createContext<CalculatorContextValue | null>(null)

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultCalculatorState)

  const results = useMemo(
    () =>
      calculateResults(
        state.volume,
        state.mix,
        state.acquirers,
        state.pricingMode,
      ),
    [state.volume, state.mix, state.acquirers, state.pricingMode],
  )

  return (
    <CalculatorContext.Provider value={{ state, dispatch, results }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalculator() {
  const ctx = useContext(CalculatorContext)
  if (!ctx) {
    throw new Error('useCalculator must be used within CalculatorProvider')
  }
  return ctx
}

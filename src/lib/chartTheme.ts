export const chartColors = {
  current: '#94a3b8',
  routed: '#863bff',
  savings: '#0d7c4e',
  palette: ['#863bff', '#0d7c4e', '#0f172a', '#64748b', '#a366ff'],
} as const

export const chartAxis = {
  tick: { fill: '#64748b', fontSize: 12 },
  grid: { stroke: '#f1f5f9', strokeDasharray: '3 3' },
} as const

export const chartTooltipStyle = {
  borderRadius: 12,
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 6px -1px rgb(15 23 42 / 0.06)',
  fontSize: 13,
} as const

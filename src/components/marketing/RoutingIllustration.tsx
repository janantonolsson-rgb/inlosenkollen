export function RoutingIllustration() {
  const cardSources = [
    { label: 'Visa', sub: 'Debit', y: 48 },
    { label: 'Mastercard', sub: 'Debit', y: 118 },
    { label: 'Amex', sub: '', y: 188 },
    { label: 'Internationellt', sub: 'kort', y: 258 },
  ]

  const acquirers = [
    { y: 72, title: 'Inlösare A', subtitle: 'Svenska debitkort', lineY: 94 },
    { y: 168, title: 'Inlösare B', subtitle: 'American Express', lineY: 190 },
    { y: 264, title: 'Inlösare C', subtitle: 'Internationella kort', lineY: 286 },
  ]

  return (
    <svg
      viewBox="0 0 620 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      aria-label="Illustration av intelligent routing: betalningar från olika kortnätverk skickas till olika kortinlösare"
      role="img"
    >
      <defs>
        <radialGradient id="hub-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(310 170) scale(80)">
          <stop stopColor="#863BFF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#863BFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="310" cy="170" r="80" fill="url(#hub-glow)" />

      <text x="80" y="28" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="500" letterSpacing="0.08em">
        KORTTYP
      </text>
      <text x="310" y="28" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="500" letterSpacing="0.08em">
        ROUTING
      </text>
      <text x="500" y="28" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="500" letterSpacing="0.08em">
        INLÖSARE
      </text>

      {cardSources.map((card, i) => (
        <g key={card.label}>
          <rect
            x="8"
            y={card.y}
            width="144"
            height="52"
            rx="10"
            fill="#0F172A"
            fillOpacity={0.9 - i * 0.04}
          />
          <text
            x="80"
            y={card.y + (card.sub ? 26 : 32)}
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="500"
          >
            {card.label}
          </text>
          {card.sub && (
            <text x="80" y={card.y + 42} textAnchor="middle" fill="white" fillOpacity="0.65" fontSize="10">
              {card.sub}
            </text>
          )}
        </g>
      ))}

      <circle cx="310" cy="170" r="36" fill="#EDE6FF" fillOpacity="0.6" />
      <circle cx="310" cy="170" r="26" fill="#863BFF" />
      <text x="310" y="166" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">
        Intelligent
      </text>
      <text x="310" y="178" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">
        routing
      </text>

      {acquirers.map((acq) => (
        <g key={acq.title}>
          <rect
            x="428"
            y={acq.y}
            width="184"
            height="56"
            rx="10"
            fill="white"
            fillOpacity="0.7"
            stroke="#E2E8F0"
            strokeWidth="1"
          />
          <text x="520" y={acq.lineY} textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="500">
            {acq.title}
          </text>
          <text x="520" y={acq.lineY + 16} textAnchor="middle" fill="#64748B" fontSize="10">
            {acq.subtitle}
          </text>
        </g>
      ))}

      <path d="M152 74 C220 74, 260 140, 284 170" stroke="#863BFF" strokeWidth="1.25" strokeDasharray="4 4" opacity="0.35" />
      <path d="M152 144 C220 144, 260 160, 284 170" stroke="#863BFF" strokeWidth="1.25" strokeDasharray="4 4" opacity="0.35" />
      <path d="M152 214 C220 214, 260 175, 284 170" stroke="#863BFF" strokeWidth="1.25" strokeDasharray="4 4" opacity="0.35" />
      <path d="M152 284 C220 284, 260 190, 284 170" stroke="#863BFF" strokeWidth="1.25" strokeDasharray="4 4" opacity="0.35" />

      <path d="M336 156 C380 120, 410 100, 428 100" stroke="#0D7C4E" strokeWidth="1.5" opacity="0.7" />
      <path d="M336 170 C390 170, 415 196, 428 196" stroke="#0D7C4E" strokeWidth="1.5" opacity="0.7" />
      <path d="M336 184 C380 220, 410 292, 428 292" stroke="#0D7C4E" strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}

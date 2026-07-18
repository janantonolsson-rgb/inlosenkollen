// Vercel Serverless Function (Node.js runtime).
// Tar emot inskickade formulär (lead-formuläret och känslighets-/kalkylator-formulären)
// och skickar dem som e-post till Westpay via Resend (https://resend.com).
//
// SETUP KRÄVS I VERCEL (görs en gång):
// 1. Skapa ett gratis konto på https://resend.com
// 2. Skapa en API-nyckel under "API Keys"
// 3. I Vercel-projektet: Settings -> Environment Variables
//    Lägg till RESEND_API_KEY = din nyckel (för Production, Preview och Development)
// 4. (Rekommenderas) Verifiera en avsändardomän hos Resend, t.ex. mail.westpay.se,
//    och byt ut FROM_ADDRESS nedan mot en adress på den domänen.
//    Utan verifierad domän går det fortfarande att skicka, men avsändaren blir
//    onboarding@resend.dev, vilket kan hamna i skräppost.

const TO_ADDRESS = 'Anton.Olsson@westpay.se'
const FROM_ADDRESS = 'Inlösenkollen <onboarding@resend.dev>'

interface VercelLikeRequest {
  method?: string
  body?: unknown
}

interface VercelLikeResponse {
  status: (code: number) => VercelLikeResponse
  json: (body: unknown) => void
  end: () => void
  setHeader: (name: string, value: string) => void
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY saknas i miljövariablerna.')
    res.status(500).json({
      error:
        'E-postutskick är inte konfigurerat än. Lägg till RESEND_API_KEY i projektets miljövariabler på Vercel.',
    })
    return
  }

  const data = (req.body ?? {}) as Record<string, unknown>
  const formName = typeof data.formName === 'string' ? data.formName : 'Formulär'

  const rows = Object.entries(data)
    .filter(([key]) => key !== 'formName')
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(
          key,
        )}</td><td style="padding:4px 0;font-size:14px;color:#0f172a">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const html = `
    <div style="font-family:sans-serif;max-width:560px">
      <h2 style="color:#0f172a">Ny förfrågan: ${escapeHtml(formName)}</h2>
      <table>${rows}</table>
      <p style="color:#94a3b8;font-size:12px;margin-top:24px">Skickat från Inlösenkollen</p>
    </div>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        subject: `Ny förfrågan via Inlösenkollen – ${formName}`,
        html,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Resend API error:', errorText)
      res.status(502).json({ error: 'Kunde inte skicka e-post just nu. Försök igen senare.' })
      return
    }

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Fel vid e-postutskick:', err)
    res.status(500).json({ error: 'Något gick fel. Försök igen senare.' })
  }
}

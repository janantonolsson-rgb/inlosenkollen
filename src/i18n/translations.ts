export type Language = 'sv' | 'en'

export interface TranslationDict {
  nav: { home: string; howItWorks: string; calculator: string; contact: string; headerContact: string }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    footnote: string
    trust1: string
    trust2: string
    trust3: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    intro: string
    step1Title: string
    step1Body: string
    step2Title: string
    step2Body: string
    step3Title: string
    step3Body: string
    ctaButton: string
  }
  trust: { title: string; body: string }
  calculator: {
    sectionTitle: string
    sectionDescription: string
    step1Title: string
    step1Description: string
    annualVolume: string
    averageOrderValue: string
    annualTransactionsComputed: string
    volumeBandLabel: string
    aovHint: string
    step2Title: string
    step2Description: string
    mixGroupSwedish: string
    mixGroupInternational: string
    totalShareLabel: string
    step3Title: string
    step3Description: string
    currentModeTitle: string
    currentModeBlended: string
    currentModeBlendedDesc: string
    currentModeDetailed: string
    currentModeDetailedDesc: string
    currentPercentLabel: string
    currentFixedLabel: string
    currentPercentHint: string
    currentTableHint: string
    cardTypeColumn: string
    percentColumn: string
    fixedFeeColumn: string
    acquirersTitle: string
    acquirersDescription: string
    ctaCalculate: string
    routableShareLabel: string
    routableShareHint: string
    implCostLabel: string
    implCostHint: string
    useExampleData: string
  }
  results: {
    eyebrow: string
    title: string
    description: string
    savingsRangeLabel: string
    savingsPointLabel: string
    percentLabel: string
    precisionLow: string
    precisionHigh: string
    metricCurrent: string
    metricBestSingle: string
    metricRouted: string
    splitTitle: string
    splitProcurement: string
    splitRouting: string
    splitImplementation: string
    splitNet: string
    splitProcurementDesc: string
    splitRoutingDesc: string
    splitImplementationDesc: string
    routingTableTitle: string
    routingTableSubtitle: string
    colCategory: string
    colVolume: string
    colCurrent: string
    colAcquirer: string
    colNewCost: string
    colSavings: string
    keptCurrent: string
    savingsOverTime: string
    year1: string
    year3: string
    flowsTitle: string
    flowsSubtitle: string
    noAcquirersTitle: string
    noAcquirersBody: string
  }
  methodology: {
    title: string
    intro: string
    point1: string
    point2: string
    point3: string
    point4: string
    point5: string
    rangeNote: string
  }
  catalog: {
    title: string
    intro: string
    partnerNote: string
    colAcquirer: string
    colType: string
    colPrice: string
    colConfidence: string
    colSource: string
    typeAcquirer: string
    typePsp: string
    confConfirmed: string
    confPublished: string
    confEstimate: string
    confUnverified: string
  }
  leadForm: {
    title: string
    description: string
    nameLabel: string
    emailLabel: string
    orgNumberLabel: string
    orgNumberPlaceholder: string
    annualVolumeApproxLabel: string
    annualVolumeApproxPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    consentText: string
    submit: string
    submitting: string
    thanksTitle: string
    thanksBody: string
    sendAnother: string
  }
  footer: { description: string; rights: string; developedBy: string }
  disclaimer: string
  languageNames: { sv: string; en: string }
}

const sv: TranslationDict = {
  nav: {
    home: 'Hem',
    howItWorks: 'Så fungerar det',
    calculator: 'Kalkylator',
    contact: 'Kontakt',
    headerContact: 'Kontakta oss',
  },
  hero: {
    eyebrow: 'Intelligent betalningsrouting',
    title: 'Betalar ni för mycket för era korttransaktioner?',
    subtitle:
      'Oberoende analys av era kortinlösenkostnader — nedbrutet på interchange, scheme fees och acquirer-markup. Se om intelligent routing kan minska era kostnader genom att styra varje transaktion till rätt inlösare.',
    ctaPrimary: 'Se hur mycket ni kan spara',
    ctaSecondary: 'Hur fungerar intelligent routing?',
    footnote:
      'Inlösenkollen hjälper nordiska företag att förstå och minska sina kostnader för kortbetalningar. Priserna är estimat — verkliga priser beror på förhandling och Westpays partneravtal.',
    trust1: 'IC++-nedbrytning: interchange, scheme, markup',
    trust2: 'Besparing som intervall, inte en falsk exakt siffra',
    trust3: 'Konfidensgrad på varje pris',
  },
  howItWorks: {
    eyebrow: 'Så fungerar det',
    title: 'Hur skapar intelligent routing värde?',
    intro:
      'Intelligent routing analyserar varje transaktion och väljer det inlösenavtal som ger lägst totalkostnad — baserat på interchange, scheme fees, acquirer-markup och era avtal.',
    step1Title: '1. Kartlägg nuvarande kostnad',
    step1Body:
      'Ange er volym, kortmix och nuvarande priser — gärna per korttyp. Vi bryter ner kostnaden i interchange, scheme fees och acquirer-markup så att ni ser var pengarna går.',
    step2Title: '2. Jämför mot flera inlösare',
    step2Body:
      'Vi jämför ert nuvarande avtal mot etablerade inlösare och Westpays partneravtal, skalat efter er volym. Större volymer ger lägre markup.',
    step3Title: '3. Routing per transaktion',
    step3Body:
      'Varje transaktionstyp styrs till den inlösare som ger lägst kostnad. Vi skiljer inköpsbesparing (byt/omförhandla) från äkta routingbesparing (flera inlösare).',
    ctaButton: 'Prova kalkylatorn',
  },
  trust: {
    title: 'Oberoende jämförelse',
    body:
      'Inlösenkollen erbjuder inga egna inlösenavtal. Tjänsten skapar transparens kring vad som är reglerat (interchange, scheme) och vad som är förhandlingsbart (markup), så att ni får bättre förutsättningar — oavsett vilka avtal ni väljer.',
  },
  calculator: {
    sectionTitle: 'Beräkna er möjliga besparing',
    sectionDescription:
      'Ange era uppgifter nedan. Ju mer detaljerat ni anger nuvarande avtal, desto skarpare resultat. Alla siffror är uppskattningar.',
    step1Title: 'Steg 1: Volym och kortmix',
    step1Description: 'Ange er årliga kortomsättning och genomsnittligt ordervärde.',
    annualVolume: 'Total kortomsättning per år',
    averageOrderValue: 'Genomsnittligt ordervärde (AoV)',
    annualTransactionsComputed: 'Antal transaktioner per år (beräknas automatiskt)',
    volumeBandLabel: 'Volymband',
    aovHint: 'Genomsnittligt belopp per kortköp. De flesta känner till detta bättre än exakt antal transaktioner.',
    step2Title: 'Steg 2: Kortmix',
    step2Description: 'Fördelning av korttyper i procent. Standard är genomsnittlig svensk kortmix.',
    mixGroupSwedish: 'Svenska kort',
    mixGroupInternational: 'EU och internationellt',
    totalShareLabel: 'Total',
    step3Title: 'Steg 3: Nuvarande avtal och inlösare',
    step3Description: 'Ange ert nuvarande avtal och välj vilka inlösare ni vill jämföra med.',
    currentModeTitle: 'Nuvarande avtal',
    currentModeBlended: 'Blended snittpris',
    currentModeBlendedDesc: 'Jag känner bara till mitt ungefärliga genomsnittspris',
    currentModeDetailed: 'Detaljerat per korttyp',
    currentModeDetailedDesc: 'Jag anger mitt pris per korttyp (ger skarpare, trovärdigare resultat)',
    currentPercentLabel: 'Nuvarande procentsats',
    currentFixedLabel: 'Fast avgift per transaktion',
    currentPercentHint: 'Den viktigaste siffran — de flesta känner till ungefär denna procentsats.',
    currentTableHint: 'Ange ert faktiska all-i-pris per korttyp. Verkligt pris ger trovärdig besparing.',
    cardTypeColumn: 'Korttyp',
    percentColumn: 'All-i %',
    fixedFeeColumn: 'Fast kr',
    acquirersTitle: 'Inlösare att jämföra',
    acquirersDescription: 'Markera de inlösare ni vill inkludera i routinganalysen.',
    ctaCalculate: 'Beräkna besparing',
    routableShareLabel: 'Andel volym som är routningsbar',
    routableShareHint: 'Inte alla transaktioner kan alltid styras till valfri inlösare. 80 % är en försiktig normal.',
    implCostLabel: 'Implementeringskostnad per ny inlösarkoppling (kr/år)',
    implCostHint: 'Uppskattad årlig kostnad för integration, terminaler och avstämning per extra inlösare.',
    useExampleData: 'Använd exempeldata',
  },
  results: {
    eyebrow: 'Resultat',
    title: 'Er uppskattade besparing',
    description: 'Resultat baserat på angivna priser och volymer. Alla siffror är uppskattningar.',
    savingsRangeLabel: 'Troligt intervall per år',
    savingsPointLabel: 'Vid vald routningsbar andel',
    percentLabel: 'kostnadsminskning',
    precisionLow: 'Låg precision — ange detaljerade nuvarande priser för ett skarpare resultat',
    precisionHigh: 'Hög precision — baserat på detaljerade nuvarande priser',
    metricCurrent: 'Nuvarande kostnad/år',
    metricBestSingle: 'Bästa enskilda inlösare',
    metricRouted: 'Med intelligent routing',
    splitTitle: 'Var kommer besparingen ifrån?',
    splitProcurement: 'Inköpsbesparing',
    splitRouting: 'Äkta routingbesparing',
    splitImplementation: 'Implementeringskostnad',
    splitNet: 'Nettobesparing',
    splitProcurementDesc: 'Vinst av att byta till eller omförhandla med den bästa enskilda inlösaren.',
    splitRoutingDesc: 'Ytterligare vinst av att använda flera inlösare parallellt.',
    splitImplementationDesc: 'Uppskattad kostnad för extra inlösarkopplingar (integration, avstämning).',
    routingTableTitle: 'Rekommenderad routing per korttyp',
    routingTableSubtitle: 'Varje korttyp styrs till det alternativ som ger lägst kostnad — aldrig dyrare än nuvarande.',
    colCategory: 'Korttyp',
    colVolume: 'Årlig volym',
    colCurrent: 'Nuvarande kostnad',
    colAcquirer: 'Rekommenderad inlösare',
    colNewCost: 'Ny kostnad',
    colSavings: 'Besparing',
    keptCurrent: 'behåll nuvarande',
    savingsOverTime: 'Ackumulerad besparing',
    year1: '1 år',
    year3: '3 år',
    flowsTitle: 'Vart routas volymen?',
    flowsSubtitle: 'Hur er kortvolym fördelas mellan inlösare vid optimal routing.',
    noAcquirersTitle: 'Välj minst en inlösare',
    noAcquirersBody: 'Markera inlösare i steg 3 för att se en routinganalys.',
  },
  methodology: {
    title: 'Så räknar vi',
    intro: 'Inlösenkollen använder en IC++-modell (interchange + scheme + markup) för trovärdighet:',
    point1: 'Interchange och scheme fees är reglerade/schablon och i stort lika för alla inlösare — de är inte vad ni förhandlar om.',
    point2: 'Acquirer-markup är det förhandlingsbara, och skalas ner med er volym (större volym → lägre markup).',
    point3: 'Vi skiljer inköpsbesparing (byt/omförhandla) från äkta routingbesparing (flera inlösare) och visar båda öppet.',
    point4: 'Routing kan aldrig öka er kostnad — om ingen inlösare är billigare behålls nuvarande pris för den kategorin.',
    point5: 'Priserna är estimat med konfidensgrad. Endast Elavons partnervillkor via Westpay är bekräftat.',
    rangeNote: 'Besparingen visas som ett intervall beroende på hur stor andel av volymen som är routningsbar (60–100 %). Faktisk besparing beror på förhandling och teknisk uppsättning.',
  },
  catalog: {
    title: 'Acquirerkatalog',
    intro:
      'Etablerade inlösare och PSP:er. All-i-pris = interchange + scheme + markup. Priserna är illustrationer med konfidensgrad — inte garanti för ert avtal.',
    partnerNote: 'Westpays partneravtal med Elavon är det enda bekräftade priset i katalogen.',
    colAcquirer: 'Inlösare',
    colType: 'Typ',
    colPrice: 'All-i-pris debit',
    colConfidence: 'Konfidens',
    colSource: 'Källa',
    typeAcquirer: 'Inlösare',
    typePsp: 'PSP',
    confConfirmed: 'Bekräftat',
    confPublished: 'Publikt listpris',
    confEstimate: 'Uppskattning',
    confUnverified: 'Ej verifierat',
  },
  leadForm: {
    title: 'Vill ni veta er exakta potential?',
    description:
      'Skicka in era uppgifter så gör vi en kostnadsfri genomgång och jämför med Westpays partneravtal.',
    nameLabel: 'Namn',
    emailLabel: 'E-post',
    orgNumberLabel: 'Organisationsnummer',
    orgNumberPlaceholder: 't.ex. 556677-8899',
    annualVolumeApproxLabel: 'Ungefärlig kortomsättning/år',
    annualVolumeApproxPlaceholder: 't.ex. 250 M kr',
    messageLabel: 'Meddelande',
    messagePlaceholder: 'Berätta gärna om er nuvarande inlösare och uppsättning...',
    consentText: 'Jag godkänner att mina personuppgifter behandlas för att kontakta mig.',
    submit: 'Skicka förfrågan',
    submitting: 'Skickar...',
    thanksTitle: 'Tack för er förfrågan!',
    thanksBody: 'Vi återkommer inom kort för att boka en kostnadsfri analys.',
    sendAnother: 'Skicka ny förfrågan',
  },
  footer: {
    description: 'Inlösenkollen — oberoende information om intelligent betalningsrouting för nordiska företag.',
    rights: 'Alla rättigheter förbehållna.',
    developedBy: 'Utvecklad av Anton Olsson.',
  },
  disclaimer:
    'Beräkningen är en uppskattning baserad på angivna uppgifter och illustrativa priser. Faktiska kostnader och besparingar varierar med kortmix, interchange, scheme fees, markup, inlösenavtal, valutaväxling, minimikostnader, teknisk uppsättning och routningsbar andel. Utgör inte erbjudande eller garanti för ett visst pris eller en viss besparing.',
  languageNames: { sv: 'Svenska', en: 'English' },
}

const en: TranslationDict = {
  nav: {
    home: 'Home',
    howItWorks: 'How it works',
    calculator: 'Calculator',
    contact: 'Contact',
    headerContact: 'Contact us',
  },
  hero: {
    eyebrow: 'Intelligent payment routing',
    title: 'Are you overpaying on your card transactions?',
    subtitle:
      'Independent analysis of your card acquiring costs — broken down into interchange, scheme fees and acquirer markup. See if intelligent routing can cut costs by sending each transaction to the right acquirer.',
    ctaPrimary: 'See how much you could save',
    ctaSecondary: 'How does intelligent routing work?',
    footnote:
      'Inlösenkollen helps Nordic companies understand and reduce card payment costs. Prices are estimates — actual prices depend on negotiation and Westpay’s partner agreement.',
    trust1: 'IC++ breakdown: interchange, scheme, markup',
    trust2: 'Savings shown as a range, not a false exact number',
    trust3: 'Confidence level on every price',
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'How does intelligent routing create value?',
    intro:
      'Intelligent routing analyzes every transaction and selects the acquiring agreement with the lowest total cost — based on interchange, scheme fees, acquirer markup and your agreements.',
    step1Title: '1. Map current cost',
    step1Body:
      'Enter your volume, card mix and current prices — ideally per card type. We break the cost into interchange, scheme fees and acquirer markup so you see where the money goes.',
    step2Title: '2. Compare multiple acquirers',
    step2Body:
      'We compare your current agreement against established acquirers and Westpay’s partner agreement, scaled to your volume. Larger volumes mean lower markup.',
    step3Title: '3. Route per transaction',
    step3Body:
      'Each card type is routed to the lowest-cost acquirer. We separate procurement savings (switch/renegotiate) from true routing savings (multiple acquirers).',
    ctaButton: 'Try the calculator',
  },
  trust: {
    title: 'Independent comparison',
    body:
      'Inlösenkollen offers no acquiring agreements of its own. It creates transparency around what is regulated (interchange, scheme) and what is negotiable (markup), so you get better conditions — regardless of which agreements you choose.',
  },
  calculator: {
    sectionTitle: 'Calculate your potential savings',
    sectionDescription:
      'Enter your details below. The more granular your current pricing, the sharper the result. All figures are estimates.',
    step1Title: 'Step 1: Volume and card mix',
    step1Description: 'Enter your annual card turnover and average order value.',
    annualVolume: 'Total card turnover per year',
    averageOrderValue: 'Average Order Value (AoV)',
    annualTransactionsComputed: 'Transactions per year (calculated automatically)',
    volumeBandLabel: 'Volume band',
    aovHint: 'Average amount per card purchase. Most people know this better than exact transaction counts.',
    step2Title: 'Step 2: Card mix',
    step2Description: 'Distribution of card types in percent. Default is the average Swedish card mix.',
    mixGroupSwedish: 'Swedish cards',
    mixGroupInternational: 'EU and international',
    totalShareLabel: 'Total',
    step3Title: 'Step 3: Current agreement and acquirers',
    step3Description: 'Enter your current agreement and choose which acquirers to compare with.',
    currentModeTitle: 'Current agreement',
    currentModeBlended: 'Blended average rate',
    currentModeBlendedDesc: 'I only know my approximate average rate',
    currentModeDetailed: 'Detailed per card type',
    currentModeDetailedDesc: 'I enter my price per card type (sharper, more credible result)',
    currentPercentLabel: 'Current percentage rate',
    currentFixedLabel: 'Fixed fee per transaction',
    currentPercentHint: 'The most important figure — most people know this rate approximately.',
    currentTableHint: 'Enter your actual all-in price per card type. Real prices give a credible saving.',
    cardTypeColumn: 'Card type',
    percentColumn: 'All-in %',
    fixedFeeColumn: 'Fixed kr',
    acquirersTitle: 'Acquirers to compare',
    acquirersDescription: 'Select the acquirers to include in the routing analysis.',
    ctaCalculate: 'Calculate savings',
    routableShareLabel: 'Share of volume that is routable',
    routableShareHint: 'Not every transaction can always be sent to any acquirer. 80% is a conservative default.',
    implCostLabel: 'Implementation cost per new acquirer connection (kr/year)',
    implCostHint: 'Estimated annual cost for integration, terminals and reconciliation per extra acquirer.',
    useExampleData: 'Use example data',
  },
  results: {
    eyebrow: 'Results',
    title: 'Your estimated savings',
    description: 'Results based on the prices and volumes provided. All figures are estimates.',
    savingsRangeLabel: 'Likely range per year',
    savingsPointLabel: 'At selected routable share',
    percentLabel: 'cost reduction',
    precisionLow: 'Low precision — enter detailed current prices for a sharper result',
    precisionHigh: 'High precision — based on detailed current prices',
    metricCurrent: 'Current cost/year',
    metricBestSingle: 'Best single acquirer',
    metricRouted: 'With intelligent routing',
    splitTitle: 'Where do the savings come from?',
    splitProcurement: 'Procurement saving',
    splitRouting: 'True routing saving',
    splitImplementation: 'Implementation cost',
    splitNet: 'Net saving',
    splitProcurementDesc: 'Gain from switching to or renegotiating with the best single acquirer.',
    splitRoutingDesc: 'Additional gain from using multiple acquirers in parallel.',
    splitImplementationDesc: 'Estimated cost of extra acquirer connections (integration, reconciliation).',
    routingTableTitle: 'Recommended routing per card type',
    routingTableSubtitle: 'Each card type is routed to the lowest-cost option — never more than current.',
    colCategory: 'Card type',
    colVolume: 'Annual volume',
    colCurrent: 'Current cost',
    colAcquirer: 'Recommended acquirer',
    colNewCost: 'New cost',
    colSavings: 'Savings',
    keptCurrent: 'keep current',
    savingsOverTime: 'Accumulated savings',
    year1: '1 year',
    year3: '3 years',
    flowsTitle: 'Where is volume routed?',
    flowsSubtitle: 'How your card volume is distributed across acquirers under optimal routing.',
    noAcquirersTitle: 'Select at least one acquirer',
    noAcquirersBody: 'Select acquirers in step 3 to see a routing analysis.',
  },
  methodology: {
    title: 'How we calculate',
    intro: 'Inlösenkollen uses an IC++ model (interchange + scheme + markup) for credibility:',
    point1: 'Interchange and scheme fees are regulated/schematic and largely the same for all acquirers — they are not what you negotiate.',
    point2: 'Acquirer markup is the negotiable part, and it scales down with your volume (larger volume → lower markup).',
    point3: 'We separate procurement savings (switch/renegotiate) from true routing savings (multiple acquirers) and show both openly.',
    point4: 'Routing can never increase your cost — if no acquirer is cheaper, the current price is kept for that category.',
    point5: 'Prices are estimates with a confidence level. Only Elavon’s partner terms via Westpay are confirmed.',
    rangeNote: 'Savings are shown as a range depending on how much of your volume is routable (60–100%). Actual savings depend on negotiation and technical setup.',
  },
  catalog: {
    title: 'Acquirer catalog',
    intro:
      'Established acquirers and PSPs. All-in price = interchange + scheme + markup. Prices are illustrative with a confidence level — not a guarantee for your agreement.',
    partnerNote: 'Westpay’s partner agreement with Elavon is the only confirmed price in the catalog.',
    colAcquirer: 'Acquirer',
    colType: 'Type',
    colPrice: 'All-in debit price',
    colConfidence: 'Confidence',
    colSource: 'Source',
    typeAcquirer: 'Acquirer',
    typePsp: 'PSP',
    confConfirmed: 'Confirmed',
    confPublished: 'Published list price',
    confEstimate: 'Estimate',
    confUnverified: 'Unverified',
  },
  leadForm: {
    title: 'Want to know your exact potential?',
    description:
      'Send your details and we’ll do a free review and compare against Westpay’s partner agreement.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    orgNumberLabel: 'Company registration no.',
    orgNumberPlaceholder: 'e.g. 556677-8899',
    annualVolumeApproxLabel: 'Approx. card turnover/year',
    annualVolumeApproxPlaceholder: 'e.g. 250M kr',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your current acquirer and setup...',
    consentText: 'I consent to my personal data being processed to contact me.',
    submit: 'Send request',
    submitting: 'Sending...',
    thanksTitle: 'Thank you for your request!',
    thanksBody: 'We’ll get back to you shortly to book a free analysis.',
    sendAnother: 'Send another request',
  },
  footer: {
    description: 'Inlösenkollen — independent information on intelligent payment routing for Nordic companies.',
    rights: 'All rights reserved.',
    developedBy: 'Developed by Anton Olsson.',
  },
  disclaimer:
    'The calculation is an estimate based on provided inputs and illustrative prices. Actual costs and savings vary with card mix, interchange, scheme fees, markup, acquiring agreements, FX, minimum fees, technical setup and routable share. It is not an offer or guarantee of a specific price or saving.',
  languageNames: { sv: 'Svenska', en: 'English' },
}

export const translations: Record<Language, TranslationDict> = { sv, en }

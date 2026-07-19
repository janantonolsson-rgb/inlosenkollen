export type Language = 'sv' | 'en' | 'no' | 'da' | 'fi'

export interface TranslationDict {
  nav: {
    home: string
    howItWorks: string
    calculator: string
    contact: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    acquirerExplainerTitle: string
    acquirerExplainer: string
    ctaPrimary: string
    ctaSecondary: string
    footnote: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    description: string
    intro: string
    whyTitle: string
    whoTitle: string
    diagramTitle: string
    diagramSubtitle: string
    valueTitle: string
    valueSubtitle: string
    valueFootnote: string
    ctaButton: string
  }
  trust: {
    title: string
    body: string
  }
  faq: {
    title: string
  }
  calculator: {
    step1Title: string
    step1Description: string
    step2Title: string
    step2Description: string
    step2TimeHint: string
    useDetailedDataButton: string
    presetMixBadge: string
    step3Title: string
    step3Description: string
    annualVolume: string
    averageOrderValue: string
    annualTransactionsComputed: string
    currentFee: string
    ctaCalculate: string
    sectionTitle: string
    sectionDescription: string
    pricingModeSimplifiedLabel: string
    pricingModeSimplifiedDescription: string
    pricingModeCatalogLabel: string
    pricingModeCatalogDescription: string
    pricingModeManualLabel: string
    pricingModeManualDescription: string
    showFixedFees: string
    hideFixedFees: string
  }
  results: {
    eyebrow: string
    title: string
    description: string
    exampleDataTitle: string
    exampleDataBody: string
    exampleDataDismiss: string
    estimatedSavingsLabel: string
    potentialAnnualSavingsPrefix: string
    savingsDisclaimer: string
    simplifiedModeLabel: string
    simplifiedModeTitle: string
    simplifiedModeBody: string
    noRoutingLabel: string
    noRoutingTitle: string
    noRoutingBody: string
    beforeAfterTitle: string
    beforeAfterSubtitle: string
    currentCostSeries: string
    routedCostSeries: string
    savingsOverTimeTitle: string
    savingsOverTimeSubtitle: string
    accumulatedSavingsSeries: string
    yearPrefix: string
    volumeDistributionTitle: string
    volumeDistributionSubtitle: string
    volumeLabel: string
    routingTableTitle: string
    routingTableSubtitle: string
    transactionTypeColumn: string
    annualVolumeColumn: string
    currentCostColumn: string
    acquirerColumn: string
    newCostColumn: string
    annualSavingsColumn: string
  }
  metrics: {
    currentCost: string
    routedCost: string
    annualSavings: string
    percentSavings: string
    threeYearSavings: string
    tenYearSavings: string
  }
  leadForm: {
    title: string
    description: string
    orgNumberLabel: string
    orgNumberPlaceholder: string
    submit: string
    submitting: string
    thanksTitle: string
    thanksBody: string
  }
  catalog: {
    applyTemplate: string
    introText: string
    membershipNote: string
    addButton: string
    removeButton: string
    sourceLabel: string
    readMoreLabel: string
    acquirerTypeLabel: string
    pspTypeLabel: string
  }
  footer: {
    description: string
    rights: string
    developedBy: string
  }
  disclaimer: string
  misc: {
    quickSelect: string
    customAmount: string
    aovHint: string
    currentFeeHint: string
    transactionsAutoNote: string
    fixedFeeLabel: string
    fixedFeeHint: string
    importedAcquirersHeading: string
    yourAcquirersHeading: string
    addAcquirerButton: string
    simplifiedModeNotice: string
    noAcquirerNotice: string
    consentText: string
    consentError: string
    genericError: string
    sendAnotherInquiry: string
    contactNameLabel: string
    emailLabel: string
    phoneLabel: string
    annualVolumeApproxLabel: string
    annualVolumeApproxPlaceholder: string
    currentAcquirerLabel: string
    posSystemLabel: string
    posSystemPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    attachmentLabel: string
    useExampleDataButton: string
    exampleDataDisclaimer: string
    totalShareLabel: string
    mixGroupSwedish: string
    mixGroupInternational: string
    sensitivityTitle: string
    sensitivitySubtitle: string
    volumeLabel: string
    currentPercentFeeLabel: string
    updatedAnnualSavingsLabel: string
  }
  languageNames: { sv: string; en: string; no: string; da: string; fi: string }
}

/**
 * Central ordbok för sidans huvudsakliga marknadsförings- och gränssnittstexter.
 * Täcker hero, "så fungerar det", kalkylatorns steg-titlar, resultat, leadformulär,
 * header/footer och disclaimer. Djupare mikrotexter (enstaka hjälptexter i avancerade
 * inställningar) kan fortfarande vara på svenska/engelska i vissa sällan synliga fall.
 */
export const translations: Record<Language, TranslationDict> = {
  sv: {
    nav: {
      home: 'Hem',
      howItWorks: 'Så fungerar det',
      calculator: 'Kalkylator',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalningsrouting',
      title: 'Betalar ni för mycket för era korttransaktioner?',
      subtitle:
        'Oberoende analys av era kortbetalningskostnader. Se om intelligent routing kan minska era kostnader genom att styra transaktioner till rätt inlösare och rätt avtal.',
      acquirerExplainerTitle: 'Vad är en inlösare?',
      acquirerExplainer:
        'En inlösare är den bank eller betalpartner som hanterar kortbetalningen och betalar ut pengarna till företaget. Olika inlösare har olika priser beroende på korttyp och avtal, vilket gör att valet av inlösare kan påverka företagets kostnader betydligt.',
      ctaPrimary: 'Beräkna er möjliga besparing',
      ctaSecondary: 'Hur fungerar intelligent routing?',
      footnote:
        'Ett smart sätt för nordiska företag, butiker och kedjor att sänka kostnaderna för kortbetalningar i fysisk butik — utan att ändra kundupplevelsen i kassan.',
    },
    howItWorks: {
      eyebrow: 'Så fungerar det',
      title: 'Intelligent routing i tre steg',
      description:
        'Intelligent routing analyserar varje transaktion och väljer det inlösenavtal som ger bäst ekonomiskt utfall — baserat på era avtal och konfiguration.',
      intro:
        'Många företag använder idag en enda inlösare för alla korttransaktioner. Med intelligent routing kan olika transaktioner styras till den lösning som ger bäst villkor, vilket kan minska kostnader och skapa större flexibilitet.',
      whyTitle: 'Varför företag använder intelligent routing',
      whoTitle: 'Vem passar detta för?',
      diagramTitle: 'Så väljs den mest fördelaktiga inlösaren',
      diagramSubtitle:
        'Varje transaktion analyseras individuellt och skickas till det inlösenavtal som ger lägst totalkostnad just för den korttypen.',
      valueTitle: 'Mer än bara lägre pris',
      valueSubtitle: 'Intelligent routing handlar om att sänka kostnaden — men värdet stannar inte där.',
      valueFootnote:
        'Möjligheterna beror på kundens avtal, tekniska uppsättning, marknad och vilka betalningsmetoder som stöds. Alla transaktioner kan inte alltid routas till valfri inlösare.',
      ctaButton: 'Prova kalkylatorn',
    },
    trust: {
      title: 'Oberoende jämförelse',
      body:
        'Inlösenkollen utvecklades för att hjälpa nordiska företag att få bättre insikt i sina betalningskostnader och förstå hur de kan optimera sina betalflöden. Inlösenkollen erbjuder inga egna inlösenavtal, utan informerar företag om hur de kan skapa bättre förutsättningar genom ökad transparens, större konkurrens mellan inlösare och smartare betalflöden. Ni behåller själva full kontroll över vilka avtal ni väljer.',
    },
    faq: {
      title: 'Vanliga frågor',
    },
    calculator: {
      step1Title: 'Steg 1: Företagets betalningsvolym',
      step1Description:
        'Ange företagets nuvarande årliga kortomsättning och ungefärliga inlösenkostnad. Kör ni bara med en ungefärlig procentsats idag räcker det gott för en första uppskattning. Intelligent routing gör störst skillnad för företag och koncerner med hög omsättning.',
      step2Title: 'Steg 2: Förfina beräkningen (valfritt)',
      step2Description:
        'Er transaktionsmix är redan förifylld med en genomsnittlig svensk kortmix, så ni kan gå vidare direkt. Vill ni ha en mer exakt beräkning? Det går snabbt att finjustera — klicka på "Använd detaljerad data" nedan.',
      step2TimeHint: 'Tar mindre än 2 minuter',
      useDetailedDataButton: 'Använd detaljerad data',
      presetMixBadge: 'Genomsnittlig svensk kortmix (förifylld)',
      step3Title: 'Steg 3: Inlösenavtal',
      step3Description:
        'Använd ert ungefärliga pris, importera etablerade inlösare med kända avgifter, eller ange exakta priser per korttyp om ni har dem.',
      annualVolume: 'Total kortomsättning per år',
      averageOrderValue: 'Genomsnittligt ordervärde (AoV)',
      annualTransactionsComputed: 'Antal transaktioner per år (beräknas automatiskt)',
      currentFee: 'Nuvarande genomsnittlig procentuell inlösenavgift',
      ctaCalculate: 'Visa min besparing',
      sectionTitle: 'Beräkna er möjliga besparing',
      sectionDescription:
        'Fyll i era uppgifter — det tar mindre än 2 minuter. Alla fält är förifyllda med exempeldata så ni kan se hur det fungerar direkt.',
      pricingModeSimplifiedLabel: 'Genomsnittspris',
      pricingModeSimplifiedDescription: 'Jag känner bara till mitt ungefärliga pris idag',
      pricingModeCatalogLabel: 'Lägg till inlösare',
      pricingModeCatalogDescription: 'Välj etablerade aktörer med publicerade avgifter',
      pricingModeManualLabel: 'Detaljerade priser',
      pricingModeManualDescription: 'Ange exakta priser per korttyp hos flera inlösare',
      showFixedFees: '+ Lägg till fasta avgifter i beräkningen',
      hideFixedFees: '− Dölj fasta avgifter',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Er uppskattade besparing',
      description: 'Resultat baserat på angivna priser och årsvolymer. Alla siffror är uppskattningar.',
      exampleDataTitle: 'Det här är en branschuppskattning – inte en faktisk kalkyl.',
      exampleDataBody:
        'Resultatet bygger just nu på allmänna branschpriser. Fyll i era egna uppgifter och jämför verkliga villkor från inlösare för att få en korrekt besparingsberäkning.',
      exampleDataDismiss: 'Jag förstår, visa resultatet ändå',
      estimatedSavingsLabel: 'Uppskattad besparing',
      potentialAnnualSavingsPrefix: 'Potentiell årlig besparing:',
      savingsDisclaimer:
        'Baserat på de priser och volymer du angivit. Faktisk besparing kan variera och är inte garanterad.',
      simplifiedModeLabel: 'Förenklat läge',
      simplifiedModeTitle: 'Välj detaljerade priser för att se potentiell besparing',
      simplifiedModeBody:
        'I förenklat läge visas er nuvarande beräknade kostnad baserat på genomsnittspriset i steg 1. Lägg till priser per korttyp hos flera inlösare för en fullständig routing-analys.',
      noRoutingLabel: 'Ingen routing-data',
      noRoutingTitle: 'Lägg till inlösare för att se potentiell besparing',
      noRoutingBody:
        'Lägg till etablerade kortinlösare eller ange priser manuellt i steg 3 för en fullständig routing-analys.',
      beforeAfterTitle: 'Före och efter',
      beforeAfterSubtitle: 'Jämförelse av nuvarande inlösenkostnad och kostnad efter intelligent routing',
      currentCostSeries: 'Nuvarande inlösenkostnad',
      routedCostSeries: 'Kostnad efter routing',
      savingsOverTimeTitle: 'Besparing över tid',
      savingsOverTimeSubtitle: 'Ackumulerad uppskattad besparing efter 1, 2 och 3 år',
      accumulatedSavingsSeries: 'Ackumulerad besparing',
      yearPrefix: 'År',
      volumeDistributionTitle: 'Kostnadsfördelning',
      volumeDistributionSubtitle: 'Hur betalningsvolymen fördelas mellan inlösare efter optimal routing',
      volumeLabel: 'Volym',
      routingTableTitle: 'Rekommenderad routing',
      routingTableSubtitle: 'Varje transaktionstyp routas till den inlösare som ger lägst beräknad kostnad',
      transactionTypeColumn: 'Transaktionstyp',
      annualVolumeColumn: 'Årlig omsättning',
      currentCostColumn: 'Nuvarande kostnad',
      acquirerColumn: 'Rekommenderad inlösare',
      newCostColumn: 'Ny kostnad',
      annualSavingsColumn: 'Årlig besparing',
    },
    metrics: {
      currentCost: 'Nuvarande kostnad per år',
      routedCost: 'Kostnad med intelligent routing',
      annualSavings: 'Besparing per år',
      percentSavings: 'Procentuell kostnadsminskning',
      threeYearSavings: 'Beräknad besparing över tre år',
      tenYearSavings: 'Beräknad besparing över tio år',
    },
    leadForm: {
      title: 'Vill du veta vad ni faktiskt kan spara?',
      description:
        'Skicka in era nuvarande inlösenpriser och transaktionsvolymer så hjälper vi er att göra en mer detaljerad analys.',
      orgNumberLabel: 'Organisationsnummer',
      orgNumberPlaceholder: 't.ex. 556677-8899',
      submit: 'Boka en kostnadsanalys',
      submitting: 'Skickar...',
      thanksTitle: 'Tack för er förfrågan!',
      thanksBody: 'Vi återkommer inom kort för att boka en mer detaljerad kostnadsanalys.',
    },
    catalog: {
      applyTemplate: 'Ni kan ansöka om att bli kund hos {name} här',
      introText:
        'Välj etablerade kortinlösare och PSP:er med publicerade eller uppskattade avgifter från vår marknadsresearch. Priserna är illustrationer — inte garanti för ert avtal.',
      membershipNote:
        'Har ert företag redan ett inlösenavtal via en branschorganisation som Svensk Handel, Martin & Servera eller Visita? Ange då era avtalspriser under "Detaljerade priser" på nästa sida.',
      addButton: 'Lägg till',
      removeButton: 'Ta bort',
      sourceLabel: 'Källa:',
      readMoreLabel: 'Läs mer',
      acquirerTypeLabel: 'Inlösare',
      pspTypeLabel: 'PSP',
    },
    footer: {
      description:
        'Inlösenkollen är en informationssida om intelligent betalningsrouting, utvecklad för nordiska företag, butiker och kedjor.',
      rights: 'Alla rättigheter förbehållna.',
      developedBy: 'Utvecklad av Anton Olsson.',
    },
    disclaimer:
      'Beräkningen är en uppskattning och baseras på de uppgifter som anges. Faktiska kostnader och besparingar kan variera beroende på bland annat kortmix, interchange, scheme fees, inlösenavtal, valutaväxling, minimikostnader, teknisk uppsättning och andra avtalsvillkor. Beräkningen utgör inte ett erbjudande eller en garanti för ett visst pris eller en viss besparing.',
    misc: {
      quickSelect: 'Snabbval',
      customAmount: 'Annat belopp',
      aovHint: 'Genomsnittligt belopp per kortköp — de flesta känner till detta bättre än exakt antal transaktioner.',
      currentFeeHint: 'Den viktigaste siffran — de allra flesta känner till ungefär den här procentsatsen.',
      transactionsAutoNote: 'Beräknas automatiskt: årlig omsättning ÷ AoV',
      fixedFeeLabel: 'Nuvarande fast avgift per transaktion',
      fixedFeeHint: 'Används sällan — lämna på 0 om ni inte har en fast avgift per transaktion.',
      importedAcquirersHeading: 'Importerade inlösare',
      yourAcquirersHeading: 'Era inlösare',
      addAcquirerButton: '+ Lägg till inlösare',
      simplifiedModeNotice:
        'I förenklat läge används det genomsnittliga pris ni angav i steg 1. Routing per korttyp kräver detaljerade priser hos minst en inlösare.',
      noAcquirerNotice:
        'Ingen inlösare vald ännu. Ni kan fortsätta utan att lägga till någon — resultatet visar då 0 kr i besparing eftersom det inte finns något att jämföra mot.',
      consentText:
        'Jag godkänner att mina personuppgifter behandlas för att kontakta mig angående en kostnadsanalys.',
      consentError: 'Du måste godkänna behandling av personuppgifter',
      genericError: 'Något gick fel. Försök igen senare.',
      sendAnotherInquiry: 'Skicka ny förfrågan',
      contactNameLabel: 'Namn',
      emailLabel: 'E-post',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Ungefärlig kortomsättning per år',
      annualVolumeApproxPlaceholder: 't.ex. 60 M kr',
      currentAcquirerLabel: 'Nuvarande inlösare',
      posSystemLabel: 'POS-/kassasystem ni använder idag',
      posSystemPlaceholder: 't.ex. Zettle, Shopify POS, egen kassa',
      messageLabel: 'Meddelande',
      messagePlaceholder: 'Berätta gärna mer om er betalningsuppsättning...',
      attachmentLabel: 'Bifoga prislista eller faktura (valfritt)',
      useExampleDataButton: 'Använd exempeldata',
      exampleDataDisclaimer:
        'Exempeldata representerar inte en specifik kund. Använd den som utgångspunkt och justera efter er faktiska transaktionsmix.',
      totalShareLabel: 'Total andel',
      mixGroupSwedish: 'Svenska kort',
      mixGroupInternational: 'EU och internationellt',
      sensitivityTitle: 'Känslighetsanalys',
      sensitivitySubtitle: 'Justera parametrar och se hur resultatet uppdateras direkt',
      volumeLabel: 'Volym',
      currentPercentFeeLabel: 'Nuvarande procentuell avgift',
      updatedAnnualSavingsLabel: 'Uppdaterad årlig besparing',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      calculator: 'Calculator',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Intelligent payment routing',
      title: 'Are you overpaying on your card transactions?',
      subtitle:
        'An independent analysis of your card payment costs. See if intelligent routing can reduce your costs by directing transactions to the right acquirer and the right agreement.',
      acquirerExplainerTitle: 'What is an acquirer?',
      acquirerExplainer:
        'An acquirer is the bank or payment partner that processes the card payment and pays the funds out to the business. Different acquirers charge different prices depending on card type and agreement, so the choice of acquirer can significantly affect a company\u2019s costs.',
      ctaPrimary: 'Calculate your potential savings',
      ctaSecondary: 'How does intelligent routing work?',
      footnote:
        'A smart way for Nordic companies, stores and chains to lower the cost of in-store card payments — without changing the checkout experience.',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'Intelligent routing in three steps',
      description:
        'Intelligent routing analyzes every transaction and selects the acquiring agreement that gives the best financial outcome — based on your agreements and configuration.',
      intro:
        'Many companies today use a single acquirer for all card transactions. With intelligent routing, different transactions can be directed to the solution that offers the best terms, which can reduce costs and create greater flexibility.',
      whyTitle: 'Why companies use intelligent routing',
      whoTitle: 'Who is this for?',
      diagramTitle: 'How the most favorable acquirer is chosen',
      diagramSubtitle:
        'Every transaction is analyzed individually and sent to the acquiring agreement that gives the lowest total cost for that specific card type.',
      valueTitle: 'More than just a lower price',
      valueSubtitle: 'Intelligent routing is about cutting costs — but the value doesn\u2019t stop there.',
      valueFootnote:
        'The possibilities depend on the customer\u2019s agreements, technical setup, market, and which payment methods are supported. Not every transaction can always be routed to any acquirer.',
      ctaButton: 'Try the calculator',
    },
    trust: {
      title: 'Independent comparison',
      body:
        'Inlösenkollen was developed to help Nordic companies gain better insight into their payment costs and understand how they can optimize their payment flows. Inlösenkollen does not offer any acquiring agreements of its own — it informs companies about how to create better conditions through increased transparency, greater competition between acquirers, and smarter payment flows. You retain full control over which agreements you choose.',
    },
    faq: {
      title: 'Frequently asked questions',
    },
    calculator: {
      step1Title: 'Step 1: Your company\u2019s payment volume',
      step1Description:
        'Enter your company\u2019s current annual card turnover and approximate acquiring cost. If you only have a rough percentage today, that\u2019s enough for a first estimate. Intelligent routing makes the biggest difference for companies and groups with high turnover.',
      step2Title: 'Step 2: Refine the calculation (optional)',
      step2Description:
        'Your transaction mix is already pre-filled with an average Swedish card mix, so you can move on right away. Want a more precise calculation? It only takes a moment to fine-tune — click "Use detailed data" below.',
      step2TimeHint: 'Takes less than 2 minutes',
      useDetailedDataButton: 'Use detailed data',
      presetMixBadge: 'Average Swedish card mix (pre-filled)',
      step3Title: 'Step 3: Acquiring agreements',
      step3Description:
        'Use your approximate price, import established acquirers with known fees, or enter exact prices per card type if you have them.',
      annualVolume: 'Total card turnover per year',
      averageOrderValue: 'Average Order Value (AoV)',
      annualTransactionsComputed: 'Transactions per year (calculated automatically)',
      currentFee: 'Current average percentage acquiring fee',
      ctaCalculate: 'Show my savings',
      sectionTitle: 'Calculate your potential savings',
      sectionDescription:
        'Fill in your details — it takes less than 2 minutes. Every field is pre-filled with example data so you can see how it works right away.',
      pricingModeSimplifiedLabel: 'Average price',
      pricingModeSimplifiedDescription: 'I only know my approximate price today',
      pricingModeCatalogLabel: 'Add acquirer',
      pricingModeCatalogDescription: 'Choose established providers with published fees',
      pricingModeManualLabel: 'Detailed prices',
      pricingModeManualDescription: 'Enter exact prices per card type for several acquirers',
      showFixedFees: '+ Add fixed fees to the calculation',
      hideFixedFees: '− Hide fixed fees',
    },
    results: {
      eyebrow: 'Results',
      title: 'Your estimated savings',
      description: 'Results based on the prices and annual volumes provided. All figures are estimates.',
      exampleDataTitle: 'This is an industry estimate – not an actual calculation.',
      exampleDataBody:
        'The result is currently based on general industry prices. Fill in your own details and compare real terms from acquirers to get an accurate savings calculation.',
      exampleDataDismiss: 'Got it, show the result anyway',
      estimatedSavingsLabel: 'Estimated savings',
      potentialAnnualSavingsPrefix: 'Potential annual savings:',
      savingsDisclaimer:
        'Based on the prices and volumes you provided. Actual savings may vary and are not guaranteed.',
      simplifiedModeLabel: 'Simplified mode',
      simplifiedModeTitle: 'Choose detailed prices to see potential savings',
      simplifiedModeBody:
        'In simplified mode, your current calculated cost is shown based on the average price from step 1. Add prices per card type for several acquirers for a full routing analysis.',
      noRoutingLabel: 'No routing data',
      noRoutingTitle: 'Add an acquirer to see potential savings',
      noRoutingBody:
        'Add established card acquirers or enter prices manually in step 3 for a full routing analysis.',
      beforeAfterTitle: 'Before and after',
      beforeAfterSubtitle: 'Comparison of current acquiring cost and cost after intelligent routing',
      currentCostSeries: 'Current acquiring cost',
      routedCostSeries: 'Cost after routing',
      savingsOverTimeTitle: 'Savings over time',
      savingsOverTimeSubtitle: 'Accumulated estimated savings after 1, 2 and 3 years',
      accumulatedSavingsSeries: 'Accumulated savings',
      yearPrefix: 'Year',
      volumeDistributionTitle: 'Cost distribution',
      volumeDistributionSubtitle: 'How payment volume is distributed between acquirers after optimal routing',
      volumeLabel: 'Volume',
      routingTableTitle: 'Recommended routing',
      routingTableSubtitle: 'Each transaction type is routed to the acquirer with the lowest calculated cost',
      transactionTypeColumn: 'Transaction type',
      annualVolumeColumn: 'Annual turnover',
      currentCostColumn: 'Current cost',
      acquirerColumn: 'Recommended acquirer',
      newCostColumn: 'New cost',
      annualSavingsColumn: 'Annual savings',
    },
    metrics: {
      currentCost: 'Current cost per year',
      routedCost: 'Cost with intelligent routing',
      annualSavings: 'Savings per year',
      percentSavings: 'Percentage cost reduction',
      threeYearSavings: 'Estimated savings over three years',
      tenYearSavings: 'Estimated savings over ten years',
    },
    leadForm: {
      title: 'Want to know what you could actually save?',
      description:
        'Send us your current acquiring prices and transaction volumes and we\u2019ll help you with a more detailed analysis.',
      orgNumberLabel: 'Organization/registration number',
      orgNumberPlaceholder: 'e.g. 556677-8899',
      submit: 'Book a cost analysis',
      submitting: 'Sending...',
      thanksTitle: 'Thank you for your inquiry!',
      thanksBody: 'We will be in touch shortly to book a more detailed cost analysis.',
    },
    catalog: {
      applyTemplate: 'You can apply to become a customer of {name} here',
      introText:
        'Choose established card acquirers and PSPs with published or estimated fees from our market research. The prices are illustrations — not a guarantee for your agreement.',
      membershipNote:
        'Does your company already have an acquiring agreement through an industry organization such as Svensk Handel, Martin & Servera, or Visita? Enter your contract prices under "Detailed prices" on the next page.',
      addButton: 'Add',
      removeButton: 'Remove',
      sourceLabel: 'Source:',
      readMoreLabel: 'Read more',
      acquirerTypeLabel: 'Acquirer',
      pspTypeLabel: 'PSP',
    },
    footer: {
      description:
        'Inlösenkollen is an information site about intelligent payment routing, developed for Nordic companies, stores and chains.',
      rights: 'All rights reserved.',
      developedBy: 'Developed by Anton Olsson.',
    },
    disclaimer:
      'This calculation is an estimate based on the information provided. Actual costs and savings may vary depending on, among other things, card mix, interchange, scheme fees, acquiring agreements, currency conversion, minimum costs, technical setup, and other contractual terms. This calculation does not constitute an offer or a guarantee of a specific price or saving.',
    misc: {
      quickSelect: 'Quick select',
      customAmount: 'Custom amount',
      aovHint: 'Average amount per card purchase — most people know this better than the exact number of transactions.',
      currentFeeHint: 'The most important figure — most people know roughly this percentage.',
      transactionsAutoNote: 'Calculated automatically: annual turnover ÷ AoV',
      fixedFeeLabel: 'Current fixed fee per transaction',
      fixedFeeHint: 'Rarely used — leave at 0 if you don\u2019t have a fixed fee per transaction.',
      importedAcquirersHeading: 'Imported acquirers',
      yourAcquirersHeading: 'Your acquirers',
      addAcquirerButton: '+ Add acquirer',
      simplifiedModeNotice:
        'In simplified mode, the average price you entered in step 1 is used. Routing per card type requires detailed prices for at least one acquirer.',
      noAcquirerNotice:
        'No acquirer added yet. You can continue without adding one — the result will then show 0 SEK in savings since there is nothing to compare against.',
      consentText:
        'I consent to my personal data being processed to be contacted regarding a cost analysis.',
      consentError: 'You must consent to the processing of personal data',
      genericError: 'Something went wrong. Please try again later.',
      sendAnotherInquiry: 'Send another inquiry',
      contactNameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone number',
      annualVolumeApproxLabel: 'Approximate annual card turnover',
      annualVolumeApproxPlaceholder: 'e.g. 60M SEK',
      currentAcquirerLabel: 'Current acquirer',
      posSystemLabel: 'POS/checkout system you use today',
      posSystemPlaceholder: 'e.g. Zettle, Shopify POS, in-house system',
      messageLabel: 'Message',
      messagePlaceholder: 'Feel free to tell us more about your payment setup...',
      attachmentLabel: 'Attach a price list or invoice (optional)',
      useExampleDataButton: 'Use example data',
      exampleDataDisclaimer:
        'Example data does not represent a specific customer. Use it as a starting point and adjust it to your actual transaction mix.',
      totalShareLabel: 'Total share',
      mixGroupSwedish: 'Swedish cards',
      mixGroupInternational: 'EU and international',
      sensitivityTitle: 'Sensitivity analysis',
      sensitivitySubtitle: 'Adjust parameters and see the result update instantly',
      volumeLabel: 'Volume',
      currentPercentFeeLabel: 'Current percentage fee',
      updatedAnnualSavingsLabel: 'Updated annual savings',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  no: {
    nav: {
      home: 'Hjem',
      howItWorks: 'Slik fungerer det',
      calculator: 'Kalkulator',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalingsruting',
      title: 'Betaler dere for mye for kortstransaksjonene deres?',
      subtitle:
        'Uavhengig analyse av deres kortbetalingskostnader. Se om intelligent ruting kan redusere kostnadene deres ved å styre transaksjoner til riktig innløser og riktig avtale.',
      acquirerExplainerTitle: 'Hva er en innløser?',
      acquirerExplainer:
        'En innløser er banken eller betalingspartneren som håndterer kortbetalingen og utbetaler pengene til bedriften. Ulike innløsere har ulike priser avhengig av korttype og avtale, noe som gjør at valg av innløser kan påvirke bedriftens kostnader betydelig.',
      ctaPrimary: 'Beregn deres mulige besparelse',
      ctaSecondary: 'Hvordan fungerer intelligent ruting?',
      footnote:
        'En smart måte for nordiske bedrifter, butikker og kjeder å redusere kostnadene for kortbetaling i fysisk butikk — uten å endre kundeopplevelsen i kassen.',
    },
    howItWorks: {
      eyebrow: 'Slik fungerer det',
      title: 'Intelligent ruting i tre steg',
      description:
        'Intelligent ruting analyserer hver transaksjon og velger innløsningsavtalen som gir best økonomisk utfall — basert på deres avtaler og konfigurasjon.',
      intro:
        'Mange bedrifter bruker i dag én enkelt innløser for alle korttransaksjoner. Med intelligent ruting kan ulike transaksjoner styres til løsningen som gir best vilkår, noe som kan redusere kostnader og skape større fleksibilitet.',
      whyTitle: 'Hvorfor bedrifter bruker intelligent ruting',
      whoTitle: 'Hvem passer dette for?',
      diagramTitle: 'Slik velges den mest fordelaktige innløseren',
      diagramSubtitle:
        'Hver transaksjon analyseres individuelt og sendes til innløsningsavtalen som gir lavest totalkostnad for nettopp den korttypen.',
      valueTitle: 'Mer enn bare lavere pris',
      valueSubtitle: 'Intelligent ruting handler om å senke kostnaden — men verdien stopper ikke der.',
      valueFootnote:
        'Mulighetene avhenger av kundens avtaler, tekniske oppsett, marked og hvilke betalingsmetoder som støttes. Ikke alle transaksjoner kan alltid rutes til en hvilken som helst innløser.',
      ctaButton: 'Prøv kalkulatoren',
    },
    trust: {
      title: 'Uavhengig sammenligning',
      body:
        'Inlösenkollen ble utviklet for å hjelpe nordiske bedrifter med bedre innsikt i sine betalingskostnader og forstå hvordan de kan optimalisere betalingsflytene sine. Inlösenkollen tilbyr ingen egne innløsningsavtaler, men informerer bedrifter om hvordan de kan skape bedre forutsetninger gjennom økt gjennomsiktighet, større konkurranse mellom innløsere og smartere betalingsflyter. Dere beholder selv full kontroll over hvilke avtaler dere velger.',
    },
    faq: {
      title: 'Ofte stilte spørsmål',
    },
    calculator: {
      step1Title: 'Steg 1: Bedriftens betalingsvolum',
      step1Description:
        'Angi bedriftens nåværende årlige kortomsetning og omtrentlige innløsningskostnad. Har dere bare en omtrentlig prosentsats i dag, er det godt nok for et første anslag. Intelligent ruting gir størst forskjell for bedrifter og konsern med høy omsetning.',
      step2Title: 'Steg 2: Foredle beregningen (valgfritt)',
      step2Description:
        'Deres transaksjonsmiks er allerede forhåndsutfylt med en gjennomsnittlig svensk kortmiks, så dere kan gå videre med en gang. Vil dere ha en mer presis beregning? Det tar bare et øyeblikk å finjustere — klikk på "Bruk detaljerte data" nedenfor.',
      step2TimeHint: 'Tar mindre enn 2 minutter',
      useDetailedDataButton: 'Bruk detaljerte data',
      presetMixBadge: 'Gjennomsnittlig svensk kortmiks (forhåndsutfylt)',
      step3Title: 'Steg 3: Innløsningsavtaler',
      step3Description:
        'Bruk den omtrentlige prisen deres, importer etablerte innløsere med kjente gebyrer, eller angi eksakte priser per korttype hvis dere har dem.',
      annualVolume: 'Total kortomsetning per år',
      averageOrderValue: 'Gjennomsnittlig ordreverdi (AOV)',
      annualTransactionsComputed: 'Antall transaksjoner per år (beregnes automatisk)',
      currentFee: 'Nåværende gjennomsnittlig prosentvis innløsningsgebyr',
      ctaCalculate: 'Vis besparelsen min',
      sectionTitle: 'Beregn deres mulige besparelse',
      sectionDescription:
        'Fyll inn opplysningene deres — det tar mindre enn 2 minutter. Alle felt er forhåndsutfylt med eksempeldata, så dere kan se hvordan det fungerer med en gang.',
      pricingModeSimplifiedLabel: 'Gjennomsnittspris',
      pricingModeSimplifiedDescription: 'Jeg kjenner bare til den omtrentlige prisen i dag',
      pricingModeCatalogLabel: 'Legg til innløser',
      pricingModeCatalogDescription: 'Velg etablerte aktører med publiserte gebyrer',
      pricingModeManualLabel: 'Detaljerte priser',
      pricingModeManualDescription: 'Angi eksakte priser per korttype hos flere innløsere',
      showFixedFees: '+ Legg til faste gebyrer i beregningen',
      hideFixedFees: '− Skjul faste gebyrer',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Deres estimerte besparelse',
      description: 'Resultat basert på oppgitte priser og årsvolum. Alle tall er estimater.',
      exampleDataTitle: 'Dette er et bransjeestimat – ikke en faktisk beregning.',
      exampleDataBody:
        'Resultatet er nå basert på generelle bransjepriser. Fyll inn deres egne opplysninger og sammenlign reelle vilkår fra innløsere for å få en korrekt besparelsesberegning.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet likevel',
      estimatedSavingsLabel: 'Beregnet besparelse',
      potentialAnnualSavingsPrefix: 'Potensiell årlig besparelse:',
      savingsDisclaimer:
        'Basert på prisene og volumene du har oppgitt. Faktisk besparelse kan variere og er ikke garantert.',
      simplifiedModeLabel: 'Forenklet modus',
      simplifiedModeTitle: 'Velg detaljerte priser for å se potensiell besparelse',
      simplifiedModeBody:
        'I forenklet modus vises deres nåværende beregnede kostnad basert på gjennomsnittsprisen fra steg 1. Legg til priser per korttype hos flere innløsere for en fullstendig rutingsanalyse.',
      noRoutingLabel: 'Ingen rutingdata',
      noRoutingTitle: 'Legg til en innløser for å se potensiell besparelse',
      noRoutingBody:
        'Legg til etablerte kortinnløsere eller angi priser manuelt i steg 3 for en fullstendig rutingsanalyse.',
      beforeAfterTitle: 'Før og etter',
      beforeAfterSubtitle: 'Sammenligning av nåværende innløsningskostnad og kostnad etter intelligent ruting',
      currentCostSeries: 'Nåværende innløsningskostnad',
      routedCostSeries: 'Kostnad etter ruting',
      savingsOverTimeTitle: 'Besparelse over tid',
      savingsOverTimeSubtitle: 'Akkumulert beregnet besparelse etter 1, 2 og 3 år',
      accumulatedSavingsSeries: 'Akkumulert besparelse',
      yearPrefix: 'År',
      volumeDistributionTitle: 'Kostnadsfordeling',
      volumeDistributionSubtitle: 'Hvordan betalingsvolumet fordeles mellom innløsere etter optimal ruting',
      volumeLabel: 'Volum',
      routingTableTitle: 'Anbefalt ruting',
      routingTableSubtitle: 'Hver transaksjonstype rutes til innløseren som gir lavest beregnet kostnad',
      transactionTypeColumn: 'Transaksjonstype',
      annualVolumeColumn: 'Årlig omsetning',
      currentCostColumn: 'Nåværende kostnad',
      acquirerColumn: 'Anbefalt innløser',
      newCostColumn: 'Ny kostnad',
      annualSavingsColumn: 'Årlig besparelse',
    },
    metrics: {
      currentCost: 'Nåværende kostnad per år',
      routedCost: 'Kostnad med intelligent ruting',
      annualSavings: 'Besparelse per år',
      percentSavings: 'Prosentvis kostnadsreduksjon',
      threeYearSavings: 'Beregnet besparelse over tre år',
      tenYearSavings: 'Beregnet besparelse over ti år',
    },
    leadForm: {
      title: 'Vil du vite hva dere faktisk kan spare?',
      description:
        'Send inn deres nåværende innløsningspriser og transaksjonsvolum, så hjelper vi dere med en mer detaljert analyse.',
      orgNumberLabel: 'Organisasjonsnummer',
      orgNumberPlaceholder: 'f.eks. 981 234 567',
      submit: 'Bestill en kostnadsanalyse',
      submitting: 'Sender...',
      thanksTitle: 'Takk for henvendelsen!',
      thanksBody: 'Vi tar kontakt snart for å avtale en mer detaljert kostnadsanalyse.',
    },
    catalog: {
      applyTemplate: 'Dere kan søke om å bli kunde hos {name} her',
      introText:
        'Velg etablerte kortinnløsere og PSP-er med publiserte eller estimerte gebyrer fra vår markedsundersøkelse. Prisene er illustrasjoner — ingen garanti for deres avtale.',
      membershipNote:
        'Har bedriften allerede en innløsningsavtale via en bransjeorganisasjon som Svensk Handel, Martin & Servera eller Visita? Angi da avtaleprisene deres under "Detaljerte priser" på neste side.',
      addButton: 'Legg til',
      removeButton: 'Fjern',
      sourceLabel: 'Kilde:',
      readMoreLabel: 'Les mer',
      acquirerTypeLabel: 'Innløser',
      pspTypeLabel: 'PSP',
    },
    footer: {
      description:
        'Inlösenkollen er en informasjonsside om intelligent betalingsruting, utviklet for nordiske bedrifter, butikker og kjeder.',
      rights: 'Alle rettigheter forbeholdt.',
      developedBy: 'Utviklet av Anton Olsson.',
    },
    disclaimer:
      'Beregningen er et estimat basert på opplysningene som er oppgitt. Faktiske kostnader og besparelser kan variere avhengig av blant annet kortmiks, interchange, scheme fees, innløsningsavtaler, valutaveksling, minimumskostnader, teknisk oppsett og andre avtalevilkår. Beregningen utgjør ikke et tilbud eller en garanti for en bestemt pris eller besparelse.',
    misc: {
      quickSelect: 'Hurtigvalg',
      customAmount: 'Annet beløp',
      aovHint: 'Gjennomsnittlig beløp per kortkjøp — de fleste kjenner dette bedre enn eksakt antall transaksjoner.',
      currentFeeHint: 'Det viktigste tallet — de fleste kjenner omtrent denne prosentsatsen.',
      transactionsAutoNote: 'Beregnes automatisk: årlig omsetning ÷ AOV',
      fixedFeeLabel: 'Nåværende faste gebyr per transaksjon',
      fixedFeeHint: 'Sjelden brukt — la stå på 0 hvis dere ikke har et fast gebyr per transaksjon.',
      importedAcquirersHeading: 'Importerte innløsere',
      yourAcquirersHeading: 'Deres innløsere',
      addAcquirerButton: '+ Legg til innløser',
      simplifiedModeNotice:
        'I forenklet modus brukes gjennomsnittsprisen dere oppga i steg 1. Ruting per korttype krever detaljerte priser hos minst én innløser.',
      noAcquirerNotice:
        'Ingen innløser valgt ennå. Dere kan fortsette uten å legge til en — resultatet viser da 0 kr i besparelse siden det ikke er noe å sammenligne med.',
      consentText:
        'Jeg samtykker til at mine personopplysninger behandles for å bli kontaktet angående en kostnadsanalyse.',
      consentError: 'Du må samtykke til behandling av personopplysninger',
      genericError: 'Noe gikk galt. Prøv igjen senere.',
      sendAnotherInquiry: 'Send en ny henvendelse',
      contactNameLabel: 'Navn',
      emailLabel: 'E-post',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Omtrentlig kortomsetning per år',
      annualVolumeApproxPlaceholder: 'f.eks. 60 mill. kr',
      currentAcquirerLabel: 'Nåværende innløser',
      posSystemLabel: 'POS-/kassesystem dere bruker i dag',
      posSystemPlaceholder: 'f.eks. Zettle, Shopify POS, eget kassesystem',
      messageLabel: 'Melding',
      messagePlaceholder: 'Fortell gjerne mer om betalingsoppsettet deres...',
      attachmentLabel: 'Legg ved prisliste eller faktura (valgfritt)',
      useExampleDataButton: 'Bruk eksempeldata',
      exampleDataDisclaimer:
        'Eksempeldata representerer ikke en spesifikk kunde. Bruk det som utgangspunkt og juster etter deres faktiske transaksjonsmiks.',
      totalShareLabel: 'Total andel',
      mixGroupSwedish: 'Svenske kort',
      mixGroupInternational: 'EU og internasjonalt',
      sensitivityTitle: 'Sensitivitetsanalyse',
      sensitivitySubtitle: 'Juster parametre og se resultatet oppdateres direkte',
      volumeLabel: 'Volum',
      currentPercentFeeLabel: 'Nåværende prosentvise gebyr',
      updatedAnnualSavingsLabel: 'Oppdatert årlig besparelse',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  da: {
    nav: {
      home: 'Hjem',
      howItWorks: 'Sådan fungerer det',
      calculator: 'Beregner',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Intelligent betalingsrouting',
      title: 'Betaler I for meget for jeres kortransaktioner?',
      subtitle:
        'Uafhængig analyse af jeres kortbetalingsomkostninger. Se om intelligent routing kan reducere jeres omkostninger ved at styre transaktioner til den rigtige indløser og den rigtige aftale.',
      acquirerExplainerTitle: 'Hvad er en indløser?',
      acquirerExplainer:
        'En indløser er den bank eller betalingspartner, der håndterer kortbetalingen og udbetaler pengene til virksomheden. Forskellige indløsere har forskellige priser afhængigt af korttype og aftale, hvilket betyder at valget af indløser kan påvirke virksomhedens omkostninger betydeligt.',
      ctaPrimary: 'Beregn jeres mulige besparelse',
      ctaSecondary: 'Hvordan fungerer intelligent routing?',
      footnote:
        'En smart måde for nordiske virksomheder, butikker og kæder at sænke omkostningerne ved kortbetaling i fysisk butik — uden at ændre kundeoplevelsen ved kassen.',
    },
    howItWorks: {
      eyebrow: 'Sådan fungerer det',
      title: 'Intelligent routing i tre trin',
      description:
        'Intelligent routing analyserer hver transaktion og vælger den indløsningsaftale, der giver det bedste økonomiske resultat — baseret på jeres aftaler og konfiguration.',
      intro:
        'Mange virksomheder bruger i dag én enkelt indløser til alle kortransaktioner. Med intelligent routing kan forskellige transaktioner styres til den løsning, der giver de bedste vilkår, hvilket kan reducere omkostninger og skabe større fleksibilitet.',
      whyTitle: 'Hvorfor virksomheder bruger intelligent routing',
      whoTitle: 'Hvem passer dette til?',
      diagramTitle: 'Sådan vælges den mest fordelagtige indløser',
      diagramSubtitle:
        'Hver transaktion analyseres individuelt og sendes til den indløsningsaftale, der giver den laveste totalomkostning for netop den korttype.',
      valueTitle: 'Mere end bare lavere pris',
      valueSubtitle: 'Intelligent routing handler om at sænke omkostningen — men værdien stopper ikke der.',
      valueFootnote:
        'Mulighederne afhænger af kundens aftaler, tekniske opsætning, marked og hvilke betalingsmetoder der understøttes. Ikke alle transaktioner kan altid routes til en hvilken som helst indløser.',
      ctaButton: 'Prøv beregneren',
    },
    trust: {
      title: 'Uafhængig sammenligning',
      body:
        'Inlösenkollen blev udviklet for at hjælpe nordiske virksomheder med bedre indsigt i deres betalingsomkostninger og forstå, hvordan de kan optimere deres betalingsflows. Inlösenkollen tilbyder ingen egne indløsningsaftaler, men informerer virksomheder om, hvordan de kan skabe bedre forudsætninger gennem øget gennemsigtighed, større konkurrence mellem indløsere og smartere betalingsflows. I beholder selv fuld kontrol over, hvilke aftaler I vælger.',
    },
    faq: {
      title: 'Ofte stillede spørgsmål',
    },
    calculator: {
      step1Title: 'Trin 1: Virksomhedens betalingsvolumen',
      step1Description:
        'Angiv virksomhedens nuværende årlige kortomsætning og omtrentlige indløsningsomkostning. Har I kun en omtrentlig procentsats i dag, er det godt nok til et første estimat. Intelligent routing gør størst forskel for virksomheder og koncerner med høj omsætning.',
      step2Title: 'Trin 2: Forfin beregningen (valgfrit)',
      step2Description:
        'Jeres transaktionsmix er allerede forudfyldt med en gennemsnitlig svensk kortmiks, så I kan gå videre med det samme. Vil I have en mere præcis beregning? Det tager kun et øjeblik at finjustere — klik på "Brug detaljerede data" nedenfor.',
      step2TimeHint: 'Tager mindre end 2 minutter',
      useDetailedDataButton: 'Brug detaljerede data',
      presetMixBadge: 'Gennemsnitlig svensk kortmiks (forudfyldt)',
      step3Title: 'Trin 3: Indløsningsaftaler',
      step3Description:
        'Brug jeres omtrentlige pris, importér etablerede indløsere med kendte gebyrer, eller angiv eksakte priser pr. korttype, hvis I har dem.',
      annualVolume: 'Samlet kortomsætning pr. år',
      averageOrderValue: 'Gennemsnitlig ordreværdi (AOV)',
      annualTransactionsComputed: 'Antal transaktioner pr. år (beregnes automatisk)',
      currentFee: 'Nuværende gennemsnitlige procentvise indløsningsgebyr',
      ctaCalculate: 'Vis min besparelse',
      sectionTitle: 'Beregn jeres mulige besparelse',
      sectionDescription:
        'Udfyld jeres oplysninger — det tager mindre end 2 minutter. Alle felter er forudfyldt med eksempeldata, så I kan se, hvordan det fungerer med det samme.',
      pricingModeSimplifiedLabel: 'Gennemsnitspris',
      pricingModeSimplifiedDescription: 'Jeg kender kun min omtrentlige pris i dag',
      pricingModeCatalogLabel: 'Tilføj indløser',
      pricingModeCatalogDescription: 'Vælg etablerede udbydere med offentliggjorte gebyrer',
      pricingModeManualLabel: 'Detaljerede priser',
      pricingModeManualDescription: 'Angiv eksakte priser pr. korttype hos flere indløsere',
      showFixedFees: '+ Tilføj faste gebyrer til beregningen',
      hideFixedFees: '− Skjul faste gebyrer',
    },
    results: {
      eyebrow: 'Resultat',
      title: 'Jeres estimerede besparelse',
      description: 'Resultat baseret på angivne priser og årsvolumener. Alle tal er estimater.',
      exampleDataTitle: 'Dette er et branche-estimat – ikke en faktisk beregning.',
      exampleDataBody:
        'Resultatet er lige nu baseret på generelle branchepriser. Udfyld jeres egne oplysninger og sammenlign reelle vilkår fra indløsere for at få en korrekt besparelsesberegning.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet alligevel',
      estimatedSavingsLabel: 'Beregnet besparelse',
      potentialAnnualSavingsPrefix: 'Potentiel årlig besparelse:',
      savingsDisclaimer:
        'Baseret på de priser og volumener, du har angivet. Faktisk besparelse kan variere og er ikke garanteret.',
      simplifiedModeLabel: 'Forenklet tilstand',
      simplifiedModeTitle: 'Vælg detaljerede priser for at se potentiel besparelse',
      simplifiedModeBody:
        'I forenklet tilstand vises jeres nuværende beregnede omkostning baseret på gennemsnitsprisen fra trin 1. Tilføj priser pr. korttype hos flere indløsere for en fuld routinganalyse.',
      noRoutingLabel: 'Ingen routingdata',
      noRoutingTitle: 'Tilføj en indløser for at se potentiel besparelse',
      noRoutingBody:
        'Tilføj etablerede kortindløsere eller angiv priser manuelt i trin 3 for en fuld routinganalyse.',
      beforeAfterTitle: 'Før og efter',
      beforeAfterSubtitle: 'Sammenligning af nuværende indløsningsomkostning og omkostning efter intelligent routing',
      currentCostSeries: 'Nuværende indløsningsomkostning',
      routedCostSeries: 'Omkostning efter routing',
      savingsOverTimeTitle: 'Besparelse over tid',
      savingsOverTimeSubtitle: 'Akkumuleret beregnet besparelse efter 1, 2 og 3 år',
      accumulatedSavingsSeries: 'Akkumuleret besparelse',
      yearPrefix: 'År',
      volumeDistributionTitle: 'Omkostningsfordeling',
      volumeDistributionSubtitle: 'Hvordan betalingsvolumen fordeles mellem indløsere efter optimal routing',
      volumeLabel: 'Volumen',
      routingTableTitle: 'Anbefalet routing',
      routingTableSubtitle: 'Hver transaktionstype routes til den indløser, der giver den laveste beregnede omkostning',
      transactionTypeColumn: 'Transaktionstype',
      annualVolumeColumn: 'Årlig omsætning',
      currentCostColumn: 'Nuværende omkostning',
      acquirerColumn: 'Anbefalet indløser',
      newCostColumn: 'Ny omkostning',
      annualSavingsColumn: 'Årlig besparelse',
    },
    metrics: {
      currentCost: 'Nuværende omkostning pr. år',
      routedCost: 'Omkostning med intelligent routing',
      annualSavings: 'Besparelse pr. år',
      percentSavings: 'Procentvis omkostningsreduktion',
      threeYearSavings: 'Beregnet besparelse over tre år',
      tenYearSavings: 'Beregnet besparelse over ti år',
    },
    leadForm: {
      title: 'Vil du vide, hvad I faktisk kan spare?',
      description:
        'Send jeres nuværende indløsningspriser og transaktionsvolumener, så hjælper vi jer med en mere detaljeret analyse.',
      orgNumberLabel: 'CVR-nummer',
      orgNumberPlaceholder: 'f.eks. 12345678',
      submit: 'Book en omkostningsanalyse',
      submitting: 'Sender...',
      thanksTitle: 'Tak for jeres henvendelse!',
      thanksBody: 'Vi vender snart tilbage for at booke en mere detaljeret omkostningsanalyse.',
    },
    catalog: {
      applyTemplate: 'I kan ansøge om at blive kunde hos {name} her',
      introText:
        'Vælg etablerede kortindløsere og PSP’er med offentliggjorte eller estimerede gebyrer fra vores markedsundersøgelse. Priserne er illustrationer — ingen garanti for jeres aftale.',
      membershipNote:
        'Har jeres virksomhed allerede en indløsningsaftale via en brancheorganisation som Svensk Handel, Martin & Servera eller Visita? Angiv da jeres aftalepriser under "Detaljerede priser" på næste side.',
      addButton: 'Tilføj',
      removeButton: 'Fjern',
      sourceLabel: 'Kilde:',
      readMoreLabel: 'Læs mere',
      acquirerTypeLabel: 'Indløser',
      pspTypeLabel: 'PSP',
    },
    footer: {
      description:
        'Inlösenkollen er en informationsside om intelligent betalingsrouting, udviklet til nordiske virksomheder, butikker og kæder.',
      rights: 'Alle rettigheder forbeholdes.',
      developedBy: 'Udviklet af Anton Olsson.',
    },
    disclaimer:
      'Beregningen er et estimat baseret på de oplysninger, der er angivet. Faktiske omkostninger og besparelser kan variere afhængigt af blandt andet kortmiks, interchange, scheme fees, indløsningsaftaler, valutaveksling, minimumsomkostninger, teknisk opsætning og andre aftalevilkår. Beregningen udgør ikke et tilbud eller en garanti for en bestemt pris eller besparelse.',
    misc: {
      quickSelect: 'Hurtigvalg',
      customAmount: 'Andet beløb',
      aovHint: 'Gennemsnitligt beløb pr. kortkøb — de fleste kender dette bedre end det nøjagtige antal transaktioner.',
      currentFeeHint: 'Det vigtigste tal — de fleste kender cirka denne procentsats.',
      transactionsAutoNote: 'Beregnes automatisk: årlig omsætning ÷ AOV',
      fixedFeeLabel: 'Nuværende faste gebyr pr. transaktion',
      fixedFeeHint: 'Bruges sjældent — lad stå på 0, hvis I ikke har et fast gebyr pr. transaktion.',
      importedAcquirersHeading: 'Importerede indløsere',
      yourAcquirersHeading: 'Jeres indløsere',
      addAcquirerButton: '+ Tilføj indløser',
      simplifiedModeNotice:
        'I forenklet tilstand bruges gennemsnitsprisen, I angav i trin 1. Routing pr. korttype kræver detaljerede priser hos mindst én indløser.',
      noAcquirerNotice:
        'Ingen indløser valgt endnu. I kan fortsætte uden at tilføje en — resultatet viser så 0 kr i besparelse, da der intet er at sammenligne med.',
      consentText:
        'Jeg accepterer, at mine personoplysninger behandles for at blive kontaktet vedrørende en omkostningsanalyse.',
      consentError: 'Du skal acceptere behandling af personoplysninger',
      genericError: 'Noget gik galt. Prøv igen senere.',
      sendAnotherInquiry: 'Send en ny henvendelse',
      contactNameLabel: 'Navn',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefonnummer',
      annualVolumeApproxLabel: 'Omtrentlig kortomsætning pr. år',
      annualVolumeApproxPlaceholder: 'f.eks. 60 mio. kr',
      currentAcquirerLabel: 'Nuværende indløser',
      posSystemLabel: 'POS-/kassesystem I bruger i dag',
      posSystemPlaceholder: 'f.eks. Zettle, Shopify POS, eget kassesystem',
      messageLabel: 'Besked',
      messagePlaceholder: 'Fortæl os gerne mere om jeres betalingsopsætning...',
      attachmentLabel: 'Vedhæft prisliste eller faktura (valgfrit)',
      useExampleDataButton: 'Brug eksempeldata',
      exampleDataDisclaimer:
        'Eksempeldata repræsenterer ikke en specifik kunde. Brug det som udgangspunkt og juster efter jeres faktiske transaktionsmiks.',
      totalShareLabel: 'Samlet andel',
      mixGroupSwedish: 'Svenske kort',
      mixGroupInternational: 'EU og internationalt',
      sensitivityTitle: 'Følsomhedsanalyse',
      sensitivitySubtitle: 'Juster parametre og se resultatet opdateres med det samme',
      volumeLabel: 'Volumen',
      currentPercentFeeLabel: 'Nuværende procentvise gebyr',
      updatedAnnualSavingsLabel: 'Opdateret årlig besparelse',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },

  },
  fi: {
    nav: {
      home: 'Etusivu',
      howItWorks: 'Näin se toimii',
      calculator: 'Laskuri',
      contact: 'Yhteystiedot',
    },
    hero: {
      eyebrow: 'Älykäs maksureititys',
      title: 'Maksatteko liikaa korttitapahtumistanne?',
      subtitle:
        'Riippumaton analyysi korttimaksujenne kustannuksista. Katsokaa, voiko älykäs reititys pienentää kustannuksianne ohjaamalla tapahtumat oikealle maksunvälittäjälle ja oikeaan sopimukseen.',
      acquirerExplainerTitle: 'Mikä on maksunvälittäjä (acquirer)?',
      acquirerExplainer:
        'Maksunvälittäjä (acquirer) on pankki tai maksukumppani, joka käsittelee korttimaksun ja tilittää rahat yritykselle. Eri maksunvälittäjillä on erilaiset hinnat korttityypin ja sopimuksen mukaan, joten valinta voi vaikuttaa merkittävästi yrityksen kustannuksiin.',
      ctaPrimary: 'Laskekaa mahdollinen säästönne',
      ctaSecondary: 'Miten älykäs reititys toimii?',
      footnote:
        'Fiksu tapa pohjoismaisille yrityksille, kaupoille ja ketjuille pienentää myymälässä tapahtuvien korttimaksujen kustannuksia — muuttamatta asiakaskokemusta kassalla.',
    },
    howItWorks: {
      eyebrow: 'Näin se toimii',
      title: 'Älykäs reititys kolmessa vaiheessa',
      description:
        'Älykäs reititys analysoi jokaisen tapahtuman ja valitsee sopimuksen, joka antaa parhaan taloudellisen lopputuloksen — teidän sopimustenne ja asetustenne perusteella.',
      intro:
        'Monet yritykset käyttävät nykyään yhtä ainoaa maksunvälittäjää kaikkiin korttitapahtumiin. Älykkään reitityksen avulla eri tapahtumat voidaan ohjata ratkaisuun, joka tarjoaa parhaat ehdot, mikä voi pienentää kustannuksia ja luoda enemmän joustavuutta.',
      whyTitle: 'Miksi yritykset käyttävät älykästä reititystä',
      whoTitle: 'Kenelle tämä sopii?',
      diagramTitle: 'Näin edullisin maksunvälittäjä valitaan',
      diagramSubtitle:
        'Jokainen tapahtuma analysoidaan erikseen ja lähetetään sopimukseen, joka tarjoaa alhaisimman kokonaiskustannuksen juuri kyseiselle korttityypille.',
      valueTitle: 'Muutakin kuin vain alhaisempi hinta',
      valueSubtitle: 'Älykäs reititys ei ole vain kustannusten pienentämistä — arvo ei lopu siihen.',
      valueFootnote:
        'Mahdollisuudet riippuvat asiakkaan sopimuksista, teknisestä toteutuksesta, markkinasta ja tuetuista maksutavoista. Kaikkia tapahtumia ei aina voida reitittää mille tahansa maksunvälittäjälle.',
      ctaButton: 'Kokeile laskuria',
    },
    trust: {
      title: 'Riippumaton vertailu',
      body:
        'Inlösenkollen kehitettiin auttamaan pohjoismaisia yrityksiä saamaan parempi käsitys maksukustannuksistaan ja ymmärtämään, miten ne voivat optimoida maksuvirtojaan. Inlösenkollen ei tarjoa omia vastaanottosopimuksia, vaan kertoo yrityksille, miten ne voivat luoda paremmat edellytykset lisääntyneen läpinäkyvyyden, maksunvälittäjien välisen suuremman kilpailun ja älykkäämpien maksuvirtojen kautta. Säilytätte itse täyden hallinnan siitä, mitä sopimuksia valitsette.',
    },
    faq: {
      title: 'Usein kysytyt kysymykset',
    },
    calculator: {
      step1Title: 'Vaihe 1: Yrityksen maksuvolyymi',
      step1Description:
        'Anna yrityksenne nykyinen vuotuinen korttimyynti ja arvioitu vastaanottokustannus. Jos tiedätte vain karkean prosenttiluvun, se riittää ensimmäiseen arvioon. Älykäs reititys tuo suurimman hyödyn suuren liikevaihdon yrityksille ja konserneille.',
      step2Title: 'Vaihe 2: Tarkenna laskelmaa (valinnainen)',
      step2Description:
        'Korttijakaumanne on jo esitäytetty keskimääräisellä ruotsalaisella korttijakaumalla, joten voitte jatkaa suoraan. Haluatteko tarkemman laskelman? Hienosäätö vie vain hetken — klikatkaa alla olevaa "Käytä yksityiskohtaisia tietoja".',
      step2TimeHint: 'Vie alle 2 minuuttia',
      useDetailedDataButton: 'Käytä yksityiskohtaisia tietoja',
      presetMixBadge: 'Keskimääräinen ruotsalainen korttijakauma (esitäytetty)',
      step3Title: 'Vaihe 3: Vastaanottosopimukset',
      step3Description:
        'Käyttäkää arvioitua hintaanne, tuokaa mukaan tunnettuja maksunvälittäjiä tiedossa olevin hinnoin, tai syöttäkää tarkat hinnat korttityypeittäin, jos ne ovat tiedossa.',
      annualVolume: 'Korttimyynti yhteensä vuodessa',
      averageOrderValue: 'Keskimääräinen tilausarvo (AOV)',
      annualTransactionsComputed: 'Tapahtumien määrä vuodessa (lasketaan automaattisesti)',
      currentFee: 'Nykyinen keskimääräinen prosentuaalinen vastaanottomaksu',
      ctaCalculate: 'Näytä säästöni',
      sectionTitle: 'Laskekaa mahdollinen säästönne',
      sectionDescription:
        'Täyttäkää tietonne — se vie alle 2 minuuttia. Kaikki kentät on esitäytetty esimerkkitiedoilla, joten näette heti, miten se toimii.',
      pricingModeSimplifiedLabel: 'Keskihinta',
      pricingModeSimplifiedDescription: 'Tiedän vain suunnilleen nykyisen hintani',
      pricingModeCatalogLabel: 'Lisää maksunvälittäjä',
      pricingModeCatalogDescription: 'Valitkaa tunnettuja toimijoita, joiden maksut on julkaistu',
      pricingModeManualLabel: 'Yksityiskohtaiset hinnat',
      pricingModeManualDescription: 'Syöttäkää tarkat hinnat korttityypeittäin usealta maksunvälittäjältä',
      showFixedFees: '+ Lisää kiinteät maksut laskelmaan',
      hideFixedFees: '− Piilota kiinteät maksut',
    },
    results: {
      eyebrow: 'Tulos',
      title: 'Arvioitu säästönne',
      description: 'Tulos perustuu annettuihin hintoihin ja vuosivolyymeihin. Kaikki luvut ovat arvioita.',
      exampleDataTitle: 'Tämä on toimialan arvio – ei todellinen laskelma.',
      exampleDataBody:
        'Tulos perustuu tällä hetkellä yleisiin toimialan hintoihin. Täyttäkää omat tietonne ja vertailkaa maksunvälittäjien todellisia ehtoja saadaksenne tarkan säästölaskelman.',
      exampleDataDismiss: 'Selvä, näytä tulos silti',
      estimatedSavingsLabel: 'Arvioitu säästö',
      potentialAnnualSavingsPrefix: 'Mahdollinen vuotuinen säästö:',
      savingsDisclaimer:
        'Perustuu antamiinne hintoihin ja volyymeihin. Todellinen säästö voi vaihdella eikä ole taattu.',
      simplifiedModeLabel: 'Yksinkertaistettu tila',
      simplifiedModeTitle: 'Valitkaa yksityiskohtaiset hinnat nähdäksenne mahdollisen säästön',
      simplifiedModeBody:
        'Yksinkertaistetussa tilassa näytetään nykyinen laskettu kustannuksenne vaiheen 1 keskihinnan perusteella. Lisätkää hinnat korttityypeittäin useammalta maksunvälittäjältä saadaksenne täydellisen reititysanalyysin.',
      noRoutingLabel: 'Ei reititystietoja',
      noRoutingTitle: 'Lisätkää maksunvälittäjä nähdäksenne mahdollisen säästön',
      noRoutingBody:
        'Lisätkää tunnettuja maksunvälittäjiä tai syöttäkää hinnat manuaalisesti vaiheessa 3 saadaksenne täydellisen reititysanalyysin.',
      beforeAfterTitle: 'Ennen ja jälkeen',
      beforeAfterSubtitle: 'Vertailu nykyisen vastaanottokustannuksen ja älykkään reitityksen jälkeisen kustannuksen välillä',
      currentCostSeries: 'Nykyinen vastaanottokustannus',
      routedCostSeries: 'Kustannus reitityksen jälkeen',
      savingsOverTimeTitle: 'Säästö ajan myötä',
      savingsOverTimeSubtitle: 'Kertynyt arvioitu säästö 1, 2 ja 3 vuoden jälkeen',
      accumulatedSavingsSeries: 'Kertynyt säästö',
      yearPrefix: 'Vuosi',
      volumeDistributionTitle: 'Kustannusten jakautuminen',
      volumeDistributionSubtitle: 'Miten maksuvolyymi jakautuu maksunvälittäjien kesken optimaalisen reitityksen jälkeen',
      volumeLabel: 'Volyymi',
      routingTableTitle: 'Suositeltu reititys',
      routingTableSubtitle: 'Jokainen tapahtumatyyppi reititetään maksunvälittäjälle, joka tarjoaa alhaisimman lasketun kustannuksen',
      transactionTypeColumn: 'Tapahtumatyyppi',
      annualVolumeColumn: 'Vuotuinen liikevaihto',
      currentCostColumn: 'Nykyinen kustannus',
      acquirerColumn: 'Suositeltu maksunvälittäjä',
      newCostColumn: 'Uusi kustannus',
      annualSavingsColumn: 'Vuotuinen säästö',
    },
    metrics: {
      currentCost: 'Nykyinen kustannus vuodessa',
      routedCost: 'Kustannus älykkäällä reitityksellä',
      annualSavings: 'Säästö vuodessa',
      percentSavings: 'Prosentuaalinen kustannusten lasku',
      threeYearSavings: 'Arvioitu säästö kolmessa vuodessa',
      tenYearSavings: 'Arvioitu säästö kymmenessä vuodessa',
    },
    leadForm: {
      title: 'Haluatko tietää, mitä voisitte oikeasti säästää?',
      description:
        'Lähettäkää nykyiset vastaanottohintanne ja tapahtumavolyyminne, niin autamme teitä tarkemmassa analyysissä.',
      orgNumberLabel: 'Y-tunnus',
      orgNumberPlaceholder: 'esim. 1234567-8',
      submit: 'Varaa kustannusanalyysi',
      submitting: 'Lähetetään...',
      thanksTitle: 'Kiitos yhteydenotostanne!',
      thanksBody: 'Otamme pian yhteyttä varataksemme tarkemman kustannusanalyysin.',
    },
    catalog: {
      applyTemplate: 'Voitte hakea {name}:n asiakkaaksi täältä',
      introText:
        'Valitkaa tunnettuja korttien vastaanottajia ja PSP:itä, joiden hinnat perustuvat markkinatutkimuksemme julkaistuihin tai arvioituihin maksuihin. Hinnat ovat havainnollistavia — eivät takuu sopimuksellenne.',
      membershipNote:
        'Onko yritykselläänne jo vastaanottosopimus toimialajärjestön, kuten Svensk Handelin, Martin & Serveran tai Visitan kautta? Syöttäkää silloin sopimushintanne "Yksityiskohtaiset hinnat" -kohtaan seuraavalla sivulla.',
      addButton: 'Lisää',
      removeButton: 'Poista',
      sourceLabel: 'Lähde:',
      readMoreLabel: 'Lue lisää',
      acquirerTypeLabel: 'Maksunvälittäjä',
      pspTypeLabel: 'PSP',
    },
    footer: {
      description:
        'Inlösenkollen on tietosivusto älykkäästä maksureitityksestä, kehitetty pohjoismaisille yrityksille, kaupoille ja ketjuille.',
      rights: 'Kaikki oikeudet pidätetään.',
      developedBy: 'Kehittänyt Anton Olsson.',
    },
    disclaimer:
      'Laskelma on arvio, joka perustuu annettuihin tietoihin. Todelliset kustannukset ja säästöt voivat vaihdella muun muassa korttijakauman, interchange-maksujen, korttiyhtiöiden maksujen, vastaanottosopimusten, valuutanvaihdon, vähimmäiskustannusten, teknisen toteutuksen ja muiden sopimusehtojen mukaan. Laskelma ei ole tarjous eikä takuu tietystä hinnasta tai säästöstä.',
    misc: {
      quickSelect: 'Pikavalinta',
      customAmount: 'Muu summa',
      aovHint: 'Keskimääräinen summa korttiostoa kohden — useimmat tietävät tämän paremmin kuin tarkan tapahtumamäärän.',
      currentFeeHint: 'Tärkein luku — useimmat tietävät suunnilleen tämän prosenttiluvun.',
      transactionsAutoNote: 'Lasketaan automaattisesti: vuotuinen liikevaihto ÷ AOV',
      fixedFeeLabel: 'Nykyinen kiinteä maksu per tapahtuma',
      fixedFeeHint: 'Harvoin käytössä — jättäkää arvoksi 0, jos teillä ei ole kiinteää maksua per tapahtuma.',
      importedAcquirersHeading: 'Tuodut maksunvälittäjät',
      yourAcquirersHeading: 'Teidän maksunvälittäjänne',
      addAcquirerButton: '+ Lisää maksunvälittäjä',
      simplifiedModeNotice:
        'Yksinkertaistetussa tilassa käytetään vaiheessa 1 antamaanne keskihintaa. Reititys korttityypeittäin edellyttää yksityiskohtaisia hintoja vähintään yhdeltä maksunvälittäjältä.',
      noAcquirerNotice:
        'Maksunvälittäjää ei ole vielä valittu. Voitte jatkaa lisäämättä yhtään — tulos näyttää tällöin 0 kr säästöä, koska vertailtavaa ei ole.',
      consentText:
        'Hyväksyn, että henkilötietojani käsitellään yhteydenottoa varten kustannusanalyysin sopimiseksi.',
      consentError: 'Sinun täytyy hyväksyä henkilötietojen käsittely',
      genericError: 'Jokin meni pieleen. Yritä myöhemmin uudelleen.',
      sendAnotherInquiry: 'Lähetä uusi tiedustelu',
      contactNameLabel: 'Nimi',
      emailLabel: 'Sähköposti',
      phoneLabel: 'Puhelinnumero',
      annualVolumeApproxLabel: 'Arvioitu korttimyynti vuodessa',
      annualVolumeApproxPlaceholder: 'esim. 60 milj. kr',
      currentAcquirerLabel: 'Nykyinen maksunvälittäjä',
      posSystemLabel: 'Kassajärjestelmä, jota käytätte nyt',
      posSystemPlaceholder: 'esim. Zettle, Shopify POS, oma kassajärjestelmä',
      messageLabel: 'Viesti',
      messagePlaceholder: 'Kertokaa mielellään lisää maksujärjestelystänne...',
      attachmentLabel: 'Liitä hinnasto tai lasku (valinnainen)',
      useExampleDataButton: 'Käytä esimerkkitietoja',
      exampleDataDisclaimer:
        'Esimerkkitiedot eivät edusta tiettyä asiakasta. Käyttäkää niitä lähtökohtana ja mukauttakaa todellisen korttijakaumanne mukaan.',
      totalShareLabel: 'Osuus yhteensä',
      mixGroupSwedish: 'Ruotsalaiset kortit',
      mixGroupInternational: 'EU ja kansainväliset',
      sensitivityTitle: 'Herkkyysanalyysi',
      sensitivitySubtitle: 'Säädä parametreja ja katso, miten tulos päivittyy heti',
      volumeLabel: 'Volyymi',
      currentPercentFeeLabel: 'Nykyinen prosentuaalinen maksu',
      updatedAnnualSavingsLabel: 'Päivitetty vuotuinen säästö',
    },

    languageNames: { sv: 'Svenska', en: 'English', no: 'Norsk', da: 'Dansk', fi: 'Suomi' },
  },
} as const

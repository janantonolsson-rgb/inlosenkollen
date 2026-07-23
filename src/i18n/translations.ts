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
  trustBar: {
    developedForLabel: string
    independentLine: string
    experienceLine: string
  }
  faq: {
    title: string
  }
  pdfReport: {
    downloadButton: string
    documentTitle: string
    documentSubtitle: string
    summaryHeading: string
    summaryPotentialLabel: string
    prerequisitesHeading: string
    annualVolumeLabel: string
    averageOrderValueLabel: string
    transactionCountLabel: string
    currentFeeLabel: string
    optimizationHeading: string
    currentCostLabel: string
    routedCostLabel: string
    differenceLabel: string
    factorsHeading: string
    factorCardMix: string
    factorInternational: string
    factorCurrentAgreements: string
    factorAvailableAcquirers: string
    disclaimerHeading: string
    disclaimerBody: string
    generatedLabel: string
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
    perYearSuffix: string
    basedOnLabel: string
    basedOnVolume: string
    basedOnMix: string
    basedOnFees: string
    ctaReview: string
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
    oneYearSavings: string
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
  apm: {
    eyebrow: string
    title: string
    description: string
    swish: string
    klarna: string
    mobilePay: string
    localMethods: string
  }
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
    backButton: string
    nextButton: string
    headerContactButton: string
    avgFeePrefix: string
    cardTypeColumn: string
    percentColumn: string
    fixedFeeColumn: string
    gotOwnQuotesTitle: string
    gotOwnQuotesBody: string
    enterDetailedPricesButton: string
    hideDetailedPricesButton: string
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
      ctaPrimary: 'Se hur mycket ni kan spara',
      ctaSecondary: 'Hur fungerar intelligent routing?',
      footnote:
        'Inlösenkollen har utvecklats för att hjälpa nordiska företag att förstå och minska sina kostnader för kortbetalningar i fysisk butik.',
    },
    howItWorks: {
      eyebrow: 'Så fungerar det',
      title: 'Hur kommer vi igång med intelligent routing?',
      description:
        'Intelligent routing analyserar varje transaktion och väljer det inlösenavtal som ger bäst ekonomiskt utfall — baserat på era avtal och konfiguration.',
      intro:
        'Många företag använder idag en enda inlösare för alla korttransaktioner. Med intelligent routing kan olika transaktioner styras till den lösning som ger bäst villkor, vilket kan minska kostnader och skapa större flexibilitet.',
      whyTitle: 'Varför företag använder intelligent routing',
      whoTitle: 'Vem passar detta för?',
      diagramTitle: 'Så väljs den mest fördelaktiga inlösaren',
      diagramSubtitle:
        'Genom intelligent routing analyseras varje köp i realtid och styrs automatiskt till den inlösare som kan hantera betalningen till lägst totalkostnad.',
      valueTitle: 'Mer än bara lägre pris',
      valueSubtitle: 'Intelligent routing handlar om att sänka kostnaden, men värdet stannar inte där.',
      valueFootnote:
        'Möjligheterna beror på kundens avtal, tekniska uppsättning, marknad och vilka betalningsmetoder som stöds. Alla transaktioner kan inte alltid routas till valfri inlösare.',
      ctaButton: 'Prova kalkylatorn',
    },
    trust: {
      title: 'Oberoende jämförelse',
      body:
        'Inlösenkollen utvecklades för att hjälpa nordiska företag att få bättre insikt i sina betalningskostnader och förstå hur de kan optimera sina betalflöden. Inlösenkollen erbjuder inga egna inlösenavtal, utan informerar företag om hur de kan skapa bättre förutsättningar genom ökad transparens, större konkurrens mellan inlösare och smartare betalflöden. Ni behåller själva full kontroll över vilka avtal ni väljer.',
    },
    trustBar: {
      developedForLabel: 'Utvecklad för:',
      independentLine: 'Oberoende analys av era betalningskostnader.',
      experienceLine: 'Utvecklad baserat på erfarenhet från den nordiska betalningsmarknaden.',
    },
    faq: {
      title: 'Vanliga frågor',
    },
    pdfReport: {
      downloadButton: 'Ladda ner PDF-rapport',
      documentTitle: 'Inlösenkollen',
      documentSubtitle: 'Preliminär analys av kortbetalningskostnader',
      summaryHeading: 'Sammanfattning',
      summaryPotentialLabel: 'Uppskattad besparingspotential',
      prerequisitesHeading: 'Företagets förutsättningar',
      annualVolumeLabel: 'Årlig kortomsättning',
      averageOrderValueLabel: 'Genomsnittligt ordervärde',
      transactionCountLabel: 'Antal transaktioner per år',
      currentFeeLabel: 'Nuvarande inlösenkostnad',
      optimizationHeading: 'Möjlig optimering',
      currentCostLabel: 'Nuvarande uppskattad kostnad',
      routedCostLabel: 'Möjlig kostnad med intelligent routing',
      differenceLabel: 'Potentiell skillnad',
      factorsHeading: 'Faktorer som påverkar resultatet',
      factorCardMix: 'Kortmix',
      factorInternational: 'Internationella kort',
      factorCurrentAgreements: 'Nuvarande avtal',
      factorAvailableAcquirers: 'Tillgängliga inlösare',
      disclaimerHeading: 'Viktigt att veta',
      disclaimerBody:
        'Detta är en indikativ analys baserad på angivna uppgifter, inte en garanti för ett visst pris eller en viss besparing. Faktiska kostnader och besparingar kan variera beroende på bland annat kortmix, interchange, scheme fees, inlösenavtal och andra avtalsvillkor.',
      generatedLabel: 'Genererad',
    },
    calculator: {
      step1Title: 'Steg 1: Företagets betalningsvolym',
      step1Description:
        'Ange företagets årliga kortomsättning och vad ni betalar för kortinlösen idag.',
      step2Title: 'Steg 2: Anpassa transaktionsmix',
      step2Description:
        'Beräkningen bygger just nu på den genomsnittliga fördelningen av korttyper i Sverige. Ni kan gå vidare direkt, men vill ni få en mer exakt uppskattning kan ni justera fördelningen utifrån er egen statistik nedan.',
      step2TimeHint: 'VALFRITT',
      useDetailedDataButton: 'Anpassa med egna siffror',
      presetMixBadge: 'Genomsnittlig svensk kortmix (förifylld)',
      step3Title: 'Steg 3: Inlösenavtal',
      step3Description:
        'Lägg in de inlösenpriser ni har fått från olika inlösare. För bästa resultat anger ni priser per korttyp, men ni kan även börja med ungefärliga nivåer.',
      annualVolume: 'Total kortomsättning per år',
      averageOrderValue: 'Genomsnittligt ordervärde (AoV)',
      annualTransactionsComputed: 'Antal transaktioner per år (beräknas automatiskt)',
      currentFee: 'Nuvarande genomsnittlig procentuell inlösenavgift',
      ctaCalculate: 'Se hur mycket ni kan spara',
      sectionTitle: 'Beräkna er möjliga besparing',
      sectionDescription:
        'Genom att ange era uppgifter nedan kan ni få en uppskattning av hur mycket ni kan spara genom intelligent routing.',
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
      exampleDataTitle: 'Ni har ännu inte uppdaterat informationen.',
      exampleDataBody:
        'Resultatet är därför endast en uppskattning. Lägg in era egna aktuella kostnader och inlösenpriser för att få en mer korrekt beräkning av er möjliga besparing.',
      exampleDataDismiss: 'Jag förstår, visa resultatet ändå',
      estimatedSavingsLabel: 'Er uppskattade potential',
      potentialAnnualSavingsPrefix: 'Potentiell årlig besparing:',
      perYearSuffix: '/år',
      basedOnLabel: 'Baserat på:',
      basedOnVolume: 'Er kortomsättning',
      basedOnMix: 'Er transaktionsmix',
      basedOnFees: 'Era nuvarande avgifter',
      ctaReview: 'Få en kostnadsfri genomgång av era möjligheter',
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
      oneYearSavings: 'Besparing på 1 år',
      threeYearSavings: 'Besparing på 3 år',
      tenYearSavings: 'Besparing på 10 år',
    },
    leadForm: {
      title: 'Vill ni veta vilka besparingsmöjligheter som finns?',
      description:
        'Skicka in era nuvarande inlösenpriser och transaktionsvolymer så gör vi en första bedömning av potentialen. Därefter hjälper vi er att ta nästa steg och jämföra alternativ utifrån era förutsättningar.',
      orgNumberLabel: 'Organisationsnummer',
      orgNumberPlaceholder: 't.ex. 556677-8899',
      submit: 'Kontakta oss för en kostnadsfri genomgång',
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
    apm: {
      eyebrow: 'Övriga betalmetoder',
      title: 'Alternativa betalningsmetoder',
      description:
        'Swish, Klarna, MobilePay och andra alternativa betalningsmetoder ingår inte i kalkylatorn eftersom de normalt inte kan routas mellan flera inlösare. Intelligent routing gäller därför endast kortbetalningar. Alternativa betalmetoder kan självklart användas parallellt.',
      swish: 'Populärt i Sverige med fast eller procentuell avgift. Ingår inte i kalkylatorns routing.',
      klarna: 'Buy now, pay later och direktbetalningar med egna avgiftsmodeller per produkt.',
      mobilePay: 'Vanligt i Danmark och Finland. Egen prissättning, separat från kortbetalningar.',
      localMethods: 'Trustly, Vipps, BankAxept m.fl. kan användas parallellt, men routas inte i kalkylatorn.',
    },
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
      backButton: 'Tillbaka',
      nextButton: 'Nästa',
      headerContactButton: 'Kontakta oss',
      avgFeePrefix: 'Snittavgift ca',
      cardTypeColumn: 'Korttyp',
      percentColumn: 'Procent',
      fixedFeeColumn: 'Fast avgift',
      gotOwnQuotesTitle: 'Har ni fått egna offerter?',
      gotOwnQuotesBody:
        'Om ni har fått prisuppgifter direkt från en eller flera inlösare kan ni ange dem här för en mer exakt beräkning.',
      enterDetailedPricesButton: 'Ange detaljerade priser',
      hideDetailedPricesButton: 'Dölj detaljerade priser',
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
      ctaPrimary: 'See how much you could save',
      ctaSecondary: 'How does intelligent routing work?',
      footnote:
        'Inlösenkollen was developed to help Nordic companies understand and reduce their costs for in-store card payments.',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'How do we get started with intelligent routing?',
      description:
        'Intelligent routing analyzes every transaction and selects the acquiring agreement that gives the best financial outcome — based on your agreements and configuration.',
      intro:
        'Many companies today use a single acquirer for all card transactions. With intelligent routing, different transactions can be directed to the solution that offers the best terms, which can reduce costs and create greater flexibility.',
      whyTitle: 'Why companies use intelligent routing',
      whoTitle: 'Who is this for?',
      diagramTitle: 'How the most favorable acquirer is chosen',
      diagramSubtitle:
        'Through intelligent routing, every purchase is analyzed in real time and automatically directed to the acquirer that can handle the payment at the lowest total cost.',
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
    trustBar: {
      developedForLabel: 'Developed for:',
      independentLine: 'An independent analysis of your payment costs.',
      experienceLine: 'Built on experience from the Nordic payments market.',
    },
    faq: {
      title: 'Frequently asked questions',
    },
    pdfReport: {
      downloadButton: 'Download PDF report',
      documentTitle: 'Inlösenkollen',
      documentSubtitle: 'Preliminary analysis of card payment costs',
      summaryHeading: 'Summary',
      summaryPotentialLabel: 'Estimated savings potential',
      prerequisitesHeading: 'Company details',
      annualVolumeLabel: 'Annual card turnover',
      averageOrderValueLabel: 'Average order value',
      transactionCountLabel: 'Transactions per year',
      currentFeeLabel: 'Current acquiring cost',
      optimizationHeading: 'Potential optimization',
      currentCostLabel: 'Current estimated cost',
      routedCostLabel: 'Possible cost with intelligent routing',
      differenceLabel: 'Potential difference',
      factorsHeading: 'Factors affecting the result',
      factorCardMix: 'Card mix',
      factorInternational: 'International cards',
      factorCurrentAgreements: 'Current agreements',
      factorAvailableAcquirers: 'Available acquirers',
      disclaimerHeading: 'Important to know',
      disclaimerBody:
        'This is an indicative analysis based on the information provided, not a guarantee of a specific price or saving. Actual costs and savings may vary depending on, among other things, card mix, interchange, scheme fees, acquiring agreements, and other contractual terms.',
      generatedLabel: 'Generated',
    },
    calculator: {
      step1Title: 'Step 1: Your company\u2019s payment volume',
      step1Description:
        'Enter your company\u2019s annual card turnover and what you currently pay for card acquiring.',
      step2Title: 'Step 2: Adjust transaction mix',
      step2Description:
        'The calculation is currently based on the average distribution of card types in Sweden. You can move on right away, or adjust the distribution below using your own statistics for a more precise estimate.',
      step2TimeHint: 'OPTIONAL',
      useDetailedDataButton: 'Adjust with your own figures',
      presetMixBadge: 'Average Swedish card mix (pre-filled)',
      step3Title: 'Step 3: Acquiring agreements',
      step3Description:
        'Enter the acquiring prices you’ve received from different acquirers. For the best result, enter prices per card type, but you can also start with approximate levels.',
      annualVolume: 'Total card turnover per year',
      averageOrderValue: 'Average Order Value (AoV)',
      annualTransactionsComputed: 'Transactions per year (calculated automatically)',
      currentFee: 'Current average percentage acquiring fee',
      ctaCalculate: 'See how much you could save',
      sectionTitle: 'Calculate your potential savings',
      sectionDescription:
        'By entering your details below, you can get an estimate of how much you could save through intelligent routing.',
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
      exampleDataTitle: 'You haven\u2019t updated the information yet.',
      exampleDataBody:
        'The result is therefore only an estimate. Enter your own actual costs and acquiring prices to get a more accurate calculation of your potential savings.',
      exampleDataDismiss: 'Got it, show the result anyway',
      estimatedSavingsLabel: 'Your estimated potential',
      potentialAnnualSavingsPrefix: 'Potential annual savings:',
      perYearSuffix: '/year',
      basedOnLabel: 'Based on:',
      basedOnVolume: 'Your card turnover',
      basedOnMix: 'Your transaction mix',
      basedOnFees: 'Your current fees',
      ctaReview: 'Get a free review of your opportunities',
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
      oneYearSavings: 'Savings over 1 year',
      threeYearSavings: 'Savings over 3 years',
      tenYearSavings: 'Savings over 10 years',
    },
    leadForm: {
      title: 'Want to know what savings opportunities exist?',
      description:
        'Send us your current acquiring prices and transaction volumes and we\u2019ll make an initial assessment of the potential. We\u2019ll then help you take the next step and compare options based on your situation.',
      orgNumberLabel: 'Organization/registration number',
      orgNumberPlaceholder: 'e.g. 556677-8899',
      submit: 'Contact us for a free review',
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
    apm: {
      eyebrow: 'Other payment methods',
      title: 'Alternative payment methods',
      description:
        'Swish, Klarna, MobilePay and other alternative payment methods are not included in the calculator because they normally cannot be routed between several acquirers. Intelligent routing therefore only applies to card payments. Alternative payment methods can of course still be used in parallel.',
      swish: 'Popular in Sweden with a fixed or percentage fee. Not included in the calculator’s routing.',
      klarna: 'Buy now, pay later and direct payments with their own fee models per product.',
      mobilePay: 'Common in Denmark and Finland. Its own pricing, separate from card payments.',
      localMethods: 'Trustly, Vipps, BankAxept, etc. can be used in parallel, but are not routed in the calculator.',
    },
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
      backButton: 'Back',
      nextButton: 'Next',
      headerContactButton: 'Contact us',
      avgFeePrefix: 'Average fee approx.',
      cardTypeColumn: 'Card type',
      percentColumn: 'Percentage',
      fixedFeeColumn: 'Fixed fee',
      gotOwnQuotesTitle: 'Have you received your own quotes?',
      gotOwnQuotesBody:
        'If you have received pricing directly from one or more acquirers, you can enter it here for a more precise calculation.',
      enterDetailedPricesButton: 'Enter detailed prices',
      hideDetailedPricesButton: 'Hide detailed prices',
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
      ctaPrimary: 'Se hvor mye dere kan spare',
      ctaSecondary: 'Hvordan fungerer intelligent ruting?',
      footnote:
        'Inlösenkollen er utviklet for å hjelpe nordiske bedrifter med å forstå og redusere kostnadene sine for kortbetaling i fysisk butikk.',
    },
    howItWorks: {
      eyebrow: 'Slik fungerer det',
      title: 'Hvordan kommer vi i gang med intelligent ruting?',
      description:
        'Intelligent ruting analyserer hver transaksjon og velger innløsningsavtalen som gir best økonomisk utfall — basert på deres avtaler og konfigurasjon.',
      intro:
        'Mange bedrifter bruker i dag én enkelt innløser for alle korttransaksjoner. Med intelligent ruting kan ulike transaksjoner styres til løsningen som gir best vilkår, noe som kan redusere kostnader og skape større fleksibilitet.',
      whyTitle: 'Hvorfor bedrifter bruker intelligent ruting',
      whoTitle: 'Hvem passer dette for?',
      diagramTitle: 'Slik velges den mest fordelaktige innløseren',
      diagramSubtitle:
        'Gjennom intelligent ruting analyseres hvert kjøp i sanntid og styres automatisk til innløseren som kan håndtere betalingen til lavest totalkostnad.',
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
    trustBar: {
      developedForLabel: 'Utviklet for:',
      independentLine: 'Uavhengig analyse av deres betalingskostnader.',
      experienceLine: 'Utviklet basert på erfaring fra det nordiske betalingsmarkedet.',
    },
    faq: {
      title: 'Ofte stilte spørsmål',
    },
    pdfReport: {
      downloadButton: 'Last ned PDF-rapport',
      documentTitle: 'Inlösenkollen',
      documentSubtitle: 'Foreløpig analyse av kortbetalingskostnader',
      summaryHeading: 'Sammendrag',
      summaryPotentialLabel: 'Beregnet besparelsespotensial',
      prerequisitesHeading: 'Bedriftens forutsetninger',
      annualVolumeLabel: 'Årlig kortomsetning',
      averageOrderValueLabel: 'Gjennomsnittlig ordreverdi',
      transactionCountLabel: 'Antall transaksjoner per år',
      currentFeeLabel: 'Nåværende innløsningskostnad',
      optimizationHeading: 'Mulig optimalisering',
      currentCostLabel: 'Nåværende beregnede kostnad',
      routedCostLabel: 'Mulig kostnad med intelligent ruting',
      differenceLabel: 'Potensiell forskjell',
      factorsHeading: 'Faktorer som påvirker resultatet',
      factorCardMix: 'Kortmiks',
      factorInternational: 'Internasjonale kort',
      factorCurrentAgreements: 'Nåværende avtaler',
      factorAvailableAcquirers: 'Tilgjengelige innløsere',
      disclaimerHeading: 'Viktig å vite',
      disclaimerBody:
        'Dette er en indikativ analyse basert på oppgitte opplysninger, ikke en garanti for en bestemt pris eller besparelse. Faktiske kostnader og besparelser kan variere avhengig av blant annet kortmiks, interchange, scheme fees, innløsningsavtaler og andre avtalevilkår.',
      generatedLabel: 'Generert',
    },
    calculator: {
      step1Title: 'Steg 1: Bedriftens betalingsvolum',
      step1Description:
        'Angi bedriftens årlige kortomsetning og hva dere betaler for kortinnløsning i dag.',
      step2Title: 'Steg 2: Tilpass transaksjonsmiks',
      step2Description:
        'Beregningen bygger nå på den gjennomsnittlige fordelingen av korttyper i Sverige. Dere kan gå videre med en gang, eller justere fordelingen nedenfor ut fra egen statistikk for et mer presist anslag.',
      step2TimeHint: 'VALGFRITT',
      useDetailedDataButton: 'Tilpass med egne tall',
      presetMixBadge: 'Gjennomsnittlig svensk kortmiks (forhåndsutfylt)',
      step3Title: 'Steg 3: Innløsningsavtaler',
      step3Description:
        'Legg inn innløsningsprisene dere har fått fra ulike innløsere. For best resultat angir dere priser per korttype, men dere kan også starte med omtrentlige nivåer.',
      annualVolume: 'Total kortomsetning per år',
      averageOrderValue: 'Gjennomsnittlig ordreverdi (AOV)',
      annualTransactionsComputed: 'Antall transaksjoner per år (beregnes automatisk)',
      currentFee: 'Nåværende gjennomsnittlig prosentvis innløsningsgebyr',
      ctaCalculate: 'Se hvor mye dere kan spare',
      sectionTitle: 'Beregn deres mulige besparelse',
      sectionDescription:
        'Ved å fylle inn opplysningene deres nedenfor kan dere få et anslag på hvor mye dere kan spare gjennom intelligent ruting.',
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
      exampleDataTitle: 'Dere har ennå ikke oppdatert informasjonen.',
      exampleDataBody:
        'Resultatet er derfor kun et estimat. Legg inn deres egne, faktiske kostnader og innløsningspriser for å få en mer korrekt beregning av deres mulige besparelse.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet likevel',
      estimatedSavingsLabel: 'Deres beregnede potensial',
      potentialAnnualSavingsPrefix: 'Potensiell årlig besparelse:',
      perYearSuffix: '/år',
      basedOnLabel: 'Basert på:',
      basedOnVolume: 'Deres kortomsetning',
      basedOnMix: 'Deres transaksjonsmiks',
      basedOnFees: 'Deres nåværende gebyrer',
      ctaReview: 'Få en kostnadsfri gjennomgang av mulighetene deres',
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
      oneYearSavings: 'Besparelse over 1 år',
      threeYearSavings: 'Besparelse over 3 år',
      tenYearSavings: 'Besparelse over 10 år',
    },
    leadForm: {
      title: 'Vil dere vite hvilke besparelsesmuligheter som finnes?',
      description:
        'Send inn deres nåværende innløsningspriser og transaksjonsvolum, så gjør vi en første vurdering av potensialet. Deretter hjelper vi dere med å ta neste steg og sammenligne alternativer ut fra deres forutsetninger.',
      orgNumberLabel: 'Organisasjonsnummer',
      orgNumberPlaceholder: 'f.eks. 981 234 567',
      submit: 'Kontakt oss for en kostnadsfri gjennomgang',
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
    apm: {
      eyebrow: 'Andre betalingsmetoder',
      title: 'Alternative betalingsmetoder',
      description:
        'Swish, Klarna, MobilePay og andre alternative betalingsmetoder inngår ikke i kalkulatoren fordi de normalt ikke kan rutes mellom flere innløsere. Intelligent ruting gjelder derfor kun kortbetalinger. Alternative betalingsmetoder kan selvsagt brukes parallelt.',
      swish: 'Populært i Sverige med fast eller prosentvis gebyr. Inngår ikke i kalkulatorens ruting.',
      klarna: 'Buy now, pay later og direktebetalinger med egne gebyrmodeller per produkt.',
      mobilePay: 'Vanlig i Danmark og Finland. Egen prising, separat fra kortbetalinger.',
      localMethods: 'Trustly, Vipps, BankAxept m.fl. kan brukes parallelt, men rutes ikke i kalkulatoren.',
    },
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
      backButton: 'Tilbake',
      nextButton: 'Neste',
      headerContactButton: 'Kontakt oss',
      avgFeePrefix: 'Snittgebyr ca',
      cardTypeColumn: 'Korttype',
      percentColumn: 'Prosent',
      fixedFeeColumn: 'Fast gebyr',
      gotOwnQuotesTitle: 'Har dere fått egne tilbud?',
      gotOwnQuotesBody:
        'Hvis dere har fått prisopplysninger direkte fra én eller flere innløsere, kan dere angi dem her for en mer presis beregning.',
      enterDetailedPricesButton: 'Angi detaljerte priser',
      hideDetailedPricesButton: 'Skjul detaljerte priser',
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
      ctaPrimary: 'Se hvor meget I kan spare',
      ctaSecondary: 'Hvordan fungerer intelligent routing?',
      footnote:
        'Inlösenkollen er udviklet for at hjælpe nordiske virksomheder med at forstå og reducere deres omkostninger til kortbetaling i fysisk butik.',
    },
    howItWorks: {
      eyebrow: 'Sådan fungerer det',
      title: 'Hvordan kommer vi i gang med intelligent routing?',
      description:
        'Intelligent routing analyserer hver transaktion og vælger den indløsningsaftale, der giver det bedste økonomiske resultat — baseret på jeres aftaler og konfiguration.',
      intro:
        'Mange virksomheder bruger i dag én enkelt indløser til alle kortransaktioner. Med intelligent routing kan forskellige transaktioner styres til den løsning, der giver de bedste vilkår, hvilket kan reducere omkostninger og skabe større fleksibilitet.',
      whyTitle: 'Hvorfor virksomheder bruger intelligent routing',
      whoTitle: 'Hvem passer dette til?',
      diagramTitle: 'Sådan vælges den mest fordelagtige indløser',
      diagramSubtitle:
        'Gennem intelligent routing analyseres hvert køb i realtid og styres automatisk til den indløser, der kan håndtere betalingen til den laveste totalomkostning.',
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
    trustBar: {
      developedForLabel: 'Udviklet til:',
      independentLine: 'Uafhængig analyse af jeres betalingsomkostninger.',
      experienceLine: 'Udviklet på baggrund af erfaring fra det nordiske betalingsmarked.',
    },
    faq: {
      title: 'Ofte stillede spørgsmål',
    },
    pdfReport: {
      downloadButton: 'Download PDF-rapport',
      documentTitle: 'Inlösenkollen',
      documentSubtitle: 'Foreløbig analyse af kortbetalingsomkostninger',
      summaryHeading: 'Sammenfatning',
      summaryPotentialLabel: 'Estimeret besparelsespotentiale',
      prerequisitesHeading: 'Virksomhedens forudsætninger',
      annualVolumeLabel: 'Årlig kortomsætning',
      averageOrderValueLabel: 'Gennemsnitlig ordreværdi',
      transactionCountLabel: 'Antal transaktioner pr. år',
      currentFeeLabel: 'Nuværende indløsningsomkostning',
      optimizationHeading: 'Mulig optimering',
      currentCostLabel: 'Nuværende estimerede omkostning',
      routedCostLabel: 'Mulig omkostning med intelligent routing',
      differenceLabel: 'Potentiel forskel',
      factorsHeading: 'Faktorer, der påvirker resultatet',
      factorCardMix: 'Kortmix',
      factorInternational: 'Internationale kort',
      factorCurrentAgreements: 'Nuværende aftaler',
      factorAvailableAcquirers: 'Tilgængelige indløsere',
      disclaimerHeading: 'Vigtigt at vide',
      disclaimerBody:
        'Dette er en indikativ analyse baseret på de angivne oplysninger, ikke en garanti for en bestemt pris eller besparelse. Faktiske omkostninger og besparelser kan variere afhængigt af blandt andet kortmix, interchange, scheme fees, indløsningsaftaler og andre aftalevilkår.',
      generatedLabel: 'Genereret',
    },
    calculator: {
      step1Title: 'Trin 1: Virksomhedens betalingsvolumen',
      step1Description:
        'Angiv virksomhedens årlige kortomsætning og hvad I betaler for kortindløsning i dag.',
      step2Title: 'Trin 2: Tilpas transaktionsmix',
      step2Description:
        'Beregningen bygger nu på den gennemsnitlige fordeling af korttyper i Sverige. I kan gå videre med det samme, eller justere fordelingen nedenfor ud fra jeres egen statistik for et mere præcist estimat.',
      step2TimeHint: 'VALGFRIT',
      useDetailedDataButton: 'Tilpas med egne tal',
      presetMixBadge: 'Gennemsnitlig svensk kortmiks (forudfyldt)',
      step3Title: 'Trin 3: Indløsningsaftaler',
      step3Description:
        'Indtast de indløsningspriser, I har modtaget fra forskellige indløsere. For det bedste resultat angiver I priser pr. korttype, men I kan også starte med omtrentlige niveauer.',
      annualVolume: 'Samlet kortomsætning pr. år',
      averageOrderValue: 'Gennemsnitlig ordreværdi (AOV)',
      annualTransactionsComputed: 'Antal transaktioner pr. år (beregnes automatisk)',
      currentFee: 'Nuværende gennemsnitlige procentvise indløsningsgebyr',
      ctaCalculate: 'Se hvor meget I kan spare',
      sectionTitle: 'Beregn jeres mulige besparelse',
      sectionDescription:
        'Ved at angive jeres oplysninger nedenfor kan I få et estimat på, hvor meget I kan spare gennem intelligent routing.',
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
      exampleDataTitle: 'I har endnu ikke opdateret oplysningerne.',
      exampleDataBody:
        'Resultatet er derfor kun et estimat. Angiv jeres egne, faktiske omkostninger og indløsningspriser for at få en mere korrekt beregning af jeres mulige besparelse.',
      exampleDataDismiss: 'Jeg forstår, vis resultatet alligevel',
      estimatedSavingsLabel: 'Jeres beregnede potentiale',
      potentialAnnualSavingsPrefix: 'Potentiel årlig besparelse:',
      perYearSuffix: '/år',
      basedOnLabel: 'Baseret på:',
      basedOnVolume: 'Jeres kortomsætning',
      basedOnMix: 'Jeres transaktionsmix',
      basedOnFees: 'Jeres nuværende gebyrer',
      ctaReview: 'Få en gratis gennemgang af jeres muligheder',
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
      oneYearSavings: 'Besparelse over 1 år',
      threeYearSavings: 'Besparelse over 3 år',
      tenYearSavings: 'Besparelse over 10 år',
    },
    leadForm: {
      title: 'Vil I vide, hvilke besparelsesmuligheder der findes?',
      description:
        'Send jeres nuværende indløsningspriser og transaktionsvolumener, så laver vi en første vurdering af potentialet. Derefter hjælper vi jer med at tage næste skridt og sammenligne alternativer ud fra jeres forudsætninger.',
      orgNumberLabel: 'CVR-nummer',
      orgNumberPlaceholder: 'f.eks. 12345678',
      submit: 'Kontakt os for en gratis gennemgang',
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
    apm: {
      eyebrow: 'Andre betalingsmetoder',
      title: 'Alternative betalingsmetoder',
      description:
        'Swish, Klarna, MobilePay og andre alternative betalingsmetoder indgår ikke i beregneren, da de normalt ikke kan routes mellem flere indløsere. Intelligent routing gælder derfor kun kortbetalinger. Alternative betalingsmetoder kan naturligvis bruges parallelt.',
      swish: 'Populært i Sverige med fast eller procentvist gebyr. Indgår ikke i beregnerens routing.',
      klarna: 'Buy now, pay later og direkte betalinger med egne gebyrmodeller pr. produkt.',
      mobilePay: 'Almindeligt i Danmark og Finland. Egen prisfastsættelse, adskilt fra kortbetalinger.',
      localMethods: 'Trustly, Vipps, BankAxept m.fl. kan bruges parallelt, men routes ikke i beregneren.',
    },
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
      backButton: 'Tilbage',
      nextButton: 'Næste',
      headerContactButton: 'Kontakt os',
      avgFeePrefix: 'Gennemsnitsgebyr ca.',
      cardTypeColumn: 'Korttype',
      percentColumn: 'Procent',
      fixedFeeColumn: 'Fast gebyr',
      gotOwnQuotesTitle: 'Har I fået jeres egne tilbud?',
      gotOwnQuotesBody:
        'Hvis I har fået prisoplysninger direkte fra én eller flere indløsere, kan I angive dem her for en mere præcis beregning.',
      enterDetailedPricesButton: 'Angiv detaljerede priser',
      hideDetailedPricesButton: 'Skjul detaljerede priser',
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
      ctaPrimary: 'Katso, paljonko voitte säästää',
      ctaSecondary: 'Miten älykäs reititys toimii?',
      footnote:
        'Inlösenkollen on kehitetty auttamaan pohjoismaisia yrityksiä ymmärtämään ja pienentämään myymälässä tapahtuvien korttimaksujen kustannuksia.',
    },
    howItWorks: {
      eyebrow: 'Näin se toimii',
      title: 'Miten pääsemme alkuun älykkäästä reitityksestä?',
      description:
        'Älykäs reititys analysoi jokaisen tapahtuman ja valitsee sopimuksen, joka antaa parhaan taloudellisen lopputuloksen — teidän sopimustenne ja asetustenne perusteella.',
      intro:
        'Monet yritykset käyttävät nykyään yhtä ainoaa maksunvälittäjää kaikkiin korttitapahtumiin. Älykkään reitityksen avulla eri tapahtumat voidaan ohjata ratkaisuun, joka tarjoaa parhaat ehdot, mikä voi pienentää kustannuksia ja luoda enemmän joustavuutta.',
      whyTitle: 'Miksi yritykset käyttävät älykästä reititystä',
      whoTitle: 'Kenelle tämä sopii?',
      diagramTitle: 'Näin edullisin maksunvälittäjä valitaan',
      diagramSubtitle:
        'Älykkään reitityksen ansiosta jokainen ostos analysoidaan reaaliajassa ja ohjataan automaattisesti maksunvälittäjälle, joka voi käsitellä maksun alhaisimmalla kokonaiskustannuksella.',
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
    trustBar: {
      developedForLabel: 'Kehitetty:',
      independentLine: 'Riippumaton analyysi maksukustannuksistanne.',
      experienceLine: 'Kehitetty pohjoismaisen maksualan kokemuksen pohjalta.',
    },
    faq: {
      title: 'Usein kysytyt kysymykset',
    },
    pdfReport: {
      downloadButton: 'Lataa PDF-raportti',
      documentTitle: 'Inlösenkollen',
      documentSubtitle: 'Alustava analyysi korttimaksukustannuksista',
      summaryHeading: 'Yhteenveto',
      summaryPotentialLabel: 'Arvioitu säästöpotentiaali',
      prerequisitesHeading: 'Yrityksen lähtötiedot',
      annualVolumeLabel: 'Vuotuinen korttimyynti',
      averageOrderValueLabel: 'Keskimääräinen tilausarvo',
      transactionCountLabel: 'Tapahtumia vuodessa',
      currentFeeLabel: 'Nykyinen vastaanottokustannus',
      optimizationHeading: 'Mahdollinen optimointi',
      currentCostLabel: 'Nykyinen arvioitu kustannus',
      routedCostLabel: 'Mahdollinen kustannus älykkäällä reitityksellä',
      differenceLabel: 'Mahdollinen ero',
      factorsHeading: 'Tulokseen vaikuttavat tekijät',
      factorCardMix: 'Korttijakauma',
      factorInternational: 'Kansainväliset kortit',
      factorCurrentAgreements: 'Nykyiset sopimukset',
      factorAvailableAcquirers: 'Käytettävissä olevat maksunvälittäjät',
      disclaimerHeading: 'Tärkeää tietää',
      disclaimerBody:
        'Tämä on suuntaa antava analyysi annettujen tietojen perusteella, ei takuu tietystä hinnasta tai säästöstä. Todelliset kustannukset ja säästöt voivat vaihdella muun muassa korttijakauman, interchange-maksujen, korttiyhtiöiden maksujen, vastaanottosopimusten ja muiden sopimusehtojen mukaan.',
      generatedLabel: 'Luotu',
    },
    calculator: {
      step1Title: 'Vaihe 1: Yrityksen maksuvolyymi',
      step1Description:
        'Anna yrityksenne vuotuinen korttimyynti ja mitä maksatte tällä hetkellä kortinvälityksestä.',
      step2Title: 'Vaihe 2: Mukauta korttijakaumaa',
      step2Description:
        'Laskelma perustuu tällä hetkellä Ruotsin keskimääräiseen korttityyppijakaumaan. Voitte jatkaa suoraan, tai mukauttaa jakaumaa alla omien tietojenne perusteella tarkempaa arviota varten.',
      step2TimeHint: 'VALINNAINEN',
      useDetailedDataButton: 'Mukauta omilla luvuilla',
      presetMixBadge: 'Keskimääräinen ruotsalainen korttijakauma (esitäytetty)',
      step3Title: 'Vaihe 3: Vastaanottosopimukset',
      step3Description:
        'Syöttäkää eri maksunvälittäjiltä saamanne vastaanottohinnat. Parhaan tuloksen saatte syöttämällä hinnat korttityypeittäin, mutta voitte aloittaa myös arvioiduilla tasoilla.',
      annualVolume: 'Korttimyynti yhteensä vuodessa',
      averageOrderValue: 'Keskimääräinen tilausarvo (AOV)',
      annualTransactionsComputed: 'Tapahtumien määrä vuodessa (lasketaan automaattisesti)',
      currentFee: 'Nykyinen keskimääräinen prosentuaalinen vastaanottomaksu',
      ctaCalculate: 'Katso, paljonko voitte säästää',
      sectionTitle: 'Laskekaa mahdollinen säästönne',
      sectionDescription:
        'Syöttämällä tietonne alle saatte arvion siitä, kuinka paljon voisitte säästää älykkään reitityksen avulla.',
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
      exampleDataTitle: 'Ette ole vielä päivittäneet tietoja.',
      exampleDataBody:
        'Tulos on siksi vain arvio. Syöttäkää omat todelliset kustannuksenne ja vastaanottohintanne saadaksenne tarkemman laskelman mahdollisesta säästöstänne.',
      exampleDataDismiss: 'Selvä, näytä tulos silti',
      estimatedSavingsLabel: 'Arvioitu potentiaalinne',
      potentialAnnualSavingsPrefix: 'Mahdollinen vuotuinen säästö:',
      perYearSuffix: '/vuosi',
      basedOnLabel: 'Perustuu:',
      basedOnVolume: 'Korttimyyntiinne',
      basedOnMix: 'Korttijakaumaanne',
      basedOnFees: 'Nykyisiin maksuihinne',
      ctaReview: 'Varatkaa maksuton katsaus mahdollisuuksistanne',
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
      oneYearSavings: 'Säästö 1 vuodessa',
      threeYearSavings: 'Säästö 3 vuodessa',
      tenYearSavings: 'Säästö 10 vuodessa',
    },
    leadForm: {
      title: 'Haluatteko tietää, mitä säästömahdollisuuksia on olemassa?',
      description:
        'Lähettäkää nykyiset vastaanottohintanne ja tapahtumavolyyminne, niin teemme ensiarvion potentiaalista. Sen jälkeen autamme teitä ottamaan seuraavan askeleen ja vertailemaan vaihtoehtoja lähtökohtienne mukaan.',
      orgNumberLabel: 'Y-tunnus',
      orgNumberPlaceholder: 'esim. 1234567-8',
      submit: 'Ota yhteyttä maksuttomaan katsaukseen',
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
    apm: {
      eyebrow: 'Muut maksutavat',
      title: 'Vaihtoehtoiset maksutavat',
      description:
        'Swish, Klarna, MobilePay ja muut vaihtoehtoiset maksutavat eivät sisälly laskuriin, koska niitä ei yleensä voida reitittää usean maksunvälittäjän välillä. Älykäs reititys koskee siksi vain korttimaksuja. Vaihtoehtoisia maksutapoja voi tietysti käyttää rinnakkain.',
      swish: 'Suosittu Ruotsissa kiinteällä tai prosentuaalisella maksulla. Ei sisälly laskurin reititykseen.',
      klarna: 'Buy now, pay later ja suorat maksut, joilla on omat maksumallinsa tuotteittain.',
      mobilePay: 'Yleinen Tanskassa ja Suomessa. Oma hinnoittelu, erillään korttimaksuista.',
      localMethods: 'Trustly, Vipps, BankAxept ym. voidaan käyttää rinnakkain, mutta niitä ei reititetä laskurissa.',
    },
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
      backButton: 'Takaisin',
      nextButton: 'Seuraava',
      headerContactButton: 'Ota yhteyttä',
      avgFeePrefix: 'Keskimääräinen maksu n.',
      cardTypeColumn: 'Korttityyppi',
      percentColumn: 'Prosentti',
      fixedFeeColumn: 'Kiinteä maksu',
      gotOwnQuotesTitle: 'Oletteko saaneet omia tarjouksia?',
      gotOwnQuotesBody:
        'Jos olette saaneet hintatietoja suoraan yhdeltä tai useammalta maksunvälittäjältä, voitte syöttää ne tähän tarkempaa laskelmaa varten.',
      enterDetailedPricesButton: 'Syötä yksityiskohtaiset hinnat',
      hideDetailedPricesButton: 'Piilota yksityiskohtaiset hinnat',
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

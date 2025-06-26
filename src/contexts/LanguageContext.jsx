import { createContext, useContext, useState } from 'react'

const translations = {
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre',
    trust: 'Confiança',
    terms: 'Termos',
    
    // Hero Section
    heroTitle: 'O Protocolo que Desafia as Mentes Mais Brilhantes',
    heroSubtitle: 'CONSEGUES OUVIR O ECO DO ORÁCULO?',
    heroDescription: 'Uma experiência única para intelectos excepcionais. Bem-vindo ao futuro dos enigmas.',
    
    // Stats
    totalPrize: 'Prémio Total',
    activeMinds: 'Mentes Ativas',
    satisfactionRate: 'Taxa de Satisfação',
    
    // Buttons
    startJourney: 'Iniciar Jornada',
    joinDiscord: 'Juntar ao Discord',
    followTelegram: 'Seguir no Telegram',
    
    // Tickets
    ticketsTitle: 'Escolha a Sua Jornada Intelectual',
    ticketsSubtitle: 'Cada bilhete é uma porta para um universo de possibilidades. Quanto mais investe, maior o prémio e mais recursos exclusivos recebe!',
    
    explorer: 'Explorador',
    decoder: 'Decifrador',
    master: 'Mestre',
    completeKit: 'Kit Completo',
    
    explorerDesc: 'Perfeito para começar a sua jornada no Paradox Protocol',
    decoderDesc: 'O mais escolhido! Equilíbrio perfeito entre investimento e recompensas',
    masterDesc: 'Para mentes ambiciosas que procuram os maiores desafios',
    completeKitDesc: 'MELHOR VALOR! Todos os bilhetes por menos de metade do preço',
    
    // Ticket Features
    explorerFeature1: 'Acesso ao Enigma Principal',
    explorerFeature2: 'Suporte da Comunidade',
    explorerFeature3: 'Certificado Digital de Participação',
    explorerFeature4: 'Comunidade Exclusiva',
    
    decoderFeature1: 'Tudo do Explorador',
    decoderFeature2: 'Pistas Exclusivas',
    decoderFeature3: 'Acesso Prioritário',
    decoderFeature4: 'Análise Detalhada',
    decoderFeature5: 'Webinars Exclusivos',
    
    masterFeature1: 'Tudo do Decifrador',
    masterFeature2: 'Enigmas Bónus',
    masterFeature3: 'Acesso VIP',
    masterFeature4: 'Reconhecimento Público',
    masterFeature5: 'Sessões 1-on-1',
    masterFeature6: 'Acesso Antecipado',
    
    completeKitFeature1: 'Todos os Enigmas',
    completeKitFeature2: 'Acesso Vitalício',
    completeKitFeature3: 'Suporte Premium',
    completeKitFeature4: 'Rede de Elite',
    completeKitFeature5: 'Máximas Hipóteses de Ganhar',
    completeKitFeature6: 'Mentoria Exclusiva',
    completeKitFeature7: 'Recursos Ilimitados',
    
    // Badges
    mostPopular: 'MAIS POPULAR',
    bestValue: 'MELHOR VALOR',
    
    // Buttons
    choose: 'Escolher',
    chooseExplorer: 'Escolher Explorador',
    chooseDecoder: 'Escolher Decifrador',
    chooseMaster: 'Escolher Mestre',
    chooseCompleteKit: 'Escolher Kit Completo',
    
    // Enigma Section
    enigmaTitle: 'Decifra o Enigma Ancestral',
    enigmaSubtitle: 'Três símbolos antigos guardam a chave. Consegues desvendar o mistério?',
    enigmaHint: 'Dica: Os símbolos representam letras de uma palavra em inglês...',
    enigmaPlaceholder: 'Introduz a palavra chave...',
    enterKeyword: 'Introduz a palavra chave...',
    decipherEnigma: 'Decifrar Enigma',
    
    // Enigma Feedback
    wrongAnswer: 'Resposta incorreta! Tenta novamente.',
    correctAnswer: 'Parabéns! Decifraste o enigma!',
    attempts: 'Tentativas',
    
    // Glyph Descriptions
    glyphKDesc: 'Duas linhas que se cruzam formando um "X", com um pequeno triângulo no topo. Representa a primeira letra do alfabeto.',
    glyphEDesc: 'Três linhas paralelas, ligeiramente onduladas, assemelhando-se a ondulações na água. A quinta posição.',
    glyphYDesc: 'Uma linha vertical que se divide em dois ramos no topo, como uma bifurcação num caminho. A última letra da palavra.',
    
    // Discount Page
    congratulations: 'Parabéns! Decifraste o enigma!',
    discountActive: 'Recebe 15% de desconto na tua primeira compra!',
    discountPageSubtitle: 'Agora que provaste o teu valor, aproveita o desconto exclusivo e escolhe o bilhete perfeito para a tua aventura!',
    chooseNow: 'Escolher Agora',
    limitedTimeOffer: 'Oferta por Tempo Limitado',
    discountValidity: 'O teu desconto de 15% é válido apenas para esta sessão. Não percas esta oportunidade única de te juntares às mentes mais brilhantes!',
    discountTitle: '15% de Desconto na Primeira Compra!',
    discountDesc: 'Resolve o Enigma Zero e obtém desconto imediato em qualquer bilhete. Demonstra o teu valor antes de investir!',
    
    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: A Porta de Entrada',
    enigmaZeroSubtitle: 'Demonstra o teu valor resolvendo este pequeno enigma. É mais simples do que parece - apenas precisas de descobrir que palavra está escrita nos símbolos abaixo!',
    enigmaMarketingTitle: 'Desvenda o Enigma, Desbloqueia o Futuro!',
    enigmaMarketingDesc: 'A tua inteligência é a chave para desvendar os segredos do Paradox Protocol. Resolve este enigma ancestral, ganha acesso exclusivo e habilita-te a um prémio que desafia a lógica. O teu bilhete para a elite começa aqui!',
    challengeTitle: 'O Teu Desafio',
    challengeQuestion: 'Que palavra está escrita nestes três símbolos?',
    challengeExplanation: 'Observa bem os três símbolos na imagem abaixo. Cada um representa uma letra do alfabeto moderno. Usa os pergaminhos como guia para descobrir que letras são e forma a palavra secreta!',
    solveThis: 'Resolve Isto',
    clickToEnlarge: 'Clica para ver em detalhe',
    ancientSymbols: 'Guia Completo dos Símbolos',
    ancientSymbolsDesc: 'Estes pergaminhos antigos contêm o alfabeto completo de símbolos. Usa esta informação para decifrar o enigma acima...',
    solutionHints: 'Dicas da Solução',
    solutionHintsDesc: 'Agora que já viste o alfabeto completo, aqui estão as letras específicas que precisas para resolver o enigma:',
    yourAnswer: 'A Tua Resposta',
    enterAnswerHint: 'Escreve a palavra que descobriste nos símbolos acima',
    needHelp: 'Precisas de ajuda?',
    scrollForClues: 'Faz scroll para veres as pistas completas abaixo',
    parchment1Title: 'Pergaminho I: A-F',
    parchment1Desc: 'Primeiras letras do alfabeto ancestral',
    parchment2Title: 'Pergaminho II: G-L',
    parchment2Desc: 'Continuação do alfabeto perdido',
    parchment3Title: 'Pergaminho III: M-R',
    parchment3Desc: 'Símbolos do meio do alfabeto',
    parchment4Title: 'Pergaminho IV: S-Z',
    parchment4Desc: 'Últimas letras da sequência completa',
    
    // Time and countdown
    nextChallenge: 'Próximo Desafio',
    days: 'dias',
    hours: 'horas',
    minutes: 'min',
    seconds: 'seg',
    specialBonus: 'Bónus Especial',
    
    // Pricing
    prize: 'Prémio',
    save: 'Poupa',
    totalAccess: 'Acesso Total',
    was: 'Era',
    
    // Trust Page
    trustTitle: 'Fator de Confiança: Mérito, Não Sorte, no Paradox Protocol',
    trustSubtitle: 'No Paradox Protocol, a confiança é construída sobre a transparência, a lógica e a ausência total de aleatoriedade. Acreditamos que o sucesso deve ser uma consequência direta da sua inteligência e dedicação, não do acaso.',
    trustMetricsTitle: 'Métricas de Confiança',
    trustPrinciplesTitle: 'Princípios Fundamentais',
    trustCertificationsTitle: 'Certificações e Segurança',
    
    satisfiedParticipants: 'Participantes Satisfeitos',
    satisfiedParticipantsDesc: 'Mentes brilhantes que confiaram no nosso processo',
    satisfactionRateDesc: 'Baseado em feedback real dos utilizadores',
    prizesDistributed: 'Prémios Distribuídos',
    prizesDistributedDesc: 'Recompensas justas baseadas no mérito',
    supportAvailable: 'Suporte Disponível',
    supportAvailableDesc: 'Apoio contínuo para todos os participantes',
    
    deterministicStructureTitle: 'Estrutura Determinística',
    deterministicStructureDesc: 'Os nossos enigmas são sistemas fechados e determinísticos. Para um dado enigma, existe uma ou mais soluções corretas que podem ser alcançadas através de um processo lógico e repetível.',
    noRandomnessTitle: 'Sem Aleatoriedade',
    noRandomnessDesc: 'Ao contrário dos jogos de azar, o Paradox Protocol elimina completamente elementos aleatórios. A informação necessária está sempre presente, embora possa estar encriptada.',
    cognitiveSkillsTitle: 'Competências Cognitivas',
    cognitiveSkillsDesc: 'Para ter sucesso, os participantes devem aplicar pensamento crítico, raciocínio lógico, resolução de problemas e atenção ao detalhe.',
    validationProcessTitle: 'Processo de Validação',
    validationProcessDesc: 'Cada enigma passa por um rigoroso processo de validação interna por múltiplos "decifradores" independentes antes da publicação.',
    
    independentAuditTitle: 'Auditoria Independente',
    independentAuditDesc: 'Todos os nossos processos são auditados por entidades independentes para garantir total transparência.',
    dataSecurityTitle: 'Segurança de Dados',
    dataSecurityDesc: 'Utilizamos encriptação de nível militar para proteger todas as informações dos participantes.',
    gdprComplianceTitle: 'Conformidade RGPD',
    gdprComplianceDesc: 'Cumprimos rigorosamente todas as regulamentações de proteção de dados da União Europeia.',
    
    // About Page
    aboutTitle: 'Sobre o Paradox Protocol',
    aboutSubtitle: 'Uma revolução na forma como desafiamos e recompensamos a inteligência humana',
    aboutDescription: 'O Paradox Protocol nasceu da convicção de que a verdadeira inteligência merece ser reconhecida e recompensada. Não se trata de sorte ou acaso, mas de mérito puro.',
    
    missionTitle: 'A Nossa Missão',
    missionDesc: 'Criar desafios intelectuais que testem os limites da mente humana, oferecendo recompensas proporcionais ao esforço e capacidade demonstrados.',
    
    visionTitle: 'A Nossa Visão',
    visionDesc: 'Ser a plataforma de referência mundial para intelectos excepcionais que procuram desafios dignos das suas capacidades.',
    
    valuesTitle: 'Os Nossos Valores',
    meritValue: 'Mérito',
    meritValueDesc: 'O sucesso é determinado exclusivamente pela capacidade e esforço',
    transparencyValue: 'Transparência',
    transparencyValueDesc: 'Todos os processos são abertos e auditáveis',
    excellenceValue: 'Excelência',
    excellenceValueDesc: 'Procuramos sempre o mais alto padrão de qualidade',
    innovationValue: 'Inovação',
    innovationValueDesc: 'Pioneiros em novas formas de desafiar a mente humana'
  },
  
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    trust: 'Trust',
    terms: 'Terms',
    
    // Hero Section
    heroTitle: 'The Protocol that Challenges the Brightest Minds',
    heroSubtitle: 'CAN YOU HEAR THE ORACLE\'S ECHO?',
    heroDescription: 'A unique experience for exceptional intellects. Welcome to the future of puzzles.',
    
    // Stats
    totalPrize: 'Total Prize',
    activeMinds: 'Active Minds',
    satisfactionRate: 'Satisfaction Rate',
    
    // Buttons
    startJourney: 'Start Journey',
    joinDiscord: 'Join Discord',
    followTelegram: 'Follow on Telegram',
    
    // Tickets
    ticketsTitle: 'Choose Your Intellectual Journey',
    ticketsSubtitle: 'Each ticket is a door to a universe of possibilities. The more you invest, the bigger the prize and more exclusive resources you receive!',
    
    explorer: 'Explorer',
    decoder: 'Decoder',
    master: 'Master',
    completeKit: 'Complete Kit',
    
    explorerDesc: 'Perfect to start your journey in Paradox Protocol',
    decoderDesc: 'Most chosen! Perfect balance between investment and rewards',
    masterDesc: 'For ambitious minds seeking the greatest challenges',
    completeKitDesc: 'BEST VALUE! All tickets for less than half the price',
    
    // Ticket Features
    explorerFeature1: 'Access to Main Enigma',
    explorerFeature2: 'Community Support',
    explorerFeature3: 'Digital Participation Certificate',
    explorerFeature4: 'Exclusive Community',
    
    decoderFeature1: 'Everything from Explorer',
    decoderFeature2: 'Exclusive Clues',
    decoderFeature3: 'Priority Access',
    decoderFeature4: 'Detailed Analysis',
    decoderFeature5: 'Exclusive Webinars',
    
    masterFeature1: 'Everything from Decoder',
    masterFeature2: 'Bonus Enigmas',
    masterFeature3: 'VIP Access',
    masterFeature4: 'Public Recognition',
    masterFeature5: '1-on-1 Sessions',
    masterFeature6: 'Early Access',
    
    completeKitFeature1: 'All Enigmas',
    completeKitFeature2: 'Lifetime Access',
    completeKitFeature3: 'Premium Support',
    completeKitFeature4: 'Elite Network',
    completeKitFeature5: 'Maximum Winning Chances',
    completeKitFeature6: 'Exclusive Mentorship',
    completeKitFeature7: 'Unlimited Resources',
    
    // Badges
    mostPopular: 'MOST POPULAR',
    bestValue: 'BEST VALUE',
    
    // Buttons
    choose: 'Choose',
    chooseExplorer: 'Choose Explorer',
    chooseDecoder: 'Choose Decoder',
    chooseMaster: 'Choose Master',
    chooseCompleteKit: 'Choose Complete Kit',
    
    // Enigma Section
    enigmaTitle: 'Decipher the Ancient Enigma',
    enigmaSubtitle: 'Three ancient symbols guard the key. Can you unravel the mystery?',
    enigmaHint: 'Hint: The symbols represent letters of an English word...',
    enigmaPlaceholder: 'Enter the key word...',
    enterKeyword: 'Enter the key word...',
    decipherEnigma: 'Decipher Enigma',
    
    // Enigma Feedback
    wrongAnswer: 'Wrong answer! Try again.',
    correctAnswer: 'Congratulations! You deciphered the enigma!',
    attempts: 'Attempts',
    
    // Glyph Descriptions
    glyphKDesc: 'Two lines crossing forming an "X", with a small triangle at the top. Represents the first letter of the alphabet.',
    glyphEDesc: 'Three parallel lines, slightly wavy, resembling ripples in water. The fifth position.',
    glyphYDesc: 'A vertical line that splits into two branches at the top, like a fork in the road. The last letter of the word.',
    
    // Discount Page
    congratulations: 'Congratulations! You deciphered the enigma!',
    discountActive: 'Get 15% discount on your first purchase!',
    discountPageSubtitle: 'Now that you have proven your worth, take advantage of the exclusive discount and choose the perfect ticket for your adventure!',
    chooseNow: 'Choose Now',
    limitedTimeOffer: 'Limited Time Offer',
    discountValidity: 'Your 15% discount is valid only for this session. Don\'t miss this unique opportunity to join the brightest minds!',
     discountTitle: '15% Discount on First Purchase!',
    discountDesc: 'Solve Enigma Zero and get immediate discount on any ticket. Prove your worth before investing!',
    
    // Enigma Zero
    enigmaZeroTitle: 'Enigma Zero: The Gateway',
    enigmaZeroSubtitle: 'Prove your worth by solving this small enigma. It\'s simpler than it seems - you just need to discover what word is written in the symbols below!',
    enigmaMarketingTitle: 'Unravel the Enigma, Unlock the Future!',
    enigmaMarketingDesc: 'Your intellect is the key to unraveling the secrets of the Paradox Protocol. Solve this ancient enigma, gain exclusive access, and qualify for a prize that defies logic. Your ticket to the elite starts here!',
    challengeTitle: 'Your Challenge',
    challengeQuestion: 'What word is written in these three symbols?',
    challengeExplanation: 'Look carefully at the three symbols in the image below. Each one represents a letter of the modern alphabet. Use the parchments as a guide to discover what letters they are and form the secret word!',
    solveThis: 'Solve This',
    clickToEnlarge: 'Click to view in detail',
    ancientSymbols: 'Complete Symbol Guide',
    ancientSymbolsDesc: 'These ancient parchments contain the complete alphabet of symbols. Use this information to decipher the enigma above...',
    solutionHints: 'Solution Hints',
    solutionHintsDesc: 'Now that you\'ve seen the complete alphabet, here are the specific letters you need to solve the enigma:',
    yourAnswer: 'Your Answer',
    enterAnswerHint: 'Write the word you discovered in the symbols above',
    needHelp: 'Need help?',
    scrollForClues: 'Scroll down to see the complete clues below',
    parchment1Title: 'Parchment I: A-F',
    parchment1Desc: 'First letters of the ancestral alphabet',
    parchment2Title: 'Parchment II: G-L',
    parchment2Desc: 'Continuation of the lost alphabet',
    parchment3Title: 'Parchment III: M-R',
    parchment3Desc: 'Middle symbols of the alphabet',
    parchment4Title: 'Parchment IV: S-Z',
    parchment4Desc: 'Final letters of the complete sequence',
    
    // Time and countdownown
    nextChallenge: 'Next Challenge',
    days: 'days',
    hours: 'hours',
    minutes: 'min',
    seconds: 'sec',
    specialBonus: 'Special Bonus',
    
    // Pricing
    prize: 'Prize',
    save: 'Save',
    totalAccess: 'Total Access',
    was: 'Was',
    
    // Trust Page
    trustTitle: 'Trust Factor: Merit, Not Luck, in Paradox Protocol',
    trustSubtitle: 'In Paradox Protocol, trust is built on transparency, logic, and the complete absence of randomness. We believe success should be a direct consequence of your intelligence and dedication, not chance.',
    trustMetricsTitle: 'Trust Metrics',
    trustPrinciplesTitle: 'Fundamental Principles',
    trustCertificationsTitle: 'Certifications and Security',
    
    satisfiedParticipants: 'Satisfied Participants',
    satisfiedParticipantsDesc: 'Brilliant minds who trusted our process',
    satisfactionRateDesc: 'Based on real user feedback',
    prizesDistributed: 'Prizes Distributed',
    prizesDistributedDesc: 'Fair rewards based on merit',
    supportAvailable: 'Support Available',
    supportAvailableDesc: 'Continuous support for all participants',
    
    deterministicStructureTitle: 'Deterministic Structure',
    deterministicStructureDesc: 'Our enigmas are closed, deterministic systems. For a given enigma, there are one or more correct solutions that can be reached through a logical and repeatable process.',
    noRandomnessTitle: 'No Randomness',
    noRandomnessDesc: 'Unlike gambling, Paradox Protocol completely eliminates random elements. The necessary information is always present, though it may be encrypted.',
    cognitiveSkillsTitle: 'Cognitive Skills',
    cognitiveSkillsDesc: 'To succeed, participants must apply critical thinking, logical reasoning, problem-solving, and attention to detail.',
    validationProcessTitle: 'Validation Process',
    validationProcessDesc: 'Each enigma goes through a rigorous internal validation process by multiple independent "decoders" before publication.',
    
    independentAuditTitle: 'Independent Audit',
    independentAuditDesc: 'All our processes are audited by independent entities to ensure complete transparency.',
    dataSecurityTitle: 'Data Security',
    dataSecurityDesc: 'We use military-grade encryption to protect all participant information.',
    gdprComplianceTitle: 'GDPR Compliance',
    gdprComplianceDesc: 'We strictly comply with all European Union data protection regulations.',
    
    // About Page
    aboutTitle: 'About Paradox Protocol',
    aboutSubtitle: 'A revolution in how we challenge and reward human intelligence',
    aboutDescription: 'Paradox Protocol was born from the conviction that true intelligence deserves to be recognized and rewarded. It\'s not about luck or chance, but pure merit.',
    
    missionTitle: 'Our Mission',
    missionDesc: 'To create intellectual challenges that test the limits of the human mind, offering rewards proportional to the effort and ability demonstrated.',
    
    visionTitle: 'Our Vision',
    visionDesc: 'To be the world\'s leading platform for exceptional intellects seeking challenges worthy of their capabilities.',
    
    valuesTitle: 'Our Values',
    meritValue: 'Merit',
    meritValueDesc: 'Success is determined exclusively by ability and effort',
    transparencyValue: 'Transparency',
    transparencyValueDesc: 'All processes are open and auditable',
    excellenceValue: 'Excellence',
    excellenceValueDesc: 'We always strive for the highest standard of quality',
    innovationValue: 'Innovation',
    innovationValueDesc: 'Pioneers in new ways to challenge the human mind'
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Acerca',
    trust: 'Confianza',
    terms: 'Términos',
    
    // Hero Section
    heroTitle: 'El Protocolo que Desafía las Mentes Más Brillantes',
    heroSubtitle: '¿PUEDES OÍR EL ECO DEL ORÁCULO?',
    heroDescription: 'Una experiencia única para intelectos excepcionales. Bienvenido al futuro de los enigmas.',
    
    // Stats
    totalPrize: 'Premio Total',
    activeMinds: 'Mentes Activas',
    satisfactionRate: 'Tasa de Satisfacción',
    
    // Buttons
    startJourney: 'Iniciar Viaje',
    joinDiscord: 'Unirse a Discord',
    followTelegram: 'Seguir en Telegram',
    
    // Tickets
    ticketsTitle: 'Elige Tu Viaje Intelectual',
    ticketsSubtitle: 'Cada boleto es una puerta a un universo de posibilidades. ¡Cuanto más inviertas, mayor será el premio y más recursos exclusivos recibirás!',
    
    explorer: 'Explorador',
    decoder: 'Decodificador',
    master: 'Maestro',
    completeKit: 'Kit Completo',
    
    explorerDesc: 'Perfecto para comenzar tu viaje en Paradox Protocol',
    decoderDesc: '¡El más elegido! Equilibrio perfecto entre inversión y recompensas',
    masterDesc: 'Para mentes ambiciosas que buscan los mayores desafíos',
    completeKitDesc: '¡MEJOR VALOR! Todos los boletos por menos de la mitad del precio',
    
    // Ticket Features
    explorerFeature1: 'Acceso al Enigma Principal',
    explorerFeature2: 'Soporte de la Comunidad',
    explorerFeature3: 'Certificado Digital de Participación',
    explorerFeature4: 'Comunidad Exclusiva',
    
    decoderFeature1: 'Todo del Explorador',
    decoderFeature2: 'Pistas Exclusivas',
    decoderFeature3: 'Acceso Prioritario',
    decoderFeature4: 'Análisis Detallado',
    decoderFeature5: 'Webinars Exclusivos',
    
    masterFeature1: 'Todo del Decodificador',
    masterFeature2: 'Enigmas Bonus',
    masterFeature3: 'Acceso VIP',
    masterFeature4: 'Reconocimiento Público',
    masterFeature5: 'Sesiones 1-a-1',
    masterFeature6: 'Acceso Anticipado',
    
    completeKitFeature1: 'Todos los Enigmas',
    completeKitFeature2: 'Acceso de por Vida',
    completeKitFeature3: 'Soporte Premium',
    completeKitFeature4: 'Red de Élite',
    completeKitFeature5: 'Máximas Posibilidades de Ganar',
    completeKitFeature6: 'Mentoría Exclusiva',
    completeKitFeature7: 'Recursos Ilimitados',
    
    // Badges
    mostPopular: 'MÁS POPULAR',
    bestValue: 'MEJOR VALOR',
    
    // Buttons
    choose: 'Elegir',
    chooseExplorer: 'Elegir Explorador',
    chooseDecoder: 'Elegir Decodificador',
    chooseMaster: 'Elegir Maestro',
    chooseCompleteKit: 'Elegir Kit Completo',
    
    // Enigma Section
    enigmaTitle: 'Descifra el Enigma Ancestral',
    enigmaSubtitle: 'Tres símbolos antiguos guardan la clave. ¿Puedes desentrañar el misterio?',
    enigmaHint: 'Pista: Los símbolos representan letras de una palabra en inglés...',
    enigmaPlaceholder: 'Introduce la palabra clave...',
    enterKeyword: 'Introduce la palabra clave...',
    decipherEnigma: 'Descifrar Enigma',
    
    // Enigma Feedback
    wrongAnswer: '¡Respuesta incorrecta! Inténtalo de nuevo.',
    correctAnswer: '¡Felicidades! ¡Descifraste el enigma!',
    attempts: 'Intentos',
    
    // Glyph Descriptions
    glyphKDesc: 'Dos líneas que se cruzan formando una "X", con un pequeño triángulo en la parte superior. Representa la primera letra del alfabeto.',
    glyphEDesc: 'Tres líneas paralelas, ligeramente onduladas, que se asemejan a ondulaciones en el agua. La quinta posición.',
    glyphYDesc: 'Una línea vertical que se divide en dos ramas en la parte superior, como una bifurcación en el camino. La última letra de la palabra.',
    
    // Discount Page
    congratulations: '¡Felicidades! ¡Descifraste el enigma!',
    discountActive: '¡Obtén 15% de descuento en tu primera compra!',
    discountPageSubtitle: '¡Ahora que has demostrado tu valor, aprovecha el descuento exclusivo y elige el boleto perfecto para tu aventura!',
    chooseNow: 'Elegir Ahora',
    limitedTimeOffer: 'Oferta por Tiempo Limitado',
    discountValidity: '¡Tu descuento del 15% es válido solo para esta sesión. No pierdas esta oportunidad única de unirte a las mentes más brillantes!',
    discountTitle: '¡15% de Descuento en la Primera Compra!',
    discountDesc: '¡Resuelve el Enigma Cero y obtén un descuento inmediato en cualquier boleto. Demuestra tu valía antes de invertir!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Cero: La Puerta de Entrada',
    enigmaZeroSubtitle: 'Demuestra tu valía resolviendo este pequeño enigma. Es más simple de lo que parece, ¡solo necesitas descubrir qué palabra está escrita en los símbolos de abajo!',
    enigmaMarketingTitle: '¡Desvela el Enigma, Desbloquea el Futuro!',
    enigmaMarketingDesc: 'Tu intelecto es la clave para desentrañar los secretos del Protocolo Paradox. Resuelve este enigma ancestral, obtén acceso exclusivo y califica para un premio que desafía la lógica. ¡Tu boleto a la élite comienza aquí!',
    challengeTitle: 'Tu Desafío',
    challengeQuestion: '¿Qué palabra está escrita en estos tres símbolos?',
    challengeExplanation: 'Observa cuidadosamente los tres símbolos en la imagen de abajo. Cada uno representa una letra del alfabeto moderno. ¡Usa los pergaminos como guía para descubrir qué letras son y forma la palabra secreta!',
    solveThis: 'Resolver Esto',
    clickToEnlarge: 'Haz clic para ver en detalle',
    ancientSymbols: 'Guía Completa de Símbolos',
    ancientSymbolsDesc: 'Estos antiguos pergaminos contienen el alfabeto completo de símbolos. Usa esta información para descifrar el enigma de arriba...', 
    solutionHints: 'Pistas de la Solución',
    solutionHintsDesc: 'Ahora que has visto el alfabeto completo, aquí están las letras específicas que necesitas para resolver el enigma:',
    yourAnswer: 'Tu Respuesta',
    enterAnswerHint: 'Escribe la palabra que descubriste en los símbolos de arriba',
    needHelp: '¿Necesitas ayuda?',
    scrollForClues: 'Desplázate hacia abajo para ver las pistas completas',
    parchment1Title: 'Pergamino I: A-F',
    parchment1Desc: 'Primeras letras del alfabeto ancestral',
    parchment2Title: 'Pergamino II: G-L',
    parchment2Desc: 'Continuación del alfabeto perdido',
    parchment3Title: 'Pergamino III: M-R',
    parchment3Desc: 'Símbolos del medio del alfabeto',
    parchment4Title: 'Pergamino IV: S-Z',
    parchment4Desc: 'Últimas letras de la secuencia completa',
    
    // Time and countdown
    nextChallenge: 'Próximo Desafío',
    days: 'días',
    hours: 'horas',
    minutes: 'min',
    seconds: 'seg',
    specialBonus: 'Bonus Especial',
    
    // Pricing
    prize: 'Premio',
    save: 'Ahorrar',
    totalAccess: 'Acceso Total',
    was: 'Era',
    
    // Trust Page
    trustTitle: 'Factor de Confianza: Mérito, No Suerte, en Paradox Protocol',
    trustSubtitle: 'En Paradox Protocol, la confianza se construye sobre la transparencia, la lógica y la ausencia total de aleatoriedad. Creemos que el éxito debe ser una consecuencia directa de tu inteligencia y dedicación, no del azar.',
    trustMetricsTitle: 'Métricas de Confianza',
    trustPrinciplesTitle: 'Principios Fundamentales',
    trustCertificationsTitle: 'Certificaciones y Seguridad',
    
    satisfiedParticipants: 'Participantes Satisfechos',
    satisfiedParticipantsDesc: 'Mentes brillantes que confiaron en nuestro proceso',
    satisfactionRateDesc: 'Basado en comentarios reales de usuarios',
    prizesDistributed: 'Premios Distribuidos',
    prizesDistributedDesc: 'Recompensas justas basadas en el mérito',
    supportAvailable: 'Soporte Disponible',
    supportAvailableDesc: 'Apoyo continuo para todos los participantes',
    
    deterministicStructureTitle: 'Estructura Determinística',
    deterministicStructureDesc: 'Nuestros enigmas son sistemas cerrados y determinísticos. Para un enigma dado, existen una o más soluciones correctas que se pueden alcanzar a través de un proceso lógico y repetible.',
    noRandomnessTitle: 'Sin Aleatoriedad',
    noRandomnessDesc: 'A diferencia de los juegos de azar, Paradox Protocol elimina completamente los elementos aleatorios. La información necesaria siempre está presente, aunque puede estar encriptada.',
    cognitiveSkillsTitle: 'Habilidades Cognitivas',
    cognitiveSkillsDesc: 'Para tener éxito, los participantes deben aplicar pensamiento crítico, razonamiento lógico, resolución de problemas y atención al detalle.',
    validationProcessTitle: 'Proceso de Validación',
    validationProcessDesc: 'Cada enigma pasa por un riguroso proceso de validación interna por múltiples "decodificadores" independientes antes de la publicación.',
    
    independentAuditTitle: 'Auditoría Independiente',
    independentAuditDesc: 'Todos nuestros procesos son auditados por entidades independientes para garantizar total transparencia.',
    dataSecurityTitle: 'Seguridad de Datos',
    dataSecurityDesc: 'Utilizamos encriptación de nivel militar para proteger toda la información de los participantes.',
    gdprComplianceTitle: 'Cumplimiento RGPD',
    gdprComplianceDesc: 'Cumplimos estrictamente con todas las regulaciones de protección de datos de la Unión Europea.',
    
    // About Page
    aboutTitle: 'Acerca de Paradox Protocol',
    aboutSubtitle: 'Una revolución en cómo desafiamos y recompensamos la inteligencia humana',
    aboutDescription: 'Paradox Protocol nació de la convicción de que la verdadera inteligencia merece ser reconocida y recompensada. No se trata de suerte o azar, sino de mérito puro.',
    
    missionTitle: 'Nuestra Misión',
    missionDesc: 'Crear desafíos intelectuales que prueben los límites de la mente humana, ofreciendo recompensas proporcionales al esfuerzo y capacidad demostrados.',
    
    visionTitle: 'Nuestra Visión',
    visionDesc: 'Ser la plataforma de referencia mundial para intelectos excepcionales que buscan desafíos dignos de sus capacidades.',
    
    valuesTitle: 'Nuestros Valores',
    meritValue: 'Mérito',
    meritValueDesc: 'El éxito se determina exclusivamente por la capacidad y el esfuerzo',
    transparencyValue: 'Transparencia',
    transparencyValueDesc: 'Todos los procesos son abiertos y auditables',
    excellenceValue: 'Excelencia',
    excellenceValueDesc: 'Siempre buscamos el más alto estándar de calidad',
    innovationValue: 'Innovación',
    innovationValueDesc: 'Pioneros en nuevas formas de desafiar la mente humana'
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    about: 'Über',
    trust: 'Vertrauen',
    terms: 'Bedingungen',
    
    // Hero Section
    heroTitle: 'Das Protokoll, das die Brillantesten Köpfe Herausfordert',
    heroSubtitle: 'KANNST DU DAS ECHO DES ORAKELS HÖREN?',
    heroDescription: 'Eine einzigartige Erfahrung für außergewöhnliche Intellekte. Willkommen in der Zukunft der Rätsel.',
    
    // Stats
    totalPrize: 'Gesamtpreis',
    activeMinds: 'Aktive Köpfe',
    satisfactionRate: 'Zufriedenheitsrate',
    
    // Buttons
    startJourney: 'Reise Beginnen',
    joinDiscord: 'Discord Beitreten',
    followTelegram: 'Auf Telegram Folgen',
    
    // Tickets
    ticketsTitle: 'Wählen Sie Ihre Intellektuelle Reise',
    ticketsSubtitle: 'Jedes Ticket ist eine Tür zu einem Universum voller Möglichkeiten. Je mehr Sie investieren, desto größer ist der Preis und desto mehr exklusive Ressourcen erhalten Sie!',
    
    explorer: 'Entdecker',
    decoder: 'Entschlüsseler',
    master: 'Meister',
    completeKit: 'Komplettes Kit',
    
    explorerDesc: 'Perfekt, um Ihre Reise im Paradox Protocol zu beginnen',
    decoderDesc: 'Am meisten gewählt! Perfekte Balance zwischen Investition und Belohnungen',
    masterDesc: 'Für ehrgeizige Köpfe, die die größten Herausforderungen suchen',
    completeKitDesc: 'BESTER WERT! Alle Tickets für weniger als die Hälfte des Preises',
    
    // Ticket Features
    explorerFeature1: 'Zugang zum Haupträtsel',
    explorerFeature2: 'Community-Unterstützung',
    explorerFeature3: 'Digitales Teilnahmezertifikat',
    explorerFeature4: 'Exklusive Gemeinschaft',
    
    decoderFeature1: 'Alles vom Entdecker',
    decoderFeature2: 'Exklusive Hinweise',
    decoderFeature3: 'Prioritätszugang',
    decoderFeature4: 'Detaillierte Analyse',
    decoderFeature5: 'Exklusive Webinare',
    
    masterFeature1: 'Alles vom Entschlüsseler',
    masterFeature2: 'Bonus-Rätsel',
    masterFeature3: 'VIP-Zugang',
    masterFeature4: 'Öffentliche Anerkennung',
    masterFeature5: '1-zu-1-Sitzungen',
    masterFeature6: 'Früher Zugang',
    
    completeKitFeature1: 'Alle Rätsel',
    completeKitFeature2: 'Lebenslanger Zugang',
    completeKitFeature3: 'Premium-Support',
    completeKitFeature4: 'Elite-Netzwerk',
    completeKitFeature5: 'Maximale Gewinnchancen',
    completeKitFeature6: 'Exklusives Mentoring',
    completeKitFeature7: 'Unbegrenzte Ressourcen',
    
    // Badges
    mostPopular: 'AM BELIEBTESTEN',
    bestValue: 'BESTER WERT',
    
    // Buttons
    choose: 'Wählen',
    chooseExplorer: 'Entdecker Wählen',
    chooseDecoder: 'Entschlüsseler Wählen',
    chooseMaster: 'Meister Wählen',
    chooseCompleteKit: 'Komplettes Kit Wählen',
    
    // Enigma Section
    enigmaTitle: 'Entschlüsseln Sie das Uralte Rätsel',
    enigmaSubtitle: 'Drei alte Symbole hüten den Schlüssel. Können Sie das Geheimnis lüften?',
    enigmaHint: 'Hinweis: Die Symbole stellen Buchstaben eines englischen Wortes dar...',
    enigmaPlaceholder: 'Geben Sie das Schlüsselwort ein...',
    enterKeyword: 'Geben Sie das Schlüsselwort ein...',
    decipherEnigma: 'Rätsel Entschlüsseln',
    
    // Enigma Feedback
    wrongAnswer: 'Falsche Antwort! Versuchen Sie es erneut.',
    correctAnswer: 'Glückwunsch! Sie haben das Rätsel entschlüsselt!',
    attempts: 'Versuche',
    
    // Glyph Descriptions
    glyphKDesc: 'Zwei sich kreuzende Linien, die ein "X" bilden, mit einem kleinen Dreieck oben. Stellt den ersten Buchstaben des Alphabets dar.',
    glyphEDesc: 'Drei parallele Linien, leicht wellig, ähnlich Wellen im Wasser. Die fünfte Position.',
    glyphYDesc: 'Eine vertikale Linie, die sich oben in zwei Äste teilt, wie eine Gabelung auf einem Weg. Der letzte Buchstabe des Wortes.',
    
    // Discount Page
    congratulations: 'Glückwunsch! Sie haben das Rätsel entschlüsselt!',
    discountActive: 'Erhalten Sie 15% Rabatt auf Ihren ersten Kauf!',
    discountPageSubtitle: 'Jetzt, da Sie Ihren Wert bewiesen haben, nutzen Sie den exklusiven Rabatt und wählen Sie das perfekte Ticket für Ihr Abenteuer!',
    chooseNow: 'Jetzt Wählen',
    limitedTimeOffer: 'Zeitlich Begrenztes Angebot',
    discountValidity: 'Ihr 15% Rabatt ist nur für diese Sitzung gültig. Verpassen Sie nicht diese einzigartige Gelegenheit, sich den brillantesten Köpfen anzuschließen!',
    discountTitle: '15% Rabatt auf den Ersten Kauf!',
      discountDesc: 'Lösen Sie das Null-Rätsel und erhalten Sie sofortigen Rabatt auf jedes Ticket. Zeigen Sie Ihren Wert, bevor Sie investieren!',

    // Enigma Zero
    enigmaZeroTitle: 'Enigma Null: Das Tor',
     enigmaZeroSubtitle: 'Beweisen Sie Ihren Wert, indem Sie dieses kleine Rätsel lösen. Es ist einfacher, als es scheint – Sie müssen nur herausfinden, welches Wort in den Symbolen unten geschrieben ist!',
    enigmaMarketingTitle: 'Entschlüsseln Sie das Rätsel, Entsperren Sie die Zukunft!',
    enigmaMarketingDesc: 'Ihr Intellekt ist der Schlüssel zur Entschlüsselung der Geheimnisse des Paradox-Protokolls. Lösen Sie dieses uralte Rätsel, erhalten Sie exklusiven Zugang und qualifizieren Sie sich für einen Preis, der die Logik herausfordert. Ihr Ticket zur Elite beginnt hier!',
    challengeTitle: 'Ihre Herausforderung',
    challengeQuestion: 'Welches Wort ist in diesen drei Symbolen geschrieben?',
    challengeExplanation: 'Betrachten Sie die drei Symbole im Bild unten genau. Jedes steht für einen Buchstaben des modernen Alphabets. Nutzen Sie die Pergamente als Anleitung, um herauszufinden, welche Buchstaben es sind, und bilden Sie das geheime Wort!',
    solveThis: 'Dies lösen',
    clickToEnlarge: 'Zum Vergrößern klicken',
    ancientSymbols: 'Vollständiger Symbolführer',
    ancientSymbolsDesc: 'Diese alten Pergamente enthalten das vollständige Alphabet der Symbole. Nutzen Sie diese Informationen, um das obige Rätsel zu entschlüsseln...', 
    solutionHints: 'Lösungshinweise',
    solutionHintsDesc: 'Nachdem Sie das vollständige Alphabet gesehen haben, sind hier die spezifischen Buchstaben, die Sie zur Lösung des Rätsels benötigen:',
    yourAnswer: 'Ihre Antwort',
    enterAnswerHint: 'Schreiben Sie das Wort, das Sie in den Symbolen oben entdeckt haben',
    needHelp: 'Brauchen Sie Hilfe?',
    scrollForClues: 'Scrollen Sie nach unten, um die vollständigen Hinweise zu sehen',
    parchment1Title: 'Pergament I: A-F',
    parchment1Desc: 'Erste Buchstaben des Ahnenalphabets',
    parchment2Title: 'Pergament II: G-L',
    parchment2Desc: 'Fortsetzung des verlorenen Alphabets',
    parchment3Title: 'Pergament III: M-R',
    parchment3Desc: 'Mittlere Symbole des Alphabets',
    parchment4Title: 'Pergament IV: S-Z',
    parchment4Desc: 'Letzte Buchstaben der vollständigen Sequenz',

    // Time and countdownwn
    nextChallenge: 'Nächste Herausforderung',
    days: 'Tage',
    hours: 'Stunden',
    minutes: 'Min',
    seconds: 'Sek',
    specialBonus: 'Spezialbonus',
    
    // Pricing
    prize: 'Preis',
    save: 'Sparen',
    totalAccess: 'Vollzugang',
    was: 'War',
    
    // Trust Page
    trustTitle: 'Vertrauensfaktor: Verdienst, Nicht Glück, im Paradox Protocol',
    trustSubtitle: 'Im Paradox Protocol wird Vertrauen auf Transparenz, Logik und der völligen Abwesenheit von Zufälligkeit aufgebaut. Wir glauben, dass Erfolg eine direkte Folge Ihrer Intelligenz und Hingabe sein sollte, nicht des Zufalls.',
    trustMetricsTitle: 'Vertrauensmetriken',
    trustPrinciplesTitle: 'Grundprinzipien',
    trustCertificationsTitle: 'Zertifizierungen und Sicherheit',
    
    satisfiedParticipants: 'Zufriedene Teilnehmer',
    satisfiedParticipantsDesc: 'Brillante Köpfe, die unserem Prozess vertraut haben',
    satisfactionRateDesc: 'Basierend auf echtem Nutzerfeedback',
    prizesDistributed: 'Verteilte Preise',
    prizesDistributedDesc: 'Faire Belohnungen basierend auf Verdienst',
    supportAvailable: 'Verfügbarer Support',
    supportAvailableDesc: 'Kontinuierliche Unterstützung für alle Teilnehmer',
    
    deterministicStructureTitle: 'Deterministische Struktur',
    deterministicStructureDesc: 'Unsere Rätsel sind geschlossene, deterministische Systeme. Für ein gegebenes Rätsel gibt es eine oder mehrere korrekte Lösungen, die durch einen logischen und wiederholbaren Prozess erreicht werden können.',
    noRandomnessTitle: 'Keine Zufälligkeit',
    noRandomnessDesc: 'Im Gegensatz zum Glücksspiel eliminiert Paradox Protocol zufällige Elemente vollständig. Die notwendigen Informationen sind immer vorhanden, auch wenn sie verschlüsselt sein mögen.',
    cognitiveSkillsTitle: 'Kognitive Fähigkeiten',
    cognitiveSkillsDesc: 'Um erfolgreich zu sein, müssen die Teilnehmer kritisches Denken, logisches Schlussfolgern, Problemlösung und Aufmerksamkeit für Details anwenden.',
    validationProcessTitle: 'Validierungsprozess',
    validationProcessDesc: 'Jedes Rätsel durchläuft einen rigorosen internen Validierungsprozess durch mehrere unabhängige "Entschlüsseler" vor der Veröffentlichung.',
    
    independentAuditTitle: 'Unabhängige Prüfung',
    independentAuditDesc: 'Alle unsere Prozesse werden von unabhängigen Stellen geprüft, um vollständige Transparenz zu gewährleisten.',
    dataSecurityTitle: 'Datensicherheit',
    dataSecurityDesc: 'Wir verwenden militärische Verschlüsselung, um alle Teilnehmerinformationen zu schützen.',
    gdprComplianceTitle: 'DSGVO-Konformität',
    gdprComplianceDesc: 'Wir halten uns strikt an alle Datenschutzbestimmungen der Europäischen Union.',
    
    // About Page
    aboutTitle: 'Über Paradox Protocol',
    aboutSubtitle: 'Eine Revolution in der Art, wie wir menschliche Intelligenz herausfordern und belohnen',
    aboutDescription: 'Paradox Protocol entstand aus der Überzeugung, dass wahre Intelligenz erkannt und belohnt werden sollte. Es geht nicht um Glück oder Zufall, sondern um reinen Verdienst.',
    
    missionTitle: 'Unsere Mission',
    missionDesc: 'Intellektuelle Herausforderungen zu schaffen, die die Grenzen des menschlichen Geistes testen und Belohnungen proportional zu dem gezeigten Aufwand und der Fähigkeit bieten.',
    
    visionTitle: 'Unsere Vision',
    visionDesc: 'Die weltweit führende Plattform für außergewöhnliche Intellekte zu sein, die Herausforderungen suchen, die ihrer Fähigkeiten würdig sind.',
    
    valuesTitle: 'Unsere Werte',
    meritValue: 'Verdienst',
    meritValueDesc: 'Erfolg wird ausschließlich durch Fähigkeit und Anstrengung bestimmt',
    transparencyValue: 'Transparenz',
    transparencyValueDesc: 'Alle Prozesse sind offen und prüfbar',
    excellenceValue: 'Exzellenz',
    excellenceValueDesc: 'Wir streben immer nach dem höchsten Qualitätsstandard',
    innovationValue: 'Innovation',
    innovationValueDesc: 'Pioniere in neuen Wegen, den menschlichen Geist herauszufordern'
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À Propos',
    trust: 'Confiance',
    terms: 'Conditions',
    
    // Hero Section
    heroTitle: 'Le Protocole qui Défie les Esprits les Plus Brillants',
    heroSubtitle: 'ENTENDEZ-VOUS L\'ÉCHO DE L\'ORACOLE?',
    heroDescription: 'Une expérience unique pour les intellects exceptionnels. Bienvenue dans le futur des énigmes.',
    
    // Stats
    totalPrize: 'Prix Total',
    activeMinds: 'Esprits Actifs',
    satisfactionRate: 'Taux de Satisfaction',
    
    // Buttons
    startJourney: 'Commencer le Voyage',
    joinDiscord: 'Rejoindre Discord',
    followTelegram: 'Suivre sur Telegram',
    
    // Tickets
    ticketsTitle: 'Choisissez Votre Voyage Intellectuel',
    ticketsSubtitle: 'Chaque billet est une porte vers un univers de possibilités. Plus vous investissez, plus le prix est important et plus vous recevez de ressources exclusives !',
    
    explorer: 'Explorateur',
    decoder: 'Décodeur',
    master: 'Maître',
    completeKit: 'Kit Complet',
    
    explorerDesc: 'Parfait pour commencer votre voyage dans Paradox Protocol',
    decoderDesc: 'Le plus choisi ! Équilibre parfait entre investissement et récompenses',
    masterDesc: 'Pour les esprits ambitieux qui recherchent les plus grands défis',
    completeKitDesc: 'MEILLEURE VALEUR ! Tous les billets pour moins de la moitié du prix',
    
    // Ticket Features
    explorerFeature1: 'Accès à l\'Énigme Principale',
    explorerFeature2: 'Support de la Communauté',
    explorerFeature3: 'Certificat Numérique de Participation',
    explorerFeature4: 'Communauté Exclusive',
    
    decoderFeature1: 'Tout de l\'Explorateur',
    decoderFeature2: 'Indices Exclusifs',
    decoderFeature3: 'Accès Prioritaire',
    decoderFeature4: 'Analyse Détaillée',
    decoderFeature5: 'Webinaires Exclusifs',
    
    masterFeature1: 'Tout du Décodeur',
    masterFeature2: 'Énigmes Bonus',
    masterFeature3: 'Accès VIP',
    masterFeature4: 'Reconnaissance Publique',
    masterFeature5: 'Sessions 1-à-1',
    masterFeature6: 'Accès Anticipé',
    
    completeKitFeature1: 'Toutes les Énigmes',
    completeKitFeature2: 'Accès à Vie',
    completeKitFeature3: 'Support Premium',
    completeKitFeature4: 'Réseau d\'Élite',
    completeKitFeature5: 'Chances Maximales de Gagner',
    completeKitFeature6: 'Mentorat Exclusif',
    completeKitFeature7: 'Ressources Illimitées',
    
    // Badges
    mostPopular: 'PLUS POPULAIRE',
    bestValue: 'MEILLEURE VALEUR',
    
    // Buttons
    choose: 'Choisir',
    chooseExplorer: 'Choisir Explorateur',
    chooseDecoder: 'Choisir Décodeur',
    chooseMaster: 'Choisir Maître',
    chooseCompleteKit: 'Choisir Kit Complet',
    
    // Enigma Section
    enigmaTitle: 'Déchiffrez l\'Énigme Ancestrale',
    enigmaSubtitle: 'Trois symboles anciens gardent la clé. Pouvez-vous percer le mystère ?',
    enigmaHint: 'Indice : Les symboles représentent des lettres d\'un mot anglais...', 
    enigmaPlaceholder: 'Entrez le mot-clé...', 
    enterKeyword: 'Entrez le mot-clé...', 
    decipherEnigma: 'Déchiffrer l\'Énigme',
    
    // Enigma Feedback
    wrongAnswer: 'Mauvaise réponse ! Essayez encore.',
    correctAnswer: 'Félicitations ! Vous avez déchiffré l\'énigme !',
    attempts: 'Tentatives',
    
    // Glyph Descriptions
    glyphKDesc: 'Deux lignes qui se croisent formant un "X", avec un petit triangle au sommet. Représente la première lettre de l\'alphabet.',
    glyphEDesc: 'Trois lignes parallèles, légèrement ondulées, ressemblant à des ondulations dans l\'eau. La cinquième position.',
    glyphYDesc: 'Une ligne verticale qui se divise en deux branches au sommet, comme une bifurcation sur un chemin. La dernière lettre du mot.',
    
    // Discount Page
    congratulations: 'Félicitations ! Vous avez déchiffré l\'énigme !',
    discountActive: 'Obtenez 15% de réduction sur votre premier achat !',
    discountPageSubtitle: 'Maintenant que vous avez prouvé votre valeur, profitez de la réduction exclusive et choisissez le billet parfait pour votre aventure !',
    chooseNow: 'Choisir Maintenant',
    limitedTimeOffer: 'Offre à Durée Limitée',
    discountValidity: 'Votre réduction de 15% n\'est valable que pour cette session. Ne manquez pas cette opportunité unique de rejoindre les esprits les plus brillants !',
    discountTitle: '15% de Réduction sur le Premier Achat !',
    discountDesc: 'Résolvez l\'Énigme Zéro et obtenez une réduction immédiate sur n\'importe quel billet. Prouvez votre valeur avant d\'investir !',

    // Enigma Zero
    enigmaZeroTitle: 'Énigme Zéro : La Porte d\'Entrée',
    enigmaZeroSubtitle: 'Prouvez votre valeur en résolvant cette petite énigme. C\'est plus simple qu\'il n\'y paraît - vous avez juste besoin de découvrir quel mot est écrit dans les symboles ci-dessous !',
    enigmaMarketingTitle: 'Démêlez l\'Énigme, Débloquez l\'Avenir !',
    enigmaMarketingDesc: 'Votre intellect est la clé pour percer les secrets du Protocole Paradoxe. Résolvez cette énigme ancestrale, obtenez un accès exclusif et qualifiez-vous pour un prix qui défie la logique. Votre billet pour l\'élite commence ici !',
    challengeTitle: 'Votre Défi',
    challengeQuestion: 'Quel mot est écrit dans ces trois symboles ?',
    challengeExplanation: 'Observez attentivement les trois symboles dans l\'image ci-dessous. Chacun représente une lettre de l\'alphabet moderne. Utilisez les parchemins comme guide pour découvrir quelles lettres ils sont et formez le mot secret !',
    solveThis: 'Résoudre Ceci',
    clickToEnlarge: 'Cliquez pour voir en détail',
    ancientSymbols: 'Guide Complet des Symboles',
    ancientSymbolsDesc: 'Ces anciens parchemins contiennent l\'alphabet complet des symboles. Utilisez ces informations pour déchiffrer l\'énigme ci-dessus...', 
    solutionHints: 'Indices de Solution',
    solutionHintsDesc: 'Maintenant que vous avez vu l\'alphabet complet, voici les lettres spécifiques dont vous avez besoin pour résoudre l\'énigme :',
    yourAnswer: 'Votre Réponse',
    enterAnswerHint: 'Écrivez le mot que vous avez découvert dans les symboles ci-dessus',
    needHelp: 'Besoin d\'aide ?',
    scrollForClues: 'Faites défiler pour voir les indices complets ci-dessous',
    parchment1Title: 'Parchemin I : A-F',
    parchment1Desc: 'Premières lettres de l\'alphabet ancestral',
    parchment2Title: 'Parchemin II : G-L',
    parchment2Desc: 'Suite de l\'alphabet perdu',
    parchment3Title: 'Parchemin III : M-R',
    parchment3Desc: 'Symboles du milieu de l\'alphabet',
    parchment4Title: 'Parchemin IV : S-Z',
    parchment4Desc: 'Dernières lettres de la séquence complète',

    // Time and countdown
    nextChallenge: 'Prochain Défi',
    days: 'jours',
    hours: 'heures',
    minutes: 'min',
    seconds: 'sec',
    specialBonus: 'Bonus Spécial',

    // Pricing
    prize: 'Prix',
    save: 'Économiser',
    totalAccess: 'Accès Total',
    was: 'Était',

    // Trust Page
    trustTitle: 'Facteur de Confiance : Mérite, Pas Chance, dans le Paradox Protocol',
    trustSubtitle: 'Dans le Paradox Protocol, la confiance est construite sur la transparence, la logique et l\'absence totale d\'aléatoire. Nous croyons que le succès doit être une conséquence directe de votre intelligence et de votre dévouement, pas du hasard.',
    trustMetricsTitle: 'Métriques de Confiance',
    trustPrinciplesTitle: 'Principes Fondamentaux',
    trustCertificationsTitle: 'Certifications et Sécurité',

    satisfiedParticipants: 'Participants Satisfaits',
    satisfiedParticipantsDesc: 'Esprits brillants qui ont fait confiance à notre processus',
    satisfactionRateDesc: 'Basé sur les retours réels des utilisateurs',
    prizesDistributed: 'Prix Distribués',
    prizesDistributedDesc: 'Récompenses justes basées sur le mérite',
    supportAvailable: 'Support Disponible',
    supportAvailableDesc: 'Support continu pour tous les participants',

    deterministicStructureTitle: 'Structure Déterministe',
    deterministicStructureDesc: 'Nos énigmes sont des systèmes fermés et déterministes. Pour une énigme donnée, il existe une ou plusieurs solutions correctes qui peuvent être atteintes par un processus logique et reproductible.',
    noRandomnessTitle: 'Pas d\'Aléatoire',
    noRandomnessDesc: 'Contrairement aux jeux de hasard, Paradox Protocol élimine complètement les éléments aléatoires. Les informations nécessaires sont toujours présentes, bien qu\'elles puissent être cryptées.',
    cognitiveSkillsTitle: 'Compétences Cognitives',
    cognitiveSkillsDesc: 'Pour réussir, les participants doivent appliquer la pensée critique, le raisonnement logique, la résolution de problèmes et l\'attention aux détails.',
    validationProcessTitle: 'Processus de Validation',
    validationProcessDesc: 'Chaque énigme passe par un processus de validation interne rigoureux par plusieurs "décodeurs" indépendants avant publication.',

    independentAuditTitle: 'Audit Indépendant',
    independentAuditDesc: 'Tous nos processus sont audités par des entités indépendantes pour assurer une transparence totale.',
    dataSecurityTitle: 'Sécurité des Données',
    dataSecurityDesc: 'Nous utilisons un cryptage de niveau militaire pour protéger toutes les informations des participants.',
    gdprComplianceTitle: 'Conformité RGPD',
    gdprComplianceDesc: 'Nous respectons strictement toutes les réglementations de protection des données de l\'Union Européenne.',

    // About Page
    aboutTitle: 'À Propos du Paradox Protocol',
    aboutSubtitle: 'Une révolution dans la façon dont nous défions et récompensons l\'intelligence humaine',
    aboutDescription: 'Paradox Protocol est né de la conviction que la véritable intelligence mérite d\'être reconnue et récompensée. Il ne s\'agit pas de chance ou de hasard, mais de pur mérite.',

    missionTitle: 'Notre Mission',
    missionDesc: 'Créer des défis intellectuels qui testent les limites de l\'esprit humain, offrant des récompenses proportionnelles à l\'effort et à la capacité démontrés.',

    visionTitle: 'Notre Vision',
    visionDesc: 'Être la plateforme de référence mondiale pour les intellects exceptionnels qui recherchent des défis dignes de leurs capacités.',

    valuesTitle: 'Nos Valeurs',
    meritValue: 'Mérite',
    meritValueDesc: 'Le succès est déterminé exclusivement par la capacité et l\'effort',
    transparencyValue: 'Transparence',
    transparencyValueDesc: 'Tous les processus sont ouverts et auditables',
    excellenceValue: 'Excellence',
    excellenceValueDesc: 'Nous visons toujours le plus haut standard de qualité',
    innovationValue: 'Innovation',
    innovationValueDesc: 'Pionniers dans de nouvelles façons de défier l\'esprit humain'
  }
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt')

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}


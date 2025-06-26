import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Users,
  Award,
  Lock,
  AlertTriangle,
  CheckCircle,
  Mail,
  Calendar,
  Scale
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

const TermsPage = () => {
  const { t, language } = useLanguage()

  const content = {
    pt: {
      heroTitle: "Termos e Condições do Paradox Protocol",
      heroSubtitle: "Bem-vindo ao Paradox Protocol. Ao aceder e utilizar o nosso website e participar nos nossos desafios, concorda em cumprir e estar vinculado aos seguintes termos e condições. Por favor, leia-os atentamente.",
      
      acceptanceTitle: "1. Aceitação dos Termos",
      acceptanceText: "Ao utilizar o website do Paradox Protocol, confirma que leu, compreendeu e aceita estes Termos e Condições, bem como a nossa Política de Privacidade. Se não concordar com qualquer parte destes termos, não deverá utilizar o nosso website ou participar nos nossos desafios.",
      
      eligibilityTitle: "2. Elegibilidade",
      eligibilityText: "Os desafios do Paradox Protocol estão abertos a indivíduos com idade legal para participar em concursos e receber prémios na sua jurisdição de residência. Os participantes são responsáveis por garantir que a sua participação está em conformidade com todas as leis e regulamentos locais, estaduais e nacionais aplicáveis.",
      
      accessTitle: "3. Acesso aos Desafios Premium",
      accessText: "O acesso aos desafios premium do Paradox Protocol, incluindo a entrada nos canais exclusivos do Discord e Telegram, é concedido após a aquisição de um bilhete válido. Não é necessário um registo de conta prévio no website para participar. As instruções para aceder aos canais e ao desafio serão fornecidas imediatamente após a confirmação do pagamento do bilhete.",
      
      participationTitle: "4. Participação nos Desafios",
      participationText: "Os desafios do Paradox Protocol são baseados em enigmas e lógica. A resolução dos enigmas requer raciocínio, análise e conhecimento, e não depende de sorte ou acaso. Os participantes devem agir com integridade e fair play. Qualquer tentativa de manipular o sistema, utilizar software não autorizado, ou partilhar soluções de forma indevida resultará na desqualificação imediata e permanente.",
      
      prizesTitle: "5. Prémios",
      prizesText: "Os prémios serão atribuídos aos participantes que resolverem corretamente os enigmas de acordo com as regras específicas de cada desafio. Os vencedores serão notificados através dos dados de contacto fornecidos no momento da compra do bilhete. É responsabilidade do participante garantir que os seus dados de contacto estão corretos e atualizados.",
      
      intellectualPropertyTitle: "6. Propriedade Intelectual",
      intellectualPropertyText: "Todo o conteúdo presente no website do Paradox Protocol, incluindo textos, gráficos, logótipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade do Paradox Protocol ou dos seus fornecedores de conteúdo e está protegido por leis de direitos de autor internacionais.",
      
      limitationTitle: "7. Limitação de Responsabilidade",
      limitationText: "O Paradox Protocol não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, boa vontade, uso, dados ou outras perdas intangíveis resultantes do uso ou da incapacidade de usar o website ou participar nos desafios.",
      
      accountClosureTitle: "8. Fecho de Conta",
      accountClosureText: "Para fechar a sua conta ou cancelar a participação nos desafios, pode contactar-nos através do email suporte@paradoxprotocol.com. Processaremos o seu pedido no prazo de 48 horas úteis. Note que o fecho da conta não dá direito a reembolso de bilhetes já adquiridos.",
      
      contactTitle: "Contacto",
      contactText: "Para questões sobre estes termos ou qualquer aspeto do Paradox Protocol, contacte-nos:",
      
      lastUpdated: "Última atualização: 20 de junho de 2025"
    },
    
    en: {
      heroTitle: "Paradox Protocol Terms and Conditions",
      heroSubtitle: "Welcome to Paradox Protocol. By accessing and using our website and participating in our challenges, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.",
      
      acceptanceTitle: "1. Acceptance of Terms",
      acceptanceText: "By using the Paradox Protocol website, you confirm that you have read, understood, and accept these Terms and Conditions, as well as our Privacy Policy. If you do not agree with any part of these terms, you should not use our website or participate in our challenges.",
      
      eligibilityTitle: "2. Eligibility",
      eligibilityText: "Paradox Protocol challenges are open to individuals of legal age to participate in contests and receive prizes in their jurisdiction of residence. Participants are responsible for ensuring that their participation complies with all applicable local, state, and national laws and regulations.",
      
      accessTitle: "3. Access to Premium Challenges",
      accessText: "Access to Paradox Protocol premium challenges, including entry to exclusive Discord and Telegram channels, is granted after purchasing a valid ticket. No prior account registration on the website is required to participate. Instructions for accessing channels and challenges will be provided immediately after payment confirmation.",
      
      participationTitle: "4. Challenge Participation",
      participationText: "Paradox Protocol challenges are based on puzzles and logic. Solving puzzles requires reasoning, analysis, and knowledge, and does not depend on luck or chance. Participants must act with integrity and fair play. Any attempt to manipulate the system, use unauthorized software, or improperly share solutions will result in immediate and permanent disqualification.",
      
      prizesTitle: "5. Prizes",
      prizesText: "Prizes will be awarded to participants who correctly solve puzzles according to the specific rules of each challenge. Winners will be notified through the contact details provided at the time of ticket purchase. It is the participant's responsibility to ensure that their contact details are correct and up to date.",
      
      intellectualPropertyTitle: "6. Intellectual Property",
      intellectualPropertyText: "All content on the Paradox Protocol website, including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Paradox Protocol or its content suppliers and is protected by international copyright laws.",
      
      limitationTitle: "7. Limitation of Liability",
      limitationText: "Paradox Protocol will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or inability to use the website or participate in challenges.",
      
      accountClosureTitle: "8. Account Closure",
      accountClosureText: "To close your account or cancel participation in challenges, you can contact us at support@paradoxprotocol.com. We will process your request within 48 business hours. Note that account closure does not entitle you to a refund of tickets already purchased.",
      
      contactTitle: "Contact",
      contactText: "For questions about these terms or any aspect of Paradox Protocol, contact us:",
      
      lastUpdated: "Last updated: June 20, 2025"
    },
    
    es: {
      heroTitle: "Términos y Condiciones del Paradox Protocol",
      heroSubtitle: "Bienvenido al Paradox Protocol. Al acceder y utilizar nuestro sitio web y participar en nuestros desafíos, acepta cumplir y estar sujeto a los siguientes términos y condiciones. Por favor, léelos cuidadosamente.",
      
      acceptanceTitle: "1. Aceptación de los Términos",
      acceptanceText: "Al utilizar el sitio web del Paradox Protocol, confirma que ha leído, entendido y acepta estos Términos y Condiciones, así como nuestra Política de Privacidad. Si no está de acuerdo con cualquier parte de estos términos, no debe usar nuestro sitio web o participar en nuestros desafíos.",
      
      eligibilityTitle: "2. Elegibilidad",
      eligibilityText: "Los desafíos del Paradox Protocol están abiertos a individuos con edad legal para participar en concursos y recibir premios en su jurisdicción de residencia. Los participantes son responsables de asegurar que su participación cumple con todas las leyes y regulaciones locales, estatales y nacionales aplicables.",
      
      accessTitle: "3. Acceso a Desafíos Premium",
      accessText: "El acceso a los desafíos premium del Paradox Protocol, incluyendo la entrada a canales exclusivos de Discord y Telegram, se otorga después de comprar un boleto válido. No se requiere registro previo de cuenta en el sitio web para participar. Las instrucciones para acceder a los canales y desafíos se proporcionarán inmediatamente después de la confirmación del pago.",
      
      participationTitle: "4. Participación en Desafíos",
      participationText: "Los desafíos del Paradox Protocol se basan en enigmas y lógica. Resolver enigmas requiere razonamiento, análisis y conocimiento, y no depende de suerte o azar. Los participantes deben actuar con integridad y juego limpio. Cualquier intento de manipular el sistema, usar software no autorizado, o compartir soluciones de manera indebida resultará en descalificación inmediata y permanente.",
      
      prizesTitle: "5. Premios",
      prizesText: "Los premios se otorgarán a los participantes que resuelvan correctamente los enigmas de acuerdo con las reglas específicas de cada desafío. Los ganadores serán notificados a través de los datos de contacto proporcionados al momento de la compra del boleto. Es responsabilidad del participante asegurar que sus datos de contacto sean correctos y estén actualizados.",
      
      intellectualPropertyTitle: "6. Propiedad Intelectual",
      intellectualPropertyText: "Todo el contenido en el sitio web del Paradox Protocol, incluyendo texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad del Paradox Protocol o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor.",
      
      limitationTitle: "7. Limitación de Responsabilidad",
      limitationText: "Paradox Protocol no será responsable de ningún daño directo, indirecto, incidental, especial, consecuencial o ejemplar, incluyendo pero no limitado a daños por pérdida de ganancias, buena voluntad, uso, datos u otras pérdidas intangibles resultantes del uso o la incapacidad de usar el sitio web o participar en desafíos.",
      
      accountClosureTitle: "8. Cierre de Cuenta",
      accountClosureText: "Para cerrar su cuenta o cancelar la participación en desafíos, puede contactarnos en support@paradoxprotocol.com. Procesaremos su solicitud dentro de 48 horas hábiles. Note que el cierre de cuenta no le da derecho a un reembolso de boletos ya comprados.",
      
      contactTitle: "Contacto",
      contactText: "Para preguntas sobre estos términos o cualquier aspecto del Paradox Protocol, contáctenos:",
      
      lastUpdated: "Última actualización: 20 de junio de 2025"
    },
    
    fr: {
      heroTitle: "Conditions Générales du Paradox Protocol",
      heroSubtitle: "Bienvenue au Paradox Protocol. En accédant et utilisant notre site web et en participant à nos défis, vous acceptez de vous conformer et d'être lié par les conditions générales suivantes. Veuillez les lire attentivement.",
      
      acceptanceTitle: "1. Acceptation des Conditions",
      acceptanceText: "En utilisant le site web du Paradox Protocol, vous confirmez que vous avez lu, compris et accepté ces Conditions Générales, ainsi que notre Politique de Confidentialité. Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne devriez pas utiliser notre site web ou participer à nos défis.",
      
      eligibilityTitle: "2. Éligibilité",
      eligibilityText: "Les défis du Paradox Protocol sont ouverts aux individus ayant l'âge légal pour participer à des concours et recevoir des prix dans leur juridiction de résidence. Les participants sont responsables de s'assurer que leur participation est conforme à toutes les lois et réglementations locales, étatiques et nationales applicables.",
      
      accessTitle: "3. Accès aux Défis Premium",
      accessText: "L'accès aux défis premium du Paradox Protocol, y compris l'entrée aux canaux exclusifs Discord et Telegram, est accordé après l'achat d'un billet valide. Aucune inscription préalable de compte sur le site web n'est requise pour participer. Les instructions pour accéder aux canaux et défis seront fournies immédiatement après la confirmation du paiement.",
      
      participationTitle: "4. Participation aux Défis",
      participationText: "Les défis du Paradox Protocol sont basés sur des énigmes et la logique. Résoudre les énigmes nécessite du raisonnement, de l'analyse et des connaissances, et ne dépend pas de la chance ou du hasard. Les participants doivent agir avec intégrité et fair-play. Toute tentative de manipuler le système, d'utiliser un logiciel non autorisé, ou de partager des solutions de manière inappropriée entraînera une disqualification immédiate et permanente.",
      
      prizesTitle: "5. Prix",
      prizesText: "Les prix seront attribués aux participants qui résolvent correctement les énigmes selon les règles spécifiques de chaque défi. Les gagnants seront notifiés via les coordonnées fournies au moment de l'achat du billet. Il est de la responsabilité du participant de s'assurer que ses coordonnées sont correctes et à jour.",
      
      intellectualPropertyTitle: "6. Propriété Intellectuelle",
      intellectualPropertyText: "Tout le contenu sur le site web du Paradox Protocol, y compris le texte, les graphiques, les logos, les icônes, les images, les clips audio, les téléchargements numériques, les compilations de données et les logiciels, est la propriété du Paradox Protocol ou de ses fournisseurs de contenu et est protégé par les lois internationales sur les droits d'auteur.",
      
      limitationTitle: "7. Limitation de Responsabilité",
      limitationText: "Paradox Protocol ne sera pas responsable de tout dommage direct, indirect, accessoire, spécial, consécutif ou exemplaire, y compris mais sans s'y limiter, les dommages pour perte de profits, de bonne volonté, d'utilisation, de données ou autres pertes intangibles résultant de l'utilisation ou de l'incapacité d'utiliser le site web ou de participer aux défis.",
      
      accountClosureTitle: "8. Fermeture de Compte",
      accountClosureText: "Pour fermer votre compte ou annuler la participation aux défis, vous pouvez nous contacter à support@paradoxprotocol.com. Nous traiterons votre demande dans les 48 heures ouvrables. Notez que la fermeture de compte ne vous donne pas droit à un remboursement des billets déjà achetés.",
      
      contactTitle: "Contact",
      contactText: "Pour des questions sur ces conditions ou tout aspect du Paradox Protocol, contactez-nous :",
      
      lastUpdated: "Dernière mise à jour : 20 juin 2025"
    },
    
    de: {
      heroTitle: "Allgemeine Geschäftsbedingungen des Paradox Protocol",
      heroSubtitle: "Willkommen beim Paradox Protocol. Durch den Zugriff auf und die Nutzung unserer Website und die Teilnahme an unseren Herausforderungen stimmen Sie zu, die folgenden Allgemeinen Geschäftsbedingungen einzuhalten und an sie gebunden zu sein. Bitte lesen Sie sie sorgfältig.",
      
      acceptanceTitle: "1. Annahme der Bedingungen",
      acceptanceText: "Durch die Nutzung der Paradox Protocol Website bestätigen Sie, dass Sie diese Allgemeinen Geschäftsbedingungen sowie unsere Datenschutzrichtlinie gelesen, verstanden und akzeptiert haben. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, sollten Sie unsere Website nicht nutzen oder an unseren Herausforderungen teilnehmen.",
      
      eligibilityTitle: "2. Berechtigung",
      eligibilityText: "Paradox Protocol Herausforderungen stehen Personen offen, die das gesetzliche Alter haben, um an Wettbewerben teilzunehmen und Preise in ihrer Wohnsitzgerichtsbarkeit zu erhalten. Die Teilnehmer sind dafür verantwortlich sicherzustellen, dass ihre Teilnahme allen anwendbaren örtlichen, staatlichen und nationalen Gesetzen und Vorschriften entspricht.",
      
      accessTitle: "3. Zugang zu Premium-Herausforderungen",
      accessText: "Der Zugang zu Paradox Protocol Premium-Herausforderungen, einschließlich des Zugangs zu exklusiven Discord- und Telegram-Kanälen, wird nach dem Kauf eines gültigen Tickets gewährt. Keine vorherige Kontoregistrierung auf der Website ist für die Teilnahme erforderlich. Anweisungen für den Zugang zu Kanälen und Herausforderungen werden sofort nach der Zahlungsbestätigung bereitgestellt.",
      
      participationTitle: "4. Teilnahme an Herausforderungen",
      participationText: "Paradox Protocol Herausforderungen basieren auf Rätseln und Logik. Das Lösen von Rätseln erfordert Denken, Analyse und Wissen und hängt nicht von Glück oder Zufall ab. Die Teilnehmer müssen mit Integrität und Fair Play handeln. Jeder Versuch, das System zu manipulieren, nicht autorisierte Software zu verwenden oder Lösungen unsachgemäß zu teilen, führt zur sofortigen und dauerhaften Disqualifikation.",
      
      prizesTitle: "5. Preise",
      prizesText: "Preise werden an Teilnehmer vergeben, die Rätsel korrekt gemäß den spezifischen Regeln jeder Herausforderung lösen. Gewinner werden über die beim Ticketkauf angegebenen Kontaktdaten benachrichtigt. Es liegt in der Verantwortung des Teilnehmers sicherzustellen, dass seine Kontaktdaten korrekt und aktuell sind.",
      
      intellectualPropertyTitle: "6. Geistiges Eigentum",
      intellectualPropertyText: "Alle Inhalte auf der Paradox Protocol Website, einschließlich Text, Grafiken, Logos, Symbole, Bilder, Audio-Clips, digitale Downloads, Datenzusammenstellungen und Software, sind Eigentum von Paradox Protocol oder seinen Inhaltslieferanten und sind durch internationale Urheberrechtsgesetze geschützt.",
      
      limitationTitle: "7. Haftungsbeschränkung",
      limitationText: "Paradox Protocol haftet nicht für direkte, indirekte, zufällige, besondere, Folge- oder exemplarische Schäden, einschließlich aber nicht beschränkt auf Schäden durch Gewinnverlust, Goodwill, Nutzung, Daten oder andere immaterielle Verluste, die aus der Nutzung oder Unfähigkeit zur Nutzung der Website oder Teilnahme an Herausforderungen resultieren.",
      
      accountClosureTitle: "8. Kontenschließung",
      accountClosureText: "Um Ihr Konto zu schließen oder die Teilnahme an Herausforderungen zu stornieren, können Sie uns unter support@paradoxprotocol.com kontaktieren. Wir werden Ihre Anfrage innerhalb von 48 Geschäftsstunden bearbeiten. Beachten Sie, dass die Kontenschließung Sie nicht zu einer Rückerstattung bereits gekaufter Tickets berechtigt.",
      
      contactTitle: "Kontakt",
      contactText: "Für Fragen zu diesen Bedingungen oder jedem Aspekt des Paradox Protocol kontaktieren Sie uns:",
      
      lastUpdated: "Zuletzt aktualisiert: 20. Juni 2025"
    }
  }

  const currentContent = content[language] || content.pt

  const sections = [
    {
      id: "acceptance",
      title: currentContent.acceptanceTitle,
      content: currentContent.acceptanceText,
      icon: CheckCircle
    },
    {
      id: "eligibility",
      title: currentContent.eligibilityTitle,
      content: currentContent.eligibilityText,
      icon: Users
    },
    {
      id: "access",
      title: currentContent.accessTitle,
      content: currentContent.accessText,
      icon: Lock
    },
    {
      id: "participation",
      title: currentContent.participationTitle,
      content: currentContent.participationText,
      icon: Shield
    },
    {
      id: "prizes",
      title: currentContent.prizesTitle,
      content: currentContent.prizesText,
      icon: Award
    },
    {
      id: "intellectual_property",
      title: currentContent.intellectualPropertyTitle,
      content: currentContent.intellectualPropertyText,
      icon: FileText
    },
    {
      id: "limitation",
      title: currentContent.limitationTitle,
      content: currentContent.limitationText,
      icon: AlertTriangle
    },
    {
      id: "account_closure",
      title: currentContent.accountClosureTitle,
      content: currentContent.accountClosureText,
      icon: Scale
    }
  ]

  return (
    <div className="pt-16 min-h-screen starfield">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-20 h-20 mx-auto text-blue-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {currentContent.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <section.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">{currentContent.contactTitle}</h2>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {currentContent.contactText}
                </p>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>Email: suporte@paradoxprotocol.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>Discord: https://discord.gg/GY3dcsPPNV</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>Telegram: https://t.me/paradoxprotocol</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span>{currentContent.lastUpdated}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage


import { motion } from 'framer-motion'
import { 
  Shield, 
  Target, 
  Award,
  CheckCircle,
  Lock,
  Eye,
  Brain,
  Zap,
  Star,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

const TrustPage = () => {
  const { t, language } = useLanguage()

  const content = {
    pt: {
      heroTitle: "Mérito, Não Sorte, no Paradox Protocol",
      heroSubtitle: "No universo do Paradox Protocol, a sorte é uma variável inexistente. Acreditamos firmemente que o sucesso nos nossos desafios deve ser um reflexo direto da sua capacidade intelectual, da sua perspicácia e da sua dedicação.",
      
      philosophyTitle: "A Filosofia do Design de Enigmas: Lógica Pura",
      philosophyText: "Cada enigma no Paradox Protocol é meticulosamente concebido com base em princípios de lógica, raciocínio dedutivo e padrões reconhecíveis. Não há elementos aleatórios, como lançamentos de dados, sorteios ou probabilidades. A solução de cada fragmento é intrínseca ao seu design, esperando ser descoberta através da análise cuidadosa e da aplicação de métodos de resolução de problemas.",
      
      transparencyTitle: "Transparência e Verificabilidade",
      transparencyText: "Comprometemo-nos com a transparência no design e na apresentação dos nossos desafios. Embora a solução não seja revelada antecipadamente (para preservar a integridade do enigma), a estrutura subjacente garante que qualquer pessoa, com as ferramentas e o raciocínio corretos, pode chegar à mesma conclusão.",
      
      successTitle: "O Seu Sucesso é o Nosso Propósito",
      successText: "No Paradox Protocol, o seu sucesso é uma prova da sua inteligência. Não há atalhos ou golpes de sorte. Cada prémio conquistado é um testemunho direto da sua capacidade de decifrar os mistérios que o Oráculo silenciou. Convidamo-lo a confiar no processo, a afiar a sua mente e a provar o seu valor.",
      
      ctaTitle: "Pronto para Provar o Seu Mérito?",
      ctaText: "A recompensa aguarda aqueles que dominam a lógica e a dedução.",
      startChallenge: "Iniciar Desafio"
    },
    
    en: {
      heroTitle: "Merit, Not Luck, in Paradox Protocol",
      heroSubtitle: "In the universe of Paradox Protocol, luck is a non-existent variable. We firmly believe that success in our challenges should be a direct reflection of your intellectual capacity, your insight, and your dedication.",
      
      philosophyTitle: "The Philosophy of Puzzle Design: Pure Logic",
      philosophyText: "Each puzzle in Paradox Protocol is meticulously conceived based on principles of logic, deductive reasoning, and recognizable patterns. There are no random elements, such as dice rolls, draws, or probabilities. The solution to each fragment is intrinsic to its design, waiting to be discovered through careful analysis and the application of problem-solving methods.",
      
      transparencyTitle: "Transparency and Verifiability",
      transparencyText: "We are committed to transparency in the design and presentation of our challenges. While the solution is not revealed in advance (to preserve the integrity of the puzzle), the underlying structure ensures that anyone, with the right tools and reasoning, can reach the same conclusion.",
      
      successTitle: "Your Success is Our Purpose",
      successText: "In Paradox Protocol, your success is proof of your intelligence. There are no shortcuts or strokes of luck. Each prize won is a direct testament to your ability to decipher the mysteries that the Oracle has silenced. We invite you to trust the process, sharpen your mind, and prove your worth.",
      
      ctaTitle: "Ready to Prove Your Merit?",
      ctaText: "The reward awaits those who master logic and deduction.",
      startChallenge: "Start Challenge"
    },
    
    es: {
      heroTitle: "Mérito, No Suerte, en Paradox Protocol",
      heroSubtitle: "En el universo del Paradox Protocol, la suerte es una variable inexistente. Creemos firmemente que el éxito en nuestros desafíos debe ser un reflejo directo de tu capacidad intelectual, tu perspicacia y tu dedicación.",
      
      philosophyTitle: "La Filosofía del Diseño de Enigmas: Lógica Pura",
      philosophyText: "Cada enigma en Paradox Protocol está meticulosamente concebido basado en principios de lógica, razonamiento deductivo y patrones reconocibles. No hay elementos aleatorios, como lanzamientos de dados, sorteos o probabilidades. La solución de cada fragmento es intrínseca a su diseño, esperando ser descubierta a través del análisis cuidadoso y la aplicación de métodos de resolución de problemas.",
      
      transparencyTitle: "Transparencia y Verificabilidad",
      transparencyText: "Nos comprometemos con la transparencia en el diseño y presentación de nuestros desafíos. Aunque la solución no se revela con anticipación (para preservar la integridad del enigma), la estructura subyacente garantiza que cualquier persona, con las herramientas y el razonamiento correctos, puede llegar a la misma conclusión.",
      
      successTitle: "Tu Éxito es Nuestro Propósito",
      successText: "En Paradox Protocol, tu éxito es una prueba de tu inteligencia. No hay atajos o golpes de suerte. Cada premio ganado es un testimonio directo de tu capacidad para descifrar los misterios que el Oráculo ha silenciado. Te invitamos a confiar en el proceso, afilar tu mente y demostrar tu valor.",
      
      ctaTitle: "¿Listo para Probar tu Mérito?",
      ctaText: "La recompensa espera a aquellos que dominan la lógica y la deducción.",
      startChallenge: "Iniciar Desafío"
    },
    
    fr: {
      heroTitle: "Mérite, Pas Chance, dans Paradox Protocol",
      heroSubtitle: "Dans l'univers du Paradox Protocol, la chance est une variable inexistante. Nous croyons fermement que le succès dans nos défis doit être un reflet direct de votre capacité intellectuelle, de votre perspicacité et de votre dévouement.",
      
      philosophyTitle: "La Philosophie de la Conception d'Énigmes : Logique Pure",
      philosophyText: "Chaque énigme dans Paradox Protocol est méticuleusement conçue basée sur des principes de logique, de raisonnement déductif et de motifs reconnaissables. Il n'y a pas d'éléments aléatoires, comme des lancers de dés, des tirages ou des probabilités. La solution de chaque fragment est intrinsèque à sa conception, attendant d'être découverte par une analyse soigneuse et l'application de méthodes de résolution de problèmes.",
      
      transparencyTitle: "Transparence et Vérifiabilité",
      transparencyText: "Nous nous engageons à la transparence dans la conception et la présentation de nos défis. Bien que la solution ne soit pas révélée à l'avance (pour préserver l'intégrité de l'énigme), la structure sous-jacente garantit que toute personne, avec les bons outils et le bon raisonnement, peut arriver à la même conclusion.",
      
      successTitle: "Votre Succès est Notre Objectif",
      successText: "Dans Paradox Protocol, votre succès est une preuve de votre intelligence. Il n'y a pas de raccourcis ou de coups de chance. Chaque prix gagné est un témoignage direct de votre capacité à déchiffrer les mystères que l'Oracle a fait taire. Nous vous invitons à faire confiance au processus, aiguiser votre esprit et prouver votre valeur.",
      
      ctaTitle: "Prêt à Prouver Votre Mérite ?",
      ctaText: "La récompense attend ceux qui maîtrisent la logique et la déduction.",
      startChallenge: "Commencer le Défi"
    },
    
    de: {
      heroTitle: "Verdienst, Nicht Glück, im Paradox Protocol",
      heroSubtitle: "Im Universum des Paradox Protocol ist Glück eine nicht existierende Variable. Wir glauben fest daran, dass Erfolg in unseren Herausforderungen eine direkte Widerspiegelung Ihrer intellektuellen Fähigkeiten, Ihrer Einsicht und Ihrer Hingabe sein sollte.",
      
      philosophyTitle: "Die Philosophie des Rätsel-Designs: Reine Logik",
      philosophyText: "Jedes Rätsel im Paradox Protocol ist sorgfältig konzipiert basierend auf Prinzipien der Logik, deduktivem Denken und erkennbaren Mustern. Es gibt keine zufälligen Elemente, wie Würfelwürfe, Ziehungen oder Wahrscheinlichkeiten. Die Lösung jedes Fragments ist seinem Design inhärent und wartet darauf, durch sorgfältige Analyse und die Anwendung von Problemlösungsmethoden entdeckt zu werden.",
      
      transparencyTitle: "Transparenz und Überprüfbarkeit",
      transparencyText: "Wir verpflichten uns zur Transparenz im Design und der Präsentation unserer Herausforderungen. Obwohl die Lösung nicht im Voraus enthüllt wird (um die Integrität des Rätsels zu bewahren), gewährleistet die zugrunde liegende Struktur, dass jeder, mit den richtigen Werkzeugen und dem richtigen Denken, zur gleichen Schlussfolgerung gelangen kann.",
      
      successTitle: "Ihr Erfolg ist Unser Zweck",
      successText: "Im Paradox Protocol ist Ihr Erfolg ein Beweis Ihrer Intelligenz. Es gibt keine Abkürzungen oder Glückssträhnen. Jeder gewonnene Preis ist ein direktes Zeugnis Ihrer Fähigkeit, die Mysterien zu entschlüsseln, die das Orakel zum Schweigen gebracht hat. Wir laden Sie ein, dem Prozess zu vertrauen, Ihren Geist zu schärfen und Ihren Wert zu beweisen.",
      
      ctaTitle: "Bereit, Ihren Verdienst zu Beweisen?",
      ctaText: "Die Belohnung wartet auf diejenigen, die Logik und Deduktion beherrschen.",
      startChallenge: "Herausforderung Beginnen"
    }
  }

  const currentContent = content[language] || content.pt

  const trustMetrics = [
    {
      icon: Users,
      value: "50,000+",
      label: t("satisfiedParticipants"),
      description: t("satisfiedParticipantsDesc")
    },
    {
      icon: Award,
      value: "98%",
      label: t("satisfactionRate"),
      description: t("satisfactionRateDesc")
    },
    {
      icon: TrendingUp,
      value: "€2.5M",
      label: t("prizesDistributed"),
      description: t("prizesDistributedDesc")
    },
    {
      icon: Clock,
      value: "24/7",
      label: t("supportAvailable"),
      description: t("supportAvailableDesc")
    }
  ]

  const principles = [
    {
      icon: Target,
      title: t("deterministicStructureTitle"),
      description: t("deterministicStructureDesc")
    },
    {
      icon: Shield,
      title: t("noRandomnessTitle"),
      description: t("noRandomnessDesc")
    },
    {
      icon: Brain,
      title: t("cognitiveSkillsTitle"),
      description: t("cognitiveSkillsDesc")
    },
    {
      icon: Eye,
      title: t("validationProcessTitle"),
      description: t("validationProcessDesc")
    }
  ]

  const certifications = [
    {
      title: t("independentAuditTitle"),
      description: t("independentAuditDesc"),
      icon: CheckCircle
    },
    {
      title: t("dataSecurityTitle"),
      description: t("dataSecurityDesc"),
      icon: Lock
    },
    {
      title: t("gdprComplianceTitle"),
      description: t("gdprComplianceDesc"),
      icon: Shield
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
            <Shield className="w-20 h-20 mx-auto text-green-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {currentContent.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <metric.icon className="w-12 h-12 mx-auto text-purple-400" />
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                    <div className="text-lg font-semibold text-purple-300">{metric.label}</div>
                    <p className="text-gray-400 text-sm">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Brain className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {currentContent.philosophyTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentContent.philosophyText}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="premium-card h-full p-6">
                  <CardContent className="space-y-4">
                    <principle.icon className="w-12 h-12 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Eye className="w-16 h-16 mx-auto text-cyan-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {currentContent.transparencyTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentContent.transparencyText}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Certificações e Segurança
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <cert.icon className="w-16 h-16 mx-auto text-green-400" />
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-16 h-16 mx-auto text-pink-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {currentContent.successTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="premium-card p-8">
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentContent.successText}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              {currentContent.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {currentContent.ctaText}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="cta-button px-8 py-4 rounded-lg text-lg font-semibold text-white"
                onClick={() => window.location.href = '/'}
              >
                {currentContent.startChallenge}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TrustPage


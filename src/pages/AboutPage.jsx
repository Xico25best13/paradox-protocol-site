import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  Shield,
  Globe,
  Zap,
  Eye,
  Compass,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

const AboutPage = () => {
  const { t, language } = useLanguage()

  const content = {
    pt: {
      heroTitle: "O Protocolo Detrás do Paradoxo",
      heroSubtitle: "No coração do universo, onde a lógica se entrelaça com o mistério, nasceu o Paradox Protocol. Não somos apenas uma plataforma; somos os guardiões de um conhecimento ancestral, os arquitetos de desafios que testam os limites da mente humana.",
      
      missionTitle: "A Nossa Missão: Despertar o Oráculo Interior",
      missionText: "Desde tempos imemoriais, o Oráculo sussurrava verdades, mas agora, ele silenciou. A nossa missão é simples, mas profunda: despertar o Oráculo interior em cada um de vós. Através de enigmas meticulosamente concebidos, convidamos-vos a transcender o óbvio, a questionar o estabelecido e a encontrar a clareza onde outros veem apenas caos.",
      
      teamTitle: "Quem Somos: Os Curadores do Conhecimento",
      teamText: "Somos uma equipa de entusiastas de enigmas, lógicos e contadores de histórias, unidos por uma paixão comum: o desafio intelectual. Inspirados pelos grandes mistérios da história e da ficção, dedicamo-nos a criar experiências que não só entretêm, mas também estimulam o pensamento crítico e a criatividade.",
      
      philosophyTitle: "A Nossa Filosofia: Mérito Acima da Sorte",
      philosophyText: "No Paradox Protocol, a sorte não tem lugar. Acreditamos firmemente que o sucesso deve ser uma consequência direta do mérito, da dedicação e da inteligência. Os nossos desafios são construídos sobre princípios de lógica pura, onde cada solução é alcançável através do raciocínio e da análise.",
      
      journeyTitle: "A Sua Jornada Começa Agora",
      journeyText: "Convidamo-lo a aceitar o nosso convite e a mergulhar no desconhecido. Aqueles que ousam desvendar os segredos do Paradox Protocol encontrarão uma experiência única e desafiadora. Esta não é apenas uma competição; é uma oportunidade para testar os seus limites e provar a sua perspicácia.",
      
      ctaTitle: "Está Pronto para Ouvir o Eco do Oráculo?",
      ctaText: "A sua jornada começa agora.",
      startNow: "Começar Agora"
    },
    
    en: {
      heroTitle: "The Protocol Behind the Paradox",
      heroSubtitle: "In the heart of the universe, where logic intertwines with mystery, the Paradox Protocol was born. We are not just a platform; we are the guardians of ancestral knowledge, the architects of challenges that test the limits of the human mind.",
      
      missionTitle: "Our Mission: Awakening the Inner Oracle",
      missionText: "Since time immemorial, the Oracle whispered truths, but now, it has fallen silent. Our mission is simple, yet profound: to awaken the inner Oracle in each of you. Through meticulously conceived enigmas, we invite you to transcend the obvious, question the established, and find clarity where others see only chaos.",
      
      teamTitle: "Who We Are: The Curators of Knowledge",
      teamText: "We are a team of puzzle enthusiasts, logicians, and storytellers, united by a common passion: intellectual challenge. Inspired by the great mysteries of history and fiction, we dedicate ourselves to creating experiences that not only entertain but also stimulate critical thinking and creativity.",
      
      philosophyTitle: "Our Philosophy: Merit Above Luck",
      philosophyText: "In Paradox Protocol, luck has no place. We firmly believe that success should be a direct consequence of merit, dedication, and intelligence. Our challenges are built on principles of pure logic, where each solution is achievable through reasoning and analysis.",
      
      journeyTitle: "Your Journey Begins Now",
      journeyText: "We invite you to accept our invitation and dive into the unknown. Those who dare to unravel the secrets of Paradox Protocol will find a unique and challenging experience. This is not just a competition; it's an opportunity to test your limits and prove your insight.",
      
      ctaTitle: "Are You Ready to Hear the Oracle's Echo?",
      ctaText: "Your journey begins now.",
      startNow: "Start Now"
    },
    
    es: {
      heroTitle: "El Protocolo Detrás de la Paradoja",
      heroSubtitle: "En el corazón del universo, donde la lógica se entrelaza con el misterio, nació el Paradox Protocol. No somos solo una plataforma; somos los guardianes de un conocimiento ancestral, los arquitectos de desafíos que prueban los límites de la mente humana.",
      
      missionTitle: "Nuestra Misión: Despertar el Oráculo Interior",
      missionText: "Desde tiempos inmemoriales, el Oráculo susurraba verdades, pero ahora, ha enmudecido. Nuestra misión es simple, pero profunda: despertar el Oráculo interior en cada uno de ustedes. A través de enigmas meticulosamente concebidos, los invitamos a trascender lo obvio, cuestionar lo establecido y encontrar claridad donde otros ven solo caos.",
      
      teamTitle: "Quiénes Somos: Los Curadores del Conocimiento",
      teamText: "Somos un equipo de entusiastas de enigmas, lógicos y narradores, unidos por una pasión común: el desafío intelectual. Inspirados por los grandes misterios de la historia y la ficción, nos dedicamos a crear experiencias que no solo entretienen sino que también estimulan el pensamiento crítico y la creatividad.",
      
      philosophyTitle: "Nuestra Filosofía: Mérito Sobre la Suerte",
      philosophyText: "En Paradox Protocol, la suerte no tiene lugar. Creemos firmemente que el éxito debe ser una consecuencia directa del mérito, la dedicación y la inteligencia. Nuestros desafíos están construidos sobre principios de lógica pura, donde cada solución es alcanzable a través del razonamiento y el análisis.",
      
      journeyTitle: "Tu Viaje Comienza Ahora",
      journeyText: "Te invitamos a aceptar nuestra invitación y sumergirte en lo desconocido. Aquellos que se atreven a desentrañar los secretos del Paradox Protocol encontrarán una experiencia única y desafiante. Esto no es solo una competencia; es una oportunidad para probar tus límites y demostrar tu perspicacia.",
      
      ctaTitle: "¿Estás Listo para Escuchar el Eco del Oráculo?",
      ctaText: "Tu viaje comienza ahora.",
      startNow: "Comenzar Ahora"
    },
    
    de: {
      heroTitle: "Das Protokoll Hinter dem Paradox",
      heroSubtitle: "Im Herzen des Universums, wo sich Logik mit Mysterium verwebt, wurde das Paradox Protocol geboren. Wir sind nicht nur eine Plattform; wir sind die Hüter alten Wissens, die Architekten von Herausforderungen, die die Grenzen des menschlichen Geistes testen.",
      
      missionTitle: "Unsere Mission: Das Innere Orakel Erwecken",
      missionText: "Seit undenklichen Zeiten flüsterte das Orakel Wahrheiten, aber jetzt ist es verstummt. Unsere Mission ist einfach, aber tiefgreifend: das innere Orakel in jedem von euch zu erwecken. Durch sorgfältig konzipierte Rätsel laden wir euch ein, das Offensichtliche zu überwinden, das Etablierte zu hinterfragen und Klarheit zu finden, wo andere nur Chaos sehen.",
      
      teamTitle: "Wer Wir Sind: Die Kuratoren des Wissens",
      teamText: "Wir sind ein Team von Rätsel-Enthusiasten, Logikern und Geschichtenerzählern, vereint durch eine gemeinsame Leidenschaft: die intellektuelle Herausforderung. Inspiriert von den großen Mysterien der Geschichte und Fiktion widmen wir uns der Schaffung von Erfahrungen, die nicht nur unterhalten, sondern auch kritisches Denken und Kreativität stimulieren.",
      
      philosophyTitle: "Unsere Philosophie: Verdienst Über Glück",
      philosophyText: "Im Paradox Protocol hat Glück keinen Platz. Wir glauben fest daran, dass Erfolg eine direkte Folge von Verdienst, Hingabe und Intelligenz sein sollte. Unsere Herausforderungen basieren auf Prinzipien reiner Logik, wo jede Lösung durch Vernunft und Analyse erreichbar ist.",
      
      journeyTitle: "Ihre Reise Beginnt Jetzt",
      journeyText: "Wir laden Sie ein, unsere Einladung anzunehmen und ins Unbekannte einzutauchen. Diejenigen, die es wagen, die Geheimnisse des Paradox Protocol zu entschlüsseln, werden eine einzigartige und herausfordernde Erfahrung finden. Dies ist nicht nur ein Wettbewerb; es ist eine Gelegenheit, Ihre Grenzen zu testen und Ihre Einsicht zu beweisen.",
      
      ctaTitle: "Sind Sie Bereit, das Echo des Orakels zu Hören?",
      ctaText: "Ihre Reise beginnt jetzt.",
      startNow: "Jetzt Beginnen"
    },
    
    fr: {
      heroTitle: "Le Protocole Derrière le Paradoxe",
      heroSubtitle: "Au cœur de l'univers, où la logique s'entremêle avec le mystère, le Paradox Protocol est né. Nous ne sommes pas seulement une plateforme ; nous sommes les gardiens d'une connaissance ancienne, les architectes de défis qui testent les limites de l'esprit humain.",
      
      missionTitle: "Notre Mission : Éveiller l'Oracle Intérieur",
      missionText: "Depuis des temps immémoriaux, l'Oracle chuchotait des vérités, mais maintenant, il s'est tu. Notre mission est simple, mais profonde : éveiller l'Oracle intérieur en chacun de vous. À travers des énigmes méticuleusement conçues, nous vous invitons à transcender l'évident, questionner l'établi et trouver la clarté là où d'autres ne voient que chaos.",
      
      teamTitle: "Qui Nous Sommes : Les Curateurs de la Connaissance",
      teamText: "Nous sommes une équipe d'enthousiastes d'énigmes, de logiciens et de conteurs, unis par une passion commune : le défi intellectuel. Inspirés par les grands mystères de l'histoire et de la fiction, nous nous consacrons à créer des expériences qui non seulement divertissent mais stimulent aussi la pensée critique et la créativité.",
      
      philosophyTitle: "Notre Philosophie : Le Mérite Avant la Chance",
      philosophyText: "Dans Paradox Protocol, la chance n'a pas sa place. Nous croyons fermement que le succès doit être une conséquence directe du mérite, de la dévotion et de l'intelligence. Nos défis sont construits sur des principes de logique pure, où chaque solution est atteignable par le raisonnement et l'analyse.",
      
      journeyTitle: "Votre Voyage Commence Maintenant",
      journeyText: "Nous vous invitons à accepter notre invitation et à plonger dans l'inconnu. Ceux qui osent dévoiler les secrets du Paradox Protocol trouveront une expérience unique et stimulante. Ce n'est pas seulement une compétition ; c'est une opportunité de tester vos limites et prouver votre perspicacité.",
      
      ctaTitle: "Êtes-vous Prêt à Entendre l'Écho de l'Oracle ?",
      ctaText: "Votre voyage commence maintenant.",
      startNow: "Commencer Maintenant"
    }
  }

  const currentContent = content[language] || content.pt

  const values = [
    {
      title: "Excelência Intelectual",
      description: "Acreditamos que cada mente tem potencial ilimitado. Os nossos enigmas são desenhados para despertar capacidades que nem sabia que tinha.",
      icon: Award
    },
    {
      title: "Comunidade Global",
      description: "Conectamos mentes brilhantes de todo o mundo numa rede de conhecimento e descoberta mútua.",
      icon: Globe
    },
    {
      title: "Inovação Constante",
      description: "Cada enigma é único, criado com tecnologia de ponta e metodologias científicas comprovadas.",
      icon: Zap
    },
    {
      title: "Transparência Total",
      description: "Todos os processos são auditados independentemente. A sua confiança é o nosso bem mais precioso.",
      icon: Shield
    }
  ]

  const teamMembers = [
    {
      name: "Dr. Elena Vasquez",
      role: "Fundadora & Arquiteta de Enigmas",
      description: "PhD em Criptografia pela MIT. 15 anos criando desafios intelectuais para as mentes mais brilhantes do mundo.",
      icon: Brain
    },
    {
      name: "Marcus Chen",
      role: "Diretor de Tecnologia",
      description: "Ex-Google. Especialista em algoritmos complexos e sistemas de gamificação intelectual.",
      icon: Target
    },
    {
      name: "Sofia Andersson",
      role: "Psicóloga Cognitiva",
      description: "Especialista em desenvolvimento cognitivo e motivação intelectual. Garante que cada desafio maximiza o potencial mental.",
      icon: Lightbulb
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {currentContent.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Eye className="w-16 h-16 mx-auto text-purple-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {currentContent.missionTitle}
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentContent.missionText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <value.icon className="w-12 h-12 mx-auto text-purple-400" />
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              {currentContent.teamTitle}
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentContent.teamText}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="premium-card h-full p-6 text-center">
                  <CardContent className="space-y-4">
                    <member.icon className="w-16 h-16 mx-auto text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-purple-300 font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
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
            <Compass className="w-16 h-16 mx-auto text-green-400 mb-6" />
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

      {/* Journey Section */}
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
              {currentContent.journeyTitle}
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
                  {currentContent.journeyText}
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
                {currentContent.startNow}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Users, 
  Star, 
  Zap, 
  Clock,
  Shield,
  Target,
  Award,
  CheckCircle,
  XCircle,
  AlertTriangle,
  X
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import enigmaImage from '../assets/enigma-symbols.png'
import logoImage from '../assets/logo_animated.gif'

const HomePage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 44,
    seconds: 21
  })
  const [enigmaAnswer, setEnigmaAnswer] = useState('')
  const [enigmaState, setEnigmaState] = useState('idle') // 'idle', 'success', 'error'
  const [attempts, setAttempts] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [zoomedImage, setZoomedImage] = useState(null)

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleEnigmaSubmit = (e) => {
    e.preventDefault()
    setAttempts(prev => prev + 1)
    setShowFeedback(true)
    
    if (enigmaAnswer.toLowerCase().trim() === 'key') {
      setEnigmaState('success')
      setTimeout(() => {
        navigate('/desconto')
      }, 2000)
    } else {
      setEnigmaState('error')
      setTimeout(() => {
        setShowFeedback(false)
        setEnigmaState('idle')
      }, 3000)
    }
  }

  const scrollToTickets = () => {
    document.getElementById('tickets-section').scrollIntoView({ behavior: 'smooth' })
  }

  const tickets = [
    {
      name: t('explorer'),
      price: "€9.99",
      prize: "€600",
      description: t('explorerDesc'),
      features: [
        t('explorerFeature1'),
        t('explorerFeature2'),
        t('explorerFeature3')
      ],
      buttonClass: "cta-button",
      popular: false
    },
    {
      name: t('decoder'),
      price: "€15.90",
      prize: "€1,500",
      description: t('decoderDesc'),
      features: [
        t('decoderFeature1'),
        t('decoderFeature2'),
        t('decoderFeature3'),
        t('decoderFeature4')
      ],
      buttonClass: "cta-button",
      popular: true,
      badge: t('mostPopular')
    },
    {
      name: t('master'),
      price: "€23.90",
      prize: "€5,000",
      description: t('masterDesc'),
      features: [
        t('masterFeature1'),
        t('masterFeature2'),
        t('masterFeature3'),
        t('masterFeature4')
      ],
      buttonClass: "cta-button",
      popular: false
    },
    {
      name: t('completeKit'),
      price: "€39.99",
      originalPrice: "€69.78",
      prize: t('totalAccess'),
      description: t('completeKitDesc'),
      features: [
        t('completeKitFeature1'),
        t('completeKitFeature2'),
        t('completeKitFeature3'),
        t('completeKitFeature4'),
        t('completeKitFeature5')
      ],
      buttonClass: "cta-button",
      popular: false,
      bestValue: true,
      badge: t('bestValue'),
      savings: "€29.79"
    }
  ]

  const glyphs = [
    {
      symbol: "✕",
      title: "K",
      description: t('glyphKDesc')
    },
    {
      symbol: "🌊",
      title: "E", 
      description: t('glyphEDesc')
    },
    {
      symbol: "🌳",
      title: "Y",
      description: t('glyphYDesc')
    }
  ]

  return (
    <div className="min-h-screen starfield">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo centralizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="mb-12"
          >
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Paradox Protocol Logo" 
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.3))'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
              {t('heroTitle')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              ✨ {t('heroSubtitle')} ✨
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </motion.div>

          {/* Stats - Otimizado para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-2"
          >
            <div className="premium-card p-4 md:p-6 text-center">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 mx-auto text-yellow-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">€10,000</div>
              <div className="text-gray-400 text-sm md:text-base">{t('totalPrize')}</div>
            </div>
            <div className="premium-card p-4 md:p-6 text-center">
              <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto text-purple-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">1,247</div>
              <div className="text-gray-400 text-sm md:text-base">{t('activeMinds')}</div>
            </div>
            <div className="premium-card p-4 md:p-6 text-center">
              <Star className="w-8 h-8 md:w-12 md:h-12 mx-auto text-pink-400 mb-2 md:mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">98%</div>
              <div className="text-gray-400 text-sm md:text-base">{t('satisfactionRate')}</div>
            </div>
          </motion.div>

          {/* CTA Buttons - Melhor layout mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4"
          >
            <Button 
              onClick={scrollToTickets}
              className="cta-button px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto"
            >
              ✨ {t('startJourney')}
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-4 md:px-6 py-3 md:py-4 w-full sm:w-auto"
              onClick={() => window.open('https://discord.gg/GY3dcsPPNV', '_blank')}
            >
              💬 {t('joinDiscord')}
            </Button>
            <Button 
              variant="outline" 
              className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-6 py-4"
              onClick={() => window.open('https://t.me/paradoxprotocol', '_blank')}
            >
              📱 {t('followTelegram')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tickets Section - Otimizado para mobile */}
      <section id="tickets-section" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              {t('ticketsTitle')}
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-2">
              {t('ticketsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className="ticket-card h-full p-4 md:p-6">
                  {ticket.badge && (
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 badge text-xs md:text-sm ${ticket.popular ? 'popular' : ticket.bestValue ? 'best-value' : ''}`}>
                      {ticket.badge}
                    </div>
                  )}
                  
                  <CardContent className="space-y-4 md:space-y-6 p-0">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{ticket.description}</p>
                      
                      <div className="mb-3 md:mb-4">
                        {ticket.originalPrice && (
                                <div className="text-gray-500 line-through text-xs md:text-sm">{t("was")}: {ticket.originalPrice}</div>
                        )}
                        <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">{ticket.price}</div>
                        <div className="text-yellow-400 font-semibold text-sm md:text-base">
                          {t('prize')}: {ticket.prize}
                        </div>
                        {ticket.savings && (
                          <div className="text-green-400 font-semibold mt-1 text-sm">
                            {t('save')} {ticket.savings}!
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      {ticket.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full ${ticket.buttonClass} py-3`}>
                      {t('choose')} {ticket.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enigma Zero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
              🔮 {t('enigmaZeroTitle')} 🔮
            </h2>
            
            {/* Marketing Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <div className="premium-card p-4 md:p-6 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50 border-2 border-yellow-400/30">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">
                  ✨ {t('enigmaMarketingTitle')} ✨
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {t('enigmaMarketingDesc')}
                </p>
              </div>
            </motion.div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
              {t('enigmaZeroSubtitle')}
            </p>

            {/* Countdown - Compacto em mobile */}
            <div className="mb-8 md:mb-12">
              <p className="text-yellow-400 font-semibold mb-3 md:mb-4 text-sm md:text-base">{t('nextChallenge')}:</p>
              <div className="countdown-timer max-w-xs md:max-w-md mx-auto">
                <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">{t('days')}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">{t('hours')}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">{t('minutes')}</div>
                  </div>
                  <div>
                    <div className="countdown-digit text-lg md:text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400 mt-1">{t('seconds')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenge Explanation - Mais compacto em mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 flex justify-center"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 rounded-xl p-4 md:p-8 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mr-2 md:mr-3" />
                <span className="text-purple-400 font-bold text-lg md:text-xl">{t('challengeTitle')}</span>
                <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-400 ml-2 md:ml-3" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{t('challengeQuestion')}</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{t('challengeExplanation')}</p>
            </div>
          </motion.div>

          {/* Original Enigma Image - Otimizado para mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8 flex justify-center px-2"
          >
            <div className="relative cursor-pointer group max-w-full" onClick={() => setZoomedImage({ src: enigmaImage, alt: 'Símbolos Ancestrais K-E-Y' })}>
              <img 
                src={enigmaImage} 
                alt="Símbolos Ancestrais K-E-Y" 
                className="max-w-full md:max-w-2xl w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg"></div>
              <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                <span className="text-red-400 text-xs md:text-sm font-bold">🎯 {t('solveThis')}</span>
              </div>
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-400 text-xs md:text-sm font-bold">🔍 {t('clickToEnlarge')}</span>
              </div>
            </div>
          </motion.div>

          {/* Enigma Form - Otimizado para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 px-4"
          >
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">💭 {t('yourAnswer')}</h3>
              <p className="text-gray-300 text-sm md:text-base">{t('enterAnswerHint')}</p>
            </div>
            
            <form onSubmit={handleEnigmaSubmit} className="max-w-md mx-auto space-y-3 md:space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t('enterKeyword')}
                  value={enigmaAnswer}
                  onChange={(e) => setEnigmaAnswer(e.target.value)}
                  className={`bg-black/30 border-white/20 text-white placeholder-gray-400 transition-all duration-300 h-12 md:h-auto text-base ${
                    enigmaState === 'success' ? 'border-green-500 bg-green-500/10' :
                    enigmaState === 'error' ? 'border-red-500 bg-red-500/10' : ''
                  }`}
                  disabled={enigmaState === 'success'}
                />
                {enigmaState === 'success' && (
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
                {enigmaState === 'error' && (
                  <XCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
              </div>
              
              <Button 
                type="submit" 
                className={`w-full transition-all duration-300 ${
                  enigmaState === 'success' ? 'bg-green-600 hover:bg-green-700' :
                  enigmaState === 'error' ? 'bg-red-600 hover:bg-red-700' : 'cta-button'
                }`}
                disabled={enigmaState === 'success'}
              >
                {enigmaState === 'success' ? 'Redirecionando...' : t('decipherEnigma')}
              </Button>
            </form>

            {/* Feedback Messages */}
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6"
              >
                {enigmaState === 'success' && (
                  <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg text-center">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      🎉 {t('congratulations')}
                    </h3>
                    <p className="text-green-300 mb-2">
                      {t('discountActive')}
                    </p>
                    <p className="text-sm text-green-200">
                      Redirecionando para a página de desconto...
                    </p>
                  </div>
                )}

                {enigmaState === 'error' && (
                  <div className="p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-lg text-center">
                    <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-red-400 mb-2">
                      {t('incorrectAnswer')}
                    </h3>
                    <p className="text-red-300 mb-2">
                      {t('tryAgain')}
                    </p>
                    <p className="text-sm text-red-200">
                      {t('discountValidity')}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Attempts Counter */}
            {attempts > 0 && enigmaState === 'idle' && (
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  Tentativas realizadas: {attempts}
                </p>
              </div>
            )}

            {/* Help text */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                💡 {t('needHelp')} {t('scrollForClues')}
              </p>
            </div>
          </motion.div>

          {/* Ancient Parchments Gallery - Otimizado para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 px-2"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 mb-3 md:mb-4">
                📜 {t('ancientSymbols')} 📜
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base px-2">
                {t('ancientSymbolsDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {[
                { src: '/parchment_page_1.png', title: t('parchment1Title'), desc: t('parchment1Desc') },
                { src: '/parchment_page_2.png', title: t('parchment2Title'), desc: t('parchment2Desc') },
                { src: '/parchment_page_3.png', title: t('parchment3Title'), desc: t('parchment3Desc') },
                { src: '/parchment_page_4.png', title: t('parchment4Title'), desc: t('parchment4Desc') }
              ].map((parchment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="relative group"
                >
                  <div className="premium-card p-4 md:p-6 h-full">
                    <div className="relative overflow-hidden rounded-lg mb-3 md:mb-4 cursor-pointer" onClick={() => setZoomedImage({ src: parchment.src, alt: parchment.title })}>
                      <img 
                        src={parchment.src}
                        alt={parchment.title}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{
                          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5)) sepia(0.2) contrast(1.1)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-yellow-500/20 backdrop-blur-sm rounded-full p-1 md:p-2">
                        <span className="text-yellow-400 text-xs md:text-sm font-bold">#{index + 1}</span>
                      </div>
                      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-1 md:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-400 text-xs font-bold">🔍 {t('clickToEnlarge')}</span>
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">{parchment.title}</h4>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{parchment.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Glyphs Explanation - Moved after parchments */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
                💡 {t('solutionHints')} 💡
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                {t('solutionHintsDesc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {glyphs.map((glyph, index) => (
                <motion.div
                  key={glyph.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glyph-card">
                    <div className="text-6xl mb-4">{glyph.symbol}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{glyph.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{glyph.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm rounded-full p-3 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default HomePage


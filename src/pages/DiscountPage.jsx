import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { CheckCircle, Star, Gift, ArrowRight } from 'lucide-react'

const DiscountPage = () => {
  const { t } = useLanguage()

  const tickets = [
    {
      id: 'explorer',
      name: t('explorer'),
      originalPrice: 9.99,
      discountPrice: 8.49,
      prize: '€600',
      description: t('explorerDesc'),
      features: [
        t("explorerFeature1"),
        t("explorerFeature2"),
        t("explorerFeature3"),
        t("explorerFeature4")
      ],
      color: 'from-blue-600 to-purple-600',
      popular: false
    },
    {
      id: 'decoder',
      name: t('decoder'),
      originalPrice: 15.90,
      discountPrice: 13.52,
      prize: '€1,500',
      description: t('decoderDesc'),
      features: [
        t("decoderFeature1"),
        t("decoderFeature2"),
        t("decoderFeature3"),
        t("decoderFeature4"),
        t("decoderFeature5")
      ],
      color: 'from-purple-600 to-pink-600',
      popular: true
    },
    {
      id: 'master',
      name: t('master'),
      originalPrice: 23.90,
      discountPrice: 20.32,
      prize: '€5,000',
      description: t('masterDesc'),
      features: [
        t("masterFeature1"),
        t("masterFeature2"),
        t("masterFeature3"),
        t("masterFeature4"),
        t("masterFeature5"),
        t("masterFeature6")
      ],
      color: 'from-pink-600 to-red-600',
      popular: false
    },
    {
      id: 'complete',
      name: t('completeKit'),
      originalPrice: 39.99,
      discountPrice: 33.99,
      prize: '€7,100',
      description: t('completeKitDesc'),
      features: [
        t("completeKitFeature1"),
        t("completeKitFeature2"),
        t("completeKitFeature3"),
        t("completeKitFeature4"),
        t("completeKitFeature5"),
        t("completeKitFeature6"),
        t("completeKitFeature7")
      ],
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      bestValue: true
    }
  ]

  return (
    <div className="min-h-screen starfield pt-20">
      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 py-6 mb-12"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-white mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                🎉 {t("congratulations")} 🎉
              </h1>
              <p className="text-green-100 text-lg mt-2">
                {t("discountActive")}
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3"
          >
            <Gift className="h-6 w-6 text-yellow-300 mr-2" />
            <span className="text-white font-semibold text-xl">
              DESCONTO DE 15% ATIVO!
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Tickets Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("ticketsTitle")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("discountPageSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`relative bg-gradient-to-br ${ticket.color} rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                ticket.popular ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {t("mostPopular")}
                  </div>
                </div>
              )}

              {ticket.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Gift className="h-4 w-4 mr-1" />
                    {t("bestValue")}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <p className="text-white/80 text-sm mb-4">{ticket.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold">€{ticket.discountPrice}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-white/60 line-through text-lg">€{ticket.originalPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -15%
                    </span>
                  </div>
                  <div className="text-yellow-300 font-bold text-lg mt-2">
                    Prémio: {ticket.prize}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {ticket.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 font-bold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                {t("chooseNow")}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ⏰ {t("limitedTimeOffer")}!
            </h3>
            <p className="text-white/90 text-lg mb-6">
              {t("discountValidity")}
            </p>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm">{t("min") || "MIN"}</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm">{t("sec") || "SEG"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DiscountPage


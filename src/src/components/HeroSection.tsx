import { motion } from 'framer-motion'
import { ArrowDown, Brain, Zap, TrendingUp } from 'lucide-react'

interface HeroSectionProps {
  isZh?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isZh = false }) => {
  const content = {
    en: {
      title: "The Token Epoch",
      subtitle: ["Rethinking Economics of AI Labor from", "Man-Days", "to", "Mega-Token-Hours"],
      description: "As AI systems take on real work—writing, coding, designing, conversing—we must ask:",
      question: "If AI is doing the work, how do we measure its productivity?",
      author: "By Xuchen Yao",
      stats: [
        {
          value: "1 MTH",
          label: "Mega-Token-Hour",
          description: "New unit of AI productivity"
        },
        {
          value: "$1-2",
          label: "Cost per Million Tokens",
          description: "Current AI pricing (2025)"
        },
        {
          value: "1 TT/s",
          label: "Future Goal",
          description: "Trillion tokens per second"
        }
      ],
      button: "Explore the Journey"
    },
    zh: {
      title: "Token 纪元",
      subtitle: ["智能社会的计量革命：从", "人天", "到", "兆字元时"],
      description: "当AI系统承担真正的工作——写作、编程、设计、对话——我们必须问：",
      question: "如果AI在工作，我们如何衡量它的生产力？",
      author: "作者：姚旭晨",
      stats: [
        {
          value: "1 马斯",
          label: "兆字元时",
          description: "AI生产力的新单位"
        },
        {
          value: "¥14-28",
          label: "每百万字元成本",
          description: "当前AI定价 (2025)"
        },
        {
          value: "1 万亿字元/秒",
          label: "未来目标",
          description: "每秒万亿字元"
        }
      ],
      button: "探索旅程"
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const scrollToTimeline = () => {
    const element = document.getElementById('timeline')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/ai-neural-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/70 to-purple-900/80" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Brain className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Zap className="w-12 h-12 text-yellow-400" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <TrendingUp className="w-12 h-12 text-green-400" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {currentContent.title}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-4xl mx-auto leading-relaxed"
          >
            {currentContent.subtitle[0]} <br />
            <span className="text-cyan-300 font-semibold">{currentContent.subtitle[1]}</span> {currentContent.subtitle[2]}{' '}
            <span className="text-purple-300 font-semibold">{currentContent.subtitle[3]}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {currentContent.description}<br />
            <span className="italic text-cyan-200">{currentContent.question}</span>
          </p>
          
          <p className="text-md md:text-lg text-slate-300 max-w-2xl mx-auto">
            {currentContent.author}
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className={`text-3xl font-bold mb-2 ${index === 0 ? 'text-cyan-300' : index === 1 ? 'text-purple-300' : 'text-green-300'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-300">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-2">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTimeline}
          className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          {currentContent.button}
          <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection

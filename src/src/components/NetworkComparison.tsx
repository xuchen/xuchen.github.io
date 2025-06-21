import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Brain, ArrowRight, Wifi, Zap } from 'lucide-react'

interface NetworkData {
  mobile_networks: {
    [key: string]: {
      speed: string
      era: string
    }
  }
  token_networks: {
    [key: string]: {
      speed: string
      era: string
      description: string
    }
  }
}

interface NetworkComparisonProps {
  data: NetworkData
  isZh?: boolean
}

const NetworkComparison: React.FC<NetworkComparisonProps> = ({ data, isZh = false }) => {
  const [selectedGeneration, setSelectedGeneration] = useState(2)

  const content = {
    en: {
      mobileNetworks: "Mobile Networks",
      tokenNetworks: "Token Networks", 
      dataTransmissionSpeed: "Data transmission speed evolution",
      aiProcessingSpeed: "AI processing speed evolution",
      evolution: "Evolution",
      fromDataToIntelligence: "From data to intelligence",
      dataTransmission: "Data transmission",
      aiProcessing: "AI processing",
      comparison: "Comparison",
      vs: "vs",
      future: "Future",
      generationDescriptions: {
        2: "Just as 2G enabled basic mobile communication, 2T represents the foundation of AI processing networks.",
        3: "3G brought mobile internet, while 3T will bring enhanced AI capabilities to everyday tasks.",
        4: "4G enabled high-speed mobile computing, and 4T will enable real-time AI processing at scale.",
        5: "5G enables ultra-fast, low-latency communication, while 5T will enable instant AI responses and ubiquitous intelligence."
      },
      years: {
        "1990s": "1990s",
        "2000s": "2000s", 
        "2010s": "2010s",
        "2020s": "2020s",
        "2025": "2025",
        "Future": "Future"
      }
    },
    zh: {
      mobileNetworks: "移动网络",
      tokenNetworks: "字元网络",
      dataTransmissionSpeed: "数据传输速度演进",
      aiProcessingSpeed: "AI处理速度演进",
      evolution: "演进",
      fromDataToIntelligence: "从数据到智能",
      dataTransmission: "数据传输",
      aiProcessing: "AI处理",
      comparison: "对比",
      vs: "对比",
      future: "未来",
      generationDescriptions: {
        2: "正如2G实现了基础移动通信，2T代表了AI处理网络的基础。",
        3: "3G带来了移动互联网，而3T将为日常任务带来增强的AI能力。",
        4: "4G实现了高速移动计算，4T将实现大规模实时AI处理。",
        5: "5G实现了超高速、低延迟通信，而5T将实现即时AI响应和无处不在的智能。"
      },
      years: {
        "1990s": "1990年代",
        "2000s": "2000年代",
        "2010s": "2010年代", 
        "2020s": "2020年代",
        "2025": "2025年",
        "Future": "未来"
      }
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const mobileGenerations = [
    { gen: 2, label: '2G', year: currentContent.years["1990s"], color: 'from-red-500 to-red-600' },
    { gen: 3, label: '3G', year: currentContent.years["2000s"], color: 'from-orange-500 to-orange-600' },
    { gen: 4, label: '4G', year: currentContent.years["2010s"], color: 'from-blue-500 to-blue-600' },
    { gen: 5, label: '5G', year: currentContent.years["2020s"], color: 'from-green-500 to-green-600' }
  ]

  const tokenGenerations = [
    { gen: 2, label: '2T', year: currentContent.years["2025"], color: 'from-purple-500 to-purple-600' },
    { gen: 3, label: '3T', year: currentContent.years["Future"], color: 'from-indigo-500 to-indigo-600' },
    { gen: 4, label: '4T', year: currentContent.years["Future"], color: 'from-cyan-500 to-cyan-600' },
    { gen: 5, label: '5T', year: currentContent.years["Future"], color: 'from-pink-500 to-pink-600' }
  ]

  const getMobileData = (gen: number) => {
    const key = `${gen}G`
    return data.mobile_networks[key] || { speed: 'N/A', era: 'N/A' }
  }

  const getTokenData = (gen: number) => {
    const key = `${gen}T`
    return data.token_networks[key] || { speed: 'N/A', era: 'N/A', description: 'N/A' }
  }

  const parseSpeed = (speed: string, isToken: boolean = false) => {
    if (speed === 'N/A') return 0
    
    const num = parseFloat(speed.replace(/[^0-9.]/g, ''))
    
    if (isToken) {
      if (speed.includes('T/s')) return num
      return num
    } else {
      if (speed.includes('GB/s')) return num * 1000000
      if (speed.includes('MB/s')) return num * 1000
      if (speed.includes('KB/s')) return num
      return num
    }
  }

  const formatSpeedBar = (speed: string, maxValue: number, isToken: boolean = false) => {
    const value = parseSpeed(speed, isToken)
    const percentage = (value / maxValue) * 100
    return Math.max(percentage, 2) // Minimum 2% for visibility
  }

  const maxMobileSpeed = Math.max(...mobileGenerations.map(g => parseSpeed(getMobileData(g.gen).speed)))
  const maxTokenSpeed = Math.max(...tokenGenerations.map(g => parseSpeed(getTokenData(g.gen).speed, true)))

  return (
    <div className="max-w-7xl mx-auto">
      {/* Generation Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 rounded-2xl p-2 inline-flex">
          {mobileGenerations.map((gen) => (
            <button
              key={gen.gen}
              onClick={() => setSelectedGeneration(gen.gen)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedGeneration === gen.gen
                  ? 'bg-white text-slate-800 shadow-md'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {gen.label} / {gen.gen}T
            </button>
          ))}
        </div>
      </div>

      {/* Main Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mobile Networks */}
        <motion.div
          key={`mobile-${selectedGeneration}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-slate-200"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{currentContent.mobileNetworks}</h3>
            <p className="text-slate-600">{currentContent.dataTransmissionSpeed}</p>
          </div>

          <div className="space-y-4">
            {mobileGenerations.map((gen) => {
              const mobileData = getMobileData(gen.gen)
              const isSelected = gen.gen === selectedGeneration
              
              return (
                <motion.div
                  key={gen.gen}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ 
                    opacity: isSelected ? 1 : 0.6, 
                    scale: isSelected ? 1 : 0.95 
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gen.color} mr-3`} />
                      <span className="font-bold text-slate-800">{gen.label}</span>
                      <span className="text-sm text-slate-500 ml-2">({gen.year})</span>
                    </div>
                    <span className="font-semibold text-blue-600">{mobileData.speed}</span>
                  </div>
                  
                  {/* Speed Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${formatSpeedBar(mobileData.speed, maxMobileSpeed)}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${gen.color}`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Token Networks */}
        <motion.div
          key={`token-${selectedGeneration}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-slate-200"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{currentContent.tokenNetworks}</h3>
            <p className="text-slate-600">{currentContent.aiProcessingSpeed}</p>
          </div>

          <div className="space-y-4">
            {tokenGenerations.map((gen) => {
              const tokenData = getTokenData(gen.gen)
              const isSelected = gen.gen === selectedGeneration
              
              return (
                <motion.div
                  key={gen.gen}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ 
                    opacity: isSelected ? 1 : 0.6, 
                    scale: isSelected ? 1 : 0.95 
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gen.color} mr-3`} />
                      <span className="font-bold text-slate-800">{gen.label}</span>
                      <span className="text-sm text-slate-500 ml-2">({gen.year})</span>
                    </div>
                    <span className="font-semibold text-purple-600">{tokenData.speed}</span>
                  </div>
                  
                  {/* Speed Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${formatSpeedBar(tokenData.speed, maxTokenSpeed, true)}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${gen.color}`}
                    />
                  </div>

                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-sm text-slate-600 mt-2 pt-2 border-t border-slate-200"
                    >
                      {tokenData.description}
                    </motion.p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Detailed Comparison */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGeneration}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {mobileGenerations[selectedGeneration - 2]?.label} {currentContent.vs} {tokenGenerations[selectedGeneration - 2]?.label} {currentContent.comparison}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Network Details */}
            <div className="text-center">
              <Wifi className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-blue-400 mb-2">
                {mobileGenerations[selectedGeneration - 2]?.label} Mobile
              </h4>
              <p className="text-3xl font-bold mb-2">{getMobileData(selectedGeneration).speed}</p>
              <p className="text-slate-300">{getMobileData(selectedGeneration).era}</p>
              <p className="text-sm text-slate-400 mt-2">{currentContent.dataTransmission}</p>
            </div>

            {/* Comparison Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <ArrowRight className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-cyan-400 font-semibold">{currentContent.evolution}</p>
                <p className="text-sm text-slate-400">{currentContent.fromDataToIntelligence}</p>
              </div>
            </div>

            {/* Token Network Details */}
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-purple-400 mb-2">
                {tokenGenerations[selectedGeneration - 2]?.label} {isZh ? '字元' : 'Tokens'}
              </h4>
              <p className="text-3xl font-bold mb-2">{getTokenData(selectedGeneration).speed}</p>
              <p className="text-slate-300">{getTokenData(selectedGeneration).era}</p>
              <p className="text-sm text-slate-400 mt-2">{currentContent.aiProcessing}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-300 max-w-3xl mx-auto">
              {currentContent.generationDescriptions[selectedGeneration as keyof typeof currentContent.generationDescriptions]}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default NetworkComparison

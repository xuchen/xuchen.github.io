import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cog, Users, Brain, ChevronRight } from 'lucide-react'

interface TimelineData {
  eras: Array<{
    era: string
    period: string
    unit: string
    description: string
    example: string
    modern_example: string
    key_advancement: string
  }>
}

interface InteractiveTimelineProps {
  data: TimelineData
  isZh?: boolean
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ data, isZh = false }) => {
  const [selectedEra, setSelectedEra] = useState(0)

  const content = {
    en: {
      unitOfMeasurement: "Unit of Measurement",
      keyAdvancement: "Key Advancement",
      historicalExample: "Historical Example",
      modernExample: "Modern Example",
      previousEra: "Previous Era",
      nextEra: "Next Era"
    },
    zh: {
      unitOfMeasurement: "计量单位",
      keyAdvancement: "关键进步",
      historicalExample: "历史案例",
      modernExample: "现代案例",
      previousEra: "上一个时代",
      nextEra: "下一个时代"
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const icons = [
    <Cog className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <Brain className="w-8 h-8" />
  ]

  const colors = [
    'from-amber-500 to-orange-600',
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600'
  ]

  const bgColors = [
    'bg-amber-50',
    'bg-blue-50',
    'bg-purple-50'
  ]

  const iconColors = [
    'text-amber-600',
    'text-blue-600',
    'text-purple-600'
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Timeline Navigation */}
      <div className="relative mb-16">
        <div className="flex justify-between items-center relative">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 transform -translate-y-1/2 z-0" />
          
          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-purple-500 transform -translate-y-1/2 z-10"
            initial={{ width: "33%" }}
            animate={{ width: `${(selectedEra + 1) * 33.33}%` }}
            transition={{ duration: 0.5 }}
          />

          {data.eras.map((era, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedEra(index)}
              className={`relative z-20 w-20 h-20 rounded-full border-4 border-white shadow-lg transition-all duration-300 hover:scale-110 ${
                selectedEra === index
                  ? `bg-gradient-to-br ${colors[index]} text-white`
                  : 'bg-white text-slate-600 hover:bg-slate-50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center">
                {icons[index]}
              </div>
              
              {/* Era Label */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-sm font-semibold text-slate-700">{era.period}</div>
                <div className="text-xs text-slate-500">{era.unit}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Era Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedEra}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-8 ${bgColors[selectedEra]}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${bgColors[selectedEra]} ${iconColors[selectedEra]} mr-4`}>
                  {icons[selectedEra]}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">{data.eras[selectedEra].era}</h3>
                  <p className="text-slate-600">{data.eras[selectedEra].period}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-2">{currentContent.unitOfMeasurement}</h4>
                  <p className="text-2xl font-bold text-slate-800">{data.eras[selectedEra].unit}</p>
                  <p className="text-slate-600">{data.eras[selectedEra].description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-2">{currentContent.keyAdvancement}</h4>
                  <p className="text-slate-600">{data.eras[selectedEra].key_advancement}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Examples */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h4 className="text-lg font-semibold text-slate-700 mb-3">{currentContent.historicalExample}</h4>
                <p className="text-slate-600">{data.eras[selectedEra].example}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h4 className="text-lg font-semibold text-slate-700 mb-3">{currentContent.modernExample}</h4>
                <p className="text-slate-600">{data.eras[selectedEra].modern_example}</p>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setSelectedEra(Math.max(0, selectedEra - 1))}
              disabled={selectedEra === 0}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedEra === 0
                  ? 'text-slate-400 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white'
              }`}
            >
              <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
              {currentContent.previousEra}
            </button>

            <div className="flex space-x-2">
              {data.eras.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedEra(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    selectedEra === index
                      ? `bg-gradient-to-r ${colors[index]}`
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setSelectedEra(Math.min(data.eras.length - 1, selectedEra + 1))}
              disabled={selectedEra === data.eras.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedEra === data.eras.length - 1
                  ? 'text-slate-400 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white'
              }`}
            >
              {currentContent.nextEra}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default InteractiveTimeline

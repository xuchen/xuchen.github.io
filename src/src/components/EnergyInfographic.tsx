import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Brain, Book, Car, Factory, Home } from 'lucide-react'

interface EnergyData {
  wikipedia_generation: {
    size: string
    cost: string
    energy: string
    ev_equivalent: string
  }
  "1_trillion_tokens": {
    cost: string
    energy: string
    description: string
  }
}

interface EnergyInfographicProps {
  data: EnergyData
  isZh?: boolean
}

const EnergyInfographic: React.FC<EnergyInfographicProps> = ({ data, isZh = false }) => {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const content = {
    en: {
      energyIntelligenceFlow: "Energy → Intelligence Flow",
      energyFlow: [
        {
          id: 'electricity',
          title: 'Raw Electricity',
          icon: <Zap className="w-8 h-8" />,
          color: 'from-yellow-400 to-yellow-600',
          description: 'Power from the grid'
        },
        {
          id: 'computation',
          title: 'GPU Computation',
          icon: <Factory className="w-8 h-8" />,
          color: 'from-blue-400 to-blue-600',
          description: 'Processing power'
        },
        {
          id: 'tokens',
          title: 'Token Generation',
          icon: <Brain className="w-8 h-8" />,
          color: 'from-purple-400 to-purple-600',
          description: 'AI intelligence'
        },
        {
          id: 'output',
          title: 'Knowledge Output',
          icon: <Book className="w-8 h-8" />,
          color: 'from-green-400 to-green-600',
          description: 'Useful content'
        }
      ],
      comparisons: [
        {
          title: 'Wikipedia Generation',
          subtitle: '6.4 Giga-Tokens',
          color: 'bg-blue-50 border-blue-200'
        },
        {
          title: 'Trillion Token Processing',
          subtitle: '1 TT computation',
          color: 'bg-purple-50 border-purple-200'
        }
      ],
      energyRequired: "Energy Required",
      processingCost: "Processing Cost",
      equivalentTo: "Equivalent to:",
      energyTokenConversionChart: "Energy → Token Conversion Chart",
      energySource: "Energy Source",
      energyAmount: "Energy Amount",
      tokensGenerated: "Tokens Generated",
      conversionRate: "Conversion Rate",
      energyEquivalents: [
        { item: 'LED bulb (24h)', energy: '0.24 kWh', tokens: '5.3 MT' },
        { item: 'Average home (1 day)', energy: '30 kWh', tokens: '667 MT' },
        { item: 'Electric car (100 miles)', energy: '33 kWh', tokens: '733 MT' },
        { item: 'Small town (1 hour)', energy: '1,000 kWh', tokens: '22.2 GT' }
      ],
      environmentalPerspective: "Environmental Perspective",
      environmentalCards: [
        {
          title: "Energy Efficiency",
          description: "0.045 kWh per million tokens represents significant computational efficiency compared to traditional computing"
        },
        {
          title: "Intelligence Density", 
          description: "Each kWh can generate approximately 22,000 tokens of AI intelligence and reasoning"
        },
        {
          title: "Knowledge Output",
          description: "The energy to generate Wikipedia could power a home for 1.5 days or charge an EV halfway"
        }
      ]
    },
    zh: {
      energyIntelligenceFlow: "能源 → 智能流",
      energyFlow: [
        {
          id: 'electricity',
          title: '原始电力',
          icon: <Zap className="w-8 h-8" />,
          color: 'from-yellow-400 to-yellow-600',
          description: '来自电网的电力'
        },
        {
          id: 'computation',
          title: 'GPU计算',
          icon: <Factory className="w-8 h-8" />,
          color: 'from-blue-400 to-blue-600',
          description: '处理能力'
        },
        {
          id: 'tokens',
          title: '字元生成',
          icon: <Brain className="w-8 h-8" />,
          color: 'from-purple-400 to-purple-600',
          description: 'AI智能'
        },
        {
          id: 'output',
          title: '知识输出',
          icon: <Book className="w-8 h-8" />,
          color: 'from-green-400 to-green-600',
          description: '有用内容'
        }
      ],
      comparisons: [
        {
          title: '维基百科生成',
          subtitle: '64亿字元',
          color: 'bg-blue-50 border-blue-200'
        },
        {
          title: '万亿字元处理',
          subtitle: '1万亿字元计算',
          color: 'bg-purple-50 border-purple-200'
        }
      ],
      energyRequired: "所需能源",
      processingCost: "处理成本",
      equivalentTo: "相当于：",
      energyTokenConversionChart: "能源 → 字元转换表",
      energySource: "能源来源",
      energyAmount: "能源数量",
      tokensGenerated: "生成字元",
      conversionRate: "转换率",
      energyEquivalents: [
        { item: 'LED灯泡（24小时）', energy: '0.24 千瓦时', tokens: '5.3 MT' },
        { item: '普通家庭（1天）', energy: '30 千瓦时', tokens: '667 MT' },
        { item: '电动汽车（100英里）', energy: '33 千瓦时', tokens: '733 MT' },
        { item: '小镇（1小时）', energy: '1,000 千瓦时', tokens: '22.2 GT' }
      ],
      environmentalPerspective: "环境视角",
      environmentalCards: [
        {
          title: "能源效率",
          description: "每百万字元0.045千瓦时代表了与传统计算相比的显著计算效率"
        },
        {
          title: "智能密度",
          description: "每千瓦时可以生成大约22,000个AI智能和推理字元"
        },
        {
          title: "知识输出",
          description: "生成维基百科的能源可以为家庭供电1.5天或为电动汽车充电一半"
        }
      ]
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const energyFlow = currentContent.energyFlow

  const comparisons = currentContent.comparisons.map((comp, index) => ({
    ...comp,
    energy: data[index === 0 ? 'wikipedia_generation' : '1_trillion_tokens'].energy,
    cost: data[index === 0 ? 'wikipedia_generation' : '1_trillion_tokens'].cost,
    comparison: data[index === 0 ? 'wikipedia_generation' : '1_trillion_tokens'][index === 0 ? 'ev_equivalent' : 'description'],
    icon: index === 0 ? <Book className="w-12 h-12" /> : <Brain className="w-12 h-12" />
  }))

  const energyEquivalents = currentContent.energyEquivalents

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Energy Flow Visualization */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white overflow-hidden">
        <h3 className="text-3xl font-bold text-center mb-12">{currentContent.energyIntelligenceFlow}</h3>
        
        <div className="relative">
          {/* Flow Path */}
          <div className="flex justify-between items-center mb-8">
            {energyFlow.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                {/* Connection Line */}
                {index < energyFlow.length - 1 && (
                  <div className="absolute top-10 left-full w-20 h-1 bg-slate-700">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: animationStep > index ? '100%' : '0%' 
                      }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                )}

                {/* Step Circle */}
                <motion.div
                  animate={{ 
                    scale: animationStep === index ? 1.2 : 1,
                    opacity: animationStep >= index ? 1 : 0.5
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  {step.icon}
                </motion.div>

                {/* Step Info */}
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-slate-300 text-center">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Flowing Particles */}
          <div className="absolute top-10 left-0 right-0 h-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                initial={{ x: 0, opacity: 0 }}
                animate={{ 
                  x: ['0%', '100%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Energy Comparisons */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {comparisons.map((comp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`rounded-2xl p-8 border-2 ${comp.color}`}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-slate-600">
                  {comp.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{comp.title}</h3>
              <p className="text-slate-600">{comp.subtitle}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                <span className="font-medium text-slate-700">{currentContent.energyRequired}</span>
                <span className="font-bold text-xl text-orange-600">{comp.energy}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                <span className="font-medium text-slate-700">{currentContent.processingCost}</span>
                <span className="font-bold text-xl text-green-600">{comp.cost}</span>
              </div>

              <div className="p-4 bg-white rounded-xl">
                <span className="font-medium text-slate-700 block mb-2">{currentContent.equivalentTo}</span>
                <span className="text-slate-600 italic">{comp.comparison}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Energy Equivalents Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-8 border border-slate-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
          <Zap className="w-6 h-6 mr-2 text-yellow-500" />
          {currentContent.energyTokenConversionChart}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-4 px-6 font-bold text-slate-700">{currentContent.energySource}</th>
                <th className="text-center py-4 px-6 font-bold text-slate-700">{currentContent.energyAmount}</th>
                <th className="text-center py-4 px-6 font-bold text-slate-700">{currentContent.tokensGenerated}</th>
                <th className="text-center py-4 px-6 font-bold text-slate-700">{currentContent.conversionRate}</th>
              </tr>
            </thead>
            <tbody>
              {energyEquivalents.map((equiv, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                        {index === 0 && <Home className="w-4 h-4 text-slate-600" />}
                        {index === 1 && <Home className="w-4 h-4 text-slate-600" />}
                        {index === 2 && <Car className="w-4 h-4 text-slate-600" />}
                        {index === 3 && <Factory className="w-4 h-4 text-slate-600" />}
                      </div>
                      <span className="font-medium text-slate-700">{equiv.item}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-orange-600">{equiv.energy}</td>
                  <td className="py-4 px-6 text-center font-semibold text-purple-600">{equiv.tokens}</td>
                  <td className="py-4 px-6 text-center text-sm text-slate-600">
                    {(parseFloat(equiv.tokens.replace(/[^\d.]/g, '')) / parseFloat(equiv.energy.replace(/[^\d.]/g, ''))).toFixed(1)} T/kWh
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Environmental Impact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">{currentContent.environmentalPerspective}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.environmentalCards[0].title}</h4>
            <p className="text-sm text-slate-600">
              {currentContent.environmentalCards[0].description}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.environmentalCards[1].title}</h4>
            <p className="text-sm text-slate-600">
              {currentContent.environmentalCards[1].description}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.environmentalCards[2].title}</h4>
            <p className="text-sm text-slate-600">
              {currentContent.environmentalCards[2].description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default EnergyInfographic

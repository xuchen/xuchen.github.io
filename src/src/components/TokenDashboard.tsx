import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gauge, Zap, DollarSign, Database, TrendingUp } from 'lucide-react'

interface TokenData {
  capacity: {
    units: string[]
    examples: {
      [key: string]: {
        name: string
        example: string
      }
    }
  }
  speed: {
    units: string[]
    examples: {
      [key: string]: string
    }
  }
  cost: {
    pricing_2025: {
      [key: string]: string
    }
    comparisons: {
      [key: string]: string
    }
  }
}

interface TokenDashboardProps {
  data: TokenData
  isZh?: boolean
}

const TokenDashboard: React.FC<TokenDashboardProps> = ({ data, isZh = false }) => {
  const [selectedCapacity, setSelectedCapacity] = useState('MT')
  const [simulatedSpeed, setSimulatedSpeed] = useState(0)
  const [simulatedTokens, setSimulatedTokens] = useState(0)

  // Simulate real-time token processing
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedSpeed(Math.floor(Math.random() * 1000) + 500)
      setSimulatedTokens(prev => prev + Math.floor(Math.random() * 100) + 50)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      headerMetrics: {
        tokensPerSecond: "Tokens/Second",
        megaTokensProcessed: "Mega-Tokens Processed",
        perMillionTokens: "Per Million Tokens",
        kWhPerMillionTokens: "kWh per Million Tokens"
      },
      tokenCapacityUnits: "Token Capacity Units",
      processingSpeedMetrics: "Processing Speed Metrics",
      tokenEconomicsComparison: "Token Economics Comparison",
      liveTokenProcessing: "Live Token Processing Simulation",
      capacityData: [
        { unit: 'KT', name: 'Kilo-Tokens', scale: '1,000', example: 'Ordinary blog post: 5 KT', color: 'bg-blue-500' },
        { unit: 'MT', name: 'Mega-Tokens', scale: '1,000,000', example: 'Encyclopedia Britannica: 53 MT', color: 'bg-green-500' },
        { unit: 'GT', name: 'Giga-Tokens', scale: '1,000,000,000', example: 'English Wikipedia: 6.4 GT', color: 'bg-yellow-500' },
        { unit: 'TT', name: 'Tera-Tokens', scale: '1,000,000,000,000', example: 'GPT training data', color: 'bg-red-500' },
        { unit: 'PT', name: 'Peta-Tokens', scale: '1,000,000,000,000,000', example: 'Future AI datasets', color: 'bg-purple-500' }
      ],
      speedMetrics: [
        { label: 'Current User Allocation', value: '200 T/s', description: '2025 standard' },
        { label: 'High-end GPU', value: '50 KT/s', description: 'Professional grade' },
        { label: 'Low-end GPU', value: '1.85 KT/s', description: 'Consumer grade' },
        { label: 'Future Goal', value: '1 GT/s', description: 'Per user target' }
      ],
      economicsComparison: {
        dataStorage: "Data Storage",
        tokenProcessing: "Token Processing", 
        costRatio: "Cost Ratio",
        moreExpensive: "more expensive",
        per1TB: "per 1TB",
        per1TT: "per 1TT tokens",
        description: "Token processing is currently 30,000x more expensive than data storage, highlighting the value and scarcity of AI computation."
      },
      simulation: {
        currentSession: "Current Session",
        tokensProcessed: "Tokens Processed:",
        currentSpeed: "Current Speed:",
        estimatedCost: "Estimated Cost:",
        energyConsumption: "Energy Consumption",
        energyUsed: "Energy Used:",
        co2Equivalent: "CO2 Equivalent:",
        efficiency: "Efficiency:"
      },
      tokens: "tokens"
    },
    zh: {
      headerMetrics: {
        tokensPerSecond: "字元/秒",
        megaTokensProcessed: "已处理兆字元",
        perMillionTokens: "每百万字元",
        kWhPerMillionTokens: "千瓦时/百万字元"
      },
      tokenCapacityUnits: "字元容量单位",
      processingSpeedMetrics: "处理速度指标",
      tokenEconomicsComparison: "字元经济学比较",
      liveTokenProcessing: "实时字元处理模拟",
      capacityData: [
        { unit: 'KT', name: '千字元', scale: '1,000', example: '普通博客文章：5 KT', color: 'bg-blue-500' },
        { unit: 'MT', name: '兆字元', scale: '1,000,000', example: '大英百科全书：53 MT', color: 'bg-green-500' },
        { unit: 'GT', name: '十亿字元', scale: '1,000,000,000', example: '英文维基百科：6.4 GT', color: 'bg-yellow-500' },
        { unit: 'TT', name: '万亿字元', scale: '1,000,000,000,000', example: 'GPT 训练数据', color: 'bg-red-500' },
        { unit: 'PT', name: '千万亿字元', scale: '1,000,000,000,000,000', example: '未来AI数据集', color: 'bg-purple-500' }
      ],
      speedMetrics: [
        { label: '当前用户分配', value: '200 T/s', description: '2025年标准' },
        { label: '高端GPU', value: '50 KT/s', description: '专业级' },
        { label: '低端GPU', value: '1.85 KT/s', description: '消费级' },
        { label: '未来目标', value: '1 GT/s', description: '每用户目标' }
      ],
      economicsComparison: {
        dataStorage: "数据存储",
        tokenProcessing: "字元处理",
        costRatio: "成本比率",
        moreExpensive: "倍更昂贵",
        per1TB: "每1TB",
        per1TT: "每1万亿字元",
        description: "字元处理目前比数据存储贵30,000倍，突显了AI计算的价值和稀缺性。"
      },
      simulation: {
        currentSession: "当前会话",
        tokensProcessed: "已处理字元：",
        currentSpeed: "当前速度：",
        estimatedCost: "估计成本：",
        energyConsumption: "能源消耗",
        energyUsed: "已用能源：",
        co2Equivalent: "CO2当量：",
        efficiency: "效率："
      },
      tokens: "字元"
    }
  }

  const currentContent = isZh ? content.zh : content.en
  const capacityData = currentContent.capacityData
  const speedMetrics = currentContent.speedMetrics

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Live Metrics Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Gauge className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
            <p className="text-2xl font-bold text-cyan-400">{simulatedSpeed.toLocaleString()}</p>
            <p className="text-sm text-slate-300">{currentContent.headerMetrics.tokensPerSecond}</p>
          </div>
          <div className="text-center">
            <Database className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="text-2xl font-bold text-green-400">{(simulatedTokens / 1000000).toFixed(2)}</p>
            <p className="text-sm text-slate-300">{currentContent.headerMetrics.megaTokensProcessed}</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="text-2xl font-bold text-yellow-400">{isZh ? '¥14-28' : '$1-2'}</p>
            <p className="text-sm text-slate-300">{currentContent.headerMetrics.perMillionTokens}</p>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="text-2xl font-bold text-purple-400">0.045</p>
            <p className="text-sm text-slate-300">{currentContent.headerMetrics.kWhPerMillionTokens}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Token Capacity Scale */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Database className="w-6 h-6 mr-2 text-blue-600" />
            {currentContent.tokenCapacityUnits}
          </h3>
          
          <div className="space-y-4">
            {capacityData.map((item, index) => (
              <motion.button
                key={item.unit}
                onClick={() => setSelectedCapacity(item.unit)}
                whileHover={{ scale: 1.02 }}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedCapacity === item.unit
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${item.color} mr-3`} />
                    <div>
                      <p className="font-bold text-slate-800">{item.unit}</p>
                      <p className="text-sm text-slate-600">{item.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-700">{item.scale}</p>
                    <p className="text-xs text-slate-500">{currentContent.tokens}</p>
                  </div>
                </div>
                {selectedCapacity === item.unit && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-slate-200"
                  >
                    <p className="text-sm text-slate-600">{item.example}</p>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Speed Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
            {currentContent.processingSpeedMetrics}
          </h3>
          
          <div className="space-y-4">
            {speedMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-800">{metric.label}</p>
                    <p className="text-sm text-slate-600">{metric.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">{metric.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cost Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center">
          <DollarSign className="w-6 h-6 mr-2 text-indigo-600" />
          {currentContent.tokenEconomicsComparison}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-indigo-200">
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.economicsComparison.dataStorage}</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">{isZh ? '¥280' : '$40'}</p>
            <p className="text-sm text-slate-600">{currentContent.economicsComparison.per1TB}</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-purple-200">
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.economicsComparison.tokenProcessing}</h4>
            <p className="text-2xl font-bold text-purple-600 mb-1">{isZh ? '¥840万' : '$1.2M'}</p>
            <p className="text-sm text-slate-600">{currentContent.economicsComparison.per1TT}</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-red-200">
            <h4 className="font-bold text-slate-700 mb-2">{currentContent.economicsComparison.costRatio}</h4>
            <p className="text-2xl font-bold text-red-600 mb-1">30,000x</p>
            <p className="text-sm text-slate-600">{currentContent.economicsComparison.moreExpensive}</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-slate-600">
            {currentContent.economicsComparison.description}
          </p>
        </div>
      </motion.div>

      {/* Real-time Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-slate-900 rounded-2xl p-6 text-white"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">{currentContent.liveTokenProcessing}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold mb-4 text-cyan-400">{currentContent.simulation.currentSession}</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{currentContent.simulation.tokensProcessed}</span>
                <span className="font-mono text-green-400">{simulatedTokens.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>{currentContent.simulation.currentSpeed}</span>
                <span className="font-mono text-cyan-400">{simulatedSpeed} T/s</span>
              </div>
              <div className="flex justify-between">
                <span>{currentContent.simulation.estimatedCost}</span>
                <span className="font-mono text-yellow-400">{isZh ? '¥' : '$'}{(simulatedTokens / 1000000 * (isZh ? 10.8 : 1.5)).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold mb-4 text-purple-400">{currentContent.simulation.energyConsumption}</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{currentContent.simulation.energyUsed}</span>
                <span className="font-mono text-green-400">{(simulatedTokens / 1000000 * 0.045).toFixed(3)} kWh</span>
              </div>
              <div className="flex justify-between">
                <span>{currentContent.simulation.co2Equivalent}</span>
                <span className="font-mono text-orange-400">{(simulatedTokens / 1000000 * 0.02).toFixed(2)} kg</span>
              </div>
              <div className="flex justify-between">
                <span>{currentContent.simulation.efficiency}</span>
                <span className="font-mono text-cyan-400">{(simulatedSpeed / 1000).toFixed(1)} KT/kWh</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TokenDashboard

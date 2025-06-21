import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Zap, DollarSign, Globe, AlertTriangle } from 'lucide-react'

interface InfrastructureData {
  "1_TT_per_second_requirements": {
    gpus_needed: string
    cost: string
    power_consumption: string
    hoover_dams_equivalent: string
    us_electricity_percentage: string
  }
  current_limitations: {
    jensen_huang_prediction: string
    comparison: string
  }
}

interface InfrastructureScaleProps {
  data: InfrastructureData
  isZh?: boolean
}

const InfrastructureScale: React.FC<InfrastructureScaleProps> = ({ data, isZh = false }) => {
  const [activeMetric, setActiveMetric] = useState('gpus')

  const requirements = data["1_TT_per_second_requirements"]
  
  const content = {
    en: {
      massiveInfrastructureChallenge: "Massive Infrastructure Challenge",
      warningDescription: "Achieving 1 TT/s would require unprecedented global infrastructure investment and energy allocation.",
      scaleRequired: "Scale Required",
      comparison: "Comparison",
      scaleComparison: "Scale Comparison",
      currentRealityVsFutureGoal: "Current Reality vs Future Goal",
      currentLimitation: "Current Limitation",
      futureGoal: "Future Goal",
      globalProcessingCapability: "Global processing capability",
      perUserAllocation: "Per user allocation (Jensen Huang's prediction)",
      wouldRequireRebuilding: "Would require rebuilding global infrastructure",
      infrastructureGapDescription: "The gap between current capabilities and the 1 TT/s goal represents one of the largest infrastructure challenges in human history. It would require not just technological advancement, but a fundamental restructuring of global energy and computing infrastructure.",
      metrics: [
        {
          id: 'gpus',
          title: 'GPU Requirements',
          unit: 'GPUs needed',
          description: 'Total number of high-end GPUs required for 1 TT/s processing',
          comparison: 'That\'s more GPUs than currently exist in all data centers worldwide'
        },
        {
          id: 'cost',
          title: 'Infrastructure Cost',
          unit: 'Total investment',
          description: 'Total cost for building 1 TT/s processing infrastructure',
          comparison: 'Equivalent to the entire GDP of the United States'
        },
        {
          id: 'power',
          title: 'Power Consumption',
          unit: 'per hour',
          description: 'Continuous power consumption for 1 TT/s operation',
          comparison: `Equal to ${requirements.hoover_dams_equivalent} Hoover Dams`
        },
        {
          id: 'scale',
          title: 'US Electricity Scale',
          unit: 'of total US consumption',
          description: 'Percentage of entire US electricity grid needed',
          comparison: 'Would require building entirely new power infrastructure'
        }
      ],
      scaleVisualizations: {
        gpus: [
          { label: 'Current largest supercomputer', value: '1.1M', percentage: 0.2 },
          { label: 'All current data centers', value: '~100M', percentage: 18 },
          { label: 'Required for 1 TT/s', value: '540M', percentage: 100 }
        ],
        cost: [
          { label: 'Manhattan Project (2023 $)', value: '$28B', percentage: 0.18 },
          { label: 'Apollo Program (2023 $)', value: '$280B', percentage: 1.8 },
          { label: 'Required for 1 TT/s', value: '$15.1T', percentage: 100 }
        ],
        power: [
          { label: 'New York City consumption', value: '5M kWh/h', percentage: 3 },
          { label: 'Entire state of California', value: '25M kWh/h', percentage: 15 },
          { label: 'Required for 1 TT/s', value: '162M kWh/h', percentage: 100 }
        ],
        scale: [
          { label: 'All US data centers', value: '2%', percentage: 6 },
          { label: 'All US transportation', value: '14%', percentage: 42 },
          { label: 'Required for 1 TT/s', value: '33%', percentage: 100 }
        ]
      }
    },
    zh: {
      massiveInfrastructureChallenge: "庞大的基础设施挑战",
      warningDescription: "实现1万亿字元/秒需要前所未有的全球基础设施投资和能源配置。",
      scaleRequired: "所需规模",
      comparison: "对比",
      scaleComparison: "规模对比", 
      currentRealityVsFutureGoal: "当前现实 vs 未来目标",
      currentLimitation: "当前限制",
      futureGoal: "未来目标",
      globalProcessingCapability: "全球处理能力",
      perUserAllocation: "每用户分配（黄仁勋预测）",
      wouldRequireRebuilding: "需要重建全球基础设施",
      infrastructureGapDescription: "当前能力与1万亿字元/秒目标之间的差距代表了人类历史上最大的基础设施挑战之一。这不仅需要技术进步，还需要对全球能源和计算基础设施进行根本性重构。",
      metrics: [
        {
          id: 'gpus',
          title: 'GPU需求',
          unit: '所需GPU数量',
          description: '1万亿字元/秒处理所需的高端GPU总数',
          comparison: '超过全球现有数据中心的GPU总数'
        },
        {
          id: 'cost',
          title: '基础设施成本',
          unit: '总投资',
          description: '建设1万亿字元/秒处理基础设施的总成本',
          comparison: '相当于美国全年GDP'
        },
        {
          id: 'power',
          title: '功耗',
          unit: '每小时',
          description: '1万亿字元/秒运行的持续功耗',
          comparison: `相当于${requirements.hoover_dams_equivalent}座胡佛水坝`
        },
        {
          id: 'scale',
          title: '美国电力规模',
          unit: '占美国总消耗',
          description: '需要美国整个电网的百分比',
          comparison: '需要建设全新的电力基础设施'
        }
      ],
      scaleVisualizations: {
        gpus: [
          { label: '当前最大超级计算机', value: '110万', percentage: 0.2 },
          { label: '所有当前数据中心', value: '~1亿', percentage: 18 },
          { label: '1万亿字元/秒所需', value: '5.4亿', percentage: 100 }
        ],
        cost: [
          { label: '曼哈顿计划 (2023年$)', value: '¥2000亿', percentage: 0.18 },
          { label: '阿波罗计划 (2023年$)', value: '¥2万亿', percentage: 1.8 },
          { label: '1万亿字元/秒所需', value: '¥108万亿', percentage: 100 }
        ],
        power: [
          { label: '纽约市消耗', value: '500万千瓦时/小时', percentage: 3 },
          { label: '整个加州', value: '2500万千瓦时/小时', percentage: 15 },
          { label: '1万亿字元/秒所需', value: '1.62亿千瓦时/小时', percentage: 100 }
        ],
        scale: [
          { label: '所有美国数据中心', value: '2%', percentage: 6 },
          { label: '所有美国交通', value: '14%', percentage: 42 },
          { label: '1万亿字元/秒所需', value: '33%', percentage: 100 }
        ]
      }
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const metrics = currentContent.metrics.map(metric => ({
    ...metric,
    value: requirements[metric.id === 'gpus' ? 'gpus_needed' : 
                       metric.id === 'cost' ? 'cost' : 
                       metric.id === 'power' ? 'power_consumption' : 
                       'us_electricity_percentage'] || '0',
    icon: metric.id === 'gpus' ? <Server className="w-8 h-8" /> :
          metric.id === 'cost' ? <DollarSign className="w-8 h-8" /> :
          metric.id === 'power' ? <Zap className="w-8 h-8" /> :
          <Globe className="w-8 h-8" />,
    color: metric.id === 'gpus' ? 'from-blue-500 to-blue-600' :
           metric.id === 'cost' ? 'from-green-500 to-green-600' :
           metric.id === 'power' ? 'from-yellow-500 to-yellow-600' :
           'from-red-500 to-red-600',
    bgColor: metric.id === 'gpus' ? 'bg-blue-50' :
             metric.id === 'cost' ? 'bg-green-50' :
             metric.id === 'power' ? 'bg-yellow-50' :
             'bg-red-50'
  }))

  const getActiveMetric = () => metrics.find(m => m.id === activeMetric) || metrics[0]

  const scaleVisualizations = currentContent.scaleVisualizations

  return (
    <div className="max-w-7xl mx-auto">
      {/* Warning Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-2xl p-6 mb-8"
      >
        <div className="flex items-center text-orange-800">
          <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
          <div>
            <h3 className="font-bold text-lg">{currentContent.massiveInfrastructureChallenge}</h3>
            <p className="text-sm mt-1">
              {currentContent.warningDescription}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Metric Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric) => (
          <motion.button
            key={metric.id}
            onClick={() => setActiveMetric(metric.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
              activeMetric === metric.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${metric.bgColor} flex items-center justify-center mx-auto mb-3`}>
              <div className={`text-transparent bg-gradient-to-r ${metric.color} bg-clip-text`}>
                {metric.icon}
              </div>
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
            <p className="text-sm text-slate-600">{metric.unit}</p>
          </motion.button>
        ))}
      </div>

      {/* Detailed View */}
      <motion.div
        key={activeMetric}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 border border-slate-200 mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Metric Details */}
          <div>
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full ${getActiveMetric().bgColor} flex items-center justify-center mr-4`}>
                <div className={`text-transparent bg-gradient-to-r ${getActiveMetric().color} bg-clip-text`}>
                  {getActiveMetric().icon}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-800">{getActiveMetric().title}</h3>
                <p className="text-slate-600">{getActiveMetric().description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`p-6 rounded-xl ${getActiveMetric().bgColor}`}>
                <p className="text-sm font-medium text-slate-600 mb-2">{currentContent.scaleRequired}</p>
                <p className="text-4xl font-bold text-slate-800 mb-2">{getActiveMetric().value}</p>
                <p className="text-slate-600">{getActiveMetric().unit}</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-xl">
                <p className="text-sm font-medium text-slate-600 mb-2">{currentContent.comparison}</p>
                <p className="text-slate-800">{getActiveMetric().comparison}</p>
              </div>
            </div>
          </div>

          {/* Right: Scale Visualization */}
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-6">{currentContent.scaleComparison}</h4>
            <div className="space-y-4">
              {scaleVisualizations[activeMetric as keyof typeof scaleVisualizations]?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-800">{item.value}</span>
                  </div>
                  
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-3 rounded-full bg-gradient-to-r ${getActiveMetric().color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Current Reality Check */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold text-center mb-8">{currentContent.currentRealityVsFutureGoal}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-red-400 mb-4">{currentContent.currentLimitation}</h4>
            <p className="text-3xl font-bold mb-2">{data.current_limitations.jensen_huang_prediction}</p>
            <p className="text-slate-300 mb-4">{currentContent.perUserAllocation}</p>
            <p className="text-sm text-slate-400">{data.current_limitations.comparison}</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-green-400 mb-4">{currentContent.futureGoal}</h4>
            <p className="text-3xl font-bold mb-2">{isZh ? '1万亿字元/秒' : '1 TT/s'}</p>
            <p className="text-slate-300 mb-4">{currentContent.globalProcessingCapability}</p>
            <p className="text-sm text-slate-400">{currentContent.wouldRequireRebuilding}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-300 max-w-4xl mx-auto">
            {currentContent.infrastructureGapDescription}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default InfrastructureScale

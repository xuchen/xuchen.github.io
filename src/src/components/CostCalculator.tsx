import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Clock, DollarSign, ArrowRight, Zap } from 'lucide-react'

interface CostData {
  traditional_vs_ai: {
    website_development: {
      human: { time: string; cost: string; unit: string }
      ai: { time: string; cost: string; unit: string }
    }
    professional_services: {
      software_engineer: string
      lawyer: string
      consultant: string
      ai_equivalent: string
    }
  }
}

interface CostCalculatorProps {
  data: CostData
  isZh?: boolean
}

const CostCalculator: React.FC<CostCalculatorProps> = ({ data, isZh = false }) => {
  const [selectedService, setSelectedService] = useState('website_development')
  const [customHours, setCustomHours] = useState(40)
  const [humanRate, setHumanRate] = useState(200)

  const content = {
    en: {
      services: [
        {
          id: 'website_development',
          name: 'Website Development',
          description: 'Complete website with design and functionality'
        },
        {
          id: 'software_engineer',
          name: 'Software Engineering',
          description: 'Custom software development and coding'
        },
        {
          id: 'lawyer',
          name: 'Legal Services',
          description: 'Document review and legal consultation'
        },
        {
          id: 'consultant',
          name: 'Business Consulting',
          description: 'Strategy and business analysis'
        }
      ],
      customizeCalculation: "Customize Your Calculation",
      projectHours: "Project Hours",
      humanHourlyRate: "Human Hourly Rate ($)",
      traditional: "Traditional",
      aiEquivalent: "AI Equivalent",
      time: "Time",
      cost: "Cost",
      rate: "Rate",
      saved: "saved",
      faster: "faster",
      costReduction: "cost reduction",
      keyInsights: "Key Insights",
      costMultiplier: "Cost Multiplier",
      timeSavings: "Time Savings",
      days: "days",
      hours: "hours",
      hour: "hour"
    },
    zh: {
      services: [
        {
          id: 'website_development',
          name: '网站开发',
          description: '完整网站设计和功能开发'
        },
        {
          id: 'software_engineer',
          name: '软件工程',
          description: '定制软件开发和编程'
        },
        {
          id: 'lawyer',
          name: '法律服务',
          description: '文档审查和法律咨询'
        },
        {
          id: 'consultant',
          name: '商业咨询',
          description: '战略和商业分析'
        }
      ],
      customizeCalculation: "自定义计算",
      projectHours: "项目小时数",
      humanHourlyRate: "人工时薪（¥）",
      traditional: "传统方式",
      aiEquivalent: "AI等效",
      time: "时间",
      cost: "成本",
      rate: "费率",
      saved: "节省",
      faster: "更快",
      costReduction: "成本降低",
      keyInsights: "关键洞察",
      costMultiplier: "成本倍数",
      timeSavings: "时间节省",
      days: "天",
      hours: "小时",
      hour: "小时"
    }
  }

  const currentContent = isZh ? content.zh : content.en
  const services = currentContent.services

  const getServiceData = (serviceId: string) => {
    const currency = isZh ? '¥' : '$'
    const exchangeRate = isZh ? 7.2 : 1 // Approximate USD to CNY rate
    
    switch (serviceId) {
      case 'website_development':
        return {
          human: { 
            time: isZh ? '6天 (48小时)' : '6 days (48 hours)', 
            cost: `${currency}${Math.round(4800 * exchangeRate).toLocaleString()}`, 
            hourlyRate: Math.round(100 * exchangeRate) 
          },
          ai: { 
            time: isZh ? '1小时' : '1 hour', 
            cost: `${currency}${Math.round(8 * exchangeRate)}`, 
            hourlyRate: Math.round(8 * exchangeRate) 
          }
        }
      case 'software_engineer':
        return {
          human: { 
            time: isZh ? `${customHours}小时` : `${customHours} hours`, 
            cost: `${currency}${Math.round(customHours * humanRate * exchangeRate).toLocaleString()}`, 
            hourlyRate: Math.round(humanRate * exchangeRate) 
          },
          ai: { 
            time: isZh ? `${Math.ceil(customHours / 6)}小时` : `${Math.ceil(customHours / 6)} hours`, 
            cost: `${currency}${Math.round(Math.ceil(customHours / 6) * 8 * exchangeRate)}`, 
            hourlyRate: Math.round(8 * exchangeRate) 
          }
        }
      case 'lawyer':
        return {
          human: { 
            time: isZh ? `${customHours}小时` : `${customHours} hours`, 
            cost: `${currency}${Math.round(customHours * 400 * exchangeRate).toLocaleString()}`, 
            hourlyRate: Math.round(400 * exchangeRate) 
          },
          ai: { 
            time: isZh ? `${Math.ceil(customHours / 50)}小时` : `${Math.ceil(customHours / 50)} hours`, 
            cost: `${currency}${Math.round(Math.ceil(customHours / 50) * 8 * exchangeRate)}`, 
            hourlyRate: Math.round(8 * exchangeRate) 
          }
        }
      case 'consultant':
        return {
          human: { 
            time: isZh ? `${customHours}小时` : `${customHours} hours`, 
            cost: `${currency}${Math.round(customHours * 600 * exchangeRate).toLocaleString()}`, 
            hourlyRate: Math.round(600 * exchangeRate) 
          },
          ai: { 
            time: isZh ? `${Math.ceil(customHours / 75)}小时` : `${Math.ceil(customHours / 75)} hours`, 
            cost: `${currency}${Math.round(Math.ceil(customHours / 75) * 8 * exchangeRate)}`, 
            hourlyRate: Math.round(8 * exchangeRate) 
          }
        }
      default:
        return {
          human: { time: isZh ? '0小时' : '0 hours', cost: `${currency}0`, hourlyRate: 0 },
          ai: { time: isZh ? '0小时' : '0 hours', cost: `${currency}0`, hourlyRate: 0 }
        }
    }
  }

  const serviceData = getServiceData(selectedService)
  const savings = parseFloat(serviceData.human.cost.replace('$', '').replace('¥', '').replace(',', '')) - 
                 parseFloat(serviceData.ai.cost.replace('$', '').replace('¥', '').replace(',', ''))
  const timeSavings = selectedService === 'website_development' ? 
                     (isZh ? `5${currentContent.days}${currentContent.faster}` : `5 days faster`) : 
                     `${Math.max(0, customHours - Math.ceil(customHours / (serviceData.human.hourlyRate / (isZh ? 58 : 8))))} ${currentContent.hours} ${currentContent.faster}`

  return (
    <div className="max-w-6xl mx-auto">
      {/* Service Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedService === service.id
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
            }`}
          >
            <h3 className="font-semibold mb-2">{service.name}</h3>
            <p className="text-sm opacity-80">{service.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Custom Inputs */}
      {selectedService !== 'website_development' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-slate-50 rounded-xl p-6 mb-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-slate-700">{currentContent.customizeCalculation}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                {currentContent.projectHours}
              </label>
              <input
                type="number"
                value={customHours}
                onChange={(e) => setCustomHours(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="1"
                max="1000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                {currentContent.humanHourlyRate}
              </label>
              <input
                type="number"
                value={humanRate}
                onChange={(e) => setHumanRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="50"
                max="1000"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Comparison Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Traditional/Human */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-50 border border-red-200 rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-700 mb-2">{currentContent.traditional}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-red-600 font-medium">{currentContent.time}</p>
                <p className="text-xl font-bold text-red-800">{serviceData.human.time}</p>
              </div>
              <div>
                <p className="text-sm text-red-600 font-medium">{currentContent.cost}</p>
                <p className="text-2xl font-bold text-red-800">{serviceData.human.cost}</p>
              </div>
              <div>
                <p className="text-sm text-red-600 font-medium">{currentContent.rate}</p>
                <p className="text-lg font-semibold text-red-700">{isZh ? '¥' : '$'}{serviceData.human.hourlyRate}/{currentContent.hour}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center mb-4">
            <ArrowRight className="w-10 h-10 text-white" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{isZh ? '¥' : '$'}{savings.toLocaleString()} {currentContent.saved}</p>
            <p className="text-lg text-slate-600">{timeSavings}</p>
            <p className="text-sm text-slate-500 mt-2">
              {Math.round(((savings / parseFloat(serviceData.human.cost.replace('$', '').replace('¥', '').replace(',', ''))) * 100))}% {currentContent.costReduction}
            </p>
          </div>
        </motion.div>

        {/* AI */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">{currentContent.aiEquivalent}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-green-600 font-medium">{currentContent.time}</p>
                <p className="text-xl font-bold text-green-800">{serviceData.ai.time}</p>
              </div>
              <div>
                <p className="text-sm text-green-600 font-medium">{currentContent.cost}</p>
                <p className="text-2xl font-bold text-green-800">{serviceData.ai.cost}</p>
              </div>
              <div>
                <p className="text-sm text-green-600 font-medium">{currentContent.rate}</p>
                <p className="text-lg font-semibold text-green-700">{isZh ? '¥' : '$'}{serviceData.ai.hourlyRate}/{currentContent.hour} ({isZh ? '马斯' : 'MTH'})</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional Insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
      >
        <div className="text-center">
          <Calculator className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">{currentContent.keyInsights}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-indigo-600">{Math.round(serviceData.human.hourlyRate / serviceData.ai.hourlyRate)}x</p>
              <p className="text-slate-600">{currentContent.costMultiplier}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">{Math.round(((savings / parseFloat(serviceData.human.cost.replace('$', '').replace('¥', '').replace(',', ''))) * 100))}%</p>
              <p className="text-slate-600">{currentContent.costReduction}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">
                {selectedService === 'website_development' ? '6x' : Math.round(customHours / Math.ceil(customHours / (serviceData.human.hourlyRate / serviceData.ai.hourlyRate))) + 'x'}
              </p>
              <p className="text-slate-600">{currentContent.timeSavings}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CostCalculator

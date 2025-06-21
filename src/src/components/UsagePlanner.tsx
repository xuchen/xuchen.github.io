import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Building, Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react'

interface UsageData {
  individual: {
    [key: string]: {
      tokens: string
      use_case: string
    }
  }
  enterprise: {
    [key: string]: {
      tokens: string
      use_case: string
    }
  }
}

interface UsagePlannerProps {
  data: UsageData
  isZh?: boolean
}

const UsagePlanner: React.FC<UsagePlannerProps> = ({ data, isZh = false }) => {
  const [planType, setPlanType] = useState<'individual' | 'enterprise'>('individual')
  const [selectedPlans, setSelectedPlans] = useState<string[]>([])
  const [customTokens, setCustomTokens] = useState(0)

  const content = {
    en: {
      individualPlans: "Individual Plans",
      enterprisePlans: "Enterprise Plans",
      mostPopular: "Most Popular",
      perMonth: "per month",
      addCustomTokenAllocation: "Add Custom Token Allocation",
      additionalMegaTokens: "Additional Mega-Tokens per month",
      cost: "Cost",
      tokenUsageExamples: "Token Usage Examples",
      yourTokenBudgetSummary: "Your Token Budget Summary",
      totalTokensPerMonth: "Total tokens per month",
      totalMonthlyCost: "Total monthly cost",
      selectedPlans: "Selected Plans:",
      customTokens: "Custom tokens",
      costPerMT: "Cost per MT:",
      processingSpeed: "Processing speed:",
      individualPlanDetails: [
        {
          id: 'basic',
          name: 'Basic',
          tokens: '1 MT/month',
          price: '$1.50'
        },
        {
          id: 'pro',
          name: 'Pro',
          tokens: '10 MT/month',
          price: '$15'
        },
        {
          id: 'creator',
          name: 'Creator',
          tokens: '100 MT/month',
          price: '$150'
        }
      ],
      enterprisePlanDetails: [
        {
          id: 'marketing',
          name: 'Marketing Team',
          tokens: '50 MT/month',
          price: '$75'
        },
        {
          id: 'customer_support',
          name: 'Customer Support',
          tokens: '100 MT/month',
          price: '$150'
        },
        {
          id: 'research',
          name: 'Research Division',
          tokens: '200 MT/month',
          price: '$300'
        }
      ],
      usageExamples: [
        { task: 'Blog post (1000 words)', tokens: '2 MT', frequency: '10/month' },
        { task: 'Code review', tokens: '5 MT', frequency: '20/month' },
        { task: 'Marketing copy', tokens: '3 MT', frequency: '15/month' },
        { task: 'Customer support chat', tokens: '1 MT', frequency: '100/month' },
        { task: 'Research analysis', tokens: '10 MT', frequency: '5/month' },
        { task: 'Data visualization', tokens: '8 MT', frequency: '8/month' }
      ],
      perTask: "per task"
    },
    zh: {
      individualPlans: "个人方案",
      enterprisePlans: "企业方案",
      mostPopular: "最受欢迎",
      perMonth: "每月",
      addCustomTokenAllocation: "添加自定义字元分配",
      additionalMegaTokens: "每月额外兆字元",
      cost: "费用",
      tokenUsageExamples: "字元使用示例",
      yourTokenBudgetSummary: "您的字元预算摘要",
      totalTokensPerMonth: "每月总字元",
      totalMonthlyCost: "每月总费用",
      selectedPlans: "已选方案：",
      customTokens: "自定义字元",
      costPerMT: "每兆字元费用：",
      processingSpeed: "处理速度：",
      individualPlanDetails: [
        {
          id: 'basic',
          name: '基础版',
          tokens: '1 兆字元/月',
          price: '¥11'
        },
        {
          id: 'pro',
          name: '专业版',
          tokens: '10 兆字元/月',
          price: '¥108'
        },
        {
          id: 'creator',
          name: '创作者版',
          tokens: '100 兆字元/月',
          price: '¥1,080'
        }
      ],
      enterprisePlanDetails: [
        {
          id: 'marketing',
          name: '营销团队',
          tokens: '50 兆字元/月',
          price: '¥540'
        },
        {
          id: 'customer_support',
          name: '客户支持',
          tokens: '100 兆字元/月',
          price: '¥1,080'
        },
        {
          id: 'research',
          name: '研发部门',
          tokens: '200 兆字元/月',
          price: '¥2,160'
        }
      ],
      usageExamples: [
        { task: '博客文章（1000字）', tokens: '2 兆字元', frequency: '10次/月' },
        { task: '代码审查', tokens: '5 兆字元', frequency: '20次/月' },
        { task: '营销文案', tokens: '3 兆字元', frequency: '15次/月' },
        { task: '客户支持聊天', tokens: '1 兆字元', frequency: '100次/月' },
        { task: '研究分析', tokens: '10 兆字元', frequency: '5次/月' },
        { task: '数据可视化', tokens: '8 兆字元', frequency: '8次/月' }
      ],
      perTask: "每次任务"
    }
  }

  const currentContent = isZh ? content.zh : content.en

  const individualPlans = currentContent.individualPlanDetails.map((plan, index) => ({
    ...plan,
    description: data.individual[plan.id].use_case,
    color: ['from-blue-500 to-blue-600', 'from-green-500 to-green-600', 'from-purple-500 to-purple-600'][index],
    popular: index === 1
  }))

  const enterprisePlans = currentContent.enterprisePlanDetails.map((plan, index) => ({
    ...plan,
    description: data.enterprise[plan.id].use_case,
    color: ['from-orange-500 to-orange-600', 'from-cyan-500 to-cyan-600', 'from-red-500 to-red-600'][index],
    popular: index === 1
  }))

  const currentPlans = planType === 'individual' ? individualPlans : enterprisePlans

  const togglePlan = (planId: string) => {
    setSelectedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    )
  }

  const getTotalTokens = () => {
    const planTokens = selectedPlans.reduce((total, planId) => {
      const plan = currentPlans.find(p => p.id === planId)
      if (plan) {
        const tokens = parseFloat(plan.tokens.replace(/[^\d.]/g, ''))
        return total + tokens
      }
      return total
    }, 0)
    return planTokens + customTokens
  }

  const getTotalCost = () => {
    const planCost = selectedPlans.reduce((total, planId) => {
      const plan = currentPlans.find(p => p.id === planId)
      if (plan) {
        const cost = parseFloat(plan.price.replace(/[^0-9.,]/g, '').replace(',', ''))
        return total + cost
      }
      return total
    }, 0)
    const customCost = isZh ? (customTokens * 10.8) : (customTokens * 1.5)
    return planCost + customCost
  }

  const usageExamples = currentContent.usageExamples

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Plan Type Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 rounded-2xl p-2 inline-flex">
          <button
            onClick={() => setPlanType('individual')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
              planType === 'individual'
                ? 'bg-white text-slate-800 shadow-md'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <User className="w-5 h-5 mr-2" />
            {currentContent.individualPlans}
          </button>
          <button
            onClick={() => setPlanType('enterprise')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
              planType === 'enterprise'
                ? 'bg-white text-slate-800 shadow-md'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <Building className="w-5 h-5 mr-2" />
            {currentContent.enterprisePlans}
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentPlans.map((plan) => {
          const isSelected = selectedPlans.includes(plan.id)
          
          return (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => togglePlan(plan.id)}
              className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {currentContent.mostPopular}
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  {planType === 'individual' ? (
                    <User className="w-8 h-8 text-white" />
                  ) : (
                    <Building className="w-8 h-8 text-white" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-slate-900 mb-1">{plan.price}</p>
                <p className="text-slate-600 mb-4">{currentContent.perMonth}</p>
                
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <p className="font-semibold text-slate-700 mb-2">{plan.tokens}</p>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </div>

                <div className={`w-6 h-6 rounded-full border-2 mx-auto transition-all duration-200 ${
                  isSelected
                    ? 'bg-indigo-500 border-indigo-500'
                    : 'border-slate-300'
                }`}>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-full h-full rounded-full bg-indigo-500 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Custom Token Addition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-50 rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          {currentContent.addCustomTokenAllocation}
        </h3>
        
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              {currentContent.additionalMegaTokens}
            </label>
            <input
              type="number"
              value={customTokens}
              onChange={(e) => setCustomTokens(Number(e.target.value))}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="0"
              placeholder="0"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-600 mb-2">{currentContent.cost}</p>
            <p className="text-lg font-bold text-slate-800">{isZh ? '¥' : '$'}{(isZh ? customTokens * 10.8 : customTokens * 1.5).toFixed(2)}</p>
          </div>
        </div>
      </motion.div>

      {/* Usage Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Usage Examples */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {currentContent.tokenUsageExamples}
          </h3>
          
          <div className="space-y-4">
            {usageExamples.map((example, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-700">{example.task}</p>
                  <p className="text-sm text-slate-500">{example.frequency}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-indigo-600">{example.tokens}</p>
                  <p className="text-xs text-slate-500">{currentContent.perTask}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Summary */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            {currentContent.yourTokenBudgetSummary}
          </h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">{getTotalTokens()} {isZh ? '兆字元' : 'MT'}</p>
              <p className="text-slate-600">{currentContent.totalTokensPerMonth}</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{isZh ? '¥' : '$'}{getTotalCost().toFixed(2)}</p>
              <p className="text-slate-600">{currentContent.totalMonthlyCost}</p>
            </div>

            {selectedPlans.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-700">{currentContent.selectedPlans}</h4>
                {selectedPlans.map(planId => {
                  const plan = currentPlans.find(p => p.id === planId)
                  return plan ? (
                    <div key={planId} className="flex justify-between text-sm">
                      <span className="text-slate-600">{plan.name}</span>
                      <span className="font-medium">{plan.price}</span>
                    </div>
                  ) : null
                })}
                {customTokens > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">{currentContent.customTokens} ({customTokens} {isZh ? '兆字元' : 'MT'})</span>
                    <span className="font-medium">{isZh ? '¥' : '$'}{(isZh ? customTokens * 10.8 : customTokens * 1.5).toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">{currentContent.costPerMT}</span>
                <span className="font-semibold">{isZh ? '¥10.8' : '$1.50'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">{currentContent.processingSpeed}</span>
                <span className="font-semibold">~200 {isZh ? '字元/秒' : 'T/s'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default UsagePlanner

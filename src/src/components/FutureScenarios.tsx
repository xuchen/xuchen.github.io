import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Users, TrendingUp, Lightbulb, Clock, Brain, ArrowRight } from 'lucide-react'

interface SocietalData {
  "1_TT_per_second_world": {
    population_served: string
    task_frequency: string
    implications: string[]
  }
}

interface FutureScenariosProps {
  data: SocietalData
  isZh?: boolean
}

const FutureScenarios: React.FC<FutureScenariosProps> = ({ data, isZh = false }) => {
  const [selectedScenario, setSelectedScenario] = useState(0)

  const content = {
    en: {
      the1TTsWorld: "The 1 TT/s World",
      populationServed: "Population Served",
      betweenComplexTasks: "Between Complex Tasks",
      globalProcessingPower: "Global Processing Power",
      futureScenariosExplorer: "Future Scenarios Explorer",
      scenarios: [
        {
          id: 'productivity',
          title: 'Productivity Revolution',
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-green-500 to-emerald-600',
          description: 'Massive increase in human productivity and output',
          details: [
            'Individual output matches institutional scale',
            'Complex projects completed in minutes instead of months',
            'Real-time translation and communication across all languages',
            'Instant expert-level analysis for any decision'
          ]
        },
        {
          id: 'workforce',
          title: 'Workforce Transformation',
          icon: <Users className="w-8 h-8" />,
          color: 'from-blue-500 to-cyan-600',
          description: '90% of white-collar jobs shift to AI supervision',
          details: [
            'Human role shifts from doing to directing',
            'Emphasis on creativity, strategy, and human connection',
            'New job categories emerge around AI management',
            'Universal basic education becomes AI collaboration skills'
          ]
        },
        {
          id: 'economics',
          title: 'Economic Restructuring',
          icon: <Globe className="w-8 h-8" />,
          color: 'from-purple-500 to-pink-600',
          description: 'GDP statistics become obsolete',
          details: [
            'Value shifts from labor hours to outcome quality',
            'Intellectual property becomes the primary currency',
            'Massive deflation in information-based services',
            'New metrics needed to measure economic progress'
          ]
        },
        {
          id: 'innovation',
          title: 'Innovation Acceleration',
          icon: <Lightbulb className="w-8 h-8" />,
          color: 'from-yellow-500 to-orange-600',
          description: 'Individual breakthroughs at institutional scale',
          details: [
            'Scientific research accelerated by 1000x',
            'Personalized solutions for every individual problem',
            'Real-time adaptation to changing conditions',
            'Democratization of expertise and innovation'
          ]
        }
      ],
      timelineImpact: "Timeline Impact",
      preparation: "Preparation",
      earlyChanges: "Early Changes",
      fullImpact: "Full Impact",
      journeyTo1TTs: "Journey to 1 TT/s",
      timelineEvents: [
        {
          year: '2025-2027',
          title: 'Foundation Phase',
          events: [
            'First 1 GT/s systems deployed',
            'Token pricing stabilizes around $1-2/MT',
            'Basic AI assistants become ubiquitous'
          ]
        },
        {
          year: '2028-2030',
          title: 'Acceleration Phase',
          events: [
            'Infrastructure scaling begins globally',
            'First token-native businesses emerge',
            'Traditional service industries start transformation'
          ]
        },
        {
          year: '2031-2035',
          title: 'Transformation Phase',
          events: [
            'Approach to 100 GT/s regional capabilities',
            'Workforce retraining programs at scale',
            'New economic indicators developed'
          ]
        },
        {
          year: '2036-2040',
          title: 'Token Epoch',
          events: [
            '1 TT/s global capability achieved',
            'Post-scarcity for information work',
            'Fundamental restructuring of society'
          ]
        }
      ],
      keyChallengesAhead: "Key Challenges Ahead",
      timeline: "Timeline",
      challenges: [
        {
          title: 'Infrastructure Challenge',
          description: 'Building unprecedented compute and energy infrastructure',
          impact: 'High',
          timeline: '10-15 years'
        },
        {
          title: 'Social Adaptation',
          description: 'Retraining workforce and adapting social systems',
          impact: 'Critical',
          timeline: '15-20 years'
        },
        {
          title: 'Economic Transition',
          description: 'Managing the transition from labor-based to token-based economy',
          impact: 'Critical',
          timeline: '10-20 years'
        },
        {
          title: 'Governance & Ethics',
          description: 'Developing frameworks for AI governance and fair access',
          impact: 'Critical',
          timeline: 'Ongoing'
        }
      ],
      preparingForTokenEpoch: "Preparing for the Token Epoch",
      callToActionText: "The transition to a 1 TT/s world represents the most significant technological and social transformation since the Industrial Revolution. How we prepare today will determine how smoothly we navigate this transition.",
      learnAICollaboration: "Learn AI Collaboration",
      learnAICollaborationDesc: "Develop skills for working with AI systems",
      investInInfrastructure: "Invest in Infrastructure",
      investInInfrastructureDesc: "Support development of token economy infrastructure",
      planForTransition: "Plan for Transition",
      planForTransitionDesc: "Prepare organizations and society for change"
    },
    zh: {
      the1TTsWorld: "1万亿字元/秒的世界",
      populationServed: "服务人口",
      betweenComplexTasks: "复杂任务间隔",
      globalProcessingPower: "全球处理能力",
      futureScenariosExplorer: "未来场景探索",
      scenarios: [
        {
          id: 'productivity',
          title: '生产力革命',
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-green-500 to-emerald-600',
          description: '人类生产力和产出的大幅提升',
          details: [
            '个人产出达到机构规模',
            '复杂项目从几个月缩短到几分钟完成',
            '跨语言实时翻译和沟通',
            '任何决策的即时专家级分析'
          ]
        },
        {
          id: 'workforce',
          title: '劳动力转型',
          icon: <Users className="w-8 h-8" />,
          color: 'from-blue-500 to-cyan-600',
          description: '90%的白领工作转向AI监督',
          details: [
            '人类角色从执行转向指导',
            '强调创造力、战略和人际关系',
            '围绕AI管理出现新的工作类别',
            '通用基础教育转为AI协作技能'
          ]
        },
        {
          id: 'economics',
          title: '经济重构',
          icon: <Globe className="w-8 h-8" />,
          color: 'from-purple-500 to-pink-600',
          description: 'GDP统计变得过时',
          details: [
            '价值从工时转向结果质量',
            '知识产权成为主要货币',
            '信息服务大规模通缩',
            '需要新指标衡量经济进步'
          ]
        },
        {
          id: 'innovation',
          title: '创新加速',
          icon: <Lightbulb className="w-8 h-8" />,
          color: 'from-yellow-500 to-orange-600',
          description: '个人突破达到机构规模',
          details: [
            '科学研究加速1000倍',
            '每个个人问题的个性化解决方案',
            '对变化条件的实时适应',
            '专业知识和创新的民主化'
          ]
        }
      ],
      timelineImpact: "时间线影响",
      preparation: "准备阶段",
      earlyChanges: "早期变化",
      fullImpact: "全面影响",
      journeyTo1TTs: "迈向1万亿字元/秒之路",
      timelineEvents: [
        {
          year: '2025-2027',
          title: '基础阶段',
          events: [
            '首批1千亿字元/秒系统部署',
            '字元定价稳定在7-14元/兆字元',
            '基础AI助手普及'
          ]
        },
        {
          year: '2028-2030',
          title: '加速阶段',
          events: [
            '全球基础设施扩展开始',
            '首批字元原生企业出现',
            '传统服务业开始转型'
          ]
        },
        {
          year: '2031-2035',
          title: '转型阶段',
          events: [
            '接近1000亿字元/秒区域能力',
            '大规模劳动力再培训项目',
            '新经济指标开发'
          ]
        },
        {
          year: '2036-2040',
          title: '字元纪元',
          events: [
            '实现1万亿字元/秒全球能力',
            '信息工作后稀缺时代',
            '社会根本性重构'
          ]
        }
      ],
      keyChallengesAhead: "关键挑战",
      timeline: "时间线",
      challenges: [
        {
          title: '基础设施挑战',
          description: '建设前所未有的计算和能源基础设施',
          impact: '高',
          timeline: '10-15年'
        },
        {
          title: '社会适应',
          description: '劳动力再培训和社会系统适应',
          impact: '关键',
          timeline: '15-20年'
        },
        {
          title: '经济转型',
          description: '管理从劳动为基础到字元为基础的经济转型',
          impact: '关键',
          timeline: '10-20年'
        },
        {
          title: '治理与伦理',
          description: '制定AI治理和公平访问框架',
          impact: '关键',
          timeline: '持续进行'
        }
      ],
      preparingForTokenEpoch: "为字元纪元做准备",
      callToActionText: "向1万亿字元/秒世界的转型代表着自工业革命以来最重要的技术和社会变革。我们今天的准备将决定我们如何顺利度过这一转型。",
      learnAICollaboration: "学习AI协作",
      learnAICollaborationDesc: "培养与AI系统协作的技能",
      investInInfrastructure: "投资基础设施",
      investInInfrastructureDesc: "支持字元经济基础设施发展",
      planForTransition: "规划转型",
      planForTransitionDesc: "为组织和社会变革做准备"
    }
  }

  const currentContent = isZh ? content.zh : content.en
  const scenarios = currentContent.scenarios
  const timelineEvents = currentContent.timelineEvents
  const challenges = currentContent.challenges

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* World Statistics */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-8">{currentContent.the1TTsWorld}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <p className="text-2xl font-bold text-cyan-400 mb-2">{data["1_TT_per_second_world"].population_served}</p>
            <p className="text-slate-300">{currentContent.populationServed}</p>
          </div>
          <div>
            <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-2xl font-bold text-green-400 mb-2">85 {isZh ? '秒' : 'seconds'}</p>
            <p className="text-slate-300">{currentContent.betweenComplexTasks}</p>
          </div>
          <div>
            <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-2xl font-bold text-purple-400 mb-2">1 {isZh ? '万亿字元/秒' : 'TT/s'}</p>
            <p className="text-slate-300">{currentContent.globalProcessingPower}</p>
          </div>
        </div>
      </motion.div>

      {/* Scenario Explorer */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">{currentContent.futureScenariosExplorer}</h3>
        
        {/* Scenario Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {scenarios.map((scenario, index) => (
            <motion.button
              key={scenario.id}
              onClick={() => setSelectedScenario(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedScenario === index
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${scenario.color} flex items-center justify-center mx-auto mb-4`}>
                <div className="text-white">
                  {scenario.icon}
                </div>
              </div>
              <h4 className="font-bold text-slate-800 mb-2">{scenario.title}</h4>
              <p className="text-sm text-slate-600">{scenario.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Scenario Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedScenario}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${scenarios[selectedScenario].color} flex items-center justify-center mr-4`}>
                    <div className="text-white">
                      {scenarios[selectedScenario].icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800">{scenarios[selectedScenario].title}</h4>
                    <p className="text-slate-600">{scenarios[selectedScenario].description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {scenarios[selectedScenario].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <ArrowRight className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h5 className="font-bold text-slate-800 mb-4">{currentContent.timelineImpact}</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Phase 1 (2025-2030)</span>
                    <span className="font-semibold text-orange-600">{currentContent.preparation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Phase 2 (2030-2035)</span>
                    <span className="font-semibold text-yellow-600">{currentContent.earlyChanges}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Phase 3 (2035-2040)</span>
                    <span className="font-semibold text-green-600">{currentContent.fullImpact}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">{currentContent.journeyTo1TTs}</h3>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-start"
            >
              <div className="w-4 h-4 bg-indigo-600 rounded-full mt-2 mr-6 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="text-lg font-bold text-slate-800 mr-4">{event.title}</h4>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>
                <ul className="space-y-1">
                  {event.events.map((item, eventIndex) => (
                    <li key={eventIndex} className="text-slate-600 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl p-8 border border-slate-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">{currentContent.keyChallengesAhead}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              className="p-6 bg-slate-50 rounded-xl"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-slate-800">{challenge.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  challenge.impact === 'Critical' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {challenge.impact}
                </span>
              </div>
              <p className="text-slate-600 mb-3">{challenge.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{currentContent.timeline}:</span>
                <span className="font-medium text-slate-700">{challenge.timeline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">{currentContent.preparingForTokenEpoch}</h3>
        <p className="text-slate-300 max-w-3xl mx-auto mb-6">
          {currentContent.callToActionText}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <Brain className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="font-semibold">{currentContent.learnAICollaboration}</p>
            <p className="text-sm text-slate-400">{currentContent.learnAICollaborationDesc}</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="font-semibold">{currentContent.investInInfrastructure}</p>
            <p className="text-sm text-slate-400">{currentContent.investInInfrastructureDesc}</p>
          </div>
          <div className="text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="font-semibold">{currentContent.planForTransition}</p>
            <p className="text-sm text-slate-400">{currentContent.planForTransitionDesc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FutureScenarios

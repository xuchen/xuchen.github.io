import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import InteractiveTimeline from './components/InteractiveTimeline'
import CostCalculator from './components/CostCalculator'
import TokenDashboard from './components/TokenDashboard'
import NetworkComparison from './components/NetworkComparison'
import InfrastructureScale from './components/InfrastructureScale'
import EnergyInfographic from './components/EnergyInfographic'
import UsagePlanner from './components/UsagePlanner'
import FutureScenarios from './components/FutureScenarios'
import ArticleContentZh from './components/ArticleContentZh'
import Navigation from './components/Navigation'
import './App.css'

interface AppData {
  timeline: any;
  token_systems: any;
  cost_comparisons: any;
  network_evolution: any;
  infrastructure: any;
  energy: any;
  usage_plans: any;
  societal_impact: any;
}

function TokenEpochAppZh() {
  const [data, setData] = useState<AppData | null>(null)
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load visualization data
    const loadData = async () => {
      try {
        const response = await fetch('/data/visualization_data.json')
        const visualizationData = await response.json()
        setData(visualizationData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading data:', error)
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-light"
        >
          正在加载 Token 纪元...
        </motion.div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">数据加载错误</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isZh={true} />
      
      <main className="relative">
        <section id="hero" className="min-h-screen">
          <HeroSection isZh={true} />
        </section>

        <section id="timeline" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              生产力单位的演进
            </h2>
            <InteractiveTimeline data={data.timeline} isZh={true} />
          </div>
        </section>

        <section id="calculator" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              传统 vs AI 成本计算器
            </h2>
            <CostCalculator data={data.cost_comparisons} isZh={true} />
          </div>
        </section>

        <section id="dashboard" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Token 经济仪表板
            </h2>
            <TokenDashboard data={data.token_systems} isZh={true} />
          </div>
        </section>

        <section id="network" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              网络演进：2G→5G vs 2T→5T
            </h2>
            <NetworkComparison data={data.network_evolution} isZh={true} />
          </div>
        </section>

        <section id="infrastructure" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              基础设施规模可视化
            </h2>
            <InfrastructureScale data={data.infrastructure} isZh={true} />
          </div>
        </section>

        <section id="energy" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              能源流动：从电力到智能
            </h2>
            <EnergyInfographic data={data.energy} isZh={true} />
          </div>
        </section>

        <section id="planner" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Token 使用规划器
            </h2>
            <UsagePlanner data={data.usage_plans} isZh={true} />
          </div>
        </section>

        <section id="future" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              未来场景探索器
            </h2>
            <FutureScenarios data={data.societal_impact} isZh={true} />
          </div>
        </section>

        <section id="article" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ArticleContentZh />
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Token 纪元</h3>
          <p className="text-slate-300 mb-4">
            智能社会的计量革命：从「马力」到「人天」再到「兆字元时」的认知革命
          </p>
          <p className="text-slate-400">
            作者：姚旭晨 • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TokenEpochAppZh

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
import ArticleContent from './components/ArticleContent'
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

function TokenEpochApp() {
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
          Loading The Token Epoch...
        </motion.div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Error loading data</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} isZh={false} />
      
      <main className="relative">
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="timeline" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Evolution of Productivity Units
            </h2>
            <InteractiveTimeline data={data.timeline} />
          </div>
        </section>

        <section id="calculator" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Traditional vs AI Cost Calculator
            </h2>
            <CostCalculator data={data.cost_comparisons} />
          </div>
        </section>

        <section id="dashboard" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Token Economy Dashboard
            </h2>
            <TokenDashboard data={data.token_systems} />
          </div>
        </section>

        <section id="network" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Network Evolution: 2G→5G vs 2T→5T
            </h2>
            <NetworkComparison data={data.network_evolution} />
          </div>
        </section>

        <section id="infrastructure" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Infrastructure Scale Visualization
            </h2>
            <InfrastructureScale data={data.infrastructure} />
          </div>
        </section>

        <section id="energy" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Energy Flow: From Electricity to Intelligence
            </h2>
            <EnergyInfographic data={data.energy} />
          </div>
        </section>

        <section id="planner" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Token Usage Planner
            </h2>
            <UsagePlanner data={data.usage_plans} />
          </div>
        </section>

        <section id="future" className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
              Future Scenarios Explorer
            </h2>
            <FutureScenarios data={data.societal_impact} />
          </div>
        </section>

        <section id="article" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ArticleContent />
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">The Token Epoch</h3>
          <p className="text-slate-300 mb-4">
            Rethinking Economics of AI Labor from Man-Days to Mega-Token-Hours
          </p>
          <p className="text-slate-400">
            By Xuchen Yao • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TokenEpochApp

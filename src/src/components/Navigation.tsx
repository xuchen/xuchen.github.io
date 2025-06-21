import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe, Home } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isZh?: boolean
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection, isZh = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const sections = isZh ? [
    { id: 'hero', label: '首页' },
    { id: 'timeline', label: '时间线' },
    { id: 'calculator', label: '计算器' },
    { id: 'dashboard', label: '仪表板' },
    { id: 'network', label: '网络' },
    { id: 'infrastructure', label: '基础设施' },
    { id: 'energy', label: '能源' },
    { id: 'planner', label: '规划器' },
    { id: 'future', label: '未来' },
    { id: 'article', label: '文章' }
  ] : [
    { id: 'hero', label: 'Home' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'network', label: 'Network' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'energy', label: 'Energy' },
    { id: 'planner', label: 'Planner' },
    { id: 'future', label: 'Future' },
    { id: 'article', label: 'Article' }
  ]

  const switchLanguage = () => {
    if (isZh) {
      navigate('/the-token-epoch')
    } else {
      navigate('/the-token-epoch/zh')
    }
  }

  const goToHomepage = () => {
    navigate('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold text-slate-800 cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={goToHomepage}
            title={isZh ? '返回首页' : 'Back to Homepage'}
          >
            {isZh ? 'Token 纪元' : 'The Token Epoch'}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {section.label}
              </motion.button>
            ))}
            
            {/* Language Switch Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sections.length * 0.1 }}
              onClick={switchLanguage}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200 hover:border-indigo-200"
            >
              <Globe size={16} className="mr-1" />
              {isZh ? 'EN' : '中文'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-indigo-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="py-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              
              {/* Mobile Language Switch Button */}
              <button
                onClick={() => {
                  switchLanguage()
                  setIsMenuOpen(false)
                }}
                className="flex items-center w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border-t border-slate-200 mt-2 pt-4"
              >
                <Globe size={16} className="mr-2" />
                {isZh ? 'Switch to English' : '切换到中文'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

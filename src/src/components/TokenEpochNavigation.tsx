import { Link, useLocation } from 'react-router-dom'
import { Home, Globe, ArrowLeft } from 'lucide-react'

interface TokenEpochNavigationProps {
  isZh?: boolean
}

const TokenEpochNavigation: React.FC<TokenEpochNavigationProps> = ({ isZh = false }) => {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Back to homepage */}
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <Home className="w-4 h-4 mr-2" />
              {isZh ? '返回首页' : 'Back to Homepage'}
            </Link>
          </div>

          {/* Center - Title */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-bold text-slate-800">
              {isZh ? 'Token 纪元' : 'The Token Epoch'}
            </h1>
          </div>

          {/* Right side - Language switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <Link
                to="/the-token-epoch"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  !isZh
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe className="w-4 h-4 mr-1" />
                EN
              </Link>
              <Link
                to="/the-token-epoch/zh"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isZh
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe className="w-4 h-4 mr-1" />
                中文
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TokenEpochNavigation

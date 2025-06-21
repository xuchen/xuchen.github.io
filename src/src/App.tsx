import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import TokenEpochApp from './TokenEpochApp'
import TokenEpochAppZh from './TokenEpochAppZh'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/the-token-epoch" element={<TokenEpochApp />} />
        <Route path="/the-token-epoch/zh" element={<TokenEpochAppZh />} />
      </Routes>
    </Router>
  )
}

export default App

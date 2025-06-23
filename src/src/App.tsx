import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Homepage from './components/Homepage'
import TokenEpochApp from './TokenEpochApp'
import TokenEpochAppZh from './TokenEpochAppZh'
import { useEffect } from 'react';
import './App.css'

<RedirectHandler />

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


function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return null;
}

// In your App component, render <RedirectHandler /> at the top
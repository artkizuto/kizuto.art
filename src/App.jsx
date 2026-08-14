import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Manga from './pages/Manga'
import Commission from './pages/Commission'
import About from './pages/About'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App

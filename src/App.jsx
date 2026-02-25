import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/gallery';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* The 'relative' class is crucial here so the 'fixed' Navbar 
         doesn't get lost and the Home content has a coordinate base.
      */}
      <div className=" min-h-screen w-full relative">
        <Navbar />
        
        <main className="relative z-10 bg-black/60 min-h-screen w-full"> 
          <Routes>
            {/* This ensures the Home page loads at http://localhost:5173/ */}
            <Route path="/" element={<Home />} />
            
            {/* This loads the About page at http://localhost:5173/about */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App

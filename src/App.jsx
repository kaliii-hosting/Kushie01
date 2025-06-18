import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomeAnimation from './components/WelcomeAnimation'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Wholesale from './pages/Wholesale'
import News from './pages/News'
import Batteries from './pages/Batteries'
import Merch from './pages/Merch'
// Main category pages
import Cartridges from './pages/Cartridges'
import Disposables from './pages/Disposables'
import Pods from './pages/Pods'
import Prerolls from './pages/Prerolls'
// Cartridge subcategories
import CartridgesDistillate from './pages/cartridges/Distillate'
import CartridgesLiquidDiamonds from './pages/cartridges/LiquidDiamonds'
import CartridgesDiamonds from './pages/cartridges/Diamonds'
// Disposable subcategories
import DisposablesDistillate from './pages/disposables/Distillate'
import DisposablesLiveResin from './pages/disposables/LiveResin'
import DisposablesDiamonds from './pages/disposables/Diamonds'
// Pod subcategories
import PodsDistillate from './pages/pods/Distillate'
import PodsLiveResin from './pages/pods/LiveResin'
import PodsDiamonds from './pages/pods/Diamonds'
// Preroll subcategories
import PrerollsHashInfused from './pages/prerolls/HashInfused'
import PrerollsInfused from './pages/prerolls/InfusedPrerolls'
import PrerollsRegular from './pages/prerolls/RegularPrerolls'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure minimum loading time of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleAnimationComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <WelcomeAnimation onAnimationComplete={handleAnimationComplete} />
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/news" element={<News />} />
          <Route path="/batteries" element={<Batteries />} />
          <Route path="/merch" element={<Merch />} />
          
          {/* Cartridges Routes */}
          <Route path="/cartridges" element={<Cartridges />} />
          <Route path="/cartridges/distillate" element={<CartridgesDistillate />} />
          <Route path="/cartridges/liquid-diamonds" element={<CartridgesLiquidDiamonds />} />
          <Route path="/cartridges/diamonds" element={<CartridgesDiamonds />} />
          
          {/* Disposables Routes */}
          <Route path="/disposables" element={<Disposables />} />
          <Route path="/disposables/distillate" element={<DisposablesDistillate />} />
          <Route path="/disposables/live-resin" element={<DisposablesLiveResin />} />
          <Route path="/disposables/diamonds" element={<DisposablesDiamonds />} />
          
          {/* Pods Routes */}
          <Route path="/pods" element={<Pods />} />
          <Route path="/pods/distillate" element={<PodsDistillate />} />
          <Route path="/pods/live-resin" element={<PodsLiveResin />} />
          <Route path="/pods/diamonds" element={<PodsDiamonds />} />
          
          {/* Prerolls Routes */}
          <Route path="/prerolls" element={<Prerolls />} />
          <Route path="/prerolls/hash-infused" element={<PrerollsHashInfused />} />
          <Route path="/prerolls/infused" element={<PrerollsInfused />} />
          <Route path="/prerolls/regular" element={<PrerollsRegular />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
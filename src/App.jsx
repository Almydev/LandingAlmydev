import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import Solution from './components/Solution/Solution'
import Transformation from './components/Transformation/Transformation'
import Capabilities from './components/Capabilities/Capabilities'
import Process from './components/Process/Process'
import Areas from './components/Areas/Areas'
import TechStack from './components/TechStack/TechStack'
import Philosophy from './components/Philosophy/Philosophy'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ConsentBanner from './components/ConsentBanner/ConsentBanner'
import LegalPage from './pages/legal/LegalPage'

function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Transformation />
        <Capabilities />
        <Process />
        <Areas />
        <TechStack />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  )
}

function Legal({ docKey }) {
  return (
    <>
      <Header />
      <LegalPage docKey={docKey} />
      <Footer />
      <ConsentBanner />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidad" element={<Legal docKey="privacy" />} />
        <Route path="/terminos" element={<Legal docKey="terms" />} />
        <Route path="/cookies" element={<Legal docKey="cookies" />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App

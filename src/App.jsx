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
import Footer from './components/Footer/Footer'

function App() {
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
      </main>
      <Footer />
    </>
  )
}

export default App

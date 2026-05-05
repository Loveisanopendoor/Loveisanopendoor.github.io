import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import International from './components/International'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <International />
      <Awards />
      <Contact />
    </div>
  )
}

export default App
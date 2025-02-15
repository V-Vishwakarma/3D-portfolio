import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import HackerRoom from './components/HackerRoom'
import AboutUs from './sections/AboutUs'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import ParticleCursor from './sections/ParticleCursor'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      {/* <ParticleCursor /> Render globally */}
      <Navbar />
      <Hero />
      <AboutUs />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
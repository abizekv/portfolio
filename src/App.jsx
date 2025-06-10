import './index.css'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import SecondaryNavbar from './SecondaryNavbar'
import DevCredit from './DevCredit'
import { useState } from 'react'
// Pages
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
function App() {
  const [activeTab, setActiveTab] = useState('projects')

  function selectTab(pageName) {
    setActiveTab(pageName)
  }
  return (
    <>
      <Navbar />
      <ProfileCard />
      <SecondaryNavbar
        selectTab={selectTab}
        activeTab={activeTab}
      />

      {activeTab === 'projects' && <Projects />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'about' && <About />}
      {activeTab === 'contact' && <Contact />}
      <DevCredit />
    </>
  )
}

export default App

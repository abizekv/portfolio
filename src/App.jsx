import './index.css'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import SecondaryNavbar from './SecondaryNavbar'
import { useState } from 'react'
// Pages
import Projects from './pages/Projects'
import Education from './pages/Education'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  const [activeTab, setActiveTab] = useState('projects')

  function selectTab(pageName){
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
      {activeTab === 'education' && <Education />}
      {activeTab === 'about' && <About />}
      {activeTab === 'contact' && <Contact />}
    </>
  )
}

export default App

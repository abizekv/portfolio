import { AiOutlineSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark-mode')
  },[isDarkMode])
  function toggleDarkMode(){
    setIsDarkMode(currMode => !currMode)
  }
  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo-group">
          <div className="nav-logo">
            AZ
          </div>
          <span className="nav-name">Abhishek V</span>
        </div>
        <button 
        className="dark-mode-toggler"
        onClick={toggleDarkMode}
        >
          
          {isDarkMode ? <AiOutlineSun /> : <AiFillMoon style={{color:"#404040"}}/>}
        </button>
      </nav>
    </header>
  )
}
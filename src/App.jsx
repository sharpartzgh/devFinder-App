import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import TheSearchBar from './components/TheSearchBar'

function App() {

  // Darkmode 
  const [darkMode, setDarkMode] = useState(false);
  //function to handle the darkmode
  const handleDarkMode = () => {
  setDarkMode(!darkMode)
  }
  
  return (
    <div className={`${darkMode ? 'bg-[#141D2F] text-white' : 'bg-[#F6F8FF]'} min-h-screen lg:w-[85%] lg:mx-auto py-20 px-5 flex flex-col items-center`}>
     <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
     <TheSearchBar darkMode={darkMode}/>
     <Card darkMode={darkMode}/>
    </div>
  )
}

export default App

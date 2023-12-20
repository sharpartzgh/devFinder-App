/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaMoon } from 'react-icons/fa6'
import { BsSun } from 'react-icons/bs'


const Header = ({handleDarkMode, darkMode}) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h1>devFinder</h1>
      </div>
      <div className='flex items-center gap-4'>
        {darkMode ? <h1>LIGHT</h1> : <h1>DARK</h1> }
          {darkMode ? <BsSun onClick={handleDarkMode} />  : <FaMoon onClick={handleDarkMode} />}
      </div>
    </div>
  )
}

export default Header

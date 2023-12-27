/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const TheSearchBar = ({darkMode, fetchUserData, error}) => {
  const [query, setQuery] = useState('')
  
  const handleSubmit = () => {
    if(!query){
      alert('Field is required')
    } else{
      fetchUserData(query)
      setQuery('')
    }
  }
 // 
  
  
  // 
  return (
    <div className={`${darkMode ? 'bg-[#1E2A47] ': 'bg-white '} py-2 px-2 mt-4 rounded-md shadow-md m-auto w-full`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <CiSearch className='text-[#0079FF] text-[24px]' />
            <input type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search GitHub username...' 
            className={`${darkMode ? 'bg-[#1E2A47] text-white': 'bg-white  text-[#222731]'} outline-none py-1 px-1`} />
          </div>
          <div>
            <span className="px-3 text-red-500">{}</span>
            <button 
            type='submit' 
            onClick={handleSubmit}
            className='bg-[#0079FF] text-[#fff] py-1 px-2 rounded hover:bg-[#60ABFF]'>Search</button>
          </div>
        </div>
    </div>
  )
}

export default TheSearchBar

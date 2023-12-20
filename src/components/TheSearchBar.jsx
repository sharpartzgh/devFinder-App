import React from 'react'
import { CiSearch } from "react-icons/ci";

const TheSearchBar = ({darkMode}) => {
  // 
  // 
  return (
    <div className={`${darkMode ? 'bg-[#1E2A47] ': 'bg-white '} py-2 px-2 mt-4 rounded-md shadow-md`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <CiSearch className='text-[#0079FF] text-[24px]' />
            <input type="text" placeholder='Search GitHub username...' className={`${darkMode ? 'bg-[#1E2A47] text-white': 'bg-white  text-[#222731]'} outline-none py-1 px-1`} />
          </div>
          <div>
            <button type='submit' className='bg-[#0079FF] text-[#fff] py-1 px-2 rounded hover:bg-[#60ABFF]'>Search</button>
          </div>
        </div>
    </div>
  )
}

export default TheSearchBar

/* eslint-disable react/prop-types */
import React from 'react'
import Oval from '../assets/Oval.png'

const Card = ({darkMode}) => {
  return (
    <div className={`${darkMode ? 'bg-[#1E2A47] ': 'bg-white '} py-2 px-2 mt-4 rounded-md shadow-md flex gap-5`}>
      <div>
        <img src={Oval} alt="user-image" />
      </div>
      <div className='w-full'>
        <div className='flex justify-between'>
          <div>
            <h1>
            The Octocat
            </h1>
          <p>@octacat</p>
          </div>
          <div>
            <p>Joined 25 Jan 2023</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card

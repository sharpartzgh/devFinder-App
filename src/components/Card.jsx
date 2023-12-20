/* eslint-disable react/prop-types */
import React from 'react'
import Oval from '../assets/Oval.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaLink } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const Card = ({darkMode}) => {
  return (
    <div className={`${darkMode ? 'bg-[#1E2A47] ': 'bg-white '} py-3 px-3 mt-4 rounded-md shadow-md flex gap-6 lg:w-[50%]`}>
      <div>
        <img src={Oval} alt="user-image" />
      </div>
      <div className='w-full flex flex-col gap-3'>
        <div className='flex justify-between'>
          <div>
            {/* User name and handle and date joined  */}
            <h1>
            Frederick
            </h1>
            <p>@sharpartzgh</p>
          </div>
          <div>
            <p>Joined 25 Jan 2023</p>
          </div>
        </div>
        {/* About Section */}
        <div className=' w-full text-[14px] text-wrap'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
        </div>
        <div className={`${darkMode ? 'bg-[#141D2F] ': 'bg-[#F6F8FF]'} flex justify-between  py-3 px-4 rounded text-[13px] ` } >
          {/* Page Stats Section */}
          <div>
            <h3>Repos</h3>
            <p>8</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>10K</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>0</p>
          </div>
        </div>
        {/* Contact section */}
      <div className='wrapper text-[13px] flex gap-20'>

          <div className='flex flex-col item-center justify-center gap-2'>

            <div className='flex gap-1 items-center'>
              <FaLocationDot/>
              <h3>Ghana</h3>
            </div>
            <div className='flex gap-1 items-center'>
              <FaLink/>
              <h3>https://github.com </h3>
            </div>
          </div>
          
          <div className='flex flex-col item-center justify-center gap-2'>
     
            <div className='flex gap-1 items-center'>
              <FaTwitter/>
              <h3>Sharpartzgh</h3>
            </div>
            <div className='flex gap-1 items-center'>
              <HiMiniBuildingOffice2/>
              <h3>@Azubi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

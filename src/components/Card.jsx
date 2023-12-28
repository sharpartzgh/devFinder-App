/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Oval from '../assets/Oval.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaLink } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { format } from 'date-fns'

const Card = ({darkMode, fetchUser}) => {
  return (
    
    <div className={`${darkMode ? 'bg-[#1E2A47] ': 'bg-white '} py-3 px-3 mt-4 rounded-md shadow-md flex gap-6 w-full`}>
      <div>
      {fetchUser ? (
          <img src={fetchUser.avatar_url} alt="user-image" className=' rounded-full h-[110px] w-[150px]' />) : 
          (<img src={Oval} alt="default-user-image" />)}
      </div>
      <div className='w-full flex flex-col gap-3'>
        <div className='flex justify-between'>
          <div>
            {/* User name, handle and date joined  */}
              { fetchUser ? 
               (<h1>{fetchUser.name}</h1>) : (<h1>The Octacat</h1>)
              }
              {fetchUser?
              (<p>@{fetchUser.login}</p>) : (<p>@octacat</p>)
            }
            {/* Perhaps you might be using the code below but not the above well am using the above just to prevent using my static data when no search is done. honestly there might be some other way round which i dont know yet but since this is working for me just enjoy */}

            {/* <p>@{fetchUser?.login === null ? 'octacat' : fetchUser.login}</p> */}
          </div>
          <div>
          {fetchUser ? (
              <p>Joined {format(new Date(fetchUser.created_at), 'd MMM yyy')}</p>) : 
              (<p>Joined 25 Jan 2023</p>)}
          </div>
        </div>
        {/* About Section */}
        <div className=' w-full text-[14px] text-wrap'>
        {fetchUser ? 
           ( <p>{fetchUser?.bio}</p>) : ( <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>)  
          } 
        </div>
        <div className={`${darkMode ? 'bg-[#141D2F] ': 'bg-[#F6F8FF]'} flex justify-between  py-3 px-4 rounded text-[13px] ` } >
          {/* Page Stats Section */}
          <div>
            <h3>Repos</h3>
            {fetchUser ? 
           ( <p>{fetchUser?.public_repos}</p>) : ( <p>8</p>)  
          }
          </div>
          <div>
            <h3>Followers</h3>
            {fetchUser ? 
           ( <p>{fetchUser?.followers}</p>) : ( <p>3938</p>)  
          }
          </div>
          <div>
            <h3>Following</h3>
            {fetchUser ? 
           ( <p>{fetchUser?.following}</p>) : ( <p>9</p>)  
          }
          </div>
        </div>

        {/* Contact section */}
        
      <div className='wrapper text-[13px] flex gap-20'>

          <div className='flex flex-col item-center justify-center gap-2'>

            <div className='flex gap-1 items-center'>
              <FaLocationDot/>
              {fetchUser ? 
           ( <p>{fetchUser?.location}</p>) : ( <p>San Francisco</p>)  
          }
            </div>
            
            <div className='flex gap-1 items-center'>
              <FaLink/>
              {fetchUser ? 
           ( <p>{fetchUser?.blog}</p>) : ( <p>https://github.blog</p>)  
          }
            </div>
          </div>
          
          <div className='flex flex-col item-center justify-center gap-2'>
            <div className='flex gap-1 items-center'>
              <FaTwitter/>
              {fetchUser ? 
           ( <p>{fetchUser?.twitter_username}</p>) : ( <p>Not Available</p>)  
          }
            </div>
            <div className='flex gap-1 items-center'>
              <HiMiniBuildingOffice2/>
              {fetchUser ? 
           ( <p>{fetchUser?.company}</p>) : ( <p>github</p>)  
          }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

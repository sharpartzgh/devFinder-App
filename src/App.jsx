/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import TheSearchBar from './components/TheSearchBar'
import axios from 'axios'

function App() {

  // Darkmode 
  const [darkMode, setDarkMode] = useState(false);
  //function to handle the darkmode
  const handleDarkMode = () => {
  setDarkMode(!darkMode)
  }

// fetching data using axios and asynchronus function
const [getUser, setGetUser] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const fetchUserData = async (getUser) => { 
  try {
      setLoading(true) // this right here engages the user that hey there is some data loading so wait small lol
      const response = await axios.get(`https://api.github.com/users/${getUser}`, {
        headers:{
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      });

      console.log("Response Headers:", response.headers);
      console.log("Status Code:", response.status);
      
      // so after the data fetch is done where do we store it and use it? let us create a variable to hold
      const data = await response.data
      console.log(data);
      // now that we have the data lets set the setLoading to false so we can use the fetched data
      setLoading(false)
      setGetUser(data) // now we have assigned the entire fetched data to the useState setgetUser
      setError(null) // Clear the error when a successful search is made

  } catch (err) {
      console.error(err);
      setError('No results', err) // just incase something happens we use this right here to handle it
  }
}


  return (
    <div className={`${darkMode ? 'bg-[#141D2F] text-white' : 'bg-[#F6F8FF]'} w-[100%] h-screen `}>
      <div className={`${darkMode ? 'bg-[#141D2F] text-white' : 'bg-[#F6F8FF]'} sm:w-[46%] md:w-[60%] lg:w-[50%] pt-5 px-5 flex flex-col items-center m-auto`}>
     <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
     <TheSearchBar darkMode={darkMode} fetchUserData={fetchUserData} error={error} fetchUser={getUser} key={fetchUserData.login || error} />
     <Card darkMode={darkMode} fetchUser={getUser}/>
     </div>
    </div>
  )
}

export default App
